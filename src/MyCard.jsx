
function MyCard({image, name, description}) {
  return (
    <div>
      <img src={image} alt="dog-image" />
      <span>{name}</span>
      <span>{description}</span>
    </div>
  )
}

export default MyCard
