import React, { useRef, useState } from 'react';
import addIcon from '@Assets/addIcon.svg';
import CustomInput from '../common/CustomInput/CustomInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AxiosInstance from '../../Config/apicall';
import { errorToast, successToast } from '../../pluggins/toast/Toast';

const Addproduct = () => {
  const [productData, setproductData] = useState({});

  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef();

  const handleChange = (e) => {
    setproductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleDescriptionChange = (data) => {
    setproductData({ ...productData, description: data });
  };

  const handleInputFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => file.type.startsWith('image/') || file.type.startsWith('video/'));
    setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };
  const handleAddIconClick = () => {
    fileInputRef.current.click();
  };
  const createNewProduct = () => {
    const formDataSend = new FormData()

    selectedFiles.forEach((file) => {
      formDataSend.append('files', file);
    });
  //    for (const key in productData) {
  //   formDataSend.append(key, productData[key]);
  // }
  Object.entries(productData).forEach(([key,value])=>{
    formDataSend.append(key,value)
  })
  console.log(formDataSend.name)
    AxiosInstance({
      url: '/admin/create_newproduct',
      method: 'post',
      data: formDataSend,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => {
        successToast('New Product added');
      })
      .catch((err) => {
        console.error('Error creating new product:', err);
        errorToast(`Product could not be added: ${err.message}`);
      });
  };



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between gap-3 px-3 mt-3">
          <h3>Add new products</h3>
          <span className="d-flex gap-3">
            <button className="common-button bg-black text-white">Cancel</button>
            <button className="common-button text-white" onClick={ createNewProduct }>
              Create
            </button>
          </span>
          <div className="col-lg-4 col-md-6 mt-3">
            <input
              type={'text'}
              label={'name'}
              value={productData.name}
              name={'name'}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <input
              type={'number'}
              label={'unit_value'}
              value={productData.unit_value}
              name={'unit_value'}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <input
              type={'number'}
              label={'unit_price'}
              value={productData.unit_price}
              name={'unit_price'}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <input
              type={'number'}
              label={'stock'}
              value={productData.stock}
              name={'stock'}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <CustomInput
              type={'date'}
              labelFor={'manufacture_date'}
              value={productData.manufacture_date}
              name={'manufacture_date'}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <input
              type={'date'}
              label={'expiry_date'}
              value={productData.expiry_date}
              name={'expiry_date'}
              onChange={handleChange}
            />
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          multiple
          accept="image/*, video/*"
          style={{ display: 'none' }}
          onChange={handleInputFileChange}
        />
        <img src={addIcon} alt="" width={'150px'} height={'150'} onClick={handleAddIconClick} />
      </div>
      <div className="mt-3 d-flex flex-wrap gap-2">
        {selectedFiles.map((file, index) => (
          <React.Fragment key={index}>
            {file.type.startsWith('image/') && <img src={URL.createObjectURL(file)} height={150} alt={'img1'} />}
            {file.type.startsWith('video/') && <video src={URL.createObjectURL(file)} height={150} alt={'img1'} />}
          </React.Fragment>
        ))}
        <ReactQuill
          className="my-3"
          theme="snow"
          style={{ height: '300px' }}
          value={productData.description}
          onChange={handleDescriptionChange}
        />
      </div>
    </div>
  );
};

export default Addproduct;



