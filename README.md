# Card website

A simple, fast link page for GitHub Pages.

## Customize

Open `index.html` and replace:

- `NekoBlossomTTV` and the profile image;
- the short profile description;
- the example URLs for YouTube, X, Instagram and Discord;
- the link names and descriptions, if desired.

## Publish with GitHub Pages

1. Create a new repository on GitHub.
2. Upload `index.html`, `styles.css`, `script.js`, `.nojekyll` and the complete `assets` folder to its root.
3. Open **Settings > Pages** in the repository.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch, choose `/ (root)` and click **Save**.

GitHub will then display the public address of the website.

## Live appearance preview

The regular page stays unchanged while the stream is offline. To preview the
live design during development, add `?preview=live` to the page URL. The red
profile glow, `LIVE NOW` badge and Twitch button will then appear.

## Automatic Twitch status

The website checks the configured Twitch channel every ten seconds through the
public DecAPI uptime endpoint. It updates the live appearance immediately,
without reloading the complete page and without exposing Twitch credentials.

The current status-test channel is `FemboyBlossom`. Change `twitchChannel` in
`script.js` back to `nekoblossomttv` after testing, and restore the matching
`Watch the stream` URL in `index.html`.

After publishing, replace the relative `og:image` and `twitter:image` values in
`index.html` with the complete public URL to `assets/social-preview.png`. This ensures
that Discord and other social platforms can retrieve the preview reliably.
