// Imports:
import chalk from 'chalk'
import strictURIEncode from 'strict-uri-encode'
import { setIntervalAsync, clearIntervalAsync } from 'set-interval-async/fixed'
import faker from 'faker'
import usernameGenerator from './functions/usernameGenerator'
import { getHeader, clearLastLines } from './functions'
import fs from 'fs'
import axios from 'axios'
// import tr from 'tor-request'
// import request from 'request'
import inquirer from 'inquirer'


// Typescript:
import { IMainProps } from './types'


// Constants:
import PRESETS from './presets'


// Functions:
const main = async ({
  preset,
  attackDuration,
  spamCount,
  hidden
}: IMainProps) => {
  console.log(chalk.yellow.bold('🏹 gandiva - ') + 'initialising..')
  const timeID = Date.now()
  const rate = attackDuration ? (attackDuration * 1000 / spamCount) < 5000 ? 5000 : (attackDuration * 1000 / spamCount) : 5000
  const possibleSpamCount = rate * spamCount > (attackDuration * 1000) ? ((attackDuration * 1000) / rate) : spamCount
  const identities = []
  const optionsSet = PRESETS[ preset ].optionsSet
  let currentSpamCount = 0
  const timer = setIntervalAsync(async () => {
    try {
      const rootName = faker.name.findName()
      const fakeCredentials = {
        name: strictURIEncode([ rootName, rootName.toLowerCase() ][ Math.floor(Math.random() * 2) ]).replace(/%20/g, '+'),
        address: strictURIEncode(
          faker.address.streetAddress(true) + ', ' +
          faker.address.city() + ['', ' ' + faker.address.zipCode() ][ Math.round(Math.random()) ] + ', ' +
          faker.address.country()
        ).replace(/%20/g, '+'),
        email: strictURIEncode(usernameGenerator(rootName) + '@' + [ 'gmail.com', 'gmail.com', 'gmail.com', 'yahoo.com', 'yahoo.com', 'hotmail.com', 'hotmail.com', 'aol.com', 'hotmail.co.uk' ][ Math.floor(Math.random() * 9) ])
      }
      const chosenOption: any[] = []
      optionsSet.forEach((options, i) => {
        chosenOption[i] = options[ Math.floor(Math.random() * options.length) ]
      })
      const params = {
        data: PRESETS[ preset ].params.data(fakeCredentials, chosenOption),
        URL: PRESETS[ preset ].params.URL,
        referrer: PRESETS[ preset ].params.referrer,
        cookie: PRESETS[ preset ].params.cookie
      }
      const header = getHeader(params.referrer, params.cookie)
      identities.push({ fakeCredentials, chosenOption })
      fs.writeFileSync(`./identities-${ timeID }.json`, JSON.stringify(identities, null, '\t'), { encoding: 'utf-8' })
      if (!hidden) {
        await axios.post(params.URL, params.data, { headers: header })
      } else {
        // await tr.request.post({ url:params.URL, headers: header }).form()
      }
      currentSpamCount++
      if (currentSpamCount !== 1) clearLastLines(1)
      console.log(chalk.yellow.bold('🏹 gandiva - ') + `${ currentSpamCount }/${ possibleSpamCount } arrows discharged`)
      if (currentSpamCount >= possibleSpamCount) {
        console.log(chalk.yellow.bold('🏹 gandiva - ') + chalk.green('done!'))
        clearIntervalAsync(timer)
      }
    } catch(e) {
      console.log(chalk.yellow.bold('🏹 gandiva - ') + chalk.red('encountered an error. exiting..'))
      throw e
    }
  }, rate)
}

inquirer.prompt([
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
      // }
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
  }
]).then(answers => main(answers))
