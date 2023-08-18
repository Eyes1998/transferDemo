import React from 'react';
import TransferBox from './tranfromConpent'

const Index: React.FC = () => {
  const data = [
    { id: 1, label: '选项一' },
    { id: 2, label: '选项二' },
    { id: 3, label: '选项三' },
    { id: 4, label: '选项四' },
    { id: 5, label: '选项五' },
    { id: 6, label: '选项六' },
  ];

  return (
    <div className="app">
      <h1>简易穿梭框示例</h1>
      <TransferBox data={data} />
    </div>
  );
};

export default Index;
