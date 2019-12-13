import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Moment from 'moment';
import './App.css';
import Filter from './components/Filter/Filter';
import Hotel from './components/Hotel/Hotel';

class App extends Component {

  constructor(props) {
    super(props);

    //Genero la fecha actual
    const today = new Date()
   
    //Defino mis estados
    this.state = {
      hotels:[],
      hotelsFiltered:[],
      hotelsLoaded:false,
      filters:{
        dateFrom:Moment(today).format("YYYY-MM-DD"),
        dateTo:Moment(today).add(1, 'month').format("YYYY-MM-DD"),
        country:'select',
        price:'select',
        rooms:'select'
      }
      
    };

    this.OnChangeFilters=this.OnChangeFilters.bind(this);
    this.handleHotelCardChange=this.handleHotelCardChange.bind(this);

  }

  //Metodos
  OnChangeFilters(name,value){
    
    let payloadFilter= this.state.filters;
    payloadFilter[name]=value

    //llamo aqui la funcion de hoteles que me retorne algo lo seteo later
    const hotelFilteredNew = this.handleHotelCardChange(payloadFilter)
    this.setState({hotelsFiltered:hotelFilteredNew})
    this.setState({filters:payloadFilter})

  }

 

  handleHotelCardChange(payload){

      //console.log('Hola estas en el metodo hanldreHotelCardChange: ', payload)

      const {country,dateFrom,dateTo,price,rooms}=payload

      const hotelFiltered2 = this.state.hotels.filter(hotel=>
        Moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= dateFrom 
        && Moment(hotel.availabilityTo).format("YYYY-MM-DD") <= dateTo
        && hotel.rooms <= (rooms !== 'select' ? rooms : hotel.rooms)
        && hotel.country.trim().toLowerCase()===(country !== 'select'? country.trim().toLowerCase():hotel.country.trim().toLowerCase())
        && hotel.price === (price !== 'select'? parseInt(price) :hotel.price)
      )

      //console.log('Esto es lo filtrado: ',hotelFiltered2)

      return  hotelFiltered2 
  } 

  //Consumir la API
  async componentDidMount() {
    try {
        const response = await fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica');
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        this.setState({
            hotels: json,
            hotelsLoaded: true,
            hotelsFiltered:json
        });

        // console.log('Este es el hotels api normal: ', this.state.hotels)
        // console.log('Este es el array hotels que se va a renderizar : ',this.state.hotelsFiltered)
        

    } catch (error) {
        console.log(error);
    }
  }

  //Metodo Render
  render() {

    //Destructuring
    let {filters,hotelsFiltered}=this.state    
    // console.log('Filtros al inicio del APP: ',filters)
    console.log('Este es el array filtrado: ',hotelsFiltered)

    //Tamaño de array
    //console.log(hotelsFiltered.length)

    return (
       <Fragment>
          <Header filters={filters} totalHotel={hotelsFiltered.length}/>
          <Filter filters={filters} handleFiltersChange={this.OnChangeFilters}/>
          <Hotel hoteles={hotelsFiltered}/>
      </Fragment>
    );
  }
}

export default App;

