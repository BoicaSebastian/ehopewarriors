import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import {
    ContentBoxItem,
    Title,
    DesctionTextOne,
    DesctionTextTwo,
} from "./style";

const MissionBox = ({
    title,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    VerientClassName,
}) => {
    return (
        <ContentBoxItem className={`${VerientClassName}`}>
            <Title>{title}</Title>
            <DesctionTextOne>{text1}</DesctionTextOne>
            <DesctionTextOne>{text2}</DesctionTextOne>
            <DesctionTextOne>{text3}</DesctionTextOne>
            <DesctionTextOne>{text4}</DesctionTextOne>
            <DesctionTextOne>{text5}</DesctionTextOne>
            <DesctionTextOne>{text6}</DesctionTextOne>
            <DesctionTextOne>{text7}</DesctionTextOne>
        </ContentBoxItem>
    );
};

MissionBox.propTypes = {
    title: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    VerientClassName: PropTypes.string,
};

export default MissionBox;
