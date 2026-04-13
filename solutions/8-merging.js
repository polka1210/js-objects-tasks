import _ from 'lodash';

// BEGIN
const fill = (company, keys, data) => {
    if (keys.length === 0) {
        Object.assign(company, data);
    } else {
        const selectedData = _.pick(data, keys);
        Object.assign(company, selectedData);
    }
    return company;
};
export default fill;
// END