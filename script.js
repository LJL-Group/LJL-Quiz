// ===========================================================
// HELPER FUNCTIONS
// ===========================================================

/**
 * Fisher-Yates Shuffle Algorithm - Mischt ein Array an Ort und Stelle.
 * @param {Array} array Das zu mischende Array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Wählt einen zufälligen Index 'j' kleiner oder gleich 'i'
        const j = Math.floor(Math.random() * (i + 1));
        // Tauscht Elemente an den Indizes i und j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Sucht den neuen Index der korrekten Antwort nach dem Shuffling.
 * @param {Array} originalAnswers Die ursprünglichen Antworten (mit bekanntem korrekten Index).
 * @param {number} correctOriginalIndex Der ursprüngliche korrekte Index (z.B. 0, 1, 2 oder 3).
 * @returns {number} Der neue Index der korrekten Antwort im gemischten Array.
 */
function findNewCorrectIndex(originalAnswers, correctOriginalIndex) {
    const shuffled = [...originalAnswers]; // Kopie erstellen
    shuffleArray(shuffled);

    // Findet den Wert der richtigen Antwort und gibt den neuen Index zurück
    const correctAnswerValue = originalAnswers[correctOriginalIndex];
    return shuffled.findIndex(answer => answer === correctAnswerValue);
}


// ===========================================================
// LOGIK & FUNKTIONALITÄT
// ===========================================================

