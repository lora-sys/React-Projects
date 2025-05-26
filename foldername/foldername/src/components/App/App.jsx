// App.jsx

import React from 'react';
import Header from '../Header/Header';
import ResultContainer from '../ResultContainer/ResultContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

// Class based component
class App extends React.Component {
    state = {
        headerText: "Just Name It!!",
        headerExpanded: true,
        suggestedNames: [],
    };
    // Animation
    handleInputChange = (inputText) => {
        this.setState({ headerExpanded: !(inputText.length > 0), 
        suggestedNames: (inputText.length > 0) ? 
                        name(inputText) : [], });
    };

    render() {
        return (
            <div>
                <Header
                    headTitle={this.state.headerText}
                    headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer suggestedNames=
                    {this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;