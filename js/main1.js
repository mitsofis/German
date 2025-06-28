/* Initialization Section Start */
/* Initialization Implementation Subsection Start */
import { openTab, toggleAccordion } from './tabNavigation.js';
import { speak } from './audioPlayback.js';
import { showExerciseFeedback } from './feedbackDisplay.js';
import { updateProgress, resetProgress, awardPoints } from './progressTracking.js';
import { vocabStartVocabQuiz, vocabCheckVocabQuiz, vocabNextQuizQuestion, vocabShowSolutions, vocabSubmitVocabQuiz } from './vocabularyQuiz.js';
import { flipFlashcard, nextFlashcard, prevFlashcard } from './flashcards.js';
import { initializeGrammarDragAndDrop, checkGrammarPractice, resetGrammarPractice, showGrammarSolutions } from './grammarPractice.js';
import { checkExercise1, resetExercise1, showSolutions1 } from './exercise1.js';
import { showSolutions2, initializeExercise2, checkExercise2, resetExercise2 } from './exercise2.js';

/* Load Non-Critical CSS Subsection Start */
function loadNonCriticalCSS() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/styles.css";
    link.onload = () => console.log("Non-critical CSS loaded");
    link.onerror = () => console.error("Error loading non-critical CSS");
    document.head.appendChild(link);
}
/* Load Non-Critical CSS Subsection End */

/* loadPartials Subsection Start */
async function loadPartials() {
    try {
        const partials = [
            { id: 'header', file: 'html/header.html' },
            { id: 'navigation', file: 'html/navigation.html' },
            { id: 'conversations', file: 'html/conversations.html' },
            { id: 'grammar', file: 'html/grammar.html' },
            { id: 'exercises', file: 'html/exercises.html' },
            { id: 'practice', file: 'html/practice.html' },
            { id: 'progress-section', file: 'html/progress.html' }
        ];

        for (const partial of partials) {
            const response = await fetch(partial.file);
            if (!response.ok) {
                console.error(`Initialization: Failed to load ${partial.file}: ${response.status}`);
                showExerciseFeedback('global-feedback', `Error loading ${partial.id} content.`, 'error');
                continue;
            }
            const content = await response.text();
            const container = document.getElementById(partial.id);
            if (container) {
                container.innerHTML = content;
            } else {
                console.error(`Initialization: Container #${partial.id} not found.`);
                showExerciseFeedback('global-feedback', `Error: Container for ${partial.id} not found.`, 'error');
            }
        }
    } catch (e) {
        console.error('Initialization: Error loading partials:', e);
        showExerciseFeedback('global-feedback', 'Error loading content.', 'error');
    }
}
/* loadPartials Subsection End */

/* DOMContentLoaded Subsection Start */
document.addEventListener('DOMContentLoaded', async () => {
    try {
        loadNonCriticalCSS();
        await loadPartials();
        updateProgress();
        initializeGrammarDragAndDrop();
        initializeExercise2();
        nextFlashcard();

        // Expose functions to global scope for onclick events
        window.openTab = openTab;
        window.toggleAccordion = toggleAccordion;
        window.speak = speak;
        window.showExerciseFeedback = showExerciseFeedback;
        window.updateProgress = updateProgress;
        window.resetProgress = resetProgress;
        window.vocabStartVocabQuiz = vocabStartVocabQuiz;
        window.vocabCheckVocabQuiz = vocabCheckVocabQuiz;
        window.vocabNextQuizQuestion = vocabNextQuizQuestion;
        window.vocabShowSolutions = vocabShowSolutions;
        window.vocabSubmitVocabQuiz = vocabSubmitVocabQuiz;
        window.flipFlashcard = flipFlashcard;
        window.nextFlashcard = nextFlashcard;
        window.prevFlashcard = prevFlashcard;
        window.checkGrammarPractice = checkGrammarPractice;
        window.resetGrammarPractice = resetGrammarPractice;
        window.showGrammarSolutions = showGrammarSolutions;
        window.checkExercise1 = checkExercise1;
        window.resetExercise1 = resetExercise1;
        window.showSolutions1 = showSolutions1;
        window.showSolutions2 = showSolutions2;
        window.checkExercise2 = checkExercise2;
        window.resetExercise2 = resetExercise2;
    } catch (e) {
        console.error('Initialization: Error during initialization:', e);
        showExerciseFeedback('global-feedback', 'Error initializing app.', 'error');
    }
});
/* DOMContentLoaded Subsection End */
/* Initialization Implementation Subsection End */
/* Initialization Section End */