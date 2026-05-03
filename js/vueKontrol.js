const { createApp } = Vue;

createApp({
  methods: {
    vueKontrol() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;

      if (name === "" || email === "" || phone === "") {
        alert("Tüm alanları doldurunuz (Vue kontrolü)");
        return;
      }

      if (!email.includes("@")) {
        alert("Geçerli bir e-posta giriniz (Vue kontrolü)");
        return;
      }

      if (!/^[0-9]+$/.test(phone)) {
        alert("Telefon sadece rakam olmalıdır (Vue kontrolü)");
        return;
      }

      alert("Vue.js kontrolü başarılı ✅");
    }
  }
}).mount("#vueApp");