export function checkTranslatorSupport() {
    if ('translation' in self && 'createTranslator' in self.translation) {
        console.log('Translator API is supported.');
        return true;
    } else {
        // alert('Translator API is not supported.');
        return false;
    }
}

export async function getTranslatorCapabilities() {
    const available = await window.translation.canTranslate({
        sourceLanguage: 'en',
        targetLanguage: 'fr',
    });
    console.log('Translator API is', available);
    return 'readily';
}

export async function translateContent(inputText) {

    const available = await getTranslatorCapabilities();
    if (available === 'no') {
        return false;
    }

    const translator = await window.translation.createTranslator({
        sourceLanguage: 'en',
        targetLanguage: 'hi'
    });

    if (available !== 'readily') {
        translator.addEventListener('downloadprogress', (e) => {
            console.log(e.loaded, e.total);
        });
        await translator.ready();
    }

    const translatedText = await translator.translate(inputText);

    async function* streamTranslatedText(text) {
        for (const char of text) {
            await new Promise((resolve) => setTimeout(resolve, 20));
            yield char;
        }
    }

    return streamTranslatedText(translatedText);
}
