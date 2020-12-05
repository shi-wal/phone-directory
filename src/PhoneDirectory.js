import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: "Shivangi Agrawal",
                    phone: "8193903317"
                },
                {
                    id: 2,
                    name: "Neha Agrawal",
                    phone: "9084556786"
                }
            ]
        }
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscribers = this.state.subscribersList;
        if (subscribers.length > 0) {
            newSubscriber.id = subscribers[subscribers.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribers.push(newSubscriber);
        this.setState({ subscribersList: subscribers });
        console.log(this.state.subscribersList);
    }

    render() {
        return (
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
            <ShowSubscribers subscribersList={this.state.subscribersList} />
        )
    }
}

export default PhoneDirectory;