import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StartApp } from '../Menus/StartApp'
import { Principal } from '../Menus/Principal'
import { InventoryMain } from '../Inventory/InventoryMain'
import { Bestiary } from '../Menus/Bestiary'
import { CombatZone } from '../Combat/CombatZone'


export const MyRoutes = () => {
    const mainStyles = {
        main : 'w-full h-full flex items-center justify-center',
        content: 'w-full h-full shadow-lg'
    }
    
    return (
        <section className={mainStyles.main}>
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
