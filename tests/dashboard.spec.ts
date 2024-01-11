import { test, expect } from "@playwright/test";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://puntos-point-dashboard.vercel.app/";

test.beforeEach(async ({ page }) => {
  await page.goto(baseUrl);
});

test("7D button should apply a week range", async ({ page }) => {
  await page.click("text=7D");

  await expect(page).toHaveURL(`${baseUrl}?range=week`);
});

test("Month button should apply a month range", async ({ page }) => {
  await page.click("text=Este Mes");

  await expect(page).toHaveURL(`${baseUrl}?range=month`);
});

test("Six months button should apply six month range", async ({ page }) => {
  await page.click("text=6M");

  await expect(page).toHaveURL(`${baseUrl}?range=six-months`);
});

test("Year button should apply last year range", async ({ page }) => {
  await page.click("text=1A");

  await expect(page).toHaveURL(`${baseUrl}?range=year`);
});

test("dashboard button should be visible", async ({ page }) => {
  const dashboardButton = await page.getByRole("button", { name: "dashboard" });

  await expect(dashboardButton).toBeVisible();
});
