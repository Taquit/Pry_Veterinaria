import React, { use, useEffect, useState } from "react";
import './Css/Registro.css';
import "./Css/CardsCss/ReDueñoCard.css"
import axios from "axios";

function Registro_Dom({onSaved}){

    const [domicilio,setDomicilio]=useState({
        "nom_calle": "",
        "num_ext": "",
        "num_int": "",
        "codigoP":"",
        "catalogo": null,
    })

    const[opcionesCP,setOpcionesCP]=useState([])
    const [info,setInfo]=useState({estado:"",municipio:""})
    const [loading,setLoading]=useState(false)
    
    const handleChange =(e)=>{
        const {name,value}=e.target;
        setDomicilio((prev)=>({...prev,[name]:value}));
    }

    useEffect(()=>{
        const cp = (domicilio.codigoP || "").trim();

        setOpcionesCP([]);
        setInfo({estado:"",municipio:""});
        setDomicilio((prev)=>({...prev,catalogo:null}))
        
        if(cp.length!==5)return;

        const fetchCP = async()=>{
            setLoading(true)

            try{
                const res = await axios.post("http://localhost:8000/api/getdom/",{
                    codigoP:cp,
                });
                
                const results = res.data?.results??[];
                setOpcionesCP(results);

                if(results.length >0){
                    setInfo({
                        estado:results[0].d_estado ??"",
                        municipio:results[0].d_mnpio ??"",
                    });;
                }
                
            } catch(err){
                console.log("No se pudo consultar el codigo postal")
                console.log("STATUS:", err.response?.status);
                console.log("DATA:", err.response?.data);
            }finally{
                setLoading(false)
            }
        }

        fetchCP();
    },[domicilio.codigoP])

    const handleSelectCatalogo = (e)=>{
        const val = e.target.value;
        setDomicilio((prev)=>({...prev,catalogo:val ===""? null:Number(val),}))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const payload ={
            nom_calle :domicilio.nom_calle,
            num_ext : domicilio.num_ext,
            num_int : domicilio.num_int || null,
            catalogo : domicilio.catalogo,
        };
        try{
            const res = await axios.post("http://localhost:8000/api/domicilios/",payload)
            console.log("Domicilio creado",res.data);
            onSaved?.(res.data)
        }catch(err){
            console.log("Error creando domicilio")
        }
        
    }

    return(
        <>
            <section className="domicilio-container">
                <h1>Domicilio</h1>
                <form  id="form-dom" onSubmit={handleSubmit}>
                    <label >Nombre de la calle:</label>
                        <input 
                        type="text" 
                        name="nom_calle"
                        value={domicilio.nom_calle || ""}
                        onChange={handleChange}
                        />
                    <label >Numero externo:</label>
                        <input 
                        type="text" 
                        name="num_ext"
                        value={domicilio.num_ext ||""}
                        onChange={handleChange}
                        />
                    <label >Numero interior:</label>
                        <input 
                        type="text" 
                        name="num_int"
                        value={domicilio.num_int || ""}
                        onChange={handleChange}
                        />
                    <label >Codigo Postal:</label>
                        <input 
                        type="text" 
                        name="codigoP"
                        maxLength={5}
                        value={domicilio.codigoP}
                        onChange={(e)=>{
                            const v = e.target.value.replace(/\D/g,"").slice(0,5);
                            setDomicilio((prev)=>({...prev,codigoP:v}))
                        }}
                        />

                        {loading && <p>Buscando...</p>}
                        <label >Estado:</label>
                        <input 
                        type="text" 
                        value={info.estado} readOnly
                        />
                        <label >Municipio:</label>
                        <input type="text" 
                        value={info.municipio} readOnly
                        />
                        <label >Colonia:</label>
                        <select value={domicilio.catalogo ??""}
                        onChange={handleSelectCatalogo}
                        disabled={opcionesCP.length===0}
                        >
                            <option value="">--Selecciona--</option>
                            {opcionesCP.map((op)=>(
                                <option key={op.id} value={op.id}>
                                    {op.d_asenta}
                                </option>
                            ))}
                        </select>
                </form>
                
            </section>
        </>
    );

}

export default Registro_Dom;