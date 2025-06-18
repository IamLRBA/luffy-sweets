import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './OrderNow.css';

const OrderNow = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    product: location.state?.product || '',
    quantity: location.state?.quantity || 1,
    specialInstructions: '',
    paymentMethod: 'cash'
  });

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const products = {
    'Luffy Lollipop': 1.99,
    'Luffy Ice': 2.49,
    'Luffy Eclairs': 3.99,
    'Luffy Ginger': 2.99,
    'Luffy Milk Lollipop': 2.19
  };

  useEffect(() => {
    if (location.state?.product) {
      setFormData(prev => ({
        ...prev,
        product: location.state.product,
        quantity: location.state.quantity || 1
      }));
    }
  }, [location.state]);

  useEffect(() => {
    if (formData.product && products[formData.product]) {
      const newSubtotal = products[formData.product] * formData.quantity;
      setSubtotal(newSubtotal);
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

  const sendWhatsAppNotification = () => {
    const phoneNumber = '256700416812'; // Business owner's WhatsApp number without +
    const message = `🚀 *New Order Received!* 🚀

*Customer Details:*
🛒 *Product:* ${formData.product}
🔢 *Quantity:* ${formData.quantity}
💰 *Total Amount:* $${total.toFixed(2)}

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || 'Not provided'}
📍 *Address:* ${formData.address}

💳 *Payment Method:* ${formData.paymentMethod === 'cash' ? 'Cash on Delivery' : 'Mobile Money'}
📝 *Special Instructions:* ${formData.specialInstructions || 'None'}

Thank you! Please process this order.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Enhanced invoice HTML with CSS
    const invoiceHTML = `
      <html>
        <head>
          <title>Luffy Sweets Invoice</title>
          <style>
            .invoice-container {
              font-family: 'Courier New', monospace;
              max-width: 800px;
              margin: 0 auto;
              padding: 40px;
              background-color: white;
              color: #333;
            }
            .invoice-header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px dashed #9C51B6;
              padding-bottom: 20px;
            }
            .invoice-title {
              font-size: 28px;
              font-weight: bold;
              color: #9C51B6;
              margin-bottom: 10px;
              text-transform: uppercase;
            }
            .invoice-subtitle {
              font-size: 14px;
              color: #666;
            }
            .invoice-section {
              margin-bottom: 25px;
            }
            .section-title {
              font-weight: bold;
              font-size: 18px;
              color: #FF7F3F;
              margin-bottom: 10px;
              border-bottom: 1px solid #eee;
              padding-bottom: 5px;
            }
            .invoice-details {
              display: grid;
              grid-template-columns: 150px 1fr;
              gap: 10px;
              margin-bottom: 5px;
            }
            .detail-label {
              font-weight: bold;
            }
            .order-items {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            .order-items th {
              text-align: left;
              padding: 8px;
              background-color: #f5f5f5;
              border-bottom: 2px solid #ddd;
            }
            .order-items td {
              padding: 8px;
              border-bottom: 1px solid #eee;
            }
            .order-items tr:last-child td {
              border-bottom: none;
            }
            .total-row {
              font-weight: bold;
              font-size: 18px;
            }
            .footer-note {
              margin-top: 40px;
              font-size: 14px;
              text-align: center;
              color: #666;
              border-top: 1px dashed #ddd;
              padding-top: 20px;
            }
            .logo {
              text-align: center;
              margin-bottom: 20px;
            }
            .watermark {
              position: absolute;
              opacity: 0.1;
              font-size: 120px;
              color: #9C51B6;
              transform: rotate(-30deg);
              z-index: -1;
              top: 30%;
              left: 10%;
              white-space: nowrap;
            }
            @media print {
              body {
                background: none;
                margin: 0;
                padding: 0;
              }
              .invoice-container {
                padding: 20px;
                box-shadow: none;
              }
              .no-print {
                display: none;
              }
              .page-break {
                page-break-after: always;
              }
            }
          </style>
        </head>
        <body>
          <div class="invoice-container">
            <div class="logo">
              <h1 class="invoice-title">LUFFY SWEETS</h1>
              <div class="invoice-subtitle">OFFICIAL INVOICE #${Math.floor(Math.random() * 10000)}</div>
            </div>
            
            <div class="watermark">LUFFY SWEETS</div>
            
            <div class="invoice-section">
              <div class="section-title">Customer Details</div>
              <div class="invoice-details">
                <div class="detail-label">Name:</div>
                <div>${formData.name}</div>
                <div class="detail-label">Email:</div>
                <div>${formData.email}</div>
                <div class="detail-label">Phone:</div>
                <div>${formData.phone}</div>
                <div class="detail-label">Address:</div>
                <div>${formData.address}</div>
                <div class="detail-label">Date:</div>
                <div>${new Date().toLocaleDateString()}</div>
              </div>
            </div>
            
            <div class="invoice-section">
              <div class="section-title">Order Summary</div>
              <table class="order-items">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${formData.product}</td>
                    <td>${formData.quantity}</td>
                    <td>$${products[formData.product]?.toFixed(2) || '0.00'}</td>
                    <td>$${subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td colspan="3">Delivery Fee</td>
                    <td>$${(total - subtotal).toFixed(2)}</td>
                  </tr>
                  <tr class="total-row">
                    <td colspan="3">TOTAL</td>
                    <td>$${total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="invoice-section">
              <div class="section-title">Payment Method</div>
              <p>${formData.paymentMethod === 'cash' ? 'Cash on Delivery' : 'Mobile Money'}</p>
              ${formData.paymentMethod === 'mobile' ? `
                <p><strong>Payment Instructions:</strong></p>
                <p>Please send payment to:</p>
                <p>MTN Mobile Money: +256 750 367229</p>
                <p>Airtel Money: +256 767 206229</p>
              ` : ''}
            </div>
            
            ${formData.specialInstructions ? `
            <div class="invoice-section">
              <div class="section-title">Special Instructions</div>
              <p>${formData.specialInstructions}</p>
            </div>
            ` : ''}
            
            <div class="footer-note">
              <p>Thank you for choosing Luffy Sweets!</p>
              <p>Your order will be processed shortly.</p>
              <p>For any inquiries, please contact us at:</p>
              <p>Phone: +256 750 367229 | Email: luffysweets@gmail.com</p>
              <p style="margin-top: 20px; font-style: italic;">This is an automatically generated invoice.</p>
            </div>
          </div>
        </body>
      </html>
    `;
    
    // Generate and print invoice
    const printWindow = window.open('', '_blank');
    printWindow.document.write(invoiceHTML);
    printWindow.document.close();
    
    // Try to print, fallback to alert if printing fails
    try {
      printWindow.print();
    } catch (e) {
      alert('Invoice generated! You can print it from the new window.');
    }
    
    // Send WhatsApp notification to business owner
    sendWhatsAppNotification();
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="order-confirmation">
        <h2>Thank You for Your Order!</h2>
        <p>Your order has been received and is being processed.</p>
        <p>A detailed invoice has been generated for your records.</p>
        <div className="confirmation-actions">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/products" className="btn btn-secondary">
            Browse More Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="order-page">
      <section className="order-hero">
        <h1>
          <span className="highlight-text">Place Your</span>{' '}
          <span className="highlight-border">Order</span>
        </h1>
        <p>Complete your purchase of delicious Luffy Sweets treats</p>
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
              placeholder="Your full name"
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
                placeholder="your@email.com"
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
                placeholder="+256 XXX XXX XXX"
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
              placeholder="Full address including any landmarks"
              rows="3"
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
              {Object.keys(products).map((product) => (
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
              max="100"
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
              placeholder="Allergies, delivery preferences, gift messages..."
              rows="3"
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Payment Information</h2>
          <div className="form-group">
            <label>Payment Method*</label>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handleChange}
                  required
                />
                <span>Cash on Delivery</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mobile"
                  checked={formData.paymentMethod === 'mobile'}
                  onChange={handleChange}
                />
                <span>Mobile Money</span>
              </label>
            </div>
            {formData.paymentMethod === 'mobile' && (
              <div className="mobile-money-info">
                <p>Please send payment to:</p>
                <p><strong>MTN Mobile Money:</strong> +256 750 367229</p>
                <p><strong>Airtel Money:</strong> +256 767 206229</p>
              </div>
            )}
          </div>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee:</span>
            <span>$${(total - subtotal).toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total Amount:</span>
            <span>$${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary confirm-order">
            Confirm Order
          </button>
          <Link to="/products" className="btn btn-secondary">
           ⥢ Back to Shopping
          </Link>
        </div>
      </form>
    </div>
  );
};

export default OrderNow;