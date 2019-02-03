import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  return (
    <div>
      {
        robots.map((user, index) => {
          return (
            <Card
              key={robots[index].id}
              id={robots[index].id}
              name={[robots[index].name]}
              email={robots[index].email}
            />
          )
        })
      }
    </div>
  );
}

export default CardList;
