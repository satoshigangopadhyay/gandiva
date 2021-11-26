// Packages:
import axios from 'axios'
import cheerio from 'cheerio'
import striptags from 'striptags'


// Typescript:
import { TIndianSubcontinentCountry } from '../types'


// Exports:
export default async (
  type: TIndianSubcontinentCountry
) => {
  let address = '', link = ''
  switch(type) {
    case 'INDIAN': link = 'https://fakeaddressgenerator.com/World_more/India_address_generator'
      break
    case 'PAKISTANI': link = 'https://fakeaddressgenerator.com/All_countries/address/country/Pakistan'
      break
    case 'BANGLADESHI': link = 'https://fakeaddressgenerator.com/All_countries/address/country/Bangladesh'
      break
    default: link = 'https://fakeaddressgenerator.com/World_more/India_address_generator'
      break
  }
  const result = await axios.get(link)
  const $ = cheerio.load(result.data)
  $('.table.common-table.main > tbody').find('tr').each((i, element) => {
    if (i <= 4 && i !== 0) {
      const chunk = striptags($(element).find('td').next().html())
      address = address + (chunk === 'n/a' ? [ 44000, 71000, 91200, 21230, 22010, 54000, 69000, 13100, 25000, 46000, 47080, 75530, 74200 ][ Math.floor(Math.random() * 13) ].toString() : chunk)
      if (i === 3) address = address + ' - '
      if (i !== 4 && i !== 3) address = address + ', '
    }
  })
  return address
}
