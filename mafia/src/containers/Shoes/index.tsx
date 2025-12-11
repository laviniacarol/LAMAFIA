import styles from './Shoes.module.scss'

import tenisban from '../../assets/imagens/tenisban.png'

import tenis1 from '../../assets/imagens/tenis1.jpg'
import tenis2 from '../../assets/imagens/tenis2.jpg'
import tenis3 from '../../assets/imagens/tenis3.jpg'
import tenis4 from '../../assets/imagens/tenis4.jpg'

function Shoes() {
  const products = [
    { img: tenis1, alt: "Tênis preto", price: "R$ 399,90" },
    { img: tenis2, alt: "Tênis sola rosa", price: "R$ 429,90" },
    { img: tenis3, alt: "Tênis preto e branco", price: "R$ 379,90" },
    { img: tenis4, alt: "Tênis bege", price: "R$ 359,90" },
  ]

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
            <button className={styles.button}>COMPRE AGORA</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Shoes
