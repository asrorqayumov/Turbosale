import { FileUploadRequest } from "../api/request";

const fileUpload = (e,setImgFile) => {
  e.preventDefault();
  let imageTag = e.target.parentElement.previousSibling.children[0];
  let file = e.target.files[0];
  let reader = new FileReader();
  reader.onloadend = async function () {
    imageTag.src = reader.result;
    imageTag.classList.add("visible");
    try {
      const request = await FileUploadRequest(reader.result);
      console.log(request);
      setImgFile()
      return request;
    } catch (error) {
      console.log(error);
    }
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    imageTag.src = "";
  }
};

export default fileUpload;
