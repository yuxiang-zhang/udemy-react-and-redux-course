import axios from "axios";

// customized instance of axios client
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID " + "Tlh8x_auuAmZxzdyy2MLOCGwyId_ZRZJjIxxOjtCisU",
    },
});
