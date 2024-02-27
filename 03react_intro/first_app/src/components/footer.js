import React, {Component} from 'react';

class Footer extends Component{

    // we can create the below function in the app.js file and use props to access it here. 
    // createAlert() {
    //     alert("You just clicked a button, welcome to events!")
    // }

    changed() {
        console.log('changed')
    }


    render() {
        return( 
                <React.Fragment>
                   <h2 onClick={this.props.myalert}>
                        This is the footer component: {this.props.trademark}
                    </h2>

                    <p>"onClick" and "onChange" are examples of events</p>

                    <input onChange={this.changed} type="text"/>
                </React.Fragment>
            )
    }
}

export default Footer;