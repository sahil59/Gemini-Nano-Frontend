export async function rewriteContent(fileContent, prompt) {
    const rewriter = await ai.rewriter.create({
        sharedContext: prompt
    });

    const result = await rewriter.rewrite(fileContent, {
        context: 'This article is intended for a tech-savvy audience.'
    });

    async function* streamRewriteText(text) {
        for (const char of text) {
            await new Promise((resolve) => setTimeout(resolve, 20));
            yield char;
        }
    }

    return streamRewriteText(result);
}