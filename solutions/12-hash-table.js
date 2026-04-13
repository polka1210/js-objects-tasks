import crc32 from 'crc-32';

// BEGIN
export const make = () => [];
const hash = (key) => Math.abs(crc32.str(String(key)));
export const set = (map, key, value) => {
    const index = hash(key);
    if (map[index] !== undefined) {
        const [existingKey] = map[index];
        if (existingKey === key) {
            map[index] = [key, value];
            return true;
        }
        return false;
    }
    map[index] = [key, value];
    return true;
};
export const get = (map, key, defaultValue = null) => {
    const index = hash(key);
    const entry = map[index];
    if (entry === undefined || entry[0] !== key) {
        return defaultValue;
    }
    return entry[1];
};
// END