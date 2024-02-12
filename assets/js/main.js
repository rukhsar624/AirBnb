window.addEventListener('scroll', function () {
    var headerSecond = document.getElementById('header-second');
    // Adjust the scroll threshold as needed
    var scrollThreshold = 100;

    if (window.scrollY > scrollThreshold) {
        headerSecond.style.display = 'block';
    } else {
        headerSecond.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var searchInputsContainer = document.getElementById('searchInputsContainer');
    var openDiv = document.querySelector('.open-div');

    searchInputsContainer.addEventListener('click', function() {
      openDiv.classList.toggle('open');
    });
  });
//   

