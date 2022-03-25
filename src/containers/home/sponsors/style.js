import styled, { themeGet, device } from "@theme/utils";
export const SectionArea = styled.section`
    padding: 60px 15px 267px;
    ${device.medium} {
        padding: 100px 0 100px;
    }
    ${device.large} {
        padding: 88px 0 88px;
    }
    ${device.xlarge} {
        padding: 110px 0 110px;
    }
`;
export const BrandLogoContent = styled.div`
    margin: 16px -27px 0;
`;
