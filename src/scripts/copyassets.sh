#!/usr/bin/env bash

mkdir -p src/assets/css/vendor && mkdir -p src/assets/js/vendor && cp -r node_modules/@nysds/components/dist/nysds.* src/assets/js/vendor && cp -r node_modules/@nysds/styles/dist/* src/assets/css/vendor