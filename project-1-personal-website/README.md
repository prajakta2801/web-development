# Professional Portfolio Website

**Author:** Prajakta Prasad Avachat  
**Email:** avachat.pr@northeastern.edu  
**Course:** CS 5610 - Web Development  
**Semester:** Spring 2025  
**Course Link:** https://johnguerra.co/classes/webDevelopment_spring_2025/

---

## 🎯 Project Objective

This project is a professional portfolio website designed to showcase my educational background, technical skills, professional experience, and key achievements. The website serves as a comprehensive digital resume for potential employers, recruiters, and collaborators.

**Key Goals:**

- Present professional information in a clean, accessible format
- Demonstrate web development skills (HTML5, CSS3, JavaScript, Bootstrap 5)
- Showcase technical competencies through organized skill categories
- Provide easy access to resume and contact information
- Maintain responsive design across all devices

---

## 📸 Screenshot

![Portfolio Homepage Screenshot](images/screenshot.png)
_Homepage featuring quote banner, hero section with photo, education, skills, and contact information_

---

## 🚀 Live Demo

**Deployed URL:** [Add your GitHub Pages URL here after deployment]

Example: `https://prajakta2801.github.io/portfolio/`

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Homepage with hero, education, skills, contact
├── experience.html         # Professional work experience timeline
├── projects.html          # Technical projects showcase
├── certifications.html    # Certifications & awards (AI-generated)
│
├── css/
│   └── style.css          # Custom styles and responsive design
│
├── js/
│   ├── main.js            # Scroll progress indicator (120+ lines)
│   └── skillsChart.js     # Chart.js visualization
│
├── images/
│   ├── profile.jpeg           # Professional headshot
│   ├── northeastern-logo.png  # NEU logo
│   ├── pune-logo.png          # Pune University logo
│   ├── favicon.png            # Browser tab icon
│   └── screenshot.png         # Homepage screenshot
│
├── resume/
│   └── Resume_Prajakta_Avachat.pdf  # Downloadable resume
│
├── docs/
│   └── design-document.md # Design planning document
│
├── package.json           # Dependencies and scripts
├── .eslintrc.json         # ESLint configuration
├── .prettierrc.json       # Prettier configuration
├── .gitignore             # Git ignore rules
├── LICENSE                # MIT License
└── README.md              # This file
```

---

## 🛠️ Technologies Used

### Frontend

- **HTML5** - Semantic markup, accessibility features
- **CSS3** - Custom properties, flexbox, animations
- **JavaScript (ES6+)** - Modules, classes, modern features
- **Bootstrap 5.3.2** - Responsive grid, components

### Libraries

- **Chart.js 4.4.0** - Data visualization (pie chart)
- **Google Fonts (Inter)** - Professional typography

### Development Tools

- **ESLint** - JavaScript linting
- **Prettier** - Code formatting
- **Git** - Version control
- **npm** - Package management

---

## 🏗️ Build Instructions

### Prerequisites

- Node.js v16 or higher ([Download](https://nodejs.org/))
- npm (comes with Node.js)
- Modern web browser
- Git (optional)

### Installation Steps

#### 1. Get the Code

```bash
git clone https://github.com/prajakta2801/portfolio.git
cd portfolio
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Format Code

```bash
npm run format
```

#### 4. Run Linting

```bash
npm run lint
```

#### 5. Add Required Files

**Images** (place in `images/` folder):

- `profile.jpeg` - Your professional photo (500x500px)
- `northeastern-logo.png` - NEU logo (200x200px)
- `pune-logo.png` - Pune University logo (200x200px)
- `favicon.png` - Browser icon (32x32px)
- `screenshot.png` - Homepage screenshot (1200x800px)

**Resume** (place in `resume/` folder):

- `Resume_Prajakta_Avachat.pdf` - Your resume PDF

#### 6. View the Website

**Option A: Direct Opening**

- Double-click `index.html`

**Option B: Local Server (Recommended)**

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server -p 8000

