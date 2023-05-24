import React from 'react';
import './App.css';
import Esquerda from './components/Esquerda'
import Direita from './components/Direita'
import Feed from './components/Feed';
import Watch from './components/Watch';
import Start from './components/Start';
import Market from './components/Market';
import Post from './components/Post';
import Footer from './components/Footer';






function App() {
  return ( 
    <div className="App" > 


    
      
      <header className='header'>

      <div className='divheader'>

        <div className='friend'>
          
          <a href="http://localhost:3000/" className='link'>FriendLink</a>
          
          </div>

       <div className='icones'>
         
         <div className='divmarket'>
               <Market/>
         
           </div>
             <div className='divhome'>
               <Start/>
             </div>
         
             <div className='divvideo'>
               <Watch/>
         
           </div>
       </div>

          
        


          <p className='search'>
            <label htmlFor ="isearch">Pesquisar</label>
            <input type='search'name='search' id='isearch' placeholder='Pesquisar no FriendLink' >
              
            </input>
          </p>
      </div>
        
      </header>
    
<main>

  <div className='caixa'>
    <div className='preto'>
      <div className='branco'> 
      <div className='post'>
        <Post/>
        
        
          <label htmlFor="iposte"></label>
              <input type="text" name="poste" id="iposte" placeholder='No que você está pensando ?' ></input>
        
        </div>
        </div>
  </div>


    </div>



      <div className='container'>
        
        <div className='esquerda'>
          <Esquerda/>
          
          </div>
  
        <div className='feed'> <Feed/> </div>
          <div className='direita'> <Direita/> </div>
      </div>
  
</main>
      <div className='footer'><Footer/></div>
    
    </div>

    
  );
}

export default App;

