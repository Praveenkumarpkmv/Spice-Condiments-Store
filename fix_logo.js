const fs = require('fs');
const glob = require('glob');

function fixLogo(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    // Add white-space: nowrap to brand-wordmark
    // We can just add it to the CSS block for .brand-wordmark
    if (content.includes('.brand-wordmark {') && !content.includes('white-space: nowrap;')) {
        content = content.replace(/\.brand-wordmark \{/, '.brand-wordmark {\n      white-space: nowrap;');
    }

    fs.writeFileSync(filename, content);
}

const files = glob.sync('*.html');
files.forEach(file => {
    fixLogo(file);
});
