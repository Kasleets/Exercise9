document.addEventListener('DOMContentLoaded', function() // Ensures the document is fully loaded before attaching events
{ 
    const btn = document.getElementById('generateBtn');
    btn.addEventListener('click', generateBishBosh); // Method button

    const toggleColorsBtn = document.getElementById('toggleColorsBtn');
    toggleColorsBtn.addEventListener('click', toggleColors); // Funny mode button
});

function generateBishBosh() 
{
    const bishValue = parseInt(document.getElementById('bishValue').value);
    const boshValue = parseInt(document.getElementById('boshValue').value);
    const rangeValue = parseInt(document.getElementById('rangeValue').value);

    // Check for negative values
    if (bishValue < 0 || boshValue < 0 || rangeValue < 0) 
    {
        alert('Please enter only positive numbers.'); // Displays basic alert window
        return; // Exit the function early
    }

    let results = '';

    for (let n = 1; n <= rangeValue; n++) 
    {
        let output = "";
        
        if (n % bishValue === 0 && n % boshValue === 0) 
        {
            output = "<span class='bish-bosh'>BishBosh</span>";
        } 

        else 
        {

            if (n % bishValue === 0)
                output += "<span class='bish'>Bish</span>";

            if (n % boshValue === 0)
                output += "<span class='bosh'>Bosh</span>";

        }

        if (output === "")
        output = n;

        results += output + ', ';

        if (n % 30 === 0) results += "<br>";  // New line every 30 numbers to increase readability with larger rangeValue's
    }

    document.getElementById('results').innerHTML = results.slice(0, -2); // Remove last comma and space
}

function toggleColors() 
{
    const resultsDiv = document.getElementById('results');
    if (resultsDiv.classList.contains('funny-colors')) {
        resultsDiv.classList.remove('funny-colors');
    } else {
        resultsDiv.classList.add('funny-colors');
    }
}