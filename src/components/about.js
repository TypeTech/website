import React from "react"
import styled from "@emotion/styled"
import SpanP from "./Reusable/SpanP"
import CardContainer from "./Reusable/CardContainer"
import CardContent from "./Reusable/CardContent"
import GridDiv from "./Reusable/GridDiv"
import { TEAM } from "../data/team"

const Spanx = styled.span`
  color: #ffffff;
`
const Container = styled.div`
  width: 100%;
  padding-top: 5em;
  padding-bottom: 5em;
  background: #333333;
  display: flex;
  justify-content: center;
`

const Section = styled.section`
  background-color: #333333;
  color: #ffffff;
  padding-bottom: 100px;
`

const InsideFooter = styled.div`
  margin-top: 10px;
  padding-top: 20px;
  width: 250px;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
`

const SVGs = styled.svg`
  fill: #ffffff;
  &:hover {
    fill: #4c9ac0;
    transition: ease 0.4s;
  }
`

const About = () => {
  return (
    <Section>
      <Container>
        <h2>
          <Spanx>Meet</Spanx>
          <Spanx> the</Spanx>
          <SpanP> team</SpanP>
        </h2>
      </Container>
      <GridDiv>
        {TEAM.map(item => (
          <CardContainer key={item.name}>
            <CardContent>
              <h1>{item.name}</h1>
              <h4>{item.title}</h4>
              <h4>
                <span
                  style={{
                    color: "#1fb5ff",
                  }}
                >
                  Field:{" "}
                </span>
                <span>{item.role}</span>
              </h4>
              <InsideFooter>
                <span>Social contact</span>
                <SocialLinks>
                  <a href={item.website}>
                    <SVGs
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                    </SVGs>
                  </a>
                  <a href={item.github}>
                    <SVGs
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </SVGs>
                  </a>
                </SocialLinks>
              </InsideFooter>
            </CardContent>
          </CardContainer>
        ))}
      </GridDiv>
    </Section>
  )
}

export default About
