import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

function About(props) {
  return (
    <div id="about" className="section text">
      <Container>
      <h2 className="section-header"><span className="underline">About Me</span></h2>
      <Grid container direction="row" rowSpacing={2} columnSpacing={3} alignItems="center">
        <Grid item xs={12} md={4} align="center">
          <img className="profile-image" src="profile.jpg"></img>
        </Grid>
        <Grid item xs={12} md={8}>
          <p className="about-me-text">
            🎓 Computer Science at University of Waterloo (Class of 2023)<br></br>
            🏢 SWE Intern at Salesforce <br></br>
            📍 Waterloo, ON <br></br>
            {/* 🎵 Last played: Somebody you found by The Japanese House<br></br> */}
          </p>
          <p>
            Hey there 👋 I'm a 4th year CS student passionate about building 
            applications that empower users and make a positive impact.
            I've previously interned at Wish and Heymarket, and I'll be at Salesforce 
            this fall working on new admin tooling features.
            I'm also spending 
            this term with <a href="https://uwblueprint.org/" target="_blank" className="in-text-link">UW Blueprint</a> working 
            on building tech for a non-profit, Community Fridge.
          </p>
          <p>
            When I'm not working you can find me reading, skateboarding, cooking up a new recipe or 
            planning out my next adventure (see you soon Seattle 🥺). 
            I'm also an avid music listener and always looking for new artists and songs!
            {/* Looks like I was listening to INSERT SONG HERE last. */}
          </p>
          <p>

            <span className="weight-600">I'm currently looking for Summer 2022 SWE internships!</span>&nbsp;
            {/* Most of my past work experience has been in fullstack and frontend development, and for my next 
            few work terms I'd love to expand my horizons and gain experience in other areas 
            (particularly in <span className="weight-600">backend development</span> and <span className="weight-600">infrastructure</span>)! */}
          </p>
        </Grid>
      </Grid>
      </Container>
    </div>
  )
}

export default About