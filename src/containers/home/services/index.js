import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceItem from "@components/servies";
import { ServiceAare } from "./style";
import { graphql, useStaticQuery } from "gatsby";
import Accordion from "react-bootstrap/Accordion";

const ServiceArea = () => {
    const ServiceQuery = useStaticQuery(graphql`
        query ServiceDataQuery {
            allServersJson {
                edges {
                    node {
                        id
                        title
                        parText
                        roadmap1
                        roadmap2
                        roadmap3
                        itemClassName
                        iconImage {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const ServiceData = ServiceQuery.allServersJson.edges;

    return (
        <ServiceAare>
            <Container>
                <Row className="icon-box-style1">
                    {ServiceData &&
                        ServiceData.map((data) => {
                            return (
                                <Col lg={4} md={6} sm={6} key={data.node.id}>
                                    <ServiceItem
                                        title={data.node.title}
                                        parText={data.node.parText}
                                        slug={data.node.fields.slug}
                                        itemClassName={data.node.itemClassName}
                                        image={data.node.iconImage}
                                        roadmap1={data.node.roadmap1}
                                        roadmap2={data.node.roadmap2}
                                        roadmap3={data.node.roadmap3}
                                    />
                                </Col>
                            );
                        })}
                </Row>
                {/* <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}
            </Container>
        </ServiceAare>
    );
};

export default ServiceArea;
