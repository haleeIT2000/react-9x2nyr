import React, { Component } from 'react';
class Contact extends Component{
  render(){
    const {myname, email, phone} = this.props
    return(
      <div>
        <h2> {myname} </h2>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}
export default Contact;