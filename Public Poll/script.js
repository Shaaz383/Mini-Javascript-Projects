const pollOptions = document.getElementById("pollOptions");
const options = [...document.querySelectorAll('.option')];
let totalVotes = 0;

options.forEach(option => {
    const voteBtn = option.querySelector('.voteBtn');
    const optionName = option.dataset.option;
    const progressBar = option.querySelector('.progress');
    const voteCountDisplay = option.querySelector('.vote-count');

    voteBtn.addEventListener('click', () => {
        totalVotes++;
        let currentVotes = parseInt(voteCountDisplay.innerText.split(' ')[0]);
        currentVotes++;
        voteCountDisplay.innerText = `${currentVotes} votes`;

        // Update progress bar
        const percentage = (currentVotes / totalVotes) * 100;
        progressBar.style.width = `${percentage}%`;

        // Disable the button after voting
        voteBtn.disabled = true;
        voteBtn.style.backgroundColor = '#ccc';
        voteBtn.style.cursor = 'not-allowed';
    });
});
