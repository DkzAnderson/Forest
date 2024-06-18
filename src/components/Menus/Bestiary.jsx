import React, { useState } from 'react'
import Enemies from '../../../backend/data/npc'
import './Bestiary.css'
import { Link } from 'react-router-dom'


export const Bestiary = () => {
  const [npc,setNpc] = useState(5);

  const mainStyles = {
    background : 'absolute size-full object-cover z-0',
    main       : 'relative size-full flex flex-col all rounded-lg overflow-hidden',
    backButton : 'all w-full h-20  z-20 flex items-center justify-center text-white text-2xl'
  }

  let infoStyles = {
    main: 'z-10 h-3/5 w-full flex flex-col all justify-between pt-4 px-1',
    poster: 'size-[60%] object-contain',
    posterBox: 'w-4/5 h-3/5 sm:size-[340px] rounded-full self-center flex justify-center items-center',
    name : 'text-center text-2xl text-white',
    infoBox : 'w-full h-44 flex flex-col justify-between border-t',
    infoBoxDiv:'w-full px-2',
    skillList: 'grid grid-cols-2 gap-1 h-16 w-full px-4 justify-between justify-items-center',
    skillListItem:'text-sm text-gray-400 text-start sm:w-52 self-center',
    type : '',
    rarityBox: 'flex w-full justify-between text-white text-lg font-semibold',
    rarity: ''
  }

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

  const listStyles = {
    main :'relative h-72 w-full',
    content: 'size-full flex flex-col px-2 py-3 gap-1 overflow-auto all list',
    txt : 'px-2 py-2 h-11 border flex gap-2 duration-300 hover:tracking-widest cursor-pointer items-center text-lg text-white rounded list_items'
  }
    // color de textos de raza
  switch (Enemies[npc].type) {
    case 'Acuatico':
      infoStyles.type = raceTxtColors.acuatic
      break;
  
    case 'Bestia':
      infoStyles.type = raceTxtColors.beast
      break;

    case 'Dragon':
      infoStyles.type = raceTxtColors.dragon
      break;

    case 'Elemental':
      infoStyles.type = raceTxtColors.element
      break;

    case 'Volador':
      infoStyles.type = raceTxtColors.flying
      break;

    case 'Insecto':
      infoStyles.type = raceTxtColors.insect
      break;

    case 'No-muerto':
      infoStyles.type = raceTxtColors.undead
      break;

    default:
      // Humano
      infoStyles.type = raceTxtColors.humanoid
      break;
  }
    // color de textos de rareza
  switch (Enemies[npc].rarity) {
    case 'Raro':
      infoStyles.rarity = 'text-blue-500'
      break;
    case 'Jefe':
      infoStyles.rarity = 'text-amber-300'
      break;

    default:
      // normal
      infoStyles.rarity = 'text-zinc-300'
      break;
  }

  function ShowNpcDescription(id) {
     setNpc(id);
  }

  return (
    <section className={mainStyles.main}>

      <article className={infoStyles.main}>
        <picture className={infoStyles.posterBox}>
          <img
            className={infoStyles.poster}
            src={Enemies[npc].image}
            alt={Enemies[npc].name + '_poster'}
          />
        </picture>

        <div className={infoStyles.infoBox}>
          <h2 className={infoStyles.name}>
            {Enemies[npc].name}
          </h2>

          <div className={infoStyles.infoBoxDiv}>
            <span className={infoStyles.rarityBox}>
              <h5>
                Rareza:
              </h5>
              <h5 className={infoStyles.rarity}>
                {Enemies[npc].rarity}
              </h5>
            </span>

            <span className={infoStyles.rarityBox}>
              <h5>
                Raza:
              </h5>

              <h5 className={infoStyles.type}>
                {Enemies[npc].type}
              </h5>
            </span>
          </div>

          <h3 className='text-center text-white font-bold text-lg'>
            Habilidades
          </h3>

          <ul className={infoStyles.skillList}>
            {
              Enemies[npc].skills.map((skill,index) => {
                let i = index++;
                return (
                  <li 
                    key={skill.name}
                    className={infoStyles.skillListItem}>
                    {`${index}. ${skill.name}`}
                  </li>
                )
              })
            }
          </ul>

        </div>
      </article>
          
      {/* 
        Agregar un Sombreado a esta Lista para que no se
        vean tan mal los elementos cortados,
        un efecto de desvanecimiento
      */}
      <div className={listStyles.main}>
        <ul className={listStyles.content}>
          {Enemies.map(enemy => {
            let txtColor = 'text-yellow-500 font-bold'
            let border = ' border-yellow-500'

            if (enemy.name == Enemies[npc].name) {
              return (
                <li
                  onClick={e => { ShowNpcDescription(enemy.id) }}
                  className={listStyles.txt + border}
                  key={enemy.id}
                >
                  <div className='icon_list'></div>
                  <h5 className={txtColor}>
                    {enemy.name}
                  </h5>
                </li>
              )
            } else {
              return (
                <li
                  onClick={e => { ShowNpcDescription(enemy.id) }}
                  className={listStyles.txt}
                  key={enemy.id}
                >
                  <div className='icon_list'></div>
                  <h5>
                    {enemy.name}
                  </h5>
                </li>
              )
            }

          })}
        </ul>
      </div>


      <div className={mainStyles.backButton}>
        <Link
          to={"/menu"}
          className='border text-center px-16 py-2 rounded btn'
        >
        Volver
        </Link>
      </div>
    </section>
  )
}
