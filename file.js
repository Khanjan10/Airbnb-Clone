const os = require("os");
const { getDiskInfoSync } = require('node-disk-info');


console.log(os.cpus().length);

// disk-info.js

try {
  const disks = getDiskInfoSync();

  disks.forEach(disk => {
    console.log(`Drive: ${disk.mounted}`);
    console.log(`Total Space: ${(disk.blocks / (1024 ** 3)).toFixed(2)} GB`);
    console.log(`Used Space: ${(disk.used / (1024 ** 3)).toFixed(2)} GB`);
    console.log(`Available: ${(disk.available / (1024 ** 3)).toFixed(2)} GB`);
    console.log('---------------------------');
  });
} catch (error) {
  console.error("Error fetching disk info:", error.message);
}
