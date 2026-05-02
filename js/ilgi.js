document.addEventListener("DOMContentLoaded", function () {

  const apiKey = "8d8fbe74"; 
  const url = `https://www.omdbapi.com/?t=Interstellar&apikey=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("API cevabı:", data);

      if (data.Response === "True") {
        document.getElementById("movieCard").innerHTML = `
          <img src="${data.Poster}" alt="${data.Title}" class="img-fluid movie-poster mb-4">
          <h3>${data.Title} (${data.Year})</h3>
          <p><strong>Yönetmen:</strong> ${data.Director}</p>
          <p><strong>IMDb Puanı:</strong> ${data.imdbRating}</p>
          <p class="movie-plot">
  Interstellar, insanlığın yok olma tehlikesiyle karşı karşıya kaldığı bir gelecekte,
  yeni yaşam alanları bulmak amacıyla uzaya gönderilen bir grup astronotun hikâyesini anlatır.
  Film; zaman, uzay, fedakârlık ve insanlık temalarını derin bir bilim kurgu anlatımıyla ele almaktadır.
</p>
        `;
      } else {
        document.getElementById("movieCard").innerHTML =
          "<p>Film bulunamadı.</p>";
      }
    })
    .catch(error => {
      console.error("Hata:", error);
      document.getElementById("movieCard").innerHTML =
        "<p>Film bilgileri alınırken hata oluştu.</p>";
    });

});