var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios'); //to make Ajax requests

//Use wolfram alpha api to find rank of name
class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        console.log("what is happening");
        axios.get('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
        .then(resp => {
            console.log("successful api request");
            console.log(resp.data.data.stations[0]);
            this.setState({
                data: [resp.data.data.stations[0].lat]
            });
        })
        .catch(console.error);
    }

    render() {
        return (
            <div>
                <p>The sd is: {this.state.data}</p>
            </div>
        );
    }
}

export default Name;
