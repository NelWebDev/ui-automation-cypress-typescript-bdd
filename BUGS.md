# Known Bugs

## BUG-001: Checkout button remains enabled after removing all products from the cart

Status: Open

Related test: `@bug` scenario in `cypress/e2e/features/cart.feature`

### Steps to Reproduce

1. Open the Sauce Demo login page.
2. Log in with username `standard_user` and password `secret_sauce`.
3. Add the first product to the cart.
4. Open the cart.
5. Remove the product from the cart.

### Actual Result

The cart is empty, but the `Checkout` button remains enabled.

### Expected Result

The `Checkout` button should be disabled when the cart is empty.

### Impact

Users can start the checkout flow without any products in the cart.
