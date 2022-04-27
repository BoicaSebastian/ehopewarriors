import styled, { themeGet, device } from "@theme/utils";

export const SectionArea = styled.section`
    padding: 100px 0 60px;
    background-color: #001d23;
    ${device.small} {
        padding: 100px 0 20px;
    }
    ${device.large} {
        padding: 150px 0 150px;
    }
    .faq-title h2 {
        color: #fff;
    }
    .accordion-button {
        padding: 2rem 1.25rem !important;
        font-size: 15px;
    }
    .accordion-button:focus {
        border-color: #fea2447d;
        box-shadow: none !important;
    }
    .accordion-button:not(.collapsed) {
        background-color: #fff;
        color: #ee6539;
        font-size: 15px;
    }
`;
