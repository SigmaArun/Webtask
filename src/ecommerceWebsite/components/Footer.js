import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer-fixed">
            <div className="container">
                <div className="row">
                    <h3>The Generics</h3>
                    <div className="col">
                        <a href="#">App</a>
                    </div>
                    <div className="col">
                        <a href="#">youtube</a>
                    </div>
                    <div className="col">
                        <a href="#">Podcast</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
