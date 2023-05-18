import React from 'react';
import './App.css';
import Esquerda from './components/Esquerda'
import Direita from './components/Direita'
import Post from './components/Post';




function App() {
  return (

    
    <div className="App" > 


    <div className='header'>
      <header>
      <div className='divheader'>
        <p className='friend'><a href="http://localhost:3000/" className='link'>FriendLink</a></p>
          <p className='search'>
            <label htmlFor ="isearch">Pesquisar</label>
            <input type='search'name='search' id='isearch' placeholder='Pesquisar no FriendLink' ></input>
          </p>
      </div>
        
      </header>
    </div>

      
    <div className='container'>
      <div className='esquerda'><Esquerda/></div>
      
      <div className='post'> <Post/> </div>
        <div className='direita'> <Direita/> </div>
    </div>
       
      
    
    </div>

    
  );
}

export default App;

