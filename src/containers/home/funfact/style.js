import styled, { themeGet, device } from "@theme/utils";

export const SectionArea = styled.section`
    padding: 60px 15px 267px;
    ${device.medium} {
        padding: 38px 0 292px;
    }
    ${device.large} {
        padding: 88px 0 292px;
    }
    ${device.xlarge} {
        padding: 50px 0 200px;
    }
    .container {
        max-width: 1310px;
    }
    background-color: #f7f7f7;
    .funfact-item {
        border-bottom: 1px solid #eaecec;
        padding: 60px 0 63px;
        transition: 0.3s;
        -webkit-transition: 0.3s;
        -moz-transition: 0.3s;
        -ms-transition: 0.3s;
        -o-transition: 0.3s;
        &:last-child {
            border-right: 1px solid #eaecec;
        }
        ${device.small} {
            border-left: 1px solid #eaecec;
        }
        ${device.medium} {
            padding: 90px 0 93px;
            border-left: 1px solid #eaecec;
            border-bottom: none;
        }
        ${device.xlarge} {
            padding: 70px 0 70px;
            border-left: 1px solid #eaecec;
            border-bottom: none;
        }
    }
`;

export const FunFactItefffm = styled.div``;
