import React from "react";
import { Chrono } from "react-chrono";
import { Row, Container } from "react-bootstrap";
import "./style.css";

const Roadmap = () => {
    const items = [
        {
            title: "#1",
            cardTitle: "Until the launch of the collection",
            cardDetailedText: `-idea and concept ⎷ \n\n
                -technical research ⎷\n
                -team gathering ⎷\n
                -website development ⎷\n
                -drawing the collection\n
                `,
        },
        {
            title: "#2",
            cardTitle: "Until the launch of the collection",
            cardDetailedText: `-creating social media platform accounts ⎷\n
            -community building \n
            -search and implementation of partnerships\n
            -marketing and collaborations\n
            -collection launch
                `,
        },
        {
            title: "#3",
            cardTitle: "After launch and during minting",
            cardDetailedText: `-marketing and collaborations
            -generate LKMEX for rewards
            -airdrops
            -donating the first funds to Clean Hospitals after 50% minting surpass
            `,
        },
        {
            title: "#4",
            cardTitle: "After launch and during minting",
            cardDetailedText: `-founding an NGO
                -looking for developers to build the fundraising platform
                -start research and development plan for fundraising platform
                `,
        },
        {
            title: "#5",
            cardTitle: "At the end of the sale",
            cardDetailedText: `-we continue the awareness campaign so that the collection grows in value and exposure
                -partnerships development even more
                -agreement with developers to build the fundraising platform
                `,
        },
        {
            title: "#6",
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
                    ></Chrono>
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
