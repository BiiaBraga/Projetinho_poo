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
        console.log("Animal cadastrado com sucesso!")
    }

    //metodo listar Animais
    listarAnimais(): void{
        for(let animal of this.listaAnimal){
            animal.visualizar();
        }
    }

    //metodo atualizar animal
    atualizarAnimal(animal: Animal): void{
        let cont: number = 0;
        for(let indice of this.listaAnimal){
            if(indice.id == animal.id){
                this.listaAnimal[cont] = animal;
                console.log("Animal atualizado com sucesso!")
            }
            cont++;
        }
    }

    //metodo remover animal
    removerAnimal(id: number): void{

        try{
            let cont: number = 0;
            let encontrado: boolean = false;

            for(let animal of this.listaAnimal){
                if(animal.id == id){
                    this.listaAnimal.splice(cont,1);
                    console.log("Animal deletado com sucesso!")
                    encontrado = true;
                }
                cont++;
                
                if(encontrado==false){
                    throw new Error("Animal nao encontrado!");
                }
            }

        } catch (error: any){
            console.log(error.message);
        }
    }
}
