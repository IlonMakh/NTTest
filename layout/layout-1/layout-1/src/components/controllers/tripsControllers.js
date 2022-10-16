export default class TripsControllers {
  listenMoreBtn() {
    const moreBtn = document.querySelector(".more__btn");
    moreBtn.addEventListener("click", () => {
      const tripCard = moreBtn.closest(".trips__card");
      const hiddenBtns = tripCard.querySelectorAll(".hidden");
      hiddenBtns.forEach((btn) => btn.classList.remove("hidden"));
      moreBtn.classList.add("hidden");
    });
  }
}
