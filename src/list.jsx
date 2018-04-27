import React from 'react';
import App from './app';
const axios = require('axios');

class List extends React.Component {
    constructor(props)  {
    super(props);

    this.state={
      latLng: this.props.lat + ',' + this.props.lng
    }
    }


  
      render(){
      let time = new Date(this.props.time).toString();
      let mag = this.props.magnitude;
      let magStyle = '';

      mag >= 5 ? magStyle = 'five-and-over' :
        mag >= 4 ? magStyle = 'four-five' :
          mag >= 3 ? magStyle = 'three-four' :
            mag >= 2 ? magStyle = 'two-three' :
              mag >=1 ? magStyle = 'one-two' :
                          magStyle = 'under-one';


        return(
            <div className={magStyle} id='parent-element' >
            <ul>
               <a href={ this.props.quakeUrl }  target="_blank" > 
                  <li > <strong>LOCATION: { this.props.place } </strong></li></a>
               <div> <strong> MAGNITUDE: { this.props.magnitude }</strong></div>
               <div> <strong> TIME: { time }</strong></div>
               <a href='#' onClick={ this.props.onMap }> show on map </a>
               <hr className='style8' />
            </ul>
            </div> //closes id='parent-element'
        )
      }
    }

    export default List;