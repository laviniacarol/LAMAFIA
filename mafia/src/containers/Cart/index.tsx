import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { useToast } from '../../contexts/ToastContext';
import styles from './Cart.module.scss';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const { addToast } = useToast();

  const handleRemove = (id: string, name: string) => {
    removeFromCart(id);
    addToast(`${name} removido do carrinho`, 'info');
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.cart} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Carrinho de Compras</h2>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>
        <div className={styles.items}>
          {cart.length === 0 ? (
            <p className={styles.empty}>Seu carrinho está vazio.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className={styles.item}>
                <img src={item.img} alt={item.alt} className={styles.itemImg} />
                <div className={styles.details}>
                  <p className={styles.name}>{item.alt}</p>
                  <p className={styles.price}>{item.price}</p>
                  <div className={styles.quantity}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className={styles.removeBtn} onClick={() => handleRemove(item.id, item.alt)}>Remover</button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className={styles.footer}>
            <p className={styles.total}>Total: R$ {total.toFixed(2).replace('.', ',')}</p>
            <button className={styles.checkoutBtn}>Finalizar Compra</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
