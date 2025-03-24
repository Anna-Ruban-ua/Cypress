import { menuItems } from "../support/constants";
import HomePage from "./page_objects/homePage"

describe('Navigation Tests', () => {
    const homePage = new HomePage;

    it("TC06 Header Navigation Test", () => {
        homePage.visitHomePage();

        menuItems.forEach(({ menuName, itemUrl, isDirectLink }) => {
        homePage.clickMenuToggleButton();

        if (isDirectLink) {
            homePage.clickHeaderLinkByUrl(itemUrl);
        } else {
            homePage.clickDropdownItem(menuName, itemUrl);
        }

        if (itemUrl) {
            homePage.getCurrentUrl().should("contain", itemUrl);
        } else {
            homePage.getDropDownMenuElement().should("be.visible");
        }
        });
    });
})