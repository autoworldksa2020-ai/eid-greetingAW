const nameInput = document.getElementById('nameInput');
const nameText  = document.getElementById('nameText');
const downloadBtn = document.getElementById('downloadBtn');
const posSelect = document.getElementById('posSelect');
const colorSelect = document.getElementById('colorSelect');
const sizeSelect = document.getElementById('sizeSelect');
const card = document.getElementById('card');

function applyName(){
  const v = (nameInput.value || '').trim();
  nameText.textContent = v ? v : 'اسمك هنا';

  // اختيار الخط حسب اللغة
  const isArabic = /[\u0600-\u06FF]/.test(v);
  if(isArabic){
    nameText.style.fontFamily = '"FFShamelFamily", sans-serif';
  }else{
    nameText.style.fontFamily = '"Co Headline W01", sans-serif';
  }
}

function applyPos(){
  const v = posSelect.value;

  nameText.style.top = '';
  nameText.style.bottom = '';
  nameText.style.transform = '';

  if(v === 'top'){
    nameText.style.top = '6%';
  }else if(v === 'center'){
    nameText.style.top = '50%';
    nameText.style.transform = 'translateY(-50%)';
  }else{
    nameText.style.bottom = '6%';
  }
}

function applyColor(){
  const v = colorSelect.value;
  nameText.style.color = v;
}

function applySize(){
  const v = sizeSelect.value;
  nameText.style.fontSize = v + 'px';
}

nameInput.addEventListener('input', applyName);
posSelect.addEventListener('change', applyPos);
colorSelect.addEventListener('change', applyColor);
sizeSelect.addEventListener('change', applySize);

applyName();
applyPos();
applyColor();
applySize();

downloadBtn.addEventListener('click', async () => {

  downloadBtn.disabled = true;
  downloadBtn.textContent = 'جاري التحضير...';

  const dataUrl = await htmlToImage.toPng(card, {
    cacheBust: true,
    pixelRatio: 1080 / card.getBoundingClientRect().width,
    backgroundColor: '#111820'
  });

  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = 'Eid_Greeting_1080x1350.png';
  a.click();

  downloadBtn.disabled = false;
  downloadBtn.textContent = 'تحميل الصورة';
});
