import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skillset from './Skillset';

import { useState } from 'react';
import './ProjectCard.css';

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
          {props.githubLink ? <a target="_blank" rel="noreferrer" href={props.githubLink}>{props.title}</a> : <>{props.title}</>}
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