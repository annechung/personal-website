import './Skillset.css';

function Pill(props) {
  return <div className="pill" style={{backgroundColor: props.backgroundColor, color: props.color}}>{props.skill}</div>
}

function Skillset(props) {
  return (
    <div className="skillset">
    {props.skills.split(",").map((word, index) => <Pill key={`skillset-${index}`} skill={word} backgroundColor={props.backgroundColor} color={props.color}/>)}
    </div>
  )
}

export default Skillset