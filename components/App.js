var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios'); //to make Ajax requests

import Search from './search'

//Use wolfram alpha api to find rank of name
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: null
        }
    }

    findSatelliteImage(address){
        //geocode address and get {lat, lon}
        const location = {
            lat: address.lat,
            lon: address.lon
        }
        const query = 'https://api.astrodigital.com/v2.0/search/?' + 'contains=' + location.lat + ',' + location.lon;

        console.log(query);
        axios.get(query)
        .then((response) => {
            console.log(response);
            this.setState({imageURL: response.data.results[0].thumbnail});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    showImage(){
        if (this.state.imageURL === null){
            return <div></div>;
        }else{
            return <img src={this.state.imageURL}/>;
        }
    }

    componentWillMount() {
    }

    render() {
        return(
            <div>
            <Search
                placeholder="Enter Address"
                label = "Search"
                onSubmit={(address) => {
                    console.log("address: ", address);
                    const addressArr = address.split(",");
                    console.log(addressArr);
                    address = {
                        lat: addressArr[0],
                        lon: addressArr[1]
                    }
                    this.findSatelliteImage(address);
            }}/>
            {this.showImage()}
            </div>
        );
    }

}

export default App;
