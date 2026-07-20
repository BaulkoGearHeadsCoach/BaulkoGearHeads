# Baulko Gearheads · FTC Team 35750

The official website for **Baulko Gearheads**, FIRST Tech Challenge rookie Team 35750 — six
Year 9 students from Baulkham Hills High School.

This is a **plain static, single-page website** (HTML, CSS and vanilla JavaScript). There is no
build step and no dependencies to install, so it can be edited with any text editor and hosted on
any static host.

## Project structure

```text
/
├── index.html          # The entire site (Home, About, Team, Mentors, What is FTC?, Sponsors)
├── css/
│   └── styles.css      # All site styles
├── js/
│   └── main.js         # Mobile nav toggle + footer year
└── assets/             # Logos, favicons and sponsor images
```

The site is a single page divided into anchored sections (`#top`, `#about`, `#team`, `#mentors`,
`#ftc`, `#sponsors`, `#contact`). The navigation links jump to these sections.

## Editing

- **Content & layout:** edit the section you want inside `index.html`.
- **Styling:** edit `css/styles.css`.
- **Behaviour:** edit `js/main.js`.
- **Images:** add them to `assets/` and reference them with a relative path (e.g. `assets/logo.png`).

## Previewing locally

Because there is no build step, just open `index.html` in a browser. For a more accurate preview
(so that root-relative links behave), you can serve the folder with any static server, for example:

```sh
# Python (if available)
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Hosting

The site is designed to be served directly by any static host (e.g. GitHub Pages) with no build
required.
