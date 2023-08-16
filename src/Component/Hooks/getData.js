export const Fetchdata = async (dataToSend) => {
    try {
        const response = await fetch(dataToSend.FetchURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Signature": "p0m76",
            },
            body: JSON.stringify(dataToSend),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const cooptive = await response.json();
        return cooptive;
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
};
