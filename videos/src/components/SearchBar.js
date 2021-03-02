import React from "react";

class SearchBar extends React.Component {
    state = { term: '' };  

    updateSearchValue = (event) => {
        this.setState({ term: event.target.value });
    };

    submitSearch = event => {
        event.preventDefault();

        // TODO; Make sure to call callback from parent component
        this.props.onFormSubmitCallback(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.submitSearch} className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input type="text" value={this.state.term} onChange={this.updateSearchValue}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
