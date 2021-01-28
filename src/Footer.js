import { Button } from '@material-ui/core';
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__toTop">
                Back to top
            </div>
            <div className="footer__links">
                <div className="footer__linksColumn">
                    <h4>Get to Know Us</h4>
                    <p>Careers</p>
                    <p>Amazon and Our Planet</p>
                    <p>Investor Relations</p>
                    <p>Press Releases</p>
                </div>
                <div className="footer__LinksSpacer"></div>
                <div className="footer__linksColumn">
                    <h4>Make Money with Us</h4>
                    <p>Sell on Amazon</p>
                    <p>Sell Under Amazon Accelerator</p>
                    <p>Amazon Associates</p>
                    <p>Sell on Amazon Handmade</p>
                    <p>Advertise Your Products</p>
                    <p>Independently Publish with Us</p>
                    <p>Host an Amazon Hub</p>
                </div>
                <div className="footer__LinksSpacer"></div>
                <div className="footer__linksColumn">
                    <h4>Amazon Payment Products</h4>
                    <p>Amazon.ca Rewards Mastercard</p>
                    <p>Shop with Points</p>
                    <p>Reload Your Balance</p>
                    <p>Amazon Currency Converter</p>
                    <p>Gift Cards</p>
                    <p>Amazon Cash</p>
                </div>
                <div className="footer__LinksSpacer"></div>
                <div className="footer__linksColumn">
                    <h4>Let Us Help</h4>
                    <p>COVID-19 and Amazon</p>
                    <p>Shipping Rates & Policies</p>
                    <p>Amazon Prime</p>
                    <p>Returns Are Easy</p>
                    <p>Manage your Content and Devices</p>
                    <p>Customer Service</p>
                </div>
            </div>
            <div className="footer__amazonLogo">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                <div>
                    <Button variant="outlined" color="inherit">English</Button> 
                    <Button variant="outlined" color="inherit">Canada</Button> 
                </div>
            </div>
            <div className="footer__conditions">
                <div className="footer__conditionsLinks">
                    <div className="footer__conditionsColumn">
                        <div className="footer__conditionsBlock">
                            <h6>Amazon Music</h6>
                            <p>Stream millions of songs</p>
                        </div>
                        <div className="footer__conditionsBlock">
                            <h6>Goodreads</h6>
                            <p>Book reviews & recommendations</p>
                        </div>
                    </div>
                    <div className="footer__conditionsSpacer"></div>
                    <div className="footer__conditionsColumn">
                        <div className="footer__conditionsBlock">
                            <h6>Amazon Advertising</h6>
                            <p>Find, attract, and engage customers</p>
                        </div>
                        <div className="footer__conditionsBlock">
                            <h6>IMDb</h6>
                            <p>Movies, TV & Celebrities</p>
                        </div>
                        <div className="footer__conditionsBlock">
                            <h6>Whole Foods Market</h6>
                            <p>We Believe in Real Food</p>
                        </div>
                    </div>
                    <div className="footer__conditionsSpacer"></div>
                    <div className="footer__conditionsColumn">
                        <div className="footer__conditionsBlock">
                            <h6>Amazon Drive</h6>
                            <p>Cloud storage from Amazon</p>
                        </div>
                        <div className="footer__conditionsBlock">
                            <h6>Amazon Photos</h6>
                            <p>Unlimited Photo Storage Free With Prime</p>
                        </div>
                        <div className="footer__conditionsBlock">
                            <h6>Amazon Renewed</h6>
                            <p>Like-new products you can trust</p>
                        </div>
                    </div>
                    <div className="footer__conditionsSpacer"></div>
                    <div className="footer__conditionsColumn">
                        <div className="footer__conditionsBlock">
                            <h6>Amazon Web Services</h6>
                            <p>Scalable Cloud Computing Services</p>
                        </div>
                        <div className="footer__conditionsBlock">
                            <h6>Shopbop</h6>
                            <p>Designer Fashion Brands</p>
                        </div>
                        <div className="footer__conditionsBlock">
                            <h6>Amazon Second Chance</h6>
                            <p>Pass it on, trade it in, give it a second life</p>
                        </div>
                    </div>
                    <div className="footer__conditionsSpacer"></div>
                    <div className="footer__conditionsColumn">
                        <div className="footer__conditionsBlock">
                            <h6>Book Depository</h6>
                            <p>Books With Free Delivery Worldwide</p>
                        </div>
                        <div className="footer__conditionsBlock">
                            <h6>Warehouse Deals</h6>
                            <p>Open-Box Discounts</p>
                        </div>
                    </div>
                </div>
                <div className="footer__conditionsCopyright">
                    <span>Conditions of Use</span>
                    <span>Privacy Notice</span>
                    <span>Interest-Based Ads</span>
                    <span>© 2008-2021, Amazon.com, Inc. or its affiliates</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
