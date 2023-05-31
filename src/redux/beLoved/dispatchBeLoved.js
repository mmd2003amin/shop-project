const saveToBeloved = (data) => {
    return { type : "save" , payload:data }
};

const removeFromBeloved = (data) => {
    return { type : "remove" , payload:data }
};

export { saveToBeloved , removeFromBeloved };