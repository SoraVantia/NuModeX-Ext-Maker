#!/bin/bash
# Copyright 2026 SoraVantia GK. All rights reserved.
# Licensed under the Business Source License 1.1. See LICENSE for details.

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

# Firefox build
mkdir -p dist/firefox
cp -r src/* dist/firefox/
cp browsers/firefox/manifest.json dist/firefox/

# Whale build
mkdir -p dist/whale
cp -r src/* dist/whale/
cp browsers/whale/manifest.json dist/whale/

# ZIP
cd dist/chrome && zip -r ../../numodex-ext-maker-chrome.zip . && cd ../..
cd dist/edge && zip -r ../../numodex-ext-maker-edge.zip . && cd ../..
cd dist/firefox && zip -r ../../numodex-ext-maker-firefox.zip . && cd ../..
cd dist/whale && zip -r ../../numodex-ext-maker-whale.zip . && cd ../..

echo "Build complete: numodex-ext-maker-chrome.zip"
echo "Build complete: numodex-ext-maker-edge.zip"
echo "Build complete: numodex-ext-maker-firefox.zip"
echo "Build complete: numodex-ext-maker-whale.zip"
