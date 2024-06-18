import React from 'react'

export const SlotEquiped = ({item, showInventory,name}) => {

    let styles = {
      main    : 'bg-blue-900 grid grid-cols-3 rounded-lg border border-black p-1 sm:p-2 font-nunito',
      imgBox  : 'w-full bg-gray-900 border-2 p-2 rounded-lg shadow-none',
      img     : 'size-full object-scale-down',
      boxInfo : 'w-full p-1 px-3',
      titleBox: 'w-full items-center justify-center flex',
      titleBox2: 'hidden col-span-2',
      title   : 'font-bold truncate ',
      title2   : 'text-sm font-bold h-full w-full flex p-2 ',
    }

    let stats = {
      main      : 'w-full grid grid-cols-2 ',
      atributes : 'flex w-full justify-between ',
      titles    : 'text-white font-bold',
      values    : 'text-green-500 animate-pulse text-end'

    }

    if(item.type == 'Arma'){
      styles.main += ' col-span-2 grid-cols-4' 
      styles.title += ' text-lg '
      styles.imgBox += 'col-span-1 sm:h-[90%] shadow-none'
      styles.boxInfo += ' col-span-3'
      stats.main += ' h-10/12 gap-x-3'
      stats.atributes += 'h-8 sm:px-5'

    } else {
      styles.main += 'grid-cols-2 grid-rows-2'
      styles.imgBox += ''
      styles.boxInfo = 'w-full h-full p-1 px-1 col-span-3 text-sm'
      styles.titleBox2 = 'w-full h-full items-center justify-center flex col-span-2'
      styles.titleBox = 'hidden'
      stats.main += 'h-full gap-x-3 sm:gap-x-10'
    }

    let border = ''
    item.quality === 'Legendario' ? border = ' border-orange-500' : '';
    item.quality === 'Raro' ? border = ' border-cyan-300' : '';


  return (
    <li 
      className={styles.main}
      onClick={e=>{showInventory(name)}}
    >
      <picture className={`${styles.imgBox} ${border}`}>
          <img
            className={styles.img} 
            src={item.img}
            alt={item.name} 
          />
      </picture>

      <span className={styles.titleBox2}>
            {
              item.quality === 'Legendario' ? 
              <h2 className={`${styles.title2} text-orange-500 animate-pulse`}>
                {item.name}
              </h2>
               : item.quality === 'Raro' ? 
               <h2 className={`${styles.title2} text-cyan-300 animate-pulse`}>
                {item.name}
               </h2>
               :  
               <h2 className={`${styles.title2} text-white`}>
                {item.name}
               </h2> 
            }
      </span>

      <div className={styles.boxInfo}>
          <span className={styles.titleBox}>
            {
              item.quality === 'Legendario' ? 
              <h2 className={`${styles.title} text-orange-500 animate-pulse`}>
                {item.name}
              </h2>
               : item.quality === 'Raro' ? 
               <h2 className={`${styles.title} text-cyan-300 animate-pulse`}>
                {item.name}
               </h2>
               :  
               <h2 className={`${styles.title} text-white`}>
                {item.name}
               </h2> 
            }
          </span>

          <ul className={stats.main}>{
            item.atributes.map(element=>{
              return(
                <li 
                    className={stats.atributes}
                    key={element.name}>

                    <h5 
                      className={stats.titles}>
                      {element.name}
                    </h5>

                    {
                      element.value != 0 ?
                      <h5
                      className={stats.values}>
                      +{element.value}
                    </h5>
                     : <h5 className='text-red-950 text-sm'>
                      {element.value}
                     </h5>
                    }

                </li>
              )
            })     
         }</ul>
      </div>
    </li>
  )
}
