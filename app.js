const fs = require('fs');
const { encodeAsciiToCp037, decodeCp037ToAscii } = require("@shreenu21/cp037-converter");

// 2. Create a variable with all french characters
const frenchCharacters = "àâäçéèêëîïôöùûüÀÂÄÇÉÈÊËÎÏÔÖÙÛÜ";
// const frenchCharacters = "àâäçéèêëîïôöùûüÀÂÄÇÉÈÊËÎÏÔÖÙÛÜ\nAPPLE";

console.log('Original String:', frenchCharacters);

// 3. Save the data into a file called file-2b.txt (defaulting to UTF-8)
fs.writeFileSync('file-2b.txt', frenchCharacters, 'utf8');
console.log(`Created file-2b.txt (UTF-8) - Bytes written: ${Buffer.from(frenchCharacters).length}`);

// 4. Implement IBM037 and create a file with IBM037 and save it as file-1b.txt
try {
	const encoded = encodeAsciiToCp037(frenchCharacters);

	const buffer = Buffer.from(encoded);

	fs.writeFileSync('file-1b.txt', buffer);
	console.log(`Created file-1b.txt (IBM037) - Bytes written: ${buffer.length}`);

	const decoded = decodeCp037ToAscii(encoded);
	console.log(`Verification Decoded String: ${decoded}`);

	if (decoded === frenchCharacters) {
		console.log('SUCCESS: Decoded string matches original.');
	} else {
		console.log('WARNING: Decoded string does NOT match original.');
		console.log('Expected:', frenchCharacters.split('').map(c => c.charCodeAt(0)));
		console.log('Actual:  ', decoded.split('').map(c => c.charCodeAt(0)));
	}

} catch (e) {
	console.error('Error during encoding/decoding:', e);
}
