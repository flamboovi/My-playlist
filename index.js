import React from 'react';
import  ReactDOM  from 'react-dom';
import Card from './Card'
import './index.css'
import Sdata from './Sdata'
 
// function nCard(val){
// return(
// <Card
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}/>
// )
// }

ReactDOM.render(
<>

<h1 className='heading_style'> My Favourite Playlist</h1>

    {Sdata.map((val)=>{
        return(
            <Card
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}/>
        );
    })}
</>,document.getElementById('root'));
