import Badge from 'react-bootstrap/Badge';
import "./Tags.css"

function Tags({text, backgroundColor}) {
  return (
    <>
      <Badge className="dog-badge" bg={backgroundColor}>{text}</Badge>
    </>
  )
}

export default Tags
