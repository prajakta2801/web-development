// DOM Elements
const listingsContainer = document.getElementById("listings");
const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("error-message");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const resultsCount = document.getElementById("results-count");

// Store all listings
let allListings = [];
let filteredListings = [];

/**
 * Load listings from JSON file using AJAX (fetch with async/await)
 * As demonstrated in class
 */
async function loadListings() {
  try {
    // Show loading state
    loadingElement.style.display = "block";
    errorElement.classList.add("d-none");
    listingsContainer.innerHTML = "";

    // Fetch data using fetch API with await (AJAX)
    const response = await fetch("airbnb_sf_listings_500.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Get first 50 listings as per assignment requirements
    allListings = data.slice(0, 50);
    filteredListings = [...allListings];

    // Hide loading
    loadingElement.style.display = "none";

    // Render listings
    renderListings(filteredListings);
  } catch (error) {
    console.error("Error loading listings:", error);
    loadingElement.style.display = "none";
    errorElement.classList.remove("d-none");
  }
}

/**
 * Create a listing card element
 * Shows: name, description, amenities, host (name + photo), price, thumbnail
 */
function createListingCard(listing) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-12 col-md-6 col-lg-4 mb-4";

  // Extract required data
  const name = listing.name || "Untitled Listing";
  const description = cleanDescription(listing.description || "");
  const price = listing.price || "$0";
  const thumbnail = listing.picture_url || "https://via.placeholder.com/400x300?text=No+Image";
  
  // Host information (required)
  const hostName = listing.host_name || "Host";
  const hostPhoto = listing.host_picture_url || listing.host_thumbnail_url || 
    `https://ui-avatars.com/api/?name=${encodeURIComponent(hostName)}&background=random`;
  
  // Amenities (required) - parse from JSON string
  let amenities = [];
  try {
    if (listing.amenities) {
      amenities = JSON.parse(listing.amenities.replace(/'/g, '"'));
    }
  } catch (e) {
    amenities = [];
  }
  const amenitiesText = amenities.slice(0, 3).join(", ");
  
  // Additional info for creative touch
  const rating = listing.review_scores_rating || 0;
  const reviewCount = listing.number_of_reviews || 0;
  const isSuperhost = listing.host_is_superhost === "t";
  const bedrooms = listing.bedrooms || 0;
  const beds = listing.beds || 0;
  const bathrooms = listing.bathrooms_text || "";

  // Create card HTML
  colDiv.innerHTML = `
    <div class="listing card">
      <img
        src="${thumbnail}"
        class="card-img-top"
        alt="${name}"
        loading="lazy"
        onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'"
      />
      <div class="card-body">
        ${isSuperhost ? '<span class="superhost-badge">★ SUPERHOST</span>' : ''}
        
        <h5 class="listing-title">${name}</h5>
        
        <p class="property-details">${bedrooms} bedroom · ${beds} beds · ${bathrooms}</p>
        
        <p class="listing-description">${description}</p>
        
        ${amenitiesText ? `<p class="amenities">${amenitiesText}</p>` : ''}
        
        <p class="listing-price">${price} <span style="font-weight: 400;">night</span></p>
        
        ${rating > 0 ? `
          <p class="listing-rating">
            <span class="star">★</span> ${rating.toFixed(2)} (${reviewCount} reviews)
          </p>
        ` : ''}
        
        <div class="host-info">
          <img
            src="${hostPhoto}"
            alt="${hostName}"
            class="host-photo"
            onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(hostName)}&background=random'"
          />
          <span class="host-name">Hosted by ${hostName}</span>
        </div>
      </div>
    </div>
  `;

  return colDiv;
}

/**
 * Clean HTML from description text
 */
function cleanDescription(description) {
  if (!description) return "No description available.";
  // Remove HTML tags and extra whitespace
  const cleaned = description.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  // Truncate to reasonable length
  return cleaned.length > 150 ? cleaned.substring(0, 150) + "..." : cleaned;
}

/**
 * Initialize - load listings when page loads
 */
document.addEventListener("DOMContentLoaded", () => {
  loadListings();
  
  // Add event listeners for search and sort
  searchInput.addEventListener("input", debounce(filterAndRender, 300));
  sortSelect.addEventListener("change", filterAndRender);
});

/**
 * Render listings to the DOM
 */
function renderListings(listings) {
  listingsContainer.innerHTML = "";
  
  // Update results count
  resultsCount.textContent = `Showing ${listings.length} of ${allListings.length} listings`;
  
  listings.forEach((listing) => {
    const card = createListingCard(listing);
    listingsContainer.appendChild(card);
  });
}

/**
 * Filter and sort listings based on user input
 */
function filterAndRender() {
  const searchTerm = searchInput.value.toLowerCase();
  
  // Filter listings
  filteredListings = allListings.filter((listing) => {
    const name = (listing.name || "").toLowerCase();
    const host = (listing.host_name || "").toLowerCase();
    const neighborhood = (listing.neighbourhood_cleansed || "").toLowerCase();
    
    return name.includes(searchTerm) || 
           host.includes(searchTerm) || 
           neighborhood.includes(searchTerm);
  });
  
  // Sort listings
  const sortBy = sortSelect.value;
  if (sortBy === "price-low") {
    filteredListings.sort((a, b) => {
      const priceA = parseFloat(a.price?.replace(/[$,]/g, "")) || 0;
      const priceB = parseFloat(b.price?.replace(/[$,]/g, "")) || 0;
      return priceA - priceB;
    });
  } else if (sortBy === "price-high") {
    filteredListings.sort((a, b) => {
      const priceA = parseFloat(a.price?.replace(/[$,]/g, "")) || 0;
      const priceB = parseFloat(b.price?.replace(/[$,]/g, "")) || 0;
      return priceB - priceA;
    });
  } else if (sortBy === "rating") {
    filteredListings.sort((a, b) => {
      const ratingA = a.review_scores_rating || 0;
      const ratingB = b.review_scores_rating || 0;
      return ratingB - ratingA;
    });
  }
  
  renderListings(filteredListings);
}

/**
 * Debounce function for search performance
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}