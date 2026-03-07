import "./../styles/card_grid.css";

export default function CardGrid2() {
    return (
        <div className="card-2-layout">
            <div className="top-gradient"></div>
            <div className="background-card-2"></div>
            <div className="title">
                Backed by science-based <span className="slip">relaxation techniques</span>
            </div>
            {/* <button className="button-title">Science Evidence
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M0.749857 1.24996L4.49971 4.99976L0.749857 8.74955" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button> */}
            <div className="card-grid-2">
                <div className="card">
                    <img src="/card-doctor.png" className="background-card" alt="Card 1" />
                    <div className="content-card">
                        <h3 className="card-description-dark">Loóna bundles the most popular science-based relaxation techniques in one product: <span className="slip">guided imagery, art activities, calming sounds,</span> and <span className="slip">breathing exercises.</span></h3>
                        <div className="card-subtitle">
                            <b>Jennifer Mundt</b>
                            <br/>
                            PhD, Sleep Psychologist, Northwestern Medicine Sleep Disorders Center
                        </div>
                        <img src="/doctor_signature.png" className="image-card-2-1" alt="Card 1" />
                        <img src="/doctor.png" className="image-card-2-1-doctor" alt="Card 1" />
                    </div>
                </div>
                <div className="card">
                    <img src="/card-activities.png" className="background-card" alt="Card 2" />
                    <div className="content-card">
                        <h3 className="card-title">Art activities</h3>
                        <div className="card-description">
                            <div>
                                We have integrated art activities into our escapes, as they have been associated with <span className="accent">improved emotional and mental well-being.</span>
                            </div>
                        </div>
                        <img src="/art_activities_progress.png" className="image-card-2-2" alt="Card 2" />
                        <img src="/art_activities_phone.png" className="image-card-2-2-art" alt="Card 2" />
                    </div>
                </div>
                <div className="card">
                    <img src="/breathing_practices_bg.png" className="background-card" alt="Card 3" />
                    <div className="content-card">
                        <h3 className="card-title">Breathing practices</h3>
                        <div className="card-description">
                            <div className="card-description-3">
                                Experts recommend breathing exercises as a way of <span className="accent">coping with anxiety by regulating your heart rate.</span>
                            </div>
                        </div>
                        <img src="/breathing_practices_phone.png" className="image-card-3" alt="Card 3" />
                    </div>
                </div>
                <div className="card">
                    <img src="/sound_healing_bg.png" className="background-card" alt="Card 3" />
                    <div className="content-card text-dark">
                        <h3 className="card-title">Sound healing</h3>
                        <div className="card-description">
                            <div className="card-description-4">
                                Research shows that listening to music <span className="accent">influences your body physically and improves sleep quality.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-gradient"></div>
        </div>
    );
}