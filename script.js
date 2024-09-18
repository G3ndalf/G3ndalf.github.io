let phrases = [
    { text: 'Виски', image: 'https://ae04.alicdn.com/kf/A254086a8890e46eebd47d7bf9356053fY.jpeg' },
    { text: 'Шампусик', image: 'https://ru.inshaker.com/ckeditor_assets/pictures/6169/original_1.jpg' },
    { text: 'Лимонад', image: 'https://s0.rbk.ru/v6_top_pics/media/img/6/59/346820747286596.webp' },
    { text: 'Ром', image: 'https://sdelai-doma.ru/upload/resize_cache/webp/iblock/03a/03a764a691a9234e4c7ebeabed949162.webp' },
    { text: 'воду из под крана. Алкоголь убивает брат', image: 'https://taigapost.ru/sites/default/files/pictures/news/351/Ne%20pit%20nelzya.%20Verkhovnyy%20sud%20YAkutii%20vernul%20alkogol%20v%20Arktiku_1713971982.jpg' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  });
 