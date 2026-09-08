const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const inquiryForm = document.querySelector("#inquiry-form");
const formNote = document.querySelector("#form-note");

const updateHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 16);
};

const closeMenu = () => {
  menuToggle?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("open");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const opening = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(opening));
  navigation?.classList.toggle("open", opening);
  document.body.classList.toggle("menu-open", opening);
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

inquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(inquiryForm);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const message = String(data.get("message") || "").trim();

  const subject = encodeURIComponent(`Website inquiry from ${name}`);
  const body = encodeURIComponent(
    [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, "", message].join("\n"),
  );

  if (formNote) {
    formNote.textContent = "Your email app should open with the inquiry prepared.";
  }

  window.location.href = `mailto:sabrakirk@gmail.com?subject=${subject}&body=${body}`;
});
