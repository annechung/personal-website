import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skillset from './Skillset.js';
import './ExperienceCard.css';

function ExperienceCard(props) {
  return (
    <Card className="experience-card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.from} - {props.to}
        </Typography>
        <Typography variant="h5" component="div" className="title">
          {props.logoImgUrl ? <img className="logo" src={props.logoImgUrl} /> : <></>}
          {props.company}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.position}
        </Typography>
        <Typography variant="body2">
          {props.description}
        </Typography>
        {props.highlight ? 
        <Typography variant="body2">
          <br></br>
          Highlight: {props.highlight}
        </Typography>
        :
        <></>}
        {props.takeaway ? 
        <Typography variant="body2">
          <br></br>
          Takeaway: {props.takeaway}
        </Typography>
        : 
        <></>}
        <Skillset 
          skills={props.skills}
          backgroundColor={props.backgroundColor}
          color={props.color}
        />
      </CardContent>
    </Card>
  )
}

export default ExperienceCard