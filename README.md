# Card website

A simple, fast link page for GitHub Pages.

## Customize

Open `index.html` and replace:

- `NekoBlossomTTV` and the profile image;
- the short profile description;
- the example URLs for YouTube, Twitch, X, Instagram and Discord;
- the link names and descriptions, if desired.

## Publish with GitHub Pages

1. Create a new repository on GitHub.
2. Upload `index.html`, `styles.css`, `script.js`, `.nojekyll` and the complete `assets` folder to its root.
3. Open **Settings > Pages** in the repository.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch, choose `/ (root)` and click **Save**.

GitHub will then display the public address of the website.

After publishing, replace the relative `og:image` and `twitter:image` values in
`index.html` with the complete public URL to `assets/social-preview.png`. This ensures
that Discord and other social platforms can retrieve the preview reliably.
