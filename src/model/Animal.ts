/**
 * Autora: Beatriz Braga Silva
 * Data: 10/03/2026
**/

//classe Animal
export class Animal{

    //atributos
    private _nome!: string;
    private _idade!: number;
    private _especie!: string;
    private _cor!: string;

    //construtor
    // constructor(nome:string, idade:number, especie:string, cor:string){
    //     this._nome=nome;
    //     this._idade=idade;
    //     this._especie=especie;
    //     this._cor=cor;
    // }
    constructor(){}

    //get
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

    //set
    public set nome(nome:string) {
        this._nome = nome;
    }
    public set idade(idade:number) {
        this._idade =idade;
    }
    public set especie(especie:string) {
        this._especie = especie;
    }
    public set cor(cor:string) {
        this._cor = cor;
    }

    public vizualizar(): void{
        console.log(`\nNome: ${this._nome}\nIdade: ${this._idade}\nEspecie: ${this._especie}\nCor: ${this._cor}`)
    }
    


}