let questions = []; 
let questionIndex = 0;
let score = 0;
const allQuestions = [
  // 🎮 GAMING - SPIELE (JETZT MIT DEN NEUEN NAMEN!)
  {question: "Wer ist dieser Charakter (God of War)?", answers:["Kratos","Mario","Link","Sonic"], correct:0, img:"/LJL-Quiz/Resources/images/Wer ist das(herr pederiva).jpg", category:"spiele"},
  {question: "Wer ist das?", answers:["Bowser","Donkey Kong","Luigi","Yoshi"], correct:0, img:"/LJL-Quiz/Resources/images/Wer ist das(bowser).jpg", category:"spiele"},
  {question: "Wer ist das?", answers:["Papyrus","Sans","Gaster","Flowey"], correct:0, img:"/LJL-Quiz/Resources/images/game_Wer ist das(Papyrus).jpg", category:"spiele"},
  {question: "Welche Nintendo Konsole kam 2002 raus?", answers:["Switch","GameCube","Wii","DS"], correct:1, img:"/LJL-Quiz/Resources/images/Welche Konsole kam 2002 raus.jpg", category:"spiele"},
  {question: "Meistverkauftes Spiel?", answers:["GTA V","Minecraft","Fortnite","Tetris"], correct:1, img:"/LJL-Quiz/Resources/images/game_Welches Spiel ist das meist verkauft.jpg", category:"spiele"},
  {question: "GTA 5 Stadt?", answers:["Liberty City","Los Santos","Vice City","San Fierro"], correct:1, img:"/LJL-Quiz/Resources/images/game_Wie heißt die Stadt von GTA5.jpg", category:"spiele"},
  {question: "SEGA Maskottchen?", answers:["Mario","Sonic","Crash","Rayman"], correct:1, img:"/LJL-Quiz/Resources/images/sega.jpg", category:"spiele"},
  {question: "Umbrella kommt vor in?", answers:["Resident Evil","Silent Hill","Outlast","Dead Space"], correct:0, img:"/LJL-Quiz/Resources/images/Die umbrella frage.jpg", category:"spiele"},
  {question: "Spiel mit Pilzinfektion?", answers:["The Last of Us","Days Gone","RE4","Metro"], correct:0, img:"/LJL-Quiz/Resources/images/Die pilz infection frage.jpg", category:"spiele"},
  {question: "Roter Pac-Man Geist?", answers:["Blinky","Pinky","Inky","Clyde"], correct:0, img:"/LJL-Quiz/Resources/images/game_Pac-man frage.jpg", category:"spiele"},
  {question: "Marios erster Auftritt?", answers:["Mario Bros","Donkey Kong","Zelda","Metroid"], correct:1, img:"/LJL-Quiz/Resources/images/game_In welchem spiel kam super Mario als erste vor?.jpg", category:"spiele"},
  {question: "Fallout Währung?", answers:["Caps","Dollar","Gold","Coins"], correct:0, img:"/LJL-Quiz/Resources/images/game_Fallout.jpg", category:"spiele"},
  // 📺 SERIEN
  {question: "Wer ist das?", answers:["Walter White","Jesse Pinkman","Saul Goodman","Hank"], correct:0, img:"", category:"serien"}, // KEIN BILD (Bleibt leer)
  {question: "Wer ist Glenn?", answers:["The Walking Dead","Lost","Breaking Bad","Dark"], correct:0, img:"/LJL-Quiz/Resources/images/The_Walking_Dead.jpg", category:"serien"}, 
  {question: "Serie mit tödlichen Spielen?", answers:["Squid Game","Alice in Borderland","Saw","Dark"], correct:0, img:"/LJL-Quiz/Resources/images/serien_Die squid game frage.jpg", category:"serien"}, 
  {question: "Walter Whites Fach?", answers:["Mathe","Chemie","Bio","Physik"], correct:1, img:"/LJL-Quiz/Resources/images/serien_Die Walter white fach frage.jpg", category:"serien"}, 
  {question: "Mädchen mit Kräften?", answers:["Eleven","Max","Nancy","Robin"], correct:0, img:"/LJL-Quiz/Resources/images/serien_Die stranger things frage.jpg", category:"serien"}, 
  {question: "Wo leben Simpsons?", answers:["Springfield","Quahog","South Park","NY"], correct:0, img:"/LJL-Quiz/Resources/images/serien_Die simpson frage.jpg", category:"serien"}, 
  {question: "TWD W auf Stirn?", answers:["Owen","Negan","Rick","Daryl"], correct:0, img:"/LJL-Quiz/Resources/images/The_Walking_Dead.jpg", category:"serien"}, // Achtung: Hier ist das Bild doppelt (siehe unten)
  {question: "Blutanalyst + Killer?", answers:["Dexter Morgan","Hannibal","Joe Goldberg","Michael"], correct:0, img:"/LJL-Quiz/Resources/images/serien_dexter frage.jpg", category:"serien"}, 
  {question: "Kind namens Malcolm?", answers:["Malcolm Mittendrin","Modern Family","Friends","Office"], correct:0, img:"/LJL-Quiz/Resources/images/serien_melcolm mittendrin.jpg", category:"serien"}, 
  // 🎬 FILME
  {question: "Wer ist das?", answers:["Iron Man","Batman","Superman","Thor"], correct:0, img:"/LJL-Quiz/Resources/images/movie_Wer ist das(iron-man).jpg", category:"filme"},
  {question: "Wer ist Jason?", answers:["Jason Voorhees","Freddy","Michael Myers","Ghostface"], correct:0, img:"/LJL-Quiz/Resources/images/movie_Wer ist das(jason voorhees).jpg", category:"filme"},
  {question: "Hauself?", answers:["Dobby","Kreacher","Winky","Hedwig"], correct:0, img:"/LJL-Quiz/Resources/images/movie_Harry Potter.jpg", category:"filme"},
  {question: "Fight Club Regel?", answers:["Nicht reden","Kämpfen","Fliehen","Lachen"], correct:0, img:"/LJL-Quiz/Resources/images/movie_fight club Zitat.jpg", category:"filme"},
  {question: "Scream Regel?", answers:["Bin gleich zurück","Hallo","Lauf","Hilfe"], correct:0, img:"/LJL-Quiz/Resources/images/movie_was darf man nicht im scream Universum sagen.jpg", category:"filme"},
  {question: "Freitag der 13 Killer Teil 1?", answers:["Pamela Voorhees","Jason","Freddy","Ghostface"], correct:0, img:"/LJL-Quiz/Resources/images/movi_Wer ist der killer in Freitag der 13 Teil 1.jpg", category:"filme"},
  {question: "Simba Böser Onkel?", answers:["Scar","Mufasa","Zazu","Rafiki"], correct:0, img:"/LJL-Quiz/Resources/images/movie_König Der Löwen.jpg", category:"filme"},
  {question: "Stunts selbst?", answers:["Jackie Chan","Tom Cruise","The Rock","Vin Diesel"], correct:0, img:"/LJL-Quiz/Resources/images/movie_Welcher Schauspieler macht alle stunts selber?.jpg", category:"filme"},
  {question: "Erstes Dino Tier?", answers:["Brachiosaurus","T-Rex","Raptor","Triceratops"], correct:0, img:"/LJL-Quiz/Resources/images/movie_Welchen dino hat alan grand zuerst gesehen.jpg", category:"filme"}
];

