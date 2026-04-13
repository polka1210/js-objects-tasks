// BEGIN
const make = (name, additionalProps = {}) => {
    const defaultProps = {
        state: 'moderating',
        createdAt: Date.now(),
    };
    return {
        name,
        ...defaultProps,
        ...additionalProps,
    };
};
export default make;
// END