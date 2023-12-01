import axios from "axios";

const storeConfig = axios.create({
    baseURL: 'https://store.staging.clickezy.com/api/v1'
})

export default storeConfig

