import React from 'react';
import GameCard from './GameCard';

function GamesList({ items,onDelete }) {
  const emptyMessage = <p>no games</p>;
  // let id = items.map((i,index)=>{
  //   return index
  // })
  const itemsList = (
    <div className='ui four cards'>
      {items.map((i,index) => (
        <GameCard key={index} i={i} onDelete={onDelete}/>
      ))}
    </div>
  );

  return <div>{items.length !== 0 ? itemsList : emptyMessage}</div>;
}

export default GamesList;
