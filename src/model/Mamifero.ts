/**
 * Autora: Beatriz Braga Silva
 * Data: 11/03
 */

//importações
import {Animal} from "./Animal"

//subclasse Mamifero
export class Mamifero extends Animal{

    //atributos
    //private _dente: string;
    private _dente!: string;    //pode iniciar vazio

    //construtor
    // constructor(dente: string){
    //     super();
    //     this._dente = dente;
    // }
    constructor(){super();} //inicia vazio

    //get
    public get dente(): string{
        return this._dente;
    }

    //set
    public set dente(dente: string){
        this._dente = dente;
    }

    //metodo alimentar
    public alimentar():void{
        this.alimentado = true;
        console.log(`${this.nome} [Mamifero] foi alimentado com leite!`);
    }

    //metodo visualizar
    public visualizar():void{
        super.visualizar();
        console.log(`Dentes: ${this._dente}`);
        console.log(`Sou um mamifero\n`);
    }

}