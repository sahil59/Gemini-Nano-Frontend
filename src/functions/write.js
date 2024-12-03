export async function writeContent(fileContent, propmt) {
    const writer = await ai.writer.create({
        tone: "formal", sharedContext: fileContent
    }); console.log(writer)
      
    const result = await writer.write(propmt);

    async function* streamWriteText(text) {
        for (const char of text) {
            await new Promise((resolve) => setTimeout(resolve, 20));
            yield char;
        }
    }

    return streamWriteText(result);
}