import React, { useState, useEffect } from 'react';
import { products } from './products'; // Stellen Sie sicher, dass der Pfad korrekt ist.

function ProductPage({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Findet das Produkt basierend auf der übergebenen ID
    const productData = products.find(p => p.id.toString() === id);
    setProduct(productData);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Ladeanzeige, falls keine Daten vorhanden sind
  }

  return (
    <div className="bg-white">
      <h1>{product.name}</h1>
      <img src={product.images[0].src} alt={product.images[0].alt} />
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <ul>
        {product.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
      <p>Details: {product.details}</p>
      {/* Weitere Produktinformationen und interaktive Elemente könnten hier eingefügt werden. */}
    </div>
  );
}

export default ProductPage;
