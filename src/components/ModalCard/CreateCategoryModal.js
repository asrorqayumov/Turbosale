import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
  Button,
  Form,
  Head,
  RightSide,
  Title,
  UploadImg,
  InputFile,
  LabelFile,
  ImgWrapper,
  Img,
  BtnSubmit,
  ButtonWrapper,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import InputField from "../Form/InputField";
import fileUpload from "../../utils/FileUpload";
import { CreateCategoryRequest } from "../../api/request";
Modal.setAppElement("#root");

const CreateCategoryModal = ({ isOpen, setOpen }) => {
  const [product, setProduct] = useState({
    name: "",
  });
  const [imgFile, setImgFile] = useState();
  

  const inputHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log(product);
  };
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in product) {
        formData.append(key, product[key]);
      }
      formData.append("img", e.target.img.files[0]);
      console.log(e.target, Array.from(formData));
      const response = await CreateCategoryRequest(formData);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={setOpen}
      style={{
        overlay: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
      className="create_product_modal"
    >
      <Head>
        <Title>Create Category</Title>
        <Button onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </Head>
      <Form onSubmit={formHandler}>
        <UploadImg>
          <ImgWrapper>
            <Img id="productimg" src="" alt="" />
          </ImgWrapper>
          <div>
            <InputFile
              type="file"
              id="product_img_input"
              name="img"
              accept="image/*"
              onChange={(e) => fileUpload(e, setImgFile)}
            />
            <LabelFile className="btn btn-orange" htmlFor="product_img_input">
              Upload image
            </LabelFile>
          </div>
        </UploadImg>
        <RightSide>
          <InputField
            title="Name"
            name="name"
            inputType="text"
            onChange={inputHandler}
          />
          {/* <InputField
            title="Price"
            name="price"
            inputType="number"
            onChange={inputHandler}
          />
          <InputField
            title="Category"
            name="categoryName"
            inputType="text"
            onChange={inputHandler}
          /> */}
          <ButtonWrapper>
            <BtnSubmit className="btn btn-success">Add</BtnSubmit>
          </ButtonWrapper>
        </RightSide>
      </Form>
    </Modal>
  );
};

export default CreateCategoryModal;
