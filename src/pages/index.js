import * as React from "react";
import Layout from "@layout";
import SEO from "@components/seo";
import Hero from "@containers/home/hero";
import ServiceArea from "@containers/home/services";
import AboutArea from "@containers/home/about";
import CausesArea from "@containers/home/causes";
import FunfactArea from "../containers/home/funfact";
import TestimonialArea from "../containers/home/testimonial";
import SponsorsArea from "../containers/home/sponsors";
import TeamArea from "../containers/volunteer/team";
import "./../i18n";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <p>
                <Trans>be_a_hero</Trans>
            </p>
            <Hero />
            <ServiceArea />
            <AboutArea />
            <CausesArea />
            <div className="home-team-wrapper">
                <TeamArea />
            </div>
            <FunfactArea />
            <TestimonialArea />
            <SponsorsArea />
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
