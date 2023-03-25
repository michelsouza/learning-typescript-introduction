export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    /**
     * Aqui tempos um problema a qual o valor 'return this.negociacoes' retorna uma referencia da lista
     * permitino assim alterações. Resolvendo: com spread operator (...), ficando 'return [...this.negociacoes]'
     */
    // lista(): Array<Negociacao> {
    lista() {
        return [...this.negociacoes];
        // É retornado um novo array com os valores do array, porem, nao é a lista original
    }
}
