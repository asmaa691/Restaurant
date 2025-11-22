-- FLAMES Restaurant - React Web Application
A modern, responsive restaurant website built with React.js that showcases menu items, allows customers to browse dishes, add items to a cart, and learn about the restaurant. The application features a clean, user-friendly interface with a warm color scheme that reflects the restaurant's branding.

Live Demo
[Add your live demo link here after deployment to Vercel/Netlify]

-- Screenshots of the UI


### Home Page
![Home Page](/screenshots/home.png)

### Menu Page
![Menu Page](/screenshots/menu.png)

### Shopping Cart
![Cart Functionality](/screenshots/cart.png)

### Dish Details
![Dish Details](/screenshots/dishDetails1.png)
### Dish Details
![Dish Details](/screenshots/dishDetails2.png)

### Dish Details
![Dish Details](/screenshots/dishDetails3.png)

### Dish Details
![Dish Details](/screenshots/dishDetails4.png)


### About Page
![About Page](/screenshots/about.png)

### Contact Page
![Contact Page](/screenshots/contact.png)

### Services Page
![Services Page](/screenshots/services.png)

<img width="1365" height="643" alt="services png" src="https://github.com/user-attachments/assets/fd01690e-7574-4c51-bf7b-0a88838e1026" />

-- Key Features:

Interactive menu browsing with high-quality food images

Dynamic shopping cart with add/remove functionality

Individual dish detail pages

Responsive design for all devices

Professional restaurant branding and information

This project demonstrates modern React development practices including component-based architecture, state management, client-side routing, and responsive CSS design.

-- Technologies Used
Frontend: React.js, React Router DOM

Styling: Custom CSS with Flexbox/Grid

Build Tool: Create React App

Version Control: Git & GitHub

Deployment: GitHub Pages

 --Installation & Setup
Prerequisites
Node.js (v14 or higher)

npm or yarn package manager

Steps to Run Locally
  1-Clone the repository
   git clone https://github.com/[asmaa691]/Restaurant.git
   cd flames-restaurant
  2-Install dependencies
   npm install
  3-Start development server
   npm start
  4-Open your browser
   Navigate to http://localhost:3000 to view the application  

  
-- Available Scripts
npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.



-- project structure

Restaurant/
├── public/
│   └── assets/          # Image files
│       ├── pizza.jpg
│       ├── burger.jpg
│       ├── pasta.jpg
│       └── salad.jpg
├── src/
│   ├── components/      # Reusable components
│   │   ├── Nav.js      # Navigation bar
│   │   ├── Footer.js   # Footer component
│   │   ├── DishCard.js # Dish display card
│   │   └── Cart.js     # Shopping cart
│   ├── pages/          # Page components
│   │   ├── Home.js     # Landing page
│   │   ├── About.js    # About us
│   │   ├── Menu.js     # Menu with cart
│   │   ├── Dish.js     # Dish details
│   │   ├── Contact.js  # Contact info
│   │   └── Services.js # Services offered
│   ├── data/
│   │   └── dishes.js   # Menu data
│   ├── App.js          # Main app component
│   ├── index.js        # App entry point
│   └── index.css       # Global styles
└── package.json        # Dependencies
 
--Usage
 --Browse Menu
Visit the Menu page to see all available dishes

Click "View Details" for more information about any dish

Use "Add to Cart" to add items to your order

 --Manage Cart
View your cart at the bottom of the Menu page

See itemized list with prices

Remove unwanted items with the "Remove" button

Monitor your total cost in real-time

 --Learn More
Check the About page for restaurant information

Visit Contact page for location and contact details

Explore Services page for feature overview

