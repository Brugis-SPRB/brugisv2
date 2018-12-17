#!/usr/bin/env node

const fs = require('fs')
const glob = require('glob');

const ENV_CONFIG_GEOSERVER = {
  'DEV' : 'http://10.128.81.203:8080/geoserver/ows',
  'STA' : 'http://mybrugis.irisnetlab.be/geoserver/ows',
  'PRD' : 'https://mybrugis.irisnet.be/geoserver/ows',
  'PRDSTUB' : 'https://mybrugis.irisnet.be/geoserver/www/wmsaatl/wmsc_brugis_anon.xml'
};

const ENV_CONFIG_SURVEY = {
  'DEV' : 'http://10.128.81.205:8080/WebReperage',
  'STA' : 'http://mbr127.irisnetlab.be/WebReperage',
  'PRD' : "https://mbr227.irisnet.be/WebReperage"
}


function replaceSync(file, from, to, enc) {
  const regExFrom = new RegExp(from, "g")
  const content = fs.readFileSync(file, enc);
  const newContent = content.replace(regExFrom, to);
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
  "https://mybrugis.irisnet.be/geoserver/wms?SERVICE=WMS&amp;", ENV_CONFIG_GEOSERVER[args[0]]+ "?SERVICE=WMS&amp;"
);

replaceInFile(
  ["./config-en.json", "./config-fr.json", "./config-nl.json"],
  ENV_CONFIG_SURVEY['PRD'], ENV_CONFIG_SURVEY[args[0]]
);

replaceInFile(
  ["./config-en.json", "./config-fr.json", "./config-nl.json"],
  ENV_CONFIG_GEOSERVER['PRD'], ENV_CONFIG_GEOSERVER[args[0]]
);

replaceInFile(
  ["./js/appConfig.js"],
  ENV_CONFIG_GEOSERVER['PRDSTUB'], ENV_CONFIG_GEOSERVER[args[0]]
);
