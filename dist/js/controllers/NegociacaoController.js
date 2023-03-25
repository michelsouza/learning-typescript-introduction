import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
export class NegociacaoController {
    // private negociacoes: Negociacoes
    // Se seto um valor, no caso new Negociacoes, ts ja entende que é uma variavel do tipo Negociacoes
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.limparFormulario();
    }
    criaNegociacao() {
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
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValue.value = '';
        this.inputData.focus();
    }
}
