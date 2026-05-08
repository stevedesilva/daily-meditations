# Daily Inspiration

A simple static page that offers a calm daily pairing:

- one Stoic reflection
- one motivational quote

The quotes are selected locally from curated lists, so the page works without a backend or external API.

## Run locally

Open `index.html` in a browser, or serve the folder with any static file server.

Example with Python:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## How it works

- `quotes.js` stores the Stoic and motivational quote collections.
- `script.js` derives a stable key from the current date.
- One quote is selected from each category, so everyone sees the same pairing on the same day.

## Deploy with GitHub Pages

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Set the source to deploy from the `main` branch and `/root`.
5. Save the settings and wait for the site to publish.

Because the project is fully static, no build step is required.
