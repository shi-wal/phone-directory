import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
    }

    render() {
        return (
            <Router>
                <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} />} />
                <Route exact path='/add' render={({ history }, props) => <AddSubscriber {...props} history={history} addSubscriberHandler={this.addSubscriberHandler} />} />
            </Router>
        )
    }
}

export default PhoneDirectory;