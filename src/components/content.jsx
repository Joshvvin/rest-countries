import React, { useState } from 'react'
import './content.css'
import Navigation from './navigation'
import Items from './items'
function Content(){
    const [region, setRegion] = useState('world');
    const [search, setSearch] = useState('query');
    return (
        <div className="content">
            <div className="content-container">
                <Navigation region={setRegion} search={setSearch}/>
                <Items region={region} search={search}/>
            </div>
        </div>
    )
}
export default Content;