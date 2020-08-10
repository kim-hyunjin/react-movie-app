import React from 'react';

class App extends React.Component {
    state = {
        count: 0
    };
    add = () => {
        // setState를 호출하면 새로 render function을 호출해줌
        // 현재 state값을 알아서 넣어준다.
        this.setState(current => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({ count: current.count - 1 }));
    };
    componentDidMount() {
        console.log("Component rendered");
    }
    componentDidUpdate() {
        console.log("I just updated");
    }
    componentWillUnmount() {
        console.log("Goodbye, cruel world");
    }
    // Virtual DOM과 이전 DOM을 비교하여 변경된 부분만 새로 렌더링 해준다
    render() {
        console.log("I'm rendering");
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;
