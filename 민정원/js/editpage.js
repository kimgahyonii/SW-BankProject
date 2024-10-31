document.addEventListener('DOMContentLoaded', function() {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        document.getElementById('text_area').value = savedText;
    }
});

function saveText() {
    const text = document.getElementById('text_area').value;
    localStorage.setItem('savedText', text);
    alert("수정되었습니다.")
}