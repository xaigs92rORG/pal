import {chromium} from 'playwright-chromium'
import process from 'process'

const browser = await chromium.launch({channel:'chrome', args:['--disable-blink-features=AutomationControlled', '--start-maximized'], headless:false})//default_args https://github.com/microsoft/playwright/blob/5faf6f9e69c2148e94c81675fb636eb31a02b5e7/src%2Fserver%2Fchromium%2Fchromium.ts#L78
const devcloud = await browser.newPage({recordVideo:{dir:'videos'}, viewport:null})
await devcloud.goto('https://www.intel.com/content/www/us/en/my-intel/devcloud-sign-in.html')
await devcloud.fill('input#txtUsername', 'chaowen.guo1@gmail.com')
await devcloud.fill('input#txtPassword', process.argv.at(2))
await devcloud.click('input#formSubmit')
await devcloud.click('h3#promo-main-heading-1>a')
await devcloud.click('li[_ngcontent-epo-c77]:nth-of-type(2)')
await devcloud.waitForTimeout(30 * 1000)
await browser.close()