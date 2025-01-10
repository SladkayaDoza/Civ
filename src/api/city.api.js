import {instance} from "./base.api.js";

export const buy = (city_id) => {
    const response = instance.post("/buy", {
        "city_id": city_id
    });

    return response.data;
}