import {Component} from 'react';
import './App.css';
import Post from '../../components/Post/Post'
import Form from '../../components/Form/Form'

class App extends Component {
  state = {
    posts: []
  }

   getPosts = async () => {
    await fetch("/api")
    .then((res) => res.json())
    .then(data => this.setState({posts: data}))
  }

  componentDidMount(){
    this.getPosts()
  }

  render(){
  return (
    <main className="App">
      {this.state.posts.length ? 
        this.state.posts.map(p => (
          <Post post={p} getPosts={this.getPosts} />
         ))
        :
        <h1>Loading...</h1>  
     }
     <Form getPosts={this.getPosts} />
    </main>
  );
}
}

export default App;