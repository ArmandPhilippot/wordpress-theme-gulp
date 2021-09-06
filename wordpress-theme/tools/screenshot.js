/**
 * screenshot.js
 *
 * Generate a screenshot (1200x900) of your homepage using Firefox and the URL
 * defined in your .env file.
 */
import playwright from 'playwright-firefox';
import options from './config/options.js';

const takeScreenshot = async () => {
	const browser = await playwright.firefox.launch();
	const context = await browser.newContext( options.playwright.browser );
	const page = await context.newPage();
	await page.goto( options.playwright.goTo );
	await page.screenshot( options.playwright.screenshot );
	await browser.close();
};

takeScreenshot();
