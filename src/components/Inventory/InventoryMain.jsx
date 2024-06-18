import React, { useState } from 'react';
import { useEffect } from 'react';

import { SlotEmpty } from './SlotEmpty';
import { SlotEquiped } from './SlotEquiped';
import { ItemList } from './ItemList';
import backgrounds from '../../../backend/data/backgrounds';
import colors from '../../../backend/data/tailwindColors';
import player from '../../../backend/data/player';
import './InventoryMain.css'
import { Link } from 'react-router-dom';

export const InventoryMain = () => {
  const [inventory,setInventory] = useState(false);
  const [filter,setFilter] = useState('Arma');
  const [PlayerInfo,showPlayerInfo] = useState(false);

  function showInventory(slot){
    setFilter(slot);
    setInventory(!inventory);
  }

  function obtainExpPercent(){
    let total = player.experience.nextLvl;
    let actual = player.experience.actual;
    let result = 0;

    /*
      Ejemplo de Formula:
      100%   ->  180   
       ? %    ->  90  
    
         90 * 100        9000
      -------------- =  ------ = 50 %
            180           180
    */
    result = (actual * 100)/ total
    return result

  }

  let styleMain = 'size-full grid grid-rows-2 rounded-lg overflow-hidden';

  let topSide = {
    main     : 'w-full grid grid-rows-5 z-20 ',
    imageBox : 'w-full relative h-full flex justify-between row-span-3 shadow-none',
    image    : 'w-full h-full object-contain',
    statsBox : 'w-full flex flex-col border-t-2 h-full row-span-2',
    lvlBox   : 'text-white flex flex-col gap-2 px-8 pt-1',
    lvlBoxTxt: 'w-full justify-center font-nunito text-lg flex gap-2',
    lvlBarOut: 'w-full h-3 p-0.5 flex items-center rounded-full bar-out',
    lvlBarIn : 'h-full rounded-full bar-in animate-pulse',
    leftArrow: 'z-90 absolute -left-3 w-20 h-20 p-4 self-center left-arrow ',
    rightArrow:'z-90 absolute right-4 w-20 h-20 p-4 self-center right-arrow ',
    playerInfo: 'w-full h-full row-span-3 grid grid-cols-2 justify-items-end aling-items-end pl-16 py-5 player-info',
    modListItem:'flex w-48 h-8 justify-between px-5',
    menuBtn : 'border border-black w-11/12 self-center rounded text-lg text-white text-center back-menu_btn'

  }

  PlayerInfo ? topSide.leftArrow += 'stroke-white' : topSide.leftArrow += 'stroke-transparent'
  PlayerInfo ? topSide.rightArrow += 'stroke-transparent' : topSide.rightArrow += 'stroke-white'

  let atributes = {
    main    : 'w-full font-nunito py-4 px-3 grid grid-cols-2 justify-items-center',
    box     : 'flex w-full justify-between px-2 grid grid-cols-3 w-11/12',
    titles  : 'text-white font-bold w-full pl-3',
    values  : 'font-fira text-gray-400 w-full text-end',
    values2 : 'text-green-600 animate-pulse duration-100 font-bold w-full text-center'

  }

  let bottomSide = {
    main : 'w-full grid grid-cols-2 grid-rows-3 p-2 pt-4 gap-1 z-20',
  }

  let inventoryStyle = {
    main : ''
  }

  if(inventory){
    inventoryStyle.main += ' flex';
    topSide.main += ' hidden';
    bottomSide.main += ' hidden';
    //styleMain = ''
  } else {
    inventoryStyle.main += ' hidden';
    topSide.main += '';
    bottomSide.main += '';
    //styleMain = ''
  }

  
  if (inventory) {
    return (
      <section className={inventoryStyle.main}>
        <ItemList
          back={showInventory}
          filter={filter}
        />
      </section>
    )
  } else {
    return (
      <section className={styleMain}>

        <article className={topSide.main}>
          {
            PlayerInfo == false ?
              <picture className={topSide.imageBox}>
                <svg
                  onClick={e => { showPlayerInfo(!PlayerInfo) }}
                  fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={topSide.leftArrow}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>


                <img
                  className={topSide.image}
                  src={player.img}
                  alt="Player_img"
                />
                <svg
                  onClick={e => { showPlayerInfo(!PlayerInfo) }}
                  fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={topSide.rightArrow}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
              </picture> :
              
              <ul className={topSide.playerInfo}>
                <svg
                  onClick={e => { showPlayerInfo(!PlayerInfo) }}
                  fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={topSide.leftArrow}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
                {player.mods.map(mod => {
                  let color = ''
                  switch (mod.name) {
                    case 'AcuaticKiller':
                      color = colors.races.acuatic;
                      break;
                    case 'BeastKiller':
                      color = colors.races.beast;
                      break;
                    case 'DragonKiller':
                      color = colors.races.dragon;
                      break;
                    case 'ElementKiller':
                      color = colors.races.element;
                      break;
                    case 'FlyingKiller':
                      color = colors.races.flying;
                      break;
                    case 'InsectKiller':
                      color = colors.races.insect;
                      break;
                    case 'HumanKiller':
                      color = colors.races.humanoid;
                      break;
                    default:
                      // Undead
                      color = colors.races.undead;
                      break;
                  }

                  return (
                    <li
                      className={topSide.modListItem}
                      key={mod.name}
                    >
                      <h5 className={color}>
                        {mod.name}
                      </h5>

                      {
                        mod.value != 0 ?
                          <h5 className='text-green-500'>
                            +{mod.value}%
                          </h5>
                          :
                          <h5 className='text-red-950'>
                            {mod.value}
                          </h5>
                      }

                    </li>
                  )
                })}
              </ul>
          }


          <div className={topSide.statsBox}>

            {/* Nivel */}<div className={topSide.lvlBox}>
              <span className={topSide.lvlBoxTxt}>
                <h4>Nivel</h4>
                <h4>{player.lvl}</h4>
              </span>

              <div className={topSide.lvlBarOut}>
                <div
                  style={{ width: `${obtainExpPercent()}%` }}
                  className={topSide.lvlBarIn}>
                </div>
              </div>
            </div>

            {/* Atributos */}<ul className={atributes.main}>{
              player.atributes.map(element => {
                return (
                  <li
                    className={atributes.box}
                    key={element.name}>
                    <h5
                      className={atributes.titles}>
                      {element.name}
                    </h5>
                    <h5
                      className={atributes.values}>
                      {element.values.actual}
                    </h5>
                    <h5
                      className={atributes.values2}>
                      {(element.values.actual - element.values.base)} +
                    </h5>
                  </li>
                )
              })
            }</ul>


              <Link to={"/menu"} className={topSide.menuBtn}>
                Volver al Menu
              </Link>

          </div>

        </article>

        <ul className={bottomSide.main}>{
          player.equipment.map(equipment => {
            if (equipment.value != undefined) {
              return (
                <SlotEquiped
                  showInventory={showInventory}
                  key={equipment.name}
                  item={equipment.value}
                  name={equipment.name}
                />
              )
            } else {
              return (
                <SlotEmpty
                  click={showInventory}
                  key={equipment.name}
                  name={equipment.name}
                />
              )
            }
          })
        }</ul>
      </section>
    )
  }

}