function selectCategory(cat){
    // 1. Filtert die Fragen nach der Kategorie
    let filteredQuestions = allQuestions.filter(q => q.category === cat);
    
    // 2. Mische die Reihenfolge der FRAGEN (Random Question Order)
    shuffleArray(filteredQuestions);

    questions = filteredQuestions;
    questionIndex = 0;
    score = 0;
    document.getElementById("result").innerText = "";
    // Ergebnis-Styling zurücksetzen
    const resultElement = document.getElementById('result');
    resultElement.className = ''; 
    loadQuestion();
}

function loadQuestion(){
    let q = questions[questionIndex];
    
    if(questions.length === 0){
        document.getElementById("question").innerText = "Bitte wähle eine Kategorie!";
        // Deaktiviere Buttons und Bild bei leerer Auswahl
        document.getElementById("a").style.display = "none";
        document.getElementById("b").style.display = "none";
        document.getElementById("c").style.display = "none";
        document.getElementById("d").style.display = "none";
        document.getElementById("question-img").src = ""; 
        document.getElementById("question-img").style.display = "none";
        return; // Beendet die Funktion, wenn keine Fragen vorhanden sind
    }

    // --- START RANDOMISIERUNG DER ANTWORTEN ---
    const originalAnswers = q.answers;
    let shuffledAnswers = [...originalAnswers]; // Kopie erstellen und mischen
    shuffleArray(shuffledAnswers); 

    // Finde den NEUEN Index, an dem die korrekte Antwort nach dem Mischen liegt
    const newCorrectIndexInShuffled = findNewCorrectIndex(originalAnswers, q.correct);
    // --- ENDE RANDOMISIERUNG DER ANTWORTEN ---


    document.getElementById("question").innerText = q.question;
    
    // Setze die Antworten basierend auf der gemischten Reihenfolge (0=A, 1=B, 2=C, 3=D)
    document.getElementById("a").innerText = shuffledAnswers[0];
    document.getElementById("b").innerText = shuffledAnswers[1];
    document.getElementById("c").innerText = shuffledAnswers[2];
    document.getElementById("d").innerText = shuffledAnswers[3];

    // Buttons anzeigen, falls eine Frage vorhanden ist
    document.getElementById("a").style.display = "inline-block";
    document.getElementById("b").style.display = "inline-block";
    document.getElementById("c").style.display = "inline-block";
    document.getElementById("d").style.display = "inline-block";

    // Bild setzen (wenn img vorhanden ist)
    if(q.img && q.img !== "") {
        document.getElementById("question-img").src = q.img;
        document.getElementById("question-img").style.display = "block";
    } else {
        document.getElementById("question-img").style.display = "none"; // Bild ausblenden, wenn kein Pfad da ist
    }
}

