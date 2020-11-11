import React, {Component} from 'react';
import {arr} from "./Arr";
import User from "./user/User";
class Users extends Component {
    sorArr = (user) => {
console.log(arr.reverse());
    };

     shuffleArray() {
         const array  = arr;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        console.log(array)
    }


    render() {
        let className='target'
        return (
            <div className={className}>
                {
                    arr.map((item, index) =>{
                        return (<User user={item} key={index}/>)
                    })
                }
                <button onClick={this.shuffleArray}>sort</button>

            </div>
        );
    }
}

export default Users;
