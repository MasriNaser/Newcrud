// @flow
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

type Props = {
  i: Object,
  onDelete: (id: number) => void,
  style?: Object
};

export default function GameCard({ i, onDelete, style }: Props) {
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
            <div className='header right floated' style={style}>
              {i.title}
            </div>
            <div className='meta' style={style}>
              {i.username}
            </div>
          </div>
          <div className='extra content'>
            <div className='ui two buttons'>
              <Link to={`/game/${i.id}`} className='ui basic green button'>
                Edit
              </Link>
              <Button
                className='ui basic red button'
                onClick={() => onDelete(i.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
