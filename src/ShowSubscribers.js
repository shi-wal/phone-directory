import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';


// let subscribers = [
//   {
//     id: 1,
//     name: "Shilpa Bhat",
//     phone: "8888888888"
//   },
//   {
//     id: 2,
//     name: "Srishti Gupta",
//     phone: "9999999999"
//   }
// ];

class ShowSubscribers extends Component {
  constructor() {
    super();
    this.state = {
      subscibersList: []
    }
  }

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


  render() {

    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
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
                  <button className="custom-btn delete-btn" >Delete</button>
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