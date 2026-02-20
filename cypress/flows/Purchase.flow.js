import LoginPage from '../pages/Login.page.js';
import ProductsPage from '../pages/Products.page.js';
import CartPage from '../pages/Cart.page.js';

class PurchaseFlow {

  executeLogin(user) {
    LoginPage.openLogin();
    LoginPage.login(user.username, user.password);
  }

  addProduct(productName) {
    ProductsPage.selectProductByName(productName);
  }

  validateCart(expectedQuantity) {
    CartPage.validateDrawerVisible();
    CartPage.validateQuantity(String(expectedQuantity));
    CartPage.validateProductName();
    CartPage.validateSubtotal(expectedQuantity);
    CartPage.validateCheckoutEnabled();
  }

}

export default PurchaseFlow;  
