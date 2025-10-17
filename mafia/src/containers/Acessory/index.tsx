import styles from './Acessory.module.scss'


import luvarosa from '../../assets/imagens/luvarosa.jpg'
import saco from '../../assets/imagens/saco.jpeg'
import luvapreta from '../../assets/imagens/rebook.jpg'
import garrafa from '../../assets/imagens/garrafa.jpeg'

function Acessory() {
  const products = [
    { img: luvarosa, alt: "Luva rosa", price: "R$ 399,90" },
    { img: saco, alt: "Saco", price: "R$ 429,90" },
    { img: luvapreta, alt: "Luva preta", price: "R$ 379,90" },
    { img: garrafa, alt: "Garrafa", price: "R$ 189,90" },
  ]

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
            <button className={styles.button}>COMPRE AGORA</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Acessory
