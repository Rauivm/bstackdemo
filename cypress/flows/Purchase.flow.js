import LoginPage from '../pages/Login.page.js';
import ProductsPage from '../pages/Products.page.js';
import CartPage from '../pages/Cart.page.js';


class PurchaseFlow {

  executeLogin(user) {
    LoginPage.openLogin();
    LoginPage.login(user.username, user.password);
  }

  addProduct(index) {
    ProductsPage.selectProductByIndex(index);
  }

  validateCart() {
    CartPage.validateDrawerVisible();
    CartPage.validateQuantity('1');
    CartPage.validateProductName();
    CartPage.validateSubtotal();
    CartPage.validateCheckoutEnabled();
  }

}

export default new PurchaseFlow();
