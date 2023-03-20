import React from 'react'
import './Brand.css';

function Brand({brandName,mytext,imgUrl}) {
    return (
        <div className="cont">
            <div className="text-cont">
                <h4>{brandName}</h4>
                {/* <p>{brandName}</p> */}
                <p> {mytext}</p>
            </div>
            
            <img className='brand-img' src={imgUrl} alt="myimg"/>
        </div>

    )
}

export default Brand