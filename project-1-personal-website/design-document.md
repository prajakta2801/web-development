# Portfolio Website - Design Document

**Project Name:** Professional Portfolio Website  
**Author:** Prajakta Prasad Avachat  
**Course:** CS 5610 Web Development  
**Date:** January 2026

---

## 1. Project Description

### Overview

A responsive, professional portfolio website showcasing my educational background, technical skills, work experience, and achievements. The site serves as a digital resume and professional presence for recruiters, employers, and collaborators.

### Purpose

- Present qualifications in an accessible, visually appealing format
- Demonstrate web development proficiency through the site itself
- Provide easy access to resume and contact information
- Showcase technical projects and achievements
- Establish professional online presence

### Target Audience

- Tech recruiters seeking qualified candidates
- Hiring managers evaluating technical skills
- Academic peers and collaborators
- Potential clients or project partners

### Key Features

- Responsive design (mobile, tablet, desktop)
- Interactive quote banner
- Professional photo and branding
- Downloadable resume
- Contact information with multiple channels
- Project showcase with technical details
- Certification and achievement highlights

---

## 2. User Personas

### Persona 1: Sarah - Tech Recruiter

**Demographics:**

- Age: 32
- Location: Boston, MA
- Job: Senior Technical Recruiter at tech startup
- Experience: 8 years in technical recruitment

**Goals:**

- Quickly assess candidate qualifications
- Find candidates with specific technical skills
- Verify educational background and certifications
- Download resumes for internal systems
- Contact promising candidates efficiently

**Pain Points:**

- Limited time to review each candidate (2-3 minutes)
- Needs to filter through hundreds of applications
- Wants clear, scannable information
- Dislikes cluttered or slow-loading sites

**User Journey:**

1. Arrives via LinkedIn or job board link
2. Scans homepage for key qualifications
3. Checks skills match job requirements
4. Downloads resume for ATS system
5. Notes contact information for follow-up

**What Sarah Needs:**

- Clean, professional homepage
- Quick overview of skills and experience
- Easy resume download
- Visible contact information
- Mobile-responsive (reviews on phone)

---

### Persona 2: David - Hiring Manager

**Demographics:**

- Age: 45
- Location: San Francisco, CA
- Job: Engineering Manager at Fortune 500 company
- Experience: 20 years in software development

**Goals:**

- Evaluate technical depth and project experience
- Assess problem-solving abilities through projects
- Verify educational credentials
- Understand career trajectory
- Determine cultural fit

**Pain Points:**

- Needs detailed project information
- Wants to see actual work examples
- Skeptical of generic portfolios
- Values authenticity and technical accuracy

**User Journey:**

1. Receives portfolio link from recruiter
2. Reviews educational background
3. Deep-dives into project details
4. Checks certifications and publications
5. Explores GitHub for code samples
6. Schedules interview if impressed

**What David Needs:**

- Detailed project descriptions with outcomes
- Clear technical skill categorization
- Verifiable achievements (certifications, publications)
- Professional presentation
- Links to external profiles (GitHub, LinkedIn)

---

### Persona 3: Maya - Fellow Graduate Student

**Demographics:**

- Age: 26
- Location: Boston, MA
- Job: MS CS student at Northeastern University
- Experience: Peer, potential collaborator

**Goals:**

- Find collaboration opportunities on projects
- Get inspiration for own portfolio
- Network with classmates
- Share resources and knowledge
- Learn about different career paths

**Pain Points:**

- Overwhelmed by job search process
- Unsure how to present technical work
- Wants examples of good portfolios
- Needs networking connections

**User Journey:**

1. Discovers portfolio through class or LinkedIn
2. Browses overall design and structure
3. Reviews project ideas for inspiration
4. Checks educational path and courses
5. Reaches out via contact form or LinkedIn

**What Maya Needs:**

- Relatable content (student perspective)
- Clear structure she can learn from
- Project variety and depth
- Professional but approachable tone
- Easy contact/networking options

---

### Persona 4: Dr. Chen - Academic Advisor/Professor

**Demographics:**

- Age: 52
- Location: Boston, MA
- Job: Professor of Computer Science
- Experience: 25 years in academia and research

**Goals:**

- Evaluate student work quality
- Assess technical writing ability
- Review project complexity
- Provide recommendation letters
- Track student progress

**Pain Points:**

- Needs to verify academic claims
- Wants to see research publications
- Evaluates professionalism
- Checks for proper documentation

