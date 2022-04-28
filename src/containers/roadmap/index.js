import React from "react";
import { Chrono } from "react-chrono";
import { Row, Container } from "react-bootstrap";
import "./style.css";
import LiteLogo from "@data/images/icons/s1.png";

const Roadmap = () => {
    const items = [
        {
            cardTitle: "Until the launch of the collection",
            cardDetailedText: `-idea and concept ⎷ \n\n
                -technical research ⎷\n
                -team gathering ⎷\n
                -website development ⎷\n
                -drawing the collection\n
                `,
        },
        {
            cardTitle: "Until the launch of the collection",
            cardDetailedText: `-creating social media platform accounts ⎷\n
            -community building \n
            -search and implementation of partnerships\n
            -marketing and collaborations\n
            -collection launch
                `,
        },
        {
            cardTitle: "After launch and during minting",
            cardDetailedText: `-marketing and collaborations
            -generate LKMEX for rewards
            -airdrops
            -donating the first funds to Clean Hospitals after 50% minting surpass
            `,
        },
        {
            cardTitle: "After launch and during minting",
            cardDetailedText: `-founding an NGO
                -looking for developers to build the fundraising platform
                -start research and development plan for fundraising platform
                `,
        },
        {
            cardTitle: "At the end of the sale",
            cardDetailedText: `-we continue the awareness campaign so that the collection grows in value and exposure
                -partnerships development even more
                -agreement with developers to build the fundraising platform
                `,
        },
        {
            cardTitle: "At the end of the sale",
            cardDetailedText: `-concept and design for the next collection of NFTs
                -airdrops and rewards`,
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
                            <img src={LiteLogo} alt="image1" />
                            <img src={LiteLogo} alt="image2" />
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
