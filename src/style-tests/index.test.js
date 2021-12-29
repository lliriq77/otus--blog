import puppeteer from "puppeteer";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

describe("styles.test", () => {
  let originalTimeout;

  beforeEach(() => {
    originalTimeout = jest.DEFAULT_TIMEOUT_INTERVAL;
    jest.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });
  afterEach(() => {
    jest.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
  [
    { width: 1920, height: 1080 },
    { width: 600, height: 1080 },
  ].forEach(({ width, height }) =>
    it(`should have proper view for ${width}x${height} params`, async () => {
      // setting up puppeteer
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      // set current view port size
      await page.setViewport({ width, height });
      // navigate to the page, served with webpack
      // IMPORTANT!: test assumes webpack is started
      await page.goto("http://localhost:9000", { waitUntil: "networkidle0" });

      const image = await page.screenshot();
      await browser.close();

      expect(image).toMatchImageSnapshot(
        process.env.CI
          ? {
              failureThreshold: 10.0,
              failureThresholdType: "percent",
            }
          : undefined
      );
    })
  );

  [
    { width: 1920, height: 1080 },
    { width: 600, height: 1080 },
  ].forEach(({ width, height }) =>
    it(`should have proper view for ${width}x${height} params`, async () => {
      // setting up puppeteer
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      // set current view port size
      await page.setViewport({ width, height });
      // navigate to the page, served with webpack
      // IMPORTANT!: test assumes webpack is started
      await page.goto("http://localhost:9000/blog.html", {
        waitUntil: "networkidle0",
      });

      const image = await page.screenshot();
      await browser.close();

      expect(image).toMatchImageSnapshot(
        process.env.CI
          ? {
              failureThreshold: 10.0,
              failureThresholdType: "percent",
            }
          : undefined
      );
    })
  );

  [
    { width: 1920, height: 1080 },
    { width: 600, height: 1080 },
  ].forEach(({ width, height }) =>
    it(`should have proper view for ${width}x${height} params`, async () => {
      // setting up puppeteer
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      // set current view port size
      await page.setViewport({ width, height });
      // navigate to the page, served with webpack
      // IMPORTANT!: test assumes webpack is started
      await page.goto("http://localhost:9000/blog-01.html", {
        waitUntil: "networkidle0",
      });

      const image = await page.screenshot();
      await browser.close();

      expect(image).toMatchImageSnapshot(
        process.env.CI
          ? {
              failureThreshold: 10.0,
              failureThresholdType: "percent",
            }
          : undefined
      );
    })
  );

  [
    { width: 1920, height: 1080 },
    { width: 600, height: 1080 },
  ].forEach(({ width, height }) =>
    it(`should have proper view for ${width}x${height} params`, async () => {
      // setting up puppeteer
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      // set current view port size
      await page.setViewport({ width, height });
      // navigate to the page, served with webpack
      // IMPORTANT!: test assumes webpack is started
      await page.goto("http://localhost:9000/feedback.html", {
        waitUntil: "networkidle0",
      });

      const image = await page.screenshot();
      await browser.close();

      expect(image).toMatchImageSnapshot(
        process.env.CI
          ? {
              failureThreshold: 10.0,
              failureThresholdType: "percent",
            }
          : undefined
      );
    })
  );
});
