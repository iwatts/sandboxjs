const fs = require('fs');

async function decode(messageFile) {
	// Read the file content using the File System API
	const content = messageFile.toString();

	// Split the content into lines, set lines for pyramid Map with numbers as key and text as the value
	let pyramid = new Map();
	const lines = content.split(/\r?\n/)
		.map((line) => {
			let pair = line.replace(" ", "")
				.split(/(\d+)+/g)
				.filter(r => r !== '')
			pyramid.set(parseInt(pair[0]), pair[1])
		});

	// Sort the pyramid by key values
	pyramid = new Map([...pyramid.entries()].sort((a, b) => a[0] - b[0]));

	// count ending row positon for pyramid, extract word from each end pyramid row and add to message.
	let decodedMessage = "";
	let pyramidRowEnd = 1;
	let i = 0;
	for (const [key, value] of pyramid.entries()) {
		// get the first row no matter what
		if (i === 0 || i === pyramidRowEnd) {
			let wordWithSpace = `${value} `;
			decodedMessage += wordWithSpace;
			// increment the count for the next pyramid row end position
			pyramidRowEnd += (i + 1);
		}
		i++;
	}

	// Return the decoded message
	return decodedMessage.trimEnd();
}

//Example usage
(async () => {
	const output = fs.readFileSync(new File(['3 love\n6 computers\n2 ham\n4 hate\n1 I\n5 you'], 'message.txt', { type: 'text/plain' }));
	const decodedMessage = await decode(output);
	console.log(decodedMessage); // Output: I love computers
})();

(async () => {
	const output = fs.readFileSync('./decodeMessage.txt');
	const decodedMessage = await decode(output);
	console.log(decodedMessage);
})();
