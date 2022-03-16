import React from "react";
import PropTypes from "prop-types";
import theme from "@theme";
import { ThemeProvider } from "@theme/utils";
import { GlobalCSS } from "@assets/css/style";
import "@assets/css/fonts.css";
import "@assets/css/icofont.css";
import "@assets/css/bootstrap.css";
import Header from "./header";
import Footer from "./footer";
import { useTranslation } from "react-i18next";
import i18n from "./../i18n";
import { Container, DropdownButton, Dropdown } from "react-bootstrap";
import { useState } from "react";

const Layout = ({ children }) => {
    // const { t } = useTranslation();
    const [langSelected, setLangSelected] = useState("EN");

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        const langUpperCase = lng.toUpperCase();
        setLangSelected(langUpperCase);
    };
    return (
        <div>
            <ThemeProvider theme={theme}>
                <div className="wrapper">
                    <GlobalCSS />
                    <Container>
                        <div>
                            <DropdownButton
                                id="dropdown-item-button"
                                title={langSelected}
                                style={{ "z-index": "9999" }}
                            >
                                <Dropdown.Item
                                    as="button"
                                    onClick={() => changeLanguage("en")}
                                >
                                    EN
                                </Dropdown.Item>
                                <Dropdown.Item
                                    as="button"
                                    onClick={() => changeLanguage("ro")}
                                >
                                    RO
                                </Dropdown.Item>
                            </DropdownButton>
                        </div>
                        {/* <h1>{t(welcome_to_react)}</h1> */}
                        {/* <div className="right-links">
                            <a href="#!">
                                <i className="icofont-facebook"></i>
                            </a>
                            <a href="#!">
                                <i className="icofont-skype"></i>
                            </a>
                            <a href="#!">
                                <i className="icofont-twitter"></i>
                            </a>
                        </div> */}
                        {/* <h1>{t("welcome_to_react")}</h1> */}
                    </Container>
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
