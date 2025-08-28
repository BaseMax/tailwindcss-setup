# Tailwind CSS Setup Example

This repository provides a minimal setup for integrating Tailwind CSS version 4 into a static HTML project, utilizing Vite for development and build processes. It serves as a foundational template for developers looking to implement Tailwind CSS with custom configurations and modern tooling.

## 🚀 Project Overview

This project demonstrates how to:

* Set up Tailwind CSS v4 with Vite.
* Customize the Tailwind configuration to include custom colors.
* Build and serve the project locally using PHP's built-in server.

## 🛠️ Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* [npm](https://npmjs.com/)
* [PHP](https://www.php.net/) (for local server)

## 📁 Project Structure

```
tailwindcss-setup/
├── dist/                 # Compiled output (HTML, CSS, JS)
├── index.html            # Main HTML page
├── test.html             # Secondary HTML page
├── tailwind.config.js    # Tailwind CSS configuration
├── tailwind.css          # Custom CSS file
├── main.js               # JavaScript entry point
└── package.json          # Project metadata and dependencies
```

## ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/BaseMax/tailwindcss-setup.git
   cd tailwindcss-setup
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Initialize Tailwind CSS:**

   ```bash
   npx tailwindcss init -p
   ```

4. **Configure Tailwind:**

   Update `tailwind.config.js` to include custom colors:

   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ['./*.html', './*.js'],
     theme: {
       extend: {
         colors: {
           'table-header': '#091a52',
           'highlight': '#ff5733',
         },
       },
     },
     safelist: ['bg-table-header', 'text-highlight'],
     plugins: [],
   };
   ```

5. **Create your CSS file:**

   In `tailwind.css`, include the Tailwind directives:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   
   @theme {
     --color-table-header: #091a52;
     --color-highlight: #ff5733;
   }
   ```

6. **Build the project:**

   ```bash
   npm run build
   ```

7. **Serve the project locally:**

   ```bash
   php -S localhost:4646 -t dist
   ```

   Visit `http://localhost:4646` in your browser to view the project.

## 📄 Example Pages

* **index.html:** The main landing page showcasing custom Tailwind styles.
* **test.html:** A secondary page for testing purposes.

## 📚 Resources

* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [Vite Documentation](https://vitejs.dev/)

## 📄 License

This project is licensed under the MIT License.

Copyright 2025, Max Base
