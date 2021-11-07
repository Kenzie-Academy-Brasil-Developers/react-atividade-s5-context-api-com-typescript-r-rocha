import "./style.css";
import { useCart } from "../../providers/Cart";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

const ProducList = () => {
    const { list, cart, addProduct, deleteProduct } = useCart();
    return (
        <>
        <div className="ContainerTitle">Produtos</div>
        <div className="Container List">
        {list && list.map((product: Product) =>
            <div key={product.id} className="Card ProductList">
                <img className="Image" src={product.image} alt={product.title} />
                <p className="Title">{product.title}</p>
                <p className="Price">{new Intl.NumberFormat('BRL', { style: 'currency', currency: 'BRL' }).format(product.price)}</p>
                <button className="btn-grad" type="submit" onClick={() => addProduct(product)}>ADICIONAR AO CARRINHO</button>
            </div>
        )}
        </div>
        <div className="ContainerTitle">Carrinho</div>
        <div className="Container Cart">
        {cart && cart.map((product: Product) =>
            <div key={product.id} className="Card Cart">
                <img className="Image" src={product.image} alt={product.title} />
                <p className="Title">{product.title}</p>
                <p className="Price">{new Intl.NumberFormat('BRL', { style: 'currency', currency: 'BRL' }).format(product.price)}</p>
                <button className="btn-grad" type="submit" onClick={() => deleteProduct(product)}>REMOVER</button>
            </div>
        )}
        </div>
        </>
    )
}

export default ProducList;