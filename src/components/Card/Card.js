import React from 'react';

const Card = ({pokemon}) => {
  return (
    <div className='card'>
      <div className='cardImg'>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}>
        </img>
      </div>
      <h3 className='cardName'>
        {pokemon.name}
      </h3>
      <div className='cardTypes'>
        タイプ: {pokemon.types.map((type) => type.type.name).join(' / ')}
      </div>
      <div className='cardInfo'>
        <div className='cardData'>
          <p className='title'>重さ:{pokemon.weight}</p>
        </div>
        <div className='cardData'>
          <p className='title'>高さ:{pokemon.height}</p>
        </div>
        <div className='cardData'>
          {pokemon.abilities.map((ability) => {
            return (
              <div className='cardData'>
                <p className='title'>{ability.is_hidden ? '夢特性: ' : '特性: '}{ability.ability.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
    };

export default Card;