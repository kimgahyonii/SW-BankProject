const mealPosts = [
    { "img": "/김가현_mypage/images/소고기 덮밥.png", "name": "소고기 덮밥", "description": "횡성 한우로 만든 소고기 덮밥", "type": "한우", "region": "강원도 횡성" },
    { "img": "/김가현_mypage/images/김치찌개.png", "name": "김치찌개", "description": "강원도 고랭지 배추로 만든 김치찌개", "type": "배추", "region": "강원도" },
    { "img": "/김가현_mypage/images/전복죽.png", "name": "전복죽", "description": "완도 전복으로 만든 전복죽", "type": "전복", "region": "전라남도 완도" },
    { "img": "/김가현_mypage/images/된장국.png", "name": "된장국", "description": "경북 안동 된장으로 끓인 된장국", "type": "된장", "region": "경상북도 안동" },
    { "img": "/김가현_mypage/images/회덮밥.png", "name": "회덮밥", "description": "제주도 광어로 만든 회덮밥", "type": "광어", "region": "제주도" },
    { "img": "/김가현_mypage/images/비빔밥.png", "name": "비빔밥", "description": "전주 콩나물로 만든 비빔밥", "type": "콩나물", "region": "전라북도 전주" },
    { "img": "/김가현_mypage/images/갈비찜.png", "name": "갈비찜", "description": "이천 쌀로 만든 갈비찜", "type": "갈비", "region": "경기도 이천" },
    { "img": "/김가현_mypage/images/닭볶음탕.png", "name": "닭볶음탕", "description": "철원 오리로 만든 닭볶음탕", "type": "오리", "region": "강원도 철원" },
    { "img": "/김가현_mypage/images/잡채.png", "name": "잡채", "description": "전남 고구마로 만든 잡채", "type": "고구마", "region": "전라남도 나주" },
    { "img": "/김가현_mypage/images/청국장.png", "name": "청국장", "description": "청송 콩으로 만든 청국장", "type": "콩", "region": "경상북도 청송" }
];

const mealGrid = document.querySelector('.meal-grid');
mealPosts.forEach(post => {
    const mealCard = `
        <div class="meal_post">
            <div class="image">
                <img src="${post.img}" alt="${post.name}">
            </div>
            <div class="centered-div">
                <span class="pork">${post.type}</span>
            </div>
            <div class="explanation-container">
                <span class="explanation">
                    ${post.region}에서 온,<br><span class="food_name">${post.name}</span>
                </span>
            </div>
        </div>
    `;
    mealGrid.innerHTML += mealCard;
});