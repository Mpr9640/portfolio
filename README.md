# Sai Siva Reddy Maddula — Portfolio

I’m Sai Siva Reddy Maddula, an engineer and the founder of [O1JOBAID](https://o1jobaid.com/).

This portfolio brings together my work, the projects I’ve built, and the technical background behind them. It’s also where I share what I’m working on next.

## What I’m Building

Job searching involves a lot of repeated work: finding suitable roles, tailoring a resume, entering the same information into applications, and remembering where each opportunity stands.

I started O1JOBAID to make that process easier to manage. It brings several parts of the job search into one place:

- AI-assisted job matching
- Resume and cover-letter preparation
- Application autofill on supported websites
- Application and interview tracking

My focus is practical: reduce the repetitive work so people can spend more time on the opportunities that matter to them.

You can explore the product at [o1jobaid.com](https://o1jobaid.com/).

## Built With

I built this portfolio with React and Vite, using React Router for navigation and plain CSS for styling. The site is configured for GitHub Pages, with deployment handled through GitHub Actions.

Routing uses `HashRouter`, which lets visitors open or refresh individual pages without needing server-side routing.

## Running Locally

You’ll need Node.js 22.12 or newer and npm.

Install the dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Then open the local URL printed in your terminal.

To create a production build:

```bash
npm run build
```

The build files go into `dist/`. To preview them locally, run:

```bash
npm run preview
```

## Project Layout

Here’s where the main parts of the site live:

| Location | What it contains |
| --- | --- |
| `src/App.jsx` | Page components, navigation, and portfolio content |
| `src/main.jsx` | React entry point and router setup |
| `src/projects.json` | Project titles and notebook links |
| `src/styles.css` | Shared styles and responsive layouts |
| `public/` | Images, résumé files, and other static assets |
| `index.html` | HTML entry point and site metadata |
| `vite.config.js` | Vite configuration |
| `.github/workflows/deploy.yml` | GitHub Pages deployment workflow |

## Pages

| Route | What’s on the page |
| --- | --- |
| `#/` | An introduction and overview of my work |
| `#/profile` | My background and interests |
| `#/o1jobaid` | Why I started O1JOBAID and how the product works |
| `#/projects` | Selected engineering projects and notebooks |
| `#/skills` | The tools and technologies I work with |
| `#/education` | My education history |
| `#/courses` | Coursework and additional learning |
| `#/contact` | Contact details and an email composer |
| `#/hire` | A redirect to the contact page |

Unrecognized routes show a page-not-found screen with a link back to the overview.

## Hosting on GitHub Pages

The site uses hash-based URLs, like this:

```text
https://USERNAME.github.io/REPOSITORY/#/projects
```

React Router handles everything after `#` in the browser, so GitHub Pages doesn’t need custom routing rules.

The Vite configuration uses relative paths for assets:

```js
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
});
```

### Deployment

The deployment workflow is in `.github/workflows/deploy.yml`.

To set it up:

1. Add the project files to the root of your GitHub repository.
2. Make sure `package-lock.json` and the `.github/workflows` directory are included.
3. Open **Settings → Pages** in the repository.
4. Select **GitHub Actions** as the deployment source.
5. Push your changes to `main`.
6. Open the **Actions** tab to check the build and deployment status.

If you use a different default branch, update the branch name in `deploy.yml`.

The workflow installs the dependencies, builds the site, and deploys the contents of `dist/`.

## Updating the Portfolio

### Page Content

Most of the content is in `src/App.jsx`, including my introduction, founder story, skills, education, courses, and contact details.

The shared product component has a few variants:

```jsx
<Product variant="overview" />
<Product variant="founder" />
<Product variant="startup" />
<Product variant="projects" />
```

These reuse the same layout while changing the content to fit each page.

### Projects

To update project titles or notebook links, edit:

```text
src/projects.json
```

### Styles

The site’s styles are in:

```text
src/styles.css
```

The main theme colors are defined near the top of the file:

```css
:root {
  --muted: #62695e;
  --line: #dcded4;
  --green: #254d36;
}
```

### Images and Documents

Static assets go in `public/`. This includes the portrait, favicon, and résumé PDFs.

Use Vite’s base URL when referencing these files:

```js
const asset = (filename) =>
  `${import.meta.env.BASE_URL}${filename}`;
```

For example, the portrait is loaded like this:

```jsx
<img
  src={asset("portrait.webp")}
  alt="Sai Siva Reddy Maddula"
/>
```

The header logo uses the same helper:

```jsx
<Link
  to="/"
  className="brand"
  aria-label="Sai Siva Reddy Maddula home"
>
  <img
    src={asset("favicon-o1-32.png")}
    alt=""
    width={32}
    height={32}
  />
</Link>
```

Files in `public/` don’t need to be imported into JSX.

## Layout and Accessibility

The layout adjusts for desktop, tablet, and mobile screens. On smaller screens, the logo stays beside the navigation, and the page links scroll horizontally.

The site includes:

- Active states for navigation links
- Visible keyboard focus
- A skip-to-content link
- Labeled form fields
- Page titles that update as visitors navigate

One detail to keep in mind when changing the layout: the stylesheet expects the header, main content, and footer to be direct children of `#root`.

## How the Contact Form Works

The contact form uses `mailto:` to open a draft in the visitor’s configured email application. They can review the message there before sending it.

The site doesn’t have a backend email service, so submitting the form doesn’t send an email or confirm delivery. If no email application is available, visitors can use the email address listed on the contact page.

## Before Publishing Updates

Before publishing, I review the résumé, project descriptions, contact details, and O1JOBAID information to make sure they’re current.

I also check:

- Navigation between pages
- Direct links and page refreshes
- Layouts on smaller screens
- The contact form’s handoff to an email application

If I add traction figures or product results, I’ll include accurate numbers and enough context to make clear what they represent.

## Get in Touch

- **O1JOBAID:** [o1jobaid.com](https://o1jobaid.com/)
- **LinkedIn:** [Sai Siva Reddy Maddula](https://www.linkedin.com/in/sai-siva-reddy-m-964504224/)
- **Email:** [sivamaddula@o1jobaid.com](mailto:sivamaddula@o1jobaid.com)
