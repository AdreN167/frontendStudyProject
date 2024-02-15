(function () {
  "use strict";

  const root = document.documentElement;
  const navToggle = root.querySelector("#js-navToggle");

  navToggle.addEventListener("click", function () {
    root.classList.toggle("show-nav");
  });

  const eventPP = root.querySelector("#js-eventPP");
  const eventOpenBtn = root.querySelector("#js-eventOpenBtn");

  if (eventPP && eventOpenBtn) {
    const closeEventPP = function (event) {
      function close() {
        document.removeEventListener("keyup", closeEventPP);
        eventPP.removeEventListener("click", closeEventPP);
        root.classList.remove("show-event-popup");
      }

      switch (event.type) {
        case "keyup":
          if (event.key === "Escape" || event.keyCode === 27) close();
          break;
        case "click":
          if (
            event.target === this ||
            event.target.classList.contains("js-eventCloseBtn")
          )
            close();
          break;
      }
    };

    eventOpenBtn.addEventListener("click", function() {
        root.classList.add("show-event-popup");

        document.addEventListener("keyup", closeEventPP);
        eventPP.addEventListener("click", closeEventPP);
    })
  }

  const swipers = root.querySelectorAll(".js-swiper");

  swipers.forEach(function (swpr) {
    new Swiper(swpr, {
        //updateOnWindo
    });
  });
})();
