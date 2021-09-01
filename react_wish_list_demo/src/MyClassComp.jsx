import React from 'react';
class MyClassComp extends React.Component{
    constructor(props) {
        super(props);
        this.names = ['Jason', 'Bobby', 'Jacob', 'Jill']
        this.state = {
            name: '',
            date: new Date(),
        }
        // this.shuffle = this.shuffle.bind(this);
    }
    //Life Cycle Method
    componentDidMount() {
        // will continuously be called 
        // this.timeId = setInterval(() => this.tick(),1000);//make time tick
    }
    //destroy method to keep memory leaks out
    componentWillUnmount(){
        clearInterval(this.timeId);
    }

    //update state of date
    tick = () => this.setState({date: new Date()});

    shuffle = () => {
        const i = Math.floor(Math.random() * this.names.length);
        this.setState({ 
            name: this.names[i],
            stateName: this.names[i],
            count: this.state.count + 1,
        });
    }

  


    render() {
        const {name, date} = this.state;
        // const word = 'Cool';
        return (
            <div>
                <h2>Hello, {name}🖐</h2>
                <h2>It is {date.toLocaleTimeString()}</h2>
                <button onClick={this.shuffle}>Click Me</button>
            </div>
        )
    }
}
export default MyClassComp;