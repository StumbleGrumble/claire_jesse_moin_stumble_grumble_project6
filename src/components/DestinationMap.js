import React, { Component, Link } from 'react';
import BackButton from './BackButton';

// const destination = this.props.location.destination
class DestinationMap extends Component {
    formattedAddress = (destination) => {
        return destination.replace(' ', '%20')
    }
    render() {
        return (
            <div className="wrapper directions clearfix">
                <h3>Stumbling Directions</h3>
                <i onClick={() => this.props.history.goBack()}className="fas fa-caret-left"></i>

                <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="400px" id="gmap_canvas" src={`https://maps.google.com/maps?q=${this.formattedAddress(this.props.location.destination)}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
                
                <section>
                    <ul>
                        {this.props.location.directions.map((route) => {
                            return (
                                <li key={route.end_location.lat}>{route.html_instructions.replace(/<[^<div>]+>/g, '').replace(/<[^<>]+>/g, '.\n').replace('Turn', 'Stumble')}</li>
        
                            )  
                        })}
                    </ul>
                </section>
            </div>
        );
    }
};

export default DestinationMap;
