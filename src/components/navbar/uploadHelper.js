export const uploadHelper = async (formData) => {
    try {
        const response = await fetch("http://localhost:3000/uploads", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
};