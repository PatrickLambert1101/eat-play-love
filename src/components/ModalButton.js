import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import ReadMore from './styles/ReadMore';
import ContactForm from './ContactForm';

const Close = styled.div`
  position: absolute;
  right: 25px;
  border-width: 0;
  button {
    border-width: 0;
    font-size: 2.4em;
    color: ${props => props.theme.lightBrown};
    background-color: inherit;
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
`;

class ModalButton extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      isValidated: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <CenterButton>
          <ReadMore onClick={this.handleOpenModal}>
            <h4>Book Now</h4>
          </ReadMore>
        </CenterButton>
        <ReactModal
          closeTimeoutMS={200}
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
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
            <button onClick={this.handleCloseModal}>X</button>
          </Close>
          <ModalTitle>Book Now</ModalTitle>
          <ContactForm singleColumn />
        </ReactModal>
      </div>
    );
  }
}

export default ModalButton;
