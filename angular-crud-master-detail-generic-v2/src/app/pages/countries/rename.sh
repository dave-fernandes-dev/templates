#!/bin/bash
#dentro de arquivos
grep -rli --exclude '*.sh*' 'Country' * | xargs -i@ sed -i 's/Country/Pais/g' @
grep -rli --exclude '*.sh*' 'country' * | xargs -i@ sed -i 's/country/pais/g' @
grep -rli --exclude '*.sh*' 'Countries' * | xargs -i@ sed -i 's/Countries/Pais/g' @
grep -rli --exclude '*.sh*' 'countries' * | xargs -i@ sed -i 's/countries/pais/g' @
#pastas e arquivos
find . -execdir rename 's/country/pais/' '{}' \+
find . -execdir rename 's/countries/pais/' '{}' \+


