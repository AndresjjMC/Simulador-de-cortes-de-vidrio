alert("Bienvenidos al simulador de cortes de Vencutter");
function totalIVA(){
    total = total * 1.21;
    alert("El total de su pedido es $" + total);
}
//Inicializacion de variables
let otroCorte = "si";
let vidrio; 
let espesor; 
let altura; 
let ancho; 
let corte; 
let total;

while (otroCorte != "no"){
    vidrio = parseInt(prompt("Ingrese el tipo de vidrio que quiere: \n1-Laminado \n2-Templado \n3-Flotado \n4-Doble Acristalamiento"));

    espesor = parseInt(prompt("Ingrese la espesor del corte: \n1-3mm \n2-4mm \n3-5mm \n4-6mm"));

    altura = parseFloat(prompt("Ingrese la altura en metros del corte"));

    ancho = parseFloat(prompt("Ingrese la ancho en metros del corte"));
    //Precio madera
    switch (vidrio){
        case 1:
            vidrio = 400;
            break;
        case 2:
            vidrio = 700;
            break;
        case 3:
            vidrio = 250;
            break;
        case 4:
            vidrio = 600;
            break;
        default:
            break;
    }
    corte = 0;
    switch (espesor){
        case 1:
            corte = (vidrio + (vidrio * 0.40)) * altura * ancho;
            break;
        case 2:
            corte = (vidrio + (vidrio * 0.90)) * altura * ancho;
            break;
        case 3:
            corte = (vidrio + (vidrio *0.25)) * altura * ancho;
            break;
        case 4:
            corte = (vidrio + (vidrio *0.80)) * altura * ancho;
            break;
        default:
            break;
    }
    total = + corte;
    otroCorte = prompt("Desea sumar otro corte? si/no");
}
totalIVA();

