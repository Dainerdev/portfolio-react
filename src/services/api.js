const api_url = ("http://localhost:3312/api/experiences");

export const getExperiences = async () => {
    const response = await fetch(api_url);
    return response.json();
};

export const getByIdExperience = async (id) => {
    const response = await fetch(`${api_url}/${id}`);
    return response.json();
};

export const createExperience = async (experience) => {
    const response = await fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(experience),
    });
    return response.json();
};

export const updateExperience = async (id, experience) => {
    const response = await fetch(`${api_url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(experience),
    });
    return response.json();
};

export const deleteExperience = async (id) => {
    await fetch(`${api_url}/${id}`, {
        method: 'DELETE',
    });
};