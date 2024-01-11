import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test("7D button should apply a week range", async ({ page }) => {
  await page.click("text=7D");

  await expect(page).toHaveURL("http://localhost:3000/?range=week");
});

test("Month button should apply a month range", async ({ page }) => {
  await page.click("text=Este Mes");

  await expect(page).toHaveURL("http://localhost:3000/?range=month");
});

test("Six months button should apply six month range", async ({ page }) => {
  await page.click("text=6M");

  await expect(page).toHaveURL("http://localhost:3000/?range=six-months");
});

test("Year button should apply last year range", async ({ page }) => {
  await page.click("text=1A");

  await expect(page).toHaveURL("http://localhost:3000/?range=year");
});

test("dashboard button should be visible", async ({ page }) => {
  const dashboardButton = await page.getByRole("button", { name: "dashboard" });

  await expect(dashboardButton).toBeVisible();
});
