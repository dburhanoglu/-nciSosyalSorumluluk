// İlan detaylarını alma ve gösterme
var ilanId = getParameterByName('id');
var ilanDetails = getIlanDetails(ilanId);
showIlanDetails(ilanId, ilanDetails);

// URL'den parametre alma
function getParameterByName(name) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(location.search);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// İlan detaylarını almak için sunucu tarafı veya veritabanı isteği yapılabilir.
function getIlanDetails(ilanId) {
  // Örnek bir ilan detayı nesnesi döndürme
  if (ilanId === "ilan1") {
    return {
      title: "Tev Bursu",
      description: "Üniversite öğrencilerine verilen Tev Bursu hakkında detaylı bilgiler...",
      // Diğer ilan detayları
    };
  } else if (ilanId === "ilan2") {
    return {
      title: "Staj",
      description: "Yaz dönemi için stajyer aranıyor. İlgili bölümler öncelikli tercih edilecektir...",
      // Diğer ilan detayları
    };
  } else if (ilanId === "ilan3") {
    return {
      title: "İş",
      description: "İş ilanı açıklaması ve gereklilikler hakkında detaylı bilgiler...",
      // Diğer ilan detayları
    };
  }
  // Diğer ilan detayları için gerekli kontroller yapılabilir veya sunucuya istek gönderilebilir.
  return null;
}

// İlan detaylarını gösterme
function showIlanDetails(ilanId, ilanDetails) {
  if (ilanDetails) {
    var ilanContainer = document.getElementById("ilan-details");
    ilanContainer.innerHTML = `
      <img src="img/${ilanId}.jpg" alt="${ilanId}">
      <h2>${ilanDetails.title}</h2>
      <p>${ilanDetails.description}</p>
      <!-- Diğer ilan detayları -->
    `;
  }
}
