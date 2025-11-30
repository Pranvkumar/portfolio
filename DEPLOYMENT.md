# Portfolio Deployment Guide

Complete guide for deploying your portfolio to various platforms.

## 📋 Pre-Deployment Checklist

### Content Updates
- [ ] Replace placeholder email in `index.html` with actual email
- [ ] Update GitHub username in social links
- [ ] Update LinkedIn profile URL
- [ ] Add actual project images to `assets/images/`
- [ ] Update project GitHub links in `script.js`
- [ ] Add your resume/CV file
- [ ] Test contact form (if using backend)

### Technical Checks
- [ ] Test all navigation links
- [ ] Verify responsive design on mobile/tablet
- [ ] Check cross-browser compatibility
- [ ] Optimize all images (<500KB each)
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Test GPU demo script locally
- [ ] Fix any console errors

### SEO & Meta Tags
- [ ] Add meta description to `<head>`
- [ ] Add Open Graph tags for social sharing
- [ ] Add Twitter Card tags
- [ ] Create favicon and add to HTML
- [ ] Add Google Analytics (optional)
- [ ] Create sitemap.xml
- [ ] Create robots.txt

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended for Portfolio)

**Advantages:**
- Free hosting
- HTTPS by default
- Easy to update (just push to repo)
- Custom domain support
- Great for static sites

**Steps:**

1. **Create Public Repository**
   ```bash
   cd C:\Coding\Portfolio
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `portfolio` or `<username>.github.io`
   - Keep it public
   - Don't initialize with README

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/Pranvkumar/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch
   - Branch: `main`, Folder: `/ (root)`
   - Click Save

5. **Access Your Site**
   - URL: `https://pranvkumar.github.io/portfolio/`
   - Or use custom domain (see below)

**Custom Domain Setup:**
1. Add `CNAME` file to root with your domain:
   ```
   portfolio.pranvkumar.com
   ```
2. Configure DNS:
   - A Record: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME: `pranvkumar.github.io`
3. Enable HTTPS in GitHub Pages settings

---

### Option 2: Netlify

**Advantages:**
- Continuous deployment from Git
- Free SSL/HTTPS
- Form handling built-in
- Instant cache invalidation
- Better performance than GitHub Pages

**Steps:**

1. **Push Code to GitHub** (if not already)
   ```bash
   git init
   git add .
   git commit -m "Portfolio website"
   git remote add origin https://github.com/Pranvkumar/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to https://netlify.com
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub
   - Select your portfolio repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `/`
   - Click "Deploy site"

3. **Configure**
   - Custom domain: Site settings > Domain management
   - HTTPS: Enabled by default
   - Forms: Automatically detected if you add `netlify` attribute

**Contact Form Integration:**
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- your form fields -->
</form>
```

---

### Option 3: Vercel

**Advantages:**
- Fastest deployment
- Excellent performance
- Free SSL
- Edge network (global CDN)
- Great developer experience

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd C:\Coding\Portfolio
   vercel
   ```

3. **Follow Prompts**
   - Login to Vercel
   - Set up project
   - Deploy!

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

**Alternative: Vercel for GitHub**
- Import repository at https://vercel.com/new
- Auto-deploys on every push to main

---

### Option 4: Firebase Hosting

**Advantages:**
- Google's infrastructure
- Free SSL
- Fast global CDN
- Can add backend features later

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   cd C:\Coding\Portfolio
   firebase login
   firebase init hosting
   ```

3. **Configuration**
   - Public directory: `.` (current directory)
   - Single-page app: No
   - Automatic builds: No

4. **Deploy**
   ```bash
   firebase deploy
   ```

---

## 🔧 Post-Deployment Tasks

### 1. Test Everything
```bash
# Use these tools to test your live site:
# - https://validator.w3.org/ (HTML validation)
# - https://jigsaw.w3.org/css-validator/ (CSS validation)
# - https://developers.google.com/speed/pagespeed/insights/ (Performance)
# - https://wave.webaim.org/ (Accessibility)
```

### 2. Set Up Analytics

**Google Analytics:**
```html
<!-- Add to <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Social Sharing Meta Tags

Add to `<head>` in `index.html`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://portfolio.pranvkumar.com/">
<meta property="og:title" content="Pranvkumar - Full Stack Developer & AI/ML Engineer">
<meta property="og:description" content="Portfolio showcasing AI/ML projects, backend development, and database engineering expertise.">
<meta property="og:image" content="https://portfolio.pranvkumar.com/assets/preview.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://portfolio.pranvkumar.com/">
<meta property="twitter:title" content="Pranvkumar - Full Stack Developer & AI/ML Engineer">
<meta property="twitter:description" content="Portfolio showcasing AI/ML projects, backend development, and database engineering expertise.">
<meta property="twitter:image" content="https://portfolio.pranvkumar.com/assets/preview.jpg">
```

