
let alic5_text = 'alic5'.repeat(5);

function alic5() {
  console.log(alic5_text.repeat(5).repeat(5).repeat(5).repeat(5).repeat(5));

  alic5_text = `${alic5_text[alic5_text.length - 1]}${alic5_text.substring(0, alic5_text.length - 1)}`;

  window.setTimeout(alic5, 555);

  if (document.readyState === 'loading') return;

  const element_last = document.body.lastElementChild;

  document.body.removeChild(element_last);

  document.body.prepend(element_last);
}

alic5();
