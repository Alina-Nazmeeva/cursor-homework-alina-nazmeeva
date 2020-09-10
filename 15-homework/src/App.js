import React from 'react';
import Post from './Post/Post';

const somePost = {
  author: {
    name: "Anakin skywalker",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
    nickname: "@dart_vader"
  },
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  photo: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
  date: "26 февр."
};

function App() {
  return (        
    <Post {...somePost}/>   
  );
}

export default App;
