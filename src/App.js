import "./App.css";
import ProductList from "./components/product-list";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";

function App() {
  return (
    <div className="App">
    
        <CatalogueProvider>
          <CartProvider>
          <h2>Produtos na Loja</h2>
            <ProductList type="catalogue" />
            <h2>Produtos no Carrino</h2>
            <ProductList type="cart" />
          </CartProvider>
        </CatalogueProvider>
     
    </div>
  );
}

export default App;
