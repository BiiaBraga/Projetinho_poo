/**
 * Autora: Beatriz Braga Silva
 * Data: 10/03
 */

//importações
export abstract class Animal{

    //atributos
    private _id!: number;
    private _nome!: string;
    private _idade!: number;
    private _especie!: string;
    private _cor!: string;
    private _alimentado!: boolean;

    //construtor
    // constructor(nome: string, idade: number, especie: string, cor: string){
    //    this._nome = nome;
    //    this._idade = idade;
    //    this._especie = especie;
    //    this._cor = cor;
    // }
    constructor(){};

    //get
    public get id(): number{
        return this._id;
    }
    public get nome(): string{
        return this._nome;
    }
    public get idade(): number{
        return this._idade;
    }   
    public get especie(): string{
        return this._especie;
    }
    public get cor(): string{
        return this._cor;
    }
    public get alimentado(): boolean{
        return this._alimentado;
    }

    //set
    public set id(valor: number){
        this._id = valor;
    }
    public set nome(valor: string){
        this._nome = valor;
    }
    public set idade(valor: number){
        this._idade = valor;
    }
    public set especie(valor: string){
        this._especie = valor;
    }
    public set cor(valor: string){
        this._cor = valor;
    }
    public set alimentado(valor: boolean){
        this._alimentado = valor;
    }

    //metodo alimentar - sempre protótipo
    public abstract alimentar():void;

    //metodo visualizar
    public visualizar(): void{
       console.log("\nInformacoes do animal cadastrado: ");
       console.log(`ID: ${this._id}`);  
       console.log(`Nome: ${this._nome}`);  
       console.log(`Idade: ${this._idade}`);
       console.log(`Especie: ${this._especie}`);
       console.log(`Cor: ${this._cor}`); 
       console.log(`Alimentado: ${this._alimentado}`); 
    }
    
}