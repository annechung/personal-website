import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function About() {
  return (
    <div id="about" className="section">
      <Container>
        <h2 className="section-header">
          <span className="underline">hey.</span>
        </h2>
        <Grid container direction="row" rowSpacing={2} columnSpacing={3}>
          <Grid item xs={12}>
            <p className="about-me-text">
              cs @ university of waterloo <br></br>
              swe intern @ robinhood <br></br>
              previously at instagram, salesforce, wish, heymarket. <br></br>
              <span className="weight-600">
                currently looking for full time opportunities for 2023!
              </span>
              &nbsp;
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
