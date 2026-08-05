# overscrolltactics.com

Company site for **OverscrollTactics LLC** (operating name: OTC Games) — home of
**PlayDraft**, a social drafting game for iPhone.

Static site, no build step: hand-written HTML/CSS/JS, self-hosted Montserrat,
brand SVGs inlined for the hero animation. Hosted on GitHub Pages with the
custom domain set via the `CNAME` file.

```text
index.html        home: hero animation, PlayDraft, studio facts
privacy.html      site privacy policy (app policy lands here before release)
support.html      PlayDraft support (App Store support URL)
404.html          "You've overscrolled."
assets/           css, js, fonts, brand svgs
```

The hero replays on click (the lockup is a button). Reduced-motion users get
the finished lockup with no animation.
