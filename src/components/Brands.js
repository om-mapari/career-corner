import React from 'react'
import BrandCard from './HomeSubComponents/BrandCard';
import {brands} from '../Constant'
import BigHeading from './Common/BigHeading';

function Brands() {
  return (
    <div>
      <BigHeading bigHeading="OUR BRANDS" currentPage="Our Brands" />
        <div style={{ height: '50px' }}></div>

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