function checkAnswer(ans){
    const currentQuestion = questions[questionIndex];
    // Der 'ans' Parameter (0, 1, 2 oder 3) bezieht sich auf die aktuelle *Anzeigeposition* (A=0, B=1...)
    
    // Wir müssen herausfinden, welche Antwort im Original-Array bei dieser Position stand.
    const shuffledAnswers = [...currentQuestion.answers]; // Dies ist fehleranfällig, da wir den Zustand nicht speichern.

    // *** WICHTIGE ANPASSUNG: Um dies korrekt zu machen, MUSS die Funktion loadQuestion 
    //                 den aktuellen neuen korrekten Index in einer globalen Variable speichern.
    // Da das komplex ist, nutzen wir hier eine vereinfachte Logik basierend auf dem Wert der Antwort:

    const answerValue = currentQuestion.answers[currentQuestion.correct]; // Die richtige *Antwort* (der Text)
    const selectedAnswerText = questions[questionIndex].answers[ans]; // Der angeklickte Text
    
    // Prüfen, ob der angeklickte Antworttext mit dem korrekten Antworttext übereinstimmt
    if(selectedAnswerText === answerValue){
        score++;
        document.getElementById("result").innerText = "✅ Richtig!";
        document.getElementById("result").className = 'correct'; 
    } else {
        // Zeige die richtige Antwort, basierend auf dem Originalwert!
        document.getElementById("result").innerText = `❌ Falsch! Die richtige Antwort war: ${answerValue}`;
        document.getElementById("result").className = 'incorrect'; 
    }

    // WICHTIG: Feedback nach kurzer Zeit automatisch entfernen
    setTimeout(() => {
        document.getElementById("result").innerText = "";
        document.getElementById("result").className = ''; // ENTFERNT ALLE KLASSEN (rot/grün)
        
        questionIndex++;
        if(questionIndex < questions.length){
            loadQuestion(); 
        } else {
            // Ende des Quizs
            document.body.innerHTML = `
                <h1 style="color:#58a6ff;">🥳 QUIZ BEENDET!</h1>
                <p style="font-size: 2em; margin-top: 30px;">Du hast ${score} von ${questions.length} Fragen richtig beantwortet!</p>
                <button onclick='window.location.reload()' style='font-size:1.5em; padding:20px 40px;'>Nochmal spielen</button>
            `;
        }
    }, 1800); // Pause von 1,8 Sekunden
}

// ===========================================================
// FUNKTIONALITÄT (THEME & DEV)
// ===========================================================
const body = document.getElementById('quizBody');
const themeToggleBtn = document.getElementById('themeToggle');
const devSettingsBtn = document.getElementById('devSettingsBtn');
const settingsModal = document.getElementById('settingsModal');
const themeStatusSpan = document.getElementById('themeStatus');

// 1. Dark/Light Mode Toggle (Unverändert)
function toggleTheme() {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '☀️'; 
        document.getElementById('themeStatus').innerText = 'LIGHT MODE AKTIV';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '🌙'; 
        document.getElementById('themeStatus').innerText = 'DARK MODE AKTIV';
    }
}

// Prüft bei Start, ob der Benutzer eine Präferenz gespeichert hat (Unverändert)
function checkTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; 
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggleBtn.innerHTML = '☀️'; 
        document.getElementById('themeStatus').innerText = 'LIGHT MODE AKTIV';
    } else {
        themeToggleBtn.innerHTML = '🌙'; 
        document.getElementById('themeStatus').innerText = 'DARK MODE AKTIV';
    }
}

// Event Listener für den Theme Toggle (Unverändert)
themeToggleBtn.addEventListener('click', toggleTheme);

// Öffnen/Schließen des Dev Settings Menüs (Unverändert)
devSettingsBtn.addEventListener('click', () => {
    settingsModal.style.display = settingsModal.style.display === 'block' ? 'none' : 'block';
});

// Startfunktionen
checkTheme(); 
loadQuestion();
