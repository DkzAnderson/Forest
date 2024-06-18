import React from 'react'
import icon from '../assets/icons/sword.png'

export const ItemListInventory = ({props}) => {

    console.log(props)
    console.log('item')

    let styles = {
        main          : 'grid grid-cols-4 border-2 p-1 bg-blue-900 rounded-lg w-96 h-32 cursor-default',
        img           : 'w-full h-full col-span-1',
        imgBox        : 'border-2 col-span-1 p-2 rounded bg-indigo-950 cursor-pointer ',
        section       : 'col-span-3 pl-2 w-full flex flex-col gap-2',
        span          : 'flex w-full justify-between p-0.5 shadow shadow-inner shadow-white shadow-lg rounded',
        icon          : 'w-full h-full object-fit',
        name          : 'font-nunito text-xl max-w-60 truncate ', 
        atributes     : 'flex gap-2 w-20',
        atributesBox  : 'w-full h-full grid grid-cols-2',
        atributesName : 'text-sm text-white w-full',
        atributesValue: 'text-sm text-green-500'
    }

    switch (props.quality) {
        case 'Rara':
            
            break;
        case 'Legendaria':
            styles.imgBox += 'border-orange-500'
            styles.name += 'text-orange-500'
            break;
    
        default:
            break;
    }

  return (
    <article className={styles.main}>
        <span className={styles.imgBox}>
            <img className={styles.img}
                src={props.image} 
                alt={props.name} 
            />
        </span>

        <section className={styles.section}>
            <span className={styles.span}>
                <h5 className={styles.name}>
                    {props.name}
                </h5>
                <span className='w-6 h-6 shadow shadow-white bg-blue-950 rounded-full p-0.5'>
                    <img className={styles.icon}
                        src={icon}
                        alt={props.type} 
                    />
                </span>
            </span>
            <div className='flex items-end pr-0.5'>
                <ul className={styles.atributesBox}>
                    {props.atributes.map(e => {
                        return(
                            <li className={styles.atributes} key={e.name}>
                                <h5 className={styles.atributesName}>{e.name}</h5>
                                <h5 className={styles.atributesValue}>+{e.value}</h5>
                            </li>
                        )
                    })}
                </ul>

                <span className='bg-blue-950 shadow shadow-white h-7 w-7 p-1 rounded-full cursor-pointer'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>
            </div>
        </section>

    </article>
  )
}
