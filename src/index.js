import ApiHandler from "./ApiHandler";
import CartModel from "./CartModel";
import ShowcaseModel from "./ShowcaseModel";
import EventEmitter from "./EventEmitter";

const API_URL = 'http://localhost:3000/api/v1'

const api = new ApiHandler(API_URL)
const eventEmitter = new EventEmitter()

const cart = new CartModel(api, eventEmitter)

const showcase = new ShowcaseModel(api, eventEmitter, cart)

eventEmitter.subscribe('showcaseFetched', (data) => {
    console.log(data)
})

eventEmitter.subscribe('cartFetched', (data) => {
    console.log(data)
})

showcase.fetch()
cart.fetch()