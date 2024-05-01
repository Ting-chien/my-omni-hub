import { Link } from "react-router-dom";


const NavigationBar = () => {
    return <header>
        <div>OmniEyesHub</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/event">Event</Link>
                </li>
                <li>
                    <Link to="/tools">Tools</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default NavigationBar;