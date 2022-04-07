import React, { Fragment, PureComponent } from 'react';
import { message, Form, Input, Button, Checkbox, Select , Switch, DatePicker } from 'antd';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'
import '../style/Upload.scss';
const { Option } = Select;

class Upload extends PureComponent {
    state = {
        formshow1: '',//第一個Form
        formshow2: 'none',//第二個Form
        open: true,//是否開放競標
        src: null,
        crop: {
            unit: '%',
            width: 30,
            aspect: 1 / 1
        }
    }

    onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                this.setState({ src: reader.result })
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // If you setState the crop in here you should return false.
    onImageLoaded = (image) => {
        this.imageRef = image;
    };

    onCropComplete = (crop) => {
        this.makeClientCrop(crop);
    };

    onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({ crop });
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                'newFile.jpeg'
            );
            this.setState({ croppedImageUrl });
        }
    }

    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const pixelRatio = window.devicePixelRatio;
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext('2d');

        canvas.width = crop.width * pixelRatio * scaleX;
        canvas.height = crop.height * pixelRatio * scaleY;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width * scaleX,
            crop.height * scaleY
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(
                (blob) => {
                    if (!blob) {
                        //reject(new Error('Canvas is empty'));
                        console.error('Canvas is empty');
                        return;
                    }
                    blob.name = fileName;
                    window.URL.revokeObjectURL(this.fileUrl);
                    this.fileUrl = window.URL.createObjectURL(blob);
                    resolve(this.fileUrl);
                },
                'image/jpeg',
                1
            );
        });
    }




    onFinish = (values) => {
        console.log(this.state);
        this.setState({ formshow1: 'none', formshow2: '' })
    };

    onReturn = (value) => {
        this.setState({ formshow1: '', formshow2: 'none' })
    }
    onChange = () => {
        this.setState({ open: !(this.state.open) })
    }
    success = () => {
        message.success('上傳成功');
    }

    render() {
        const { crop, croppedImageUrl, src } = this.state;
        return (
            <Fragment>
                <div className="upload">
                    {/* 預覽圖 */}
                    <div className="formDiv">
                        <Form className='el-form' label-width="100px" label-position="top" layout='vertical'  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Form.Item label="作品預覽圖" prop="fileUrl" className='el-form-item' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                {src && (
                                    <ReactCrop
                                        src={src}
                                        crop={crop}
                                        ruleOfThirds
                                        onImageLoaded={this.onImageLoaded}
                                        onComplete={this.onCropComplete}
                                        onChange={this.onCropChange}
                                    />
                                )}
                                {/* {croppedImageUrl && (
                                    <img alt="Crop"  src={croppedImageUrl} />
                                )} */}
                            </Form.Item>
                        </Form>
                    </div>
                    {/* 表單1 */}
                    <div className="formDiv" id="formDiv">
                        <div className='el-form' >
                            <Form style={{ display: this.state.formshow1 }}
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                                autoComplete="off"
                                layout='vertical'
                            >
                                <Form.Item
                                    className='el-form-item'
                                    label="作品名稱"
                                    name="name"
                                    rules={[{ required: true, message: '請輸入作品名稱' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    className='el-form-item'
                                    label="作品簡介"
                                    name="describe"
                                    rules={[{ required: true, message: '請輸入作品簡介' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    className='el-form-item'
                                    name="select-multiple"
                                    label="作品標籤"
                                    rules={[{ required: true, message: '請選擇標籤', type: 'array' }]}
                                >
                                    <Select mode="tags" placeholder="請選擇標籤">
                                        <Option value="picture">圖片</Option>
                                        <Option value="video">影片</Option>
                                        <Option value="music">音樂</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    name="upload"
                                    label="上傳作品"
                                    valuePropName="fileList"
                                    className='el-form-item'
                                >
                                    <input type="file" accept="image/*" onChange={this.onSelectFile} />

                                </Form.Item>

                                <Form.Item
                                    name="agreement"
                                    className='el-form-item'
                                    valuePropName="checked"
                                    rules={[
                                        {
                                            validator: (_, value) =>
                                                value ? Promise.resolve() : Promise.reject(new Error('請同意聲明')),
                                        },
                                    ]}
                                >
                                    <Checkbox>
                                        本人聲明並保證上述內容沒有侵犯任何第三方的版權和知識產權。
                                    </Checkbox>
                                </Form.Item>

                                <Form.Item className='el-form-item'>
                                    <Button type="button" htmlType="submit" style={{ float: 'right' }} >
                                        繼續
                                    </Button>
                                </Form.Item>
                            </Form>



                            <Form style={{ display: this.state.formshow2 }}
                                initialValues={{ remember: true }}
                                onFinish={this.success}
                                autoComplete="off"
                                // layout='vertical'
                            >
                                <Form.Item
                                    className='el-form-item'
                                    label="作品價格"
                                    name="price"
                                    rules={[{ required: true, message: '請輸入作品價格' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item className='el-form-item' label="發佈至社群" valuePropName="social">
                                    <Switch />
                                </Form.Item>
                                <Form.Item className='el-form-item' label="開放競標" valuePropName="open">
                                    <Switch onChange={this.onChange} />
                                </Form.Item>

                                <Form.Item
                                    className='el-form-item'
                                    label="競標起始價"
                                    name="bidding"
                                    rules={this.state.open ? [{ required: false }] : [{ required: true, message: '請輸入競標起始價' }]}
                                >
                                    <Input disabled={this.state.open} />
                                </Form.Item>
                                <Form.Item className='el-form-item' label="拍賣市場時間設定" name="date" rules={this.state.open ? [{ required: false }] : [{ required: true, message: '請輸入競標起始價' }]} >
                                    <DatePicker disabled={this.state.open} />
                                </Form.Item>
                                <div className='el-form-item'>作品成交後，平台將會收取成交金額1%作為手續費</div>
                                <Form.Item className='el-form-item'>
                                    <Button type="button" htmlType="submit" style={{ margin: '2%', float: 'right' }} >
                                        上傳
                                    </Button>
                                    <Button type="button" onClick={this.onReturn} style={{ margin: '2%', float: 'right' }} >
                                        返回
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Upload;