import {Negociacao} from "./Negociacao";

export class Negociacoes {
    // Array<Negociacao>
    // é igual a 
    // Negociacao[]

    // private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    /**
     * Aqui tempos um problema a qual o valor 'return this.negociacoes' retorna uma referencia da lista
     * permitino assim alterações. Resolvendo: com spread operator (...), ficando 'return [...this.negociacoes]'
     */
    // lista(): Array<Negociacao> {
    // ==
    // lista(): ReadonlyArray<Negociacao> {
    // ==
    // lista(): readonly Negociacao[]
    lista(): readonly Negociacao[] {
        return [...this.negociacoes];
        // É retornado um novo array com os valores do array, porem, nao é a lista original
    }
}
