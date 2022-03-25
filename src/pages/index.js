import * as React from "react";
import Layout from "@layout";
import SEO from "@components/seo";
import Hero from "@containers/home/hero";
import ServiceArea from "@containers/home/services";
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
            <Hero />
            <ServiceArea />
            <div className="home-team-wrapper">
                <TeamArea />
            </div>
            <SponsorsArea />
            <TestimonialArea />
            <FunfactArea />
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
