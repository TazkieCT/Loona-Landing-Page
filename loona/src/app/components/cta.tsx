import "./../styles/cta.css";

export default function CTA() { 
    return (
        <div className="cta-container">
            <img className="background-pillow" src="pillow.png" alt="Pillow background" />
            <img className="background-pillow-blank" src="pillow.blank.png" alt="Pillow background" />
            <div className="text-wrapper">
                <div className="cta-title">
                    Power on
                    <span className="slip"> to power off</span>
                </div>
                <div className="cta-description">
                    Choose your dream plan
                </div>
                <button className="button">
                    Try for free
                </button>
            </div>
            <img className="background-grass" src="grass_bg.png" alt="Grass decoration background" />
            <img className="background-grass-mobile" src="grass_bg.mobile.png" alt="Grass decoration background" />
        </div>
    )
}