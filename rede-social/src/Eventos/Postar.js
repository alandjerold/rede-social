
import Botao from "./Botao"
import {  useState } from "react"
import styles from "./Postar.module.css"



function Postar (){
    
    
    const [posts, setPosts] = useState([]);
    
    
    
    

    
    
 function posted(e) {
     e.preventDefault()
     
     const value = e.target.elements.inputtext.value 
     const newpost = 
     (
     <div className={styles.res} id="res" name= 'res'>
        {value} 
     <Botao/>
    
 </div>
     )   
    

    
    if(value === ''){
        return('')
    }
          
    else  {
    setPosts([...posts,newpost])
   

      
 }
   
}
  
    



return(
<div>


<div className={styles.container}>
    <div className={styles.perfilpost}  >
        <svg className={styles.perfilfeed} ne xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
    
            </svg>
            </div>
    
    
                <form onSubmit={posted}>
                    <div className={styles.inputpost}>
                        <input className={styles.csspost} name="inputtext" id="post" type="text" placeholder="No que você está pensando ?"  >
                            
                        </input>
                    </div>
                    <div className={styles.inputbotao}>
                        <input className={styles.cssbotao} name="botao" id="ibotao" type="submit"value={'Postar'} >
                        </input>
                    </div>
                </form>
</div>
    
   





<div className={styles.feed}>
<h2>Feed de notícias </h2>
{posts.map(( newpost) => (
 
    <div  id="res" name= 'res'>
      {newpost}
      
   </div>
   
   
    
))}


</div>
</div>




)


}

export default Postar
