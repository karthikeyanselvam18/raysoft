const backToTopBtn = document.querySelector(".back-to-top-btn");

let hasReached = false;
function showHideButton() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  backToTopBtn.style.display = scrollTop >= 100 ? "block" : "none";
  const clientsCountText = document.querySelector(".clients-count");
  const projectCountText = document.querySelector(".project-count");
  const experienceCountText = document.querySelector(".experience-count");
  const employeesCountText = document.querySelector(".employees-count");

  if (!hasReached) {
    if (scrollTop > 1000) {
      let clientsCount = 700;
      let projectCount = 2800;
      let experienceCount = 0;
      let employeesCount = 10;
      function updateCount() {
        if (clientsCount <= 1000) {
          clientsCountText.innerHTML = `${clientsCount}+`;
          clientsCount++;
        }
        if (projectCount <= 3000) {
          projectCountText.innerHTML = `${projectCount}+`;
          projectCount++;
        }
        if (experienceCount <= 20) {
          experienceCountText.innerHTML = `${experienceCount}+`;
          experienceCount++;
        }
        if (employeesCount <= 100) {
          employeesCountText.innerHTML = `${employeesCount}+`;
          employeesCount++;
        }
        if (
          clientsCount <= 1000 ||
          projectCount <= 3000 ||
          experienceCount <= 20 ||
          employeesCount <= 100
        ) {
          setTimeout(updateCount, 5);
        }
      }
      updateCount();
      hasReached = true;
    }
  }
}

showHideButton();

window.addEventListener("scroll", showHideButton);

backToTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
