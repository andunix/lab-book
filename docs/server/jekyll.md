# Jekyll

## Docker

### Setup

```sh
docker run --rm -it \
--volume="$PWD:/srv/jekyll" \
--volume="$PWD/vendor/bundle:/usr/local/bundle" \
--env JEKYLL_ENV=production \
jekyll/jekyll:latest jekyll new test1
```

Dann, nach einem `cd test1`...

### Ausführen

```sh
docker run --rm -it \
--publish "4000:4000" \
--publish "35729:35729" \
--volume="$PWD:/srv/jekyll" \
--volume="$PWD/vendor/bundle:/usr/local/bundle" \
--env JEKYLL_ENV=production \
jekyll/jekyll:latest jekyll serve --livereload
```

Dann [localhost:4000](http://localhost:4000/) öffnen.

## Links

### Jekyll

- [Homepage](https://jekyllrb.com/)
- [Documentation](https://jekyllrb.com/docs/)
  - [Front Matter](https://jekyllrb.com/docs/front-matter/)
  - [Collections](https://jekyllrb.com/docs/collections/)
  - [Layouts](https://jekyllrb.com/docs/layouts/)
  - [Configuration Options](https://jekyllrb.com/docs/configuration/options/)

### Minimal Mistakes Theme

- [Homepage](https://mmistakes.github.io/minimal-mistakes/)
- [Quick-Start Guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)
- [minimal-mistakes - GitHub](https://github.com/mmistakes/minimal-mistakes)
- [mm-github-pages-starter - GitHub](https://github.com/mmistakes/mm-github-pages-starter)

### Just the Docs Theme

- [Homepage](https://pmarsceill.github.io/just-the-docs/)
- [just-the-docs - GitHub](https://github.com/pmarsceill/just-the-docs)
