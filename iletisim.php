<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>İletişim Formu Sonucu</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container my-5">
  <h2>İletişim Formu Verileri</h2>
  <hr>

  <?php
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
      echo "<p><strong>Ad Soyad:</strong> " . $_POST["name"] . "</p>";
      echo "<p><strong>E‑posta:</strong> " . $_POST["email"] . "</p>";
      echo "<p><strong>Telefon:</strong> " . $_POST["phone"] . "</p>";
      echo "<p><strong>Konu:</strong> " . $_POST["subject"] . "</p>";
      echo "<p><strong>İletişim Tercihi:</strong> " . $_POST["contact_type"] . "</p>";
      echo "<p><strong>Onay:</strong> " . (isset($_POST["agreement"]) ? "Onaylandı" : "Onaylanmadı") . "</p>";
      echo "<p><strong>Mesaj:</strong><br>" . $_POST["message"] . "</p>";
  } else {
      echo "<p>Bu sayfa iletişim formu gönderilmeden görüntülenemez.</p>";
  }
  ?>

  <br>
  <a href="iletisim.html" class="btn btn-secondary">İletişim sayfasına dön</a>
</div>

</body>
</html>