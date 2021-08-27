# sed

## Fix a wrong frontmatter of Markdown files

Replace the line '+++' to '---' in every file named '*.md'

```sh
find . -type f -name '*.md' -exec sed -i '' 's/^+++$/---/' {} \;
```
