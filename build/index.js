"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports:
const encodeurl_1 = __importDefault(require("encodeurl"));
const faker_1 = __importDefault(require("faker"));
const fixed_1 = require("set-interval-async/fixed");
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
// import tr from 'tor-request'
// import request from 'request'
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
// Functions:
const functions_1 = require("./functions");
const main = async ({ attackDuration, spamCount, hidden }) => {
    console.log(chalk_1.default.yellow.bold('🏹 gandiva - ') + 'initialising..');
    const rate = attackDuration ? (attackDuration * 1000 / spamCount) < 5000 ? 5000 : (attackDuration * 1000 / spamCount) : 5000;
    const possibleSpamCount = rate * spamCount > (attackDuration * 1000) ? ((attackDuration * 1000) / rate) : spamCount;
    const identities = [];
    const options = [
        [
            (0, encodeurl_1.default)('Yes').replace(/%20/g, '+'),
            (0, encodeurl_1.default)('No').replace(/%20/g, '+'),
            (0, encodeurl_1.default)('I would prefer another messaging platform.').replace(/%20/g, '+')
        ],
        [
            (0, encodeurl_1.default)('$5: Supporter Tier. Minimum donation per magazine for shipping out magazines and the labor put into Censorship.').replace(/%20/g, '+'),
            (0, encodeurl_1.default)('$6 - $10: Well-Wisher Tier. Donating $6 - $10 per magazine to help us compensate the folks who share their stories, space, and time with us').replace(/%20/g, '+'),
            (0, encodeurl_1.default)('$10 - $15: Companion Tier. Donating $10 - $15 per magazine in support of our podcast creation, and our live and recorded events.').replace(/%20/g, '+'),
            (0, encodeurl_1.default)('$16 - $20: Friend Tier. Donating in support of our SWANASA Stories Anthology project and our body of diverse contributors from all around the world!').replace(/%20/g, '+'),
            (0, encodeurl_1.default)('$21 - $50: Cheerleader Tier. Donating in support of our Black and Dalit centered reparations fund.').replace(/%20/g, '+'),
            (0, encodeurl_1.default)('$50+ : Co-Conspirator Tier. Donating supporting all the above and more; as a student-run organization, we constantly are supporting efforts to grow and learn. By donating, you are helping support our expanding efforts to expand Other Collective worldwide.').replace(/%20/g, '+')
        ]
    ];
    let currentSpamCount = 0;
    const timer = (0, fixed_1.setIntervalAsync)(async () => {
        try {
            const fakeCredentials = {
                name: (0, encodeurl_1.default)(faker_1.default.name.findName()).replace(/%20/g, '+'),
                address: (0, encodeurl_1.default)(faker_1.default.address.streetAddress(true) + ', ' +
                    faker_1.default.address.city() + ['', ' ' + faker_1.default.address.zipCode()][Math.round(Math.random())] + ', ' +
                    faker_1.default.address.country()).replace(/%20/g, '+'),
                email: (0, encodeurl_1.default)(faker_1.default.internet.email().split('@')[0] + '@' + ['gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'hotmail.co.uk', 'hotmail.fr', 'msn.com', 'mac.com'][Math.round(Math.random() * 8)])
            };
            const chosenOption = {
                canWeEmailYou: options[0][Math.floor(Math.random() * options[0].length)],
                donate: options[1][Math.floor(Math.random() * options[1].length)]
            };
            // NOTE: Edit the values in params:
            const params = {
                data: `entry.1884265043=${fakeCredentials.name}&entry.1299310772=${fakeCredentials.email}&entry.1195494698=${chosenOption.canWeEmailYou}&entry.99288464=${chosenOption.donate}&entry.513669972=Yes&entry.1195494698_sentinel=&entry.99288464_sentinel=&entry.513669972_sentinel=&fvv=1&partialResponse=%5Bnull%2Cnull%2C%224611978543640427450%22%5D&pageHistory=0&fbzx=4611978543640427450`,
                URL: 'https://docs.google.com/forms/d/e/1FAIpQLSc3ECWxmrE5utFesuwZKxppt3lSTSLZyocxejlFfnhptR0sNA/formResponse',
                referrer: 'https://docs.google.com/forms/d/e/1FAIpQLSc3ECWxmrE5utFesuwZKxppt3lSTSLZyocxejlFfnhptR0sNA/viewform?fbzx=4611978543640427450',
                cookie: 'S=spreadsheet_forms=jYngNZ9zyw0nH_ppyJb8zEW2-zXgIFEHHfs9EDl8LNY; COMPASS=spreadsheet_forms=CjIACWuJVxSvBiJM38n-UjNQKKX2r0zmPXhsd0cICAbBqYG2qJEpjMfTPnQaDRwqV_lVqRC17P-MBho0AAlriVf-eApDl-6hRImox-VT4-9qYzfh57Tgs10m_UKochcwJpBphRu48qydcSPpNox4HQ==; NID=511=FtSHKtmQoZ8mgJQdekzhLA2qPL1H9sfffJ9SoOZCZcdV9-SC2080QafHMcINJG3sSKQ2zk977qfoMUmOqdL9Nf9JoJYpeP7z2kAdW4hr6Wv2wBp09bv4tLGVnNl-DixXPGQmGXIxaobpmvWDiiW_wRG1owqJLiS2XW6BTFsSB9I'
            };
            const header = (0, functions_1.getHeader)(params.referrer, params.cookie);
            identities.push({
                name: fakeCredentials.name,
                email: fakeCredentials.email,
                canWeEmailYou: chosenOption.canWeEmailYou,
                donate: chosenOption.donate
            });
            fs_1.default.writeFileSync(`./identities-${Date.now()}.json`, JSON.stringify(identities), { encoding: 'utf-8' });
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
        message: 'do you want to be hidden?',
        filter: () => false
    }
]).then(answers => main(answers));
