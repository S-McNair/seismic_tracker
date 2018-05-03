import React, { Component } from 'react';
import Input from './input';
import List from './list';
import Map from './map';
const axios = require('axios');

class App extends Component {
    constructor(props) {
        super(props);

        // Get the current date
           let today = new Date();
           let time = today.toTimeString();
           let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
           let dateUpdated = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-1);
        
        this.state = {
            quakeData: [],
            url: 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson',
            updatedAfter: '&updatedafter='+dateUpdated,
            dateUpdated: dateUpdated,
            updateText: 'Since ' + dateUpdated,
            startDate: '',
            endDate: '',
            maxMagnitude: '&maxmagnitude=6',
            minMagnitude: '&minmagnitude=1',
            date: date,
            time: '',
            latLng: '',
            lat: '',
            lng: '',
            sort:'orderby=time',
            sortBy: 'Most Recent',
            listReturn: 10,
            quakeList: []
        }

        let url= this.state.url;
        let updatedAfter= this.state.updatedAfter + 'T0000';
        let sort= '&' + this.state.sort;
        let n = this.state.listReturn;
        let maxMag = this.state.maxMagnitude;
        let minMag = this.state.minMagnitude;

        axios
        .get(url + updatedAfter + minMag + maxMag + sort)
        .then(response => response.data)
        .then(quakeData => this.setState({         
            quakeData,
            quakeList: quakeData.features.slice(0, n),
                }))

        this.handleClick= this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

componentDidMount() {
    let maps= document.getElementById('map-card');

    maps.style.display = 'none'
}

handleChange(event)  {
    event.preventDefault();
    let name = event.target.name;
    let value  = event.target.value;

    this.setState({
        [name]: value
    })
}

getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
        console.log(position.coords)
    }



handleClick(event) {
    let quakeData= this.state.quakeData.features; 
    let url= this.state.url;
    let updatedAfter= this.state.updatedAfter;
    let dateUpdated = this.state.dateUpdated.toString();
    let startDate= '&' + this.state.startDate;
    let endDate= '&' + this.state.endDate;
    let maxMagnitude= '&' + this.state.maxMagnitude;
    let minMagnitude= '&' + this.state.minMagnitude;
    let sort = '&' + this.state.sort;

    let quakeList = [ ];
    let sortBy;
    let n = this.state.listReturn;
  
    this.state.sort === 'orderby=magnitude' ? sortBy = 'Highest Magnitude' :
        this.state.sort === 'orderby=magnitude-asc' ? sortBy = 'Lowest Magnitude' :
             sortBy = 'Most Recent';

    let update;
    let startDateText = this.state.startDate;
    startDateText === '' ? update = 'Since ' + this.state.dateUpdated : update = 'Since ' + this.state.startDate;  
    console.log(update)  
    this.setState({ updateText: update, sortBy: sortBy })

    
                        
    axios
    .get(url + updatedAfter + startDate + endDate + maxMagnitude + minMagnitude + sort)
    .then(response => response.data)
    .then(quakeData => this.setState({ 
        quakeData,
        quakeList: quakeData.features.slice(0,n)
     }));
}

handleMap(index) {
    let maps= document.getElementById('map-card');
    maps.style.display = 'block';

    let quakeData = this.state.quakeData.features;
    let lat = quakeData[index].geometry.coordinates[1];
    let lng = quakeData[index].geometry.coordinates[0];
    let latLng = quakeData[index].geometry.coordinates[1]+','+quakeData[index].geometry.coordinates[0];
    let title = quakeData[index].properties.title;
    this.setState({ latLng: latLng, lat: lat, lng: lng , title: title});
     
    console.log(quakeData[index].geometry.coordinates[1])
    }

render(){
    let listNumber = this.state.quakeList.length;
    let dateUpdated = this.state.dateUpdated;
    let sortBy = this.state.sortBy;
    let update = this.state.updateText;
    
    return(
    <div className='container-fluid'>
            <h1 className='title'>Earthquake Tracker</h1>
            <h4 className='title'>Listing Seismic Events from Around the Globe </h4>
            <hr className='style8' />

            <div className='row' >
            <div className='col-md-6 ' >
        
            <div className='card  text-center ' > 
            <div className='card-header' ><h3>Set Filters</h3></div>
            <div className='card-body'>
                <Input onClick={ this.handleClick } 
                       onChange={ this.handleChange }
                       sort={ this.state.sort }
                       maxMag={ this.state.maxMagnitude }
                       minMag={ this.state.minMagnitude } 
                       startDate={ this.state.startDate }
                       endDate={ this.state.endDate } 
                       listReturn={ this.state.listReturn }/>             
            </div>
            </div><br /><br />

            <div className='card  text-center' id='map-card' >
            <div className='card-title' ><h4>Approximate Location of Seismic Event</h4></div>
                <p><strong>{ this.state.title } </strong></p>
            <div className='card-body' id='map' >
                 <Map latLng={ this.state.latLng }
                        lat ={ this.state.lat}
                        lng={ this.state.lng } 
                        location={ this.state.location }
                        magnitude={ this.props.magnitude }/>
            </div>
            </div>
            </div>

            <div className='col-md-5' >            
            <div className='card text-center' >
            <div className='card-header' ><h4>{ listNumber } { sortBy } Seismic Events </h4>
                <p><i>{ update }</i></p>
            </div>

            <div className='card-body'>
                {this.state.quakeList.map((list, index) => (
                    <List place= { list.properties.place }
                          lat= { list.geometry.coordinates[1] }
                          lng= { list.geometry.coordinates[0] }
                          magnitude= { list.properties.mag }
                          time={ list.properties.time }
                          quakeUrl={ list.properties.url }
                          onMap= { this.handleMap.bind(this, index) }
                          key= { index }  />))} 
            </div>
            </div>
            </div>         

            </div> {/* ^^^^^^ closes id='row' */}                    
    </div> /*close parent div='container'*/


    )
}
}

export default App;