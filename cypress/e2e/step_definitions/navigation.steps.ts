import { When } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/inventoryPage";

const inventoryPage = new InventoryPage();

When("I log out from the inventory menu", () => {
  inventoryPage.openMenu();
  inventoryPage.logout();
});
