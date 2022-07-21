
// let nombre = prompt("Dime tu nombre");
// alert("Hola "+ nombre);

 
//  let frase1 = "Estamos bien";
//  let frase2 = "Estamos mal";
// console.log( frase1 + " " +frase2);
 

// let number = 1;
//     console.log(typeof  number);

// let string = "letras";
//     console.log(typeof string);

// let undefind;
//     console.log(undefind);

// let boolean = true;
//     console.log(typeof boolean);

// let nulo = null;
//     console.log("null")

// let numero = 5;
//     console.log(typeof 5 * 2);

// let variable1 = "letras1";
// let variable2 = "letras2";
//     console.log( variable1  + " " + variable2);

// let numero5 = 5;
// let numero6 = toString(numero5);
//     console.log(typeof numero5);
//     console.log(typeof numero6);

// let num = 10.23445;
//     console.log(num.toFixed());
//     console.log(num.toFixed(3));

// let cadena1 = 3;
// let cadena2 = 3;
// console.log(cadena1 + cadena2);

// let hola = "suma";
// let adios = "son";
// let resultado = 15;

// console.log(hola + " " + adios);

// let cadenaresultado = cadena1 + cadena2;
// console.log(` ${cadenaresultado}`);

// let sumare1 = 10 + "1"
// console.log("String");

// let sumare2 = 10 - "1"
// console.log("NaN es una operación entre Number y String");

// let texto = "Hola estas bien?. ¡Hey, estoy hablando contigo!";
// console.log(string.replace('bien', 'tu'))


// let number1 = -101;
// num++;
// if (number1 >=100) {console.log("es mayor de 100");
// }


// if (Math.sign(number1) ==1)
//  {
//     console.log("positivo");
    
//     }

// if (Math.sign(number1) ==-1)
//  {
//     console.log("negativo");
    
//     }

// const pepe = 1;

// const pepe1 = 30;

// if (pepe + pepe1 > 50 ) {console.log((pepe + pepe1) * 2);
    
// }
// else{
//     console.log((pepe + pepe1) * 3);
// }

// if (number % 3 ==0) {console.log("es multiplo de 3");
    
// }
// else if(number % 8 ==0){console.log("es multiplo de 8")}
// else{console.log("no es multiplo de nada");}

// const buen_tiempo = true;
// const trabajo = false;
// if (trabajo == true) {console.log("no puedo ir");
//     }
// else if(trabajo == false && buen_tiempo == true){console.log("si puedo ir");}

// for (let index = 0; index < 21; index++) {

// console.log(index -5);
// }

// let suma = 0;

// for (let index = 0; index < 21; index++) {

//     suma = suma + index;
//     }
//     console.log(suma);

// const numero_prompt = prompt("introduce un numero");
// let suma_prompt = 0;
// for (let i = 0; i <= numero_prompt; i++) {

//     suma_prompt = suma_prompt + i;
//     }
//     console.log(suma_prompt);

// const numero_factorial = prompt("introduce un numero");
// let suma_factorial = 1;

// for (let i = 1; i <= numero_factorial; i++) {
    
//         suma_factorial = suma_factorial * i;
//         }
//         console.log(suma_factorial);
     

// function aleatorio(minimo , maximo) {return Math.random(minimo , maximo);     
//     }
//     console.log(aleatorio(0,1));


// function tipCalculator(calidad , coste) {
//     if (calidad == "fatal") {
//         propina = coste * 0.05;
//         }

//     else if(calidad == "ok") {
//         propina = coste * 0.15;

//     }

//     else if(calidad == "bueno") {
//         propina = coste * 0.2;

//     }

//     else if(calidad == "excelente") {
//         propina = coste * 0.3;

//     }

//     else  {
//         propina = coste * 0.18;

//     }
//     return(calidad, propina);
    
// }
// console.log(tipCalculator ("fatal" , 10 ));
// console.log(tipCalculator ("ok" , 10 ));
// console.log(tipCalculator ("bueno" , 10 ));
// console.log(tipCalculator ("excelente" , 10));
// console.log(tipCalculator ("resto" , 10 ));

