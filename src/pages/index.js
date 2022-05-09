import * as React from "react";
import Layout from "@layout";
import SEO from "@components/seo";
import Hero from "@containers/home/hero";
import ServiceArea from "@containers/home/services";
import Faq from "@containers/home/faq";
import FunfactArea from "../containers/home/funfact";
import SponsorsArea from "../containers/home/sponsors";
import TeamArea from "../containers/volunteer/team";
import "./../i18n";
import { graphql } from "gatsby";
import CookieConsent from "react-cookie-consent";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <Hero />
            <ServiceArea />
            <Faq />
            <SponsorsArea />
            <div className="home-team-wrapper">
                <TeamArea />
            </div>
            <FunfactArea />
            <CookieConsent
                location="bottom"
                buttonText="I understand!"
                style={{ background: "#fff", color: "2B373B" }}
                buttonStyle={{
                    background: "#FC6539",
                    color: "#fff",
                    fontSize: "15px",
                }}
                expires={30}
            >
                We care about your data, and we use cookies only to improve your
                experience with our website.
            </CookieConsent>
        </Layout>
    );
};

export default IndexPage;
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
