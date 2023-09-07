import React, { useEffect, useState } from 'react'
import './items.css'
import CountryCard from './countrycard';
function Items(props){
    const { region, search } = props; 
    const url = 'https://restcountries.com/v3.1/all';
    const [data, setData] = useState([])
    useEffect(() =>{
        fetch(url)
            .then(res => res.json())
            .then((response)=>{
                // console.log(response);
                // console.log(name, region, population, capital);
                setData(response);
            })
        // console.log(data);           
    }, [])

    return (
        <div className="items-container">
            {/* {region == 'world' ? } */}
            { region == 'world' ? ( search == 'query' ? data.map((item) =>{
                    // console.log(item);
                    return (<CountryCard name={item.name.common} population={item.population} region={item.region} capital={item.capital} flags={item.flags}/>);
                })
                : data.filter(country =>{
                    return country.name.includes(search);
                }).map((item) =>{
                    // console.log(item);
                    return (<CountryCard name={item.name.common} population={item.population} region={item.region} capital={item.capital} flags={item.flags}/>);
                }))
                :   (search == 'query' ? data.filter(country =>{
                    return country.region == region;
                }).map((item) =>{
                    // console.log(item);
                    return (<CountryCard name={item.name.common} population={item.population} region={item.region} capital={item.capital} flags={item.flags}/>);
                })
                :   data.filter(country =>{
                    return country.region == region && country.name.includes(search);
                }).map((item) =>{
                    // console.log(item);
                    return (<CountryCard name={item.name.common} population={item.population} region={item.region} capital={item.capital} flags={item.flags}/>);
                }))
            }
        </div>
    )    
}
export default Items;