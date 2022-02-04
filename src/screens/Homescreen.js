import React,{useEffect,useState} from 'react';
import Header from '../components/Header/Header';
import {CssBaseline } from '@material-ui/core';
import Map from '../components/Map/Map';
import { getPlacesData } from '../api';

const Homescreen = () => {
    const [places,setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds,setBounds] = useState({});

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}} ) => {
            setCoordinates({lat:latitude, lng:longitude})
        })
        const API_KEY = process.env.REACT_APP_PLACES_API;
        const script = document.createElement('script'); 
        script.src = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`; 
        document.head.append(script);
    },[])

    useEffect(() => {
        if(bounds.sw && bounds.ne){
        console.log(coordinates,bounds)
        getPlacesData(bounds.sw,bounds.ne)
        .then((data) => {
            console.log(data);
            setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        })
        }
    },[bounds])
    return(
        <>
        <CssBaseline />
        <Header />
        <div style={{ width: '100%'}}>
            <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            />
        </div>
        </>
        )
}

export default Homescreen;