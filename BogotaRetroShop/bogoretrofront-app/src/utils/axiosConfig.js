// En axiosConfig.js
export const base_url = "http://localhost:5000/api/"; // Asegúrate de que la URL base esté correcta

export const getConfig = () => {
    const tokenData = localStorage.getItem('customer');
    const token = tokenData ? JSON.parse(tokenData).token : "";
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
    };
};
