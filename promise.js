const fs = require("fs");

function writeFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

function readFile(fileName, type) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

writeFile("./1.txt", "11111")
  .then(function() {
    console.log("1.txt created");
    return readFile("./1.txt", "UTF-8");
  })
  .catch(err => {})

  .then(data1 => {
    return writeFile("./2.txt", data1 + "22222");
  })
  .catch(err => {})

  .then(function() {
    console.log("2.txt created");
    return readFile("./2.txt", "UTF-8");
  })
  .catch(err => {})

  .then(data2 => {
    return writeFile("./3.txt", data2 + "33333");
  })
  .catch(err => {})

  .then(function() {
    console.log("3.txt created");
    return readFile("./3.txt", "UTF-8");
  })
  .catch(err => {})

  .then(data3 => {
    console.log(data3);
  })
  .catch(err => {});
