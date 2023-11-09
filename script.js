'use strict';
// 1行目に記載している 'use strict' は削除しないでください
// const btn = document.querySelector('.btn button');
// const btn2 = document.getElementById('.btn2Text');
// btn.addEventListener("click", () => {
//   const hidden = document.querySelector(".hidden")
//   hidden.classList.toggle('appear');
// });

function btnLearn() {
  console.log('ボタン押された');
  let box = document.querySelector('#bluebox');
  box.innerText = '';
  let coment = document.createElement('p'); //ワニが入るパラグラフ要素を作る。<p></p>
  coment.innerText = 'プログラミング初心者で多くの事を初めて学びました。一緒に学べる仲間にも出会えて、苦痛と同時に楽しく学ぶ事ができました。ググり力の大切さもしれました';
  box.appendChild(coment);
}

function btnTask() {
  console.log('ボタン押された');
  let box = document.querySelector('#redbox');
  box.innerText = '';
  let coment = document.createElement('p'); //ワニが入るパラグラフ要素を作る。<p></p>
  coment.innerText = '課題も全ては解けなかったし、まだまだ脱初心者を抜けれてはいないので、再度課題の復習をしていき、まずは脱初心者目指して頑張ります。';
  box.appendChild(coment);
}

function btnThank() {
  console.log('ボタン押された');
  let box = document.querySelector('#blackbox');
  box.innerText = '';
  let coment = document.createElement('p'); //ワニが入るパラグラフ要素を作る。<p></p>
  coment.innerText = '講師の皆さん、FND21期生の皆さんありがとうございました。また、一緒に仕事する機会があればよろしくおねがいいたします。';
  box.appendChild(coment);
}
