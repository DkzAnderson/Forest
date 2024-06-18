import React, { useEffect } from 'react'
import { useState } from 'react';
import combat from '../../../backend/data/combatFunctions';
import player from '../../../backend/data/player';
import Enemies from '../../../backend/data/npc';
import { Link } from 'react-router-dom';

export const CombatZone = () => {
    const random = (min,max)=>{
        return Math.floor(Math.random() * (max - min+1) + min)
    }
    const [turns,setTurns] = useState(1);
    const [enemy,setEnemy] = useState(Enemies[0]);

    let styles = {
        main: 'relative w-full h-[95%] flex-col flex',
        // top
        turns: 'absolute top-2 right-2 text-xl font-bold border px-5 rounded bg-gradient-to-br from-transparent to-black text-sky-300',
        top: 'z-10 grid h-3/5 grid-cols-2 place-items-center w-full',
        content: {
            main: 'z-10 w-full h-full flex flex-col py-8 items-center justify-between',
            image: 'size-full object-contain',
            imageBox: 'size-[70%] px-2 py-3 shadow-none bg-transparent',
            nameBox: 'w-full h-20 flex items-center justify-center battlefield_names',
            name: 'font-metal text-2xl text-center text-yellow-600',
        },
        bars: {
            main: 'flex w-full gap-2 text-white text-sm font-fira',
            container: 'flex flex-col w-full px-2 gap-1',
            out: 'relative flex items-center px-0.5 z-10 h-6 bg-black rounded-full border-1 border-black',
            inner: 'w-full h-5/6 z-20 rounded-full duration-300 ',
            txt: 'absolute flex w-full justify-center z-30'
        },
        colorBars: {
            // se inicializan aqui y se modifican segun su valor en 
            // la funcion de setColorBars
            playerHp: '',
            playerMp: '',
            enemyHp: '',
            enemyMp: ''
        },
        // bottom
        bottom: 'w-full flex flex-col h-2/5 battlefield_menu z-10 rounded-b-lg',
        container: 'w-full font-nunito text-white h-full grid grid-cols-2 gap-1 p-1',
        buttons: 'flex text-xl cursor-pointer duration-300 active:border-red-400 active:text-red-400 hover:tracking-widest items-center justify-center rounded-lg border-2 border-gray-400 battlefield_menu-btn',
        backButton: 'border text-white text-xl py-1 w-11/12 rounded mb-1 self-center battlefield_menu-btn'
    }

    let descriptionStyles = {
        main  : 'p-2 absolute top-10 z-40 flex flex-col w-11/12 min-h-64 rounded battlefield_description-window border',
        title : 'text-center text-xl font-bold border-b py-2 text-white',
        txt   : 'text-zinc-400',
        span  : 'flex w-full justify-between border-t py-2',
        cost : ' font-bold text-pink-400',
        dmg: 'text-teal-500 font-bold',
        boxs : 'w-full ',
        boxInfo: 'h-full w-full min-h-32 py-2 overflow-auto',
        closeBtn : 'w-9 h-9 absolute z-50 stroke-white right-1 top-1'
    }

    const skillsListStyles = {
        main: 'w-full font-nunito text-white h-full flex flex-col gap-1 p-1',
        items : 'w-full p-1 h-24 gap-2 flex border rounded-lg text-black z-10 battlefield_menu-btn',
        title : 'text-lg text-white',
        titleBox : 'flex w-full justify-between',
        descriptionBox : 'z-10 relative flex flex-col w-full justify-between',
        description: 'text-sm w-full text-zinc-400',
        icon : 'absolute top-0 right-0 w-9 h-9 z-30 stroke-white',
        dmg : 'text-teal-500 font-bold',
        cost : 'font-bold text-pink-400',
        span: 'flex w-full justify-between text-sm',
        image : 'border w-28 h-full',
    }

    const [interfaz,setInterfaz] = useState('menu'); // para cambiar la interfaz del menu
    const [bars,setBars] = useState(false); //para cambiar el color de las barras
    const [description,setDecription] = useState ({});
    const [renderDescription,setRenderDescription] = useState(false);

    function nextTurn(){
        let lastTurn = turns;
        lastTurn++
        setTurns(lastTurn);
    }
    // funcion para buscar y retornar un valor de porcentaje segun el total
    function setPercentBarProgress(search, total) {

        /*  Formula para calcular Porcentaje actual
                100% ->  350
                 ? % ->  175

                 (175 * 100)    
                  ---------  = 
                     350
        */

        let result = ((search * 100) / total).toFixed(0);
        return result
    }
    // rellena las barras de vida y hp segun su valor actual
    function setColorBars() {
        // valores porcentuales para pintar las barras
        let valuesToBarsColor = {
            hpPlayer: setPercentBarProgress(player.atributes[4].values.actual, player.atributes[4].values.total),
            mpPlayer: setPercentBarProgress(player.atributes[5].values.actual, player.atributes[5].values.total),
            hpEnemy: setPercentBarProgress(enemy.atributes[4].values.actual, enemy.atributes[4].values.total),
            mpEnemy: setPercentBarProgress(enemy.atributes[5].values.actual, enemy.atributes[5].values.total)
        }
        // barras del jugador
        if (valuesToBarsColor.hpPlayer > 70) {
            styles.colorBars.playerHp = 'bg-green-700'
        } else if (valuesToBarsColor.hpPlayer > 40) {
            styles.colorBars.playerHp = 'bg-yellow-600'
        } else if (valuesToBarsColor.hpPlayer > 0) {
            styles.colorBars.playerHp = 'bg-red-600'
        }

        if (valuesToBarsColor.mpPlayer > 70) {
            styles.colorBars.playerMp = 'bg-blue-600'
        } else if (valuesToBarsColor.mpPlayer > 40) {
            styles.colorBars.playerMp = 'bg-purple-600'
        } else if (valuesToBarsColor.mpPlayer > 0) {
            styles.colorBars.playerMp = 'bg-red-600'
        }
        // barras del enemigo
        if (valuesToBarsColor.hpEnemy > 70) {
            styles.colorBars.enemyHp = 'bg-green-700'
        } else if (valuesToBarsColor.hpEnemy > 40) {
            styles.colorBars.enemyHp = 'bg-yellow-600'
        } else if (valuesToBarsColor.hpEnemy > 0) {
            styles.colorBars.enemyHp = 'bg-red-600'
        }

        if (valuesToBarsColor.mpEnemy > 70) {
            styles.colorBars.enemyMp = 'bg-blue-600'
        } else if (valuesToBarsColor.mpEnemy > 40) {
            styles.colorBars.enemyMp = 'bg-purple-600'
        } else if (valuesToBarsColor.mpEnemy > 0) {
            styles.colorBars.enemyMp = 'bg-red-600'
        }

    }

    function Attack() {
        combat.PhysicDmgNormal(player, enemy) //player -> enemigo
        combat.PhysicDmgNormal(enemy, player) // enemigo -> player
        setBars(true);
        setBars(!bars);
        nextTurn();
    }

    function Defend() {
        combat.Defend(player);
        combat.PhysicDmgNormal(enemy, player);
        player.atributes[2].values.actual = player.atributes[2].values.base
        player.atributes[3].values.actual = player.atributes[3].values.base
        setBars(true);
        setBars(!bars);
    }

    function ShowObjects(e){
        console.log(e)
        setInterfaz('objects')
    }

    function scape(e){
        console.log(e)
        setInterfaz('objects')
    }

    function ShowSkills(e){
        console.log(e)
        setInterfaz('objects')
    }

    function DescriptionArticle (skill=''){
        let type = ''
        if(skill.type == 'ofensive'){
            type = 'Daño : '
        } else {
            type = 'Sanación : '
        }

        if(renderDescription == true ){
            return (
                <article className={descriptionStyles.main}>

                    <svg onClick={e=>{setRenderDescription(false)}}
                        fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className={descriptionStyles.closeBtn}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>


                    <div className={descriptionStyles.boxs}>
                        <h2 className={descriptionStyles.title}>
                            {description.name}
                        </h2>
                    </div>

                    <div className={descriptionStyles.boxInfo}>
                        <p className={descriptionStyles.txt}>
                            {description.descriptions.long}
                        </p>
                    </div>

                    <div className={descriptionStyles.boxs}>
                        <span className={descriptionStyles.span}>
                            <h5 className={descriptionStyles.cost}>
                                Coste : {description.cost}
                            </h5>

                            <h5 className={descriptionStyles.dmg}>
                                {type + description.dmg}
                            </h5>
                        </span>
                    </div>

                </article>
            )
        }
    }

    function ShowLongDescription (skill) {
        setDecription(skill);
        setRenderDescription(true);
    }

    function BackButton () {
        // FALTA
        // Evaluar desde donde se 
        // esta usando el boton para 
        // tener una mejor especificidad 
        // de hacia donde nos devolvera
        setInterfaz('menu');
    }

    useEffect(()=>{
         setEnemy(Enemies[random(0,Enemies.length-1)])
    },[])


    // condicionales para el renderizado
    setColorBars();
    if(bars == true) setColorBars();


    if (interfaz == 'menu') {
        // menu de combate
        return (
            <section className={styles.main}>

                <section className={styles.top}>
                    <span className={styles.turns}>
                        {'Turno ' + turns}
                    </span>

                    <section className={styles.content.main}>
                        <picture className={styles.content.imageBox}>
                            <img className={styles.content.image} style={{ transform: 'scaleX(-1)' }}
                                src={player.img}
                                alt={player.name}
                            />
                        </picture>

                        <span className={styles.content.nameBox}>
                            <h2 className={styles.content.name}>
                                {player.name}
                            </h2>
                        </span>

                        <div className={styles.bars.main}>
                            <span className={styles.bars.container}>
                                <div className={styles.bars.out}>
                                    <div className={styles.bars.inner + styles.colorBars.playerHp}
                                        style={{ width: `${setPercentBarProgress(player.atributes[4].values.actual, player.atributes[4].values.total)}%` }}>
                                    </div>
                                    <h5 className={styles.bars.txt}>
                                        {player.atributes[4].values.actual + '/' + player.atributes[4].values.total}
                                    </h5>
                                </div>

                                <div className={styles.bars.out}>
                                    <div className={styles.bars.inner + styles.colorBars.playerMp}
                                        style={{ width: `${setPercentBarProgress(player.atributes[5].values.actual, player.atributes[5].values.total)}%` }}>
                                    </div>

                                    <h5 className={styles.bars.txt}>
                                        {player.atributes[5].values.actual + ' / ' + player.atributes[5].values.total}
                                    </h5>
                                </div>
                            </span>
                        </div>
                    </section>

                    <section className={styles.content.main}>
                        <picture className={styles.content.imageBox}>
                            <img className={styles.content.image}
                                src={enemy.image}
                                alt={enemy.name}
                            />
                        </picture>

                        <span className={styles.content.nameBox}>
                            <h2 className={styles.content.name}>
                                {enemy.name}
                            </h2>
                        </span>

                        <div className={styles.bars.main}>
                            <span className={styles.bars.container}>
                                <div className={styles.bars.out}>
                                    <div className={styles.bars.inner + styles.colorBars.enemyHp}
                                        style={{ width: `${setPercentBarProgress(enemy.atributes[4].values.actual, enemy.atributes[4].values.total)}%` }}>
                                    </div>

                                    <h5 className={styles.bars.txt}>
                                        {setPercentBarProgress(enemy.atributes[4].values.actual, enemy.atributes[4].values.total) + '%'}
                                    </h5>
                                </div>

                                <div className={styles.bars.out}>
                                    <div className={styles.bars.inner + styles.colorBars.enemyMp}
                                        style={{ width: `${setPercentBarProgress(enemy.atributes[5].values.actual, enemy.atributes[5].values.total)}%` }}>
                                    </div>

                                    <h5 className={styles.bars.txt}>
                                        {setPercentBarProgress(enemy.atributes[5].values.actual, enemy.atributes[5].values.total) + '%'}
                                    </h5>
                                </div>
                            </span>
                        </div>
                    </section>

                </section>

                <section className={styles.bottom}>
                    <ul className={styles.container}>
                        <li
                            onClick={Attack}
                            className={styles.buttons + ' col-span-2'}>
                            ATACAR
                        </li>

                        <li
                            onClick={Defend}
                            className={styles.buttons}>
                            DEFENDER
                        </li>

                        <li
                            // al finalizar el touch onTouchEnd={}
                            onClick={e => { ShowSkills(e) }}
                            className={styles.buttons}>
                            HABILIDADES
                        </li>

                        <li
                            onClick={e => { ShowObjects(e) }}
                            className={styles.buttons}>
                            OBJETOS
                        </li>

                        <li
                            onClick={e=> {scape(e)}}
                            className={styles.buttons}>
                            HUIR
                        </li>
                    </ul>
                </section>

            </section>
        )
    } else if (interfaz == 'skills') {
        // lista de habilidades
        return (
            <section className={styles.main}>

                <section className={styles.top}>
                    <span className={styles.turns}>
                        {'Turno ' + turns}
                    </span>

                    <section className={styles.content.main}>
                        <picture className={styles.content.imageBox}>
                            <img className={styles.content.image} style={{ transform: 'scaleX(-1)' }}
                                src={player.img}
                                alt={player.name}
                            />
                        </picture>

                        <span className={styles.content.nameBox}>
                            <h2 className={styles.content.name}>
                                {player.name}
                            </h2>
                        </span>

                        <div className={styles.bars.main}>
                            <span className={styles.bars.container}>
                                <div className={styles.bars.out}>
                                    <div className={styles.bars.inner + styles.colorBars.playerHp}
                                        style={{ width: `${setPercentBarProgress(player.atributes[4].values.actual, player.atributes[4].values.total)}%` }}>
                                    </div>
                                    <h5 className={styles.bars.txt}>
                                        {player.atributes[4].values.actual + '/' + player.atributes[4].values.total}
                                    </h5>
                                </div>

                                <div className={styles.bars.out}>
                                    <div className={styles.bars.inner + styles.colorBars.playerMp}
                                        style={{ width: `${setPercentBarProgress(player.atributes[5].values.actual, player.atributes[5].values.total)}%` }}>
                                    </div>

                                    <h5 className={styles.bars.txt}>
                                        {player.atributes[5].values.actual + ' / ' + player.atributes[5].values.total}
                                    </h5>
                                </div>
                            </span>
                        </div>
                    </section>

                    <section className={styles.content.main}>
                        <picture className={styles.content.imageBox}>
                            <img className={styles.content.image}
                                src={enemy.image}
                                alt={enemy.name}
                            />
                        </picture>

                        <span className={styles.content.nameBox}>
                            <h2 className={styles.content.name}>
                                {enemy.name}
                            </h2>
                        </span>

                        <div className={styles.bars.main}>
                            <span className={styles.bars.container}>
                                <div className={styles.bars.out}>
                                    <div className={styles.bars.inner + styles.colorBars.enemyHp}
                                        style={{ width: `${setPercentBarProgress(enemy.atributes[4].values.actual, enemy.atributes[4].values.total)}%` }}>
                                    </div>

                                    <h5 className={styles.bars.txt}>
                                        {setPercentBarProgress(enemy.atributes[4].values.actual, enemy.atributes[4].values.total) + '%'}
                                    </h5>
                                </div>

                                <div className={styles.bars.out}>
                                    <div className={styles.bars.inner + styles.colorBars.enemyMp}
                                        style={{ width: `${setPercentBarProgress(enemy.atributes[5].values.actual, enemy.atributes[5].values.total)}%` }}>
                                    </div>

                                    <h5 className={styles.bars.txt}>
                                        {setPercentBarProgress(enemy.atributes[5].values.actual, enemy.atributes[5].values.total) + '%'}
                                    </h5>
                                </div>
                            </span>
                        </div>
                    </section>

                </section>

                <section className={styles.bottom}>
                    <ul className={skillsListStyles.main}>
                        {
                            player.skills.map(skill => {
                                let type = skill.type == 'daño' ? 'Daño' : 'Sanación'

                                return (
                                    <li
                                        key={skill.name}
                                        className={skillsListStyles.items}
                                    >
                                        <img
                                            className={skillsListStyles.image}
                                            src={skill.image}
                                            alt={skill.name + '_img'}
                                        />

                                        <div className={skillsListStyles.descriptionBox}>

                                            <h2 className={skillsListStyles.title}>
                                                {skill.name}
                                            </h2>


                                            <svg onClick={e => { ShowLongDescription(skill) }}
                                                fill="none" viewBox="0 0 24 24" strokeWidth={0.7} className={skillsListStyles.icon}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>

                                            <p className={skillsListStyles.description}>
                                                {skill.descriptions.short}
                                            </p>

                                            <span className={skillsListStyles.span}>
                                                <h4 className={skillsListStyles.cost}>
                                                    coste {skill.cost}
                                                </h4>

                                                <h5 className={skillsListStyles.dmg}>
                                                    {type} {skill.dmg}
                                                </h5>
                                            </span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <button
                        onClick={e => { BackButton() }}
                        className={styles.backButton}>
                        Volver
                    </button>
                </section>
            </section>
        )
    } else {
        // lista de objetos
        return(
            <section className='size-full flex items-center justify-center'>
                <div className='flex flex-col text-center rounded-lg bg-black p-4 gap-10 justify-center items-center'>
                <h2 className='text-2xl text-red-600'>
                    Función aun en desarrollo porfavor vuelva.
                </h2>
                <Link to={'/menu'} className='text-white rounded py-2 px-6 border bg-green-700'>
                    Volver al menu
                </Link>
                </div>

            </section>
        )
    }
}
