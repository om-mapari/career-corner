import React from 'react'
import BrandCard from './HomeSubComponents/BrandCard';
import {brands} from '../Constant'

function Brands() {
  return (
    <div>
        <div className="container">
          <div className="row">
            {
              brands.map((ele, idx) => {
                return (
                  <div key={idx} className="col-sm-4 d-flex justify-content-center">
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

export default Brands