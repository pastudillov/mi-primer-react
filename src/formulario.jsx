import React from 'react'

export const Formulario = () => {
    const listaCiudades = ["La Unión", "Río Bueno", "Valdivia"];
  return (
    <>
        <div>
            <label>Nombre: </label>
            <input type="text"></input>
        </div>
        <div>
            <label>Apellido: </label>
            <input type="text"></input>
        </div>
        <div>
            <label>Ciudad: </label>
            <select>
                {listaCiudades.map((ciudad) => (
                    <option key={ciudad}>{ciudad}</option>
                ))}
            </select>
        </div>
    </>
  )
}

export default Formulario