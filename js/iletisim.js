
function jsKontrol() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (name === "" || email === "" || phone === "") {
    alert("Tüm alanları doldurunuz!");
    return false;
  }

  if (!email.includes("@")) {
    alert("Geçerli bir e‑posta adresi giriniz!");
    return false;
  }

  if (!/^[0-9]+$/.test(phone)) {
    alert("Telefon alanına sadece rakam giriniz!");
    return false;
  }

  alert("JavaScript ile kontrol başarılı ✅");
  return true;
}