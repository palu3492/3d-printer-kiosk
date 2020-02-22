'use strict';

const e = React.createElement;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {printer: "test"};
        start(this.updatePrinterState.bind(this));
    }

    updatePrinterState(data){
        console.log(data);
        this.setState = {printer: data};
    }

    render() {
        return (
            <p>{this.state.printer}</p>
        );
    }
}

// Find all DOM containers, and render Like buttons into them.
const appContainer = document.querySelector('#app');

ReactDOM.render(
    e(App, {  }), // props here
    appContainer
);