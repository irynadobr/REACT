import React, {Component} from 'react';
import {arr} from "./Arr";
import User from "./user/User";
class Users extends Component {
    state = {
        users: [...arr]
    };


    shuffleArray =() => {
    const array  = this.state.users;

        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        this.setState({users: array});

    };


    render() {
        return (
            <div>
                {
                    this.state.users.map((item, index) =>{
                        return (<User user={item} key={index}/>)
                    })
                }
                <button onClick={this.shuffleArray}>sort</button>

            </div>
        );
    }
}

export default Users;
