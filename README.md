# Aurelia Rompas: portfolio

A static portfolio site (plain HTML, CSS and a little JavaScript). No build step, so you can edit any file and push.

## Put it online with GitHub Pages

1. Create a repository. Name it `YOUR-USERNAME.github.io` if you want the site at `https://YOUR-USERNAME.github.io`; any other name gives `https://YOUR-USERNAME.github.io/REPO-NAME/`.
2. Upload everything in this folder (including the hidden `.nojekyll` file) to the repository root.
3. In the repository, open **Settings > Pages**, set **Source** to "Deploy from a branch", choose `main` and `/ (root)`, then save.
4. The site is live a minute or two later at the address shown on that page.

## Add your CVs

The **Download CV** button (in the hero and the top menu) opens a list of four versions. Each one links to a PDF in `assets/cv/`. Export each CV from Overleaf and save it with exactly these names:

| Menu option | File name |
|---|---|
| General | `assets/cv/Aurelia_Rompas_CV_General.pdf` |
| Operations / supply chain analyst | `assets/cv/Aurelia_Rompas_CV_Operations_Supply_Chain.pdf` |
| Data / business analyst | `assets/cv/Aurelia_Rompas_CV_Data_Business_Analyst.pdf` |
| AI / data science | `assets/cv/Aurelia_Rompas_CV_AI_Data_Science.pdf` |

A version without its PDF leads to a "not found" page, so upload all four before you share the site. To rename or remove an option, edit the `cv-options` list in `index.html` and in the menu of each project page.

## Folder layout

```
index.html                  home page (about, projects, experience, skills, contact)
projects/                   one page per project
projects/_template.html     blank page to copy for a new project
assets/css/style.css        all styling; colours and fonts are at the top
assets/js/main.js           mobile menu and CV menu
assets/cv/                  your CV PDFs (see above)
assets/img/aurelia.webp     your photo, shown in a circle (square image, about 1100 x 1100 px)
assets/img/projects/        cover illustrations, one per project
```

## Update a project page

Open the file in `projects/`, for example `projects/dsv-digital-twin.html`. Sections you can change are marked with `EDIT` or `OPTIONAL` comments:

- **Cover image**: replace the `src` with your own screenshot, e.g. `../assets/img/projects/dsv-cover.jpg` (wide images around 2:1 look best).
- **Gallery**: remove the comment markers around the gallery block and point it at your screenshots.
- **Links**: remove the comment markers around the links block to add a GitHub repo, demo or report.

If you change a project's title or summary, change it on its card in `index.html` too.

## Add a new project

1. Copy `projects/_template.html`, rename it (e.g. `projects/my-new-project.html`) and fill in the text.
2. In `index.html`, copy one `<article class="project-card">` block (or a `<a class="mini-card">` block for hackathons), then change the text, image and link.
3. Update the "Previous project" / "Next project" links at the bottom of the neighbouring pages if you want it in the sequence.

## Change colours or fonts

Edit the `:root` block at the top of `assets/css/style.css`. Fonts load from Google Fonts in each page's `<head>`.

## Show a GitHub icon in the footer

Each page's footer has a commented-out GitHub link. Replace `YOUR-USERNAME` and remove the comment markers.
