import React from 'react'
import { useState } from 'react'
import { ItemListInventory } from './ItemInventoryList'
import { SlotInventory } from './SlotInventory'

export const InventoryZone = ({item,player}) => {

    const [inventoryList,setInventoryList] = useState(false);

    function showInventory(filter){
        setInventoryList(!inventoryList);
        
        return(
            <ItemListInventory props={player.inventory[0]}/>
        )

        /*
        player.inventory.map(item=>{
            
            if(item.slot == filter){
                
            } else {
                console.log(item.slot);
                
            }
        })
        */
    }

    let pnjInfo = {
        main    : 'w-full h-full flex-col font-nunito gap-7',
        top     : {
            main: 'w-full h-1/2 bg-black gap-5 flex flex-col items-center',
         picture: 'w-60 h-full flex items-center',
      statistics: {
        main    : 'flex flex-col w-full h-full gap-2 items-center border border-white',
        top     : 'w-full px-6 flex flex-col items-center',
        topSpan : 'flex text-white gap-2',
        topTxt  : 'font-bold',
        barIn   : 'bg-green-700 w-1/2 h-full rounded-full',
        barOut  : 'w-full h-2 bg-zinc-700 rounded-full border border-gray-400',
        statBox : 'w-full grid grid-cols-2 gap-x-4 px-5  place-center',
        statSpan: 'flex w-full px-2 justify-center justify-between',
        statTxt1: 'font-bold text-gray-500',
        statTxt2: 'font-bold font-fira text-green-600',

      }

        },
        bottom  : {
            main: 'grid grid-cols-2 gap-y-3 gap-x-2',

        }
    }
    
    let itemListStyle = {
        main    : '',
        top     : {},
        bottom  : {}
    }

    let main = 'flex bg-black w-full h-dvh flex-col'

    if(inventoryList){
        pnjInfo.main  += ' hidden';
        itemListStyle.main += ' flex';
    } else{
        pnjInfo.main  += ' flex';
        itemListStyle.main += ' hidden';
    }

  return (
    <div className={main}>
        <section className={pnjInfo.main}>
            <div className={pnjInfo.top.main}>
                <picture className={pnjInfo.top.picture}>
                    <img
                        className='w-full h-full object-cover' 
                        src={player.image} 
                        alt={player.name} 
                    />
                </picture>
                
                <article className={pnjInfo.top.statistics.main}>
                    <div className={pnjInfo.top.statistics.top}>
                        <span className={pnjInfo.top.statistics.topSpan}>
                            <h2 className={pnjInfo.top.statistics.topTxt}>Nivel</h2>
                            <h2 className={pnjInfo.top.statistics.topTxt}>1</h2>
                        </span>

                        <div className={pnjInfo.top.statistics.barOut}>
                            <div className={pnjInfo.top.statistics.barIn}
                                
                            />
                        </div>
                    </div>

                    <div className={pnjInfo.top.statistics.statBox}>
                        <span className={pnjInfo.top.statistics.statSpan}>
                            <h5 className={pnjInfo.top.statistics.statTxt1}>HP</h5>
                            <h5 className={pnjInfo.top.statistics.statTxt2}>
                                {player.atributes[4].values.actual}
                            </h5>
                        </span>

                        <span className={pnjInfo.top.statistics.statSpan}>
                            <h5 className={pnjInfo.top.statistics.statTxt1}>MP</h5>
                            <h5 className={pnjInfo.top.statistics.statTxt2}>
                                {player.atributes[5].values.actual}
                            </h5>
                        </span>

                        <span className={pnjInfo.top.statistics.statSpan}>
                            <h5 className={pnjInfo.top.statistics.statTxt1}>ATK</h5>
                            <h5 className={pnjInfo.top.statistics.statTxt2}>
                                {player.atributes[0].values.actual}
                            </h5>
                        </span>

                        <span className={pnjInfo.top.statistics.statSpan}>
                            <h5 className={pnjInfo.top.statistics.statTxt1}>DEF</h5>
                            <h5 className={pnjInfo.top.statistics.statTxt2}>
                                {player.atributes[2].values.actual}
                            </h5>
                        </span>

                        <span className={pnjInfo.top.statistics.statSpan}>
                            <h5 className={pnjInfo.top.statistics.statTxt1}>MAG</h5>
                            <h5 className={pnjInfo.top.statistics.statTxt2}>
                                {player.atributes[1].values.actual}
                            </h5>
                        </span>

                        <span className={pnjInfo.top.statistics.statSpan}>
                            <h5 className={pnjInfo.top.statistics.statTxt1}>SPR</h5>
                            <h5 className={pnjInfo.top.statistics.statTxt2}>
                                {player.atributes[3].values.actual}
                            </h5>
                        </span>
                    </div>

                </article>
            </div>

            <div className={pnjInfo.bottom.main}>
                <div className='col-span-2'>
                    <SlotInventory f={showInventory} slot={'Weapon'}/>
                </div>
                <SlotInventory f={showInventory} slot={'Helmet'}/>
                <SlotInventory f={showInventory} slot={'Armor'}/>
                <SlotInventory f={showInventory} slot={'Accesories1'}/>
                <SlotInventory f={showInventory} slot={'Accesories2'}/>
            </div>

        </section>

        <section className={itemListStyle.main}>
            <div className=''></div>
            <div className=''></div>
        </section>
    </div>
  )
}
