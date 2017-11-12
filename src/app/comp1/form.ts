export class Form extends FormGroup {
    constructor(
        public controls: {[password: string]: AbstractControl}
    ){}    
}  
