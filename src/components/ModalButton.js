import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import ReadMore from './ReadMore';
import { useState } from 'react';
import ContactForm from './ContactForm';
import close from '../img/close.svg';

const Close = styled.div`
  position: absolute;
  right: 25px;
  border-width: 0;
  button {
    border-width: 0;
    background-color: inherit;
  }
  img {
    width: 25px;
  }
`;
const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  button {
    background-color: ${props => props.theme.pink};
    padding: 15px 17px;
    font-size: 1.3em;
    border-width: 0;
    h4 {
      margin: 0;
      color: ${props => props.theme.lightBrown};
    }
  }
`;

ReactModal.setAppElement('body');

const ModalTitle = styled.h2`
  margin-top: 5px;
  margin-bottom: 20px;
  @media (max-width: ${props => props.theme.mobile}) {
    text-align: left;
  }
`;

export default function ModalButton(props) {
  const [isOpened, setToggleModal] = useState(false);
  const toggleModal = () => setToggleModal(!isOpened);
  return (
    <div>
      <CenterButton onClick={toggleModal}>
        <ReadMore text={'BOOK'} />
      </CenterButton>
      <ReactModal
        closeTimeoutMS={200}
        isOpen={isOpened}
        onRequestClose={toggleModal}
        style={{
          overlay: { backgroundColor: '#ffefd587' },
          content: {
            maxWidth: '500px',
            margin: 'auto',
            top: '50%',
            transform: 'translateY(-50%)',
            border: 'none',
            borderRadius: '0',
            bottom: 'auto'
          }
        }}
      >
        <Close>
          <button onClick={toggleModal}>
            <img src={close} alt="Close Modal" />
          </button>
        </Close>
        <ModalTitle>Book Now</ModalTitle>
        <ContactForm singleColumn eventName={props.eventName} />
      </ReactModal>
    </div>
  );
}
