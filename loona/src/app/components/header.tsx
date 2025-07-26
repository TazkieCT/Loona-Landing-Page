import "./../styles/header.css";

export default function Header() {
    return (
        <header className="hero-header">
            <img src="/logo_loona.40e6cac69c0e50021a456dd44f6d6243.svg" className="logo" />
            <div className="background">
                <div className="top-shadow-gradient"></div> {/* topShadowGradient */}
                <video src="video.97acaa48e0dc5754e258.mp4" autoPlay loop playsInline muted/>
                <div className="bottom-shadow-gradient"></div> {/* botShadowGradient */}
            </div>
            
            <div className="hero-title">
                Say goodnight to racing thoughts <span className="slip">and drift off to sleep</span>
            </div>
            <div className="hero-desc">
                An award-winning app designed to gently occupy your mind with soothing interactive content, shedding the worries of today and setting you up for a serene tomorrow.
            </div>
            <button className="hero-button">
                <div className="overlay"></div>
                Try for free
            </button>
        </header>
    )
}
