import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props); //for props to get set on this object

        this.state = {
            searchTerm: ""
        }
    }

    render(){
        return (
            <div>
            <form onSubmit={(e) =>{
                e.preventDefault(); //so page does not refresh after submission
                this.props.onSubmit(this.state.searchTerm);
            }}>
                <input
                    type="text"
                    placeholder = {this.props.placeholder}
                    value = {this.state.searchTerm}
                    onChange={(e) => { //What you are typing in
                        this.setState({
                            searchTerm: e.target.value
                        })
                    }}
                    />
                <button type="submit">{this.props.label}</button>
            </form>
            </div>
        );
    }
}

export default Search;
