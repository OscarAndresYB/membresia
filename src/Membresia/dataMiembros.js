import {addDoc, collection, deleteDoc, doc, getDocs, getFirestore, setDoc} from "firebase/firestore"
import firebaseApp from "./credenciales";

const baseDEDatos = getFirestore(firebaseApp)
const coleccion = "miembros";

export const datosMiembros = async()=>{
    try {
        const miembro = await getDocs(collection (baseDEDatos, coleccion));
        const datosM = [];
        miembro.forEach(element => {
            
            datosM.push({
                id: element.id,
                nombre: element.data().nombre,
                fecha_nac: element.data().fecha_nac,
                telefono: element.data().telefono,
                estado: element.data().estado,
                apellido: element.data().apellido
            })
            
        })
        return datosM;
    } catch (error) {
        console.log(error);
        return null;
    }

}
export const agregarMiembros = async(nombre, fecha_nac, telefono, estado, mes, apellido)=>{
    try {
        await addDoc(collection(baseDEDatos, coleccion),{
            nombre: nombre,
            apellido:apellido,
            fecha_nac: fecha_nac,
            mes: mes,
            telefono:telefono,
            estado: estado
        });
        console.log('agregar reunion correcto');
        return 'ok';
            
    } catch (error) {
        console.log('agregar reunion error');
        console.log(error); 
        return 'error';
    }
}
export const editarMiembros = async(id, nombre, fecha_nac, telefono, estado, apellido)=>{
    try {
        const docRef = doc(baseDEDatos, coleccion, id)
        await setDoc(docRef, {
            nombre: nombre,
            apellido:apellido,
            fecha_nac: fecha_nac,
            telefono:telefono,
            estado: estado
        })
    } catch (error) {
        console.log(error);
    }
}
export const eliminarMiembros = async(id)=>{
    try {
        await deleteDoc(doc(baseDEDatos, coleccion, id))
    } catch (error) {
        console.log(error);
    }
}