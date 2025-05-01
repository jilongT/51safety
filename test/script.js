function selectAnswer(selectedButton, isCorrect) {
    clearInterval(timer);
    const buttons = answerOptions.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });
    if (isCorrect) {
        selectedButton.classList.add('bg-green-500', 'text-white');
        correctAnswers++;
    } else {
        selectedButton.classList.add('bg-red-500', 'text-white');
        // 显示正确答案
        const correctAnswerButton = Array.from(buttons).find(button => {
            const answerText = button.textContent;
            const currentQuestion = questions[currentQuestionIndex];
            return currentQuestion.answers.find(ans => ans.text === answerText).correct;
        });
        if (correctAnswerButton) {
            correctAnswerButton.classList.add('bg-green-500', 'text-white');
        }
        // 强制重绘元素
        void selectedButton.offsetWidth;
    }
    nextButton.disabled = false;
}