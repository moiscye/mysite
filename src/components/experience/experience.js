import React, { Component } from "react";
import styled from "styled-components";
import { media } from "../../utils/mediaQueriesBuilder";
import { Container } from "../common/container";
import {
  colorGrey3,
  colorGrey4,
  colorGrey7,
  colorGrey2,
  colorPrimary,
} from "../../utils/variables";

import mvpLogo from "../../images/experience/mvp.jpg";
import laTrobeLogo from "../../images/experience/latrobe.jpg";
import freelancerLogo from "../../images/experience/freelancer.jpg";
// array of experiences, makes it easy to add or remove in the future
const experiences_list = [
  {
    logoPath: mvpLogo,
    company: "MVP Studio",
    link: "https://mvp.studio/",
    position: "Web Application Developer",
    duration: "May 2020 - Present",
    details: [
      "Back-end:",
      "Using AWS amplify tools and services",
      "Creating Restful APIs fetching data from Amazon DynamoDB and MongoDB Atlas",
      "Building reusable code with the best programming practices",
      "Implementation of security and data protection",
      "Create database schemas that represent and support business processes",
      "Authentication and authorization with Amazon Cognito",
      "Serverless Lambda functions",
      "Front-end:",
      "Develop new user-facing features using ReactJS, Tailwindcss, Styled-components",
      "Develop reusable components",
      "Ensure all user input is validated before submitting to the back-end",
      "Optimize application for maximum speed and scalability",
      "App reviewing and planning of future upgrades with the development team",
    ],
  },
  {
    logoPath: freelancerLogo,
    company: "Freelancer",
    link: "https://moisescruz.me/",
    position: "Web Application Developer",
    duration: "May 2018 - Present",
    details: [
      "In my freelancing career, I have developed a portfolio of systems developments in a variety of fields, such as POS, Rental, Loyalty Rewards Systems, and Fitness systems",
      "Automated a rentals company by designing a web-based application that took front-end tasks like real-time orders, reservations, account payments, create receipts and reminders; the backend processes integrated with QuickBooks for taxation. It was developed with JavaScript, Node, and third-party APIs",
      "Developed a design method where I take React as a frontend, and Node, MongoDB, and Express as Backend to create robust, scalable, modern, high-speed web apps. I took this method to eCommerce and boosted their loyal customer retention and sales after reconfiguration",
    ],
  },
  {
    logoPath: laTrobeLogo,
    company: "La Trobe University",
    link: "https://www.latrobe.edu.au/",
    position: "Tutor",
    duration: "Mar 2018 - Oct 2020",
    details: [
      "I impart valuable, industry proven knowledge to students across four programs",
      "Object-oriented Programming",
      "Mobile and Pervasive Computing",
      "Design Software Engineering",
      "Algorithms and Data Structures",
    ],
  },
];

const ExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 3rem;

  :first-child {
    padding-top: 3rem;
  }

  :last-child {
    padding-bottom: 3rem;
  }

  :not(:last-child) {
    border-bottom: 1px solid ${colorGrey7};
  }

  ${media.sizeSmall2`
		flex-direction: column;
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	`}
`;

const Logo = styled.div`
  flex: 0 0 auto;
  margin-right: 3rem;
  height: 12rem;
  width: 14rem;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;

  img {
    height: 100%;
    width: auto;
  }

  ${media.sizeMedium`
		height: 8rem;
		width: 10rem;
	`}

  ${media.sizeSmall2`
		flex-direction: column;
		margin: 0 auto 1rem auto;
	`}
`;

const Company = styled.a`
  :link,
  :visited {
    font-size: 2.5rem;
    font-weight: 400;
    color: ${colorPrimary};
    text-decoration: none;
  }

  :hover {
    text-decoration: underline;
  }
`;

const PositionText = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  margin: 0.8rem 0;
  color: ${colorGrey3};
`;

const DurationText = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 1.2rem;
  color: ${colorGrey4};
`;

const Ul = styled.ul`
  margin-left: 1.7rem;
  list-style-position: outside;
`;

const Li = styled.li`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.3;
  color: ${colorGrey2};
`;

class Experience extends Component {
  render() {
    return (
      <Container title="My Work Experience">
        <div>
          {experiences_list.map(
            ({ logoPath, company, link, position, duration, details }, i) => (
              <ExperienceContainer key={i}>
                <Logo className="scrollreveal">
                  <img src={logoPath} alt={company} />
                </Logo>
                <div className="scrollreveal">
                  <Company target="_blank" rel="noopener" href={link}>
                    {company}
                  </Company>
                  <PositionText>{position}</PositionText>
                  <DurationText>{duration}</DurationText>
                  <Ul>
                    {details.map((detail, i) => (
                      <Li key={i}>{detail}</Li>
                    ))}
                  </Ul>
                </div>
              </ExperienceContainer>
            )
          )}
        </div>
      </Container>
    );
  }
}

export default Experience;
