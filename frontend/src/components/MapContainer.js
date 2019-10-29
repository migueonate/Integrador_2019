import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Link } from 'react-router-dom'

import CurrentLocation from '../components/CurrentLocation';


export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <div>
                <Link to="/info" className="btn btn-secondary " >
                    Listado
                    <i className="material-icons">
                        list</i>
                </Link>
                <p>
                    
                </p>
                <CurrentLocation
                    centerAroundCurrentLocation
                    google={this.props.google}
                >

                    <Marker animation={this.props.google.maps.Animation.BOUNCE}
                        onClick={this.onMarkerClick} name={'Ubicacion Actual'} />
                    <Marker position={{ lat: 7.115841, lng: -73.116225 }} />
                    <Marker position={{ lat: 7.075559, lng: -73.110231 }} />
                    <Marker position={{ lat: 7.067675, lng: -73.107455 }} />

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h6>{this.state.selectedPlace.name}</h6>
                        </div>
                    </InfoWindow>

                </CurrentLocation>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD1TngyGkfqzQrGQ-zytJlJgVzzmhOzjhU'
})(MapContainer);