# VS Code Live Server
# Right-click index.html → Open with Live Server
```

Navigate to: `http://localhost:8000`

#### 7. Validate Code

**HTML Validation:**

- Visit: https://validator.w3.org/nu/
- Upload each HTML file
- Should show: 0 errors, 0 warnings

**JavaScript Validation:**

```bash
npm run lint
# Expected: 0 errors
```

---

## 🚀 Deployment to GitHub Pages

1. **Initialize Git repository**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub repository**
   - Go to github.com
   - Click "New repository"
   - Name it: `portfolio`
   - Don't initialize with README (you already have one)

3. **Push to GitHub**

   ```bash
   git remote add origin https://github.com/prajakta2801/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Click "Pages" in sidebar
   - Source: Deploy from branch
   - Branch: `main`, folder: `/ (root)`
   - Click "Save"

5. **Access your site**
   - Wait 2-5 minutes for deployment
   - Visit: `https://prajakta2801.github.io/portfolio/`
   - Update the "Live Demo" link in this README

---

## 🤖 Use of Generative AI Tools

### AI Tool Information

**Platform:** Claude (Anthropic)  
**Model:** Claude 3.5 Sonnet  
**Model Version:** claude-sonnet-3-5-20241022  
**Interface:** claude.ai web interface  
**Date Used:** January 2026

---

### AI-Generated Page

**ONLY the certifications page (certifications.html) was generated using AI.**

All other pages (index.html, experience.html, projects.html) were manually coded without AI generation.

---

### How AI Was Used for Certifications Page

#### Prompt Provided to AI:

```
Create a professional certifications and awards page for my portfolio website.
The page should include:

1. Professional Certifications section:
   - Microsoft Azure Fundamentals (AZ-900)
   - Google Business Intelligence Professional Certificate

2. Publications & Intellectual Property section:
   - IEEE Research Paper: "Augmented Reality Snipping Tool"
   - Copyright: ScrapDeal Mobile Application (Government of India)

3. Professional Awards section:
   - PTC Applause Award (received 3 times)
   - 8th Rank Holder - IT Department, Pune University

4. Skills Competency Overview section:
   - Test Automation & QA (95%)
   - Data Analytics & Visualization (90%)
   - Cloud & DevOps (85%)
   - Web Development (80%)
   - Machine Learning & AI (75%)
   - Data Engineering (85%)

Requirements:
- Use Bootstrap 5 for layout
- Create professional card designs
- Include icons for visual appeal
- Add animated progress bars for skills
- Make it responsive
- Match the style of my other portfolio pages
```

#### What AI Generated:

1. **Complete HTML structure** - Full page layout with proper Bootstrap classes
2. **Card-based design** - Professional cards for each certification/award
3. **Visual elements** - SVG icons, badge designs, progress bars
4. **Responsive grid** - Mobile-friendly layout using Bootstrap grid
5. **Styling structure** - CSS classes and spacing

#### What I Provided/Modified:

1. **All factual content** - My actual certifications, awards, dates, descriptions
2. **Navigation** - Updated navbar to match other pages
3. **Meta tags** - Added author, description, favicon
4. **Color scheme** - Adjusted to match portfolio theme
5. **Content verification** - Ensured all information is accurate

---

### Why Only This Page?

The certifications page was chosen for AI generation because:

- It required creative layout for displaying credentials
- Complex card designs with multiple sections
- Animated progress bars needed technical implementation
- Allowed demonstration of AI integration while maintaining content authenticity
- Other pages had simpler, more straightforward structures

---

### Transparency

**Important:** While the page layout was AI-generated, **all information is authentic**:

- ✅ I genuinely hold the AZ-900 certification
- ✅ I completed the Google BI Professional Certificate
- ✅ My research was published in IEEE Xplore
- ✅ I received copyright from Government of India
- ✅ I earned PTC Applause Awards (3 times)
- ✅ I achieved 8th rank at Pune University

AI was a tool for creating the presentation, not the content.

---
