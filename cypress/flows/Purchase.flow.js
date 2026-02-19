import LoginPage from '../pages/Login.page.js';
import ProductsPage from '../pages/Products.page.js';
import CartPage from '../pages/Cart.page.js';

class PurchaseFlow {

  executeLogin(user) {
    LoginPage.openLogin();
    LoginPage.login(user.username, user.password);
  }

  addProduct(product) {
    ProductsPage.selectProductByName(product.name);
  }

  validateCart(expectedQuantity) {
    CartPage.validateDrawerVisible();
    CartPage.validateQuantity(expectedQuantity);
    CartPage.validateProductName();
    CartPage.validateSubtotal(expectedQuantity);
    CartPage.validateCheckoutEnabled();
  }

}

export default PurchaseFlow;  
