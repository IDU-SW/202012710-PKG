export const addResident = (animal) => {
    return {
        type:'add', payload : animal
    }
}

export const removeResident = (animalId) => {
    return {
        type:'remove', payload : animalId
    }
}