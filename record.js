// 현재 날짜 객체 생성
var currentDate = new Date();

// 날짜를 표시할 요소 선택
var dateElement = document.getElementById('currentDate');

// 날짜를 문자열로 포맷팅 (예: "2023년 9월 9일")
var formattedDate = currentDate.getFullYear() + '년 ' + (currentDate.getMonth() + 1) + '월 ' + currentDate.getDate() + '일';

// 요소에 현재 날짜 표시
dateElement.textContent = formattedDate;