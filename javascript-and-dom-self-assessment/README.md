# San Francisco Airbnb Listings

A web application that displays Airbnb listings from San Francisco using AJAX to load data from a JSON file.

## Live Demo

**[View Live Demo](https://prajakta2801.github.io/javascript-and-dom-self-assessment/)**

## Assignment Requirements

This project implements all required features:

- **AJAX Loading**: Uses `fetch` API with `async/await` to load first 50 listings from JSON file
- **Listing Name**: Displayed as card title
- **Description**: Shown with HTML tags cleaned
- **Amenities**: Parsed from JSON and displayed (first 3)
- **Host Name**: Shown in host section
- **Host Photo**: Displayed with fallback avatar
- **Price**: Displayed per night
- **Thumbnail**: Listing image with error handling

## Creative Addition

**Interactive Search & Sort**: Users can search listings by name, location, or host name in real-time, and sort by price or rating. The interface shows a live count of filtered results and includes smooth hover animations on cards for better interactivity.

## Project Structure

```
.
├── index.html                      # Main HTML file
├── css/
│   └── main.css                    # Styles
├── js/
│   └── main.js                     # JavaScript with AJAX
├── airbnb_sf_listings_500.json     # Data file
└── README.md                       # This file
```

## How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/prajakta2801/javascript-and-dom-self-assessment.git
   cd javascript-and-dom-self-assessment
   ```

2. **Start a local server** (required for AJAX to work)
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using VS Code:
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

3. **Open in browser**
   - Go to `http://localhost:8000`

## Deploy to GitHub Pages

1. **Create repository on GitHub**
   - Go to https://github.com/new
   - Name it `javascript-and-dom-self-assessment`
   - Create repository

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/prajakta2801/javascript-and-dom-self-assessment.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Click Pages (left sidebar)
   - Under "Source", select `main` branch
   - Click Save
   - Your site will be live at: `https://prajakta2801.github.io/javascript-and-dom-self-assessment/`

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Fetch API (AJAX)

## Data Source

- Real Airbnb San Francisco listings data
- File: `airbnb_sf_listings_500.json`
- Displays first 50 listings as required

## Author

**Prajakta**
- GitHub: [@prajakta2801](https://github.com/prajakta2801)

## Important

Make sure `airbnb_sf_listings_500.json` is in the root directory (same level as `index.html`) for the AJAX fetch to work correctly.