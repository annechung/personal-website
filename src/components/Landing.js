import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useEffect, useState, useRef } from 'react';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import TextTransition, { presets } from "react-text-transition";


const textOptions = ["software developer.", "CS student.", "black coffee enthusiast."]

function Landing(props) {
  let [iconIndex, setIconIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => 
  //     setIconIndex(iconIndex => (iconIndex + 1) % textOptions.length), 
  //   2000);
  //   return () => clearInterval(intervalId);
  // }, []);

  const iconSlides = [
    {
      key: "1",
      content: <img className="icon-above-head" src="over-lightbulb.png" alt="1" />
    },
    {
      key: "2",
      content: <img className="icon-above-head" src="over-questions.png" alt="2" />
    },
    {
      key: "3",
      content: <img className="icon-above-head" src="over-coffee.png" alt="3" />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setIconIndex(index) };
  });
  
  return (
    <div id="home" className="App-header section">
      <Grid container direction="row" rowSpacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Grid container direction="column" justifyContent="center">
            <Grid item>
              <div className="landing-image-icon">
                <Carousel
                  slides={iconSlides}
                  goToSlide={iconIndex}
                  offsetRadius={1}
                  showNavigation={false}
                  animationConfig={config.gentle}
                />
              </div>
            </Grid>
          <Grid item>
          <img className="landing-image" src="profile-6.png"></img>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Container>
            <Grid container direction="column" rowSpacing={1} className="header-text">
              <Grid item xs={12}>
                <h1>
                  <Grid container>
                    <Grid item><span className="underline">Hello World!&nbsp;</span></Grid>
                    <Grid item><span className="underline">I'm Anne.</span></Grid>
                  </Grid>
                </h1>
                <h3>I'm a &nbsp;
                  <span className="grey">
                    <TextTransition 
                      text={textOptions[iconIndex]}
                      inline
                    />
                  </span>
                </h3>
              </Grid>
              <Grid item xs={12}>
                <h5>Glad you stopped by!</h5>
              </Grid>
              <Grid item xs={12}>
                <Grid container columnSpacing={3} direction="row">
                  <Grid item>
                    <Link color="#2f3337" target="_blank" href="https://www.linkedin.com/in/anne-chung/"><LinkedIn/></Link>
                  </Grid>
                  <Grid item>
                    <Link color="#2f3337" target="_blank" href="https://github.com/annechung"><GitHub/></Link>
                  </Grid>
                  <Grid item>
                    <Link color="#2f3337" target="_blank" href="mailto:anne.chung@uwaterloo.ca"><Email/></Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default Landing;