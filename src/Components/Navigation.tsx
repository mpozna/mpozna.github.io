import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='navBar'>
            <ul>
                {/* <li>Mike Pozna</li> */}
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </ul>
        </div>
    )
}


export default Navigation;