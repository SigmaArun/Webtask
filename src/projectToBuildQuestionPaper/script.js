const questions = [
    {
      question: {
        en: "What is the capital of France?",
        hi: "फ्रांस की राजधानी क्या है?"
      },
      options: [
        { en: "Berlin", hi: "बर्लिन" },
        { en: "Madrid", hi: "मैड्रिड" },
        { en: "Paris", hi: "पेरिस" },
        { en: "Lisbon", hi: "लिस्बन" }
      ],
      answer: 2 // index of the correct answer
    },
    {
      question: {
        en: "Who wrote 'To Kill a Mockingbird'?",
        hi: "'टू किल अ मॉकिंगबर्ड' किसने लिखा?"
      },
      options: [
        { en: "Harper Lee", hi: "हार्पर ली" },
        { en: "J.K. Rowling", hi: "जे.के. रोलिंग" },
        { en: "Ernest Hemingway", hi: "अर्नेस्ट हेमिंग्वे" },
        { en: "Mark Twain", hi: "मार्क ट्वेन" }
      ],
      answer: 0
    },
    // Add more questions as needed
  ];
  
  let currentLanguage = 'en';
  
  function setLanguage(language) {
    currentLanguage = language;
    loadQuestions();
  }
  
  function loadQuestions() {
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    questions.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      questionDiv.innerHTML = `
        <p>${index + 1}. ${q.question[currentLanguage]}</p>
        <ul class="options">
          ${q.options.map((option, i) => `
            <li>
              <label>
                <input type="radio" name="question${index}" value="${i}">
                ${option[currentLanguage]}
              </label>
            </li>
          `).join('')}
        </ul>
      `;
      container.appendChild(questionDiv);
    });
  }
  
  function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption && parseInt(selectedOption.value) === q.answer) {
        score++;
      }
    });
    alert(`You scored ${score} out of ${questions.length}`);
  }
  
  window.onload = loadQuestions;
  