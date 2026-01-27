# Professional Portfolio Website

**Author:** Prajakta Prasad Avachat  
**NUID:** 002528450  
**Email:** avachat.pr@northeastern.edu  
**Course:** CS 5610 - Web Development  
**Semester:** Spring 2026  
**Course Link:** https://johnguerra.co/classes/webDevelopment_spring_2025/

---

## 🎯 Project Objective

This project is a professional portfolio website designed to showcase my educational background, technical skills, professional experience, and key achievements. The website serves as a comprehensive digital resume for potential employers, recruiters, and collaborators.

**Design Document:** [View Design Document](design-document.md)

**Key Goals:**

- Present professional information in a clean, accessible format
- Demonstrate web development skills (HTML5, CSS3, JavaScript, Bootstrap 5)
- Showcase technical competencies through organized skill categories
- Provide easy access to resume and contact information
- Maintain responsive design across all devices

---

## 📸 Screenshot

![Portfolio Homepage Screenshot](https://prajakta2801.github.io/web-development/project-1-personal-website/images/portfolio.png)

_Homepage featuring quote banner, hero section with photo, education, skills, and contact information_

---

## 🎥 Video Demo

**Video Presentation:**  
[Click here to watch the video](https://drive.google.com/file/d/1-SXUevZtiKyZjnDLzAQ1q0QTUQizQ0Rl/view?usp=sharing)

_3-minute narrated walkthrough of the portfolio website_

---

## 🚀 Live Demo

**Deployed URL:** https://prajakta2801.github.io/web-development/project-1-personal-website/

---

## 📁 Project Structure

```
portfolio/
├── index.html             # Homepage with hero, education, skills, contact
├── experience.html        # Professional work experience timeline
├── projects.html          # Technical projects showcase
├── certifications.html    # Certifications & awards
│
├── css/
│   └── style.css          # Custom styles and responsive design
│
├── js/
│   ├── main.js            # Scroll progress indicator
│   └── skillsChart.js     # Chart.js visualization
│
├── images/
│   ├── profile.jpeg           # Professional headshot
│   ├── northeastern-logo.png  # NEU logo
│   ├── pune-logo.png          # Pune University logo
│   ├── favicon.png            # Browser tab icon
│   └── screenshot.png         # Homepage screenshot
│
├── documents/
│   └── Resume_Prajakta_Avachat.pdf  # Downloadable resume
│
├── design-document.md     # Design planning document
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

- **Chart.js 4.4.0** - Data visualization 
- **Google Fonts (Inter)** - Professional typography

### Development Tools

- **ESLint** - JavaScript linting
- **Prettier** - Code formatting
- **Git** - Version control
- **npm** - Package management

---

## 🏗️ Build Instructions

### Installation Steps

#### 1. Get the Code

```bash
git clone https://github.com/prajakta2801/web-development.git
cd web-development/project-1-personal-website
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

- `profile.jpeg` - The professional photo 
- `northeastern-university-logo.png` - NEU logo 
- `pune-university-logo.png` - Pune University logo 
- `screenshot.png` - Homepage screenshot 

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

3. **Push to GitHub**

   ```bash
   git remote add origin https://github.com/prajakta2801/web-development.git
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
   - Visit: `https://prajakta2801.github.io/web-development/project-1-personal-website/`

---

## 🤖 Use of Generative AI Tools

### Tool Information

**AI Platform:** Claude (Anthropic)  
**Model:** Claude 3.5 Sonnet  
**Version:** claude-sonnet-3-5-20241022  
**Date:** January 2026

---

### Scope of AI Usage

**AI-Generated Content:** `certifications.html` (third HTML page requirement)

**Manually Coded:** `index.html`, `experience.html`, `projects.html`, all CSS, all JavaScript

---

### Prompt Engineering

The following prompt was provided to generate the certifications page structure:

```
Create a professional certifications and awards page using Bootstrap 5. Include:
- Professional certifications (Microsoft AZ-900, Google BI Certificate)
- Publications (IEEE paper, Government of India copyright)
- Awards (PTC Applause 3x, University rank)
- Skills competency bars with percentage indicators

Requirements: Responsive design, professional card layouts, icons,
animated progress bars, consistent with existing portfolio styling.
```

---

### AI Output

The AI generated the following components for `certifications.html`:

1. **Page Structure** - HTML5 semantic layout with Bootstrap 5 grid system
2. **Component Design** - Card-based layouts for certifications, awards, and publications
3. **Visual Elements** - Emoji icons, badge designs, progress bar implementations
4. **Responsive Framework** - Mobile-first grid using Bootstrap classes
5. **Interactive Features** - CSS hover effects and progress bar styling

---

### Human Contributions

All content and refinements were provided manually:

1. **Content Accuracy** - All certification details, dates, and descriptions are factual
2. **Navigation Integration** - Navbar updated to match site-wide navigation pattern
3. **Metadata** - Added appropriate meta tags for SEO and accessibility
4. **Style Consistency** - Adjusted colors and spacing to align with portfolio theme
5. **Quality Assurance** - Verified information accuracy and responsive behavior

---

### Academic Integrity Statement

All credentials, achievements, and qualifications listed on this portfolio are authentic and verifiable. AI was utilized solely for HTML/CSS structure generation.

---
