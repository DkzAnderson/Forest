import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import player from '../../../backend/data/player';

export const Principal = () => {

    const [alert,showAlert] = useState(false);

    const styles = {
        main : 'relative h-full w-full flex items-center justify-center',
        menuList : 'z-10 flex flex-col gap-4 text-2xl ',
        menuItems: 'font-metal text-3xl text-white text-center hover:text-yellow-800 cursor-pointer hover:tracking-widest hover:scale-125 duration-300'
    }

    function AlertTimeToShow (){
        showAlert(true);
        let nIntervalsID;
        let i = 0;

        nIntervalsID = setInterval(()=>{
            i++
            if(i == 4){
                showAlert(false);
                clearInterval(nIntervalsID);
            }
        },1000);

        /*
        
                let i = 0;
        


        setInterval(()=>{
            console.log(i)
            i++
            if(i== 7){
                console.log('domo')
                i= 0;
                return
            }
        },1000)
        */
    }

    function SaveGame(){
        player.SaveData();
        AlertTimeToShow();
    }


  return (
    <section className={styles.main}>

        <ul className={styles.menuList}>
            <li className={styles.menuItems}>
                <Link to={"/inventory"}>
                Inventario
                </Link>
            </li>

            <li className={styles.menuItems}>
                <Link to={"/combat"}>
                    Batalla
                </Link>
            </li>
            
            <li className={styles.menuItems}>
                <Link to={"/bestiary"}>
                Bestiario
                </Link>
            </li>
            
            <li className={styles.menuItems}>
                Tutoriales
            </li>
            <li 
                className={styles.menuItems}
                onClick={()=>{SaveGame()}}
            >
                Guardar Partida
            </li>
        </ul>

          {
            // Alerta que muestra al jugador que se guardaron sus datos.

              alert ?
                  <h3 className='animate-pulse absolute z-20 top-10 py-2 text-2xl bg-gradient-to-br from-green-800 to-blue-700 text-white font-nunito rounded-full w-[80%] text-center border-2 border-black'>
                      Partida guardada exitosamente.
                  </h3> : ''
          }


    </section>
  )
}
