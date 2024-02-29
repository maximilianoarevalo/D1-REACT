import Tags from "./Tags"

function MyCard({image, name, description, text, backgroundColor}) {
  return (
    <div>
      <img src={image} alt="dog-image" />
      <span>{name}</span>
      <span>{description}</span>
      <Tags text={text} backgroundColor={backgroundColor}/>
    </div>
  )
}

export default MyCard
