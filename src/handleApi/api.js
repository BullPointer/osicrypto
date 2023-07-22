import axios from "axios";


async function getApi(apiLink) {
    // const apiLink = `https://api.api-ninjas.com/v1/cryptosymbols`;

    try {
        const response = await axios.get(apiLink, {
            headers: { 'X-Api-Key': import.meta.env.VITE_RAPIDAPI_KEY},
            contentType: 'application/json',
        })
        return response;
    } catch (error) {
        return error;
    }
}

export {
    getApi
}

