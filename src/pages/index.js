import * as React from "react";

import Layout from "@layout";
import SEO from "@components/seo";
import Hero from "@containers/home/hero";
import ServiceArea from "@containers/home/services";
import AboutArea from "@containers/home/about";
import CausesArea from "@containers/home/causes";
import FunfactArea from "../containers/home/funfact";
import EventArea from "../containers/home/events";
import TestimonialArea from "../containers/home/testimonial";
import SponsorsArea from "../containers/home/sponsors";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <Hero />
            <ServiceArea />
            <AboutArea />
            <CausesArea />
            <FunfactArea />
            <EventArea />
            <TestimonialArea />
            <SponsorsArea />
        </Layout>
    );
};

export default IndexPage;
