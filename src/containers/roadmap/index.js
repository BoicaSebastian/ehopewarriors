import React from "react";
import { Chrono } from "react-chrono";
import { Row, Container } from "react-bootstrap";
import "./style.css";
import img1 from "@data/images/icons/10.png";
import img2 from "@data/images/icons/2.png";
import img3 from "@data/images/icons/3.png";
import img4 from "@data/images/icons/4.png";
import img5 from "@data/images/icons/5.png";
import img6 from "@data/images/icons/6.png";
import img7 from "@data/images/icons/7.png";
import img8 from "@data/images/icons/8.png";
import img9 from "@data/images/icons/9.png";

const Roadmap = () => {
    const items = [
        {
            cardTitle: "Idea and concept",
            cardDetailedText: [
                "- Technical research",
                "- Team gathering ✔",
                "- Find the right graphic designer ✔",
            ],
        },
        {
            cardTitle: "Implementation",
            cardDetailedText: [
                "- Drawing the collection - 45%",
                "- Website development ✔",
                "- Creating our community channelss ✔",
            ],
        },
        {
            cardTitle: "Community building",
            cardDetailedText: [
                "- Search and implementation of partnerships ✔",
                "- Launching social networks ✔",
                "- Launching website ✔",
                "- Marketing and collaborations",
            ],
        },
        {
            cardTitle: "Public MINT",
            cardDetailedText: `- Launch NFT collection`,
        },
        {
            cardTitle: "After launch and during minting",
            cardDetailedText: [
                "- Marketing and new collaborations",
                "- Generate LKMEX for rewards",
                "- Airdrops",
            ],
        },
        {
            cardTitle: "Things are starting to heat up",
            cardDetailedText: [
                "- Founding our HOPE NGO",
                "- Donating the first funds to Clean Hospitals after we surpass 50% minting",
            ],
        },
        {
            cardTitle: "Fundraising platform and useful info",
            cardDetailedText: [
                "- Looking for developers to build the fundraising platform",
                "- Start research and development plan for the fundraising platform",
            ],
        },
        {
            cardTitle: "At the end of the sale",
            cardDetailedText: [
                "- We continue the awareness campaign so that the collection grows in value and exposure",
                "- Partnerships development even more",
                "- Agreement with developers to build the fundraising platform",
                "- Concept and design for the next collection of NFTs",
                "- Airdrops and rewards",
            ],
        },
        {
            cardTitle: "Exploration",
            cardDetailedText: [
                "- HOPE token",
                "- Merchandise shop",
                "- Gamification",
            ],
        },
    ];

    return (
        <Row>
            <Container>
                <div id="roadmap" style={{ marginBottom: "300px" }}>
                    <Chrono
                        items={items}
                        hideControls="true"
                        useReadMore="true"
                        mode="VERTICAL_ALTERNATING"
                        enableOutline
                        disableNavOnKey
                        theme={{
                            primary: "#FC6539",
                            secondary: "#FEA444",
                            cardBgColor: "#fff",
                            cardForeColor: "#001d23",
                            titleColor: "#001d23",
                        }}
                    >
                        <div className="chrono-icons">
                            <img src={img1} alt="image1" />
                            <img src={img2} alt="image2" />
                            <img src={img3} alt="image3" />
                            <img src={img4} alt="image4" />
                            <img src={img5} alt="image5" />
                            <img src={img6} alt="image6" />
                            <img src={img7} alt="image7" />
                            <img src={img8} alt="image8" />
                            <img src={img9} alt="image9" />
                        </div>
                    </Chrono>
                    <p style={{ textAlign: "center" }}>
                        We will come back with more accurate details and data as
                        events get on track!
                    </p>
                </div>
            </Container>
        </Row>
    );
};

export default Roadmap;
