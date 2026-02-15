// Data for the "Player"
let playerStats = {
    netWorth: 240.5,
    level: 99,
    influenceXP: 85,
    isMaxLevel: false
};

// Select Elements
const netWorthDisplay = document.querySelector('.net-worth');
const levelDisplay = document.querySelector('.stat-value:nth-child(2)'); // Adjusted for the level box
const xpFill = document.querySelector('.xp-fill');
const actionBtn = document.querySelector('.btn-action');

// Function to handle the "Level Up" interaction
function gainInfluence() {
    // 1. Update XP
    if (playerStats.influenceXP < 100) {
        playerStats.influenceXP += 5;
        xpFill.style.width = playerStats.influenceXP + '%';
        
        // 2. Add visual feedback (Glow effect)
        actionBtn.style.boxShadow = "0 0 30px var(--primary-neon)";
        setTimeout(() => actionBtn.style.boxShadow = "none", 200);
        
        // 3. Increment Net Worth slightly (The Billionaire Grind)
        playerStats.netWorth += 0.2;
        netWorthDisplay.innerText = `$${playerStats.netWorth.toFixed(1)}B`;
    }

    // 4. Trigger Level Up if XP hits 100
    if (playerStats.influenceXP >= 100 && !playerStats.isMaxLevel) {
        levelUp();
    }
}

function levelUp() {
    playerStats.level++;
    playerStats.influenceXP = 0; // Reset XP for next level
    xpFill.style.width = '0%';
    
    // Update UI
    document.querySelector('.rank-tag').innerText = "RANK: ULTIMATE VISIONARY";
    
    // Visual Flash effect
    document.body.style.backgroundColor = "white";
    setTimeout(() => {
        document.body.style.backgroundColor = "var(--bg-color)";
    }, 100);

    alert("LEVEL UP! You have unlocked the 'Mars Colony' expansion.");
}

// Event Listeners
actionBtn.addEventListener('click', () => {
    gainInfluence();
    console.log("Influence Gained: Current XP " + playerStats.influenceXP);
});

// Add a "Hover" sound effect simulation
actionBtn.addEventListener('mouseenter', () => {
    // You could play a short beep.mp3 here
    actionBtn.style.letterSpacing = "6px";
});

actionBtn.addEventListener('mouseleave', () => {
    actionBtn.style.letterSpacing = "4px";
});