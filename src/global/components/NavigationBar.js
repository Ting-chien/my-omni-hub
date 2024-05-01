// import { Link } from "react-router-dom";


// const NavigationBar = () => {
//     return <header>
//         <div>OmniEyesHub</div>
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/event">Event</Link>
//                 </li>
//                 <li>
//                     <Link to="/tools">Tools</Link>
//                 </li>
//             </ul>
//         </nav>
//     </header>
// }

// export default NavigationBar;

import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';


const NavigationBar = () => {
    const navigate = useNavigate()
    const navigationBarClickHandler = (item) => {
        navigate(`/${item.key}`)
    }
    return <div>
        <Menu
            onClick={navigationBarClickHandler}
            mode='horizontal'
            items={[
                {
                    label: "Home",
                    key: ""
                },
                {
                    label: "Event",
                    key: "event"
                },
                {
                    label: "Tools",
                    key: "tools",
                    // children: [
                    //     {
                    //         label: "File transform",
                    //         key: "file-transform"
                    //     }
                    // ]
                },
            ]}
        />
    </div>
}

export default NavigationBar;