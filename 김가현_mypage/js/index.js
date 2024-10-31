// 데이터 배열: 게시물 정보
const posts = [
    {
        image: "/김가현_mypage/images/가지 덮밥.png",
        tag: "#가지",
        info: "직매장에서 산 가지로 만든, ",
        name: "가지 덮밥"
    },
    {
        image: "/김가현_mypage/images/두부 샐러드.png",
        tag: "#두부",
        info: "전라남도 순천에서 먹는 두부",
        name: "두부 샐러드"
    },
    {
        image: "/김가현_mypage/images/새우장.png",
        tag: "#새우",
        info: "부산 로컬푸드 새우로 만든,",
        name: "새우장"
    },
    {
        image: "/김가현_mypage/images/콩나물 잡채.png",
        tag: "#콩나물",
        info: "전주의 로컬푸드 콩나물,",
        name: "콩나물 잡채"
    },
    {
        image: "/김가현_mypage/images/들깨 연두부 샐러드.png",
        tag: "#들깨",
        info: "전주에서 산 고소한 들깨,",
        name: "들깨 두부 샐러드"
    },
    {
        image: "/김가현_mypage/images/연근깻잎전.png",
        tag: "#연근",
        info: "강원도 로컬푸드 깻잎,",
        name: "연근깻잎전"
    },
];

// 게시물 카드 생성 함수
function renderPosts() {
    const postContainer = document.querySelector('.post_container');
    postContainer.innerHTML = ''; // 기존 게시물 지우기

    posts.forEach(post => {
        const postCard = `
            <div class="post_card">
                <img src="${post.image}" alt="${post.name}" class="post_card_img">
                <div class="fake_button">${post.tag}</div>
                <div class="post_wrapper">
                    <div class="post_text_wrapper">
                        <p class="local_food_info">${post.info}</p>
                        <p class="local_food_menu_name">${post.name}</p>
                    </div>
                    <a href="edit_mypost.html" class="post_card_icon_link">
                        <img class="post_card_icon" src="/김가현_mypage/images/chevron-right.svg" alt="Edit post">
                    </a>
                </div>
            </div>
        `;
        postContainer.insertAdjacentHTML('beforeend', postCard);
    });
}

// 코인 업데이트 함수
function updateCoin(coinAmount) {
    document.getElementById("my_coin").innerText = `${coinAmount} coin`;
    document.getElementById("coin_bank_subtitle").innerText = `축하해요 ${coinAmount}코인을 저축했어요`;
}

// post_card의 개수를 기반으로 코인 값을 계산하는 함수
function calculateCoinByPostCount() {
    const postCount = posts.length; // posts 배열에서 개수 가져오기
    const coinAmount = postCount * 100; // 예: 게시물 한 개당 100 코인
    updateCoin(coinAmount);
}

// 페이지가 로드될 때 실행
window.onload = function () {
    renderPosts(); // 게시물 렌더링
    calculateCoinByPostCount(); // 코인 계산
};