**User Journey:**

1. Student shares portfolio for recommendation
2. Reviews academic credentials
3. Examines project depth and documentation
4. Checks publications and research
5. Assesses overall professionalism

**What Dr. Chen Needs:**

- Academic credentials prominently displayed
- Research publications clearly listed
- Well-documented projects
- Professional presentation
- Evidence of technical competency

---

## 3. User Stories

### Epic 1: First Impression & Navigation

**Story 1.1:** Quick Professional Assessment

- **As a** tech recruiter
- **I want to** see key qualifications within 10 seconds of landing
- **So that** I can quickly determine if the candidate matches job requirements
- **Acceptance Criteria:**
  - Name and title visible above the fold
  - Professional photo displayed
  - Summary text highlights key experience
  - Skills are scannable at a glance
  - Navigation menu is immediately visible

**Story 1.2:** Easy Navigation

- **As a** hiring manager
- **I want to** navigate between different sections smoothly
- **So that** I can find specific information without confusion
- **Acceptance Criteria:**
  - Fixed navigation bar always accessible
  - Clear page labels (Experience, Projects, Certifications)
  - Active page highlighted in navigation
  - Smooth scrolling between sections
  - Mobile-friendly navigation menu

**Story 1.3:** Professional First Impression

- **As a** visitor
- **I want to** immediately recognize this as a professional portfolio
- **So that** I take the candidate seriously
- **Acceptance Criteria:**
  - Clean, modern design
  - Professional color scheme
  - High-quality photo
  - No spelling or grammatical errors
  - Consistent branding throughout

---

### Epic 2: Content Discovery

**Story 2.1:** Educational Background Review

- **As a** recruiter
- **I want to** quickly understand educational qualifications
- **So that** I can verify minimum requirements are met
- **Acceptance Criteria:**
  - Degree names clearly displayed
  - University names and locations visible
  - GPA prominently shown
  - Relevant coursework listed
  - Dates of attendance included

**Story 2.2:** Skills Assessment

- **As a** hiring manager
- **I want to** see all technical skills organized by category
- **So that** I can match skills to job requirements
- **Acceptance Criteria:**
  - Skills grouped by technology area
  - Visual representation (chart/badges)
  - Proficiency levels indicated
  - Technologies clearly labeled
  - Easy to scan and compare

**Story 2.3:** Project Exploration

- **As a** technical interviewer
- **I want to** understand project complexity and outcomes
- **So that** I can prepare relevant technical questions
- **Acceptance Criteria:**
  - Project titles and descriptions clear
  - Technologies used are listed
  - Measurable outcomes included
  - Time frames indicated
  - Links to code/demos if available

---

### Epic 3: Credential Verification

**Story 3.1:** Certification Review

- **As a** hiring manager
- **I want to** verify professional certifications
- **So that** I can confirm claimed qualifications
- **Acceptance Criteria:**
  - Certification names and issuing bodies shown
  - Dates or validity periods included
  - Certification numbers if applicable
  - Professional layout and organization
  - Easy to cross-reference with resume

**Story 3.2:** Achievement Validation

- **As a** professor
- **I want to** see publications and academic achievements
- **So that** I can write accurate recommendation letters
- **Acceptance Criteria:**
  - Publications listed with full details
  - Awards and recognitions displayed
  - Academic rankings shown
  - Copyright/IP achievements included
  - Verifiable information provided

---

### Epic 4: Contact & Engagement

**Story 4.1:** Resume Download

- **As a** recruiter
- **I want to** download the resume with one click
- **So that** I can upload it to our ATS system
- **Acceptance Criteria:**
  - Download button prominently placed
  - PDF format
  - File downloads immediately
  - File named professionally
  - Button visible on homepage

**Story 4.2:** Multiple Contact Options

- **As a** potential employer
- **I want to** contact the candidate through my preferred method
- **So that** I can reach out efficiently
- **Acceptance Criteria:**
  - Email address displayed
  - Phone number provided
  - LinkedIn profile linked
  - GitHub profile accessible
  - Contact section easy to find

**Story 4.3:** Quick Networking

- **As a** fellow student
- **I want to** easily connect on professional networks
- **So that** I can build my network and collaborate
- **Acceptance Criteria:**
  - Social media icons visible
  - Links open in new tabs
  - Profiles are active and complete
  - Multiple platforms available
  - Contact info not buried

---

### Epic 5: Mobile Experience

