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
import { CreateProductRequest } from "../../api/request";
Modal.setAppElement("#root");

const CreateProductModal = ({ isOpen, setOpen }) => {
  const [inputs, setInputs] = useState([
    {
      title: "Name",
      inputType: "text",
      id: "name",
    },
    {
      title: "Price",
      inputType: "number",
      id: "price",
    },
    {
      title: "Category",
      inputType: "text",
      id: "category",
    },
  ]);

  const fileUploadHandler = (e) => {
    
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
        <Title>Create Product</Title>
        <Button onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </Head>
      <Form>
        <UploadImg>
          <ImgWrapper>
            <Img src="" alt="" />
          </ImgWrapper>
          <div>
            <InputFile
              type="file"
              id="productimg"
              name="img"
              accept="image/*"
              onChange={(e) => fileUploadHandler(e)}
            />
            <LabelFile className="btn btn-orange" htmlFor="productimg">
              Upload image
            </LabelFile>
          </div>
        </UploadImg>
        <RightSide>
          {inputs.map((item) => {
            return <InputField key={item.title} input={item} />;
          })}
          <ButtonWrapper>
            <BtnSubmit className="btn btn-success">Add</BtnSubmit>
          </ButtonWrapper>
        </RightSide>
      </Form>
    </Modal>
  );
};

export default CreateProductModal;
