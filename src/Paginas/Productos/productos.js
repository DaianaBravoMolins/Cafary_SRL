import Header from '../../Componentes/Header/Header';
import PiedePagina from '../../Componentes/PiedePagina/PiedePagina';
import "./productos.css";
// import { useEffect, useState } from 'react';

export default function Productos(){
    // const traerProductos=async()=>{
    //     let info= await fetch("https://localhost:4000/productos")
    //     .then((resp)=>{return resp.json()})
    //     .then((data)=>{return data.results})
    //     .catch((error)=>{console.log(error)})
    //     console.log(info);
    //     traerProductos(info); 
    // };
    // useEffect(()=>{
    //     traerProductos() 
    // },[])
    // const handlerImg=(event)=>{
    //     event.preventDefault();
    //     let info = new FormData(event.target);
    //     fetch("http://localhost:4000/productos/cargaImagen",{
    //      method:'post',
    //      body:info,
    //     })
    //     .then((resp)=>{return resp.json()})
    //     .then(data=> console.log(data))
    //     .catch(error=> console.log(error))
    // }
    return(
        <div>
            <Header hoja="Productos" />
            <div id="general" class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
          <form/>
              <img src={require("../../Componentes/Media/Alfchoco.jpg")}/>
          <form/>
            <div class="card-body">
              <h5 class="card-title">Alfajor Chocolate</h5>
              <p class="card-text"> Sin tacc: No</p>
              <p class="card-text">Premium: No</p>
            </div>
            <div class="card-footer">
              <small>Precio: $2000</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Alfddl.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Alfajor Dulce de Leche</h5>
              <p class="card-text"> Sin tacc: No</p>
              <p class="card-text">Premium: No</p>
            </div>
            <div class="card-footer">
              <small>Precio: $2000</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Alffruta.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Alfajor de Fruta</h5>
              <p class="card-text"> Sin tacc: No</p>
              <p class="card-text">Premium: No</p>
            </div>
            <div class="card-footer">
              <small>Precio: 2000</small>
            </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
            <img src={require("../../Componentes/Media/Alfblanco.png")}/>
            <div class="card-body">
              <h5 class="card-title">Alfajor Chocolate Blanco</h5>
              <p class="card-text"> Sin tacc: No</p>
              <p class="card-text">Premium: No</p>
            </div>
            <div class="card-footer">
              <small>Precio: $2000</small>
            </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
            <img src={require("../../Componentes/Media/Alfblanconuez.jpg")}/>
              <div class="card-body">
                <h5 class="card-title">Alfajor Blanco con Nuez</h5>
                <p class="card-text"> Sin tacc: No</p>
                <p class="card-text">Premium: No</p>
              </div>
          <div class="card-footer">
            <small>Precio: $2000</small>
          </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Alfsemilia.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Alfajor Semilia</h5>
              <p class="card-text"> Sin tacc: Si</p>
              <p class="card-text">Premium: Si</p>
            </div>
            <div class="card-footer">
              <small>Precio: $2300</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Alfsuperddl.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Alfajor Super Dulce de Leche</h5>
              <p class="card-text"> Sin tacc: Si</p>
              <p class="card-text">Premium: Si</p>
            </div>
            <div class="card-footer">
              <small>Precio: $2300</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Alf70.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Alfajor 70% cacao</h5>
              <p class="card-text"> Sin tacc: No</p>
              <p class="card-text">Premium: Si</p>
            </div>
            <div class="card-footer">
              <small>Precio: $2300</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Alfvegano.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Alfajor Vegano</h5>
              <p class="card-text"> Sin tacc: Si</p>
              <p class="card-text">Premium: No</p>
            </div>
            <div class="card-footer">
              <small>Precio: 2300</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Alfmdq.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Alfajor Mar del Plata</h5>
              <p class="card-text"> Sin tacc: No</p>
              <p class="card-text">Premium: Si</p>
            </div>
            <div class="card-footer">
              <small>Precio: $2300</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Gallelimon.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Galletita de Limon</h5>
              <p class="card-text"> Sin tacc: No</p>
              <p class="card-text">Premium: No</p>
            </div>
            <div class="card-footer">
              <small>Precio: $1800</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Gallelimonchoco.png")}/>
            <div class="card-body">
              <h5 class="card-title">Galletita de Limon con Chocolate</h5>
              <p class="card-text"> Sin tacc: No</p>
              <p class="card-text">Premium: No</p>
            </div>
            <div class="card-footer">
              <small>Precio: $1900</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Havannetchoco.png")}/>
            <div class="card-body">
              <h5 class="card-title">Havannete de Chocolate</h5>
              <p class="card-text"> Sin tacc: No</p>
              <p class="card-text">Premium: No</p>
            </div>
            <div class="card-footer">
              <small>Precio: $1850</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Havannetchocoblanco.png")}/>
            <div class="card-body">
              <h5 class="card-title">Havannete de Chocolate Blanco</h5>
              <p class="card-text"> Sin tacc: No</p>
              <p class="card-text">Premium: No</p>
            </div>
            <div class="card-footer">
              <small>Precio: $1850</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Havannetchoco70.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Havannete 70 % Cacao</h5>
              <p class="card-text"> Sin tacc: No</p>
              <p class="card-text">Premium: Si</p>
            </div>
            <div class="card-footer">
              <small>Precio: $2000</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Havannetcoco.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Havannete de Coco</h5>
              <p class="card-text"> Sin tacc: Si</p>
              <p class="card-text">Premium: Si</p>
            </div>
            <div class="card-footer">
              <small>Precio: $2000</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Barraconleche.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Barra de Cereal de Chocolate</h5>
              <p class="card-text"> Sin tacc: Si</p>
              <p class="card-text">Premium: No</p>
            </div>
            <div class="card-footer">
              <small>Precio: $1800</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Barrablanca.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Barra de Cereal Chocolate Blanco</h5>
              <p class="card-text"> Sin tacc: Si</p>
              <p class="card-text">Premium: No</p>
            </div>
            <div class="card-footer">
              <small>Precio: $1800</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Barra70.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Barra de cereal Chocolate 70% Cacao</h5>
              <p class="card-text"> Sin tacc: Si</p>
              <p class="card-text">Premium: Si</p>
            </div>
            <div class="card-footer">
              <small>Precio: $2000</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Coronitassurtidas.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Coronitas Surtidas</h5>
              <p class="card-text"> Sin tacc: Si</p>
              <p class="card-text">Premium: Si</p>
            </div>
            <div class="card-footer">
              <small>Precio: $15000</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Coronitas70.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Coronitas 70% Cacao</h5>
              <p class="card-text"> Sin tacc: Si</p>
              <p class="card-text">Premium: Si</p>
            </div>
            <div class="card-footer">
              <small>Precio: $17000</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Trufasurtida.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Trufas Surtidas</h5>
              <p class="card-text"> Sin tacc: Si</p>
              <p class="card-text">Premium: No</p>
            </div>
            <div class="card-footer">
              <small>Precio: $17000</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={require("../../Componentes/Media/Trufa70.jpg")}/>
            <div class="card-body">
              <h5 class="card-title">Trufa 70% Cacao</h5>
              <p class="card-text"> Sin tacc: Si</p>
              <p class="card-text">Premium: Si</p>
            </div>
            <div class="card-footer">
              <small>Precio: $18000</small>
            </div>
            </div>
          </div>
        </div> 
          <PiedePagina/>
        </div>
    )
    }