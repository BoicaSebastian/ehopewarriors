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
import { useTranslation } from "react-i18next";
import i18n from "./../i18n";
import { DropdownButton, Dropdown, Container } from "react-bootstrap";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { SocialIcon } from "react-social-icons";

const Layout = ({ children }) => {
    // const { t } = useTranslation();
    const [langSelected, setLangSelected] = useState("EN");
    const [flag, setFlag] = useState("GB");
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        const langUpperCase = lng.toUpperCase();
        setLangSelected(langUpperCase);
        if (lng == "en") {
            setFlag("GB");
        } else {
            setFlag("RO");
        }
    };
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
                                        style={{ "z-index": "9999" }}
                                    >
                                        <Dropdown.Item
                                            as="button"
                                            onClick={() => changeLanguage("en")}
                                        >
                                            <ReactCountryFlag
                                                countryCode="GB"
                                                svg
                                                style={{
                                                    width: "2em",
                                                    height: "2em",
                                                    marginRight: "10px",
                                                }}
                                            />
                                            EN
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            as="button"
                                            onClick={() => changeLanguage("ro")}
                                        >
                                            <ReactCountryFlag
                                                countryCode="RO"
                                                svg
                                                style={{
                                                    width: "2em",
                                                    height: "2em",
                                                    marginRight: "10px",
                                                }}
                                            />
                                            RO
                                        </Dropdown.Item>
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
