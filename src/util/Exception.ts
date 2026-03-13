/**
 * Autora: Beatriz Braga Silva
 * Data: 13/03
 */

//importações
import readlinesync from 'readline-sync';

//variaveis e constantes
let opcao: number;

//laço 
while(true){

    //entrada
    opcao = readlinesync.questionInt("Digite 1 ou 2: ");

    try {
        //condição para verificar erro de entrada
        if(opcao != 1 && opcao !==2){
            throw new Error("Opcao invalida!");
        }

        console.log("Opcao escolhida: " + opcao);
    } catch (error: any){
        console.log(error.message);
    }

}