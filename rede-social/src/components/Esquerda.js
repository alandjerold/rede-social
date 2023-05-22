import styles from "./Sts.module.css"


function Esquerda (){
    

    return(
        <div > 
        <p>Meu perfil</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>

        
            </svg> 
           
           
           <div >
                <div>
                    <select className={styles.status} name="sts" id="status"  >
                        <option value={'dp'}>Disponível</option>
                        <option value={'au'}>Ausente</option>
                        <option value={'inv'}>Invisível</option>
                        <option value={'off'}>Off-line</option>
                    </select>
                </div>
                <label htmlFor="status">
                   
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" >
                     <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                   </svg>
               
</label>
            </div>

            <p>Editar perfil</p>

            
        </div>
        
    )
}

export default Esquerda