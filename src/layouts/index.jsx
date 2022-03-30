import React from "react";
import PropTypes from "prop-types";
import theme from "@theme";
import { ThemeProvider } from "@theme/utils";
import { GlobalCSS } from "@assets/css/style";
import "./style.css";
import "@assets/css/fonts.css";
import "@assets/css/icofont.css";
import "@assets/css/bootstrap.css";
import Header from "./header";
import Footer from "./footer";
import i18n from "./../i18n";
import { DropdownButton, Dropdown, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { SocialIcon } from "react-social-icons";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

const Layout = ({ children }) => {
    const { languages, changeLanguage } = useI18next();

    const [langSelected, setLangSelected] = useState("EN");
    const [flag, setFlag] = useState("GB");
    const [linkUrl, setLinkUrl] = useState("");

    useEffect(() => {
        setLinkUrl(window.location.pathname);
        if (linkUrl.includes("/ro")) {
            setFlag("RO");
            setLangSelected("RO");
        } else {
            setFlag("GB");
            setLangSelected("EN");
        }
    });

    return (
        <div>
            <ThemeProvider theme={theme}>
                <div className="wrapper">
                    <GlobalCSS />
                    <div className="top-header">
                        <Container>
                            <div className="inline-top-header">
                                <div className="inline-top-header">
                                    <ReactCountryFlag
                                        countryCode={flag}
                                        svg
                                        style={{
                                            width: "1.5em",
                                            height: "1.5em",
                                        }}
                                    />
                                </div>
                                <div className="inline-top-header">
                                    <DropdownButton
                                        id="dropdown-item-button"
                                        title={langSelected}
                                        style={{ zIndex: "9999" }}
                                    >
                                        {languages.map((lng) => (
                                            <Dropdown.Item
                                                key={lng}
                                                as="button"
                                                onClick={() => {
                                                    changeLanguage(lng);
                                                }}
                                            >
                                                <ReactCountryFlag
                                                    countryCode={
                                                        lng === "en"
                                                            ? "GB"
                                                            : "RO"
                                                    }
                                                    svg
                                                    style={{
                                                        width: "2em",
                                                        height: "2em",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                {lng.toUpperCase()}
                                            </Dropdown.Item>
                                        ))}
                                    </DropdownButton>
                                </div>
                            </div>
                            <div className="inline-top-header float-header">
                                <SocialIcon
                                    network="twitter"
                                    style={{ height: 25, width: 25 }}
                                    bgColor="#fc6539"
                                    url="https://www.twitter.com"
                                    target="_blank"
                                />
                                <SocialIcon
                                    network="facebook"
                                    style={{ height: 25, width: 25 }}
                                    bgColor="#fc6539"
                                    url="https://www.facebook.com"
                                    target="_blank"
                                />
                                <SocialIcon
                                    network="instagram"
                                    style={{ height: 25, width: 25 }}
                                    bgColor="#fc6539"
                                    url="https://www.instagram.com"
                                    target="_blank"
                                />
                            </div>
                        </Container>
                    </div>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </ThemeProvider>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
