import React, {Fragment}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBed,faDollarSign,faMap} from '@fortawesome/free-solid-svg-icons';

function DataTag (props){

    //console.log('Este es el componente Datatag',props)

    const {photo,name,description,city,country,rooms,price}= props

    //console.log ('Este es el precio', {price})
    
  if(props.price===1){
      return (
        <Fragment>
           <div className="card">

              {/*Parte de la imagen*/}
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={photo} alt={name} />
                </figure>
              </div>

              {/*Parte del contenido*/}
              <div className="card-content">

                <p className="title is-4">{name}</p>
                <p>{description}</p>

                <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                  
                  {/*Iconos #1 */}
                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-medium is-info"> <FontAwesomeIcon icon={faMap}/></span>
                      <span className="tag is-medium">{city}, {country}</span>
                    </div>
                  </div>

                  {/*Iconos #2 */}
                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-medium is-info"> <FontAwesomeIcon icon={faBed}/></span>
                      <span className="tag is-medium">{rooms} Habitaciones</span>
                    </div>
                  </div>

                  {/*Iconos #3 */}
                  <div className="control">
                    <div className="tags">
                      <span className="tag is-medium is-info">
                        <FontAwesomeIcon icon={faDollarSign}/>
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="card-footer">
                <a href="javascript:alert('No implementamos esto aún :(')" 
                className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
                  Reservar
                </a>
              </div>

            </div>
        </Fragment>
      
    );} else if(props.price===2){
      return (
        <Fragment>
           <div className="card">

              {/*Parte de la imagen*/}
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={photo} alt={name} />
                </figure>
              </div>

              {/*Parte del contenido*/}
              <div className="card-content">

                <p className="title is-4">{name}</p>
                <p>{description}</p>

                <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                  
                  {/*Iconos #1 */}
                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-medium is-info"> <FontAwesomeIcon icon={faMap}/></span>
                      <span className="tag is-medium">{city}, {country}</span>
                    </div>
                  </div>

                  {/*Iconos #2 */}
                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-medium is-info"> <FontAwesomeIcon icon={faBed}/></span>
                      <span className="tag is-medium">{rooms} Habitaciones</span>
                    </div>
                  </div>

                  {/*Iconos #3 */}
                  <div className="control">
                    <div className="tags">
                      <span className="tag is-medium is-info">
                        <FontAwesomeIcon icon={faDollarSign}/>
                        <FontAwesomeIcon icon={faDollarSign}/>
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="card-footer">
                <a href="javascript:alert('No implementamos esto aún :(')" 
                className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
                  Reservar
                </a>
              </div>

            </div>
        </Fragment>
      
    );} else if (props.price===3){
      return (
        <Fragment>
           <div className="card">

              {/*Parte de la imagen*/}
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={photo} alt={name} />
                </figure>
              </div>

              {/*Parte del contenido*/}
              <div className="card-content">

                <p className="title is-4">{name}</p>
                <p>{description}</p>

                <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                  
                  {/*Iconos #1 */}
                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-medium is-info"> <FontAwesomeIcon icon={faMap}/></span>
                      <span className="tag is-medium">{city}, {country}</span>
                    </div>
                  </div>

                  {/*Iconos #2 */}
                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-medium is-info"> <FontAwesomeIcon icon={faBed}/></span>
                      <span className="tag is-medium">{rooms} Habitaciones</span>
                    </div>
                  </div>

                  {/*Iconos #3 */}
                  <div className="control">
                    <div className="tags">
                      <span className="tag is-medium is-info">
                        <FontAwesomeIcon icon={faDollarSign}/>
                        <FontAwesomeIcon icon={faDollarSign}/>
                        <FontAwesomeIcon icon={faDollarSign}/>
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="card-footer">
                <a href="javascript:alert('No implementamos esto aún :(')" 
                className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
                  Reservar
                </a>
              </div>

            </div>
        </Fragment>
      
    );} else if (props.price===4){
      return (
        <Fragment>
           <div className="card">

              {/*Parte de la imagen*/}
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={photo} alt={name} />
                </figure>
              </div>

              {/*Parte del contenido*/}
              <div className="card-content">

                <p className="title is-4">{name}</p>
                <p>{description}</p>

                <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                  
                  {/*Iconos #1 */}
                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-medium is-info"> <FontAwesomeIcon icon={faMap}/></span>
                      <span className="tag is-medium">{city}, {country}</span>
                    </div>
                  </div>

                  {/*Iconos #2 */}
                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-medium is-info"> <FontAwesomeIcon icon={faBed}/></span>
                      <span className="tag is-medium">{rooms} Habitaciones</span>
                    </div>
                  </div>

                  {/*Iconos #3 */}
                  <div className="control">
                    <div className="tags">
                      <span className="tag is-medium is-info">
                        <FontAwesomeIcon icon={faDollarSign}/>
                        <FontAwesomeIcon icon={faDollarSign}/>
                        <FontAwesomeIcon icon={faDollarSign}/>
                        <FontAwesomeIcon icon={faDollarSign}/>
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="card-footer">
                <a href="javascript:alert('No implementamos esto aún :(')" 
                className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
                  Reservar
                </a>
              </div>

            </div>
        </Fragment>
      
    );}
  }

export default DataTag;