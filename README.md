# Product Cards

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-5_Breakpoints-4CAF50)
![Accessible](https://img.shields.io/badge/Accessibility-ARIA-blueviolet)

A responsive product card carousel built with vanilla HTML, CSS, and JavaScript. Displays three fashion items with size selection, a favorite toggle, and full touch/swipe support. No frameworks, no dependencies beyond CDN-hosted fonts and icons.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Accessibility](#accessibility)
- [License](#license)
- [Contact](#contact)

---

## About

Product Cards is a frontend UI component built as part of a frontend development portfolio. It covers common e-commerce patterns: a paginated product carousel, per-card size selectors with unavailable state handling, a favorite toggle, and an add-to-cart button. The layout is fully responsive and works on mobile, tablet, and desktop without any JavaScript framework.

---

## Features

- Carousel navigation with previous/next arrow buttons
- Dot indicator with active state reflecting current slide
- Touch and swipe support for mobile devices
- Size selector with unavailable state (strikethrough, disabled)
- Favorite toggle with icon swap (outline/filled heart)
- Add to cart button per product
- Five responsive breakpoints (320px to 1280px)
- ARIA labels and roles throughout for screen reader compatibility

---

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, aspect-ratio, transitions)
- Vanilla JavaScript (ES6+)
- Satoshi font via Fontshare CDN
- Remix Icons via jsDelivr CDN

---

## Screenshots

**Product Cards - Smartphone Viewport**

![Product Card Leather Jacket](docs/screenshots/mockup_1.png)

**Product Card - Leather Jacket - Laptop Viewport**

![Product Card Sneakers](docs/screenshots/mockup_2.png)

**Product Card - Denim Jeans - Table Viewport**

![Product Card Denim](docs/screenshots/mockup_3.png)

---

## Getting Started

No build step required. Clone or download the project and open `index.html` directly in your browser.

1. Clone the repository:

```bash
git clone https://github.com/NaxvenUI/product-cards-1.git
cd product-cards-1
```

2. Open the file in your browser:

```bash
open index.html       # macOS
start index.html      # Windows
xdg-open index.html   # Linux
```

Or use a local development server (recommended to avoid asset path issues):

```bash
npx serve .
```

Then open your browser and go to:

```
http://localhost:3000
```

---

## Project Structure

```
product-cards-1/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── leather_jacket.png
│   │   ├── sneakers.png
│   │   └── jeans.png
│   └── js/
│       └── script.js
├── docs/
│   └── screenshots/
│       ├── mockup_1.png
│       ├── mockup_2.png
│       └── mockup_3.png
├── index.html
└── README.md
```

---

## Accessibility

- All interactive elements include descriptive `aria-label` attributes.
- Navigation dots use `role="tablist"` and `role="tab"` with keyboard support (`Enter` and `Space`).
- Unavailable size buttons use `aria-disabled="true"` and the native `disabled` attribute.
- The carousel track supports touch events with passive listeners for scroll performance.

---

## License

Distributed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

**NaxvenUI**

[![YouTube](https://img.shields.io/badge/YouTube-NaxvenUI-FF0000?style=flat&logo=youtube&logoColor=white)](https://www.youtube.com/@NaxvenUI)

[![TikTok](https://img.shields.io/badge/TikTok-NaxvenUI-000000?style=flat&logo=tiktok&logoColor=white)](https://www.tiktok.com/@naxvenui)

[![Instagram](https://img.shields.io/badge/Instagram-NaxvenUI-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/naxvenui)

[![X](https://img.shields.io/badge/X-NaxvenUI-000000?style=flat&logo=x&logoColor=white)](https://x.com/NaxvenUI)

## Support

[![Buy Me a Coffee](https://img.shields.io/badge/Support%20Naxven%20UI-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/naxvenui)

[![Ko-Fi](https://img.shields.io/badge/Support%20Naxven%20UI-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/naxvenui)

[![Patreon](https://img.shields.io/badge/Support%20Naxven%20UI-FF424D?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/naxvenui)
