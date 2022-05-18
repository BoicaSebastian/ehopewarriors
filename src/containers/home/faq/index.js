/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import { SectionArea } from "./style";
import Accordion from "react-bootstrap/Accordion";
import SectionTitle from "@components/title";

const Faq = () => {
    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col className="m-auto">
                        <SectionTitle
                            sx={{ mb: "100px" }}
                            titleStyle
                            textCenter
                            title={"Frequently Asked Questions."}
                            className="faq-title"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    How can I get a eHOPEwarriors NFT?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Will be available to mint directly from our
                                    website. You will also be able to purchase
                                    from secondary markets once minting starts.
                                    Please make sure you use the correct links.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    When is the official launch?
                                </Accordion.Header>
                                <Accordion.Body>
                                    To be announced soon.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    The collection has a rarity list?
                                </Accordion.Header>
                                <Accordion.Body>
                                    All works are unique, but some are created
                                    from much rarer elements. 55 very rare,
                                    specially designed, one for each week of
                                    Matti's fight against this disease.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col lg={6}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    How much will cost to mint a eHOPEwarriors
                                    NFT?
                                </Accordion.Header>
                                <Accordion.Body>
                                    0.9 EGLD / 1,700,000 LKMEX
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    What sets your project apart from others and
                                    why should I invest?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Utility with immediate applicability in real
                                    life. Your investment has a positive impact
                                    on children who may be the next president, a
                                    future sports champion, maybe even your
                                    doctor, or a simple person who is grateful
                                    that he was helped when he needed it the
                                    most.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    How serious is the situation of children
                                    with cancer in Romania?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Very serious. There are no official
                                    statistics, but there are an estimated 569
                                    new cases of cancer in children aged 0-19
                                    years, with an incidence of 13.9% 000 pop.
                                    0-19 years, which represents 1.2% of all new
                                    cases declared in Romania.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default Faq;
