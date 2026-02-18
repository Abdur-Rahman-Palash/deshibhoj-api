# Deshibhoj API

Backend API for Deshibhoj e-commerce platform, deployed on Vercel.

## Features

- **Products Management**: CRUD operations for products
- **Categories Management**: Get categories and products by category
- **Search & Filter**: Advanced search and filtering capabilities
- **Sorting**: Sort products by various fields
- **CORS Enabled**: Cross-origin requests supported
- **Error Handling**: Comprehensive error handling

## API Endpoints

### Products
- `GET /products` - Get all products (with optional filters)
- `GET /products/:id` - Get single product by ID
- `POST /products` - Create new product
- `PUT /products/:id` - Update existing product
- `DELETE /products/:id` - Delete product

### Categories
- `GET /categories` - Get all categories
- `GET /categories/:slug` - Get category by slug

### Utility
- `GET /` - API status
- `GET /health` - Health check

## Query Parameters (for GET /products)

- `category` - Filter by category
- `q` - Search query (searches in name, description, tags)
- `featured` - Get featured products (true/false)
- `badge` - Filter by badge
- `_sort` - Sort field (price, rating, name)
- `_order` - Sort order (asc, desc)
- `price_gte` - Minimum price
- `price_lte` - Maximum price
- `rating_gte` - Minimum rating
- `inStock` - Filter by stock status (true/false)

## Example Requests

```bash
# Get all products
GET /products

# Get products by category
GET /products?category=meat

# Search products
GET /products?q=chicken

# Get featured products
GET /products?featured=true

# Sort by price (low to high)
GET /products?_sort=price&_order=asc

# Filter by price range
GET /products?price_gte=100&price_lte=500

# Complex query
GET /products?category=meat&_sort=price&_order=asc&inStock=true
```

## Deployment

This API is configured for Vercel deployment:

1. Push the `api` folder to a GitHub repository
2. Connect the repository to Vercel
3. Vercel will automatically deploy the API

The API will be available at: `https://your-vercel-app.vercel.app`

## Local Development

```bash
cd api
npm install
npm run dev
```

The API will run on `http://localhost:3000`

## Data Structure

### Product
```json
{
  "id": 1,
  "name": "Product Name",
  "price": 100,
  "originalPrice": 120,
  "category": "category-slug",
  "description": "Product description",
  "image": "/image.jpg",
  "images": ["/image.jpg"],
  "rating": 4.5,
  "reviews": 100,
  "inStock": true,
  "weight": "1kg",
  "unit": "packet",
  "brand": "Brand Name",
  "tags": ["tag1", "tag2"]
}
```

### Category
```json
{
  "id": 1,
  "name": "Category Name",
  "slug": "category-slug",
  "description": "Category description",
  "image": "/category-image.jpg",
  "productCount": 10
}
```
