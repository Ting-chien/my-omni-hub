import { Flex, Image } from "antd";


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
                src="./logo.png"
            />
        </Flex>
    )
}

export default Home;