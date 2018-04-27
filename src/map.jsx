import React from 'react';
import App from './app';
const axios = require('axios');

class Map extends React.Component   {
    constructor(props){
        super(props);

        let mapsKey= 'key=AIzaSyCyYMkY0UGWNfA6v7vnXs5n-4e0jlnr_tc';
        

        this.state= {
            lat: this.props.lat,
            lng: this.props.lng,
            latLng: this.props.latLng,
            mapsKey: mapsKey
        }
        

    }

    render()    {
            let mapsKey = this.state.mapsKey;
            let latLng = this.state.latLng;
            let lat = this.props.lat;
            let lng = this.props.lng;
            let mapUrl = 'https://www.google.com/maps/embed/v1/view?'+mapsKey+'&center='+lat+','+lng+'&zoom=9&maptype=satellite'
    
        return  (
                <div>
                <iframe
                width="600"
                height="600"
                frameBorder="0" 
                src={mapUrl} allowFullScreen>
                </iframe>
                </div>
        )
    }
}

export default Map;