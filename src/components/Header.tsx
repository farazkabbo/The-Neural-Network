import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex gap-6 p-4 bg-gray-800 text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/opportunities">Opportunities</Link>
      <Link to="/events">Events</Link>
      <Link to="/join">Join</Link>
    </header>
  )
}

export default Header
