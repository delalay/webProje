<?php
$ogrenci_no = "b251210038";
$dogru_mail = $ogrenci_no . "@sakarya.edu.tr";
$dogru_sifre = $ogrenci_no;

$mail = $_POST["username"] ?? "";
$sifre = $_POST["password"] ?? "";

if ($mail === $dogru_mail && $sifre === $dogru_sifre) {
    echo "<h2>Hoşgeldiniz $ogrenci_no</h2>";
    echo "<p>Giriş başarılı. Ana sayfaya yönlendiriliyorsunuz...</p>";
    echo "<meta http-equiv='refresh' content='2;url=index.html'>";
} else {
    echo "<h2>Hatalı Giriş</h2>";
    echo "<p>Bilgiler yanlış. Login sayfasına yönlendiriliyorsunuz...</p>";
    echo "<meta http-equiv='refresh' content='2;url=login.html'>";
}
?>