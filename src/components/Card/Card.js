import React from 'react';
import './Card.css';

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
      <div className='cardInfo'></div>
        <div className='cardData'>
          <p className='title'>重さ:{pokemon.weight}</p>
        </div>
        <div className='cardData'>
          <p className='title'>高さ:{pokemon.height}</p>
        </div>
        <div className='cardData'>
          <p className='title'>種族値</p>
          <table>
            <tbody>
              {pokemon.stats.map((stat) => (
                <tr key={stat.stat.name}>
                  <td>{stat.stat.name}</td>
                  <td>{stat.base_stat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      );
    };

export default Card;