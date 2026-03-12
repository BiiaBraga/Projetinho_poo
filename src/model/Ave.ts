/**
 * Autora: Beatriz Braga Silva
 * Data: 11/03
 */

//importações
import {Animal} from "./Animal"

//subclasse Ave
export class Ave extends Animal{

    //atributos
    private _voo!: boolean;

    //construtor
    // constructor(voo: boolean){
    //     super();
    //     this._voo = voo;
    // }
    constructor(){super();}

    //get
    public get voo(): boolean{
        return this._voo;
    }

    //set
    public set voo(voo: boolean){
        this._voo = voo;
    }

    //metodo alimentar
    public alimentar():void{
        this.alimentado = true;
        console.log(`${this.nome} [Ave] foi alimentado com frutas!`);
    }

    //metodo visualizar
    public visualizar():void{
        super.visualizar();
        console.log(`Voo: ${this._voo}`);
    }

}