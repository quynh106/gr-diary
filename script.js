function openTab(evt, tabName) {
  // Ẩn tất cả các tab-content
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Xóa các lớp CSS được chọn từ tất cả các nút
  var tabButtons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }

  // Hiển thị tab hiện tại và thêm lớp 'active' cho nó
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Mở tab đầu tiên mặc định
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tab-button").click();
});
