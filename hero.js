// Register GSAP plugin
gsap.registerPlugin(CustomEase);

// Custom ease and timing constants
const customEaseIn = CustomEase.create('custom-ease-in', '0.52, 0.00, 0.48, 1.00');
const fourtyFrames = 1.3333333;
const fiftyFrames = 1.66666;
const twoFrames = 0.666666;
const fourFrames = 0.133333;
const sixFrames = 0.2;

// DOM Elements for animations
const video = document.querySelector('.hero-video');
const header = document.querySelector('.header');
const book = document.querySelector('.first-desc span');
const open = document.querySelector('.second-desc span');
const copy = document.querySelector('.copyright span');
const scrollToRows = document.querySelectorAll('.scroll-to .scroll-to__row span');
const btnCircle = document.querySelector('.book-btn__circle');
const btnText = document.querySelector('.btn-text span');
const eve = document.querySelector('#eve span');
const ry = document.querySelector('#ry span');
const fo = document.querySelector('#fo span');
const ssil = document.querySelector('#ssil span');
const tells = document.querySelector('#tells span');
const a = document.querySelector('#a span');
const st = document.querySelector('#st span');
const ory = document.querySelector('#ory span');

// Animation Functions
const showElements = () => {
  const timeline = gsap.timeline();
  timeline
    .fromTo(btnCircle, { autoAlpha: 0 }, { autoAlpha: 1, duration: fourtyFrames, ease: customEaseIn }, 0)
    .fromTo(btnCircle, { scale: 0.417 }, { scale: 1, duration: fourtyFrames, ease: customEaseIn }, 0)
    .fromTo(header, { y: '-0.5rem' }, { y: '0rem', duration: fourtyFrames, ease: customEaseIn }, 0)
    .fromTo(eve, { x: '2.7rem' }, { x: '0rem', duration: fiftyFrames, ease: customEaseIn }, 0)
    .fromTo(book, { y: '0.5rem' }, { y: '0rem', duration: fourtyFrames, ease: customEaseIn }, twoFrames)
    .fromTo(fo, { x: '2.1rem' }, { x: '0rem', duration: fiftyFrames, ease: customEaseIn }, twoFrames)
    .fromTo(a, { x: '-1.2rem' }, { x: '0rem', duration: fiftyFrames, ease: customEaseIn }, twoFrames)
    .fromTo(ory, { x: '-3.2rem' }, { x: '0rem', duration: fiftyFrames, ease: customEaseIn }, twoFrames)
    .fromTo(open, { y: '0.3rem' }, { y: '0rem', duration: fourtyFrames, ease: customEaseIn }, fourFrames)
    .fromTo(btnText, { y: '0.4rem' }, { y: '0rem', duration: fourtyFrames, ease: customEaseIn }, fourFrames)
    .fromTo(ry, { x: '-2rem' }, { x: '0rem', duration: fiftyFrames, ease: customEaseIn }, fourFrames)
    .fromTo(ssil, { x: '-3.1rem' }, { x: '0rem', duration: fiftyFrames, ease: customEaseIn }, fourFrames)
    .fromTo(tells, { x: '4.3rem' }, { x: '0rem', duration: fiftyFrames, ease: customEaseIn }, fourFrames)
    .fromTo(st, { x: '1.9rem' }, { x: '0rem', duration: fiftyFrames, ease: customEaseIn }, fourFrames)
    .fromTo(copy, { y: '0.4rem' }, { y: '0rem', duration: fourtyFrames, ease: customEaseIn }, sixFrames)
    .fromTo(scrollToRows, { y: '0.5rem' }, { y: '0rem', duration: fourtyFrames, ease: customEaseIn }, sixFrames);

  return timeline;
};

