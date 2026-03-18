# Shiva GPT

Verse collection project powered by [Sanatan Verse SDK](https://github.com/sanatan-learnings/sanatan-verse-sdk).

**Jekyll output:** `bundle exec jekyll serve` / `jekyll build` writes the compiled site to `_site/` (and cache under `.jekyll-cache/`). Source of truth is this repo (`index.html`, `_verses/`, `images/`, `audio/`, etc.); `_site/` is regenerated each build and is gitignored.

## Setup

1. **Install dependencies**
   ```bash
   pip install sanatan-verse-sdk
   ```

2. **Configure API keys**
   ```bash
   cp .env.example .env
   # Edit .env and add your API keys
   ```

3. **Add your collections**
   - Edit `_data/collections.yml` to define your collections
   - Create verse files in `_verses/<collection-key>/`
   - Add canonical text in `data/verses/<collection>.yaml`

4. **Generate content**
   ```bash
   # List available collections
   verse-generate --list-collections

   # Generate multimedia content
   verse-generate --collection <collection-key> --verse 1
   ```

## Project Structure

```
shiva-gpt/
├── _data/
│   ├── collections.yml          # Collection registry
│   └── verse-config.yml         # Project-level defaults (subject, subject_type)
├── _verses/
│   └── <collection-key>/        # Verse markdown files
├── data/
│   ├── themes/
│   │   └── <collection-key>/    # Theme configurations
│   ├── verses/
│   │   └── <collection>.yaml    # Canonical verse text
│   ├── scenes/                  # Scene descriptions for image generation
│   ├── sources/                 # Source texts for RAG indexing
│   ├── puranic-index/           # Indexed Puranic episodes
│   └── embeddings/              # Vector embeddings
│       └── puranic/             # Puranic source embeddings
├── images/                      # Generated images (gitignored)
├── audio/                       # Generated MP3s (commit for static hosting)
└── .env                         # API keys (gitignored)
```

## Documentation

- [Usage Guide](https://github.com/sanatan-learnings/sanatan-verse-sdk/blob/main/docs/usage.md)
- [Commands Reference](https://github.com/sanatan-learnings/sanatan-verse-sdk/blob/main/docs/README.md)
- [Troubleshooting](https://github.com/sanatan-learnings/sanatan-verse-sdk/blob/main/docs/troubleshooting.md)

## License

MIT
