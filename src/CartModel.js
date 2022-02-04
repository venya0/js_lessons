import ProductList from "./ProductList";

export default class CartModel extends ProductList {
    constructor(apiHandler, eventEmitter) {
        super([]);
        this.api = apiHandler
        this.eventEmitter = eventEmitter
    }

    fetch(onError) {
        this.api.getCart(
            (data) => {
                this.list = JSON.parse(data)
                this.eventEmitter.emit('cartFetched', this.list)
        },
        onError
        )
    }
    add(product, onError) {
        this.api.addToCart(
            () => {
                this.list.push(product)
            },
            onError,
            product
        )
    }

    remove(id, onError) {
        if(this.find(id)) {
            this.api.removeFromCart(
                () => {
                    this.remove(id)
                },
                onError,
                this.list[index]
            )
        }
    }
}