const hideElements = () => {
  const timeline = gsap.timeline();

  timeline
    .fromTo(copy, { y: '0rem' }, { y: '0.4rem', duration: fourtyFrames, ease: customEaseIn }, 0)
    .fromTo(scrollToRows, { y: '0rem' }, { y: '0.5rem', duration: fourtyFrames, ease: customEaseIn }, 0)
    .fromTo(open, { y: '0rem' }, { y: '0.3rem', duration: fourtyFrames, ease: customEaseIn }, twoFrames)
    .fromTo(btnText, { y: '0rem' }, { y: '0.4rem', duration: fourtyFrames, ease: customEaseIn }, twoFrames)
    .fromTo(ry, { x: '0rem' }, { x: '-2rem', duration: fiftyFrames, ease: customEaseIn }, twoFrames)
    .fromTo(ssil, { x: '0rem' }, { x: '-3.1rem', duration: fiftyFrames, ease: customEaseIn }, twoFrames)
    .fromTo(tells, { x: '0rem' }, { x: '4.3rem', duration: fiftyFrames, ease: customEaseIn }, twoFrames)
    .fromTo(st, { x: '0rem' }, { x: '1.9rem', duration: fiftyFrames, ease: customEaseIn }, twoFrames)
    .fromTo(book, { y: '0rem' }, { y: '0.5rem', duration: fourtyFrames, ease: customEaseIn }, fourFrames)
    .fromTo(fo, { x: '0rem' }, { x: '2.1rem', duration: fiftyFrames, ease: customEaseIn }, fourFrames)
    .fromTo(a, { x: '0rem' }, { x: '-1.2rem', duration: fiftyFrames, ease: customEaseIn }, fourFrames)
    .fromTo(ory, { x: '0rem' }, { x: '-3.2rem', duration: fiftyFrames, ease: customEaseIn }, fourFrames)
    .fromTo(btnCircle, { autoAlpha: 1 }, { autoAlpha: 0, duration: fourtyFrames, ease: customEaseIn }, sixFrames)
    .fromTo(btnCircle, { scale: 1 }, { scale: 0.417, duration: fourtyFrames, ease: customEaseIn }, sixFrames)
    .fromTo(header, { y: '0rem' }, { y: '-100%', duration: fourtyFrames, ease: customEaseIn }, sixFrames)
    .fromTo(eve, { x: '0rem' }, { x: '2.7rem', duration: fiftyFrames, ease: customEaseIn }, sixFrames);

  return timeline;
};

// ============================================
// WORD SEARCH PUZZLE CODE - CLICK AND DRAG
// ============================================

// Word search puzzle grid
const grid = [
    ['F', 'N', 'B', 'S', 'T', 'A', 'D', 'I', 'U', 'M', 'N', 'P', 'M', 'R', 'R'],
    ['N', 'M', 'A', 'N', 'A', 'N', 'A', 'D', 'U', 'K', 'G', 'R', 'A', 'A', 'A'],
    ['B', 'P', 'L', 'H', 'T', 'U', 'L', 'I', 'P', 'S', 'A', 'G', 'A', 'C', 'I'],
    ['M', 'O', 'E', 'V', 'C', 'R', 'A', 'Z', 'Y', 'I', 'T', 'T', 'I', 'H', 'L'],
    ['M', 'N', 'O', 'I', 'K', 'E', 'T', 'I', 'S', 'P', 'Y', 'O', 'B', 'E', 'I'],
    ['A', 'S', 'A', 'R', 'A', 'E', 'P', 'N', 'B', 'M', 'L', 'F', 'S', 'L', 'K'],
    ['B', 'A', 'H', 'M', 'B', 'O', 'L', 'B', 'O', 'O', 'I', 'A', 'W', 'C', 'E'],
    ['A', 'T', 'R', 'I', 'O', 'L', 'R', 'U', 'A', 'T', 'V', 'N', 'E', 'H', 'T'],
    ['T', 'I', 'S', 'E', 'M', 'A', 'A', 'P', 'P', 'H', 'E', 'A', 'N', 'U', 'O'],
    ['H', 'V', 'I', 'E', 'A', 'S', 'P', 'E', 'O', 'O', 'R', 'M', 'M', 'S', 'M'],
    ['O', 'P', 'L', 'B', 'A', 'L', 'S', 'L', 'W', 'K', 'P', 'M', 'I', 'I', 'O'],
    ['A', 'S', 'M', 'L', 'W', 'M', 'R', 'C', 'K', 'U', 'O', 'A', 'N', 'Z', 'M'],
    ['P', 'R', 'E', 'U', 'A', 'U', 'M', 'A', 'I', 'R', 'O', 'O', 'G', 'N', 'H'],
    ['S', 'K', 'E', 'E', 'L', 'E', 'E', 'O', 'P', 'L', 'L', 'P', 'R', 'K', 'M'],
    ['T', 'U', 'L', 'Q', 'Z', 'I', 'L', 'P', 'E', 'S', 'R', 'T', 'E', 'J', 'M']
];

const words = [
    'blue', 'mhmm', 'tispy', 'manana', 'rachelchu',
    'mmabatho', 'tulips', 'liverpool',
    'fnbstadium', 'realraps'
];

