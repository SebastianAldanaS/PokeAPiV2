import React,{useContext} from 'react'
import { PokemonContext } from '../context/PokemonContext'

export const FilterBar = () => {

  const active = useContext(PokemonContext)
  return (
    <div className={`container-filters ${active ? 'active' : ''}`}>
      <div className="filter-by-type">
        <span>Tipo</span>
        <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="grass" name="grass" />
                <label htmlFor="grass">Planta</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="fire" name="fire" />
                <label htmlFor="fire">Fuego</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="water" name="water" />
                <label htmlFor="water">Agua</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="bug" name="bug" />
                <label htmlFor="bug">Bicho</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="normal" name="normal" />
                <label htmlFor="normal">Normal</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="poison" name="poison" />
                <label htmlFor="poison">Veneno</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="electric" name="electric" />
                <label htmlFor="electric">Eléctrico</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="ground" name="ground" />
                <label htmlFor="ground">Tierra</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="fairy" name="fairy" />
                <label htmlFor="fairy">Hada</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="fighting" name="fighting" />
                <label htmlFor="fighting">Lucha</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="psychic" name="psychic" />
                <label htmlFor="psychic">Psíquico</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="rock" name="rock" />
                <label htmlFor="rock">Roca</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="steel" name="steel" />
                <label htmlFor="steel">Acero</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="ice" name="ice" />
                <label htmlFor="ice">Hielo</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="ghost" name="ghost" />
                <label htmlFor="ghost">Fantasma</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="dragon" name="dragon" />
                <label htmlFor="dragon">Dragón</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="dark" name="dark" />
                <label htmlFor="dark">Siniestro</label>
            </div>
            <div class="group-type">
                <input type="checkbox" //onChange={handleCheckbox} 
                 id="flying" name="flying" />
                <label htmlFor="flying">Volador</label>
            </div>
        </div>
    </div>
  )
}
