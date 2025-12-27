import React, { useState } from "react";
import { dogBreeds,catBreed,birdType,reptilesType } from "../../CustomHooks/CatalogoPets";
import "../Css/CardsCss/ReMascotCard.css"

function ReMascotCard ({pet,onChange,onRemove,index}){

    const handle=(e)=>{
        const {name,value,type,checked,files}=e.target;
        let val=value;
        if(type === "checkbox") val=checked;
        if(type ==="file") val = files?.[0] || null;
        onChange({...pet,[name]:val});
    };



    const specie = pet.specie;

    return(
        <>
            <div className="mascotCard-section">
                <div className="mascotCard-header">
                    <h2>Mascota #{(index ?? 0)+1}</h2>
                    {onRemove && <button type="button" className="rmv-button" onClick={onRemove}>Eliminar</button>}
                </div>
                <section className="mascotCard-form"> 
                    <label > Nombre:</label>
                    <input type="text" name="name" placeholder="Nombre de la mascota" value={pet.name || ""} onChange={handle}/>
                    <label >Foto</label>
                    <input type="file" name="photo" onChange={handle}/>
                    <label >Fecha de nacimiento:</label> 
                    <input type="month"  min="1900-01"max={new Date().toISOString().slice(0,7)} name="bday" value={pet.age || ""} onChange={handle}/>
                    <label>Sexo:</label>
                    <select name="sex" value={pet.sex || ""} onChange={handle}>
                        <option value="">--Selecciona--</option>
                        <option value="M">Macho</option>
                        <option value="F">Hembra</option>
                        
                    </select>
                    <label>Peso:</label>
                    <input type="number" name="weigth" placeholder="Kg" min={0} value={pet.weigth} onChange={handle} />
                    <label>Señas particulares</label>
                    <input type="text" name="dist" placeholder="Ej. Mancha sobre la cabeza, Parece que tiene botas, Seis dedos ..." value={pet.dist || ""} onChange={handle}/>
                    <label>Color:</label>
                    <input type="text" name="color" placeholder="Ej. Negro,Blanco..." value={pet.color || ""} onChange={handle}/>
                    <label >Color secundario:</label>
                    <input type="text" name="color2" placeholder="Ej. Negro,Blanco, etc" value={pet.color2 || ""} onChange={handle}/>
                    <label>Patron de colores:</label>
                    <input type="text" name="patron" placeholder="Ej. Manchas negras, Atigrado,etc" value={pet.patron || ""} onChange={handle}/>
                    <label >Especie</label>
                    <select name="specie" value={pet.specie || ""} onChange={handle}>
                        <option value="">--Selecciona</option>
                        <option value="D">Perro</option>
                        <option value="C">Gato</option>
                        <option value="R">Reptil</option>
                        <option value="B">Ave</option>
                    </select>
                    {specie ==="D" && (
                        <div>
                            <label>Pelo:</label>
                            <input type="text" name="tipoPelo"  placeholder="Ej. Lasio, Risos, Pelon..." value={pet.tipoPelo || ""} onChange={handle}/>
                            <label>Raza:</label>
                            <select name="breed" value={pet.breed || ""} onChange={handle} >
                                <option value="">--Selecciona raza--</option>
                                {dogBreeds.map((breed,i)=>(
                                    <option key={i} value={breed}>{breed}</option>
                                ))}
                            </select>
                            
                            <label><input type="checkbox" name="rabia" checked={!!pet.rabia} onChange={handle} /> Rabia</label>
                            <label><input type="checkbox" name="moquillo" checked={!!pet.moquillo} onChange={handle}/> Moquillo (Distemper)</label>
                            <label><input type="checkbox" name="parvovirus" checked={!!pet.parvovirus} onChange={handle}/> Parvovirus</label>
                            <label><input type="checkbox" name="hepatitis" checked={!!pet.hepatitis} onChange={handle}/> Hepatitis infecciosa (Adenovirus)</label>
                            <label><input type="checkbox" name="leptospirosis" checked={!!pet.leptospirosis} onChange={handle}/> Leptospirosis</label>
                            <label><input type="checkbox" name="bordetella" checked={!!pet.bordetella} onChange={handle}/> Bordetella (tos de las perreras)</label>
                            <label><input type="checkbox" name="parainfluenza" checked={!!pet.parainfluenza} onChange={handle}/> Parainfluenza</label>
                            <label><input type="checkbox" name="desparasitacion" checked={!!pet.desparasitacion} onChange={handle}/> Desparasitación</label>
                            <label><input type="checkbox" name="certificado" checked={!!pet.certificado} onChange={handle}/> Certificado veterinario</label>
                            <label><input type="checkbox" name="esterilizado" checked={!!pet.esterilizado} onChange={handle}/>Esterilizado</label>
                        </div>
                    )}
                    {specie === "C" && (
                        <div>
                            <label>Pelo:</label>
                            <input type="text" name="tipoPelo"  placeholder="Ej. Lasio, Risos, Pelon..." value={pet.tipoPelo     || ""} onChange={handle}/>
                            <label>Raza:</label>
                            <select name="breed" value={pet.breed || ""} onChange={handle}>
                                <option value="">--Selecciona raza--</option>
                                {catBreed.map((breed,i)=>(
                                    <option key={i} value={{breed}}>{breed}</option>
                                ))}
                            </select>
                            <label><input type="checkbox" name="rabia" checked={!!pet.rabia} onChange={handle}/> Rabia</label>
                            <label><input type="checkbox" name="triple_felina" checked={!!pet.triple_felina} onChange={handle}/> Triple felina (FVRCP)</label>
                            <label><input type="checkbox" name="leucemia_felina" checked={!!pet.leucemia_felina} onChange={handle}/> Leucemia felina (FeLV)</label>
                            <label><input type="checkbox" name="desparasitacion_gato" checked={!!pet.desparasitacion_gato} onChange={handle}/> Desparasitación</label>
                            <label><input type="checkbox" name="certificado_gato" checked={!!pet.certificado_gato} onChange={handle}/> Certificado veterinario</label>
                            <label><input type="checkbox" name="esterilizado" checked={!!pet.esterilizado} onChange={handle}/>Esterilizado</label>
                        </div>
                    )}
                    {specie === "B" && (
                        <div>
                            <label>Tipo de Ave:</label>
                            <select name="type" value={pet.type || ""} onChange={handle}>
                                <option value="">--Selecciona tipo</option>
                                {birdType.map((breed,i)=>(
                                    <option key={i} value={breed}>{breed}</option>
                                ))}
                            </select>
                            <label><input type="checkbox" name="psitacosis_negativa" checked={!!pet.psitacosis_negativa} onChange={handle}/> Prueba negativa de psitacosis</label>
                            <label><input type="checkbox" name="newcastle_vacuna" checked={!!pet.newcastle_vacuna} onChange={handle}/> Vacuna contra Newcastle</label>
                            <label><input type="checkbox" name="muda_plumas" checked={!!pet.muda_plumas} onChange={handle}/> ¿Está mudando de plumas?</label>
                            <label><input type="checkbox" name="arranca_plumas" checked={!!pet.arranca_plumas} onChange={handle}/> ¿Se arranca las plumas?</label>
                        </div>
                    )}
                    {specie === "R" && (
                        <div>
                            <label >Tipo de Reptil:</label>
                            <select name="type" value={pet.type || ""} onChange={handle}>
                                <option value="">--Seleciona tipo--</option>
                                {reptilesType.map((type,i)=>(
                                    <option key={i} value={type}>{type}</option>
                                ))}
                            </select>
                            <label><input type="checkbox" name="salmonela" checked={!!pet.salmonela} onChange={handle}/>Prueba de salmonela:</label>
                            <label >Terrario:</label>
                            <input type="text" name="terrario" value={pet.terrario || ""} onChange={handle}/>
                            <label><input type="checkbox" name="muda" checked={!!pet.muda} onChange={handle}/>Esta mudando de piel?</label>
                        </div>
                    )}
                    <label>Padecimientos:</label>
                    <input className="padecimientos" type="text" name="padecimientos" value={pet.padecimientos} onChange={handle}/>
                </section>
            </div>
        </>
    )
}

export default ReMascotCard