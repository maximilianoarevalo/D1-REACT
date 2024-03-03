import "./Header.css"

function Header(props) {
  return (
    <div className="header-title">
      <h1 className="title">{props.title}</h1>
    </div>
  )
}

export default Header
