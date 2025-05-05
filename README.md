# 🛍️ Product Listing App

This is a simple **Next.js** application that displays a list of products fetched from a public API. It uses **Redis** to cache product data and improve performance by reducing redundant API calls.

---

## 🚀 Features

- Product listing UI using React components
- Caching with Redis for optimized performance
- API call to [dummyjson.com/products](https://dummyjson.com/products)
- Clean and responsive layout with Tailwind CSS

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/product-listing-app.git
cd product-listing-app
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a .env.local file in the root directory and add the following:

-UPSTASH_REDIS_REST_URL=
-UPSTASH_REDIS_REST_TOKEN=

### 4. Run the App Locally 

```bash
npm run dev
```



