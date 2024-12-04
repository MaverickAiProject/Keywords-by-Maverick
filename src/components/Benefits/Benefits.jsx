import React from 'react';
import "./Benefits.css";
import { assets } from '../../assets/assets';

const Benefits = () => {
    return (
        <div className="benefits-section">

            <h2 className="main-heading">BENEFITS OF KEYWORDS RESEARCH</h2>

            <div className="benefits-container">
                <div className="benefits-image">
                    <img src={assets.hero_4} alt="Keywords Research" />
                </div>

                <div className="benefits-content">

                    <div className="benefit">
                        <h3 className="benefit-heading">Increased Organic Traffic</h3>
                        <p>Keyword research helps identify high-volume search terms, allowing you to target content that can rank higher and attract more organic traffic.</p>
                    </div>

                    <div className="benefit">
                        <h3 className="benefit-heading">Better User Intent Targeting</h3>
                        <p>By understanding the intent behind the keywords, you can create more relevant content that matches what users are actually searching for.</p>
                    </div>

                    <div className="benefit">
                        <h3 className="benefit-heading">Competitive Advantage</h3>
                        <p>Keyword research allows you to discover gaps in your competitors' strategies, giving you an edge by targeting untapped search queries.</p>
                    </div>

                    <div className="benefit">
                        <h3 className="benefit-heading">Improved ROI on Marketing Efforts</h3>
                        <p>Focusing on the right keywords maximizes your marketing budget, ensuring that your content and ads reach the right audience.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Benefits;
