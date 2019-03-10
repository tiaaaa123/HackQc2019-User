import React from 'react';
import Client from '../Client';

export default class AccountScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    this.fetchAccount();
  }

  fetchAccount = async () => {
    try {
      const response = await Client.get('citizens/me');
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div />
    );
  }
}
