import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <button type="button" className="iconos btn btn-outline-light">About me</button>
      <button type="button" className="iconos btn btn-outline-light">Projects</button>
      <button type="button" className="iconos btn btn-outline-light">Certifications</button>
      <button type="button" className="iconos btn btn-outline-light">Contact</button>
    </div>
  )
}

export default Header;