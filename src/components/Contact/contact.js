import React, { Component } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
         name: '',
         email: '',
         subject: '',
         message: '',
         msgg: '',
         progressCol: ''
    }
  }

  style = {
    backgroundColor: "floralwhite"
  };

  progressLength = {
    width: '25%'
  };
  
  progressBarVal = (val)=> {
      this.setState({
        progressStatVal: val
      });
  }

  onSubmit = (event)=> {
    event.preventDefault();
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Credentials": true
      }
    }

    axios.post('https://gentle-coast-64107.herokuapp.com/send', this.state, config.headers)
       .then((response)=>{
           this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            msgg: response.data.result,
            progressCol: 'text-success'
            });
       });

       this.setState({
        msgg: 'Sending....',
        progressCol: 'text-info'
      });
  }

  render() {
    return (
      <Layout>
        <div className="contakBak" style={this.style}>
          <div className="container">
            <form
              className="row"
            >
              <section className="col-sm-6 mt-5">
                <fieldset className="form-group">
                  <legend className="h4">Contact Form</legend>
                  <div className="form-group">
                    <label
                      htmlFor="yourname"
                      className="form-control-label text-muted"
                    >
                      Your Name(required)
                    </label>
                    <input type="text" className="form-control" 
                            ref="name" value={this.state.name} 
                            onChange={event=>{this.setState({name: event.target.value})}}/>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="form-control-label text-muted"
                    >
                      Your Email(required)
                    </label>
                    <input type="email" className="form-control"
                            ref="email" value={this.state.email}
                            onChange={event=>{this.setState({email: event.target.value})}}/>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="subject"
                      className="form-control-label text-muted"
                    >
                      Subject
                    </label>
                    <input type="text" className="form-control" 
                           ref="subject" value={this.state.subject}
                           onChange={event=>{this.setState({subject: event.target.value})}}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="msg" className="form-control-label text-muted">
                      Message
                    </label>
                    <textarea className="form-control" rows="8" cols="50" 
                              ref="message" value={this.state.message}
                              onChange={event=>{this.setState({message: event.target.value})}}>
                      
                    </textarea>
                  </div>
                  <button
                    className="btn btn-info mr-2"
                    type="button"
                    onClick={this.onSubmit}
                  >
                    Send
                  </button>
                </fieldset>
              </section>
              <section className="col-sm-5 ml-auto mt-5">
                <fieldset>
                  <legend className="form-group">Contact Details</legend>
                  <p>
                    Email: <span>strinidad70@yahoo.com</span>
                  </p>
                  <p>Phone: (818) 277-5587</p>
                  <h4 className={this.state.progressCol}>{this.state.msgg}</h4>
                </fieldset>
              </section>
            </form>
          </div>
        </div>
      </Layout>
    );
  };
}

export default Contact;
