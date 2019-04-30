---
layout: page
title: GitHub
permalink: /github/
---

# Versioning

For versioning the standard git flow is used:

1. The default branch is develop - all ongoing changes are made in it, it is a current working draft for major and minor versions.
2. Once a release is ready to be published on edi3.org, develop branch is merged to master and release tag is added. Master branch points to the latest release after that.
3. For release patches a hotfix branch from a tag in master branch is created. When the hotfix branch is ready, it is merged back to master and a patch version tag is added. The hotfix branch is merged to develop too to keep it up to date.
4. Optional - release branches can be used, but it will make sense only if there are more then one version is under development, otherwise it is just an extra step. The release branches can be supported later when the level of activity is high enough.

For more details about git flow - https://datasift.github.io/gitflow/IntroducingGitFlow.html

# Specification repository structure

The specification repository default structure:

```
{edi3-reponame}/       -->        specs/{edi3-reponame}/{version}/
- docs/                -->        - docs/
  - index.md           -->          - index.html
  - swagger.yaml       -->          - swagger.yaml && redoc-static.html
- resources/            X         (ignored, for files which doesn't need to be published - big reference files, for example)
- .gitignore            X         (ignored)
- LICENSE.txt           X         (ignored)
- README.md             X         (ignored)
- buildspec.yml         X         (ignored, a technical file for builds in AWS CodeBuild)
```

If a specification repository includes more than one specification, sub-directories are created under docs dicrectory:

```
{edi3-reponame}/       -->        specs/{edi3-reponame}/{version}/
- docs/                -->        - docs/
  - {specname-1}/      -->          - {specname-1}/
    - index.md         -->            - index.html
    - swagger.yaml     -->            - swagger.yaml && redoc-static.html
  - {specname-2}/      -->          - {specname-2}/
    - index.md         -->            - index.html
    - swagger.yaml     -->            - swagger.yaml && redoc-static.html
- resources/            X         (ignored, for files which doesn't need to be published - big reference files, for example)
- .gitignore            X         (ignored)
- LICENSE.txt           X         (ignored)
- README.md             X         (ignored)
- buildspec.yml         X         (ignored, a technical file for builds in AWS CodeBuild)

# Publishing process

At the moment an AWS CodeBuild project is sey up for every specification repo. The buidls are triggered for any push event and a build takes a minute or two and performed for each specification repo separately. 