// Word positions (for answer key)
const wordPositions = {
    'fnbstadium': [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9]],
    'manana': [[1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6]],
    'tulips': [[2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9]],
    'rachelchu': [[0, 13], [1, 13], [2, 13], [3, 13], [4, 13], [5, 13], [6, 13], [7, 13], [8, 13]],
    'mmabatho': [[3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9,0], [10, 0]],
    'tispy': [[4, 6], [4, 7], [4, 8], [4, 9], [4, 10]],
    'liverpool': [[5,10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10], [13, 10]],
    'blue': [[10, 3], [11, 3], [12, 3], [13, 3]],
    'mhmm': [[11, 14], [12, 14], [13, 14], [14, 14]],
    'realraps': [[7, 2], [8, 3], [9, 4], [10, 5], [11, 6], [12, 7], [13, 8], [14, 9]]
};

let isDragging = false;
let startCell = null;
let currentSelection = [];
let foundWords = [];

// Puzzle Functions
function renderPuzzle() {
    const puzzleContainer = document.getElementById('puzzle');
    if (!puzzleContainer) return;

    puzzleContainer.innerHTML = '';

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const cell = document.createElement('div');
            cell.className = 'puzzle-cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.textContent = grid[i][j];
            puzzleContainer.appendChild(cell);
        }
    }
}

function getCellsBetween(start, end) {
    if (!start || !end) return [];
    
    const startRow = parseInt(start.dataset.row);
    const startCol = parseInt(start.dataset.col);
    const endRow = parseInt(end.dataset.row);
    const endCol = parseInt(end.dataset.col);
    
    // Check if it's a straight line (horizontal, vertical, or diagonal)
    const rowDiff = endRow - startRow;
    const colDiff = endCol - startCol;
    
    // Must be in a straight line (same row, same column, or diagonal with same slope)
    if (startRow !== endRow && startCol !== endCol && Math.abs(rowDiff) !== Math.abs(colDiff)) {
        return [];
    }
    
    const cells = [];
    const rowStep = rowDiff === 0 ? 0 : (rowDiff > 0 ? 1 : -1);
    const colStep = colDiff === 0 ? 0 : (colDiff > 0 ? 1 : -1);
    
    let currentRow = startRow;
    let currentCol = startCol;
    
    // Include all cells from start to end
    while (currentRow !== endRow + rowStep || currentCol !== endCol + colStep) {
        const cell = document.querySelector(`[data-row="${currentRow}"][data-col="${currentCol}"]`);
        if (cell && !cell.classList.contains('found')) {
            cells.push(cell);
        }
        
        if (currentRow === endRow && currentCol === endCol) break;
        
        currentRow += rowStep;
        currentCol += colStep;
    }
    
    return cells;
}

function clearSelection() {
    document.querySelectorAll('.puzzle-cell.selected').forEach(cell => {
        cell.classList.remove('selected');
    });
    currentSelection = [];
}

function handleMouseDown(e) {
    if (!e.target.classList.contains('puzzle-cell')) return;
    if (e.target.classList.contains('found')) return;
    
    isDragging = true;
    startCell = e.target;
    
    clearSelection();
    
    startCell.classList.add('selected');
    currentSelection = [startCell];
}

function handleMouseEnter(e) {
    if (!isDragging || !startCell) return;
    if (!e.target.classList.contains('puzzle-cell')) return;
    if (e.target.classList.contains('found')) return;
    
    // Get all cells between start and current
    const cellsBetween = getCellsBetween(startCell, e.target);
    
    // Clear current selection
    clearSelection();
    
    // Apply new selection
    cellsBetween.forEach(cell => {
        if (!cell.classList.contains('found')) {
            cell.classList.add('selected');
        }
    });
    
    currentSelection = cellsBetween;
}

function handleMouseUp() {
    if (!isDragging || currentSelection.length < 2) {
        // If not a valid selection, just clear
        clearSelection();
        isDragging = false;
        startCell = null;
        return;
    }
    
    // Check if the selection matches any word
    checkSelection();
    
    isDragging = false;
    startCell = null;
}

function handleMouseLeave(e) {
    // Only clear if mouse leaves the puzzle container
    if (isDragging && !e.relatedTarget?.closest('.puzzle-container')) {
        clearSelection();
        isDragging = false;
        startCell = null;
    }
}

