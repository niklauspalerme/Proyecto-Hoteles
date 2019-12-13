import React, {Fragment}from 'react';
import DataTag from './DataTag';


function Hotel (props){

    const hoteles=props.hoteles;

    console.log('Estas en el componente Hotel: ',hoteles);
   
     const listHotel= hoteles.map((hotel)=>(
        <div className="column is-one-third" key={hotel.slug}>
            <DataTag photo={hotel.photo} name={hotel.name} 
            description={hotel.description} city={hotel.city} country={hotel.country}
            rooms={hotel.rooms} price={hotel.price}/>
        </div>
     ));
   
    return (
        <Fragment>
            <section className="section" style={ {marginTop: '3em'} }>
                <div className="container">
                    <div className="columns is-multiline">
                        {listHotel}
                    </div>
                </div>
            </section>
                
        </Fragment>
      
    );
  }

export default Hotel;