import React from 'react';

const Checkout = () => {
  return (
    <div style={styles.card}>
      <img src="product-image.jpg" alt="Product" style={styles.image} />
      <div style={styles.cardBody}>
        <h4 style={styles.title}>Product Name</h4>
        <p style={styles.description}>Product description</p>
        <div style={styles.buttonContainer}>
          <button class="btn btn-primary" style={styles.buttonPrimary}>Add to Cart</button>
          <button style={styles.buttonSecondary}>Size Guide</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '100%',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f8f8f8',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  cardBody: {
    textAlign: 'center',
  },
  title: {
    fontSize: '20px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  description: {
    marginBottom: '20px',
    color: '#666',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 16px',
    marginRight: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  },
  buttonSecondary: {
    backgroundColor: '#fff',
    color: '#007bff',
    border: '1px solid #007bff',
    borderRadius: '4px',
    padding: '10px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  },
};

export default Checkout;
