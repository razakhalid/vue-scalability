import Factory from "@/data/libs/Factory";
const model = "reviews";

const getAll = async (config) => {
    return await Factory.getAll({ model, config });
}

const getOne = async (id, config) => {
    return await Factory.getOne({ model, id, config });
}

const updateOne = async (id, config) => {
    return await Factory.updateOne({ model, id, config });
}

const deleteOne = async (id, config) => {
    return await Factory.deleteOne({ model, id, config });
}

const createOne = async (config) => {
    return await Factory.deleteOne({ model, config });
}

export default {
    getAll,
    getOne,
    updateOne,
    deleteOne,
    createOne
}