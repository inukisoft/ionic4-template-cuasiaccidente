import { FormControl, PatternValidator } from '@angular/forms';

export class RutValidator {


 static validarRut(rut:any) {

    let validacion:Boolean = false;

    rut =  rut.toUpperCase();       
    rut = rut.replace("-", "");
    let rutAux:number = Number(rut.substring(0, rut.length() - 1));

    let dv: String = rut.charAt(rut.length() - 1);

    let m: number  = 0;
    let s: number = 1;
    
    for (; rutAux != 0; rutAux /= 10) {
        s = (s + rutAux % 10 * (9 - m++ % 6)) % 11;
    }
    if (dv == String (s != 0 ? s + 47 : 75)) {
        validacion = true;
    }
    return validacion;

}

    static isValido(): any {
        return null;
    }

    static isValid(control: FormControl): any {

        let rut_pattern = '^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$';
        let regex = new RegExp(rut_pattern);

        if (regex.test(control.value)) {
            return { "Formato no válido" : true};
        }

        // ahora validamos el rut

        if (!RutValidator.validarRut(control.value)) {
            return { "Verificador Inválido " : true};
        } 

        return null;
    }

}