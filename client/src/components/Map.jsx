import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

import alumbraIcon from '../images/apple-icon-57x57.png'
import arrowWhite from '../images/arrow-white.svg'  

export const icon = new L.icon ({
    iconUrl: alumbraIcon,
    iconSize: [40, 50],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

export default (props) => {
        const [position, setPosition] = useState([51.505, -0.09])

        function handleClick(props) {
            console.log(props)
            //setPosition([eventTarget.latlng.lat, eventTarget.latlng.lng])
            /*if (props.pageId === "1") {
                return
            } else {
                setPosition([eventTarget.latlng.lat, eventTarget.latlng.lng])
            }*/
        }

        const map = (
        <MapContainer center={position} zoom={15} onclick={handleClick()}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position} icon={icon}>
            <Popup>
                Representante X 
                <Link to="/Representante">
                    <img src={arrowWhite} alt=""/>
                </Link>
            </Popup>
            </Marker>
        </MapContainer>
    )
    return (map);
};