import React, { useState } from 'react'
// import { Tab, Tabs } from 'react-bootstrap'
import { Button, Form, Input, Select, Tabs, Typography } from 'antd';
import type { TabsProps } from 'antd';

const { Text, Title } = Typography;

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<null | string>(null);
  const [selectedAction, setSelectedAction] = useState<null | string>(null);
  const [isEditViewActive, setIsEditViewActive] = useState(false);
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    other1: "",
    other2: "",
    other3: ""
  });

  const actionChangeHandler = (value: string) => {
    setSelectedAction(value);
  }

  const projectChangeHandler = (value: string) => {
    setSelectedProject(value);
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const inputChangeHandler = (value: string, name: string) => {
    setProjectData({
      ...projectData,
      name: name === "username" ? value : projectData.name,
      description: name === "description" ? value : projectData.description,
      other1: name === "other1" ? value : projectData.other1,
      other2: name === "other2" ? value : projectData.other2,
      other3: name === "other3" ? value : projectData.other3
    })
  }
  return (
    <div>
      <Title level={5}>Select Action</Title>
      <div className='mt-2'>
        <Select
          // defaultValue="lucy"
          placeholder="Select action"
          style={{ width: 160 }}
          onChange={actionChangeHandler}
          className='custom_select'
          value={selectedAction}
          options={[
            { value: 'Add', label: 'Add' },
            { value: 'Edit', label: 'Edit' },
            { value: 'Delete', label: 'Delete' }
          ]}
        />
      </div>
      {selectedAction === "Add" && <div className='mt-4'>
        <Title level={4}>Create a new project</Title>
        <Form
          className='mt-3'
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          // layout='vertical'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Form.Item
            label="Project Name"
            name="username"
          // rules={[{ required: false, message: 'Please enter project name!' }]}
          >
            <Input placeholder='Please enter project name' value={projectData.name} onChange={(e) => inputChangeHandler(e.target.value, "username")} />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
          >
            <Input placeholder='Please enter project description' value={projectData.description} onChange={(e) => inputChangeHandler(e.target.value, "description")} />
          </Form.Item>

          <Form.Item
            label="Some Title"
            name="other1"
          >
            <Input placeholder='Please enter project description' value={projectData.other1} onChange={(e) => inputChangeHandler(e.target.value, "other1")} />
          </Form.Item>
          <Form.Item
            label="Some Title"
            name="other2"
          >
            <Input placeholder='Please enter project description' value={projectData.other2} onChange={(e) => inputChangeHandler(e.target.value, "other2")} />
          </Form.Item>
          <Form.Item
            label="Some Title"
            name="other3"
          >
            <Input placeholder='Please enter project description' value={projectData.other3} onChange={(e) => inputChangeHandler(e.target.value, "other3")} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>}

      {selectedAction === "Edit" && <div className='mt-4'>
        <div>
          <div className='mt-2 mb-3'>
            <Title level={5}>Select Project</Title>
            <Select
              // defaultValue="lucy"
              showSearch
              placeholder="Select project"
              style={{ width: 160 }}
              onChange={projectChangeHandler}
              className='custom_select'
              value={selectedProject}
              options={[
                { value: 'project1', label: 'Project1' },
                { value: 'project2', label: 'Project2' },
                { value: 'project3', label: 'Project3' }
              ]}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
            />
            {/* <Button className='ms-3' type="primary" onClick={getProjectHandler}>Get Project Data</Button> */}
          </div>
          {selectedProject && <div>
            <Title level={4}>Edit project</Title>
            <Form
              className='mt-3'
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              // layout='vertical'
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
            >
              <Form.Item
                label="Project Name"
                name="username"
              // rules={[{ required: false, message: 'Please enter project name!' }]}
              >
                <Input placeholder='Please enter project name' value={projectData.name} onChange={(e) => inputChangeHandler(e.target.value, "username")} />
              </Form.Item>

              <Form.Item
                label="Description"
                name="description"
              >
                <Input placeholder='Please enter project description' value={projectData.description} onChange={(e) => inputChangeHandler(e.target.value, "description")} />
              </Form.Item>

              <Form.Item
                label="Some Title"
                name="other1"
              >
                <Input placeholder='Please enter project description' value={projectData.other1} onChange={(e) => inputChangeHandler(e.target.value, "other1")} />
              </Form.Item>
              <Form.Item
                label="Some Title"
                name="other2"
              >
                <Input placeholder='Please enter project description' value={projectData.other2} onChange={(e) => inputChangeHandler(e.target.value, "other2")} />
              </Form.Item>
              <Form.Item
                label="Some Title"
                name="other3"
              >
                <Input placeholder='Please enter project description' value={projectData.other3} onChange={(e) => inputChangeHandler(e.target.value, "other3")} />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>}
        </div>
      </div>}

      {selectedAction === "Delete" && <div className='mt-4'>
      <div className='mt-2 mb-3'>
            <Title level={5}>Select Project</Title>
            <Select
              // defaultValue="lucy"
              showSearch
              placeholder="Select project"
              style={{ width: 160 }}
              onChange={projectChangeHandler}
              className='custom_select'
              value={selectedProject}
              options={[
                { value: 'project1', label: 'Project1' },
                { value: 'project2', label: 'Project2' },
                { value: 'project3', label: 'Project3' }
              ]}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
            />
            <Button className='ms-3' type="primary">Delete Project</Button>
          </div>
        </div>}
    </div>
  )
}

export default Project