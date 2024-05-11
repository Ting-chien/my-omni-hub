import { Flex, Image } from "antd";

import "./index.css";


const Home = () => {
    return (
        <Flex 
            justify="center" 
            align="center"
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}
        >
            <Image
                width={"10rem"}
                preview={false}
                src="http://44.239.130.59:5000/images/omnieyes_logo.png"
            />
        </Flex>
    )
}

export default Home;