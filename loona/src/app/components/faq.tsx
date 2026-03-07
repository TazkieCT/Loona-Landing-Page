import "./../styles/faq.css";

export default function FAQ() { 
    return (
        <div className="faq-container">
            <div className="faq-title"><span className="slip">FAQ: Fairies</span> Answering Questions</div>
            <div className="faq-item">
                <input type="checkbox" id="faq1" className="faq-toggle" />
                <label htmlFor="faq1" className="faq-content">
                    <div className="faq-question">What is Loóna?</div>
                    <svg className="faq-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" fill="none">
                        <circle opacity="0.05" cx="25" cy="25" r="25" transform="rotate(90 25 25)" fill="white"></circle>
                        <path d="M29.9998 23.9998L25 28.9995L20.0002 23.9998" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </label>
                <div className="faq-answer">
                    <div>
                        <p>Loóna is an award-winning app that serves as a healthy wind-down ritual to put people's minds to bed. Loóna is known for its enchanting and immersive experiences called escapes.</p>
                    </div>
                </div>
            </div>
            <div className="faq-item">
                <input type="checkbox" id="faq2" className="faq-toggle" />
                <label htmlFor="faq2" className="faq-content">
                    <div className="faq-question">What is an Escape?</div>
                    <svg className="faq-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" fill="none">
                        <circle opacity="0.05" cx="25" cy="25" r="25" transform="rotate(90 25 25)" fill="white"></circle>
                        <path d="M29.9998 23.9998L25 28.9995L20.0002 23.9998" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </label>
                <div className="faq-answer">
                    <div>
                        <p>The app's number one feature loved by users incorporates science-based relaxation techniques with innovative motion graphics, cultivating a spectacular rotating scene to color in. Combined with soothing narrative tales, escapes help users disengage from anxious thoughts and get in the right mood for a restful night's sleep.</p>
                    </div>
                </div>
            </div>
            <div className="faq-item">
                <input type="checkbox" id="faq3" className="faq-toggle" />
                <label htmlFor="faq3" className="faq-content">
                    <div className="faq-question">Where is Loóna available?</div>
                    <svg className="faq-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" fill="none">
                        <circle opacity="0.05" cx="25" cy="25" r="25" transform="rotate(90 25 25)" fill="white"></circle>
                        <path d="M29.9998 23.9998L25 28.9995L20.0002 23.9998" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </label>
                <div className="faq-answer">
                    <div>
                        <p>Loóna is available globally for download on iOS at the App Store and Android at Google Play Market.</p>
                    </div>
                </div>
            </div>
            <div className="faq-item">
                <input type="checkbox" id="faq4" className="faq-toggle" />
                <label htmlFor="faq4" className="faq-content">
                    <div className="faq-question">Can I buy a gift card?</div>
                    <svg className="faq-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" fill="none">
                        <circle opacity="0.05" cx="25" cy="25" r="25" transform="rotate(90 25 25)" fill="white"></circle>
                        <path d="M29.9998 23.9998L25 28.9995L20.0002 23.9998" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </label>
                <div className="faq-answer">
                    <div>
                        <p>Give the gift of sleep! Loóna gift cards are available for purchase at <a href="https://get.loona.app/gift" target="_blank" rel="noopener noreferrer">https://loona.app./gift</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
