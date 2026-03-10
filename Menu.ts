/**
 * Autora: Beatriz Braga Silva
 * Data: 10/03/2026
**/

//importações
import readlinesync = require("readline-sync");
import { Animal } from "./src/model/Animal";

//main
export function main() {
    
    //variaveis e constantes
    const cadastrarAnimal = new Array<Animal>();
    let continuar = true;
    // const animal = new Animal("Gato", 4, "Felino", "Preto");
    // const animal2 = new Animal("Cachorro", 3, "Canino", "Branco"); 
    // console.log(animal.nome);
    // console.log(animal.especie);
    // console.log(animal2.nome);
    // console.log(animal2.especie);

    do{
        const animal = new Animal();

        animal.nome = readlinesync.question("\nDigite o nome do animal: ");
        animal.idade = readlinesync.questionInt("Digite a idade do animal: ");
        animal.especie = readlinesync.question("Digite a especie do animal: ");
        animal.cor = readlinesync.question("Digite a cor do animal: ");
        
        cadastrarAnimal.push(animal);

        animal.vizualizar();

        continuar = readlinesync.keyInYNStrict("\nDeseja cadastrar outro animal?: ");

    }while(continuar);

    console.log("Lista de todos os animais:");
    for(let animal of cadastrarAnimal){
        animal.vizualizar();
    }
 
}

//inicia a chamada de funções
main();