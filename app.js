function generatePrompt(selectedElements) {
    // Your existing logic here
    
    // Enhanced logic for structured prompts
    const promptStructure = {
        introduction: 'This prompt aims to engage the user in a detailed exploration based on the selected elements.',
        elements: selectedElements.map(element => {
            return { 
                elementName: element,
                description: `Describe the significance of ${element} in this context.`,
                examples: `Provide examples related to ${element}.`
            };
        }),
        conclusion: 'Summarize the insights gained from the above elements.'
    };
    
    // Convert prompt structure to a string format
    return JSON.stringify(promptStructure, null, 2);
}