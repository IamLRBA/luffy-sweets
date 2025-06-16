import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './OrderNow.css';

const OrderNow = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    product: location.state?.product || '',
    quantity: 1,
    specialInstructions: '',
    paymentMethod: 'cash'
  });

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const products = {
    'Luffy Lollipop': 1.99,
    'Luffy Ice': 2.49,
    'Luffy Eclairs': 3.99
  };

  useEffect(() => {
    if (formData.product && products[formData.product]) {
      const newSubtotal = products[formData.product] * formData.quantity;
      setSubtotal(newSubtotal);
      // Add delivery fee if needed
      setTotal(newSubtotal + (newSubtotal > 20 ? 0 : 5)); // Free delivery for orders over $20
    }
  }, [formData.product, formData.quantity]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log('Order submitted:', formData);
    
    // Generate invoice
    const invoice = `
      Luffy Sweets Invoice
      -------------------
      Customer: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Address: ${formData.address}
      
      Order Details:
      Product: ${formData.product}
      Quantity: ${formData.quantity}
      Unit Price: $${products[formData.product]?.toFixed(2) || '0.00'}
      Subtotal: $${subtotal.toFixed(2)}
      Delivery Fee: $${(total - subtotal).toFixed(2)}
      Total: $${total.toFixed(2)}
      
      Payment Method: ${formData.paymentMethod}
      Special Instructions: ${formData.specialInstructions || 'None'}
      
      Thank you for your order!
    `;
    
    // Print invoice
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<pre>${invoice}</pre>`);
    printWindow.document.close();
    printWindow.print();
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="order-confirmation">
        <h2>Thank You for Your Order!</h2>
        <p>Your order has been received and is being processed.</p>
        <p>An invoice has been printed and sent to our team.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="order-page">
      <section className="order-hero">
        <h1> <span className="highlight-text">Place Your</span> <span className="highlight-border">mission</span></h1>
        <p>Fill out the form below to order your favorite sweets</p>
      </section>

      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-section">
          <h2>Customer Information</h2>
          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Delivery Address*</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Order Details</h2>
          <div className="form-group">
            <label>Select Product*</label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a product --</option>
              {Object.keys(products).map(product => (
                <option key={product} value={product}>
                  {product} (${products[product].toFixed(2)})
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Quantity*</label>
            <input
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Special Instructions</label>
            <textarea
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              placeholder="Any special requests or notes..."
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Payment Information</h2>
          <div className="form-group">
            <label>Payment Method*</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handleChange}
                  required
                />
                Cash on Delivery
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mobile"
                  checked={formData.paymentMethod === 'mobile'}
                  onChange={handleChange}
                />
                Mobile Money
              </label>
            </div>
          </div>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee:</span>
            <span>${(total - subtotal).toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button type="submit" className="btn btn-primary confirm-order">
          Confirm Order!
        </button>
      </form>
    </div>
  );
};

export default OrderNow;