import {
  DataTable,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/inventoryPage";

const inventoryPage = new InventoryPage();

Then("products should be sorted correctly with these options", (table: DataTable) => {
  const assertions: Record<string, () => void> = {
    "name ascending": () => inventoryPage.assertProductNamesSortedAscending(),
    "name descending": () => inventoryPage.assertProductNamesSortedDescending(),
    "price ascending": () => inventoryPage.assertProductPricesSortedAscending(),
    "price descending": () => inventoryPage.assertProductPricesSortedDescending(),
  };

  table.hashes().forEach(({ option, sortOrder }) => {
    inventoryPage.sortProductsBy(option);
    assertions[sortOrder]();
  });
});
