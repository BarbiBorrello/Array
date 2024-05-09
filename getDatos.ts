class Persona {
  nombre: string;
  apellido: string;
  fechaNacimiento: number;


  constructor(nombre : string , apellido :string, fechaNacimiento: number ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
  }

  getName ():string{
    return this.nombre;
  }

  getApellido ():string{
    return this.apellido;
  }

  getfechaDeNacimiento ():number{
    return this.fechaNacimiento;
  }
}

const persona1 = new Persona ("Barbara","Borrello", 1977);
console.log(persona1.getName());
console.log(persona1.getApellido());
console.log(persona1.fechaNacimiento);

console.log(`${persona1.getName()},${persona1.getApellido()} nacio en el año ${persona1.getfechaDeNacimiento()}`);

