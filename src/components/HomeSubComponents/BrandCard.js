import React from 'react'
import './Brand.css';

function BrandCard({brandName,mytext,barndUrl}) {
    return (
        <div className="cont">
            <div className="text-cont">
                <h4>{brandName}</h4>
                {/* <p>{brandName}</p> */}
                <p> {mytext}</p>
            </div>
            
            <img className='brand-img' src={barndUrl} alt="myimg"/>
        </div>

    )
}

export default BrandCard