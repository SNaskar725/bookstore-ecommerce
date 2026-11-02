import { X, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";

export default function Cart({ cart, isOpen, onClose, onUpdateQuantity, onRemove }) {
  if (!isOpen) return null;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside className="cart-panel" onClick={(event) => event.stopPropagation()} aria-label="Shopping cart">
        <div className="cart-header">
          <h2>Shopping Cart ({totalItems})</h2>
          <button onClick={onClose} aria-label="Close cart"><X /></button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <ShoppingCart size={50} />
            <h3>Your cart is empty</h3>
            <p>Add some books to get started!</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <p>₹{item.price}</p>
                    <div className="quantity">
                      <button onClick={() => onUpdateQuantity(item.id, -1)} aria-label="Decrease quantity"><Minus size={14} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, 1)} aria-label="Increase quantity"><Plus size={14} /></button>
                      <button className="remove" onClick={() => onRemove(item.id)} aria-label="Remove item"><Trash2 size={16} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <div><span>Total</span><strong>₹{totalPrice.toLocaleString("en-IN")}</strong></div>
              <button className="checkout-button" onClick={() => window.alert("Demo checkout only. Payment is not configured.")}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}