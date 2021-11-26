"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Packages:
const unique_names_generator_1 = require("unique-names-generator");
// Exports:
exports.default = (name) => {
    // 1/5 chance of not using name at all, generating a new username
    if (Math.floor(Math.random() * 5) === 0) {
        name = (0, unique_names_generator_1.uniqueNamesGenerator)({
            dictionaries: [unique_names_generator_1.adjectives, unique_names_generator_1.animals, unique_names_generator_1.colors],
            separator: ['_', '', '', '.'][Math.floor(Math.random() * 4)],
            length: 2
        });
    }
    else {
        const nameSections = name.toLocaleLowerCase().split(' ');
        // shorten first or last or none.
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                nameSections[0] = nameSections[0][0];
                break;
            case 1:
                nameSections[nameSections.length - 1] = nameSections[nameSections.length - 1][0];
                break;
            case 2: break;
            default: break;
        }
        // join with '.' or nothing (x2).
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                name = nameSections.join('.');
                break;
            case 1:
                name = nameSections.join('');
                break;
            case 2:
                name = nameSections.join('');
                break;
            default:
                name = nameSections.join('');
                break;
        }
    }
    // postpend random number (0-80), year (90-10), full year (1990-2010), or none.
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            name = name + Math.floor(Math.random() * 80);
            break;
        case 1:
            name = name + Math.floor((Math.random() * (2010 - 1990 + 1)) + 1990).toString().slice(-2);
            break;
        case 2:
            name = name + Math.floor((Math.random() * (2010 - 1990 + 1)) + 1990);
            break;
        case 3: break;
        default: break;
    }
    return name;
};
