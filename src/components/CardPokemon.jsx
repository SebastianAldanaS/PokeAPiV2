import React from 'react'
import { Link } from 'react-router-dom'

export const CardPokemon = ({ pokemon }) => {
  return (

    <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
      <div className="card-img">
        <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
      </div>

      <div className="card-info">
        <span className="pokemon-id">#{pokemon.id}</span>
        <h2>{pokemon.name}</h2>
        <div className="card-types">
          {pokemon.types.map(type => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
