export const getRec = async () => {
    try {
        const response = await fetch('/api/Gemini', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid API Response - FSAPIROUTE - GEMINIFETCH');
        };

        return data;
    } catch (error) {
        console.log('Error - FSAPIROUTE - GEMINIFETCH');
        return [{ title: '', summary: '' }, { title: '', summary: '' }, { title: '', summary: '' }];
    }
};