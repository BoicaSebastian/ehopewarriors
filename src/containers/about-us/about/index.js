/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { graphql, useStaticQuery } from "gatsby";
import MissionBox from "@components/mission";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SectionArea,
    LayerStyle,
    Thumb,
    AboutTextStyle,
    AboutContent,
    ContentBoxWrp,
} from "./style";
import { useTranslation } from "gatsby-plugin-react-i18next";

const AboutPageArea = () => {
    const aboutSectonQery = useStaticQuery(graphql`
        query AboutPageQuery {
            aboutUsJson(id: { eq: "about-us-page-section" }) {
                id
                section_title {
                    title
                    subTitle
                }
                content1
                content2
                content3
                content4
                image1 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                mission {
                    id
                    VerientClassName
                    text1
                    text2
                    text3
                    text4
                    text5
                    text6
                    text7
                    title
                }
            }
        }
    `);
    const {
        section_title: { title, subTitle },
        image1,
        content1,
        content2,
        content3,
        content4,
        mission,
    } = aboutSectonQery.aboutUsJson;

    const imageOne = getImage(image1);
    const { t } = useTranslation();

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={9}>
                        <SectionTitle
                            sx={{ mb: "30px" }}
                            showImage={false}
                            title={title}
                            subTitle={subTitle}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} xl={4}>
                        <LayerStyle>
                            <Thumb>
                                <GatsbyImage
                                    image={imageOne}
                                    className="img-one"
                                    alt="Image-Givest"
                                />
                            </Thumb>
                        </LayerStyle>
                    </Col>
                    <Col lg={8} xl={8}>
                        <AboutContent>
                            <AboutTextStyle>
                                {t("about_us_our_story_title")}
                            </AboutTextStyle>
                            <p>{content2}</p>
                            <p>{content3}</p>
                            <p>{content4}</p>
                        </AboutContent>
                    </Col>
                    <Col>
                        <Row>
                            {mission.map((itemData) => {
                                return (
                                    <Col
                                        className="about-cols"
                                        lg={4}
                                        md={7}
                                        sm={4}
                                        key={itemData.id}
                                    >
                                        <MissionBox
                                            title={itemData.title}
                                            text1={itemData.text1}
                                            text2={itemData.text2}
                                            text3={itemData.text3}
                                            text4={itemData.text4}
                                            text5={itemData.text5}
                                            text6={itemData.text6}
                                            text7={itemData.text7}
                                            VerientClassName={
                                                itemData.VerientClassName
                                            }
                                        />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default AboutPageArea;
