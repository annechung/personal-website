import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Description from '@mui/icons-material/Description';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import TextTransition from "react-text-transition";


const textOptions = ["software developer.", "CS student.", "black coffee enthusiast."]

function Landing(props) {
  let [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => 
      setIconIndex(iconIndex => (iconIndex + 1) % textOptions.length), 
    2000);
    return () => clearInterval(intervalId);
  }, []);

  const iconSlides = [
    {
      key: "1",
      content: <img className="icon-above-head" src="icon-lightbulb.png" alt="lightbulb" />
    },
    {
      key: "2",
      content: <img className="icon-above-head" src="icon-questions.png" alt="question marks" />
    },
    {
      key: "3",
      content: <img className="icon-above-head" src="icon-coffee.png" alt="coffee" />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setIconIndex(index) };
  });
  
  return (
    <div id="home" className="landing-page">
      <Container>
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
                <img className="landing-image" src="landing.png" alt="profile avatar"></img>
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
                  <h5>Thanks for stopping by!</h5>
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
                    <Grid item>
                      <Link color="#2f3337" target="_blank" href="AnneChungResumeS22.pdf"><Description/></Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Landing;