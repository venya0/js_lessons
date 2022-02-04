import ProductList from "./ProductList"

export default class ShowcaseModel extends ProductList {
    constructor(apiHandler, eventEmitter, cart) {
        super([])
        this.api = apiHandler
        this.eventEmitter = eventEmitter
        this.cart = cart
    }

    fetch(onError) {
        this.api.getCatalog(
            (data) => {
                this.list = JSON.parse(data)
                this.eventEmitter.emit('showcaseFetched', this.list)
        },
        onError
        )
    }

    buy(id, onError) {
        const product = this.find(id)
        if(product) cart.add(product, onError)
        
    }
}