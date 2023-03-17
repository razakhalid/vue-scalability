import OopClient from "@/data/libs/OopClient";
const baseURL = "http://localhost:3005";

const createOne = async (model, config) => {
    const _OopClient = new OopClient({ baseURL })
    const _config = {
        url: model,
        ...config
    }
    const { data } = await _OopClient.create(_config);
    return data;
}

const getAll = async (options) => {
    const { model, config } = options;
    const _OopClient = new OopClient({ baseURL })
    const _config = {
        url: model,
        ...config
    }
    const { data } = await _OopClient.get(_config);
    return data;
}

const getOne = async (options) => {
    const { model, id, config } = options;
    const _OopClient = new OopClient({ baseURL })
    const _config = {
        url: `${model}/${id}`,
        ...config
    }
    const { data } = await _OopClient.get(_config);
    return data;
}

const updateOne = async (options) => {
    const { model, id, config } = options;
    const _OopClient = new OopClient({ baseURL })
    const _config = {
        url: `${model}/${id}`,
        ...config
    }
    const { data } = await _OopClient.patch(_config);
    return data;
}

const deleteOne = async (options) => {
    const { model, id, config } = options;
    const _OopClient = new OopClient({ baseURL })
    const _config = {
        url: `${model}/${id}`,
        ...config
    }
    const { data } = await _OopClient.delete(_config);
    return data;
}

export default {
    createOne,
    getAll,
    getOne,
    updateOne,
    deleteOne
}