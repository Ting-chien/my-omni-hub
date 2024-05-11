import { Layout, Menu, Image } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout


const NavigationBar = () => {
    return <div>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            {/* <div className="demo-logo" /> */}
            <Image 
                width={100}
                onPreview={() => {}}
                forceRender={false}
                preview={false}
                src="https://www.theomnieyes.com/_nuxt/img/omnieyes-logo.d4658d9.svg" 
            />
            <Menu
                theme="dark"
                mode='horizontal'
                items={[
                    {
                        label: <Link to="/">Home</Link>,
                        key: ""
                    },
                    {
                        label: <Link to="/event">Event</Link>,
                        key: "event"
                    },
                    {
                        label: <Link to="/tools">Tools</Link>,
                        key: "tools"
                    },
                ]}
            />
        </Header>
    </div>
}

export default NavigationBar;