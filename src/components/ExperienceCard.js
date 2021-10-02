import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Skillset from './Skillset.js';
import './ExperienceCard.css';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
  })(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ExperienceCard(props) {

  let [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="experience-card" onClick={handleExpandClick}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.from} - {props.to}
        </Typography>
        <Typography variant="h5" component="div" className="title">
          {props.logoImgUrl ? <img className="logo" src={props.logoImgUrl} alt="company logo"/> : <></>}
          {props.company}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.position}
        </Typography>
        <Typography variant="body2">
          {props.headline}
        </Typography>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <br></br>
        <Typography variant="body2">
          {props.description}
        </Typography>
        <Typography>
          <br></br>
        </Typography>
        <Skillset 
          skills={props.skills}
          backgroundColor={props.backgroundColor}
          color={props.color}
        />
      </Collapse>
      </CardContent>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </Card>
  )
}

export default ExperienceCard