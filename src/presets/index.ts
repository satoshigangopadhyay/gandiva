// Packages:
import strictURIEncode from 'strict-uri-encode'
import getLeftistSentence from '../functions/getLeftistSentence'


// Constants:
const PRESETS = [
  {
    optionsSet: [
      [
        strictURIEncode('Yes').replace(/%20/g, '+'),
        strictURIEncode('Yes').replace(/%20/g, '+'),
        strictURIEncode('Yes').replace(/%20/g, '+'),
        strictURIEncode('No').replace(/%20/g, '+')
      ],
      [ 1, 1, 1, 2, 2, 3 ],
      [
        strictURIEncode('$5: Supporter Tier. Minimum donation per magazine for shipping out magazines and the labor put into Censorship.').replace(/%20/g, '+'),
        strictURIEncode('$6 - $10: Well-Wisher Tier. Donating $6 - $10 per magazine to help us compensate the folks who share their stories, space, and time with us').replace(/%20/g, '+'),
        strictURIEncode('$10 - $15: Companion Tier. Donating $10 - $15 per magazine in support of our podcast creation, and our live and recorded events.').replace(/%20/g, '+'),
        strictURIEncode('$16 - $20: Friend Tier. Donating in support of our SWANASA Stories Anthology project and our body of diverse contributors from all around the world!').replace(/%20/g, '+'),
        strictURIEncode('$21 - $50: Cheerleader Tier. Donating in support of our Black and Dalit centered reparations fund.').replace(/%20/g, '+'),
        strictURIEncode('$50+ : Co-Conspirator Tier. Donating supporting all the above and more; as a student-run organization, we constantly are supporting efforts to grow and learn. By donating, you are helping support our expanding efforts to expand Other Collective worldwide.').replace(/%20/g, '+')
      ]
    ],
    params: {
      data: (fakeCredentials: any, chosenOption: any[]) => `entry.1884265043=${ fakeCredentials.name }&entry.1627921496=${ fakeCredentials.address }&entry.1990086293=${ fakeCredentials.email }&entry.1212348438=${ chosenOption[1] }&entry.1195494698=${ chosenOption[0] }&entry.99288464=${ chosenOption[2] }&entry.513669972=Yes&entry.1195494698_sentinel=&entry.1212348438_sentinel=&entry.99288464_sentinel=&entry.513669972_sentinel=&fvv=1&partialResponse=%5Bnull%2Cnull%2C%22802096517564937586%22%5D&pageHistory=0&fbzx=802096517564937586`,
      URL: 'https://docs.google.com/forms/d/e/1FAIpQLSdxBMGtAifxa50pkMsiN5YS8ApJ4dsp86iDddk3wxM-xqJG-A/formResponse',
      referrer: 'https://docs.google.com/forms/d/e/1FAIpQLSdxBMGtAifxa50pkMsiN5YS8ApJ4dsp86iDddk3wxM-xqJG-A/viewform?fbzx=802096517564937586',
      cookie: 'S=spreadsheet_forms=1C2IAEwOeA0zNvsh4XJtBANS_YKIZAfQD0Jj0zVbZEM; COMPASS=spreadsheet_forms=CjIACWuJV3zwrjIUCCxTfE3DUB1E4AA9p22d7xIcEFORLg48HKgvZjTixNYWcEPU_GFHTRD03oKNBho0AAlriVcsnPCBFJbAq1UR8x1_hG7fldFsNM1yNXTu0J6gmjOHQ3TQDHlaW5LAY1U5kN4CRA==; NID=511=ccDyIxdp2rgkmbYLCYJwzRNqqhy2OKHJtpPjXDK_194Ebc6O94qHj6CkQqw4vmf6DL02yQ4hfM6jtCDKEFqX5UYfC8A8PSW5Sr1c2tju_ZP_XlxCipiBmw2fiYmJb276-EA5CWkIzpzMv4iNpCRSy7zrkvlU63bl7MyV3Eu1kU4; 1P_JAR=2021-11-26-07'
    }
  },
  {
    optionsSet: [
      [
        strictURIEncode('Yes').replace(/%20/g, '+'),
        strictURIEncode('Yes').replace(/%20/g, '+'),
        strictURIEncode('Yes').replace(/%20/g, '+'),
        strictURIEncode('No').replace(/%20/g, '+'),
        strictURIEncode('I would prefer another messaging platform.').replace(/%20/g, '+')
      ],
      [
        strictURIEncode('$5: Supporter Tier. Minimum donation per magazine for shipping out magazines and the labor put into Censorship.').replace(/%20/g, '+'),
        strictURIEncode('$6 - $10: Well-Wisher Tier. Donating $6 - $10 per magazine to help us compensate the folks who share their stories, space, and time with us').replace(/%20/g, '+'),
        strictURIEncode('$10 - $15: Companion Tier. Donating $10 - $15 per magazine in support of our podcast creation, and our live and recorded events.').replace(/%20/g, '+'),
        strictURIEncode('$16 - $20: Friend Tier. Donating in support of our SWANASA Stories Anthology project and our body of diverse contributors from all around the world!').replace(/%20/g, '+'),
        strictURIEncode('$21 - $50: Cheerleader Tier. Donating in support of our Black and Dalit centered reparations fund.').replace(/%20/g, '+'),
        strictURIEncode('$50+ : Co-Conspirator Tier. Donating supporting all the above and more; as a student-run organization, we constantly are supporting efforts to grow and learn. By donating, you are helping support our expanding efforts to expand Other Collective worldwide.').replace(/%20/g, '+')
      ]
    ],
    params: {
      data: (fakeCredentials: any, chosenOption: string[]) => `entry.1884265043=${ fakeCredentials.name }&entry.1299310772=${ fakeCredentials.email }&entry.1195494698=${ chosenOption[0] }&entry.99288464=${ chosenOption[1] }&entry.513669972=Yes&entry.1195494698_sentinel=&entry.99288464_sentinel=&entry.513669972_sentinel=&fvv=1&partialResponse=%5Bnull%2Cnull%2C%224611978543640427450%22%5D&pageHistory=0&fbzx=4611978543640427450`,
      URL: 'https://docs.google.com/forms/d/e/1FAIpQLSc3ECWxmrE5utFesuwZKxppt3lSTSLZyocxejlFfnhptR0sNA/formResponse',
      referrer: 'https://docs.google.com/forms/d/e/1FAIpQLSc3ECWxmrE5utFesuwZKxppt3lSTSLZyocxejlFfnhptR0sNA/viewform?fbzx=4611978543640427450',
      cookie: 'S=spreadsheet_forms=jYngNZ9zyw0nH_ppyJb8zEW2-zXgIFEHHfs9EDl8LNY; COMPASS=spreadsheet_forms=CjIACWuJVxSvBiJM38n-UjNQKKX2r0zmPXhsd0cICAbBqYG2qJEpjMfTPnQaDRwqV_lVqRC17P-MBho0AAlriVf-eApDl-6hRImox-VT4-9qYzfh57Tgs10m_UKochcwJpBphRu48qydcSPpNox4HQ==; NID=511=FtSHKtmQoZ8mgJQdekzhLA2qPL1H9sfffJ9SoOZCZcdV9-SC2080QafHMcINJG3sSKQ2zk977qfoMUmOqdL9Nf9JoJYpeP7z2kAdW4hr6Wv2wBp09bv4tLGVnNl-DixXPGQmGXIxaobpmvWDiiW_wRG1owqJLiS2XW6BTFsSB9I'
    }
  },
  null,
  {
    optionsSet: [
      [
        strictURIEncode('Indian Occupied Kashmir').replace(/%20/g, '+'),
        strictURIEncode('India').replace(/%20/g, '+'),
        strictURIEncode('India').replace(/%20/g, '+'),
        strictURIEncode('India').replace(/%20/g, '+'),
        strictURIEncode('Other').replace(/%20/g, '+')
      ]
    ],
    params: {
      data: (fakeCredentials: any, chosenOption: any[]) => `entry.360475397=${ fakeCredentials.firstName }&entry.867153817=${ fakeCredentials.lastName }&entry.400424234=${ fakeCredentials.email }&entry.591877433=${ [ strictURIEncode(getLeftistSentence()).replace(/%20/g, '+'), strictURIEncode(getLeftistSentence()).replace(/%20/g, '+'), strictURIEncode(getLeftistSentence()).replace(/%20/g, '+') + '+' + strictURIEncode(getLeftistSentence()).replace(/%20/g, '+') ][ Math.floor(Math.random() * 3) ] }&entry.2081813454=${ chosenOption[0] }&dlut=1637939379864&entry.2081813454_sentinel=&fvv=1&partialResponse=%5Bnull%2Cnull%2C%22-7713807496820752134%22%5D&pageHistory=0&fbzx=-7713807496820752134`,
      URL: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfMVQzxOCfcESVSdeO5Okm6BgfHnZBxFjHnxL3WRmdjEGwGOQ/formResponse',
      referrer: 'https://docs.google.com/forms/d/e/1FAIpQLSfMVQzxOCfcESVSdeO5Okm6BgfHnZBxFjHnxL3WRmdjEGwGOQ/viewform?fbzx=-7713807496820752134',
      cookie: 'S=spreadsheet_forms=CqNtfNqHjFvvRQPZRxQMMhFmV-BZorz91jELEt7OzzA; COMPASS=spreadsheet_forms=CjIACWuJV6ie23O9ZRxKusWV_cs4i1D5g9pdSgUZP4HEYOKHC362utP1yH7QSbFhcDiTORDDjYSNBho0AAlriVfrYWbnM3UwYB0I3hbYPFEOnfmu66cik_-9dyf0TKXs3tEADGdSxeEte67nmk1W5w==; SID=DwgGc4AhBnkkORL9W8uAfRVtGqJim4WaJm9W3Nz0IBwxzPWjNhnMeOqBdyyIy0jZs6dUMg.; __Secure-1PSID=DwgGc4AhBnkkORL9W8uAfRVtGqJim4WaJm9W3Nz0IBwxzPWjnBaZ7xcX7w7vJFaL2wkAVw.; __Secure-3PSID=DwgGc4AhBnkkORL9W8uAfRVtGqJim4WaJm9W3Nz0IBwxzPWjk09J3YEKrq2NuTCBhOc2Fw.; HSID=ADQD_A0Ex7xrahHm-; SSID=AQ9gwa91P2MnAOkjX; APISID=pFGw9lEo065sFo78/AzOX9OwEC2Lgf85ut; SAPISID=P9Oq6o182yiyxzMi/Au6hwlbZJ-d3wr-gr; __Secure-1PAPISID=P9Oq6o182yiyxzMi/Au6hwlbZJ-d3wr-gr; __Secure-3PAPISID=P9Oq6o182yiyxzMi/Au6hwlbZJ-d3wr-gr; SEARCH_SAMESITE=CgQIhZQB; 1P_JAR=2021-11-25-10; NID=511=hvhr2plCTsMR4KnyVQU2BWIgGGujS5vUUlxZQjJWr-M2TIGmSQbu00TQ0bqihHidpQu2ZT_wCDDATvHZlAwpSZQCpDrlewW1LchIErvp2zEuGanRLn2pZ1K7bsuZqarSsvhvlcFAaqo6-97BayGuqeJZNpJ7jksj55-y7Vxr59itoyCdD8LW6OLbJFxl0pzGRXHjyYAv1r3bruH0-x22nYWP8Elyy5yKYhwrRc0gkqDjHRllublIY1kiBi4; SIDCC=AJi4QfFgGON4aS1uVo_C5On01-gld09Eyaj8BXmt3rfjVDfE1TA8-6j61TeQXH88Z2M8auGfIA; __Secure-3PSIDCC=AJi4QfE1Si7-rFJDwgGvmyELPjZQhNehOepA_BFAHwckYqYobqh-Ack5hHmbEs6IIJS829c3cA'
    }
  },
]


// Exports:
export default PRESETS
