import "../components/hero.css"
import logo from "/public/logo.png"
function Hero() {
  return (
    <div className="hero">
      <img className="hero__logo" src={logo} alt="logo de rick and morty" />
    </div>
  )
}

export default Hero;