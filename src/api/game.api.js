import {instance} from "./base.api.js";

export const getField = () => {
    const response = instance.get("/")

    // Добавить проверку на статус код и полученые данные и сделать поле с id root видимым
    return response.data
}