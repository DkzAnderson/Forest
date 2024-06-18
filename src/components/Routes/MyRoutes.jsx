import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StartApp } from '../Menus/StartApp'
import { Principal } from '../Menus/Principal'
import { InventoryMain } from '../Inventory/InventoryMain'
import { Bestiary } from '../Menus/Bestiary'
import { CombatZone } from '../Combat/CombatZone'


export const MyRoutes = () => {
    const mainStyles = {
        main : 'w-full max-w-[600px] h-dvh flex items-center justify-center',
        content: 'w-full h-full shadow-lg'
    }
// domo
    return (
        <section className={mainStyles.main}>
            <img
                className='absolute object-cover top-0 right-0 w-dvw h-dvh'
                src="/backend/images/backgrounds/menu_principal.png"
                alt="background"
            />
            <div className={mainStyles.content}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<StartApp />} />
                        <Route path='/menu' element={<Principal />} />
                        <Route path='/inventory' element={<InventoryMain />} />
                        <Route path='/bestiary' element={<Bestiary />} />
                        <Route path='/combat' element={<CombatZone />} />

                        <Route path='*' element={
                            <h1>
                                Revisar el archivo de Rutas
                            </h1>
                        } />
                    </Routes>
                </BrowserRouter>
            </div>
        </section>
    )
}
