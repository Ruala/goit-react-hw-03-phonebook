import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Alert.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Alert extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Alert__backdrop" onClick={this.handleBackdropClick}>
        <div className="Alert__content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
