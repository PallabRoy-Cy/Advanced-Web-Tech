// Demo products data for fallback when API is unavailable
export const demoProducts = [
  {
    id: 1,
    product: "Wireless Bluetooth Headphones",
    manufacturer: "TechSound",
    price: "89.99",
    quantity: "15",
    tags: "audio, wireless, bluetooth",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    pdimg: "images/headphones.jpg"
  },
  {
    id: 2,
    product: "Smart Fitness Watch",
    manufacturer: "FitTech",
    price: "199.99",
    quantity: "8",
    tags: "fitness, smartwatch, health",
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and water resistance.",
    pdimg: "images/smartwatch.jpg"
  },
  {
    id: 3,
    product: "Mechanical Gaming Keyboard",
    manufacturer: "GameGear",
    price: "129.99",
    quantity: "12",
    tags: "gaming, keyboard, mechanical",
    description: "RGB backlit mechanical keyboard with customizable keys and gaming features.",
    pdimg: "images/keyboard.jpg"
  },
  {
    id: 4,
    product: "4K Ultra HD Monitor",
    manufacturer: "DisplayPro",
    price: "399.99",
    quantity: "6",
    tags: "monitor, 4k, display",
    description: "27-inch 4K monitor with HDR support and 99% sRGB color accuracy.",
    pdimg: "images/monitor.jpg"
  },
  {
    id: 5,
    product: "Wireless Gaming Mouse",
    manufacturer: "PrecisionTech",
    price: "79.99",
    quantity: "20",
    tags: "gaming, mouse, wireless",
    description: "High-precision wireless gaming mouse with customizable RGB lighting.",
    pdimg: "images/mouse.jpg"
  },
  {
    id: 6,
    product: "Portable Bluetooth Speaker",
    manufacturer: "SoundWave",
    price: "59.99",
    quantity: "25",
    tags: "audio, speaker, portable",
    description: "Compact waterproof speaker with 360-degree sound and 12-hour battery.",
    pdimg: "images/speaker.jpg"
  },
  {
    id: 7,
    product: "USB-C Hub with HDMI",
    manufacturer: "ConnectPro",
    price: "49.99",
    quantity: "18",
    tags: "hub, usb-c, hdmi",
    description: "Multi-port USB-C hub with HDMI, USB 3.0, and power delivery support.",
    pdimg: "images/hub.jpg"
  },
  {
    id: 8,
    product: "Ergonomic Office Chair",
    manufacturer: "ComfortSeat",
    price: "299.99",
    quantity: "4",
    tags: "office, chair, ergonomic",
    description: "Premium ergonomic office chair with lumbar support and adjustable height.",
    pdimg: "images/chair.jpg"
  }
];

// Demo search function for fallback
export const searchDemoProducts = (searchTerm) => {
  if (!searchTerm || searchTerm.trim() === '') {
    return demoProducts;
  }
  
  const term = searchTerm.toLowerCase();
  return demoProducts.filter(product => 
    product.product.toLowerCase().includes(term) ||
    product.manufacturer.toLowerCase().includes(term) ||
    product.tags.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term)
  );
};
