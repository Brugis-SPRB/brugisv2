#!/usr/bin/env node

const fs = require('fs')
const glob = require('glob');

const ENV_CONFIG_GEOSERVER = {
  'DEV' : 'http://svappmavw115:8080/geoserver/wms',
  'STA' : 'http://mybrugis.irisnetlab.be/geoserver/wms',
  'PRD' : 'https://mybrugis.irisnet.be/geoserver/wms'
};

const ENV_CONFIG_SURVEY = {
  'DEV' : 'http://10.1.2.125/WebReperage',
  'STA' : 'http://192.168.22.127/WebReperage',
  'PRD' : "https://mbr227.irisnet.be/WebReperage"
}

https://mybrugis.irisnet.be/geoserver/ows

function replaceSync(file, from, to, enc) {
  const content = fs.readFileSync(file, enc);
  const newContent = content.replace(from, to);
  if (content === newContent) {
    console.log("New content equals old content for" + file + " from:" + from + " to:" + to);
    return false;
  }
  fs.writeFileSync(file, newContent, enc);
  return true;
}

function replaceInFile(filePaths, from, to) {
  filePaths.map(file => {
      return replaceSync(file, from, to, 'utf-8');
  });
}

//Grab provided args
const args = process.argv.slice(2);

if(args.length != 1) {
  console.log("This script accept only one parameter ex: modenv DEV|STA|PRD")
}

replaceInFile(
  ["./wmsaatl_en.xml", "./wmsaatl_fr.xml", "./wmsaatl_nl.xml"],
  ENV_CONFIG_GEOSERVER['PRD'] + "?SERVICE=WMS&amp;", ENV_CONFIG_GEOSERVER[args[0]]+ "?SERVICE=WMS&amp;"
);

replaceInFile(
  ["./config-en.json", "./config-fr.json", "./config-nl.json"],
  ENV_CONFIG_SURVEY['PRD'], ENV_CONFIG_SURVEY[args[0]]
);

replaceInFile(
  ["./config-en.json", "./config-fr.json", "./config-nl.json"],
  ENV_CONFIG_GEOSERVER['PRD'], ENV_CONFIG_GEOSERVER[args[0]]
);