function checkSelection() {
    if (currentSelection.length < 2) {
        clearSelection();
        return;
    }
    
    // Convert selection to coordinates
    const selectedCoords = currentSelection.map(cell => [
        parseInt(cell.dataset.row),
        parseInt(cell.dataset.col)
    ]);
    
    // Sort coordinates
    selectedCoords.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    
    // Create selection key
    const selectionKey = selectedCoords.map(coord => `${coord[0]},${coord[1]}`).join('|');
    
    // Check if selection matches any word position
    let found = false;
    for (const [word, positions] of Object.entries(wordPositions)) {
        // Sort positions for comparison
        const sortedPositions = [...positions].sort((a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            return a[0] - b[0];
        });
        
        const wordKey = sortedPositions.map(pos => `${pos[0]},${pos[1]}`).join('|');
        
        // Check if selection matches word (forward or backward)
        const reverseKey = [...sortedPositions].reverse().map(pos => `${pos[0]},${pos[1]}`).join('|');
        
        if ((selectionKey === wordKey || selectionKey === reverseKey) && !foundWords.includes(word)) {
            found = true;
            foundWords.push(word);
            markWordAsFound(positions);
            updateWordList(word);
            showMessage(`Found: ${formatWord(word)}! 💖`, 'success');
            
            // Celebration animation
            gsap.to('.puzzle-cell.found', {
                scale: 1.1,
                duration: 0.3,
                yoyo: true,
                repeat: 1
            });
            break;
        }
    }
    
    if (!found) {
        showMessage('Not a correct word! Try again 💕', 'error');
        setTimeout(() => {
            clearSelection();
        }, 500);
    }
}

function markWordAsFound(positions) {
    positions.forEach(([row, col]) => {
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
            cell.classList.remove('selected');
            cell.classList.add('found');
        }
    });
}

function updateWordList(word) {
    const listItems = document.querySelectorAll('#word-list li');
    listItems.forEach(item => {
        const itemWord = item.textContent.toLowerCase()
            .replace(/[💙💭🥴🌅💰👸🌷⚽🎬🏟️🎤]/g, '')
            .replace(/\s+/g, '')
            .trim();
        
        if (itemWord.includes(word) || word.includes(itemWord)) {
            item.classList.add('found-word');
        }
    });
}

function formatWord(word) {
    const wordMap = {
        'blue': '💙 blue',
        'mhmm': '💭 mhmm',
        'tispy': '🥴 tispy',
        'manana': '🌅 manana',
        'rachelchu': '💰 rachel chu',
        'mmabatho': '👸 mmabatho',
        'tulips': '🌷 tulips',
        'liverpool': '⚽ liverpool',
        'fnbstadium': '🏟️ fnb stadium',
        'realraps': '🎤 real raps'
    };
    return wordMap[word] || word;
}

function resetSelection() {
    clearSelection();
    showMessage('');
}

function showAnswers() {
    // Highlight all words
    for (const [word, positions] of Object.entries(wordPositions)) {
        if (!foundWords.includes(word)) {
            markWordAsFound(positions);
            updateWordList(word);
        }
    }
    showMessage('Answers revealed! 💘', 'success');
    
    gsap.fromTo('.puzzle-cell.found', 
        { backgroundColor: '#ffd966' },
        { backgroundColor: '#90ee90', duration: 1, ease: 'power2.inOut' }
    );
}

function showMessage(text, type) {
    const messageEl = document.getElementById('message');
    if (!messageEl) return;
    
    messageEl.textContent = text;
    messageEl.style.color = type === 'success' ? '#90ee90' : '#ff6b6b';

    if (text) {
        setTimeout(() => {
            messageEl.textContent = '';
        }, 3000);
    }
}

function setupPuzzleEventListeners() {
    const puzzle = document.getElementById('puzzle');
    const resetBtn = document.getElementById('reset-btn');
    const showAnswersBtn = document.getElementById('show-answers-btn');

    if (puzzle) {
        puzzle.addEventListener('mousedown', handleMouseDown);
        puzzle.addEventListener('mouseenter', handleMouseEnter, true);
        puzzle.addEventListener('mouseup', handleMouseUp);
        puzzle.addEventListener('mouseleave', handleMouseLeave);
        
        // Prevent default drag behavior
        puzzle.addEventListener('dragstart', (e) => e.preventDefault());
    }
    
    if (resetBtn) resetBtn.addEventListener('click', resetSelection);
    if (showAnswersBtn) showAnswersBtn.addEventListener('click', showAnswers);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Run the hero section animations
    showElements();
    
    // Initialize the word search puzzle
    renderPuzzle();
    setupPuzzleEventListeners();
});

// Optional: Add scroll animation to fade in puzzle section
window.addEventListener('scroll', () => {
    const puzzleSection = document.querySelector('.puzzle-section');
    if (!puzzleSection) return;
    
    const sectionTop = puzzleSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.75) {
        gsap.to(puzzleSection, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
        });
    }
});