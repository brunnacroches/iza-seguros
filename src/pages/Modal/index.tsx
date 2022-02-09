import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-responsive-modal';
import { borderRadius } from 'styled-system';


import {
  Container,
  ButtonModal,
} from'./styless'


const ModalForms: React.FC = () => {

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

      return (

      <Container>
        <div>
        <ButtonModal>
          <button onClick={onOpenModal} 
          style={{ 
            color: "white", 
            background: "#FF5148", 
            borderRadius:3,
            height: 60, 
            width: 150,
            }}>Open modal
          </button>
        </ButtonModal>
          <Modal open={open} onClose={onCloseModal} center>
              <h2>Simple centered modal</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
              hendrerit risus, sed porttitor quam.
              </p>
          </Modal>
          </div>
    </Container>
  );
}

export default ModalForms;



