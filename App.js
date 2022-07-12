import React, { useState, useCallback, useMemo } from 'react';

import Button from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';
import './App.css';

import './App.css';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [assendingOrder, setAssendingOrder] = useState(false)

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');

  }, []);

  const changeOrderHandler = useCallback(() => {
    console.log("hello")
    setAssendingOrder((assendingOrder) => !assendingOrder)
  }, []);


  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className="app">
      <DemoList orderDefined={assendingOrder} title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>
        {!assendingOrder && 'Change To Desending Order'}
        {assendingOrder && 'Change To asending Order'}
      </Button>
    </div>
  );
}

export default App;
