---

# Luffy Sweets - React E-Commerce Website

---

A modern, responsive website designed by LRBA for Luffy Sweets, a premium sweets manufacturer based in Jinja, Uganda. This platform showcases products, facilitates orders, and provides company information through an engaging user interface.

---

## Key Features


### Core Functionality
- Responsive design optimized for all device sizes
- Dynamic product catalog with detailed views
- Secure order processing system
- Integrated contact management

### User Experience
- Animated page transitions and micro-interactions
- Persistent navigation with breadcrumb trails
- Contextual search functionality
- Accessibility-compliant interface

### Business Tools
- Customer relationship management integration
- Order tracking system
- Marketing content management
- Analytics dashboard

---

## Technology Stack


### Frontend
- React 18 (Functional Components with Hooks)
- React Router 6 for navigation
- Framer Motion for animations
- CSS Modules for scoped styling
- React Icons for vector graphics

### Backend Integration
- Google Maps JavaScript API
- Form handling with Formik
- Payment processing integration

---

## Development Setup


### Prerequisites
- Node.js 16+
- npm 8+
- Google Maps API key

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/IamLRBA/luffy-sweets.git

   cd luffy-sweets
   ```

2. **Install Dependencies**
```bash
npm install  
``` 

3. **Configure Environment Variables**

Create a `.env` file in the root of your project and add the following:

```env
REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
REACT_APP_BASE_API_URL=https://api.example.com
```

### Development Scripts

#### Start development server:

```bash
npm start
```

#### Run test suite:
```bash
npm test
```

#### Lint code:
```bash
npm run lint
```

### Deployment

#### Production Build

```bash
npm run build
```

#### Deployment Options

1. **Static Hosting**

Deploy the `build/` directory to services like:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

2. **Containerized Deployment**

Docker build available via:

```bash
docker build -t luffy-sweets .
```

---

## Architecture

---

**src/**
├── components/ # Reusable UI components
├── pages/ # Route-level components
├── styles/ # Global styles and variables
├── utils/ # Helper functions
├── assets/ # Static assets
└── App.js # Root component

---

## License

---

**MIT License**  
Copyright (c) 2025 **Luffy Sweets**

---

