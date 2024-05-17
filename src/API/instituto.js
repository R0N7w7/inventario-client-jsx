const BASE_URL = 'http://localhost:3000/API/';

export const getInstitutos = async () => {
    try {
        const response = await fetch(`${BASE_URL}/institutos/`);
        if (!response) {
            throw new Error('No se pudo obtener los datos');
        }
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export const createInstituto = async (institutoData) => {
    try {
        const response = await fetch(`${BASE_URL}/institutos/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(institutoData)
        });
        if (!response.ok) {
            throw new Error('No se pudo crear el instituto');
        }
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getInstitutoDetail = async () => {
    try {
        const response = await fetch(`${BASE_URL}/institutos/detail/`);
        if (!response.ok) {
            throw new Error('No se pudo obtener el detalle del instituto');
        }
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export const updateInstituto = async (id, institutoData) => {
    try {
        const response = await fetch(`${BASE_URL}/institutos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(institutoData)
        });
        if (!response.ok) {
            throw new Error('No se pudo actualizar el instituto');
        }
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export const deleteInstituto = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/institutos/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('No se pudo eliminar el instituto');
        }
        return response.json(); // Puedes cambiar esto si la API devuelve un mensaje de éxito
    } catch (error) {
        console.error(error);
    }
}

export const getInstitutoById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/institutos/${id}`);
        if (!response.ok) {
            throw new Error('No se pudo obtener el instituto');
        }
        return response.json();
    } catch (error) {
        console.error(error);
    }
}