import React from 'react';
import { Link } from 'react-router-dom';
import './BigHeading.css'

function BigHeading({bigHeading,currentPage}) {
    return (
        <div className="bd-wrapper">
            <div id="main-content">
                <section className="content-area" style={{ minHeight: '200px' }}>
                    <div className="top_heading_out">
                        <div className="top_site_main" style={{ color: '#f68904' }}>
                            <span className="overlay-top-header" style={{ backgroundColor: '#ffffff', opacity: 1 }}></span>
                            <div className="page-title-wrapper">
                                <div className="banner-wrapper container">
                                    <h1>{bigHeading}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="breadcrumbs-wrapper">
                            <div className="container">
                                <div id="breadcrumbs">
                                    <span>
                                        <span>
                                            <Link style={{color: 'inherit'}} to="/">{`HOME`}</Link>
                                        </span>{' '}
                                        » <span className="breadcrumb_last font-weight-bold" aria-current="page">{currentPage}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default BigHeading;
