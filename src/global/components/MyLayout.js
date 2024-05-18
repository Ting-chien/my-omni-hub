import { Layout } from "antd";

import "./MyLayout.css"

const { Content } = Layout;

const MyLayout = (props) => {
    return (
        <Content style={{ padding: '0 48px'}}>{ props.children }</Content>
    )
}

export default MyLayout;