const fs = require('fs');
const path = require('path');

const inputFile = 'file-2b.txt';
const isoOutputFile = 'file-iso8859.txt';
const utf8OutputFile = 'file-utf8.txt';

try {
    // 1. Read file-2b.txt (UTF-8)
    const contentUtf8 = fs.readFileSync(inputFile, 'utf8');
    console.log(`Read ${inputFile} (UTF-8):`, contentUtf8);

    // 2. Convert to ISO-8859-1 (Latin1) and save
    // Node.js 'latin1' is ISO-8859-1
    fs.writeFileSync(isoOutputFile, contentUtf8, 'latin1');
    console.log(`Created ${isoOutputFile} (ISO-8859-1)`);

    // 3. Read the ISO-8859-1 file
    const contentIso = fs.readFileSync(isoOutputFile, 'latin1');

    // 4. Convert back to UTF-8 and save
    fs.writeFileSync(utf8OutputFile, contentIso, 'utf8');
    console.log(`Created ${utf8OutputFile} (UTF-8)`);

    // Verification
    if (contentUtf8 === contentIso) {
        console.log('VERIFICATION SUCCESS: The content matches after round-trip conversion.');
    } else {
        console.log('VERIFICATION FAILED: Content mismatch.');
        console.log('Original:', contentUtf8);
        console.log('Roundtrip:', contentIso);
    }

} catch (err) {
    console.error('Error during conversion:', err);
}
