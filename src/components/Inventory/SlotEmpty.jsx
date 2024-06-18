import React from 'react'
import armor from '../../assets/icons/armor.png'
import sword from '../../assets/icons/sword.png'
import ring from '../../assets/icons/ring.png'
import helm from '../../assets/icons/helmet.png'

export const SlotEmpty = ({name, click}) => {
  
  let styles = {
    main : 'border-2 border-black rounded-lg flex bg-blue-900 font-nunito p-0.5 gap-1',
    imgBox: 'w-24 bg-gray-900 h-full shadow-none border flex items-center justify-center rounded-lg',
    img : 'w-8 h-8',
    infoBox: 'w-full h-full',
    title : 'w-full text-center shadow shadow-inner shadow-white rounded-lg p-2 text-lg font-bold text-white'
  }

  name == 'Arma' ? styles.main += ' col-span-2' : ''
  let icon = ''
  //Cambia el icono según el slot
  switch (name) {
    case 'Armadura':
        icon = armor
      break;
    case 'Casco':
        icon = helm
      break;
    case 'Accesorio 1':
        icon = ring
      break;
    case 'Accesorio 2':
        icon = ring
      break;
    default:
      // Arma
      icon = sword
      break;
  }

  return (
    <li 
    onClick={e=>{click(name)}}
    className={styles.main}
    >
      <picture className={styles.imgBox}>
          <img
            className={styles.img} 
            src={icon}
            alt={name} 
          />
      </picture>

      <div className={styles.infoBox}>
        <h2 className={styles.title}>
            Vacío
        </h2>
      </div>
    </li>
  )
}
