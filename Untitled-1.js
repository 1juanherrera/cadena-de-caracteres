
//Cadenas de caracteres

let nombre = 'Juan';

let apellido = 'Herrera';

let estudiante = `${nombre} ${apellido}`;

let estudianteMayus = (estudiante.toUpperCase());

let estudianteMinus = (estudiante.toLowerCase());

let primera = (nombre.charAt(0));

let ultima = (apellido.charAt(6));

let espacios = (estudiante.replace(/\s+/g, ''));

let booleana = (estudiante.includes(nombre));