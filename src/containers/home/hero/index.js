/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@components/ui/button";
import Parallax from "parallax-js";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    HomeSliderItem,
    Section,
    Content,
    SubTitle,
    HeroTitleWrap,
    LayerStyle,
    SliderShape,
    DonateCircleWrap,
    DonateContent,
} from "./style";
import { useTranslation } from "gatsby-plugin-react-i18next";
import SliderImg from "@assets/images/homepage/slider-image.gif";

const Hero = () => {
    const heroSlider = useStaticQuery(graphql`
        query HeroSlider {
            heroJson {
                id
                subTitle
                title
                circleImage {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                sliderImage {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                shapeImage1 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                shapeImage2 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    const {
        subTitle,
        title,
        circleImage,
        sliderImage,
        shapeImage1,
        shapeImage2,
    } = heroSlider.heroJson;

    const image = getImage(sliderImage);
    const image1 = getImage(circleImage);
    const image2 = getImage(shapeImage1);
    const image3 = getImage(shapeImage2);

    // Parallax actives
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });
        parallaxInstance.enable();
        return () => parallaxInstance.disable();
    }, []);
    const { t } = useTranslation();

    return (
        <Section>
            <HomeSliderItem>
                <Container>
                    <Row>
                        <Col md={6} lg={6} xl={7}>
                            <Content>
                                <SubTitle>
                                    <StaticImage
                                        src="../../../data/images/icons/1.png"
                                        alt="eHopeWarriors"
                                    />
                                    <h6>{t("be_a_hero")}</h6>
                                </SubTitle>
                                <HeroTitleWrap>
                                    <h1
                                        dangerouslySetInnerHTML={{
                                            __html: t("welcome_to_react"),
                                        }}
                                    />
                                </HeroTitleWrap>
                                <div
                                    className="btn-wrp"
                                    sx={{ display: "flex" }}
                                >
                                    <Button path="/about-us" color="gradient">
                                        About us{" "}
                                        <i className="flaticon-right-arrow"></i>
                                    </Button>
                                    <a
                                        href="https://linktr.ee/ehopewarriors"
                                        target="_blank"
                                    >
                                        <Button
                                            variant="outlined"
                                            sx={{ ml: "10px" }}
                                        >
                                            Social Media{" "}
                                            <i className="flaticon-right-arrow"></i>
                                        </Button>
                                    </a>
                                </div>
                            </Content>
                        </Col>
                        <Col
                            md={{ span: 5, offset: 1 }}
                            lg={{ span: 5, offset: 1 }}
                            xl={{ span: 5, offset: 0 }}
                        >
                            <LayerStyle>
                                <div className="thumb scene">
                                    <span
                                        className="scene-layer"
                                        data-depth="0.20"
                                    >
                                        <img
                                            width="100%"
                                            className="home-gif-img"
                                            src={SliderImg}
                                        ></img>
                                    </span>
                                    <div className="shape-circle scene">
                                        <span
                                            className="scene-layer"
                                            data-depth="0.10"
                                        >
                                            <GatsbyImage
                                                image={image1}
                                                alt=""
                                            />
                                        </span>
                                        <span
                                            className="scene-layer"
                                            data-depth="0.40"
                                            ref={sceneEl}
                                        >
                                            <GatsbyImage
                                                className="circle-img"
                                                image={image3}
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="shape-style1 scene"
                                    ref={sceneEl}
                                >
                                    <span
                                        className="scene-layer"
                                        data-depth="0.30"
                                    >
                                        <GatsbyImage image={image2} alt="" />
                                    </span>
                                </div>
                                <DonateCircleWrap>
                                    <div className="pie-chart-circle"></div>
                                    <DonateContent>
                                        <div className="raised-amount">
                                            10.000
                                        </div>
                                        <StaticImage
                                            className="line-shape-img"
                                            src="../../../data/images/shape/line-s2.png"
                                            alt="Image-eHopeWarriors"
                                        />
                                        <h5 className="donate-title">
                                            {t("unique_nfts")}
                                        </h5>
                                    </DonateContent>
                                </DonateCircleWrap>
                            </LayerStyle>
                        </Col>
                    </Row>
                </Container>
                <SliderShape>
                    <div className="slider-shape">
                        <div className="shape-style1">
                            <StaticImage
                                className="shape-img1"
                                src="../../../data/images/shape/map1.png"
                                alt=""
                            />
                        </div>
                        <div className="shape-style2">
                            <StaticImage
                                className="shape-img2"
                                src="../../../data/images/shape/map2.png"
                                alt=""
                            />
                        </div>
                        <div className="shape-style3">
                            <StaticImage
                                className="shape-img3"
                                src="../../../data/images/shape/banner-line1.png"
                                alt=""
                            />
                        </div>
                        <div className="shape-style4">
                            <StaticImage
                                className="shape-img3"
                                src="../../../data/images/shape/banner-line2.png"
                                alt=""
                            />
                        </div>
                    </div>
                </SliderShape>
            </HomeSliderItem>
        </Section>
    );
};

export default Hero;
