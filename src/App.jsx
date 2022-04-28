import React from 'react';

import Hotstar from './Hotstar';

import Sony from './Sony';

const favSeries='sony';
// const FavS=()=>{

// if (favSeries === 'hotstar')
// {
//    return <Hotstar/>
// }
// else{
//     return <Sony/>
// }
// }

const App=()=>(
<>

<h1 className='heading_style'> My Favourite Playlist</h1>

   {(favSeries==='hotstar')?  <Hotstar/>: <Sony/>}
</>
);

export default App;