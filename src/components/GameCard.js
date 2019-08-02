import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function GameCard({ i, onDelete }) {
  return (
    <Fragment>
      <div className='ui card'>
        <div className='card'>
          <div className='content'>
            <img
              className='right floated large ui image'
              src={i.logoUrl}
              alt='Game Cover'
            />
            <div className='header right floated mg:2'>{i.title}</div>
            <div className='meta'>{i.username}</div>
          </div>
          <div className='extra content'>
            <div className='ui two buttons'>
              <Link to={`/game/${i.id}`} className='ui basic green button'>
                Edit
              </Link>
              <div className='ui basic red button' onClick={() => onDelete(i.id)}>Delete</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
