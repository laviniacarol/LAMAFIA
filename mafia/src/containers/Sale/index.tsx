import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sale.module.scss";

// Banner
import banner from "../../assets/imagens/banner.png";

// Produtos
import img1 from "../../assets/imagens/1.jpg";
import img2 from "../../assets/imagens/2.jpg";
import img3 from "../../assets/imagens/3.jpg";
import img4 from "../../assets/imagens/4.jpg";
import img5 from "../../assets/imagens/5.jpg";
import img6 from "../../assets/imagens/6.jpg";
import img7 from "../../assets/imagens/7.jpg";
import img8 from "../../assets/imagens/8.jpg";

const Sale: React.FC = () => {
  const produtos = [
    { img: img1, alt: "Bella Training", preco: "$130,00" },
    { img: img2, alt: "Pink Baby", preco: "$79,90 - $179,00" },
    { img: img3, alt: "Top Azul Elegante", preco: "$79,90" },
    { img: img4, alt: "Conjuntinho Faixa Rosa", preco: "$179,00" },
    { img: img5, alt: "Conjunto Barbie Mafia", preco: "$189,00" },
    { img: img6, alt: "Coleção Playboy", preco: "$99 - $129" },
    { img: img7, alt: "Top Bella", preco: "$112,90" },
    { img: img8, alt: "Conjunto Hardworking", preco: "$149,90" },
  ];

  return (
    <>
      <div className={styles.page2}>
        <img src={banner} alt="Banner Loja" />
      </div>

      <section className={styles.trendingProduct} id="trending">
        <div className={styles.centerText}>
          <h2>
            Nossa coleção <span>fight like a girl</span>
          </h2>
        </div>

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
                <Link to="/checkout" className={styles.botaoCarrinho}>
                  Comprar agora
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Sale;
