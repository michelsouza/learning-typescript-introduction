import {Negociacao} from "../models/Negociacao.js";

export class NegociacaoController {

    private inputData: HTMLInputElement; // tipo contigo no ts para elementos do tipo inport de form
    private inputQuantidade: HTMLInputElement;
    private inputValue: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        /**
         * mesmo inputData sendo declarado do tipo HTMLInputElment, por default, t-odo input retorna uma string
         * logo, é preciso converter estes valores para seus respectivos, segundo sua declaracao
         */
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const value = parseFloat(this.inputValue.value);

        return new Negociacao(date, quantidade, value);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValue.value = '';
        this.inputData.focus();
    }
}
