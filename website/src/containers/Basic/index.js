import React, { Component } from "react";
import injectSheet from "react-jss";
import Media from "react-media";

//Text
import texts from "../../locale";
import { breakPoints } from "../../helper";

//UI ELements
import Navbar from "../../components/Navbar";
import ClientHeightContainer from "../../components/ClientHeightContainer";
import ValueProp from "../../components/ValueProp";
import PotraitUseCase from "../../components/PotraitUseCase";
import LandscapeUseCase from "../../components/LandscapeUseCase";
import BackGroundVideo from "../../components/BackGroundVideo";

//Video
import backgroundVideo from "../../assets/background.mp4";
import verticalPhoneVideo from "../../assets/vertical-compressed.mp4";
import landscapePhoneVideo from "../../assets/landscape-compressed.mp4";

//Mocks
import verticalPhoneMock from "../../assets/iphonex-big.svg";
import landscapePhoneMock from "../../assets/iphonex-landscape-big.svg";

// import phoneHorizontal from "../../assets/phone-horizontal.svg";

const styles = {
  root: {
    color: "white"
  },
  dots: {
    display: "flex",
    justifyContent: "center"
  },
  mobileValueProp: {
    textAlign: "center"
  },
  productLineUp: {
    textAlign: "center",
    margin: "0 auto",
    background: "white",
    color: "black",
    padding: "20px"
  },
  productLineUpContainer: {
    background: "#EAEAEA"
  },
  trenityContainer: {
    color: "#333"
  },
  infoContainer: {
    width: "calc(100%*0.8)",
    margin: "0 auto",
    textAlign: "center"
  },
  mock1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

class Basic extends Component {
  state = {
    language: "eng",
    valuePropState: 0
  };

  switchValuePropInterval = null;

  componentDidMount() {
    this.switchValuePropInterval = setInterval(() => {
      const updateValueProp = this.state.valuePropState === 0 ? 1 : 0;
      this.setState({ valuePropState: updateValueProp });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.switchValuePropInterval);
  }

  render() {
    const { classes } = this.props;
    const { language, valuePropState } = this.state;

    return (
      <div className={classes.root}>
        <Navbar brand={texts.basic[language].brand} />
        <ClientHeightContainer>
          <BackGroundVideo src={backgroundVideo} />
          <Media query={`(${breakPoints.lg})`}>
            {matches => (
              <ValueProp
                heading={
                  matches
                    ? texts.basic[language].valueProp[valuePropState].heading
                        .desktop
                    : texts.basic[language].valueProp[valuePropState].heading
                        .mobile
                }
                subheading={
                  texts.basic[language].valueProp[valuePropState].subheading
                }
              />
            )}
          </Media>
        </ClientHeightContainer>
        <Media query={`(${breakPoints.lg})`}>
          {matches => (
            <PotraitUseCase
              variant={matches ? "left" : "bottom"}
              video={verticalPhoneVideo}
              mock={verticalPhoneMock}
              {...texts.basic[language].usecase.socialTV}
            />
          )}
        </Media>
        <Media query={`(${breakPoints.lg})`}>
          {matches => (
            <LandscapeUseCase
              variant={matches ? "right" : "bottom"}
              video={landscapePhoneVideo}
              mock={landscapePhoneMock}
              {...texts.basic[language].usecase.brandSolutions}
            />
          )}
        </Media>
      </div>
    );
  }
}

export default injectSheet(styles)(Basic);
