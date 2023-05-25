import React from 'react';
import './App.css';
import Esquerda from './components/Esquerda'
import Direita from './components/Direita'

import Watch from './components/Watch';
import Start from './components/Start';
import Market from './components/Market';
import Postar from './Eventos/Postar';








function App() {
  return ( 
    <div className="App" > 


    
      
      <header className='header'>

      

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
        


          <div className='search'>
            <label htmlFor ="isearch">Pesquisar</label>
            <input type='search'name='search' id='isearch' placeholder='Pesquisar no FriendLink' >
              
            </input>
          </div>
      
        
      </header>
    
<main>

  <div className='caixa'>
    <div className='preto'>
      <div className='branco'> 
     
        <div><Postar/></div>
        
        
          
      </div>
        
      </div>
    </div>



      <div className='container'>
        
        <div className='esquerda'>
          <Esquerda/>
          
          </div>
  
        
          <div className='direita'> <Direita/> </div>
      </div>
  
</main>
     
            </div>
      

    
  );
}

export default App;

