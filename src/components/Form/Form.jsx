// components/Form/Form.jsx
import { Component } from 'react';

export default class Form extends Component {
  state = {
    content: ""
  };

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async () => {
    let body = {...this.state}
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    // Now for the fetch call
    await fetch("/api", options)
      .then(res => res.json())
      .then(data => {
        // Call our getPosts function to get fresh data
        this.props.getPosts();
        // clear out this.state.content
        this.setState({ content: "" })
      })
  }

  render() {
    return(
      <div>
        <textarea 
          name="content"
          onChange={this.handleChange}
          value={this.state.content}></textarea>
        <br/>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }
}