
export interface StudyTip {
  id: string;
  title: string;
  content: string;
}

export interface Website {
  id: string;
  title: string;
  url: string;
  icon: string;
}

/**
 * EDIT THESE TIPS TO UPDATE THE CONTENT IN THE "TIPS" SECTION
 * Use [Link Text](URL) to create links within the tips.
 * Note: The app now automatically bolds text before a colon (:) in lists and paragraphs!
 */
export const STUDY_TIPS: StudyTip[] = [
  {
    id: '1',
    title: 'The Pomodoro Technique',
    content: `
      ## The Pomodoro Technique
      
      The Pomodoro Technique is a time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.
      
      Steps:
      1. Choose a task.
      2. Set a timer for 25 minutes.
      3. Work until the timer rings.
      4. Take a short 5-minute break.
      5. Every four "pomodoros," take a longer break (15-30 minutes).
      
      This keeps your brain fresh and prevents burnout during long study sessions.
    `
  },
  {
    id: '2',
    title: 'Active Recall',
    content: `
      ## Active Recall
      
      Active recall is a highly effective study strategy that involves stimulating your memory during the learning process. Instead of passively reading your notes, you challenge your brain to retrieve the information.
      
      How to do it:
      - Summarize: Close your book and try to summarize what you just read.
      - Flashcards: Use tools like [Anki](https://apps.ankiweb.net/) or [Quizlet](https://quizlet.com/).
      - Quizzing: Take practice tests or quizzes without looking at your notes.
      - Teaching: Teach the concept to someone else (or an imaginary audience).
    `
  },
  {
    id: '3',
    title: 'Spaced Repetition',
    content: `
      ## Spaced Repetition
      
      Spaced repetition is a learning technique that involves reviewing information at increasing intervals over time.
      
      Why it works:
      It leverages the "forgetting curve." By reviewing just before you're likely to forget, you strengthen the neural pathways associated with that information, moving it into long-term memory.
      
      Schedule Example:
      - Review 1: 1 day after learning.
      - Review 2: 3 days after learning.
      - Review 3: 1 week after learning.
      - Review 4: 1 month after learning.
    `
  },
  {
    id: '4',
    title: 'Feynman Technique',
    content: `
      ## Feynman Technique
      
      Named after physicist Richard Feynman, this technique helps you identify gaps in your understanding.
      
      The Process:
      1. Concept: Write the name of a concept at the top of a blank page.
      2. Simplify: Explain the concept in simple terms, as if you were teaching it to a 6-year-old.
      3. Review: Identify areas where you struggle or can't explain simply.
      4. Refine: Go back to the source material to fill in those gaps.
      5. Analogies: Simplify your language further and use analogies.
    `
  },
  {
    id: '5',
    title: 'Environment Matters',
    content: `
      ## Setting Up Your Study Space
      
      Your environment significantly impacts your focus and productivity.
      
      Tips for a great space:
      - Lighting: Natural light is best for staying awake and alert.
      - Ergonomics: Use a chair that supports your back and keep your screen at eye level.
      - Distractions: Keep your phone in another room or use "Focus Mode."
      - Supplies: Have everything you need (water, pens, chargers) before you start.
    `
  }
];

/**
 * EDIT THESE WEBSITES TO UPDATE THE GRID IN THE "WEBSITES" SECTION
 */
export const STUDY_WEBSITES: Website[] = [
  { id: '1', title: 'Google Docs', url: 'https://docs.google.com', icon: '📄' },
  { id: '2', title: 'Word', url: 'https://www.microsoft365.com/launch/word', icon: '📝' },
  { id: '3', title: 'PowerPoint', url: 'https://www.microsoft365.com/launch/powerpoint', icon: '📊' },
  { id: '4', title: 'Gmail', url: 'https://mail.google.com', icon: '✉️' },
  { id: '16', title: 'Classroom', url: 'https://classroom.google.com', icon: '🎒' },
  { id: '17', title: 'Dictionary', url: 'https://www.dictionary.com', icon: '📚' },
  { id: '18', title: 'Canva', url: 'https://www.canva.com', icon: '🎨' },
  { id: '23', title: 'TypingClub', url: 'https://www.edclub.com/sportal/program-3.game', icon: '⌨️' },
  { id: '20', title: 'Cool Math', url: 'https://www.coolmathgames.com', icon: '🎮' },
  { id: '21', title: 'Prodigy', url: 'https://www.prodigygame.com', icon: '🧙' },
  { id: '22', title: 'XtraMath', url: 'https://xtramath.org', icon: '➕' },
  { id: '24', title: 'Wordle', url: 'https://www.nytimes.com/games/wordle/index.html', icon: '🟩' },
  { id: '19', title: 'Contexto', url: 'https://contexto.me', icon: '🧩' },
  { id: '6', title: 'Duolingo', url: 'https://www.duolingo.com', icon: '🦉' },
  { id: '11', title: 'Quizlet', url: 'https://quizlet.com', icon: '💡' },
  { id: '12', title: 'Khan Academy', url: 'https://www.khanacademy.org', icon: '🏫' },
  { id: '13', title: 'Wolfram Alpha', url: 'https://www.wolframalpha.com', icon: '🧮' },
  { id: '14', title: 'Pomofocus', url: 'https://pomofocus.io', icon: '⏱️' },
  { id: '10', title: 'Notion', url: 'https://www.notion.so', icon: '📓' },
  { id: '9', title: 'Free Rice', url: 'https://play.freerice.com/categories/english-vocabulary', icon: '🍚' },
  { id: '8', title: 'Ai Tutor', url: 'https://app.youlearn.ai/', icon: '🤖' },
  { id: '5', title: 'Outlook', url: 'https://outlook.live.com', icon: '📧' },
  { id: '15', title: 'Coursera', url: 'https://www.coursera.org', icon: '🎓' }
];
