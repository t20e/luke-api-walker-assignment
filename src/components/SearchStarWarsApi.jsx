import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const SearchStarWarsApi = () => {
    let {id, type} = useParams();
    let [obj, setObj] = useState([])
    let [gotApiError, setGotApiError] = useState(false)
    
    useEffect( () => {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then(response => {
                setObj(response.data)
                console.log('got api');
                console.log(obj, '***obj api');
                setGotApiError(false)

            })
            .catch( err  => {
                console.log('error getting api');
                setGotApiError(true)
            })
    }, [id, type]);
    return (
        <div>
            {
                gotApiError == true?
                <div>
                    <h1>These aren't the droids you're looking for</h1>
                    <img src="https://s.yimg.com/uu/api/res/1.2/Hh2.zKGg6PAubGv_yDixDw--~B/Zmk9ZmlsbDtoPTQ1MDt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-03/832aa620-9fda-11ec-bfd3-a28b3cb7f1cd.cf.jpg" alt="" srcset="" />
                </div>
                :   (    type == 'people' ?
                        <div>
                            <h1>Name: {obj.name}</h1>
                            <h2>Height: {obj.height}</h2>
                            <h2>Eye Color: {obj.eye_color}</h2>
                            <h2>Birth Year: {obj.birth_year}</h2>
                        </div>
                        :
                        <div>
                            <h1>Name: {obj.name}</h1>
                            <h2>Climate: {obj.climate}</h2>
                            <h2>Terrain: {obj.terrain}</h2>
                            <h2>Population: {obj.population}</h2>
                        </div>
                )
            }
        </div>
    );
};


export default SearchStarWarsApi;