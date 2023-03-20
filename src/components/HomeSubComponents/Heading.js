import React from 'react'

function Heading({ heading }) {
    return (
        <>
            { heading !== 'About Us'&& <hr className="bg-dark" />}
            <h1>
                <span style={{ fontWeight: 'bold', color: '#FF9900' }}>
                    {heading}
                </span>
            </h1>
        </>
    )
}

export default Heading