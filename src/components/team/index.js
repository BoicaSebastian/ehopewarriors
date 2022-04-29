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

const Team = ({ firstName, lastName, designation, images, instagram }) => {
    const imgs = getImage(images);
    console.log(instagram, "name");
    return (
        <TeamMemberWrap>
            <Thumb className="thumb">
                <GatsbyImage image={imgs} alt={firstName} />
                <SocialIcons className="socialHover">
                    <a href={instagram} target="_blank">
                        <i className="icofont-instagram"></i>
                    </a>
                    <a href="#!">
                        <i className="icofont-linkedin"></i>
                    </a>
                    <a href="#!">
                        <i className="icofont-twitter"></i>
                    </a>
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
