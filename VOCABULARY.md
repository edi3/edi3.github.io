# Vocabulary static files generation

In order to get the static output for the vocabulary publishing at http://unece.org/uncefact/vocabulary the build script [build.sh](./build.sh) was developed.

It uses [_config_uncefact.yml](./_config_uncefact.yml) to define /uncefact as a baseurl and exclude extra directories from the conversion.
To generate the static files (run jekyll build) a docker image jekyll/jekyll is used, so Docker is a prerequisite tool.
The generation process may take a while. 
An archive file `vocabulary.tar.gz` is produced as an output and includes all static resources that needs to be deployed to get the vocabulary published.
