import Tags from "./Tags"
import { Card } from "react-bootstrap"
import "./MyCard.css"

function MyCard({image, name, description, text, backgroundColor}) {
  return (
    <div>
      <Card className="card-container">
        <img className="dog-image" src={image} alt="dog-image" />
        <span className="dog-name">{name}</span>
        <span className="dog-description">{description}</span>
        <Tags className="tag-description" text={text} backgroundColor={backgroundColor}/>
      </Card>
    </div>
  )
}

export default MyCard
