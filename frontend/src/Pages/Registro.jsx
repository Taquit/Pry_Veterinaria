import React, { useState } from "react";
import ReMascotCard from "./Cards/ReMascotCard";
import ReOwnerCard from "./Cards/ReOwnerCard";
import addIcon from "../assets/addDiamond.svg"
import './Css/Registro.css'

function Registro(){
    const [owner,setOwner]=useState({
        name:"",lastName:"",bday:"",sex:"",email:"",password:"",phone:"",street:"",
        block:"",postCode:"",RFC:"", RS:"",emName:"",emLastName:"",emBday:"",emEmail:"",emPhone:""
    })


    const emptyPet=()=>({
        name: "", photo: null, age: "", gender: "", weight: "",
        senas: "", color1: "", color2: "", pattern: "",
        specie: "", breed: "", type: "",rabia: false, parvovirus: false, moquillo: false, hepatitis: false,
        leptospirosis: false, bordetella: false, parainfluenza: false,
        desparasitacion: false, certificado: false, esterilizado: false,
        triple_felina: false, leucemia_felina: false,psitacosis_negativa: false, newcastle_vacuna: false,
        muda_plumas: false, arranca_plumas: false,salmonella_test: false, terrario: "", muda_piel: false,padecimientos:""
    })

    const [currentStep,setCurrentStep]=useState(1)

    const [pets,setPets]=useState([emptyPet()])

    const addPet=()=>{
        setPets([...pets,{
            ame: "", photo: null, age: "", gender: "", weight: "",
        senas: "", color1: "", color2: "", pattern: "",
        specie: "", breed: "", type: "",rabia: false, parvovirus: false, moquillo: false, hepatitis: false,
        leptospirosis: false, bordetella: false, parainfluenza: false,
        desparasitacion: false, certificado: false, esterilizado: false,
        triple_felina: false, leucemia_felina: false,psitacosis_negativa: false, newcastle_vacuna: false,
        muda_plumas: false, arranca_plumas: false,salmonella_test: false, terrario: "", muda_piel: false,padecimientos:""
        }])
    }

    const updatePet = (idx, next) =>{
        setPets(pets.map((p,i)=>(i == idx ? next :p)));
    }

    const removePet =(idx)=>{
        if(pets.length ===1)return
        setPets(pets.filter((_,i)=>i !== idx));
    }

    const goToStep=(step)=>{setCurrentStep(step)}
    const nextStep=()=>{setCurrentStep(currentStep +1)}
    const prevStep=()=>{setCurrentStep(currentStep -1)}

    const handleSubmit=(e)=>{
        e.preventDefault();

        const formData = new Formadata();
        formData.append("owner",JSON.stringify(owner))
        pets.forEach((p, i) => {
        const { photo, ...rest } = p;
        formData.append(`pets[${i}]`, JSON.stringify(rest));
        if (photo) formData.append(`pets[${i}][photo]`, photo);

        console.log({ owner, pets });
        alert("Formulario listo (revisa la consola). Aquí harías el POST a tu API.");
    });
    }

    return(
        <>
        <div className="registro-container">
            <p className="registro-tittle">Empecemos!</p>
            <p className="registro-texto">Para poder proseguir con su registro y realizar reservaciones, ingrese los siguientes datos que se le solicitan</p>
            <div className="steps-container">
                <button type="button" className={`step-btn ${currentStep === 1 ? "active" : ""}`} onClick={()=>goToStep(1)}>Dueño</button>                
                <button type="button" className={`step-btn ${currentStep === 2 ? "active" : ""}`} onClick={()=>goToStep(2)}>Mascotas</button>
            </div>
            <form className="registro-form" onSubmit={handleSubmit}>
                {currentStep ===1 &&(
                    <section className="owner-section">
                        <ReOwnerCard owner={owner} onChange={setOwner}/>
                    </section>
                )}

                {currentStep ===2 &&(
                    <section className="pets-section">
                        {pets.map((pet,idx)=>(
                            <ReMascotCard key={idx} index={idx} pet={pet} onChange={(next)=>updatePet(idx,next)} onRemove={pets.length >1 ? ()=>removePet(idx) : undefined } />
                        ))}
                        <div className="add-pet-container">
                            <button type="button" className="button" onClick={addPet}> 
                                <img src={addIcon} alt="Agregar mascota"  aria-hidden="true" className="add-icon" onClick={addPet}/>
                                Agregar otra mascota</button>
                        </div>
                        
                    </section>
                )}
    {/*
                <div>
                    <button type="button" onClick={prevStep} disabled={currentStep ===1}> Anterior</button>
                    {currentStep<2 ? (
                        <button type="button" onClick={nextStep}> Siguiente</button>
                    ):(
                        <button type="submit"> Enviar</button>
                    )}
                </div>
                */}
            </form>
            {currentStep ===2 && (
                <div className="submit-container"><button type="submit" className="button"> Enviar</button></div>
            )}

        </div>
        </>
    )
}

export default Registro