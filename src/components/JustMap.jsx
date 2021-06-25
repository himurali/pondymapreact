        //

import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
 
import {render} from 'react-dom';
//11.9358201756294	79.8337559401989

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const TOKEN = 'pk.eyJ1IjoibXVyYWxpaHIiLCJhIjoiYXNJRUtZNCJ9.qCHETqk-pqaoRaK4e_VcvQ'; // Set your mapbox token here


const SIZE = 20;
export default function JustMap(props) {


    const {data, onClick} = props;
    const [popupInfo, setPopupInfo] = useState(null);
    const [viewport, setViewport] = useState({
      latitude: 11.9358201756294,
      longitude: 79.8337559401989,
      width: "100vw",
      height: "100vh",
      zoom: 15
    });
    const [selectedPark, setSelectedPark] = useState(null);
  
    useEffect(() => {
      const listener = e => {
        if (e.key === "Escape") {
          setSelectedPark(null);
        }
      };
      window.addEventListener("keydown", listener);
  
      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, []);
  
    return (
      <div>


        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/mapbox/outdoors-v11"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        > 
  


  {props.booksData.map(book => (
          <Marker
            key={book.fields.id}
            latitude={book.fields.latitude}
            longitude={book.fields.longitude}
          >
            <svg
        height={SIZE}
        viewBox="0 0 24 24"
        style={{
          cursor: 'pointer',
          fill: '#d00',
          stroke: 'none',
          transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
        }}
        onClick={() => onClick(book)}
      >
        <path d={ICON} />
      </svg>
          </Marker>
        ))}




          
        </ReactMapGL>
      </div>
    );
  }
  