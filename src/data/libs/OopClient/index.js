import axios from "axios";

class OopClient {
    constructor(initOptions) {

        if (OopClient._instance || OopClient._instance === initOptions.baseURL) {
            console.log('class already exists')
            return OopClient._instance;
        }

        console.log('class created')
        OopClient._instance = this;

        const defaultHeader = {
            "Content-Type": "application/json"
        };
        let { baseURL = null, headers } = initOptions;

        if (!baseURL) {
            throw new Error("baseURL must be defined")
        }

        this.baseURL = baseURL;
        this.headers = headers || defaultHeader;
    }

    //////////
    // CRUD
    runQueries(request) {
        try {
            return axios(request);
        } catch (err) {
            return {
                data: { error: error }
            }
        }
    }

    async create(config) {
        return await this.runQueries({
            headers: this.headers,
            baseURL: this.baseURL,
            method: "POST",
            ...config
        })
    }
    async delete(config) {
        return await this.runQueries({
            headers: this.headers,
            baseURL: this.baseURL,
            method: "DELETE",
            ...config
        })
    }
    async update(config) {
        return await this.runQueries({
            headers: this.headers,
            baseURL: this.baseURL,
            method: "UPDATE",
            ...config
        })
    }
    async patch(config) {
        return await this.runQueries({
            headers: this.headers,
            baseURL: this.baseURL,
            method: "PATCH",
            ...config
        })
    }
    async get(config) {
        console.debug(this.baseURL)
        return await this.runQueries({
            headers: this.headers,
            baseURL: this.baseURL,
            method: "GET",
            ...config
        })
    }
}


export default OopClient;