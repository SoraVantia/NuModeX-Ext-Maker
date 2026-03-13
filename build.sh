#!/bin/bash
# Copyright 2026 SoraVantia GK. All rights reserved.
# Dual-licensed under the Apache License 2.0 and the Marketplace Publication License.
# See LICENSE and LICENSE-MARKETPLACE for details.

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

# ZIP
cd dist/chrome && zip -r ../../numodex-ext-maker-chrome.zip . && cd ../..
cd dist/edge && zip -r ../../numodex-ext-maker-edge.zip . && cd ../..
cd dist/firefox && zip -r ../../numodex-ext-maker-firefox.zip . && cd ../..

echo "Build complete: numodex-ext-maker-chrome.zip"
echo "Build complete: numodex-ext-maker-edge.zip"
echo "Build complete: numodex-ext-maker-firefox.zip"
