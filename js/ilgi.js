document.addEventListener("DOMContentLoaded", function () {

  const apiKey = "8d8fbe74";

  const movies = [
    {
      title: "Interstellar",
      desc: "Interstellar, insanlığın geleceğini kurtarmak amacıyla uzaya gönderilen astronotların zaman ve mekân kavramlarını zorlayan yolculuğunu konu alır."
    },
    {
      title: "The Prestige",
      desc: "The Prestige, iki sihirbaz arasındaki rekabetin takıntıya dönüşmesini ve bu rekabetin yol açtığı karanlık sonuçları anlatan sürükleyici bir filmdir."
    },
    {
      title: "Prison Break",
      desc: "Prison Break, masum yere hapse giren kardeşini kurtarmak için kusursuz bir kaçış planı yapan bir mühendisin hikâyesini konu alır."
    },
    {
      title: "Stranger Things",
      desc: "Stranger Things, küçük bir kasabada yaşanan gizemli olaylar, paralel evrenler ve arkadaşlık bağları etrafında şekillenen bir dizidir."
    },
    {
      title: "The Terminator",
      desc: "The Terminator, yapay zekânın insanlığa karşı tehdit oluşturduğu bir gelecekte geçen aksiyon ve bilim kurgu türünde kült bir filmdir."
    },
    {
      title: "Police Story",
      desc: "Police Story, Jackie Chan’in başrolünde olduğu, aksiyon ve komediyi harmanlayan, suçla mücadeleyi konu alan eğlenceli bir yapımdır."
    }
  ];

  const movieArea = document.getElementById("movieCard");

 
  movieArea.innerHTML = "<p class='about-text text-center'>Film bilgileri yükleniyor...</p>";

  let firstLoaded = false; 

  movies.forEach(movie => {
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie.title)}&apikey=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "True") {

          
          if (!firstLoaded) {
            movieArea.innerHTML = "";
            firstLoaded = true;
          }

          movieArea.innerHTML += `
            <div class="col-md-4 mb-4">
              <div class="card ilgi-card h-100">
                <img src="${data.Poster}" class="card-img-top" alt="${data.Title}">
                <div class="card-body">
                  <h5 class="card-title">${data.Title} (${data.Year})</h5>
                  <p class="card-text">${movie.desc}</p>
                  <p class="imdb-text">IMDb: ${data.imdbRating}</p>
                </div>
              </div>
            </div>
          `;
        }
      })
      .catch(err => console.error(err));
  });

});