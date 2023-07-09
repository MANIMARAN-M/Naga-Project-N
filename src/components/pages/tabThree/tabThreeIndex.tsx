import React, { useState } from 'react'
// import { Tab, Tabs } from 'react-bootstrap'
import { Button, Form, Input, Select, Tabs, Typography } from 'antd';
import type { TabsProps } from 'antd';
import Project from './project';

const { Text, Title } = Typography;

const TabThree = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Project`,
      children: <Project />,
    },
    {
      key: '2',
      label: `Problem`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <section className='projectActions'>
      <div className='mb-2'>
        <Title level={3}><strong>Tab Three</strong></Title>
      </div>
      {/* <Tabs
        defaultActiveKey="Project"
        className="my-3"
      >
        <Tab eventKey="Project" title="Project">
          <div>
            <select className="form-select" value={selectedProject} onChange={e => projectChangeHandler(e.target.value)}>
              <option hidden>Select Project</option>
              {
                ["Add", "Edit", "Delete"].map((data, index) => (
                  <option value={data} key={index}>{data}</option>
                ))
              }
            </select>
          </div>
        </Tab>
        <Tab eventKey="About" title="About">
          <div>
            <h4>About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nisi culpa debitis at hic harum nobis molestiae ad impedit non quia in exercitationem nostrum, voluptate eaque quod veniam dolorum enim?</p>
          </div>
        </Tab>
      </Tabs> */}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </section>
  )
}

export default TabThree