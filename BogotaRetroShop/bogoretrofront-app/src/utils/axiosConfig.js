// En axiosConfig.js
export const base_url = "http://localhost:5000/api/"; // Asegúrate de que la URL base esté correcta

export const getConfig = () => {
    const token = localStorage.getItem('token'); // Asegúrate de que esta clave sea correcta
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
    };
};
