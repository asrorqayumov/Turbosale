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
  Select,
  Textarea,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import InputField from "../Form/InputField";
import fileUpload from "../../utils/FileUpload";
import { CreateProductRequest, GetCategorys } from "../../api/request";
import { Toast } from "./../../utils/toastify";
import { InputItem, Label } from "../Form/style";
import { useContext } from "react";
import ProductContext from "../../context/productContext";
Modal.setAppElement("#root");

const CreateProductModal = ({ isOpen, setOpen }) => {
  const {changeData} = useContext(ProductContext)
  const [product, setProduct] = useState({
    name: "",
    price: null,
    categoryId: "",
    description: "",
  });
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    GetCategorys()
      .then((res) => {
        setCategorys(res.payload);
      })
      .catch((err) => console.log(err));
  }, []);

  const inputHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in product) {
        formData.append(key, product[key]);
      }
      formData.append("img", e.target.img.files[0]);
      const response = await CreateProductRequest(formData);
      setOpen(false);
      Toast.fire({
        icon: "success",
        title: "Product has created",
      });
      changeData(product.name)
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
        <Title>Create Product</Title>
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
              onChange={(e) => fileUpload(e)}
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
          <InputField
            title="Price"
            name="price"
            inputType="number"
            onChange={inputHandler}
          />
          <InputItem>
            <Label> Category</Label>
            <Select name="categoryId" onChange={inputHandler}>
              {categorys.map((e) => {
                return (
                  <option key={e._id} value={e._id}>
                    {e.name}
                  </option>
                );
              })}
            </Select>
          </InputItem>
          <InputItem>
            <Label>Description</Label>
            <Textarea
              name="description"
              onChange={inputHandler}
              id=""
            ></Textarea>
          </InputItem>
          <ButtonWrapper>
            <BtnSubmit className="btn btn-success">Add</BtnSubmit>
          </ButtonWrapper>
        </RightSide>
      </Form>
    </Modal>
  );
};

export default CreateProductModal;
