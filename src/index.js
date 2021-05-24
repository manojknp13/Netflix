import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./style.css";
import Sdata from "./Sdata";


// console.log(Sdata);

function ncard(val){
  return(
    <Card 
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
/>
  );
}

ReactDOM.render(
<>
<h1 className="heading_style">List of Top 5 Netflix Series</h1>
{Sdata.map(ncard)}

</>
,document.getElementById('root')
);