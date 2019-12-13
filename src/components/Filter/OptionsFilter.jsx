import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe,faDollarSign,faBed} from '@fortawesome/free-solid-svg-icons';

function OptionsFilter (props){

    //Debe recibir 3 parametros
    const {options,icono,handleFiltersChange} = props

    //Se hace List Rendering
    //Se coloca un index en el map, ya que como estas escribiendo el mismo codigo, jsc no te deja iterar la misma porcion
    //por eso se recomineda que cada mapeo tenga un key unico en string , hay a vecs que se puede usar un index como key
    //como por ejemplo asi:  key={index}
    const listOptions =options.map((opt,index)=><option key={opt.name} value={opt.value} name={opt.name} >{opt.name}</option>);

    //console.log(options, "el icono=>", icono)

    return (
        <div className="field">
        <div className="control has-icons-left">
          <div className="select" style={ {width: '100%'} }>
            { icono===3 ? (
              <select 
              style={ {width: '100%'} } 
              style={{color:'black'}} 
              onChange={e=>handleFiltersChange("country",e.target.value)}>
                {listOptions}
              </select> ) : (null) }
            { icono===4 ? (
              <select 
              style={ {width: '100%'} } 
              style={{color:'black'}} 
              onChange={e=>handleFiltersChange("price",e.target.value)} >
                 {listOptions}
              </select> ) : (null) }
             { icono===5 ? (
              <select 
              style={ {width: '100%'} } 
              style={{color:'black'}} 
              onChange={e=>handleFiltersChange("rooms",e.target.value)} >
                 {listOptions}
              </select> ) : (null) }
          </div>
          <div className="icon is-small is-left">
            { icono===3 ? (<FontAwesomeIcon icon={faGlobe} /> ): (null) }
            { icono===4 ? (<FontAwesomeIcon icon={faDollarSign} />): (null) }
            { icono===5 ? (<FontAwesomeIcon icon={faBed} /> ): (null) }
          </div>
        </div>
      </div>      
   
    );
  }

export default OptionsFilter;