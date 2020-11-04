import React, {Component} from 'react';
import {arr} from "./Arr";
import User from "./user/User";
class Users extends Component {
    sorArr = (user) => {
console.log(arr.reverse());
    };
    render() {
        let className='target'
        return (
            <div className={className}>
                {
                    arr.map((item, index) =>{
                        return (<User user={item} key={index}/>)
                    })
                }
                <button onClick={this.sorArr}>sort</button>

            </div>
        );
    }
}

export default Users;