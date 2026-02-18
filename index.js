const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
const products = [
  {
    id: 1,
    name: "Premium Halal Chicken Breast",
    price: 175,
    originalPrice: 200,
    category: "meat",
    description: "Premium quality Zabiha hand-slaughtered Halal chicken breast. Perfect for grilling and healthy meals.",
    image: "/chiken.jpg",
    images: ["/chiken.jpg"],
    rating: 4.5,
    reviews: 128,
    inStock: true,
    weight: "1kg",
    unit: "packet",
    brand: "AL-MAAEDAH",
    tags: ["halal", "zabiha", "premium", "chicken"]
  },
  {
    id: 2,
    name: "Organic Chicken Thighs",
    price: 85,
    category: "meat",
    description: "100% organic chicken thighs, rich in flavor and perfect for curries and grilling.",
    image: "/chiken.jpg",
    images: ["/chiken.jpg"],
    rating: 4.3,
    reviews: 89,
    inStock: true,
    weight: "1kg",
    unit: "packet",
    brand: "AL-MAAEDAH",
    tags: ["organic", "chicken", "thighs", "halal"]
  },
  {
    id: 3,
    name: "Fresh Red Tomatoes",
    price: 45,
    originalPrice: 200,
    category: "vegetables",
    description: "Fresh, juicy red tomatoes perfect for salads, cooking, and sauces.",
    image: "/front-view-fresh-red-tomatoes-inside-basket.jpg",
    images: ["/front-view-fresh-red-tomatoes-inside-basket.jpg"],
    rating: 4.6,
    reviews: 234,
    inStock: true,
    weight: "500g",
    unit: "packet",
    brand: "AL-MAAEDAH",
    tags: ["fresh", "vegetables", "tomatoes"]
  },
  {
    id: 4,
    name: "Premium Basmati Rice",
    price: 320,
    originalPrice: 380,
    category: "rice",
    description: "Extra premium basmati rice with long grains and aromatic fragrance. Perfect for biryani and special occasions.",
    image: "/large-pile-raw-short-grain-rice.jpg",
    images: ["/large-pile-raw-short-grain-rice.jpg"],
    rating: 4.8,
    reviews: 456,
    inStock: true,
    weight: "5kg",
    unit: "bag",
    brand: "AL-MAAEDAH",
    tags: ["premium", "basmati", "rice", "long-grain"]
  },
  {
    id: 5,
    name: "Farm Fresh Eggs",
    price: 120,
    category: "dairy",
    description: "Free-range farm fresh eggs, rich in protein and essential nutrients.",
    image: "/view-white-flour-brown-pot-fresh-vegetables-eggs-different-spices-dark.jpg",
    images: ["/view-white-flour-brown-pot-fresh-vegetables-eggs-different-spices-dark.jpg"],
    rating: 4.7,
    reviews: 312,
    inStock: true,
    weight: "12pcs",
    unit: "tray",
    brand: "AL-MAAEDAH",
    tags: ["farm-fresh", "eggs", "protein", "free-range"]
  },
  {
    id: 6,
    name: "Pure Natural Honey",
    price: 180,
    category: "sweeteners",
    description: "100% pure natural honey collected from wild flowers. No additives or preservatives.",
    image: "/close-up-bowl-filled-with-honey.jpg",
    images: ["/close-up-bowl-filled-with-honey.jpg"],
    rating: 4.4,
    reviews: 167,
    inStock: true,
    weight: "500g",
    unit: "jar",
    brand: "AL-MAAEDAH",
    tags: ["pure", "natural", "honey", "wild-flower"]
  },
  {
    id: 7,
    name: "Premium Spice Mix",
    price: 250,
    originalPrice: 280,
    category: "spices",
    description: "Premium quality spice mix with authentic flavors for perfect cooking.",
    image: "/close-up-different-spices-lined-bowls.jpg",
    images: ["/close-up-different-spices-lined-bowls.jpg"],
    rating: 4.9,
    reviews: 198,
    inStock: true,
    weight: "200g",
    unit: "packet",
    brand: "AL-MAAEDAH",
    tags: ["premium", "spices", "mix", "authentic"]
  },
  {
    id: 8,
    name: "Whole Wheat Flour",
    price: 95,
    category: "flour",
    description: "100% whole wheat flour, stone-ground for maximum nutrition and flavor.",
    image: "/view-white-flour-brown-pot-fresh-vegetables-eggs-different-spices-dark.jpg",
    images: ["/view-white-flour-brown-pot-fresh-vegetables-eggs-different-spices-dark.jpg"],
    rating: 4.6,
    reviews: 145,
    inStock: true,
    weight: "2kg",
    unit: "packet",
    brand: "AL-MAAEDAH",
    tags: ["whole-wheat", "flour", "stone-ground", "nutrition"]
  }
];

