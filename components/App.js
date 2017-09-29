var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios'); //to make Ajax requests

import Search from './search'

//Use wolfram alpha api to find rank of name
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    findSatelliteImage(address){
        //geocode address and get {lat, lon}
        axios.get('https://api.astrodigital.com/v2.0/search/?contains=-122.4376,37.7577')
        .then((response) => {
            console.log(response);
            this.setState({data: response.data.results[0].thumbnail});
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    componentWillMount() {
    }

    render() {
        return (
            <div>
            <Search
                placeholder="Enter Address"
                label = "Search"
                onSubmit={(address) => {
                    console.log("address: ", address);
                    // this.findSatelliteImage(address);
            }}/>
            </div>
        );
    }

}

export default App;
