import { toTitleCase } from './messages';
import { PATTERN } from './pattern';

export const PATTERN_ERRORS = (pattern: string | RegExp, key: string) :any =>{
    if (pattern == PATTERN.email) {
        return `Please enter a valid ${key.toLowerCase()}`;
    }
    if (pattern == PATTERN.alphaNumeric) {
        return `Please enter a valid ${key.toLowerCase()}`;
    }
    if (pattern == PATTERN.password) {
        return `${toTitleCase(key)} can not contain blank spaces`;
    }
    if (pattern == PATTERN.name) {
        return `${toTitleCase(key)} can not contain blank space, digits or special characters`;
    }
    if (pattern == PATTERN.phone) {
        return `${toTitleCase(key)} must contain only digits`;
    }
    if (pattern == PATTERN.price) {
        return `${toTitleCase(key)} must be numeric`;
    }
    if (pattern == PATTERN.zipcode) {
        return `Please enter a valid ${key.toLowerCase()}`;
    }
    if (pattern == PATTERN.validLink) {
        return `Please enter a valid ${key.toLowerCase()}`;
    }
    if (pattern == PATTERN.descArabic) {
        return `Please enter valid ${key.toLowerCase()}`;
    }
    if (pattern == PATTERN.colourHexCode) {
        return `Please enter a valid ${key.toLowerCase()}`;
    }
    if (pattern == PATTERN.subdomain) {
        return `Please enter a valid ${key.toLowerCase()}`;
    }
};
