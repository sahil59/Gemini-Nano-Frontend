export function checkSummarySupport() {
    if ('ai' in self && 'summarizer' in self.ai) {
        console.log('Summarizer API is supported.');
        return true;
    } else {
        // alert('Summarizer API is not supported.');
        return false;
    }
}

export async function getCapabilities() {
    const available = (await self.ai.summarizer.capabilities()).available;
    console.log('Summarizer API is', available);
    return available;
}

export async function summarizeContent(inputText) {
    const options = {
        sharedContext: 'This is google docs. So summarize all important points in this document.',
        type: 'tl;dr',
        format: 'plain-text',
        length: 'long',
    };

    const available = await getCapabilities();
    
    
    if (available === 'no') {
        return false;
    }
    
    // Create summarizer instance
    let summarizer;
    summarizer = await self.ai.summarizer.create(options);

    if (available !== 'readily') {
        summarizer.addEventListener('downloadprogress', (e) => {
            console.log(e.loaded, e.total);
        });
        await summarizer.ready();
    }

    const summary = await summarizer.summarize(inputText, {
        context: 'This article is intended for a tech-savvy audience.',
    });

    
    async function* streamSummary(text) {
        for (const char of text) {
            await new Promise((resolve) => setTimeout(resolve, 20));
            yield char;
        }
    }

    return streamSummary(summary);
}
