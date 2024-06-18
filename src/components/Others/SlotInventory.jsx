import React from 'react'
import wpnIcon from '../assets/icons/sword.png'
import hemlIcon from '../assets/icons/helmet.png'
import armorIcon from '../assets/icons/armor.png'
import accIcon from '../assets/icons/ring.png'

export const SlotInventory = ({props,slot,f}) => {

    let stylesEmpty = {
        main : 'w-full h-28 grid grid-cols-4 bg-blue-900 gap-x-1 border rounded-lg p-1 ',
        imgB : 'relative col-span-1 border w-full h-full rounded flex items-center justify-center bg-blue-950 text-white',
        txt  : 'font-nunito',
        sect : 'col-span-3',
        name : 'w-full h-8 items-center justify-center text-white font-bold flex rounded shadow shadow-inner shadow-white shadow-lg',
        icon: 'flex justify-between px-1 py-0.5 font-bold text-sm -top-1 border bg-black rounded'
    }

    let styles = {
        main    : 'w-96 h-28 grid grid-cols-4 p-1 gap-x-1 font-nunito bg-blue-900 border rounded ',
        imgBox  : {
            main: 'relative flex col-span-1 w-full h-full p-1 border rounded items-center',
            span: 'flex absolute w-24 -left-1 -top-1 rounded justify-between text-sm font-bold border bg-black px-1 text-white',
            img : 'w-5/6 object-cover'
        },
        dataBox : {
            main: 'w-full h-full flex flex-col col-span-3 gap-y-2',
            name: 'text-white shadow shadow-white shadow-inner shadow-3xl px-1 py-0.5 rounded',
            ul  : 'grid grid-cols-2 justify-between pl-1',
            li  : 'w-20 text-sm flex justify-between'
        }
    }

    let iconSlot = ''

    switch (slot) {
        case 'Armor':
            iconSlot = armorIcon
            break;
        case 'Accesories':
            iconSlot = accIcon
            break;
        case 'Helmet':
            iconSlot = hemlIcon
            break;
    
        default:
            iconSlot = wpnIcon
            break;
    }

    if(props == undefined){
        return(
            <article onClick={()=>{f(slot)}}>
                <section className={stylesEmpty.main}>
                    <span className={stylesEmpty.imgB}>
                        <span className={stylesEmpty.icon}>
                            <img className='w-5 h-5'
                                src={iconSlot} 
                                alt='weapon' 
                            />
                        </span>
                    </span>

                    <section className={stylesEmpty.sect}>
                        <span className={stylesEmpty.name}>Vacío</span>
                    </section>
                </section>
            </article>
        )
    } else {
        return(
            <article onClick={()=>{f(slot)}} className={styles.main}>
                <section className={styles.imgBox.main}>
                    <span className={styles.imgBox.span}>
                        {slot}
                    </span>
                    <img className={styles.imgBox.img}
                        src={props.image} 
                        alt={props.name}
                    />
                </section>
                
                <section className={styles.dataBox.main}>
                    <span className={styles.dataBox.name}>
                        <h5>
                            {props.name}
                        </h5>
                        <span></span>
                    </span>

                    <ul className={styles.dataBox.ul}>
                        {props.atributes.map(e => {
                            return(
                                <li key={e.name} className={styles.dataBox.li}>
                                    <h5 className='text-white'>
                                        {e.name}
                                    </h5>
                                    <h5 className='text-green-600'>
                                        +{e.value}
                                    </h5>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </article>
        )
    }
}