### 4. Create Sitemap

Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://portfolio.pranvkumar.com/</loc>
    <lastmod>2025-11-30</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 5. Create robots.txt

Create `robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://portfolio.pranvkumar.com/sitemap.xml
```

---

## 📊 Performance Optimization

### Image Optimization
```bash
# Install image optimization tools
npm install -g imagemin-cli

# Optimize all images
imagemin assets/images/*.{jpg,png} --out-dir=assets/images/optimized
```

### Minify CSS/JS (Optional)
```bash
# Install minification tools
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o style.min.css style.css

# Minify JS
uglifyjs script.js -o script.min.js -c -m
```

### Enable Compression
Most hosting platforms enable Gzip/Brotli compression automatically.

---

## 🔒 Security Best Practices

1. **Content Security Policy**
   Add to `<head>`:
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; img-src 'self' https: data:;">
   ```

2. **HTTPS Only**
   Ensure HTTPS is enforced (automatic on GitHub Pages, Netlify, Vercel)

3. **Form Protection**
   - Use reCAPTCHA for contact form
   - Implement rate limiting
   - Validate all inputs

---

## 📱 Testing Checklist

### Browser Testing
- [ ] Chrome/Edge (Latest)
- [ ] Firefox (Latest)
- [ ] Safari (Mac/iOS)
- [ ] Mobile browsers

### Device Testing
- [ ] Desktop (1920x1080, 1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667, 414x896)

### Functionality Testing
- [ ] All navigation links work
- [ ] Smooth scrolling functions
- [ ] Project filters work
- [ ] Contact form submits
- [ ] Mobile menu toggles
- [ ] All external links open in new tab

### Performance Testing
```bash
# Run Lighthouse audit
# Chrome DevTools > Lighthouse > Generate Report
# Target scores:
# - Performance: 90+
# - Accessibility: 90+
# - Best Practices: 90+
# - SEO: 90+
```

---

## 🆘 Troubleshooting

### Issue: CSS/JS not loading after deployment
**Solution:** Check file paths are relative, not absolute
```html
<!-- ✓ Correct -->
<link rel="stylesheet" href="style.css">
<!-- ✗ Incorrect -->
<link rel="stylesheet" href="/style.css">
```

### Issue: Images not showing
**Solution:** Verify image paths and case sensitivity
```javascript
// GitHub Pages is case-sensitive
image: "assets/images/project.jpg" // Must match exact filename
```

### Issue: Contact form not working
**Solution:** 
- For Netlify: Add `data-netlify="true"` attribute
- For custom backend: Set up form handler endpoint
- For static: Use FormSpree or similar service

### Issue: HTTPS not working
**Solution:**
- GitHub Pages: Wait 10-20 minutes after enabling
- Custom domain: Verify DNS propagation (use https://dnschecker.org)
- Force HTTPS in repository settings

---

## 🔄 Continuous Deployment

### Automated Workflow (GitHub Actions)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

---

## 📧 Contact Form Backend Options

### Option 1: FormSpree (Easiest)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Option 2: Netlify Forms (Built-in)
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- Your form fields -->
</form>
```

### Option 3: Custom Backend
Set up a simple Node.js/Python backend for form handling.

---

## 🎯 Next Steps After Deployment

1. **Share Your Portfolio**
   - Update LinkedIn profile with portfolio link
   - Add to GitHub profile README
   - Share on Twitter/social media
   - Include in resume/CV

2. **Monitor Performance**
   - Set up Google Analytics
   - Monitor uptime (use UptimeRobot)
   - Track visitor engagement

3. **Continuous Improvement**
   - Add new projects regularly
   - Update skills and experience
   - Collect feedback from viewers
   - Keep content fresh and current

4. **SEO Optimization**
   - Submit to Google Search Console
   - Create blog posts (optional)
   - Build backlinks
   - Share on developer communities

---

## 📝 Summary

**Recommended Deployment Path:**
1. ✅ Create public GitHub repository
2. ✅ Deploy to GitHub Pages (free, easy)
3. ✅ Add custom domain (optional)
4. ✅ Enable Google Analytics
5. ✅ Share on social media

**Estimated Time:** 30-60 minutes

**Cost:** $0 (free hosting)

---

**Questions or Issues?**
- GitHub Pages Docs: https://docs.github.com/pages
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs

**Last Updated:** November 30, 2025
