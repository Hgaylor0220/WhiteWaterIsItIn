import React from 'react';
import Menu from './Menu';
import Home from './Home';
import {Switch, Route} from 'react-router-dom';
import Error404 from './Error404';
import RiverSearch from './RiverSearch';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterRiverSearch: []
        };
        this.handleNewSearch = this.handleNewSearch.bind(this);
    }
        handleNewSearch(newSearch) {
        var newMasterRiverSearch = this.state.masterRiverSearch.slice();
        newMasterRiverSearch.push(newSearch);
        this.setState({ masterRiverSearch: newMasterRiverSearch });
    }
    render(){
        
        return (
            <div>
            <Menu/>
            <Switch/>
            <Route exact path ='/' component={Home} />
            <Route path ='/RiverSearch' render={() =><RiverSearch riverSearch={this.state.masterRiverSearch} currentRouterPath= {props.currentLocation.pathname}/>} /> 
            <Route component={Error404} />
            </div>
        );
    };
}
export default App;