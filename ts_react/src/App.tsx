import { useState } from 'react';
import './App.css'
import Sales from './sales';
import type { SalesData } from './utils/salesData';
import HotStore from './HotStore';

let data : SalesData = {
  name: "iPhone",
  category: "Mobile",
  specs: {
    capaciy: 128,
    color: "Black",
    weight: 150,
  },
  sales: [
    { store: "A", price: 10000 },
    { store: "B", price: 15000 },
    
  ]
};

const App = () => {
  const [salesData, setSalesData] = useState<SalesData>(data);
  const changeData = () => {
    setSalesData({...salesData})
  }
  return (
    <div>
      <Sales data={data} changeData={changeData} />
      <HotStore store="A" price={20000} address = "Gasan"/>
    </div>
  )
}

export default App
