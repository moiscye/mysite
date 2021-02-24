import React, { Component } from "react";
import styled from "styled-components";
import ReactGA from "react-ga";
import { media } from "../../utils/mediaQueriesBuilder";
import { Socials } from "../../utils/socials";
import { H1, P } from "../../utils/typography";
import { colorGrey6, colorPrimary } from "../../utils/variables";

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));

  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 4rem;

  ${media.sizeSmall3`
  justify-content: center;

 
	`}
`;

const Wrapper = styled.div``;
const Title = styled(H1)`
  margin-bottom: 3rem;
  color: #ddd;
`;

const Content = styled(P)`
  margin-bottom: 3rem;
  color: ${colorGrey6};
  line-height: 1.3;
`;

const A = styled.a`
  :link,
  :visited {
    padding: 0.1rem 0.5rem;
    background-color: ${colorPrimary};
    color: #ddd;
    text-decoration: none;
  }

  :hover {
    border-bottom: 2px solid #ddd;
  }
`;

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleForm: false,
      toggleSubmitted: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggleSubmitted = this.toggleSubmitted.bind(this);
  }
  toggle() {
    this.setState({
      toggleForm: !this.state.toggleForm,
      toggleSubmitted: false,
    });
  }
  toggleSubmitted() {
    this.setState({
      toggleSubmitted: !this.state.toggleSubmitted,
    });
  }
  render() {
    return (
      <Container>
        <Wrapper className="scrollreveal">
          <Title className="scrollreveal">Let's get in touch!</Title>
          <Content>
            If you would like to know more about me
            <br />
            Email me at:
            <A
              href="mailto: moiscye@gmail.com"
              rel="noopener"
              onClick={() => {
                ReactGA.event({
                  category: "Footer",
                  action: "Email click",
                });
              }}
            >
              moiscye@gmail.com
            </A>
          </Content>
          <Socials small />
        </Wrapper>
      </Container>
    );
  }
}

export default Footer;
