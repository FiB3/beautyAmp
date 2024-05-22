const fs = require('fs');

// Load package.json
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// Check if bundlingOn attribute is true or false
const bundlingOn = process.argv.includes('--bundlingOn');

// Change the desired key depending on bundlingOn
if (bundlingOn) {
	console.log(`>>> BUNDLING ON <<<`);
    packageJson['main'] = './dist/extension';
} else {
	console.log(`<<< BUNDLING OFF >>>`);
    packageJson['main'] = './extension';
}

// Write the modified package.json back to file
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
console.log(`--- BUNDLING SWITCHED ---`);