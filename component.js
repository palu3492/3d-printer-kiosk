'use strict';

const e = React.createElement;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked comment number ' + this.props.commentID;
        }

        // return e(
        //     'button',
        //     { onClick: () => this.setState({ liked: true }) },
        //     'Like'
        // );

        // Display a "Like" <button>
        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        );
    }
}

// Find all DOM containers, and render Like buttons into them.
const likeButtonContainer = document.querySelector('#app');
console.log(likeButtonContainer);
ReactDOM.render(
    e(App, {  }), // props here
    likeButtonContainer
);