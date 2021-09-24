import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function Landing(props) {
  return (
    <div id="home" className="App-header section">
      <Grid container direction="row" rowSpacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <img className="landing-image" src="profile-6.png"></img>
        </Grid>
        <Grid item xs={12} md={6}>
          <Container>
            <Grid container direction="column" rowSpacing={1} className="header-text">
              <Grid item xs={12}>
                <h1><span className="underline">Hello World! I'm Anne.</span></h1>
              </Grid>
              <Grid item xs={12}>
                <p>
                  <span>
                  I'm a fourth year computer science student passionate about building 
                  products that empower users and make a positive impact.
                  I've previously interned at Wish and Heymarket, and I'll be at Salesforce 
                  this fall working on adding new capabilities to admin tools.
                  </span>
                </p>
              </Grid>
              <Grid item xs={12}>
                <p>
                  <span className="weight-500">I'm actively looking for Summer 2022 SWE or PM internships!</span>
                </p>
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