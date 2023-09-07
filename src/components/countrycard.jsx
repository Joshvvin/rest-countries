import React from 'react'
import './countrycard.css'
function CountryCard(props){
    const { name, population, region, capital, flags } = props;
    // console.log(name, population, capital ,region);
    return (
        <div className="country" id={name}>
            <div className="country-image">
                <img src={flags.png} alt={flags.alt} />
            </div>
            <div className="country-details">
                <div className="country-name">{name}</div>
                <div className="country-others">
                    <div className="country-others-text">
                        Population: 
                    </div>
                    <div className="country-others-value">
                        {population}
                    </div>
                </div>
                <div className="country-others">                    
                    <div className="country-others-text">
                        Region: 
                    </div>
                    <div className="country-others-value">
                        {region}
                    </div>    
                </div>
                <div className="country-others">                     
                    <div className="country-others-text">
                        Capital:
                    </div>
                    <div className="country-others-value">
                        {capital}
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default CountryCard;