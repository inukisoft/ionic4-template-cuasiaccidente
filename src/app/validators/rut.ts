import { FormControl, AbstractControl, PatternValidator } from '@angular/forms';


    export function ValidateRut(control: AbstractControl) {

        //let rut_pattern = '^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$';
        //let regex = new RegExp(rut_pattern);
   
        console.log("value control :" + control.value);

        if (control.value == null || control.value == "") {
            console.log("return null, control.value =" + control.value);
            return { validRut: true} ;
        }

        if (! /\b\d{1,8}\-[K|k|0-9]/.test(control.value)) {
            return { validRut: true};
        }


        // ahora validamos el rut

        if (validarRut(control.value)) {
            console.log("rut válido");
            
        } else {
            console.log("rut no válido");
            return { validRut : true};
        }
 
        return null;
    }


  export function validarRut(rut:any) {

    let validacion:Boolean = false;

    rut =  rut.toUpperCase();       
    rut = rut.replace("-", "");
    let rutAux:number = Number(rut.substring(0, rut.length - 1));

    return true;
}