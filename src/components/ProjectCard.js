import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Skillset from "./Skillset";
import Link from "@mui/material/Link";
import GitHub from "@mui/icons-material/GitHub";
import { useState } from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card onClick={handleExpandClick} className="project-card">
      <CardContent className="project-content">
        {props.githubLink ? (
          <Link
            underline="none"
            target="_blank"
            href={props.githubLink}
            className="github"
          >
            &nbsp;
            <GitHub />
          </Link>
        ) : (
          <></>
        )}
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.header}
        </Typography>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">
          <br></br>
          {props.description}
        </Typography>
        <br></br>
        <Skillset skills={props.skills} color="black" backgroundColor="white" />
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
