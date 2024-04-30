import React from 'react';
import './Card.css';

const Card = ({pokemon}) => {
  const abilities = pokemon.abilities.reduce((acc, ability) => {
    const key = ability.is_hidden ? 'hidden' : 'regular';
    acc[key] = acc[key] ? `${acc[key]} / ${ability.ability.name}` : ability.ability.name;
    return acc;
  }, {});

  return (
    <div className='card'>
      <div className='cardImg'>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h3 className='cardName'>
        {pokemon.name}
      </h3>
      <div className='cardTypes'>
        タイプ: {pokemon.types.map((type) => type.type.name).join(' / ')}
      </div>
      <div className='cardInfo'></div>
      <div className='cardData'>
        <p className='title'>重さ/ 高さ : {pokemon.weight} g / {pokemon.height} m</p>
      </div>
      <div className='cardData'>
        {abilities.regular && <p className='title'>特性: {abilities.regular}</p>}
        {abilities.hidden && <p className='title'>夢特性: {abilities.hidden}</p>}
      </div>
      <div className='cardData'>
        <p className='title'>種族値</p>
        <table className='cardTable'>
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