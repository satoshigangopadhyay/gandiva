"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Packages:
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const striptags_1 = __importDefault(require("striptags"));
// Exports:
exports.default = async (type) => {
    let address = '', link = '';
    switch (type) {
        case 'INDIAN':
            link = 'https://fakeaddressgenerator.com/World_more/India_address_generator';
            break;
        case 'PAKISTANI':
            link = 'https://fakeaddressgenerator.com/All_countries/address/country/Pakistan';
            break;
        case 'BANGLADESHI':
            link = 'https://fakeaddressgenerator.com/All_countries/address/country/Bangladesh';
            break;
        default:
            link = 'https://fakeaddressgenerator.com/World_more/India_address_generator';
            break;
    }
    const result = await axios_1.default.get(link);
    const $ = cheerio_1.default.load(result.data);
    $('.table.common-table.main > tbody').find('tr').each((i, element) => {
        if (i <= 4 && i !== 0) {
            const chunk = (0, striptags_1.default)($(element).find('td').next().html());
            address = address + (chunk === 'n/a' ? [44000, 71000, 91200, 21230, 22010, 54000, 69000, 13100, 25000, 46000, 47080, 75530, 74200][Math.floor(Math.random() * 13)].toString() : chunk);
            if (i === 3)
                address = address + ' - ';
            if (i !== 4 && i !== 3)
                address = address + ', ';
        }
    });
    return address;
};