**Story 5.1:** Mobile Browsing

- **As a** recruiter reviewing on my phone
- **I want to** access all information on mobile
- **So that** I can review candidates during my commute
- **Acceptance Criteria:**
  - Fully responsive design
  - Text readable without zooming
  - Images scale appropriately
  - Navigation menu works on mobile
  - Buttons are touch-friendly

**Story 5.2:** Fast Loading

- **As a** visitor on slow connection
- **I want to** have the page load quickly
- **So that** I don't abandon the site
- **Acceptance Criteria:**
  - Page loads in under 3 seconds
  - Images optimized for web
  - Minimal external dependencies
  - No unnecessary animations blocking content
  - Progressive content loading

---

## 4. Design Mockups

### Site Structure

The portfolio consists of 4 main pages:

1. **index.html** - Homepage
   - Hero section with photo and bio
   - Quote banner
   - Education with coursework
   - Technical skills organized by category
   - Languages
   - Key achievements overview
   - Contact section

2. **experience.html** - Professional Experience
   - Work experience timeline
   - Detailed role descriptions
   - Technologies used per role
   - Achievements and impact metrics

3. **projects.html** - Technical Projects
   - FraudBusters - ML fraud detection
   - Calendar Application - Java OOP project
   - Augmented Reality Snipping Tool - IEEE published research
   - Each with description, achievements, tech stack

4. **certifications.html** - Certifications & Awards (AI-Generated Page)
   - Professional certifications (AZ-900, Google BI)
   - Publications (IEEE paper)
   - Copyright (ScrapDeal app)
   - Awards (PTC Applause 3x, University rank)
   - Skills competency progress bars

---

### Homepage Wireframe (Desktop)

```
┌────────────────────────────────────────────────────────────────┐
│  Portfolio    [Home] [Experience] [Projects] [Certifications]  │ ← Fixed Navbar
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                                                                 │
│  "Data will talk to you if you're willing to listen."         │ ← Quote Banner
│                      — Jim Bergeson                            │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────┬──────────────────────────┐
│  Prajakta Prasad Avachat            │                          │
│  Product Ops | Data Analytics       │      ┌────────────┐      │
│                                     │      │            │      │
│  ┌───────────────────────────────┐ │      │   PHOTO    │      │ ← Hero Section
│  │ I've always been fascinated   │ │      │  (Circular) │      │
│  │ by technology...              │ │      │            │      │
│  │                               │ │      └────────────┘      │
│  │ [2 paragraphs of bio]         │ │                          │
│  └───────────────────────────────┘ │                          │
│                                     │                          │
│  [Email] [LinkedIn] [GitHub]        │                          │
│  [Download Resume]                  │                          │
└─────────────────────────────────────┴──────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                        EDUCATION                                │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  [NEU Logo]                                              │  │
│  │  Master of Science in Computer Science                   │  │
│  │  Northeastern University, Boston, MA                     │  │
│  │  Sep 2025 - Apr 2027 | GPA: 3.83/4.0                    │  │
│  │  Coursework: [Tag] [Tag] [Tag] [Tag]                    │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  [Pune Logo]                                             │  │
│  │  Bachelor of Engineering in IT (Honors Data Science)     │  │
│  │  Savitribai Phule Pune University                        │  │
│  │  Aug 2019 - Sep 2023 | GPA: 3.83/4.0                    │  │
│  │  Coursework: [Tag] [Tag] [Tag] [Tag] [Tag]...           │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                    TECHNICAL SKILLS                             │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Programming & Analytics                                 │  │
│  │  [Python] [R] [Pandas] [NumPy] [Matplotlib]             │  │
│  └──────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Data Visualization & BI                                 │  │
│  │  [Tableau] [Power BI] [Dashboard Design]                │  │
│  └──────────────────────────────────────────────────────────┘  │
│  [... more skill categories ...]                               │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                      LANGUAGES                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │ English     │  │ Hindi       │  │ Marathi     │            │
│  │ Professional│  │ Native      │  │ Native      │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                   KEY ACHIEVEMENTS                              │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐               │
│  │        │  │        │  │        │  │        │               │
│  │  IEEE  │  │  PTC   │  │ Azure  │  │ Google │               │
│  │  Paper │  │ Award  │  │ Cert   │  │ BI Cert│               │
│  └────────┘  └────────┘  └────────┘  └────────┘               │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                    GET IN TOUCH                                 │
│  ┌─────────────────────┐  ┌─────────────────────┐             │
│  │ Contact Info:       │  │ Connect With Me:    │             │
│  │    Email            │  │ [LinkedIn Button]   │             │
│  │    Phone            │  │ [GitHub Button]     │             │
│  │    Location         │  │ [Email Button]      │             │
│  └─────────────────────┘  │ [Download Resume]   │             │
│                           └─────────────────────┘             │
└────────────────────────────────────────────────────────────────┘
```

