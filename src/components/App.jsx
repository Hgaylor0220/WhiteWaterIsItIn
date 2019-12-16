import React from 'react';
import Header from './Header';
import Home from './Home';
import JournalEntry from './JournalEntry';
import NewOrderControl from './NewOrderControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import ViewStock from './ViewStock';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            masterJournalEntry: []
        };
        this.handleAddingNewOrderToList = this.handleAddingNewOrderToList.bind(this);
    }

    handleAddingNewOrderToList(newOrder) {
        var newMasterJournalEntry = this.state.masterJournalEntry.slice();
        newMasterJournalEntry.push(newOrder);
        this.setState({ masterJournalEntry: newMasterJournalEntry });
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/orderList' render={() => <JournalEntry orderList={this.state.masterJournalEntry} />} />
                    <Route path='/neworder' render={() => <NewOrderControl onNewOrderCreation={this.handleAddingNewOrderToList} />} />
                    <Route path='/admin' render={(props) => <Admin orderList={this.state.masterJournalEntry} currentRouterPath={props.location.pathname} />} />

                    <Route component={Error404} />
                </Switch>
            </div>
        );
    }
}

export default App;