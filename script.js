  // 名前一覧（番号に対応）
const names = [
    'あっちゃん', 'りょう', 'よっしー', 'たか', 'るい', 'がっくん', 'かず', '平手', 'づっけん', 'たいせい',
    'たつひろ', 'さきの', 'ゆうま', 'だいや', 'れおん', 'るみ', 'こうた', 'とも', 'なつね', 'しゅう',
    'かつよし', 'しほ', 'りんたろう', 'メイ', 'かえ', 'ゆづき', 'ゆい', 'おうか', 'ひろふみ', 'さくら',
    'りかこ', 'しょうた', 'けいた', 'まどか', 'えり', 'みさき'
  ];
  
  const wheel = document.getElementById('wheel');
  const resultText = document.getElementById('result');
  const nameListDiv = document.getElementById('namelist');
  
  const numSlices = names.length;
  const anglePerSlice = 360 / numSlices;
  const winningIndex = 4;
  
  const colors = [
    '#f8c471', '#aed6f1', '#abebc6', '#f9e79f', '#fadbd8', '#e8daef', '#d5f5e3',
    '#f5cba7', '#f7dc6f', '#d7bde2', '#a3e4d7', '#f1948a', '#a9cce3', '#f7f9f9',
    '#f0b27a', '#d2b4de', '#aed6f1', '#d1f2eb', '#f9e79f', '#fad7a0', '#edbb99',
    '#f5b7b1', '#d5dbdb', '#f4ecf7', '#fef9e7', '#eafaf1', '#f6ddcc', '#f9ebea',
    '#e8f8f5', '#f2f3f4', '#fdfefe', '#e5e8e8', '#fcf3cf', '#fceae7', '#eaf2f8',
    '#fef5e7'
  ];

  function createWheel() {
    wheel.innerHTML = '';
  
    names.forEach((_, i) => {
      const slice = document.createElement('div');
      slice.className = 'slice';
  
      const angle = i * anglePerSlice;
      slice.style.transform = `rotate(${angle}deg) skewY(${90 - anglePerSlice}deg)`;
      slice.style.backgroundColor = colors[i % colors.length]; // ← 元に戻す
  
      if (i === 0 || i === 18) {
        const label = document.createElement('div');
        label.className = 'label';
        label.innerText = `${i + 1}`;
        label.style.transform = `rotate(${anglePerSlice / 2}deg) translate(60px, -10px)`;
        slice.appendChild(label);
      }
  
      wheel.appendChild(slice);
    });
  }

  
  function createNameList() {
    const html = names.map((name, i) => {
      const color = colors[i % colors.length];
      return `<div class="name-item"><div class="color-box" style="background-color: ${color};"></div>${i + 1}. ${name}</div>`;
    }).join('');
    nameListDiv.innerHTML = `<strong>番号一覧</strong><br>${html}`;
  }


//   function spin() {
//     const stopAngle = 360 * 10 + (360 - (winningIndex * anglePerSlice)) - anglePerSlice / 2;
//     wheel.style.transform = `rotate(${stopAngle}deg)`;
  
//     setTimeout(() => {
//       resultText.textContent = `当選者: ${winningIndex + 1}. ${names[winningIndex]}`;
//     }, 5000);
//   }
  function spin() {
    const stopAngle = 360 * 10 + (360 - (winningIndex * anglePerSlice)) - anglePerSlice / 2 + 190;
    wheel.style.transform = `rotate(${stopAngle}deg)`;
  
    setTimeout(() => {
      resultText.textContent = `当選者: ${winningIndex + 1}. ${names[winningIndex]}`;
    }, 5000);
  }
  
  
  createWheel();
  createNameList();
  