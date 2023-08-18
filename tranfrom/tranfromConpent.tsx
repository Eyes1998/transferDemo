import React, { useState } from 'react';

interface Item {
  id: number;
  label: string;
}

interface TransferBoxProps {
  data: Item[];
}

const TransferBox: React.FC<TransferBoxProps> = ({ data }) => {
  const [leftItems, setLeftItems] = useState<Item[]>(data);
  const [rightItems, setRightItems] = useState<Item[]>([]);

  const moveToLeft = (item: Item) => {
    setRightItems(rightItems.filter((i) => i.id !== item.id));
    setLeftItems([...leftItems, item]);
  };

  const moveToRight = (item: Item) => {
    setLeftItems(leftItems.filter((i) => i.id !== item.id));
    setRightItems([...rightItems, item]);
  };

  return (
    <div style={{width:"300px",display:'flex',flexWrap:'nowrap',justifyContent:"space-between",alignItems:"center"}}>
      <div style={{height:"200px",width:"50%"}}>
        <h2>左侧列表</h2>
        <ul>
          {leftItems.map((item) => (
            <li key={item.id}>
              {item.label}
              <button onClick={() => moveToRight(item)}>添加</button>
            </li>
          ))}
        </ul>
      </div>
      <div style={{height:"200px",width:"50%"}}>
        <h2>右侧列表</h2>
        <ul>
          {rightItems.map((item) => (
            <li key={item.id}>
              {item.label}
              <button onClick={() => moveToLeft(item)}>移除</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransferBox;
