import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MTM3M2NhM2Et/MTM3M2NhM2Et-MzgwYzQ0MTct-w1500._CB411759470_.jpg" alt="" 
                />
            
                <div className="home__row">
                    <Product 
                        id="11111111"
                        title='Greenworks 2600802 8 Amp 12-Inch Corded Snow Shovel'
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/41ZvHeOwF4L._AC_SY240_.jpg"  
                        rating={5}
                    />
                    <Product
                        id="22222222"
                        title="Webcam HD Pro C920"
                        price={194.52}
                        image="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL320_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="33333333"
                        title="Echo Show 5 – Compact smart display with Alexa - Charcoal"
                        price={74.99}
                        image="https://m.media-amazon.com/images/I/417cPNDgP8L.__AC_SY200_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="44444444"
                        title="Nikon D780 Kit with AF-S FX 24-120mm f/4G ED VR Lens"
                        price={3164.71}
                        image="https://images-na.ssl-images-amazon.com/images/I/41kHl4S7X7L.jpg"
                        rating={5}
                    />
                    <Product 
                        id="55555555"
                        title="Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB"
                        price={129.99}
                        image="https://m.media-amazon.com/images/I/61VjlQUqQDL._AC_UL320_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="66666666"
                        title="Ring Spotlight Cam Battery HD Security Camera with Built Two-Way Talk and a Siren Alarm, White, Works with Alexa"
                        price={249.99}
                        image="https://m.media-amazon.com/images/I/61iHVDUfWlL._AC_UL320_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
