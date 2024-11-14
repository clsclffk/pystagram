// 다크모드 토글 함수
const toggleDarkMode = () => {
    // 전체 페이지에 다크모드 적용을 위한 body에 dark-mode 클래스를 토글
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
};

// 페이지 로드 시 다크모드 상태 확인 후 적용
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
});

// 다크모드 토글 버튼 클릭 이벤트
document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.querySelector('.dark-mode-toggle');
    darkModeButton.addEventListener('click', toggleDarkMode); // 버튼 클릭 시 다크모드 토글
});