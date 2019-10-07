
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    items.map( u => {
        if (u[objPropName] === itemId) {
            debugger;
            return {...u, ...newObjProps}
        }
        return u;
    })
};