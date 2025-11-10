# Morsan HR

A modern HR consulting platform for Morsan Company, built to streamline human resources operations and provide comprehensive HR solutions.

## 📋 Overview

Morsan HR is a sophisticated web application designed for Morsan, a leading HR consulting firm. The platform delivers professional HR consulting services through an intuitive, responsive interface built with cutting-edge web technologies.

## ✨ Features

- **Modern UI/UX**: Clean, professional interface optimized for HR consulting workflows
- **Responsive Design**: Seamlessly adapts to desktop, tablet, and mobile devices
- **Fast Performance**: Built on Next.js for optimal loading speeds and user experience
- **Type Safety**: Full TypeScript implementation for robust, maintainable code
- **Styled Components**: Tailwind CSS integration for consistent, customizable styling

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.x or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** for cloning the repository

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:tomito26/Morsan.git
   cd Morsan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Project Structure

```
morsan-hr/
├── app/                    # Next.js app directory (pages, layouts, routes)
├── components/             # Reusable React components
├── lib/                    # Utility functions and shared logic
├── public/                 # Static assets (images, fonts, etc.)
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
└── eslint.config.mjs      # ESLint configuration
```

### Directory Details

- **`app/`**: Contains the Next.js 13+ app directory structure with routes, layouts, and page components
- **`components/`**: Houses reusable UI components used throughout the application
- **`lib/`**: Stores utility functions, helpers, and shared business logic
- **`public/`**: Static files served directly (logos, images, documents)

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check
```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific configurations:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Next.js Configuration

Customize Next.js settings in `next.config.ts`:

```typescript
// Example: Add custom domains for images
const config = {
  images: {
    domains: ['your-domain.com'],
  },
}
```

### Tailwind CSS

Modify theme settings, colors, and styles in `tailwind.config.ts`:

```typescript
// Customize colors, fonts, spacing, etc.
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    },
  },
}
```

## 🔧 Troubleshooting

### Common Issues

**Issue: `npm install` fails with dependency errors**
```bash
# Solution: Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**Issue: Port 3000 already in use**
```bash
# Solution: Run on a different port
npm run dev -- -p 3001
```

**Issue: TypeScript errors after pulling latest changes**
```bash
# Solution: Rebuild TypeScript
npm run build
# Or restart your IDE/editor
```

**Issue: Styles not loading correctly**
```bash
# Solution: Clear Next.js cache
rm -rf .next
npm run dev
```

**Issue: Git SSH authentication problems**
```bash
# Solution: Use HTTPS instead
git clone https://github.com/tomito26/Morsan.git
```

### Getting Help

If you encounter issues not covered here:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review closed issues in the GitHub repository
3. Contact the development team

## 🤝 Contributing

We welcome contributions to Morsan HR! Please follow these guidelines:

### How to Contribute

1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, documented code
   - Follow existing code style and conventions
   - Add tests for new features

4. **Commit your changes**
   ```bash
   git commit -m "Add: brief description of your changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Wait for code review

### Code Standards

- Follow TypeScript best practices
- Use ESLint rules defined in `eslint.config.mjs`
- Write meaningful commit messages
- Add comments for complex logic
- Ensure all tests pass before submitting

### Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Update documentation as needed
- Include screenshots for UI changes
- Ensure code passes all linting and type checks

## 📄 License

This project is proprietary software owned by Morsan Company. All rights reserved.

For licensing inquiries, please contact: [your-email@morsan.com]

---

## 🔗 Links

- **Repository**: [https://github.com/tomito26/Morsan](https://github.com/tomito26/Morsan)
- **Documentation**: [Project Wiki](#)
- **Website**: [www.morsan.com](#)

## 📞 Support

For technical support or questions:
- Email: support@morsan.com
- Issue Tracker: [GitHub Issues](https://github.com/tomito26/Morsan/issues)

---

