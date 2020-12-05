import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import { Link } from 'react-router-dom';

// let subscribers = [
//   {
//     id: 1,
//     name: "Shivangi",
//     phone: "8888888888"
//   },
//   {
//     id: 2,
//     name: "Neha",
//     phone: "9999999999"
//   }
// ];

class ShowSubscribers extends Component {

  //  componentDidMount(){
  //    let newSubscriber ={
  //      id:1,
  //      name:"Shivangi",
  //      phone:"8193903317"
  //    }
  //    let subscribers = this.state.subscibersList;
  //    subscribers.push(newSubscriber);
  //    this.setState({subscibersList : subscribers});
  //  }

  onDeleted = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }

  render() {

    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <Link to='/add'><button className="custom-btn add-btn">Add</button></Link>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            this.props.subscribersList.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.onDeleted.bind(this, sub.id)} >Delete</button>
                </span>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;
