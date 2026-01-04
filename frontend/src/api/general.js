import {http} from " ./http"

export async function createMascota(data){
    const {data} =await http.post("api/mascotas/",data);
    return data;
}