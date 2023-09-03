import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React from 'react';
import AddJobModal from './components/AddJobModal';
import Search from './components/Search';
import Listings from './components/Listings';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalPreview: false,
    };
  }

  toggleModal = () => {
    this.setState({ modalPreview: !this.state.modalPreview });
  };

  render() {
    return (
      <>
        <Header toggleModal={this.toggleModal} />
        <Search />
        <Listings />
        <AddJobModal
          modalPreview={this.state.modalPreview}
          toggleModal={this.toggleModal}
        />
      </>
    );
  }
}

export default App;
