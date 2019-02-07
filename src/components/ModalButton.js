import React from 'react';
import ReactModal from 'react-modal';
import { navigateTo } from 'gatsby-link';
import styled, { css } from 'styled-components';
import ReadMore from './styles/ReadMore';
import ContactForm from './ContactForm';

const Close = styled.div`
  position: absolute;
  right: 25px;
  border-width: 0;
  button {
    border-width: 0;
    font-size: 2.4em;
    color: #824706;
    background-color: inherit;
  }
`;
const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  button {
    background-color: #f9decf;
    padding: 15px 17px;
    font-size: 1.3em;
    border-width: 0;
    h4 {
      margin: 0;
      color: #824706;
    }
  }
`;

ReactModal.setAppElement('body');

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

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

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error));
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
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
