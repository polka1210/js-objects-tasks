// BEGIN
const cloneShallow = (obj) => {
    const cloned = {};
    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            cloned[key] = obj[key];
        }
    }
    return cloned;
};
export default cloneShallow;
// END
