import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data.js";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function Products() {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const allBrands = [...new Set(products.map((p) => p.brand))];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Filter
  let filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term);
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  // Sort
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "name") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <h2 className="section-title">All Products</h2>
        <p className="section-subtitle">
          Browse our collection of premium technology
        </p>
      </div>

      {/* Filters & Search Bar */}
      <div className="filters-bar">
        <div className="search-wrapper">
          <span className="search-icon">
            <SearchIcon />
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="search-clear" onClick={() => setSearchTerm("")}>
              ✕
            </button>
          )}
        </div>

        <div className="filter-group">
          <label className="filter-label">Brand</label>
          <select
            className="filter-select"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="All">All Brands</option>
            {allBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Sort By</label>
          <select
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="rating">Rating</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      {(searchTerm || selectedBrand !== "All" || sortBy !== "default") && (
        <div className="active-filters">
          <span className="filter-results-count">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} found
          </span>
          <button
            className="clear-all-filters"
            onClick={() => {
              setSearchTerm("");
              setSelectedBrand("All");
              setSortBy("default");
            }}
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((data) => (
            <ProductCard
              key={data.id}
              id={data.id}
              image={data.image}
              name={data.name}
              price={data.price}
              originalPrice={data.originalPrice}
              discount={data.discount}
              rating={data.rating}
              isBestSeller={data.isBestSeller}
              isWishlisted={wishlist.includes(data.id)}
              onAddToCart={() => addToCart(data)}
              onToggleWishList={() => toggleWishlist(data.id)}
            />
          ))
        ) : (
          <div className="no-results">
            <span className="no-results-icon">
              <SearchIcon />
            </span>
            <h3>No products found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </section>
  );
}
