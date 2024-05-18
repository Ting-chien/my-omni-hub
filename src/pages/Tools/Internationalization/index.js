import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, Row, Col, message } from "antd";
import { useState } from 'react';


const sleep = async (timeOut = 1000) => new Promise(resolve => {
    setTimeout(resolve, timeOut);
});

const Internationalization = () => {
    // 透過 useState 紀錄現在上傳的檔案
    const [fileList, setFileList] = useState([]);

    // 透過 useState 紀錄 upload 狀態
    const [uploading, setUploading] = useState(false);

    // upload file manually
    const uploadHandler = async () => {
        // concat files into form-data
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append("files[]", file);
        })
        // call translate api
        try {
            setUploading(true)
            console.log("Send api request.")
            await sleep(3000) // mock api working process
            setUploading(false)
        } catch (error) {
            setUploading(false)
            console.error(error)
        }
    }

    const props = {
        beforeUpload: (file) => {
            // count number of file in fileList
            setFileList(function (prev) {
                return [
                    ...prev,
                    file
                ]
            });
            return false;
        }
    };

    return <div>
        <h1>Internationalization Page</h1>
        <Row>
            <Col span={12} >
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
                <Button
                    type="primary"
                    onClick={uploadHandler}
                    disabled={fileList.length === 0}
                    loading={uploading}
                    style={{ marginTop: 16 }}
                >
                    {uploading ? 'Uploading' : 'Start Upload'}
                </Button>
            </Col>
        </Row>
    </div>
}

export default Internationalization;