import React, {Fragment}from 'react';
import Moment from 'moment';


function Header (props){

  //Se captura los props
  const {country,price,rooms}= props.filters
  let {dateFrom,dateTo}=props.filters
  const {totalHotel}=props

  //Se convierten las fechas a fechas strings
  dateFrom=Moment(dateFrom).format('LL');
  dateTo=Moment(dateTo).format('LL');

    return (
      <Fragment>
        <section className="hero is-success">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Hoteles :)</h1>
              <h2 className="subtitle">
                desde el <strong>{dateFrom}</strong> hasta el <strong>{dateTo}</strong> en 
                {country==='select'? <strong> Todos los países</strong>:<strong> {country}</strong>} por 
                {price==='select'? <strong> Cualquier Precio</strong>:<strong> {price}</strong>} de 
                {rooms==='select'? <strong> Cualquier tamaño</strong>:<strong> {rooms}</strong>}
                <p><strong>Total encontrado "{totalHotel}" </strong></p>
              </h2>
            </div>
            </div> 
        </section>
      </Fragment>
    );

  }

export default Header;
