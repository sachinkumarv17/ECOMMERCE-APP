import './App.css'
import { sampleProducts } from './data'

function App() {

  return (
    <div>
      <header>
        Amazon
      </header>
      <main>
        <ul>
        {
        sampleProducts.map((product) => (
        <li key={product.slug}>
          <img src={product.image} alt={product.name} className="product-images" />
          <h2>{product.name}</h2>
          <p>Rs. {product.price}</p>
        </li>))
        }
        </ul>
      </main>
      <footer>
          all right are reserved.
        </footer>
    </div>
  )
}

export default App
