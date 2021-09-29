import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

function Contact(props) {
  return (
    <div id="contact" className="section text">
      <Container>
      <h2 className="section-header"><span className="underline">Let's connect!</span></h2>
      <p>If you have any questions, thoughts or book/music recommendations, shoot me a message! I'd love to chat :)</p>
      <Grid container direction="row">
        <Grid item xs={12} md={3} lg={2}>
          <Link color="#2f3337" underline="none" target="_blank" href="https://www.linkedin.com/in/anne-chung/"><LinkedIn/>&nbsp; anne-chung</Link>
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
          <Link color="#2f3337" underline="none" target="_blank" href="https://github.com/annechung"><GitHub/>&nbsp; annechung</Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link color="#2f3337" underline="none" target="_blank" href="mailto:anne.chung@uwaterloo.ca"><Email/>&nbsp; anne.chung@uwaterloo.ca</Link>
        </Grid>
      </Grid>
      </Container>
    </div>
  )
}

export default Contact