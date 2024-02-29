import Badge from 'react-bootstrap/Badge';

function Tags({text, backgroundColor}) {
  return (
    <>
      <Badge bg={backgroundColor}>{text}</Badge>
    </>
  )
}

export default Tags
