import React, { useEffect, useState } from "react";

import axios from "axios";

function ReMascotCard ({onSucces}){

    
    const [subtipos,setSubtipos]=useState([]);
    const [tipo,setTipo]=useState("");
    const [fotoFile,setFotofile]=useState(null)
    const [preview,setPreview] = useState(null)
    const [mascota,setMascota]=useState({
        
        "nombre_mascota": "",
        "fecha_nac": null,
        "peso": null,
        "esterilizado": false,
        "chip": null,
        "ruac": null,
        "sexo": "",
        "color_prim": "",
        "color_sec": null,
        "comportamiento": null,
        "cartilla_vac": false,
        "notas": null,
        "id_dueño": null,
        "id_subtipo": ""

    });
    

    useEffect(()=>{
        const id = Number(localStorage.getItem("id_dueño") || "0");
        setMascota((prev)=>({...prev,id_dueño:id>0?id:null}));
        
        const getSubTipos = async()=>{
            try {
                const response = await axios.get('http://localhost:8000/api/subtipos/');
                setSubtipos(Array.isArray(response.data)?response.data:[]);
            } catch (error) {
                console.error("Error fetching subtipos:", error);
            }
        }
        getSubTipos();
    },[]);

    const handelInput=(e)=>{
        const {name,value,type,checked}=e.target;
        let val=value;
        if(type === "checkbox") val=checked;
        if(type === "number") val=value ===""? null : Number(value);
        if(name === "cartilla_vac" || name === "esterilizado"){
            val=value==="true"
        }
        if(name==="id_subtipo"){
            val=value=== "" ? null:Number(value);
        }
        setMascota((prev)=>({...prev,[name]:val}));
    };

    const handelTipo =(e)=>{
        const val = e.target.value;
        setTipo(val);
        setMascota((prev)=>({...prev,id_subtipo:null}))
    }

    const handleFoto = (e)=>{
        const file = e.target.files ?. [0] || null;
        setFotofile(file);
        
        if(file){
            const url = URL.createObjectURL(file);
            setPreview(url)
        }else{
            setPreview(null)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            const form = new FormData()
                    // Campos normales
            form.append("nombre_mascota", mascota.nombre_mascota || "");
            form.append("fecha_nac", mascota.fecha_nac || "");
            if (mascota.peso !== null && mascota.peso !== undefined) form.append("peso", String(mascota.peso));

            form.append("esterilizado", String(!!mascota.esterilizado));
            form.append("cartilla_vac", String(!!mascota.cartilla_vac));

            form.append("chip", mascota.chip || "");
            form.append("ruac", mascota.ruac || "");
            form.append("sexo", mascota.sexo || "");
            form.append("color_prim", mascota.color_prim || "");
            form.append("color_sec", mascota.color_sec || "");
            form.append("comportamiento", mascota.comportamiento || "");
            form.append("notas", mascota.notas || "");

            // FKs (asegúrate de que tu serializer use estos nombres)
            if (mascota.id_dueño) form.append("id_dueño", String(mascota.id_dueño));
            if (mascota.id_subtipo) form.append("id_subtipo", String(mascota.id_subtipo));


            const res = await axios.post("http://localhost:8000/api/mascotas/", form, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("CREADA:", res.data);
            if(onSucces) onSucces();
        }catch{
            console.log("Error post mascota:", err.response?.data || err.message)

        }
    }

    const subTiposFiltrados=subtipos.filter(
        (st)=>String(st.id_tipo)===String(tipo)
    )
    

    return(
        <>
            <div className="mascotCard-section">
                <form onSubmit={handleSubmit}>
                <section className="mascotCard-form"> 
                    <label > Nombre:</label>
                    <input type="text" name="nombre_mascota" placeholder="Nombre de la mascota" value={mascota.nombre_mascota || ""} onChange={handelInput}/>
                    <label >Fecha de nacimiento:</label> 
                    <input type="date"  min="1900-01-01"max={new Date().toISOString().slice(0,10)} name="edad" value={mascota.edad || ""} onChange={handelInput}/>
                    <label >Foto</label>
                    <input type="file" accept="image/" onChange={handleFoto} />
                    {preview && (
                        <div style={{marginTop:8}}>
                            <img src={preview} alt={preview} style={{ maxWidth: 220, height: "auto" }}/>
                        </div>
                    )}
                    <label>Sexo:</label>
                    <select name="sexo" value={mascota.sexo || ""} onChange={handelInput}>
                        <option value="">--Selecciona--</option>
                        <option value="M">Macho</option>
                        <option value="F">Hembra</option>
                        
                    </select>
                    <label>Peso:</label>
                    <input type="number" name="peso" placeholder="Kg" min={0} value={mascota.peso ??""} onChange={handelInput} />
                    <label>Color:</label>
                    <input type="text" name="color_prim" placeholder="Ej. Negro,Blanco..." value={mascota.color_prim || ""} onChange={handelInput}/>
                    <label >Color secundario:</label>
                    <input type="text" name="color_sec" placeholder="Ej. Negro,Blanco, etc" value={mascota.color_sec || ""} onChange={handelInput}/>
                    <label>Chip:</label>
                    <input type="text" name="chip"placeholder="N/A o 52342113" value={mascota.chip || ""} onChange={handelInput}/>
                    <label >RUAC:</label>
                    <input type="text" name="ruac" placeholder="" value={mascota.ruac || ""} onChange={handelInput}/>
                    <label>Cartilla de Vacunacion:</label>
                    <select name="cartilla_vac" value={String(!!mascota.cartilla_vac) || ""} onChange={handelInput}>
                        <option value="">--Selecciona--</option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                    </select>
                    <label>Esterilizado:</label>
                    <select name="esterilizado" value={mascota.esterilizado || ""} onChange={handelInput}>
                        <option value="">--Selecciona--</option>
                        <option value="true">Si</option>
                        <option value="flase">No</option>
                    </select>
                    <label >Especie</label>
                    <select name="specie" value={tipo} onChange={handelTipo}>
                        <option value="">--Selecciona</option>
                        <option value="1">Perro</option>
                        <option value="2">Gato</option>
                        <option value="3">Reptil</option>
                        <option value="4">Ave</option>
                    </select>
                    <label >Subtipo:</label>
                    <select name="id_subtipo" value={mascota.id_subtipo || ""} onChange={handelInput} disabled={!tipo}>
                        <option value="">Selecciona raza/especie:</option>
                        {subTiposFiltrados.map((st)=>(
                            <option key={st.id_subtipo} value={st.id_subtipo}>
                                {st.nom_subtipo}
                            </option>
                        ))}
                    </select>
                    <label>Comportamiento:</label>
                    <input type="text" name="comportamiento" value={mascota.comportamiento || ""} onChange={handelInput}/>
                    <label>Notas:</label>
                    <input type="text" name="notas" value={mascota.notas || ""} onChange={handelInput}/>
                </section>
                    <button type="submit">Guardar</button>
                </form>
                
            </div>
        </>
    )
}

export default ReMascotCard