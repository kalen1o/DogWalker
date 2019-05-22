import React, { Component } from 'react';
import classes from './Map.module.css';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = withScriptjs(withGoogleMap(props => {
	let markers = props.markers.length ? 
		props.markers.map(( item, index ) => {
			console.log(item)
			return (
			<Marker
				key={index}
				position={item}
				label={index}
			/>
		)}) : null
	return (
		<GoogleMap
			defaultZoom={11}
			defaultCenter={props.defaultCenter}>
				{markers}
				{/* <Marker
					position={{ lat: 50.447585, lng: 30.522026 }}
					label="1"
				/> */}
		</GoogleMap>
	)
}))

export default Map;