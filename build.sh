#!/bin/bash

rm -rf vocabulary.tar.gz
rm -rf uncefact
rm -rf _site
mkdir  uncefact

docker run --rm   --volume="$PWD:/srv/jekyll" \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  /bin/sh -c "jekyll build  --config _config_uncefact.yml"
RESULT=$?
if [[ ${RESULT} -ne 0 ]]; then
        echo -e "\nCan't bundle exec jekyll build"
        exit 1
fi
cp -r _data uncefact/
cp -r _site/. uncefact/

tar -czvf vocabulary.tar.gz uncefact
exit $?


exit
