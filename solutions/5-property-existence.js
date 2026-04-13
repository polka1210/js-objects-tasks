import _ from 'lodash';

// BEGIN
const countWords = (sentence) => {
    const words = _.words(sentence);
    const result = {};
    for (const word of words) {
        const lowerWord = word.toLowerCase();
        result[lowerWord] = (result[lowerWord] || 0) + 1;
    }
    return result;
};
export default countWords;
// END