import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ExperienceCard from '../components/ExperienceCard';

function Experience(props) {
  return (
    <div id="experience" className="section">
      <Container>
        <h2 className="section-header"><span className="underline">Experience</span></h2>
        <p>
          Find more details on my <a target="_blank" className="in-text-link" href="AnneChungResumeS22.pdf">resume</a>.
        </p>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} sm={6} lg={3}>
            <ExperienceCard 
              from="Sep 2021" 
              to="Present" 
              company="Salesforce"
              position="Software Engineer Intern"
              description="Building the setup UI for a new admin tool that enables callouts to external endpoints."
              logoImgUrl="salesforce.png"
              skills="Java, Javascript"
              backgroundColor="#00a1e0"
              color="white"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ExperienceCard 
              from="Jan 2021" 
              to="Jun 2021" 
              company="Heymarket"
              position="Frontend Engineer Intern"
              description="Added new features to Heymarket's business text messaging web app."
              logoImgUrl="heymarket.jpeg"
              skills="Typescript, Riot.js, CSS, Go"
              backgroundColor="#ffc519"
              color="black"
              highlight="Owned the development of an entire section of the app for a surveys feature."
              takeaway="Learned about the process of building a customer-facing feature from design to beta to production."
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ExperienceCard  
              from="May 2020" 
              to="Aug 2020" 
              company="Wish"
              position="Software Engineer Intern"
              description="Developed an internal A/B testing framework."
              logoImgUrl="wish.png"
              skills="React, Go, gRPC, PostgreSQL"
              backgroundColor="#2fb7ec"
              color="white"
              highlight="Used Go for the first time and absolutely loved it."
              takeaway="Learned about infrastructure engineering and its importance for developer productivity and the 
              overall functioning of a tech company." 
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ExperienceCard 
              from="Sep 2019" 
              to="Dec 2019" 
              company="Manulife"
              position="Software Engineer Intern"
              description="Worked on the backend services of an insurance advisor portal."
              logoImgUrl="manulife.png"
              skills="Javascript, Node.js, MongoDB"
              backgroundColor="#00a758"
              highlight="My first internship! Super grateful for my team and everything they taught me ❤️"
              color="white"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Experience