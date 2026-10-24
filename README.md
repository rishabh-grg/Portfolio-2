# Rishabh Garg – Portfolio

A responsive personal portfolio website built with plain HTML, CSS and JavaScript. No frameworks, no build step.

**Live site:** _add your deployed link here_

## Features

- Responsive layout for phones, tablets and desktops
- Light and dark theme that follows the visitor's device setting
- Animated hero section with a typing effect
- Mobile hamburger menu and active-section highlighting in the navbar
- Sections for About, Skills, Projects, Education & Experience and Contact
- Contact form that sends messages by email through a form service
- Respects the "reduce motion" accessibility setting

## Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox, animations)
- Vanilla JavaScript

## Project Structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── Assets/
│   └── Images/
│       ├── Profile.png
│       └── netflix-clone.jfif
└── README.md
```

> Folder and file names are case-sensitive on most hosts (Vercel, GitHub Pages), so keep the capitalization in `index.html` identical to the real files.

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/rishabh-grg/<your-repo-name>.git
   ```
2. Open the folder
   ```bash
   cd <your-repo-name>
   ```
3. Open `index.html` in your browser, or use the Live Server extension in VS Code.

## Setting Up the Contact Form

The form is ready, but it needs an email service to deliver messages.

1. Create a free account with a service such as [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Copy the endpoint URL they give you.
3. In `index.html`, replace `action="#"` on the contact form with that URL.

## Customizing

- **Colors and fonts:** edit the variables at the top of `css/style.css` (the `:root` block).
- **Text and links:** edit `index.html`.
- **Resume:** place your file at `assets/resume.pdf`, or update the "Download CV" link in `index.html`.

## Deployment

The site is static, so it works on any static host:

- **Vercel:** import the repository and deploy
- **GitHub Pages:** Settings → Pages → select the `main` branch

## Projects Featured

- **Netflix Clone:** [Live demo](https://netflix-clone-rouge-tau.vercel.app/)

## Contact

- GitHub: [rishabh-grg](https://github.com/rishabh-grg)
- LinkedIn: [Rishabh Garg](https://www.linkedin.com/in/rishabh-garg-bb240441b/)

## License

This project is open source. Add a license of your choice (for example MIT) if you want others to reuse it.
