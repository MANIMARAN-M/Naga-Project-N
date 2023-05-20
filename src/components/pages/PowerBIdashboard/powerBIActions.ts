import axios from "axios";

// https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
// https://www.oauth.com/oauth2-servers/access-tokens/access-token-response/
export const generateAccessToken = (setAccessToken: React.Dispatch<React.SetStateAction<string>>) => {
  const config: any = {
    "grant_type": "password",
    "resource": "https://analysis.windows.net/powerbi/api",
    "username": "USER_NAME",
    "password": "PASSWORD",
    "client_id": "CLIENT_ID"
  }
  let formBody = [];
  for (const property in config) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(config[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&") as any;
  const url = 'https://login.windows.net/common/oauth2/token/';
  axios({
    method: 'POST',
    url: url,
    data: formBody
  })
    .then((response) => {
      setAccessToken(response.data.access_token);
    })
    .catch((err) => {
      console.error(err);
    });
}

// https://learn.microsoft.com/en-us/rest/api/power-bi/reports/get-report
export const generateEmbedURL = async (reportId: string, token: string, setReportDetails: React.Dispatch<React.SetStateAction<any>>) => {
  const response = await axios(`https://api.powerbi.com/v1.0/myorg/reports/${reportId}`, {
    method: 'GET',
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  setReportDetails(response ? response : "");
  return response ? response : "";
}


// The API is asynchronous. When the API is called, it triggers an export job. 
// After triggering an export job, use GetExportToFileStatus API to track the job status. Read more about the entire flow: Export Power BI reports and Export Paginated reports
// https://learn.microsoft.com/en-us/rest/api/power-bi/reports/export-to-file
export const startDownload = async (reportId: string, token: string, type: string) => {
  const response = await axios(`https://api.powerbi.com/v1.0/myorg/reports/${reportId}/ExportTo`, {
    method: 'POST',
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    data: {
      // Exports the specified report from My workspace to the requested file format.
      // https://learn.microsoft.com/en-us/rest/api/power-bi/reports/export-to-file#fileformat
      format: type
    }
  })
    .then(async (response) => {
      await getDownloadStatus(reportId, token, response.data.id, type);
      return response.data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  return response ? response : "";
}

// Returns the current status of the Export to File job for the specified report from My workspace.
// When the export job status is 'Succeeded' use the GetFileOfExportToFile API to retrieve the file.
// https://learn.microsoft.com/en-us/rest/api/power-bi/reports/get-export-to-file-status
export const getDownloadStatus = async (reportId: string, token: string, exportId: string, type: string) => {
  const response = await axios(`https://api.powerbi.com/v1.0/myorg/reports/${reportId}/exports/${exportId}`, {
    method: 'GET',
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(async (response) => {
      console.log(response.data.percentComplete);
      if(response.data.percentComplete === 100) {
        await getReportFile(reportId, token, exportId, type);
      } else {
        await getDownloadStatus(reportId, token, exportId, type);
      }
      return response.data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  return response ? response : "";
}

// Returns the file from the Export to File job for the specified report from My workspace.
// https://learn.microsoft.com/en-us/rest/api/power-bi/reports/get-file-of-export-to-file
export const getReportFile = async (reportId: string, token: string, exportId: string, type: string) => {
  const response = await axios(`https://api.powerbi.com/v1.0/myorg/reports/${reportId}/exports/${exportId}/file`, {
    method: 'GET',
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    responseType: 'blob'
  })
    .then((response) => {
      // Extract the file name from the response headers
      const contentDisposition = response.headers['content-disposition'];
      const fileNameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = fileNameRegex.exec(contentDisposition);
      const fileName = matches !== null && matches[1] ? matches[1].replace(/['"]/g, '') : `report.${type}`;

      const downloadUrl = URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;
      link.click();

      URL.revokeObjectURL(downloadUrl);
      return response.data;
    })
    .catch((error) => {
      console.error('Error downloading report:', error);
    });
  return response ? response : "";
}