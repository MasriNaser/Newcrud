// @flow
import React from 'react';
import GameCard from './GameCard';

type Props ={
  items: [],
  onDelete: (id: number)=> void
}
function GamesList({ items,onDelete }: Props) {
  const emptyMessage = <p>no games</p>;
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
