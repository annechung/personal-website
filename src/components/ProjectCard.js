import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Skillset from './Skillset';

import { useState } from 'react';
import './ProjectCard.css';

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

function ProjectCard(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Card onClick={handleExpandClick} className="project-card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.header}
        </Typography>
        <Typography variant="h5" component="div">
          {props.githubLink ? <a target="_blank" href={props.githubLink}>{props.title}</a> : <>{props.title}</>}
        </Typography>
        <Typography variant="body2">
          <br></br>
          {props.description}
        </Typography>
        <Skillset
          skills={props.skills}
          color="white"
          backgroundColor="#709bff"
        />
      </CardContent>
    </Card>
  )
}

export default ProjectCard