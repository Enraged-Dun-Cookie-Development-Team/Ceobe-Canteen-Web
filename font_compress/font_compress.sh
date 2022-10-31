#!/bin/bash

# cd到根目录

cp -r ./src/assets/font/ ./src/assets/font-bak/
rm -rf ./src/assets/font/*

python3 -m pip install fonttools
python3 main.py

rm -rf ./src/assets/font-bak/