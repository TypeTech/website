import PropTypes from "prop-types"
import React, { Fragment } from "react"
import Logomain from "./logomain"
import styled from "@emotion/styled"
import ReactTooltip from "react-tooltip"

const WrapperDiv = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
`

const Head = styled.header`
  background-color: var(--xstyled-colors-bg, #333);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: var(--xstyled-colors-border, #1976d2);
  padding: 16px 0px;
`

const InsideDiv = styled.div`
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0px auto;
`

const InsideInsideDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  text-align: left;
`

const LogoContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: var(--xstyled-colors-text, #222);
  height: 34px;
  margin-right: 16px;
`

const SVG = styled.svg`
  fill: #ffffff;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    margin-right: 40px;
    width: 30px;
  }
`
const Title = styled.h2`
  display: block;
  font-weight: 900;
  font-size: 20px;
  line-height: 0.9;
  margin: 0px 0px 0px 10px;
  color: #1476a2;
  animation: logotextanimation 2s alternate infinite;
`

const MainLink = styled.a`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: var(--xstyled-colors-text, #222);
  height: 34px;
  margin-right: 16px;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Fragment>
    <WrapperDiv>
      <Head>
        <InsideDiv>
          <InsideInsideDiv>
            <LogoContainer>
              <MainLink href="/">
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: 42,
                    height: 42,
                  }}
                >
                  <Logomain />
                </div>
                <Title>{siteTitle}</Title>
              </MainLink>
            </LogoContainer>
            <a href="#!" data-tip data-for="translation">
              <SVG
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path d="M24 24h-2.784l-1.07-3h-4.875l-1.077 3h-2.697l4.941-13h2.604l4.958 13zm-4.573-5.069l-1.705-4.903-1.712 4.903h3.417zm-9.252-12.804c.126-.486.201-.852.271-1.212l-2.199-.428c-.036.185-.102.533-.22 1-.742-.109-1.532-.122-2.332-.041.019-.537.052-1.063.098-1.569h2.456v-2.083h-2.161c.106-.531.198-.849.288-1.149l-2.147-.645c-.158.526-.29 1.042-.422 1.794h-2.451v2.083h2.184c-.058.673-.093 1.371-.103 2.077-2.413.886-3.437 2.575-3.437 4.107 0 1.809 1.427 3.399 3.684 3.194 2.802-.255 4.673-2.371 5.77-4.974 1.134.654 1.608 1.753 1.181 2.771-.396.941-1.561 1.838-3.785 1.792v2.242c2.469.038 4.898-.899 5.85-3.166.93-2.214-.132-4.635-2.525-5.793zm-2.892 1.531c-.349.774-.809 1.544-1.395 2.15-.09-.646-.151-1.353-.184-2.108.533-.07 1.072-.083 1.579-.042zm-3.788.724c.062.947.169 1.818.317 2.596-1.996.365-2.076-1.603-.317-2.596zm11.236-1.745l-2.075-5.533 5.414-1.104-.976 1.868c2.999 2.418 4.116 5.645 4.532 8.132-1.736-2.913-3.826-4.478-5.885-5.321l-1.01 1.958zm-7.895 10.781l1.985 5.566-5.43 1.016 1.006-1.852c-2.96-2.465-4.021-5.654-4.397-8.148 1.689 2.94 3.749 4.483 5.794 5.36l1.042-1.942zm10.795-6.029" />
              </SVG>
            </a>
            <ReactTooltip
              id="translation"
              place="bottom"
              type="dark"
              effect="float"
            >
              <span>i18n translations coming soon :(</span>
            </ReactTooltip>
          </InsideInsideDiv>
        </InsideDiv>
      </Head>
    </WrapperDiv>
  </Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
