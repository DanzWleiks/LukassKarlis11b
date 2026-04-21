let gameArea = document.getElementById('game-area');
let reactionTimeDisplay = document.getElementById('reaction-time');
let startTime, timeout;

function startGame() {
    gameArea.textContent = "Pagaidi zaļo...";
    gameArea.classList.remove('ready');
    reactionTimeDisplay.textContent = "Reakcijas laiks: -- ms";

    let randomDelay = Math.random() * 3000 + 2000; 
    timeout = setTimeout(() => {
        gameArea.classList.add('ready');
        gameArea.textContent = "Spied!";
        startTime = Date.now();
    }, randomDelay);
}

gameArea.addEventListener('click', () => {
    if (gameArea.classList.contains('ready')) {
        let reactionTime = Date.now() - startTime;
        reactionTimeDisplay.textContent = `Reakcijas laiks: ${reactionTime} ms`;
        gameArea.textContent = "Malacis!";
        gameArea.classList.remove('ready');
        clearTimeout(timeout);
    } else {
        clearTimeout(timeout);
        gameArea.textContent = "Pārāk agri! Mēģini velreiz.";
        reactionTimeDisplay.textContent = "Reakcijas laiks: -- ms";
    }
});

let leaderboard = document.createElement('div');
leaderboard.id = 'leaderboard';
leaderboard.innerHTML = '<h3>Leaderboard</h3><ul id="scores-list"></ul>';
document.body.appendChild(leaderboard);

let scores = [];

function updateLeaderboard(newScore) {
    scores.push(newScore);
    scores.sort((a, b) => a - b);
    if (scores.length > 5) scores.pop(); // Keep only top 5 scores

    let scoresList = document.getElementById('scores-list');
    scoresList.innerHTML = '';
    scores.forEach((score, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${score} ms`;
        scoresList.appendChild(li);
    });
}

gameArea.addEventListener('click', () => {
    if (gameArea.classList.contains('ready')) {
        let reactionTime = Date.now() - startTime;
        updateLeaderboard(reactionTime);
    }
});

// Add some styling to make the page look fuller
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
document.body.style.marginTop = '50px';

gameArea.style.cursor = 'pointer';
gameArea.style.padding = '20px';
gameArea.style.border = '2px solid black';
gameArea.style.display = 'inline-block';
gameArea.style.marginBottom = '20px';

reactionTimeDisplay.style.marginBottom = '20px';
reactionTimeDisplay.style.display = 'block';

leaderboard.style.marginTop = '20px';
leaderboard.style.textAlign = 'left';
leaderboard.style.display = 'inline-block';
leaderboard.style.padding = '10px';
leaderboard.style.border = '1px solid black';
leaderboard.style.backgroundColor = '#f9f9f9';