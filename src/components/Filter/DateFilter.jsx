import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

function DateFilter (props){

    //Este componente debe recibir fecha, icono, name y metodos/eventos
    let {fecha,icono,handleFiltersChange,name}= props;

    //console.log('Estas en dateFilter: ',fecha, icono,name)

        return (
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date" name={name} value={fecha} style={{color:'black'}} 
                    onChange={e=>handleFiltersChange(e.target.name,e.target.value)}/>
                    <span className="icon is-small is-left">
                    {icono===1?<FontAwesomeIcon icon={faSignInAlt} />: <FontAwesomeIcon icon={faSignOutAlt} />}
                    </span>
                </div>
            </div>
        );
  }

  export default DateFilter;