---

### Experience Page Wireframe

```
┌────────────────────────────────────────────────────────────────┐
│  Portfolio    [Home] [Experience] [Projects] [Certifications]  │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│               PROFESSIONAL EXPERIENCE                           │
│               Career history and accomplishments                │
└────────────────────────────────────────────────────────────────┘

│  ┌──────────────────────────────────────────────────────────┐
│  │  ● Analyst                              July 2022 - Aug 2025│
├──┤    PTC Inc, Pune, India                                    │
│  │    • Bullet point 1                                        │
│  │    • Bullet point 2                                        │
│  │    • Bullet point 3                                        │
│  │    [Python] [Selenium] [Azure] [Docker]                   │
│  └──────────────────────────────────────────────────────────┘
│
│  ┌──────────────────────────────────────────────────────────┐
│  │  ● Web Development Intern           Sep 2021 - May 2022   │
├──┤    PCET's Digital Marketing                               │
│  │    • Bullet point 1                                        │
│  │    • Bullet point 2                                        │
│  │    [HTML] [CSS] [JavaScript]                              │
│  └──────────────────────────────────────────────────────────┘
```

---

### Projects Page Wireframe

```
┌────────────────────────────────────────────────────────────────┐
│                      PROJECTS                                   │
│              Technical projects and innovations                 │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ │ FraudBusters - Financial Fraud Detection  Oct 2025 - Dec 2025│
│ │                                                               │
│ │ Description paragraph...                                     │
│ │                                                               │
│ │ Key Achievements:                                            │
│ │ • Achievement 1                                              │
│ │                                                               │
│ │ [Python] [ML] [Pandas] [NumPy]                              │
└────────────────────────────────────────────────────────────────┘

[Similar cards for Calendar App and AR Tool]
```

---

### Certifications Page Wireframe (AI-Generated)

```
┌────────────────────────────────────────────────────────────────┐
│              CERTIFICATIONS & AWARDS                            │
└────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────┬──────────────────────────────┐
│                                 │                              │
│  Microsoft Azure Fundamentals   │  Google BI Certificate       │
│  AZ-900 Certified               │  Professional Certificate    │
│  Description...                 │  Description...              │
│  [Microsoft Badge]              │  [Google Badge]              │
└─────────────────────────────────┴──────────────────────────────┘

┌─────────────────────────────────┬──────────────────────────────┐
│ │    IEEE Publication           │ │    Copyright               │
│ │ AR Snipping Tool              │ │ ScrapDeal App              │
└─────────────────────────────────┴──────────────────────────────┘

┌─────────────────────────────────┬──────────────────────────────┐
│  3x PTC Applause Award          │  8th Rank Holder             │
│  Description...                 │  Description...              │
└─────────────────────────────────┴──────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  Skills Competency Overview                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Test Automation & QA                                     │  │
│  │ ████████████████████████████░░░░░░ 95%                   │  │
│  └──────────────────────────────────────────────────────────┘  │
│  [5 more progress bars...]                                     │
└────────────────────────────────────────────────────────────────┘
```

---

### Mobile Wireframe (320px - 768px)

```
┌──────────────────────┐
│  ☰  Portfolio        │ ← Hamburger menu
└──────────────────────┘

┌──────────────────────┐
│  "Quote..."          │
│  — Author            │
└──────────────────────┘

┌──────────────────────┐
│  Prajakta Avachat    │
│  Product Ops | Data  │
│                      │
│  ┌────────────────┐  │
│  │   Summary      │  │
│  │   Text...      │  │
│  └────────────────┘  │
│                      │
│   ┌──────────┐       │
│   │  PHOTO   │       │ ← Photo below text on mobile
│   │ (Circle) │       │
│   └──────────┘       │
│                      │
│  [Email Button]      │
│  [LinkedIn Button]   │
│  [GitHub Button]     │
│  [Download Resume]   │
└──────────────────────┘

[Education cards stack vertically]
[Skills sections stack]
[Everything single column]
```

---
