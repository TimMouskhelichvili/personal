#!/bin/bash
## sudo apt install webp

cd public/static/images

for file in $(find -name "*.jpg" -o -name "*.png" -o -name "*.jpeg")
do
    if [ -e "${file%.*}.webp" ]; then
        echo "${file%.*}";
    else
        cwebp -q 85 "$file" -o "${file%.*}.webp";
    fi
done