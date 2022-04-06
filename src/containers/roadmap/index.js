import React from "react";
import { Chrono } from "react-chrono";
import { Row, Container } from "react-bootstrap";
import "./style.css";

const Roadmap = () => {
    const items = [
        {
            title: "May 1940",
            cardTitle: "Dunkirk",
            cardDetailedText:
                "Men of the British Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..",
        },
        {
            title: "May 1940",
            cardTitle: "Dunkirk",
            cardDetailedText:
                "Men of the British Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..",
        },
        {
            title: "May 1940",
            cardTitle: "Dunkirk",
            cardDetailedText:
                "Men of the British Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..sh Expeditionary Force (BEF) wade out to..",
        },
    ];

    return (
        <Row>
            <Container>
                <div
                    id="roadmap"
                    style={{ height: "100%", marginBottom: "300px" }}
                >
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
                </div>
            </Container>
        </Row>
    );
};

export default Roadmap;
