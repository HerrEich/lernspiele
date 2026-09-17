const gameState = {
  points: parseInt(localStorage.getItem('points')) || 0,
  achievements: JSON.parse(localStorage.getItem('achievements')) || [],
  completedChapters: JSON.parse(localStorage.getItem('completedChapters')) || []
};

function addPoints(amount) {
  gameState.points += amount;
  saveState();
  updateUI();
}

function unlockAchievement(id) {
  if (!gameState.achievements.includes(id)) {
    gameState.achievements.push(id);
    saveState();
    showAchievementNotification(id);
    updateUI();
  }
}

function markChapterComplete(chapterId) {
    if (!gameState.completedChapters.includes(chapterId)) {
        gameState.completedChapters.push(chapterId);
        saveState();
    }
}

function saveState() {
  localStorage.setItem('points', gameState.points);
  localStorage.setItem('achievements', JSON.stringify(gameState.achievements));
  localStorage.setItem('completedChapters', JSON.stringify(gameState.completedChapters));
}

function updateUI() {
  const pointsEl = document.getElementById('points-display');
  if (pointsEl) {
    pointsEl.innerText = gameState.points;
  }
}

function showAchievementNotification(id) {
    // Simple alert for now, can be upgraded to a nice UI toast
    const achievementNames = {
        'ch1_done': 'Atom-Baumeister!',
        'ch2_done': 'Strahlenschutz-Experte!',
        'ch3_done': 'Meister der Zeit!',
        'ch4_done': 'Reaktor-Operator!',
        'ch5_done': 'Sicherheits-Beauftragter!'
    };
    alert('🏆 Achievement Unlocked: ' + (achievementNames[id] || id));
}

// Initialize on load
document.addEventListener('DOMContentLoaded', updateUI);
