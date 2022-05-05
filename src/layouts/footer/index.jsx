/** @jsx jsx */
import { jsx } from "theme-ui";
import HeartIcon from "@assets/images/svg/heart.svg";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "@components/logo";
import { graphql, useStaticQuery, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { SocialIcon } from "react-social-icons";
import {
    FooterWrap,
    FooterMain,
    WidgetItem,
    AboutWidget,
    AboutWidgetText,
    WidgetTotalRaised,
    RaisedTitle,
    CopyrightText,
    TaisedAmount,
    WidgetTitle,
    WidgetGallery,
    GalleryItem,
    WidgetMenuWrap,
    NavMenu,
    NavItem,
    FooterShapeLayer,
} from "./style";

const Footer = () => {
    const footerQuery = useStaticQuery(graphql`
        query FooterQuery {
            footerJson {
                id
                quickLink {
                    path
                    text
                }
                quickLinkTwo {
                    path
                    text
                }
                gallery {
                    galleryitem {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    path
                }
                footerShapeImage {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                footerAbout1
                footerAbout2
                raisedAmount
                menuTitle
                galleryTitle
            }
        }
    `);
    const {
        footerAbout1,
        footerAbout2,
        raisedAmount,
        menuTitle,
        galleryTitle,
        gallery,
        quickLink,
        quickLinkTwo,
        footerShapeImage,
    } = footerQuery.footerJson;
    const footerimage = getImage(footerShapeImage);
    return (
        <FooterWrap>
            <FooterMain>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <WidgetItem>
                                <AboutWidget>
                                    <Logo className="footer-logo" />
                                    <AboutWidgetText>
                                        {footerAbout1}
                                        <br />
                                        {footerAbout2}
                                    </AboutWidgetText>
                                    <WidgetTotalRaised>
                                        <RaisedTitle>
                                            Kids already helped:
                                        </RaisedTitle>
                                        <TaisedAmount>
                                            {raisedAmount}
                                        </TaisedAmount>
                                    </WidgetTotalRaised>
                                </AboutWidget>
                            </WidgetItem>
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <WidgetItem>
                                <WidgetTitle>{galleryTitle}</WidgetTitle>
                                <WidgetGallery>
                                    <Row className="row-cols-3 row-gutter-10">
                                        <SocialIcon
                                            network="twitter"
                                            style={{
                                                height: 35,
                                                width: 35,
                                                marginRight: "20px",
                                            }}
                                            bgColor="#fc6539"
                                            url="https://twitter.com/eHOPEwarriors"
                                            target="_blank"
                                        />
                                        <SocialIcon
                                            network="facebook"
                                            style={{
                                                height: 35,
                                                width: 35,
                                                marginRight: "20px",
                                            }}
                                            bgColor="#fc6539"
                                            url="https://www.facebook.com/eHOPEwarriors"
                                            target="_blank"
                                        />
                                        <SocialIcon
                                            network="instagram"
                                            style={{
                                                height: 35,
                                                width: 35,
                                                marginRight: "20px",
                                            }}
                                            bgColor="#fc6539"
                                            url="https://www.instagram.com/ehopewarriors/"
                                            target="_blank"
                                        />
                                        <SocialIcon
                                            network="telegram"
                                            style={{
                                                height: 35,
                                                width: 35,
                                                marginRight: "20px",
                                            }}
                                            bgColor="#fc6539"
                                            url="https://linktr.ee/ehopewarriors"
                                            target="_blank"
                                        />
                                        <SocialIcon
                                            network="discord"
                                            style={{
                                                height: 35,
                                                width: 35,
                                                marginRight: "20px",
                                            }}
                                            bgColor="#fc6539"
                                            url="https://discord.com/invite/HeSxDatxcp"
                                            target="_blank"
                                        />
                                    </Row>
                                </WidgetGallery>
                            </WidgetItem>
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <WidgetItem className="menu-wrap-two-column">
                                <WidgetTitle>{menuTitle}</WidgetTitle>
                                <WidgetMenuWrap>
                                    <Row>
                                        <Col
                                            xs={6}
                                            sm={6}
                                            md={6}
                                            className="pr-sm-5"
                                        >
                                            <NavMenu>
                                                {quickLink.map(
                                                    (linkItem, i) => (
                                                        <NavItem
                                                            key={`id-${i}-one`}
                                                        >
                                                            <Link
                                                                to={
                                                                    linkItem.path
                                                                }
                                                            >
                                                                {linkItem.text}
                                                            </Link>
                                                        </NavItem>
                                                    )
                                                )}
                                            </NavMenu>
                                        </Col>

                                        <Col
                                            xs={6}
                                            sm={6}
                                            md={6}
                                            className="col-6 pl-sm-5"
                                        >
                                            <NavMenu className="align-right">
                                                {quickLinkTwo.map(
                                                    (linkItem, i) => (
                                                        <NavItem
                                                            key={`id-${i}`}
                                                        >
                                                            <Link
                                                                to={
                                                                    linkItem.path
                                                                }
                                                                target="_blank"
                                                            >
                                                                {linkItem.text}
                                                            </Link>
                                                        </NavItem>
                                                    )
                                                )}
                                            </NavMenu>
                                        </Col>
                                    </Row>
                                </WidgetMenuWrap>
                            </WidgetItem>
                        </Col>
                    </Row>
                </Container>
            </FooterMain>
            <Container>
                <Row>
                    <Col sx={{ textAlign: "center" }}>
                        <CopyrightText>
                            &copy; {new Date().getFullYear()}. Made with{" "}
                            <HeartIcon /> by eHopeWarriors development team.
                        </CopyrightText>
                    </Col>
                </Row>
            </Container>
            <FooterShapeLayer>
                <GatsbyImage image={footerimage} alt="Image-eHopeWarriors" />
            </FooterShapeLayer>
        </FooterWrap>
    );
};

export default Footer;
