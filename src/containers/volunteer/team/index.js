/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { SectionArea, TeamMemberItemsWrap } from "./style";
import Team from "@components/team";
import { graphql, useStaticQuery } from "gatsby";

const TeamArea = () => {
    const volunteerQuery = useStaticQuery(graphql`
        query TeamVolunteerQuery {
            volunteerJson(id: { eq: "volunteer-team" }) {
                id
                section_title {
                    title
                    subTitle
                }
                text
                team {
                    designation
                    name
                    instagram
                    images {
                        childrenImageSharp {
                            gatsbyImageData(width: 580)
                        }
                    }
                }
            }
        }
    `);
    const {
        section_title: { title, subTitle },
        text,
        team,
    } = volunteerQuery.volunteerJson;
    return (
        <SectionArea id="team">
            <Container>
                <Row>
                    <Col lg={8} className="m-auto">
                        <SectionTitle
                            sx={{ mb: "50px" }}
                            titleStyle
                            textCenter
                            title={"Talented Team of eHopeWarriors."}
                            subTitle={subTitle}
                            className="volunteer-title"
                        />
                    </Col>
                </Row>

                <TeamMemberItemsWrap>
                    <Row>
                        {team &&
                            team.map((item, i) => {
                                return (
                                    <Col lg={2} key={i}>
                                        <Team
                                            name={item.name}
                                            designation={item.designation}
                                            instagram={item.instagram}
                                            images={
                                                item.images
                                                    .childrenImageSharp[0]
                                            }
                                        />
                                    </Col>
                                );
                            })}
                    </Row>
                </TeamMemberItemsWrap>
            </Container>
        </SectionArea>
    );
};

export default TeamArea;