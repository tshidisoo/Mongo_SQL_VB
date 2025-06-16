class MongoDBQuiz {
    constructor() {
        this.questions = [
            // Çoktan seçmeli sorular (30 adet)
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de yeni bir belge eklemek için hangi metod kullanılır?',
                options: ['insertOne()', 'addDocument()', 'createDocument()', 'newDocument()'],
                correct: 0
            },
            {
                type: 'multiple-choice',
                question: 'SQL\'de PRIMARY KEY karşılığı MongoDB\'de hangisidir?',
                options: ['primary_key', '_id', 'id', 'key'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de koleksiyon oluşturmak için hangi komut kullanılır?',
                options: ['db.createTable()', 'db.createCollection()', 'db.newCollection()', 'db.makeCollection()'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'SQL\'de "ALTER TABLE people ADD join_date DATETIME" MongoDB karşılığı nedir?',
                options: ['$add', '$set', '$insert', '$append'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de alan silmek için hangi operatör kullanılır?',
                options: ['$remove', '$delete', '$unset', '$drop'],
                correct: 2
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de artan sırada index oluşturmak için hangi değer kullanılır?',
                options: ['ASC', '1', 'UP', 'ASCENDING'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de azalan sırada index oluşturmak için hangi değer kullanılır?',
                options: ['DESC', '-1', 'DOWN', 'DESCENDING'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'SQL\'de "DROP TABLE people" MongoDB karşılığı nedir?',
                options: ['db.people.delete()', 'db.people.remove()', 'db.people.drop()', 'db.people.destroy()'],
                correct: 2
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de birden fazla belge eklemek için hangi metod kullanılır?',
                options: ['insertMany()', 'insertMultiple()', 'addMany()', 'createMany()'],
                correct: 0
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de GROUP BY işlemi hangi aşamada yapılır?',
                options: ['$match', '$group', '$sort', '$project'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'SQL\'de HAVING koşulunun MongoDB karşılığı hangisidir?',
                options: ['$where', '$having', '$match', '$filter'],
                correct: 2
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de count işlemi için hangi operatör kullanılır?',
                options: ['$count', '$sum', '$total', '$number'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de ObjectId ne için kullanılır?',
                options: ['Şifreleme', 'Benzersiz kimlik', 'Tarih', 'Sıralama'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de updateMany() metodunda hangi operatör alan eklemek için kullanılır?',
                options: ['$add', '$set', '$insert', '$put'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'SQL CREATE TABLE MongoDB\'de ne zaman gerçekleşir?',
                options: ['Açıkça createCollection çağrıldığında', 'İlk belge eklendiğinde', 'Her iki durumda da', 'Hiçbir zaman'],
                correct: 2
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de birleşik index oluşturmak için kaç alan kullanılabilir?',
                options: ['En fazla 2', 'En fazla 5', 'En fazla 32', 'Sınırsız'],
                correct: 2
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de aggregation pipeline\'da ilk aşama genellikle hangisidir?',
                options: ['$group', '$match', '$sort', '$project'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'SQL\'de COUNT(*) MongoDB\'de nasıl yazılır?',
                options: ['{ $count: 1 }', '{ $sum: 1 }', '{ $total: 1 }', '{ $number: 1 }'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de alan adları nasıl referans alınır?',
                options: ['#alan_adi', '@alan_adi', '$alan_adi', '&alan_adi'],
                correct: 2
            },
            {
                type: 'multiple-choice',
                question: 'SQL JOIN işlemi MongoDB\'de hangi aşamada yapılır?',
                options: ['$join', '$lookup', '$merge', '$combine'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de _id alanı otomatik olarak ne zaman eklenir?',
                options: ['Her zaman', 'Belirtilmediğinde', 'İstendiğinde', 'Hiçbir zaman'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de status alanına göre gruplama yapmak için hangi ifade kullanılır?',
                options: ['_id: "status"', '_id: "$status"', '_id: { status }', '_id: status'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de $gt operatörü neyi ifade eder?',
                options: ['Greater than (büyük)', 'Get (al)', 'Group total', 'Generate table'],
                correct: 0
            },
            {
                type: 'multiple-choice',
                question: 'SQL AUTO_INCREMENT MongoDB\'de nasıl sağlanır?',
                options: ['Otomatik artış yok', 'ObjectId ile', 'Özel fonksiyon ile', 'Hepsi doğru'],
                correct: 3
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de aggregate metodunda kaç aşama olabilir?',
                options: ['En fazla 5', 'En fazla 10', 'En fazla 100', 'Sınırsız'],
                correct: 3
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de "people" koleksiyonuna erişmek için hangi ifade kullanılır?',
                options: ['db.people', 'people.db', 'collection.people', 'mongo.people'],
                correct: 0
            },
            {
                type: 'multiple-choice',
                question: 'SQL VARCHAR MongoDB\'de hangi veri tipine karşılık gelir?',
                options: ['String', 'Text', 'Char', 'Varchar'],
                correct: 0
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de birden fazla belgeyi güncellemek için hangi metod kullanılır?',
                options: ['updateAll()', 'updateMany()', 'updateMultiple()', 'modifyMany()'],
                correct: 1
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de empty object {} ne anlama gelir?',
                options: ['Hata', 'Boş belge', 'Tüm belgeler', 'Geçersiz sorgu'],
                correct: 2
            },
            {
                type: 'multiple-choice',
                question: 'MongoDB\'de new Date() fonksiyonu ne döndürür?',
                options: ['String tarih', 'Unix timestamp', 'Date objesi', 'ISO string'],
                correct: 2
            },

            // Kod yazma soruları (3 adet)
            {
                type: 'code',
                question: 'Aşağıdaki SQL sorgusunun MongoDB karşılığını yazın:\n\nCREATE INDEX idx_age_desc ON people(age DESC)',
                correct: 'db.people.createIndex( { age: -1 } )'
            },
            {
                type: 'code',
                question: 'Aşağıdaki SQL sorgusunun MongoDB karşılığını yazın:\n\nINSERT INTO people(user_id, age, status) VALUES ("xyz789", 30, "B")',
                correct: 'db.people.insertOne({ user_id: "xyz789", age: 30, status: "B" })'
            },
            {
                type: 'code',
                question: 'Aşağıdaki SQL sorgusunun MongoDB karşılığını yazın:\n\nALTER TABLE people DROP COLUMN status',
                correct: 'db.people.updateMany({}, { $unset: { "status": "" } })'
            }
        ];

        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.showingFeedback = false;

        this.initializeElements();
        this.bindEvents();
        this.displayQuestion();
    }

    initializeElements() {
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.codeContainer = document.getElementById('code-container');
        this.codeInput = document.getElementById('code-input');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.submitBtn = document.getElementById('submit-btn');
        this.feedback = document.getElementById('feedback');
        this.questionCounter = document.getElementById('question-counter');
        this.scoreElement = document.getElementById('score');
        this.quizContainer = document.getElementById('quiz-container');
        this.resultsContainer = document.getElementById('results-container');
        this.finalScore = document.getElementById('final-score');
        this.detailedResults = document.getElementById('detailed-results');
        this.restartBtn = document.getElementById('restart-btn');
    }

    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.submitBtn.addEventListener('click', () => this.submitQuiz());
        this.restartBtn.addEventListener('click', () => this.restart());
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        this.questionText.textContent = question.question;
        
        this.questionCounter.textContent = `Soru ${this.currentQuestion + 1} / ${this.questions.length}`;
        this.scoreElement.textContent = `Puan: ${this.score}`;

        if (question.type === 'multiple-choice') {
            this.displayMultipleChoice(question);
        } else if (question.type === 'code') {
            this.displayCodeQuestion(question);
        }

        this.updateNavigationButtons();
        this.hideFeedback();
    }

    displayMultipleChoice(question) {
        this.optionsContainer.style.display = 'flex';
        this.codeContainer.style.display = 'none';
        this.optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(index));
            
            if (this.userAnswers[this.currentQuestion] === index) {
                optionElement.classList.add('selected');
            }
            
            this.optionsContainer.appendChild(optionElement);
        });
    }

    displayCodeQuestion(question) {
        this.optionsContainer.style.display = 'none';
        this.codeContainer.style.display = 'block';
        
        if (this.userAnswers[this.currentQuestion]) {
            this.codeInput.value = this.userAnswers[this.currentQuestion];
        } else {
            this.codeInput.value = '';
        }
    }

    selectOption(index) {
        if (this.showingFeedback) return;

        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        document.querySelectorAll('.option')[index].classList.add('selected');
        
        this.userAnswers[this.currentQuestion] = index;
    }

    nextQuestion() {
        if (this.questions[this.currentQuestion].type === 'code') {
            this.userAnswers[this.currentQuestion] = this.codeInput.value.trim();
        }

        if (this.showingFeedback) {
            this.hideFeedback();
            if (this.currentQuestion < this.questions.length - 1) {
                this.currentQuestion++;
                this.displayQuestion();
            } else {
                this.submitQuiz();
            }
        } else {
            this.checkAnswer();
        }
    }

    previousQuestion() {
        if (this.showingFeedback) {
            this.hideFeedback();
        }
        
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
        }
    }

    checkAnswer() {
        const question = this.questions[this.currentQuestion];
        let isCorrect = false;
        let userAnswer = this.userAnswers[this.currentQuestion];

        if (question.type === 'multiple-choice') {
            isCorrect = userAnswer === question.correct;
            
            document.querySelectorAll('.option').forEach((opt, index) => {
                if (index === question.correct) {
                    opt.classList.add('correct');
                } else if (index === userAnswer && !isCorrect) {
                    opt.classList.add('incorrect');
                }
            });
        } else if (question.type === 'code') {
            userAnswer = this.codeInput.value.trim();
            this.userAnswers[this.currentQuestion] = userAnswer;
            
            // Basit string karşılaştırması (daha gelişmiş karşılaştırma yapılabilir)
            isCorrect = this.normalizeCode(userAnswer) === this.normalizeCode(question.correct);
        }

        if (isCorrect && !this.userAnswers[this.currentQuestion + '_scored']) {
            this.score++;
            this.userAnswers[this.currentQuestion + '_scored'] = true;
        }

        this.showFeedback(isCorrect, question);
        this.showingFeedback = true;
        this.updateNavigationButtons();
    }

    normalizeCode(code) {
        return code.replace(/\s+/g, ' ').replace(/\s*([{}(),:])\s*/g, '$1').trim().toLowerCase();
    }

    showFeedback(isCorrect, question) {
        this.feedback.style.display = 'block';
        this.feedback.className = isCorrect ? 'correct' : 'incorrect';
        
        if (isCorrect) {
            this.feedback.textContent = '✓ Doğru cevap!';
        } else {
            if (question.type === 'multiple-choice') {
                this.feedback.textContent = `✗ Yanlış cevap. Doğru cevap: ${question.options[question.correct]}`;
            } else {
                this.feedback.textContent = `✗ Yanlış cevap. Doğru cevap: ${question.correct}`;
            }
        }

        this.scoreElement.textContent = `Puan: ${this.score}`;
    }

    hideFeedback() {
        this.feedback.style.display = 'none';
        this.showingFeedback = false;
        
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('correct', 'incorrect');
        });
    }

    updateNavigationButtons() {
        this.prevBtn.disabled = this.currentQuestion === 0;
        
        if (this.showingFeedback) {
            this.nextBtn.textContent = this.currentQuestion === this.questions.length - 1 ? 'Testi Bitir' : 'Sonraki';
        } else {
            this.nextBtn.textContent = 'Cevapla';
        }

        if (this.currentQuestion === this.questions.length - 1 && !this.showingFeedback) {
            this.submitBtn.style.display = 'inline-block';
            this.nextBtn.style.display = 'none';
        } else {
            this.submitBtn.style.display = 'none';
            this.nextBtn.style.display = 'inline-block';
        }
    }

    submitQuiz() {
        // Son sorunun cevabını kaydet
        if (this.questions[this.currentQuestion].type === 'code') {
            this.userAnswers[this.currentQuestion] = this.codeInput.value.trim();
        }

        this.quizContainer.style.display = 'none';
        this.resultsContainer.style.display = 'block';
        
        const percentage = Math.round((this.score / this.questions.length) * 100);
        this.finalScore.innerHTML = `
            <h3>Skorunuz: ${this.score} / ${this.questions.length}</h3>
            <p>Başarı Oranı: %${percentage}</p>
        `;

        this.displayDetailedResults();
    }

    displayDetailedResults() {
        let resultsHTML = '<h3>Detaylı Sonuçlar:</h3>';
        
        this.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            let isCorrect = false;
            let answerText = '';

            if (question.type === 'multiple-choice') {
                isCorrect = userAnswer === question.correct;
                answerText = userAnswer !== undefined ? question.options[userAnswer] : 'Cevaplanmadı';
            } else {
                isCorrect = this.normalizeCode(userAnswer || '') === this.normalizeCode(question.correct);
                answerText = userAnswer || 'Cevaplanmadı';
            }

            resultsHTML += `
                <div class="result-item">
                    <div>
                        <strong>Soru ${index + 1}:</strong> ${question.question.substring(0, 50)}...
                    </div>
                    <div class="${isCorrect ? 'result-correct' : 'result-incorrect'}">
                        ${isCorrect ? '✓' : '✗'}
                    </div>
                </div>
            `;
        });

        this.detailedResults.innerHTML = resultsHTML;
    }

    restart() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.showingFeedback = false;
        
        this.quizContainer.style.display = 'block';
        this.resultsContainer.style.display = 'none';
        
        this.displayQuestion();
    }
}

// Quiz'i başlat
document.addEventListener('DOMContentLoaded', () => {
    new MongoDBQuiz();
});