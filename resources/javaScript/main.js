/* tien de entrea hasta el 14hrs
estructura html del proyecto
variables js necesaria
finciones esenciales del proceso a simula
objetos js
arrays
metodos de busqueda y filtrado sobre el array
1.mcodificsr ls funvionslifsf inicial del simular
2. identicar el flujo de trabaja de scrip em terminos d ecaptuea de entradas ingresadas por el usuario, procesamientos esencial del simulador y notificacio de resultados en forma de salida
---
objeticos especificos
1. capturar entradas mediante prompt()
2. declara variables y objetos necesarios para simular el proceso seleccionado
3. crear funciones y/0 metodos para realizar operaciones (suma,resta. concatenacion. division, porcentajes,etc).
4. efectuar un salida, que es el resultafo de los datps procedados la caul puede hacerse por alert() o console.log

*/


const ESPACIO = (" ");
const UVA = 18;
const ESPECIAL=33;
const santander_Clasica = 55.5;
const UIDU_Mila_supervielle = 52;


let $banco = document.getElementById('banco');
let bancos = ['Santander taza UVA', 'Santander taza ESPECIAL', 'Santander taza tradicional', 'IUDU MILA SUPERVILLER']
console.log(bancos)
function mostrarBancos(arreglo, lugar) {
    let elementos = '<option selected disables>--Seleccione--</option>'
    for (let i = 0; i < arreglo.length; i++) {
        elementos += '<option value="' + arreglo[i] + '"> ' + arreglo[i] + ' </option>'
    }
    lugar.innerHTML = elementos
}

mostrarBancos(bancos, $banco);



function Cliente(plata,cuotas){
    this.plata =plata;
    this.cuotas=cuotas;
    
}

function tazaDel18() {
    let plata = parseInt(document.getElementById("dinero_a_prestar").value);
    let cuotas = parseInt(document.getElementById("cantidad_de_cuotas").value);
    let cuotas_por_mes = plata / cuotas;
    let interes = cuotas_por_mes * UVA;
    let final_por_mes_18 = cuotas_por_mes + interes;
    const cliente2 = new Cliente(plata,cuotas);
    console.log(cliente2)
    if (cuotas >= 1 && cuotas <= 60){
        alert(`tu cuotas mensuales serian de ${ESPACIO}` + final_por_mes_18 + ` En caso de ser cuota UVA, recuerde que las cuotas pueden aumentar segun la inflacion del pais`);

    }

    else {
        alert("Los creditos prendarios solo van de 1 a 60")
    }
}


