import React, { useState } from "react";
import styles from './Acessory.module.scss'
import { useCart } from '../../contexts/CartContext'; 

import luvarosa from '../../assets/imagens/luvarosa.jpg'
import saco from '../../assets/imagens/saco.jpeg'
import luvapreta from '../../assets/imagens/rebook.jpg'
import garrafa from '../../assets/imagens/garrafa.jpeg'

import Cart from "../Cart";

function Acessory() {
  const { addToCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const products = [
    { id: "luva-rosa", img: luvarosa, alt: "Luva rosa", price: "R$ 399,90" },
    { id: "saco", img: saco, alt: "Saco", price: "R$ 429,90" },
    { id: "luva-preta", img: luvapreta, alt: "Luva preta", price: "R$ 379,90" },
    { id: "garrafa", img: garrafa, alt: "Garrafa", price: "R$ 189,90" },
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
      <h2 className={styles.title}>
        PARA TURBINAR SEU TREINO
        <hr className={styles.hr} />
      </h2>

      <div className={styles.container}>
        {products.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <img className={styles.acessory} src={item.img} alt={item.alt} />
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
  )
}

export default Acessory;
