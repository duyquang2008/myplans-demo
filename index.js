document.addEventListener("DOMContentLoaded", function() {
    // Lắng nghe sự kiện click trên logo
    document.querySelector(".logo").addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        window.location.href = "home.html"; // Điều hướng về trang chủ
    });

    // Lắng nghe sự kiện click trên nút Home
    document.querySelector(".icon a[href='#']").addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        window.location.href = "home.html"; // Điều hướng về trang chủ
    });
});
