import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { syntheticData } from './sampleData';

interface DataType {
  key: React.Key;
  country: string;
  state: string;
  city: string;
  title: string;
  description: string;
}

interface FilterType {
  text: string;
  value: string;
}

const FilterTable: React.FC = () => {
 /* @title - column name
    @dataIndex - which propety want to target */
  const columns: ColumnsType<DataType> = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Countries',
      dataIndex: 'country',
      filters: [...new Set(syntheticData.map((sData) => sData.country))].map(item => ({text: item, value: item})),
      filterSearch: true,
      onFilter: (value, record) => record.country.indexOf(value as string) === 0,
      width: '30%',
    },
    {
      title: 'States',
      dataIndex: 'state',
      filters: [...new Set(syntheticData.map((sData) => sData.state))].map(item => ({text: item, value: item})),
      filterSearch: true,
      onFilter: (value, record) => record.state.indexOf(value as string) === 0,
    },
    {
      title: 'Cities',
      dataIndex: 'city',
      filters: [...new Set(syntheticData.map((sData) => sData.city))].map(item => ({text: item, value: item})),
      filterSearch: true,
      onFilter: (value, record) => record.city.indexOf(value as string) === 0,
    },
  ];
  
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return <Table columns={columns} dataSource={syntheticData} scroll={{x: true}} onChange={onChange} />
};

export default FilterTable;