// function consola(numero) {

//     for (let index = 1; index <= numero;  index++) {
    
   

//     if (index %3 == 0 && index  %5 == 0) {
//         console.log("javascript"); 
//     }
    
//      else if (index %3 == 0 ) {
        
//         console.log("java");  
//     }

//     else if (index %5 == 0 ) {
//         console.log("script");  
//     }
    
//     else {
//         console.log(index);  
//     }
//     }
// }

// consola(100);


// 28
// function dameNum() {
//  for (let i = 1; i <= 10; i+=2) {
//     console.log(i);
//  }   
  
// }
// dameNum();

// let numeros = [1,2,3,4,5,6,7,8,9,10]; {
// }
// console.log(numeros);



// let aleatorio = [];
// for (let i = 1; i <= 10; i++) {
 
//    aleatorio.push(Math.round(Math.random() *10));
// }

// console.log(aleatorio);


// let colores = ["azul", "verde", "rosa", "naranja", "rojo", "marron"];

// let azul = colores[0];


// console.log(azul.charAt(0));

// SALFWORD RECAP 1

// let num = 5;

// for (let i = 5; i <= 50; i+=5) {


// console.log(i);    
// } 


// let num = 0;

// for (let i = 100; i >= 0; i-=5) {


// console.log(i);    
// } 
 
// let respuesta = "LISBOA";
// let acierto = false;
// for (let contador = 0; contador < 3; contador++) {
//     let respusuario = prompt("Capital de Portugal");
//     if (respusuario.toUpperCase() === respuesta) {
        
//     let acierto = true;
//     console.log("éxito");
//     }
//     break;
// }
// if (acierto = true) {console.log("le damos 2 intentos más.")

// };



// let respuesta = "LISBOA";
// let acierto = false;

// for (let contador = 0; contador < 3; contador++) {
//     let respusuario = prompt("Capital de Portugal");

//     if (respusuario.toUpperCase() === respuesta) {
//         let acierto = true;
//         console.log("éxito");
//     }
// } 
// if (acierto == false) {
//     console.log("error")
// };
// let respuesta = prompt("Capital de Portugal");
//  let prueba = 0;

// while (prueba < 3) {
//     console.log("prueba de nuevo");
//     prueba ++
// }
// console.log();

// let num = [1,2,3,4,5,6,7,8,9,10];

// let pares = num.filter(num => num % 2 == 0 );

// console.log(pares);

// let letras = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes',
// 'sabado', 'domingo'];

// let letra_m = letras.filter(letra =>  letra.charAt(0) === "m");

// console.log(letra_m);

// let num = [100, 2, 20, 35, 4, 44];

//  num.sort(function ordenar(a,b) { return a - b 
    
//  }); 
// function menor(params) { return params <=10
// }
// let resultado = num.filter (menor)

// console.log(resultado);
  
    
// dosEdadesMasAltas =[1, 2, 10, 8, 22, 3, 6, 12, 80, 4, 55, 19];

// dosEdadesMasAltas.sort(function ordenar(a,b) { return a - b 
    
//  }); 
// function mayor(params) { return params >=55
// }
// let resultado = dosEdadesMasAltas.filter (mayor)

// console.log(resultado);
  
// let potencia = [2, 4, 25];

// let elevado = potencia.map(function (x){
// return Math.pow (x,3)});

// console.log(elevado);

const dias1 = ['Lunes', 'Martes', 'Miércoles',
'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const dias2 = dias1.reduce((dia3,dia)=>{
    const primera = dia.substring(0,3);

    dia3.push(primera);

    return dia3;

},[]);

console.log(dias2);





const dias = [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ];

    const inicioDias = dias.reduce((diaCorto, dia)  =>{

        // encapsular la primera 3 letras en variable
        const primeraTresLetras = dia.substring(0, 3);

        // push esta variable en el array
        diaCorto.push(primeraTresLetras);

        // return del array
        return diaCorto;

    },[]);

console.log(inicioDias);