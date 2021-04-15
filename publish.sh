#!/bin/sh

rm -rfv ./../../Asset/tinymce-editor
rm -rfv ./../asset/src/tinymce-editor
mkdir -p ./../asset/src/tinymce-editor
cp -rv tinymce ./../asset/src/tinymce-editor/tinymce
cp -rv index.html ./../asset/src/tinymce-editor

