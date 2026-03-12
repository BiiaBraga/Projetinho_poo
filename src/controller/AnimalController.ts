/**
 * Autora: Beatriz Braga Silva
 * Data: 12/03
 */

//importações
import { Animal } from "../model/Animal";
import { AnimalRepository } from "../repository/AnimalRepository";

export class AnimalController implements AnimalRepository{
    
    private listaAnimal = new Array<Animal>();

    //metodo cadastrar
    cadastrarAnimal(animal: Animal): void{
        this.listaAnimal.push(animal);
    }

    //metodo listar Animais
    listarAnimais(): void{
        for(let animal of this.listaAnimal){
            animal.visualizar();
        }
    }
    
}
