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
      job: {
        company: null,
        location: null,
        title: null,
        postingLink: null,
        appliedStatus: false,
        appliedDate: null,
        notes: null,
      },
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