const categories = [
  {
    id: 1,
    name: "Meat & Poultry",
    slug: "meat-poultry",
    description: "Fresh halal meat and poultry products",
    image: "/chiken.jpg",
    productCount: 2
  },
  {
    id: 2,
    name: "Vegetables",
    slug: "vegetables",
    description: "Fresh and organic vegetables",
    image: "/front-view-fresh-red-tomatoes-inside-basket.jpg",
    productCount: 1
  },
  {
    id: 3,
    name: "Rice & Grains",
    slug: "rice-grains",
    description: "Premium quality rice and grains",
    image: "/large-pile-raw-short-grain-rice.jpg",
    productCount: 1
  },
  {
    id: 4,
    name: "Dairy & Eggs",
    slug: "dairy-eggs",
    description: "Fresh dairy products and eggs",
    image: "/view-white-flour-brown-pot-fresh-vegetables-eggs-different-spices-dark.jpg",
    productCount: 1
  },
  {
    id: 5,
    name: "Sweeteners",
    slug: "sweeteners",
    description: "Natural sweeteners and honey",
    image: "/close-up-bowl-filled-with-honey.jpg",
    productCount: 1
  },
  {
    id: 6,
    name: "Spices",
    slug: "spices",
    description: "Authentic spices and seasonings",
    image: "/close-up-different-spices-lined-bowls.jpg",
    productCount: 1
  },
  {
    id: 7,
    name: "Flour & Atta",
    slug: "flour-atta",
    description: "Various types of flour and atta",
    image: "/view-white-flour-brown-pot-fresh-vegetables-eggs-different-spices-dark.jpg",
    productCount: 1
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Deshibhoj API is running!' });
});

// Products routes
app.get('/products', (req, res) => {
  const { category, q, featured, badge, _sort, _order, price_gte, price_lte, rating_gte, inStock } = req.query;
  
  let filteredProducts = [...products];
  
  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }
  
  // Search
  if (q) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.description.toLowerCase().includes(q.toLowerCase()) ||
      p.tags.some(tag => tag.toLowerCase().includes(q.toLowerCase()))
    );
  }
  
  // Featured products
  if (featured === 'true') {
    filteredProducts = filteredProducts.slice(0, 8);
  }
  
  // Badge filter
  if (badge) {
    filteredProducts = filteredProducts.filter(p => p.badge === badge);
  }
  
  // Price range
  if (price_gte) {
    filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(price_gte));
  }
  if (price_lte) {
    filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(price_lte));
  }
  
  // Rating filter
  if (rating_gte) {
    filteredProducts = filteredProducts.filter(p => p.rating >= parseFloat(rating_gte));
  }
  
  // Stock filter
  if (inStock === 'true') {
    filteredProducts = filteredProducts.filter(p => p.inStock);
  }
  
  // Sorting
  if (_sort) {
    filteredProducts.sort((a, b) => {
      let aVal = a[_sort];
      let bVal = b[_sort];
      
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }
      
      if (_order === 'desc') {
        return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
      }
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    });
  }
  
  res.json(filteredProducts);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

app.post('/products', (req, res) => {
  const newProduct = {
    id: Math.max(...products.map(p => p.id)) + 1,
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

app.delete('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  products.splice(index, 1);
  res.status(204).send();
});

// Categories routes
app.get('/categories', (req, res) => {
  res.json(categories);
});

app.get('/categories/:slug', (req, res) => {
  const category = categories.find(c => c.slug === req.params.slug);
  if (!category) {
    return res.status(404).json({ error: 'Category not found' });
  }
  res.json(category);
});

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
