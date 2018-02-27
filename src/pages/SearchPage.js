import React, { Component } from 'react';
import App from 'components/App';
import { connect } from 'react-redux';

class SearchPage extends Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}


const mapStateToProps = function mapStateToProps(state) {
};
export default connect(mapStateToProps, ActionCreators)(SearchPage);
