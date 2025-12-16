import { useState } from "react";
import styles from "./Shoes.module.scss";
import { useCart } from '../../contexts/CartContext'; 

import tenisban from '../../assets/imagens/tenisban.png'
import tenis1 from '../../assets/imagens/tenis1.jpg'
import tenis2 from '../../assets/imagens/tenis2.jpg'
import tenis3 from '../../assets/imagens/tenis3.jpg'
import tenis4 from '../../assets/imagens/tenis4.jpg'

import Cart from "../Cart";

function Shoes() {
  const { addToCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const products = [
    { id: "tenis-preto", img: tenis1, alt: "Tênis preto", price: "R$ 399,90" },
    { id: "tenis-sola-rosa", img: tenis2, alt: "Tênis sola rosa", price: "R$ 429,90" },
    { id: "tenis-preto-branco", img: tenis3, alt: "Tênis preto e branco", price: "R$ 379,90" },
    { id: "tenis-bege", img: tenis4, alt: "Tênis bege", price: "R$ 359,90" },
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      img: product.img,
      alt: product.alt,
      price: product.price,
    });
    setCartOpen(true);
  };

  return (
    <>
      <img className={styles.banner} src={tenisban} alt="Banner de tênis" />
      <h2 className={styles.title}>
        NEW COLLECTION
        <hr className={styles.hr} />
      </h2>

      <div className={styles.container}>
        {products.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <img className={styles.tenis} src={item.img} alt={item.alt} />
            </div>
            <div className={styles.estrela}>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <span className={styles.price}>{item.price}</span>
            <button
              className={styles.button}
              onClick={() => handleAddToCart(item)}
            >
              COMPRE AGORA
            </button>
          </div>
        ))}
      </div>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default Shoes;
