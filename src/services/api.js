import axios from 'axios'

const allExperiences = async (state) => {
    const peticion = await axios.get('http://localhost:3312/api/experiences');
    state(peticion.data)
}

export {
    allExperiences
}