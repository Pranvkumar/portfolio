# Portfolio Assets

This directory contains images and resources for the portfolio website.

## Required Images

### Project Images (1920x1080px recommended)
Add screenshots or preview images for each project:

1. **face-mask.jpg** - Face Mask Detection project
2. **engine-fault.jpg** - Engine Fault Detection project
3. **vehicle-detection.jpg** - YOLOv8 Vehicle Detection project
4. **student-system.jpg** - Student Management System screenshot
5. **flight-price.jpg** - Flight Price Prediction Engine
6. **mysql-database.jpg** - MySQL Database Labs
7. **db-optimization.jpg** - Database Performance Optimization
8. **lung-cancer.jpg** - Lung Cancer Prediction
9. **car-price.jpg** - Used Car Price Prediction
10. **algorithms.jpg** - DAA Algorithms

### Additional Assets

- **favicon.ico** - Website favicon (32x32px or 64x64px)
- **profile.jpg** - Profile photo for about section (800x800px)
- **logo.png** - Portfolio logo (optional)

## Image Guidelines

- **Format**: JPG or PNG
- **Size**: Optimize images for web (<500KB each)
- **Dimensions**: 1920x1080px for project cards (16:9 ratio)
- **Quality**: High quality but compressed

## Tools for Image Optimization

- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

## How to Add Images

1. Place images in `assets/images/` directory
2. Update `script.js` to reference images in project cards:
   ```javascript
   {
       id: 1,
       title: "Face Mask Detection",
       image: "assets/images/face-mask.jpg",
       // ... rest of project data
   }
   ```
3. Update HTML to display images in project cards

## Placeholder Images

Until actual project screenshots are added, you can use:
- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://pexels.com/) - Free stock photos
- [placeholder.com](https://placeholder.com/) - Simple placeholders

Example placeholder URLs:
- `https://via.placeholder.com/1920x1080/667eea/ffffff?text=Project+Name`
