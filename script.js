const contactForm = document.querySelector(".contact-form");
// Sayfadaki class="contact-form" olan formu bulup contactForm değişkenine koyar.

contactForm.addEventListener("submit", function (event) {
// Form gönderildiğinde çalışacak bir olay dinleyicisi ekler.

  event.preventDefault();
  // Sayfanın yeniden yüklenmesini önler; form verisini bir sunucuya göndermez.

  let statusMessage = contactForm.querySelector(".form-status");
  // Form içinde daha önce eklenmiş bir durum mesajı var mı diye bakar.

  if (!statusMessage) {
    statusMessage = document.createElement("p");
    // Mesaj yoksa yeni bir paragraf öğesi oluşturur.

    statusMessage.className = "form-status";
    // Bu paragrafa CSS ile biçim verebilmek için class adı ekler.

    statusMessage.setAttribute("role", "status");
    // Ekran okuyuculara bu alanın durum bilgisi olduğunu bildirir.

    contactForm.append(statusMessage);
    // Yeni paragrafı formun sonuna ekler.
  }

  statusMessage.textContent =
    "Mesajın hazır. Gerçek gönderim için siteye bir form servisi bağlamamız gerekiyor.";
  // Kullanıcıya formun şu anda gerçekten gönderilmediğini açıkça belirtir.

  contactForm.reset();
  // Formdaki giriş alanlarını temizler.
});