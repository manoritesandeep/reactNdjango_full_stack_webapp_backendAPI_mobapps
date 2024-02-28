import React, {Component} from 'react';
import { CtxConsumer } from '../index';

class Footer extends Component{

    // we can create the below function in the app.js file and use props to access it here. 
    // createAlert() {
    //     alert("You just clicked a button, welcome to events!")
    // }

    state ={
        name: "",
        age: 35,
        isLogin: true
    }

    componentDidMount() {
        this.setState({name: "Sam"});
    }

    // changed() {
    //     console.log('changed')
    // }

    changed = evt => {
        console.log(this.state.name)
        this.setState({name: evt.target.value});
    }


    render() {

        // const animals = ['cat', 'dog', 'homer', 'horse']

        return( 
                <React.Fragment>
                    {
                        this.state.isLogin===true ? (
                            <React.Fragment>
                                <h2 onClick={this.props.myalert}>
                                    This is the footer component, login is true: {this.props.trademark}
                                </h2>

                                <p>"onClick" and "onChange" are examples of events</p>

                                <input value={this.state.name}
                                    onChange={this.changed} type="text"/>

                                <p>For loop in JS</p>

                                <CtxConsumer>
                                    {(context) => (
                                        <div>
                                            {context.animals.map(animal => {
                                                return (
                                                    <div key={animal}>
                                                        <h1> The animal is: {animal} </h1>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </CtxConsumer>
                                {/* { animals.map (animal => {
                                    return (
                                        <div key={animal}>
                                            <h1> The animal is: {animal} </h1>
                                        </div>
                                    )
                                })} */}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <h2>Page Forbidden</h2>
                                <p>Please login to continue.</p>
                                <h2>This is the footer component when isLogin is false</h2>
                            </React.Fragment>
                        )
                    }
                </React.Fragment>
            )
    }
}

export default Footer;