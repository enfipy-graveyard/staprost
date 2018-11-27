#!/usr/bin/env bash

set -e

function genDir {
  dir=$1
  echo
  echo "Generating protobuf for $dir folder"

  docker run -v `pwd`:/defs namely/protoc-all -i proto/ -f $dir.proto -l node -o gen
}

function start {
  echo "Starting protobuf build script..."

  passedDirs=$1
  uniqueFolders=`echo -e $passedDirs | uniq`

  for folder in $uniqueFolders
  do
    genDir $folder
  done
}

while [ "$1" != "" ]; do
  dirsToGen+=${1}'\n'
  shift;
done;

start $dirsToGen
