import React from "react";
const itemCount = [1,2,3,4,5,6,7,8,9,10,11,12];
let Repeater = () => {
    return (
        <div>
            {itemCount.map(i => {
                return <li className='li-rotate' key={i}>
                    <div className="text"
                            spellCheck="false">
                                {i}
                    </div></li>;
            })}
        </div>
    );
    
};    
class Wheel extends React.Component{

    state = {
          name: "circle"
        }
        startRotation = () => {
          this.setState({
            name: "circle start-rotate"
          });
          setTimeout(() => {
            this.setState({
              name: "circle start-rotate stop-rotate"
            });
          }, Math.floor(Math.random() * 5000) + 1);
        }
    render() {
        return(
            <div>
                {/* TODO: add a title or something above the spinner? probably */}
                
                <div className='arrow'></div>
                <ul className={this.state.name}>
                    <Repeater />
                </ul>

                <div><h1 className="title">The wheel of random!</h1></div>
                <div>
                    <button className='spin-button'
                onClick={this.startRotation}>SPIN</button>
                </div>
    </div>
        )
    }
}

export default Wheel;