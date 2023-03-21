import React from 'react'
import BigHeading from './Common/BigHeading';
import {socialInit} from '../Constant'
import BrandCard from './HomeSubComponents/BrandCard';

function SocialInitiatives() {
  return (
    <div>
      <BigHeading bigHeading="SOCIAL INITIATIVES" currentPage="Social Initiatives" />
      <div style={{ height: '50px' }}></div>

      <div className="container">
          <div className="row">
            {
              socialInit.map((ele, idx) => {
                return (
                  <div key={ele.brandName} className="col-sm-4 d-flex justify-content-center">
                    <BrandCard {...ele} />
                  </div>
                )
              })
            }

          </div>

        </div>
    </div>
  )
}

export default SocialInitiatives