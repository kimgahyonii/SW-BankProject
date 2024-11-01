// editpage.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('')
    const post = JSON.parse(localStorage.getItem('selectedPost'));

    if (post) {
        // 이미지 및 텍스트 필드에 값 설정
        document.querySelector('.image').src = post.image;
        document.querySelector('.pork').textContent = post.tag;
        document.querySelector('.food_name').textContent = post.name;
        document.querySelector('.explanation').innerHTML = `${post.info},<br><span class="food_name">${post.name}</span>`;
    }
});

document.addEventListener('DOMContentLoaded', function () {
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