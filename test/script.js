// script.js
function checkAnswer(selected) {
    const correctAnswer = 'B'; // 正确的答案是'B'，你可以根据需要修改这个值来测试不同的答案。
    const resultDiv = document.getElementById('result');
    if (selected === correctAnswer) {
        resultDiv.innerHTML = '<p style="color:green;">回答正确！</p>';
    } else {
        resultDiv.innerHTML = '<p style="color:red;">回答错误，正确答案是 B。</p>';
    }
}
// @media (max-width: 600px) {
//     button { font-size: 14px; padding: 8px 16px; }
// }