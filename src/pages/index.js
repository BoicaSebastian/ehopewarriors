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

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <Hero />
            <ServiceArea />
            <AboutArea />
            <CausesArea />
            <TeamArea />
            <FunfactArea />
            <TestimonialArea />
            <SponsorsArea />
        </Layout>
    );
};

export default IndexPage;
