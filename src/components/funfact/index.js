import React from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    FunInnerContent,
    IconBox,
    FunFactContent,
    NumberOfFunArea,
    Title,
} from "./style";

const FunfactItem = ({
    title,
    iconImage,
    shapImage,
    countNumber,
    countAmount,
}) => {
    const iconImg = getImage(iconImage);
    const shapImg = getImage(shapImage);

    return (
        <FunInnerContent>
            <IconBox>
                <GatsbyImage
                    className="icon"
                    image={iconImg}
                    alt="Image-eHopeWarriors"
                />
                <GatsbyImage
                    className="shape-img"
                    image={shapImg}
                    alt="Image-eHopeWarriors"
                />
            </IconBox>
            <FunFactContent>
                <NumberOfFunArea>
                    <h2>
                        <span className="counter-animate">
                            {" "}
                            <CountUp Start={0} end={countNumber} />{" "}
                        </span>
                        {countAmount}
                    </h2>
                </NumberOfFunArea>
                <StaticImage
                    className="line-shape"
                    src="../../data/images/shape/funfact-line1.png"
                    alt="Image-eHopeWarriors"
                />
                <Title>
                    {"//"} {title}
                </Title>
            </FunFactContent>
        </FunInnerContent>
    );
};

FunfactItem.propTypes = {
    title: PropTypes.string,
    iconImage: PropTypes.object,
    shapImage: PropTypes.object,
    countNumber: PropTypes.number,
    countAmount: PropTypes.string,
};

export default FunfactItem;
