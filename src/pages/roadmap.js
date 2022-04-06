import Layout from "@layout";
import SEO from "@components/seo";
import PropTypes from "prop-types";
import PageBreadcrumb from "../components/pagebreadcrumb";
import RoadmapComponent from "../containers/roadmap";

const Roadmap = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="Roadmap" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Roadmap"
            />
            <RoadmapComponent />
        </Layout>
    );
};

Roadmap.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default Roadmap;
