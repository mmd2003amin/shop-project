const isInData = (state , name) => {
    const result = !!state.find(item => item.name === name); 
    return result;
};

const quantityCouant = (state , name) => {
    const index = state.findIndex(item => item.name == name);
    if(index === -1) {
        return false
    } else {
        return state[index].quantity;
    }
};

export { isInData , quantityCouant };