const nameInput = document.getElementById('nameInput');
const nameText  = document.getElementById('nameText');
const downloadBtn = document.getElementById('downloadBtn');
const posSelect = document.getElementById('posSelect');
const fontSelect = document.getElementById('fontSelect');
const card = document.getElementById('card');

function applyName(){
  const v = (nameInput.value || '').trim();
  nameText.textContent = v ? v : 'اسمك هنا';
}

function applyPos(){
  const v = posSelect.value;
  nameText.style.top = '';
  nameText.style.bottom = '';
  if(v === 'top'){
    nameText.style.top = '6%';
  }else if(v === 'center'){
    nameText.style.top = '50%';
    nameText.style.transform = 'translateY(-50%)';
  }else{
    nameText.style.bottom = '6%';
    nameText.style.transform = '';
  }
}

function applyFont(){
  const v = fontSelect.value;
  if(v === 'tajawal') nameText.style.fontFamily = '"Tajawal", system-ui, sans-serif';
  else if(v === 'ibmplex') nameText.style.fontFamily = '"IBM Plex Sans Arabic", system-ui, sans-serif';
  else nameText.style.fontFamily = '"Cairo", system-ui, sans-serif';
}

nameInput.addEventListener('input', applyName);
posSelect.addEventListener('change', applyPos);
fontSelect.addEventListener('change', applyFont);

applyName(); applyPos(); applyFont();

downloadBtn.addEventListener('click', async () => {
  downloadBtn.disabled = true;
  downloadBtn.textContent = 'جاري التحضير...';

  // Render at full Instagram resolution
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
  downloadBtn.textContent = 'تحميل الصورة (1080×1350)';
});
