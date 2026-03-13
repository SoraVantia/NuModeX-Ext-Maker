#!/bin/bash

# Clean
rm -rf dist/

# Chrome build
mkdir -p dist/chrome
cp -r src/* dist/chrome/
cp browsers/chrome/manifest.json dist/chrome/

# Edge build
mkdir -p dist/edge
cp -r src/* dist/edge/
cp browsers/edge/manifest.json dist/edge/

# ZIP
cd dist/chrome && zip -r ../../numodex-ext-maker-chrome.zip . && cd ../..
cd dist/edge && zip -r ../../numodex-ext-maker-edge.zip . && cd ../..

echo "Build complete: numodex-ext-maker-chrome.zip"
echo "Build complete: numodex-ext-maker-edge.zip"
