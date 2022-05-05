/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { SectionArea, BrandLogoContent } from "./style";
import SponsorLogo from "@components/sponsors";
import { graphql, useStaticQuery } from "gatsby";

const SponsorsArea = () => {
    const sponsorsQuery = useStaticQuery(graphql`
        query SponsorsQuery {
            allSponsorsJson {
                edges {
                    node {
                        id
                        sponsorLogo {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        link
                    }
                }
            }
        }
    `);
    const sponsorsData = sponsorsQuery.allSponsorsJson.edges;
    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col
                        sm={{ span: 8, offset: 2 }}
                        md={{ sapn: 8, offset: 2 }}
                        lg={{ span: 4, offset: 0 }}
                        xl={4}
                    >
                        <SectionTitle
                            texttheme
                            sx={{
                                mb: ["30px", "50px", "60px", "60px", "60px"],
                                mt: ["0px", "0px", "0px", "0px", "60px"],
                            }}
                            title={"Our Current Partners and Sponsors."}
                        />
                    </Col>
                    <Col
                        xl={{ span: 7, offset: 1 }}
                        lg={8}
                        className="d-flex align-items-center"
                    >
                        <BrandLogoContent>
                            <Row className="row row-cols-3 row-cols-sm-5">
                                {sponsorsData &&
                                    sponsorsData.map((item) => {
                                        return (
                                            <Col key={item.node.id}>
                                                <a
                                                    href={item.node.link}
                                                    target="_blank"
                                                    style={{
                                                        display: "block",
                                                        width: "125%",
                                                    }}
                                                >
                                                    <SponsorLogo
                                                        sponsorLogo={
                                                            item.node
                                                                .sponsorLogo
                                                                .childImageSharp
                                                        }
                                                    />
                                                </a>
                                            </Col>
                                        );
                                    })}
                            </Row>
                        </BrandLogoContent>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default SponsorsArea;
