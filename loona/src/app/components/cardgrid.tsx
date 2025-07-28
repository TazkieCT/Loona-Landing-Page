import "./../styles/cardgrid.css";

export default function CardGrid() {
    return (
            <div className="grid">
                <div className="card">
                    <img src="/anxiety_bg.da8b8bd783d8dc64d88e.png" className="background-card" alt="Card 1" />
                    <div className="content-card">
                        <h3 className="card-title">Relieve anxiety. <span className="slip">Interact with calming activities</span> to hold your focus just long enough to <span className="slip">quiet your racing thoughts.</span></h3>
                        <div className="card-description"></div>
                        <img src="/anxiety_breadcrumb.8128210db9fba0187f47.png" className="image-card-1" alt="Card 1" />
                    </div>
                </div>
                <div className="card">
                    <img src="/ease_into_sleep_bg.07379e4fb47ab47ed871.png" className="background-card" alt="Card 2" />
                    <div className="content-card">
                        <h3 className="card-title">Ease <span className="slip-2">into sleep</span></h3>
                        <div className="card-description">
                            <div className="card-description-2">
                                <span className="accent">Create a comforting yet engaging nightly routine</span> filled with wonder to blanket you in slumber.
                            </div>
                        </div>
                        <img src="/ease_into_sleep_phone.9ebc9b974f548258630d.png" className="image-card-2" alt="Card 2" />
                    </div>
                </div>
                <div className="card">
                    <img src="/wake_up_bg.6ce07aec3bd2897222a5.png" className="background-card" alt="Card 3" />
                    <div className="content-card">
                        <h3 className="card-title"><span className="slip-3">Wake up</span> refreshed</h3>
                        <div className="card-description">
                            <div className="card-description-3">
                                <span className="accent">It`s hard to be a morning person if you haven`t slept all night.</span> Treat yourself to rest and wake up on the right side of the bed.
                            </div>
                        </div>
                        <img src="/wake_up_phone.2da7d98343c20d110c40.png" className="image-card-3" alt="Card 3" />
                    </div>
                </div>
                <div className="card">
                    <img src="/perform_better_bg.34e22940b2c8b454c3b4.png" className="background-card" alt="Card 3" />
                    <div className="content-card">
                        <h3 className="card-title"><span className="slip">Perform</span> better</h3>
                        <div className="card-description">
                            <div className="card-description-4">
                                <span className="accent">Utilize your sleep to jumpstart your body and mind.</span> Usher in a better, more productive, and creative new day.
                            </div>
                        </div>
                        <img src="/perform_better_progress.a0953a28a2a7ff54088b.png" className="image-card-4" alt="Card 3" />
                    </div>
                </div>
            </div>
    );
}