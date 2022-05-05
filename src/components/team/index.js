import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import {
    TeamMemberWrap,
    Thumb,
    SocialIcons,
    Content,
    TeamMemberInfo,
    MemberName,
    Designation,
} from "./style";

const Team = ({
    firstName,
    lastName,
    designation,
    images,
    instagram,
    linkedin,
    twitter,
}) => {
    const imgs = getImage(images);
    return (
        <TeamMemberWrap>
            <Thumb className="thumb">
                <GatsbyImage image={imgs} alt={firstName} />
                <SocialIcons className="socialHover">
                    <a href={instagram} target="_blank">
                        <i className="icofont-instagram"></i>
                    </a>
                    {linkedin && (
                        <a href={linkedin} target="_blank">
                            <i className="icofont-linkedin"></i>
                        </a>
                    )}
                    {twitter && (
                        <a href={twitter} target="_blank">
                            <i className="icofont-twitter"></i>
                        </a>
                    )}
                </SocialIcons>
            </Thumb>
            <Content>
                <TeamMemberInfo>
                    <MemberName>
                        <a
                            className="member-name"
                            href="#/"
                            style={{ display: "block" }}
                        >
                            {firstName}
                        </a>
                        <a className="member-name" href="#/">
                            {lastName}
                        </a>
                    </MemberName>
                    <Designation>{designation}</Designation>
                </TeamMemberInfo>
            </Content>
        </TeamMemberWrap>
    );
};

Team.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    instagram: PropTypes.string,
    designation: PropTypes.string,
    images: PropTypes.object,
};

export default Team;
