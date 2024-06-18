import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, RouterProvider, createHashRouter } from 'react-router-dom'
import { StartApp } from './components/Menus/StartApp.jsx'
import { Principal } from './components/Menus/Principal.jsx'
import { InventoryMain } from './components/Inventory/InventoryMain.jsx'
import { Bestiary } from './components/Menus/Bestiary.jsx'
import { CombatZone } from './components/Combat/CombatZone.jsx'

const router = createHashRouter([
  {
    path:'/',
    element: <StartApp/>
  },
  {
    path:'/menu',
    element: <Principal/>
  },
  {
    path:'/inventory',
    element: <InventoryMain/>
  },
  {
    path:'/bestiary',
    element: <Bestiary/>
  },
  {
    path:'/combat',
    element: <CombatZone/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
