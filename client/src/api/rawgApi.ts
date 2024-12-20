export const fetchGames = async () => {
    try{
        const response = await fetch('/api/games-Routes.ts', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid API Response - FSAPIROUTE');
        };

        return data
    }catch (error) {
        console.log('ERROR - FSAPIROUTE');
        return '';
    }
}