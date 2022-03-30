/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import BlogSidebar from "@containers/blog/blog-sideber";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    ServicesDetailsArea,
    ServicesDetailsContent,
    ServicesDetails,
    Thumb,
    ServicesTitle,
    DocumentItem,
    DocumentItemTitle,
} from "./style";

const ServicesPosts = ({ data, location, pageContext }) => {
    const servicesPostData = data.serversJson;

    const image = getImage(servicesPostData.image.childImageSharp);

    return (
        <Layout>
            <SEO title={servicesPostData.title} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title={servicesPostData.title}
            />
            <ServicesDetailsArea>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ServicesDetailsContent>
                                <ServicesDetails>
                                    <Thumb>
                                        <GatsbyImage
                                            image={image}
                                            alt={servicesPostData.title}
                                        />
                                    </Thumb>
                                    <ServicesTitle>
                                        {servicesPostData.title}
                                    </ServicesTitle>
                                    <p>{servicesPostData.parText}</p>
                                    <p>
                                        {servicesPostData &&
                                            servicesPostData.destails1}
                                    </p>
                                    <p>
                                        {servicesPostData &&
                                            servicesPostData.destails2}
                                    </p>
                                    <p>
                                        {servicesPostData &&
                                            servicesPostData.destails3}
                                    </p>
                                    <p>
                                        {servicesPostData &&
                                            servicesPostData.destails4}
                                    </p>
                                    <p>
                                        {servicesPostData &&
                                            servicesPostData.destails5}
                                    </p>
                                    <p>
                                        {servicesPostData &&
                                            servicesPostData.destails6}
                                    </p>
                                    <p>
                                        {servicesPostData &&
                                            servicesPostData.destails7}
                                    </p>
                                </ServicesDetails>
                            </ServicesDetailsContent>
                        </Col>
                    </Row>
                </Container>
            </ServicesDetailsArea>
        </Layout>
    );
};

ServicesPosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const servicesPostsQuery = graphql`
    query ServicesPostsBySlug($slug: String!) {
        serversJson(fields: { slug: { eq: $slug } }) {
            id
            title
            parText
            itemClassName
            destails1
            destails2
            destails3
            destails4
            destails5
            destails6
            destails7
            image {
                childImageSharp {
                    gatsbyImageData(width: 780)
                }
            }
        }
    }
`;
export default ServicesPosts;
