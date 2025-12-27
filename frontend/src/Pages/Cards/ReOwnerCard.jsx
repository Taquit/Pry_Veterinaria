import React from "react";
import "../Css/CardsCss/ReDueñoCard.css"

function ReOwnerCard ({owner,onChange}){
    const handle = (e)=>onChange({...owner,[e.target.name]:e.target.value})
    const ymd = (d) =>
  `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;

    const maxDate = ymd(new Date());

    return(
        <>
            <div className="owner-container">
                <section className="ownerCard-section">
                    <h2>Datos del Dueño</h2>
                    <label className="label-owner">Nombre y Apellido:</label>
                    <div className="name-row"> 
                        <input type="text" name="name" placeholder="Escribe tu nombre" value={owner.name || ""} onChange={handle}/>
                        <input type="text" name="lastName" placeholder="Escribe tus apellidos" value={owner.lastName || ""} onChange={handle}/>
                    </div>
                    <label className="label-owner">Fecha de nacimiento:</label>
                    <input type="date" min="1934-01-01" max={maxDate} name="bday" value={owner.bday || ""} onChange={handle} />
                    <label className="label-owner">Sexo:</label>
                    <select name="sex" value={owner.sex || ""} onChange={handle}>
                        <option value="">--Selecciona--</option>
                        <option value="M" >Hombre</option>
                        <option value="F">Mujer</option>
                        <option value="O">Otro</option>
                    </select>
                    <label className="label-owner">Correo:</label>
                    <input type="email" name="email"  placeholder="ejemplo@correo.com" value={owner.email || ""} onChange={handle}/>
                    <label className="label-owner">Contraseña:</label>
                    <input type="password" name="password"  value={owner.password || ""} onChange={handle}/>
                    <label className="label-owner">Telefono:</label>
                    <input type="tel" name="phone" placeholder="+52 555-555-555" value={owner.phone || ""} onChange={handle}/>
                    <label>Calle:</label>
                    <input type="text" name="street" placeholder="Calle principal" value={owner.street || ""} onChange={handle}/>
                    <label>Colonia:</label>
                    <input type="text" name="block" placeholder="Colonia" value={owner.block || ""} onChange={handle}/>
                    <label>Numero:</label>
                    <input type="number"  name="number" min="0" step="1" placeholder="324" value={owner.number || ""} onChange={handle}/>
                    <label >Codigo Postal</label>
                    <input type="number" name="postCode" min="0" step="1" placeholder="05300" value={owner.postCode || ""} onChange={handle}/>
                    <label> Datos fiscales</label>
                    <div className="name-row">
                        <input type="text" name="RFC" placeholder="RFC" value={owner.RFC || ""} onChange={handle}/>
                        <input type="text" name="RS" placeholder="Razon Social" value={owner.RS || ""} onChange={handle} />
                    </div>
                    
                    
                </section>
                <section className="emContact-section" id="emcntact-section"> 
                    <h2>Contacto de emergencia</h2>
                    <label className="label-emContact">Nombre y Apellido:</label>
                    <div className="name-row">
                        <input type="text" name="emName" placeholder="Escribe su nombre" value={owner.emName || ""} onChange={handle}/>
                        <input type="text" name="emLastName" placeholder="Escribe sus apellidos" value={owner.emLastNameE || ""} onChange={handle}/>
                    </div>
                    
                    <label className="label-emContact">Fecha de nacimiento:</label>
                    <input type="date" name="emBday" value={owner.emBday || ""} onChange={handle} />
                    <label className="label-emContact" >Correo:</label>
                    <input type="email" name="emEmail"  placeholder="ejemplo@correo.com" value={owner.emEmailE || ""} onChange={handle}/>
                    <label className="label-emContact">Telefono:</label>
                    <input type="tel" name="emPhone" placeholder="+52 555-555-555" value={owner.emPhoneE || ""} onChange={handle}/>
                </section>
            </div> 
        </>
    )
}
export default ReOwnerCard