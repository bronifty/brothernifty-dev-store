# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview

This is a Shopify theme development store called "brothernifty-dev-store" based on the JS Mastery/Dawn theme (v1.2.0). It's a bike shop theme called "Bike Shack" with custom sections and styling. The theme follows Shopify's standard directory structure and uses Liquid templating.

## Common Development Commands

### Theme Development
```bash
# Start local development server (requires theme to be linked)
shopify theme dev

# Deploy theme to store
shopify theme push

# Pull changes from store
shopify theme pull

# Serve theme locally and watch for changes
shopify theme serve
```

### File Operations
```bash
# View theme structure
find . -type d -maxdepth 2 | grep -E "(sections|templates|snippets|assets|layout)"

# Find specific Liquid files
find sections templates snippets layout -name "*.liquid" | grep [keyword]

# Search for specific content in Liquid files
grep -r "search_term" sections/ templates/ snippets/ layout/
```

### Asset Management
```bash
# Watch CSS/JS changes (if using build tools)
# Note: This theme uses direct CSS/JS files in assets/ directory

# List all CSS components
find assets -name "component-*.css"

# List all JavaScript modules
find assets -name "*.js"
```

## Architecture & Structure

### Theme Architecture
- **Theme Base**: Built on Shopify Dawn theme with JS Mastery customizations
- **Brand**: "Bike Shack" - bicycle retail store
- **Color Schemes**: 5 predefined schemes (scheme-1 through scheme-5) with dark/neon palette
- **Template System**: JSON-based templates with Liquid sections

### Directory Structure
```
├── assets/          # CSS, JS, and static assets
│   ├── base.css     # Core styles and CSS variables
│   ├── global.js    # Main JavaScript functionality
│   ├── constants.js # JavaScript constants and pub/sub events
│   └── component-*  # Component-specific styles
├── config/          # Theme configuration
│   ├── settings_data.json    # Store-specific settings (auto-generated)
│   └── settings_schema.json  # Theme settings schema
├── layout/          # Base layout templates
│   ├── theme.liquid    # Main layout
│   └── password.liquid # Password page layout
├── sections/        # Reusable sections
│   ├── main-*       # Page-specific main sections
│   ├── test-section.liquid  # Custom test section
│   └── [other sections]
├── snippets/        # Reusable code fragments
├── templates/       # Page templates (JSON format)
│   ├── index.json   # Homepage template
│   ├── product.json # Product page template
│   └── [other templates]
├── locales/         # Translation files
└── .shopify/        # Shopify CLI configuration
```

### CSS Architecture
- **CSS Custom Properties**: Extensive use of CSS variables for theming
- **Component-based**: Each component has its own CSS file (component-*.css)
- **Design System**: Consistent spacing, colors, and typography through CSS variables
- **Responsive**: Mobile-first approach with breakpoints at 750px and 990px

### JavaScript Architecture
- **Event-driven**: Uses pub/sub pattern for component communication
- **Accessibility**: Focus management and keyboard navigation
- **Web Components**: Custom elements like `QuantityInput`
- **Media Handling**: Video pause/play functionality

### Key Components
1. **Color Schemes**: 5 customizable color schemes with CSS custom properties
2. **Card System**: Product, collection, and blog cards with consistent styling
3. **Global JavaScript**: Focus management, media controls, quantity inputs
4. **Section System**: Modular sections with JSON schema for admin customization

### Custom Features
- **Test Section**: Custom section in `sections/test-section.liquid` for development
- **Enhanced Product Cards**: Custom CSS for hover effects and scaling
- **Cart Functionality**: Drawer-style cart with notification system
- **Image Optimization**: Shopify's image transformation API usage

### Settings & Configuration
- **Theme Settings**: Configured via `config/settings_schema.json`
- **Store Data**: Current settings in `config/settings_data.json` (auto-generated)
- **Metafields**: Configuration in `.shopify/metafields.json`

### Development Patterns
1. **Liquid Templating**: All templates use Shopify Liquid
2. **JSON Templates**: Modern Shopify 2.0 section-based templates
3. **CSS Variables**: Dynamic theming through custom properties
4. **Progressive Enhancement**: JavaScript enhances basic HTML functionality
5. **Component Isolation**: Each component is self-contained with its own styles

### Important Files
- `layout/theme.liquid`: Main theme layout with CSS variable definitions
- `assets/global.js`: Core JavaScript functionality and accessibility features
- `assets/base.css`: Foundation styles and responsive system
- `config/settings_schema.json`: Theme customization options
- `sections/test-section.liquid`: Example custom section for development

### Testing & Development
- Use `sections/test-section.liquid` for experimenting with new features
- Modify `templates/index.json` to test homepage changes
- CSS changes require browser refresh (no hot reloading)
- Liquid changes reflect immediately with `shopify theme dev`

## Working with This Codebase

### Adding New Sections
1. Create `.liquid` file in `sections/` directory
2. Include schema with settings and presets
3. Add corresponding CSS in `assets/component-[name].css`
4. Reference in template JSON files

### Modifying Styles
1. Use CSS custom properties for consistent theming
2. Follow component naming convention: `component-[name].css`
3. Maintain responsive design patterns
4. Test across all 5 color schemes

### JavaScript Development
1. Follow existing pub/sub pattern for component communication
2. Maintain accessibility features (focus management, ARIA)
3. Use web components for complex UI elements
4. Keep scripts modular and defer loading when possible
