/**
 * Autora: Beatriz Braga Silva
 * Data: 12/03
 */

//importações
import {Animal} from "../model/Animal";

//interface
export interface AnimalRepository {
    
    //CRUD de Animal
    cadastrarAnimal(animal: Animal): void;
    listarAnimais(): void;
    atualizarAnimal(animal: Animal): void;
    removerAnimal(id: number): void;
}