import { json } from 'react-router-dom';
import Header from '../../Componentes/Header/Header';
import PiedePagina from '../../Componentes/PiedePagina/PiedePagina';
import "./contacto.css";
import { useEffect, useState } from 'react';
// import { type } from '@testing-library/user-event/dist/type';


export default function Contactos(){
    const [info] = useState("") 
    // const [mensaje, setMensaje] = useState(false)

//GET muestra datos en el inspector al entrar en la pag "Contactos" que han sido cargados via formulario:
    const traerData = async()=>{
            await fetch("http://localhost:4000/contactos")
            .then((resp)=>{return resp.json()})
            .then((res=>console.log(res)))
            // .then((respuesta)=>setInfo(respuesta.data))
            .catch((err)=>{console.log("No se logro obtener la info"+err)}) 
    }
//GET nos muestra los datos del mail buscado.
    const handlerbuscarPersona=(event)=>{
        event.preventDefault();
        fetch("http://localhost:4000/contactos/"+event.target[0].value)
        .then((resp)=>{return resp.json()})
        .then(info=> console.log(info))
        .catch(err =>console.log(err))
        console.log(info)
      }

//DELETE: Borra resgistros de acuerdo al mail ingresado.
    const handlerBorrarPersona=(event)=>{
        event.preventDefault();
    fetch("http://localhost:4000/contactos/"+event.target[0].value, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error HTTP ${response.status}`);
        }
        console.log('Registro borrado exitosamente');
      })
      .catch(error => {
        console.error('Error al borrar registro:', error);
      });
    }

//metodo POST: crea un contacto nuevo en base a los datos anotados.
    const handlerForm=(e)=>{
        e.preventDefault();
        const formInfo=  {
            Mail: e.target[0].value,
            Mensaje: e.target[1].value,
            Categoria: e.target[2].value}
        fetch("http://localhost:4000/contactos/",{
            method:'post',
            body: JSON.stringify(formInfo),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((resp)=>{return resp.json()})
        .then((res=>console.log(res)))
        .then(()=>e.target.reset(info))
        .catch(err=>console.log("No se logro enviar la info "+err))
        };

//PATCH: modifica parcialmente informacion de datos ya registrados. Todavia no anda :(
    const handlerModificarPersona=async(e)=>{
        e.preventDefault();
        const formInfo2=  {
            Mail: '',
            Mensaje: '',
            Categoria: ''}
                await 
        fetch("http://localhost:4000/contactos/"+e.target[0].value,{
            method:'patch',
            body: JSON.stringify(formInfo2),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
              throw new Error('Error al intentar actualizar el usuario');
            }
            return response.json("Se actualizo"); 
          })
          .then(data => {
            console.log('Usuario actualizado correctamente:', data);
          })
          .catch(error => {
            console.error('Error al actualizar el usuario:', error);
          });
        }
        
            useEffect(()=>{
                traerData();
            },[ ])
        return(
        <div>
            <Header hoja="Contacto"/>
            <h1 id="tituloPagcontacto">Cafary SRL</h1>
         <form onSubmit={(event)=>handlerForm(event)}>
            <div className="mb-3" id="seccionContacto">
                <label htmlFor="exampleFormControlInput1" className="form-label">Direccion de Email</label>
                <input type="email" className="form-control" name="Mail" id="exampleFormControlInput1" placeholder="nombredelmail@gmail.com"/>
            </div>
            <div className="mb-3" id="seccionComentario">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Tu mensaje</label>
                <textarea className="form-control" type="text" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3" id="seccionCategoria">
                <label htmlFor="exampleFormControlInput1" className="form-label">Indique Categoria</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Local Directo/Franquiciado"/>
            </div>
            <button type="submit"  className="btn btn-primary"id="enviar" value="enviar">Enviar</button>
            <p id="datosACompletar">Datos a completar por personal de Cafary</p>
            </form> 

            <form onSubmit={(event)=>handlerbuscarPersona(event)}>
            <div className="mb-3">
                <input type="mail" className="form-control" id="Mail" aria-describedby="Mail socio"placeholder="Ingrese mail a buscar"/>
            </div>
            <button id="botonBusquedaMail" type="submit" className="btn btn-primary">Buscar</button>
        </form>
        <form onSubmit={(e)=>handlerModificarPersona(e)}>
            <div className="mb-3">
                <input type="mail" className="form-control" id="Mail" aria-describedby="Mail socio"placeholder="Ingrese mail para modificar datos"/>
            </div>
            <button id="botonBusquedaMail" type="submit" className="btn btn-primary">Modificar</button>
        </form>

        <form onSubmit={(event)=>handlerBorrarPersona(event)}>
            <div className="mb-3">
                <input type="mail" className="form-control" id="Mail2" placeholder="Ingrese mail a borrar" aria-describedby="Mail socio"/>
            </div>
            <button id="botonBorrarPersona" type="submit" className="btn btn-primary">Borrar</button>
        </form>
            <PiedePagina/>
            </div>
        )
    }
