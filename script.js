document.addEventListener("DOMContentLoaded", function () {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", async () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = "Please enter valid numbers.";
        } else {
            try {
                const response = await fetch("https://mahtabnodejs.azurewebsites.net/api/multiplication?", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ num1, num2 }),
                });

                if (response.ok) {
                    console.log("Response is Okay");
                    const result = await response.text(); // Parse response as plain text
                    resultDiv.textContent = `Result: ${result}`;
                    console.log(result);


                } else {
                    resultDiv.textContent = "Error calculating the result.";
                    console.log(resultDiv.textContent);
                }
            } catch (error) {
                console.error("An error occurred:", error);
                resultDiv.textContent = "An error occurred. Please try again later.";
            }
        }
    });
});
