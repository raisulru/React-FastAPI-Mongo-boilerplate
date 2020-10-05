import React from 'react';
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        {/* <Modal show={this.state.show} handleClose={this.hideModal}>
          <FacebookConnect />
        </Modal> */}
        <button type="button">
        <Link to="/ads/onboarding-process">Connect</Link>
        </button>
      </div>
    );
  }
}

export default LandingPage;
