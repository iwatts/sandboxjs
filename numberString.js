async function decode(messageFile) {
  // Read the file content using the File System API
  const content = await new
 
Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(event.target.result);
    reader.onerror = reject;
    reader.readAsText(messageFile);
  });

  // Split the content into lines, remove whitespace, and sort ascending
  const lines = content.split(/\r?\n/).map((line) => line.trim().sort());

  // count ending row positon for pyramid, extract word from each end pyramid row and add to message.
  let decodedMessage = "";
  let pyramidRowEnd = 1;
  for (let i = 0; i < lines.length; i++) {
    // get the first row no matter what
    if(i === 0 || i === pyramidRowEnd){
      const [count, word] = line.split(" ");
      let wordWithSpace = word + `/n`;
      decodedMessage += newWord;

      // increment the count for the next pyramid row end position
      pyramidRowEnd += (i + 1);
    }
  }

  // Return the decoded message
  return decodedMessage.trimEnd();
}

// Example usage
(async () => {
  const decodedMessage = await decode(new File(['3 love\n6 computers\n2 dogs\n4 cats\n1 I\n5 you'], 'message.txt', { type: 'text/plain' }));
  console.log(decodedMessage); // Output: I love computers
})();