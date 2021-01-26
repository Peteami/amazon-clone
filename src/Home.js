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
                        title='Apple iPad 9.7 with WiFi, 128GB- Space Gray (2017 Newest Model) (Renewed)'
                        price={549.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61g2VZBU88L._AC_UL320_.jpg"  
                    />
                    <Product
                        id="22222222"
                        title="Webcam HD Pro C920"
                        price={194.52}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="33333333"
                        title="Echo Show 5 – Compact smart display with Alexa - Charcoal"
                        price={74.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/417cPNDgP8L.__AC_SY200_.jpg"
                    />
                     <Product 
                        id="66666666"
                        title="Ring Spotlight Cam Battery HD Security Camera with Built Two-Way Talk and a Siren Alarm"
                        price={249.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61iHVDUfWlL._AC_UL320_.jpg"      
                    />
                    <Product 
                        id="55555555"
                        title="Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB"
                        price={129.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61VjlQUqQDL._AC_UL320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="44444444"
                        title="Smart Watch for Android iOS,Fitness Tracker with Blood Pressure Heart Rate Blood Oxygen Monitor,Pedometer,Watches for Men Women,Sleep Tracker,Call Messages Reminder,IP68 Waterproof, Full-Touch Screen"
                        price={149.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61hF4wF5aZL._AC_UL320_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
