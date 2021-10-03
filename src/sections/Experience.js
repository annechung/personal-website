import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ExperienceCard from '../components/ExperienceCard';
import Link from '@mui/material/Link';

const descriptions = {
  Salesforce: 
  <>
    I'm working on creating a setup platform for Named Credentials, 
    a service which simplifies callouts to authenticated endpoints. It allows users to 
    store all endpoint and auth configs in a single object which can be referenced in their code.
  </>,

  Heymarket:
  <>
    Features I worked on include
    <Link 
      href="https://www.heymarket.com/blog/announcements/chat-based-sms-surveys/" 
      target="_blank" 
      rel="noreferrer" 
      className="in-text-link">&nbsp; surveys &nbsp;
    </Link>
    and chat bulk actions (selecting and taking action on multiple chats at once).
    <br></br><br></br>
    A highlight of this internship for me was owning the development of an entire new surveys section of the app!
    It was my first time having free reigns over a project at work as opposed to having 
    guidelines or tasks created for me, and from this experience I
    learned to take iniative and drive a project from start to finish.
    <br></br><br></br>
    I also learned about the process of building a customer-facing feature and taking features from 
    design to beta to production! 
  </>,

  Wish: 
  <>
    I worked on an experimentation framework that was used to run A/B tests on the Wish apps.
    One larger feature I worked on was adding Decider Key support to our framework,
    which is essentially a feature toggle
    that can be used to turn features on/off or ramp up traffic to a feature.
    This involved working along the whole stack from the database to the backend to the UI .
    <br></br><br></br>
    From working in Platform Services I was introduced to the various focuses of Infrastructure engineering and 
    this sparked my interest in wanting to create tools that enable developers and product teams!
    This was also the first time I used Go and I *loved* it.
  </>,

  Manulife:
  <>
    My tasks included updating data models and APIs, creating insurance application 
    HTML templates and integrating with DocuSign for to handle application signatures.

    <br></br><br></br>
    My first internship! Super grateful for my team and everything they taught me ❤️
  </>

}

function Experience(props) {
  return (
    <div id="experience" className="section">
      <Container>
        <h2 className="section-header"><span className="underline">Experience</span></h2>
        <p>
          Find more details on my <Link target="_blank" className="in-text-link" href="AnneChungResumeS22.pdf">resume</Link>.
        </p>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} sm={6} lg={3}>
            <ExperienceCard 
              from="Sep 2021" 
              to="Present"
              company="Salesforce"
              position="Software Engineer Intern"
              headline="Admin tool in Salesforce."
              description={descriptions.Salesforce}
              logoImgUrl="salesforce.png"
              skills="Java, Javascript, Maven"
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
              headline="Business text messaging web app."
              description={descriptions.Heymarket}
              logoImgUrl="heymarket.jpeg"
              skills="Typescript, Riot.js, CSS, Go"
              backgroundColor="#ffc519"
              color="black"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ExperienceCard  
              from="May 2020" 
              to="Aug 2020" 
              company="Wish"
              position="Software Engineer Intern"
              headline="A/B testing tool."
              description={descriptions.Wish}
              logoImgUrl="wish.png"
              skills="Go, gRPC, React, PostgreSQL"
              backgroundColor="#2fb7ec"
              color="white"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ExperienceCard 
              from="Sep 2019" 
              to="Dec 2019" 
              company="Manulife"
              position="Software Engineer Intern"
              headline="Insurance advisor portal."
              description={descriptions.Manulife}
              logoImgUrl="manulife.png"
              skills="Javascript, Node.js, MongoDB"
              backgroundColor="#00a758"
              color="white"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Experience