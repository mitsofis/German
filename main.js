/* Initialization Section Start */
/* Initialization Implementation Subsection Start */
import { updateProgress } from './progressTracking.js';
import { initializeGrammarDragAndDrop } from './grammarPractice.js';
import { initializeExercise2 } from './exercise2.js';
import { nextFlashcard } from './flashcards.js';

/* DOMContentLoaded Subsection Start */
document.addEventListener('DOMContentLoaded', () => {
    try {
        updateProgress();
        initializeGrammarDragAndDrop();
        initializeExercise2();
        nextFlashcard();
    } catch (e) {
        console.error('Initialization: Error during initialization:', e);
    }
});
/* DOMContentLoaded Subsection End */
/* Initialization Implementation Subsection End */
/* Initialization Section End */