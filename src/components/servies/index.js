/** @jsx jsx */
import { jsx } from "theme-ui";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import {
    IconBoxitem,
    IconBoxTop,
    IconBox,
    Title,
    ContentBox,
    SeparatorLine,
    ParText,
} from "./style";

const ServiceItem = ({
    title,
    parText,
    roadmap1,
    roadmap2,
    roadmap3,
    slug,
    image,
    itemClassName,
    link,
}) => {
    const iconImg = getImage(image);
    return (
        <IconBoxitem className={`${itemClassName} mb-5`}>
            <IconBoxTop>
                <IconBox>
                    <GatsbyImage
                        className="services-icon"
                        image={iconImg}
                        alt=""
                    />
                </IconBox>
                <Title>{title}</Title>
            </IconBoxTop>
            <ContentBox>
                <SeparatorLine>
                    <StaticImage
                        src="../../data/images/shape/line-s1.png"
                        alt="eHopeWarriors-HasTech"
                    />
                </SeparatorLine>
                <ParText>{parText}</ParText>
                <ParText>{roadmap1}</ParText>
                <ParText>{roadmap2}</ParText>
                <ParText>{roadmap3}</ParText>
                <Link
                    to={link}
                    size="small"
                    variant="outlined"
                    color="light"
                    className="services-btn"
                    sx={{ color: "#fff" }}
                >
                    View Details{" "}
                    <i sx={{ ml: "8px" }} className="flaticon-right-arrow"></i>
                </Link>
            </ContentBox>
        </IconBoxitem>
    );
};

ServiceItem.propTypes = {
    title: PropTypes.string,
    parText: PropTypes.string,
    image: PropTypes.object,
    itemClassName: PropTypes.string,
    slug: PropTypes.string,
};

// ServiceItem.defaultProps = {
//     path: "#!",
// };

export default ServiceItem;
