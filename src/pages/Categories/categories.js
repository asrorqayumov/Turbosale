import React from 'react';
import Modal from "react-modal";
import CreateCategoryModal from './../../components/ModalCard/CreateCategoryModal';
Modal.setAppElement("#root");

const Categories = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
      setIsOpen(true);
    };
    return (
        <>
         <CreateCategoryModal isOpen={modalIsOpen} setOpen={setIsOpen} />
        <div className='section'>
           <button onClick={openModal} className='btn btn-success'>Create Category</button>
        </div>
        </>
    );
};



export default Categories;