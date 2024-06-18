import React, { useState } from 'react'
import equipableItems from '../../../backend/data/equipableItems';
import player from '../../../backend/data/player.js'
import './ItemList.css'

export const ItemList = ({back,filter}) => {

  const [itemInfo,SetItemInfo] = useState(false);
  
  let styles = {
    main : 'size-full flex flex-col all rounded overflow-hidden',
    list : 'overflow-auto max-h-[460px] flex flex-col w-full gap-2 p-2 z-20 bottomSide list',
    itemList: {
      main : 'grid grid-cols-4 text-white w-full p-1 h-32 items-center border rounded-lg item-list',
      image : 'size-full object-contain p-2 rounded shadow-none',
      infoBox: 'flex flex-col col-span-3 h-11/12 w-full pl-4 text-sm',
      statsBox : 'grid grid-cols-2',
      imageBox : 'h-28 rounded p-1 border-2 shadow-none'
    },
    info : {
      main : 'size-full min-h-[47.5vh] z-20 items-center justify-between flex flex-col pb-4 gap-2 topSide',
      emptyTxt: 'text-2xl h-80 items-center text-center flex font-bold text-white',
      top : 'w-full h-2/5 flex gap-2 items-center p-2 border-b-2',
      img : 'w-full h-full',
      imgBox: 'p-4 w-32 h-32 object-contain border-2 rounded-lg bg-transparent',
      title : 'w-10/12 h-full flex items-center justify-center',
      statBox: 'grid grid-cols-2 w-4/5 gap-x-2 ',
      statTxt: 'text-white text-lg px-2 flex w-full justify-between',
      statValue: 'text-green-500',
      modBox : 'grid grid-cols-2 w-4/5 gap-x-2 ',
      modLi : 'text-lg text-white flex w-full justify-between',
      modTxt:'',
      modValue: 'text-green-500 duration-300 animate-pulse',
      equipBtn: 'w-full bg-green-500 py-2 text-xl rounded font-bold',
      backBtn : 'z-20 w-full bg-red-500 border-white rounded text-xl font-bold active:bg-green-500'
    },
    btnsBox: 'w-full flex justify-between px-2 gap-4',
  }

  itemInfo.quality === 'Legendario' ? styles.info.imgBox += ' border-orange-500 shadow-lg shadow-orange-500' : '';
  itemInfo.quality === 'Raro' ? styles.info.imgBox += ' border-cyan-300 shadow-lg shadow-cyan-300' : '';  
  itemInfo.quality === 'normal' ? styles.info.imgBox += 'border-white shadow-none' : ''
  const raceTxtColors = {
    acuatic : 'text-sky-400',
    beast   : 'text-yellow-900',
    dragon  : 'text-red-700',
    element : 'text-rose-800',
    flying  : 'text-emerald-400',
    insect  : 'text-green-700',
    humanoid: 'text-pink-400',
    undead  : 'text-fuchsia-600',
  }

  const qualityTxtColors ={
    rare: ' text-cyan-300 animate-pulse',
    legendary: ' text-orange-500 animate-pulse'
  }

  function EquipItem (item,slot){
    // Envia el item a equipar al jugador
    player.EquipItem(item,slot);
    back();
  }

  function UnEquipItem (slot){
    // revisa cual slot fue elegido
    player.equipment.forEach(element => {
        if(element.name == slot){
          // resta los valores del objeto equipado
          player.UnEquipItem(element.value);
          // elimina el item del slot
          element.value = undefined;
        }
    });
    back();
  }

  function showItemInfo (item,filter='') {
    // muestra la info detallada del item
    SetItemInfo(item);
  }

  const UnEquipBtn = (filter)=>{
    switch (filter) {
      case 'Armadura':
        if(player.equipment[2].value != undefined){
          return (
            <button
            className={styles.info.equipBtn}
            onClick={e=>{UnEquipItem(filter)}}
          >
            Desequipar
          </button>
          )
        }
        break;
      case 'Arma':
        if(player.equipment[0].value != undefined){
          return(
            <button
            className={styles.info.equipBtn}
            onClick={e=>{UnEquipItem(filter)}}
          >
            Desequipar
          </button>
          )
        }
        break;
      case 'Accesorio 1':
        if(player.equipment[3].value != undefined){
          return(
            <button
            className={styles.info.equipBtn}
            onClick={e=>{UnEquipItem(filter)}}
          >
            Desequipar
          </button>
          )
        }
        break;
      case 'Accesorio 2':
        if(player.equipment[4].value != undefined){
          return(
            <button
            className={styles.info.equipBtn}
            onClick={e=>{UnEquipItem(filter)}}
          >
            Desequipar
          </button>
          )
        }
        break;
      case 'Casco':
        if(player.equipment[1].value != undefined){
          return(
            <button
            className={styles.info.equipBtn}
            onClick={e=>{UnEquipItem(filter)}}
          >
            Desequipar
          </button>
          )
        }
        break;
      default:
        break;
    }
  }

  if (itemInfo == false) {
    return (
      <section className={styles.main}>

        <article className={styles.info.main}>
          <h4 className={styles.info.emptyTxt}>
            Seleccione un item para ver
            su información completa.
          </h4>

          <div className={styles.btnsBox}>
            <button
              className={styles.info.backBtn + ' py-2'}
              onClick={back}
            >
              Volver
            </button>

            {UnEquipBtn(filter)}

          </div>

        </article>

        <ul className={styles.list}>
          {equipableItems.map(item => {
            let borde = ''
            switch (item.quality) {
              case 'Legendario':
                borde = ` border-orange-500`
                break;
              case 'Raro':
                borde = ` border-cyan-300`
                break;
              default:
                borde = ''
                break;
            }
            if (item.type == filter) {
              return (
                <li
                  className={styles.itemList.main}
                  key={item.id}
                  onClick={e => {
                    showItemInfo(item, filter);
                  }}
                >
                  <picture className={`${styles.itemList.imageBox} ${borde}`}>
                    <img
                      className={styles.itemList.image}
                      src={item.img}
                      alt={item.name + '_poster'}
                    />
                  </picture>

                  <div className={styles.itemList.infoBox}>
                    {
                      item.quality == 'Legendario' ?
                        <h5 className={styles.itemList.title + qualityTxtColors.legendary}>
                          {item.name}
                        </h5>
                        : item.quality == 'Raro' ?
                          <h5 className={styles.itemList.title + qualityTxtColors.rare}>
                            {item.name}
                          </h5>
                          :
                          <h5 className={styles.itemList.title}>
                            {item.name}
                          </h5>
                    }

                    {
                      item.mods != undefined ?
                        <h5>
                          Modificador de daño
                        </h5>
                        :
                        <h5>
                          Sin modificadores
                        </h5>
                    }
                    <ul className={styles.itemList.statsBox}>
                      {item.atributes.map(atribute => {
                        return (
                          <li
                            className='flex w-4/5 justify-between'
                            key={atribute.name}>
                            <h5>
                              {atribute.name}
                            </h5>
                            {
                              atribute.value != 0 ?
                                <h5 className='text-green-500'>
                                  {atribute.value}
                                </h5> :
                                <h5 className='text-red-950'>
                                  {atribute.value}
                                </h5>
                            }
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                </li>
              )
            }else if (filter == 'Accesorio 1' || filter == 'Accesorio 2') {
              if (item.type == 'Accesorio') {
                return (
                  <li
                    className={styles.itemList.main}
                    key={item.id}
                    onClick={e => {
                      showItemInfo(item, filter);
                    }}
                  >
                    <picture className={`${styles.itemList.imageBox} ${borde}`}>
                      <img
                        className={styles.itemList.image}
                        src={item.img}
                        alt={item.name + '_poster'}
                      />
                    </picture>

                    <div className={styles.itemList.infoBox}>
                      {
                        item.quality == 'Legendario' ?
                          <h5 className={styles.itemList.title + qualityTxtColors.legendary}>
                            {item.name}
                          </h5>
                          : item.quality == 'Raro' ?
                            <h5 className={styles.itemList.title + qualityTxtColors.rare}>
                              {item.name}
                            </h5>
                            :
                            <h5 className={styles.itemList.title}>
                              {item.name}
                            </h5>
                      }

                      {
                        item.mods != undefined ?
                          <h5>
                            Modificador de daño
                          </h5>
                          :
                          <h5>
                            Sin modificadores
                          </h5>
                      }
                      <ul className={styles.itemList.statsBox}>
                        {item.atributes.map(atribute => {
                          return (
                            <li
                              className='flex w-4/5 justify-between'
                              key={atribute.name}>
                              <h5>
                                {atribute.name}
                              </h5>
                              {
                                atribute.value != 0 ?
                                  <h5 className='text-green-500'>
                                    {atribute.value}
                                  </h5> :
                                  <h5 className='text-red-950'>
                                    {atribute.value}
                                  </h5>
                              }
                            </li>
                          )
                        })}
                      </ul>
                    </div>

                  </li>
                )
              }
            }
          })}
        </ul>
      </section>
    )
  } else {
    return (
      <section className={styles.main}>
        <article className={styles.info.main}>
          <div className={styles.info.top}>
            <picture className={styles.info.imgBox}>
              <img
                className={styles.info.img}
                src={itemInfo.img}
                alt={itemInfo.name + '_poster'}
              />
            </picture>

            <span className={styles.info.title}>
              {
                itemInfo.quality == 'Raro' ?
                  <h3 className={'text-xl animate-pulse ' + qualityTxtColors.rare}>
                    {itemInfo.name}
                  </h3>
                  : ''
              }
              {
                itemInfo.quality == 'Legendario' ?
                  <h3 className={'text-xl animate-pulse ' + qualityTxtColors.legendary}>
                    {itemInfo.name}
                  </h3>
                  : ''
              }
              {
                itemInfo.quality == 'normal' ?
                  <h3 className='text-xl text-white'>
                    {itemInfo.name}
                  </h3>
                  : ''
              }
            </span>

          </div>

          <ul className={styles.info.statBox}>
            {
              itemInfo.atributes.map(atribute => {
                return (
                  <li
                    className={styles.info.statTxt}
                    key={atribute.name}>
                    <h5>
                      {atribute.name}
                    </h5>

                    {
                      atribute.value != 0 ?
                        <h5
                          className={styles.info.statValue}>
                          {'+ ' + atribute.value}
                        </h5>
                        : <h5 className='text-red-950'>
                          {atribute.value}
                        </h5>
                    }

                  </li>
                )
              })
            }
          </ul>

          <ul className={styles.info.modBox}>
            {
              itemInfo.mods != undefined ?
                itemInfo.mods.map(mod => {

                  switch (mod.name) {
                    case 'BeastKiller':
                      styles.modTxt = raceTxtColors.beast
                      break;
                    case 'DragonKiller':
                      styles.modTxt = raceTxtColors.dragon
                      break;
                    case 'ElementKiller':
                      styles.modTxt = raceTxtColors.element
                      break;
                    case 'FlyingKiller':
                      styles.modTxt = raceTxtColors.flying
                      break;
                    case 'HumanKiller':
                      styles.modTxt = raceTxtColors.humanoid
                      break;
                    case 'InsectKiller':
                      styles.modTxt = raceTxtColors.insect
                      break;
                    case 'UndeadKiller':
                      styles.modTxt = raceTxtColors.undead
                      break;

                    default:
                      styles.modTxt = raceTxtColors.acuatic
                      break;
                  }
                  return (
                    <li className={styles.info.modLi}
                      key={mod.name}
                    >
                      <h4 className={styles.modTxt}>
                        {mod.name}
                      </h4>

                      {mod.value != 0 ?
                        <h4 className={styles.info.modValue}>
                          {`+ ${mod.value}%`}
                        </h4>

                        : <h4 className='text-red-950'>
                          {mod.value}
                        </h4>
                      }
                    </li>
                  )
                })
                : ''
            }
          </ul>

          <div className={styles.btnsBox}>
            <button
              className={styles.info.backBtn}
              onClick={back}>
              Volver
            </button>

            <button
              className={styles.info.equipBtn}
              onClick={e => { EquipItem(itemInfo, filter) }}
            >
              Equipar
            </button>

          </div>
        </article>

        <ul className={styles.list}>
          {equipableItems.map(item => {
            let borde = ''
            switch (item.quality) {
              case 'Legendario':
                borde = ` border-orange-500`
                break;
              case 'Raro':
                borde = ` border-cyan-300`
                break;
              default:
                borde = ''
                break;
            }
            if (item.type == filter) {
              return (
                <li
                  className={styles.itemList.main}
                  key={item.id}
                  onClick={e => {
                    showItemInfo(item, filter);
                  }}
                >
                  <picture className={`${styles.itemList.imageBox} ${borde}`}>
                    <img
                      className={styles.itemList.image}
                      src={item.img}
                      alt={item.name + '_poster'}
                    />
                  </picture>

                  <div className={styles.itemList.infoBox}>
                    {
                      item.quality == 'Legendario' ?
                        <h5 className={styles.itemList.title + qualityTxtColors.legendary}>
                          {item.name}
                        </h5>
                        : item.quality == 'Raro' ?
                          <h5 className={styles.itemList.title + qualityTxtColors.rare}>
                            {item.name}
                          </h5>
                          :
                          <h5 className={styles.itemList.title}>
                            {item.name}
                          </h5>
                    }

                    {
                      item.mods != undefined ?
                        <h5>
                          Modificador de daño
                        </h5>
                        :
                        <h5>
                          Sin modificadores
                        </h5>
                    }
                    <ul className={styles.itemList.statsBox}>
                      {item.atributes.map(atribute => {
                        return (
                          <li
                            className='flex w-4/5 justify-between'
                            key={atribute.name}>
                            <h5>
                              {atribute.name}
                            </h5>
                            {
                              atribute.value != 0 ?
                                <h5 className='text-green-500'>
                                  {atribute.value}
                                </h5> :
                                <h5 className='text-red-950'>
                                  {atribute.value}
                                </h5>
                            }
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                </li>
              )
            }

            if (filter == 'Accesorio 1' || filter == 'Accesorio 2') {
              if (item.type == 'Accesorio') {
                return (
                  <li
                    className={styles.itemList.main}
                    key={item.id}
                    onClick={e => {
                      showItemInfo(item, filter);
                    }}
                  >
                    <picture className={`${styles.itemList.imageBox} ${borde}`}>
                      <img
                        className={styles.itemList.image}
                        src={item.img}
                        alt={item.name + '_poster'}
                      />
                    </picture>

                    <div className={styles.itemList.infoBox}>
                      {
                        item.quality == 'Legendario' ?
                          <h5 className={styles.itemList.title + qualityTxtColors.legendary}>
                            {item.name}
                          </h5>
                          : item.quality == 'Raro' ?
                            <h5 className={styles.itemList.title + qualityTxtColors.rare}>
                              {item.name}
                            </h5>
                            :
                            <h5 className={styles.itemList.title}>
                              {item.name}
                            </h5>
                      }

                      {
                        item.mods != undefined ?
                          <h5>
                            Modificador de daño
                          </h5>
                          :
                          <h5>
                            Sin modificadores
                          </h5>
                      }
                      <ul className={styles.itemList.statsBox}>
                        {item.atributes.map(atribute => {
                          return (
                            <li
                              className='flex w-4/5 justify-between'
                              key={atribute.name}>
                              <h5>
                                {atribute.name}
                              </h5>
                              {
                                atribute.value != 0 ?
                                  <h5 className='text-green-500'>
                                    {atribute.value}
                                  </h5> :
                                  <h5 className='text-red-950'>
                                    {atribute.value}
                                  </h5>
                              }
                            </li>
                          )
                        })}
                      </ul>
                    </div>

                  </li>
                )
              }
            }
          })}
        </ul>
      </section>
    )
  }

}
