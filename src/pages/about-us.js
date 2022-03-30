import Layout from "@layout";
import SEO from "@components/seo";
import PropTypes from "prop-types";
import FunfactArea from "../containers/home/funfact";
import AboutPageArea from "../containers/about-us/about";
import PageBreadcrumb from "../components/pagebreadcrumb";
import VolunteerArea from "../containers/about-us/volunteer";

const AboutUsPage = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="About us" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="About Us"
            />
            <AboutPageArea />
            <VolunteerArea />
            <FunfactArea />
        </Layout>
    );
};

AboutUsPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default AboutUsPage;
