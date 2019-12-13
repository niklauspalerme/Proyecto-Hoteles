import React, { Component, Fragment } from 'react';
import DateFilter from './DateFilter';
import OptionsFilter from './OptionsFilter';


function Filter(props) {

  //Recibe parametros,eventos/metodos para mandarlos a sus componentes respectivos
  const {handleFiltersChange,filters}=props

 return (
  <Fragment>
     <nav className="navbar is-info" style={ {justifyContent: 'center'} }>

        <div className="navbar-item">
            <DateFilter
              fecha={filters.dateFrom}
              icono={1}
              handleFiltersChange={handleFiltersChange}
              name="dateFrom"
            />
        </div>

        <div className="navbar-item">
            <DateFilter
              fecha={filters.dateTo}
              icono={2}
              handleFiltersChange={handleFiltersChange}
              name="dateTo"
            />
        </div>

        <div className="navbar-item">
          <OptionsFilter
            options={ [ 
              {value:'select', name:'Todos los países'}, 
              {value: 'Argentina', name: 'Argentina'}, 
              {value: 'Brasil', name: 'Brasil'}, 
              {value: 'Chile', name: 'Chile'}, 
              {value: 'Uruguay', name: 'Uruguay'} ] }
            icono={3} 
            handleFiltersChange={handleFiltersChange}
          />
        </div>

        <div className="navbar-item">
          <OptionsFilter
            options={[
             { value: 'select', name: 'Cualquier precio' },
             { value: 1, name: '$' }, 
             { value: 2, name: '$$' },
             { value: 3, name: '$$$' },
             { value: 4, name: '$$$$' }]}
            icono={4}   
            handleFiltersChange={handleFiltersChange}
          />
        </div>

        <div className="navbar-item">
          <OptionsFilter
            options={[
              { value: 'select', name: 'Cualquier tamaño' },
              { value: 10, name: 'Hotel pequeño' }, 
              { value: 20, name: 'Hotel mediano' }, 
              { value: 30, name: 'Hotel grande' }]}
            icono={5} 
            handleFiltersChange={handleFiltersChange}
          />
        </div>

     </nav>
  </Fragment>
);

 }

export default Filter;
