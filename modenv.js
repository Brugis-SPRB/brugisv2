#!/usr/bin/env node

const fs = require('fs')
const glob = require('glob');

const ENV_CONFIG_GEOSERVER_URBIS = {
  'DEV' : 'http://10.128.81.203:8080/geoserver/URBIS/wms',
  'STANEW' : 'https://gislab.urban.brussels/geoserver/URBIS/wms',
  'PRDNEW' : 'https://gis.urban.brussels/geoserver/URBIS/wms'
};

const ENV_CONFIG_GEOSERVER = {
  'DEV' : 'http://10.128.81.203:8080/geoserver/ows',
  'STANEW' : 'https://gislab.urban.brussels/geoserver/ows',
  'PRDNEW' : 'https://gis.urban.brussels/geoserver/ows'
};

const ENV_CONFIG_SURVEY = {
  'DEV' : 'http://10.128.81.205:8080/WebReperage',
  'STANEW' : 'https://gislab.urban.brussels/WebReperage',
  'PRDNEW' : 'https://gis.urban.brussels/WebReperage'
};

const ENV_CONFIG_PRINTURL = {
  'DEV'   : 'http://10.128.81.203:8080/geoserver/pdf',
  'STANEW'   : 'https://gislab.urban.brussels/geoserver/pdf',
  'PRDNEW'   : 'https://gis.urban.brussels/print'
};


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
  console.log("This script accept only one parameter ex: modenv DEV|STANEW|PRDNEW")
}


newLine = ENV_CONFIG_GEOSERVER[args[0]]+ "?"
replaceInFile(
  ["./wmsaatl_en.xml", "./wmsaatl_fr.xml", "./wmsaatl_nl.xml"],
  "https://gis.urban.brussels/geoserver/wms?", newLine
);

replaceInFile(
  ["./config-en.json", "./config-fr.json", "./config-nl.json"],
  "https://gis.urban.brussels/WebReperage", ENV_CONFIG_SURVEY[args[0]]
);

replaceInFile(
  ["./config-en.json", "./config-fr.json", "./config-nl.json"],
  "https://gis.urban.brussels/geoserver/ows", ENV_CONFIG_GEOSERVER[args[0]]
);

replaceInFile(
  ["./config-en.json", "./config-fr.json", "./config-nl.json"],
  "https://gis.urban.brussels/geoserver/URBIS/wms", ENV_CONFIG_GEOSERVER_URBIS[args[0]]
);

replaceSync(
  "./js/appConfig.js",
  "https://gis.urban.brussels/geoserver/ows", ENV_CONFIG_GEOSERVER[args[0]],
  'utf-8'
);

replaceSync(
  "./localConfig.json",
  'https://gis.urban.brussels/print', ENV_CONFIG_PRINTURL[args[0]],
  'utf-8'
);
