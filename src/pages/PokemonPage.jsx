import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { Loader } from '../components'
import { useParams } from 'react-router-dom'

export const PokemonPage = () => {
  const {getPokemonById} = useContext(PokemonContext)

  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState(null)

  const {id} = useParams()

  const fetchPokemon = async (id) => {
    const data = await getPokemonById(id)
    setPokemon(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPokemon(id)
  }, [])

  return (
    <main className='container main-pokemon'>
      {loading ? (
        <Loader />
      ) : (
        <>
        <div className="header-main-pokemon">
            <span className="id-pokemon">#{pokemon.id}</span>
            <div className="container-img-pokemon">
                <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
            </div>
            <div className="container-info-pokemon">
                <h1>{pokemon.name}</h1>
                <div className="card-types">
                    {pokemon.types.map(type => (
                      <span key={type.type.name} className={type.type.name}>{type.type.name}</span>
                    ))}
                </div>
                <div className="group-info">
                    <div className="info-pokemon">
                        <p>Altura</p>
                        <span>{pokemon.height / 10} m</span>
                    </div>
                    <div className="info-pokemon">
                        <p>Peso</p>
                        <span>{pokemon.weight / 10} kg</span>
                    </div>
                    <div className="info-pokemon">
                        <p>Experiencia base</p>
                        <span>{pokemon.base_experience}</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-stats">
            <h1>Estadísticas</h1>
            <div className="stats">
                {pokemon.stats.map(stat => (
                  <div key={stat.stat.name} className="stat-group">
                    <span>{stat.stat.name}</span>
                    <div className="progress-bar" ></div>
                    <span className="counter-stat">{stat.base_stat}</span>
                  </div>
                ))}
            </div>
        </div>
        </>
      )}
    </main>
  )
}
