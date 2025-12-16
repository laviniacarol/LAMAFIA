import { useState } from "react";
import styles from "./Sale.module.scss";
import { useCart } from '../../contexts/CartContext'; 

import banner from "../../assets/imagens/banner.png";

import img1 from "../../assets/imagens/1.jpg";
import img2 from "../../assets/imagens/2.jpg";
import img3 from "../../assets/imagens/3.jpg";
import img4 from "../../assets/imagens/4.jpg";
import img5 from "../../assets/imagens/5.jpg";
import img6 from "../../assets/imagens/6.jpg";
import img7 from "../../assets/imagens/7.jpg";
import img8 from "../../assets/imagens/8.jpg";

import Cart from "../Cart";

const Sale: React.FC = () => {
  const { addToCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const produtos = [
    { id: "bella-training", img: img1, alt: "Bella Training", preco: "R$ 130,00" },
    { id: "pink-baby", img: img2, alt: "Pink", preco: "R$ 79,90" },
    { id: "top-azul", img: img3, alt: "Top Azul Elegante", preco: "R$ 79,90" },
    { id: "conjuntinho-faixa", img: img4, alt: "Conjuntinho Faixa Rosa", preco: "R$ 179,00" },
    { id: "conjunto-barbie", img: img5, alt: "Conjunto Barbie Mafia", preco: "R$ 189,00" },
    { id: "colecao-playboy", img: img6, alt: "Coleção Playboy", preco: "R$ 99" },
    { id: "top-bella", img: img7, alt: "Top Bella", preco: "R$ 112,90" },
    { id: "conjunto-hardworking", img: img8, alt: "Conjunto Hardworking", preco: "R$ 149,90" },
  ];

  const handleAddToCart = (produto: typeof produtos[0]) => {
    addToCart({
      id: produto.id,
      img: produto.img,
      alt: produto.alt,
      price: produto.preco.split(" - ")[0],
    });
    setCartOpen(true);
  };

  return (
    <>
      <div className={styles.page2}>
        <img src={banner} alt="Banner Loja" />
      </div>

      <section className={styles.trendingProduct} id="trending">
        <h2 className={styles.title}>
          FIGHT <span className={styles.red}>LIKE</span> A<span className={styles.red}>GIRL</span>
          <hr className={styles.hr} />
        </h2>

        <div className={styles.products}>
          {produtos.map((produto, index) => (
            <div key={index} className={styles.product}>
              <img src={produto.img} alt={produto.alt} />
              <div className={styles.productText}></div>
              <div className={styles.coracao}>
                <i className="bx bx-heart"></i>
              </div>
              <div className={styles.estrela}>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
              <div className={styles.preco}>
                <h1 className={styles.title}>Gym</h1>
                <h4>COM DESCONTO</h4>
                <p>{produto.preco}</p>
                <button
                  className={styles.botaoCarrinho}
                  onClick={() => handleAddToCart(produto)}
                >
                  Comprar agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Sale;
