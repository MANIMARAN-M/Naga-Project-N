import React, { useEffect, useState } from 'react';
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import { generateAccessToken, generateEmbedURL, startDownload } from './powerBIActions';
import { Button, Dropdown, MenuProps } from 'antd';

declare global {
  interface Window { report: any; }
}

const PowerBIReports = () => {
  const [accessToken, setAccessToken] = useState("");
  // give your report ID here
  const [reportId, setReportId] = useState("");
  const [reportDetails, setReportDetails] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloadEnabled, setIsDownloadEnabled] = useState(false);

  useEffect(() => {
    generateAccessToken(setAccessToken);
  }, [])

  useEffect(() => {
    accessToken !== "" && generateEmbedURL(reportId, accessToken, setReportDetails);
  }, [accessToken])



  const handleDownloadVisual = async (type: string) => {
    try {
      setIsLoading(true);
      await startDownload(reportId, accessToken, type);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error downloading report:', error);
    }
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <Button onClick={() => handleDownloadVisual('pdf')} disabled={isLoading}>
          Export PDF
        </Button>
      ),
      key: '1',
    },
    {
      label: (
        <Button onClick={() => handleDownloadVisual('pptx')} disabled={isLoading}>
          Export PPTX
        </Button>
      ),
      key: '2',
    },
  ];

  return (
    <section style={{ height: "100vh" }}>
      <div className='d-flex justify-content-end mb-4'>
        <div>
          {isDownloadEnabled && <Dropdown.Button type="primary" loading={isLoading} menu={{ items }} onClick={() => handleDownloadVisual('pdf')}>
            Export Report
          </Dropdown.Button>}
        </div>
      </div>
      {reportDetails && reportId ? <>
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: reportId ? reportId.toLowerCase() : "",
            embedUrl: reportDetails ? reportDetails.embedUrl : '',
            accessToken: accessToken,
            tokenType: models.TokenType.Aad,
            settings: {
              filterPaneEnabled: true,
              navContentPaneEnabled: true,
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                },
                pageNavigation: {
                  visible: true,
                  position: models.PageNavigationPosition.Left,
                }
              },
            }
          }}
          cssClassName={"report-style-class h-100"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
            window.report.on("loaded", () => {
              setIsDownloadEnabled(true);
            });
          }}
        />
      </> : "No Report"}
    </section>
  )
}

export default PowerBIReports