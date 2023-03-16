export class NegociacaoController {

    private inputData;
    private inputQuantidade;
    private inputValue;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }

    adiciona() {
        console.log(this.inputData);
        console.log(this.inputQuantidade);
        console.log(this.inputValue);
    }
}
