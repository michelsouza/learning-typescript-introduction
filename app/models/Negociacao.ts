export class Negociacao {

    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    // constructor(data: Date, quantidade: number, valor: number) {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }

    // Melhorando

    // constructor(private _data: Date, private _quantidade: number, private _valor: number) {}
    constructor(public readonly _data: Date, public readonly _quantidade: number, public readonly _valor: number) {}

    // Posso refazer todos es gets dizendo que o atributo é publico, porem, somente leitura apos criado

    // get quantidade(): number {
    //     return this._quantidade;
    // }

    // get valor(): number {
    //     return this._valor;
    // }

    /**
     * No caso de data, quando retornamos uma instancia da data, o Object Date possui metodos a qual é possivel setar uma nova data
     * tornando falha nossa regra de negócio, a qual, apos uma negociação ser criada, não ser possivel alterar seus dados
     * 
     * Para isso, retornamos uma outra data a partir da criada e não um acesso direto a data original
     * 
     * Antes
     * get data(): Date {
     *   return this._data;
     * }
     */
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
    
    get volume(): number {
        return this._quantidade * this._valor;
    }
}
