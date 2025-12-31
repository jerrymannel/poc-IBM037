# poc-IBM037

Proof of Concept for IBM037 Character Encoding validation.

## Description
This project demonstrates how to handle IBM037 (EBCDIC) encoding in Node.js. It specifically tests the conversion of a string containing French characters.

## Usage
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the application:
   ```bash
   node app.js
   ```

## Output
The application generates two files:
- `file-2b.txt`: Contains the string `àâäçéèêëîïôöùûüÀÂÄÇÉÈÊËÎÏÔÖÙÛÜ` encoded in **UTF-8**.
- `file-1b.txt`: Contains the same French characters encoded in **IBM037** (EBCDIC).

## Tech Stack
- Node.js
- `@shreenu21/cp037-converter` for EBCDIC conversion.
