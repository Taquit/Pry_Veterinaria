import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginForm from './Pages/Login'
import NavBar from './NavBar'
import Footer from './Footer'
import Hotel from './Pages/Hotel'
import Estetica from './Pages/Estetica'
import Tienda from './Pages/Tienda'
import Reservacion from './Pages/Reservacion'
import Registro_2 from './Pages/Registro_v2'
import Estetica_2 from './Pages/Estetica'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Prueba from './Pages/Prueba'
import Perfil from './Pages/Perfil'
import ConsultaHabitaciones from './Pages/Cons1'
import SalidasHoy from './Pages/Cons2'
import ConsultaPaseos from './Pages/Cons3'
import MascotasVacunasVigentes from './Pages/Cons4'
import ReporteServiciosPorRubro from './Pages/Cons5'
import MascotasAcheckin from './Pages/Cons6'
import PaseosPorMascota from './Pages/Cons7'
import ServiciosPorMascota from './Pages/Cons8'
import ServiciosMensuales from './Pages/Cons9'
import MascotasConTodosServicios from './Pages/Cons10'


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path ='/login' element={<LoginForm></LoginForm>}/>
        <Route path = '/hotel' element ={<Hotel></Hotel>}/>
        <Route path ='/estetica' element = {<Estetica></Estetica>}/>
        <Route path ='/tienda' element= {<Tienda></Tienda>}/>
        <Route path='/reservacion'element={<Reservacion></Reservacion>}/>
        <Route path='/registro'element={<Registro_2/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/prueba' element={<Prueba></Prueba>}/>
        <Route path='/c1' element ={<ConsultaHabitaciones/>}/>
        <Route path='/c2' element ={<SalidasHoy/>}/>
        <Route path='/c3' element ={<ConsultaPaseos/>}/>
        <Route path='/c4' element ={<MascotasVacunasVigentes/>}/>
        <Route path='/c5' element ={<ReporteServiciosPorRubro/>}/>
        <Route path='/c6' element ={<MascotasAcheckin/>}/>
        <Route path='/c7' element ={<PaseosPorMascota/>}/>
        <Route path='/c8' element ={<ServiciosPorMascota/>}/>
        <Route path='/c9' element ={<ServiciosMensuales/>}/>
        <Route path='/c10' element ={<MascotasConTodosServicios/>}/>
      </Routes>
      <Footer></Footer>
    </>
    
  )
}

export default App
