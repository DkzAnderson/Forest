import React, { useEffect, useState } from 'react'
import backgroundL from '../../../backend/images/backgrounds/start_app.jpg'
import backgroundS from '../../../backend/images/backgrounds/menu_principal.png';

import player from '../../../backend/data/player';

import { ShowSavedFiles } from './ShowSavedFiles';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export const StartApp = () => {
    const navigate = useNavigate();
    let index = 0
    // evalua si existen perfiles guardados
    const [savedGames, setSavedGames] = useState('Empty');
    // usado para mostrar perfiles guardados.
    const [seeFiles, setSeeFiles] = useState(false);
    // evalua si existen perfiles existentes.
    const [newGame, setNewGame] = useState(false);
    // usado para enviar alertas en la interfaz.
    const [alert, setAlert] = useState('');
    // sobreescribe perfiles ya existentes;
    const [overWrite, setOverWrite] = useState(false);

    let styles = {
        main: 'w-full h-full relative font-metal ',
        bckgS: 'absolute hidden sm:flex w-full h-full object-cover z-0 top-0 left-0',
        bckgL: 'absolute sm:hidden w-full h-full object-cover z-0 top-0 left-0',
        content: 'z-20 w-full h-full flex flex-col gap-20 border items-center justify-center ',
        options: 'z-20 w-10/12 h-32 p-2 flex flex-col rounded items-center justify-center',
        optionsTitle: 'text-white text-3xl cursor-pointer hover:text-yellow-700 hover:tracking-widest hover:scale-125 duration-300',
        title: 'z-20 font-metal text-white text-yellow-900 cursor-default',
        savedFiles: 'w-full h-full relative font-metal flex flex-col items-center justify-center'
    }

    let newGameStyles = {
        main: 'w-full h-full relative font-metal flex items-center justify-center',
        content: 'z-30 rounded-lg flex flex-col w-10/12 sm:w-96 items-center p-3 py-16 text-center',
        title: 'text-lime-500 cursor-default',
        form: 'flex flex-col gap-3 mt-2 items-center',
        btn: 'duration-500 sm:hover:scale-125 sm:hover:tracking-widest bg-lime-500 w-60 text-2xl font-nunito rounded-full font-bold px-5',
        btnOverWrite: 'duration-500 text-white sm:hover:scale-125 sm:hover:tracking-widest bg-red-500 w-60 text-2xl font-nunito rounded-full font-bold px-5',
        inputs: 'rounded-full font-nunito border text-xl focus:border-lime-500 outline-none text-yellow-600 text-center px-2 py-1 w-10/12 bg-transparent',
        alert: 'cursor-default text-red-500 text-center text-lg font-fira',
        alert2: 'text-red-500 font-fira text-lg',
        titleFontSize: '50px'
    }

    savedGames != 'Empty' ? newGameStyles.alert = 'hidden' : ''

    const savedFilesStyles = {
        main: 'w-full h-full relative z-20 gap-10 font-metal flex flex-col items-center justify-center',
        li: 'w-full py-2 text-center rounded text-2xl text-white hover:bg-gradient-to-t from-sky-600 to-blue-300 cursor-pointer hover:tracking-widest hover:text-yellow-700 duration-300',
        ul: 'w-[80%] sm:w-[500px] flex p-2 flex-col z-20 min-h-[400px] max-h-44 rounded overflow-auto scrol'
    }

    function LoadAllData() {
        // Cargar Informacion de la LocalStorage
        const infoLS = player.LoadAllData();
        setSavedGames(infoLS);
    }

    function LoadPlayerData(e) {

        // obetener el archivo seleccionado
        const fileSelected = e.target.attributes.name.value;

        // cargar archivo
        savedGames.forEach(element => {
            if (element.name == fileSelected) {
                player.LoadData(element);
            }
        });
        navigate("/menu");
        console.log(player);
    }

    function ShowFiles() {
        setSeeFiles(true);
    }

    function GetNewGameData(e) {
        e.preventDefault();
        const newPlayer = e.target.name.value;

        if (newPlayer.length <= 2) {
            setAlert('El nombre debe tener 3 o mas letras.');
        } else {
            /*
                Crear Nuevo Perfil 
                con el nombre actual
            */
            player.NewUser(newPlayer);

            if (overWrite) {
                console.log('1')
                // sobrescribir perfil existente.
                player.SaveDataOverWrite(newPlayer);
                navigate("/menu");
            } else if (overWrite == false) {
                if (player.SaveData() == false) {
                    setAlert(`Este perfil ya existe. ¿Quieres Eliminar el Perfil anterior y crear uno nuevo?`);
                } else {
                    player.SaveData();
                    navigate("/menu");
                }
            } else {
                console.log(3)
                player.SaveData();
                navigate("/menu");
            }

        }
    }

    useEffect(() => {
        LoadAllData();
    }, [])


    if (savedGames != 'Empty' && seeFiles == false && newGame == false) {
        return (
            <section className={styles.main}>
                <img
                    src={backgroundS}
                    alt='banckground'
                    className={styles.bckgS}
                />
                <img
                    src={backgroundL}
                    alt='background'
                    className={styles.bckgL}
                />

                <div className={styles.content}>
                    <h1 className={styles.title} style={{ fontSize: '90px' }}>
                        Forest
                    </h1>

                    <ul className={styles.options} style={{ background: '#0000004a' }}>
                        <li
                            className={styles.optionsTitle}
                            onClick={e => { ShowFiles() }}>
                            Continuar
                        </li>

                        <li
                            onClick={e => { setNewGame(true) }}
                            className={styles.optionsTitle}>
                            Nuevo Juego
                        </li>

                    </ul>
                </div>
            </section>
        )
    } else if (seeFiles == true) { // Juegos guardados
        return (
            <section className={savedFilesStyles.main}>

                <ul className={savedFilesStyles.ul} style={{ background: '#0000008a' }}>
                    {
                        savedGames.map(game => {
                            index++
                            return (
                                <li
                                    path={"/menu"}
                                    key={index}
                                    name={game.name}
                                    onClick={e => { LoadPlayerData(e) }}
                                    className={savedFilesStyles.li}

                                >{game.name}</li>
                            )
                        })
                    }
                </ul>

                <button
                    className={newGameStyles.btn + ' z-20'}
                    onClick={() => { setSeeFiles(false) }}
                >
                    Volver
                </button>

                <img
                    src={backgroundS}
                    alt='banckground'
                    className={styles.bckgS}
                />
                <img
                    src={backgroundL}
                    alt='background'
                    className={styles.bckgL}
                />

            </section>
        )
    } else if (newGame == true) { // Creación de perfil
        return (
            <section className={newGameStyles.main}>
                <img
                    src={backgroundS}
                    alt='banckground'
                    className={styles.bckgS}
                />
                <img
                    src={backgroundL}
                    alt='background'
                    className={styles.bckgL}
                />

                <div className={newGameStyles.content} style={{ background: '#000000bf' }}>
                    <h2 className={newGameStyles.title} style={{ fontSize: `${newGameStyles.titleFontSize}` }}>
                        Bienvenido a Forest !
                    </h2>


                    <form
                        className={newGameStyles.form}
                        onSubmit={e => { GetNewGameData(e) }}
                    >

                        <input
                            className={newGameStyles.inputs}
                            type="text"
                            placeholder='Nombre para el Perfil'
                            name='name'
                        />

                        <h5 className={newGameStyles.alert2}>
                            {
                                alert
                            }
                        </h5>

                        {
                            alert == '' ||
                                alert == 'El nombre debe tener 3 o mas letras.' ?
                                <button
                                    type='submit'
                                    className={newGameStyles.btn}>
                                    Continuar
                                </button> :
                                <button
                                    type='submit'
                                    className={newGameStyles.btnOverWrite}
                                    onClick={() => { setOverWrite(true) }}
                                >
                                    Sobrescribir
                                </button>
                        }

                        {
                            savedGames != 'Empty' ?
                                <button
                                    className={newGameStyles.btn}
                                    onClick={() => { setNewGame(false) }}
                                >
                                    Volver
                                </button> : ''
                        }



                        <h3 className={newGameStyles.alert}>
                            Con este nombre podras cargar tu partida luego.
                            <br />
                            Recuerdalo!
                        </h3>
                    </form>
                </div>

            </section>
        )
    } else if (newGame == false) { // Iniciar juego a un usuario ya existente
        return (
            <section className={styles.main}>
                <img
                    src={backgroundS}
                    alt='banckground'
                    className={styles.bckgS}
                />
                <img
                    src={backgroundL}
                    alt='background'
                    className={styles.bckgL}
                />

                <div className={styles.content}>
                    <h1 className={styles.title} style={{ fontSize: '120px' }}>
                        Forest
                    </h1>

                    <ul className={styles.options} style={{ background: '#0000004a' }}>

                        <li
                            onClick={e => { setNewGame(true) }}
                            className={styles.optionsTitle}>
                            Nuevo Juego
                        </li>

                    </ul>
                </div>
            </section>
        )
    }
}
