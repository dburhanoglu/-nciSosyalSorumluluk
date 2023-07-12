function filterItems() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toLowerCase();
    var items = document.getElementsByTagName('div');
  
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var text = item.textContent || item.innerText;
      var lowercaseText = text.toLowerCase();
  
      if (lowercaseText === filter.toLowerCase() || lowercaseText.includes(' ' + filter.toLowerCase())) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    }
  }
  