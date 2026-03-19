# Shiva GPT

🌐 **View the live interactive website →** [https://sanatan-learnings.github.io/shiva-gpt/](https://sanatan-learnings.github.io/shiva-gpt/)

## About

A verse collection project powered by Sanatan Verse SDK for studying sacred texts in a clean, bilingual UI.
It supports canonical, chapter/shloka-ordered reading and generates AI-powered visuals and audio for a more guided experience.

## Features

- Collection-based browsing with chapter/shloka navigation
- Bilingual reading (English + Hindi)
- AI-generated verse content (transliteration, meanings, translations, story/context)
- AI-generated images per verse
- AI-generated audio pronunciations (full + slow speed)
- Interactive site UX: Explore, Search Verses, Shiva Quiz, and Ask Shiva

## For Developers

### Setup

1. **Install dependencies** (always use a **virtual environment** — do not install the SDK into the system Python)
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate   # Windows: .venv\Scripts\activate
   pip install sanatan-verse-sdk
   ```

2. **Configure API keys**
   ```bash
   cp .env.example .env
   # Edit .env and add your API keys
   ```

3. **Add/extend an existing collection**
   Canonical plain-text input lives in:
   - `data/sources/<collection>.txt` (or `data/sources/<collection>/*.txt`)

   Run `verse-parse-source` once per collection:
   ```bash
   # Parse canonical source into data/verses/<collection>.yaml
   # Run this once per collection (re-run only if you update data/sources/<collection>.txt)
   verse-parse-source --collection <collection>
   ```

   Then iterate until the verse looks good:
   - `verse-generate --collection <collection> --next`
   - Review/edit generated markdown in `_verses/<collection>/`
   - Preview by refreshing the page while `bundle exec jekyll serve` is running

Full CLI options: [verse-generate docs](https://github.com/sanatan-learnings/sanatan-verse-sdk/blob/main/docs/commands/verse-generate.md).

   To regenerate a specific verse after edits (requires `--regenerate-content` because it redoes AI text):
   ```bash
   verse-generate --collection <collection> --verse <position> --regenerate-content
   ```
   where `<position>` is the 1-based position in the canonical sequence from `data/verses/<collection>.yaml`.
   If you want to regenerate media too, add `--image` / `--audio`.

4. **Add a new collection**
   Scaffold a new collection:
   ```bash
   verse-init --collection <new-collection>
   ```

   Add canonical input under `data/sources/<new-collection>.txt`, then run:
   ```bash
   # Parse canonical source into data/verses/<new-collection>.yaml
   # Run this once for the new collection (re-run only if you update data/sources/<new-collection>.txt)
   verse-parse-source --collection <new-collection>
   ```

   Then repeat the same iteration loop shown above (generate with `verse-generate --collection <new-collection> --next`, review/edit `_verses/<new-collection>/`, and preview by refreshing while `bundle exec jekyll serve` is running).

5. **Serve the site locally**
   ```bash
   bundle install
   bundle exec jekyll serve
   ```

## Project Structure

```
shiva-gpt/
├── _data/
│   ├── collections.yml          # Collection registry
│   └── verse-config.yml         # Project-level defaults (subject, subject_type)
├── _verses/
│   └── <collection-key>/        # Generated verse markdown files (review/edit here)
├── data/
│   ├── themes/
│   │   └── <collection-key>/    # Theme configurations
│   ├── verses/
│   │   └── <collection>.yaml    # Canonical verse text (output of verse-parse-source)
│   ├── scenes/                  # Scene descriptions for image generation
│   ├── sources/                 # Canonical plain-text input for verse-parse-source
│   ├── puranic-index/           # Indexed Puranic episodes
│   └── embeddings/              # Vector embeddings
│       └── puranic/             # Puranic source embeddings
├── images/                      # Generated images (typically gitignored)
├── audio/                       # Generated MP3s
└── .env                         # API keys (gitignored)
```

## Documentation

- [Usage Guide](https://github.com/sanatan-learnings/sanatan-verse-sdk/blob/main/docs/usage.md)
- [Commands Reference](https://github.com/sanatan-learnings/sanatan-verse-sdk/blob/main/docs/README.md)
- [Troubleshooting](https://github.com/sanatan-learnings/sanatan-verse-sdk/blob/main/docs/troubleshooting.md)

## License

MIT
