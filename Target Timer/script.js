var counters = document.querySelectorAll('.counter');

counters.forEach(function(elem) {
    elem.innerHTML = 0; // Initialize the counter
    var targetCount = +elem.getAttribute('data-target'); // Get target count

    // Function to update the counter
    function update() {
        var start = +elem.innerHTML; // Get current count
        var incr = Math.ceil(targetCount / 100); // Increment based on target

        // Update the displayed count
        if (start < targetCount) {
            elem.innerHTML = start + incr; // Increment the counter
            if (start + incr >= targetCount) {
                elem.innerHTML = targetCount; // Ensure it displays the target
            }
            setTimeout(update, 10); // Call update again after 10ms
        }
    }

    update(); // Start the update process
});
