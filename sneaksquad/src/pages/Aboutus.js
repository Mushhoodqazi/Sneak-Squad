import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./About.css"
function Aboutus() {
    const [abt, setabt] = useState(
        [
            {
                pp: "StockX Verified",
                tt: "Every item sold goes through our proprietary multi-step verification process with our team of expert authenticators."

            },
            {
                pp: "Transparent Pricing",
                tt: "Our real-time marketplace works just like the stock market –  allowing you to buy and sell the most coveted items at their true market price."

            },
            {
                pp: "Global Access",
                tt: "Whether it’s pre-release, regionally limited, or “sold out” – our millions of customers from over 200 countries allow you to easily secure those hard-to-find, coveted items."

            },
            {
                pp: "No BS",
                tt: "No chargebacks, no taking photos, no writing catchy descriptions, and no dealing with rogue buyers or sellers. We handle everything to make sure you can buy and sell with confidence."

            },
            {
                pp: "Secure",
                tt: "Preserving the integrity of our marketplace means staying a step ahead. Our security and fraud systems, powered by our world class partners, have your personal information covered 24/7."

            },
            {
                pp: "Here for you",
                tt: "Thanks to our Help Center, Chatbot, and dedicated global-support staff, you can be sure that we are always available to answer any and every question regarding our marketplace."

            },
        ]
    )
    return (
        <>
            <Navbar />
            <div className="row"  >
                {
                    abt.map((e) => (
                        <div className="card">
                            <div class="card-body"  >
                                <h5 class="card-title">{e.pp}</h5>
                                <p class="card-text">{e.tt} </p>

                            </div>
                        </div>
                    )

                    )
                }


            </div>
                <Footer />
        </>
    );
}

export default Aboutus;