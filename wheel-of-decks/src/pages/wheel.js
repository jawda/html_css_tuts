import React from "react";
class Wheel extends React.Component{
    // constructor(){
    //     super();
    // }
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
                <div className='arrow'></div>
                <ul className={this.state.name}>
                    <li className='li-rotate'>
                        <div className="text"
                            spellCheck="false">1</div>
                    </li>
                    <li className='li-rotate'>
                        <div className="text"
                            spellCheck="false">2</div>
                    </li>
                    <li className='li-rotate'>
                        <div className="text"
                            spellCheck="false">3</div>
                    </li>
                    <li className='li-rotate'>
                        <div className="text"
                            spellCheck="false">4</div>
                    </li>
                    <li className='li-rotate'>
                        <div className="text"
                            spellCheck="false">5</div>
                    </li>
                    <li className='li-rotate'>
                        <div className="text"
                            spellCheck="false">6</div>
                    </li>
                    <li className='li-rotate'>
                        <div className="text"
                            spellCheck="false">7</div>
                    </li>
                    <li className='li-rotate'>
                        <div className="text"
                            spellCheck="false">8</div>
                    </li>
                    <li className='li-rotate'>
                        <div className="text"
                            spellCheck="false">9</div>
                    </li>
                    <li className='li-rotate'>
                        <div className="text"
                            spellCheck="false">10</div>
                    </li>
                    <li className='li-rotate'>
                        <div className="text"
                            spellCheck="false">11</div>
                    </li>
                    <li className='li-rotate'>
                        <div className="text"
                            spellCheck="false">12</div>
                    </li>
                </ul>
                <button className='spin-button'
                onClick={this.startRotation}>SPIN</button>
    </div>
        )
    }
}

export default Wheel;