(() => {
  'use strict';
  const destination = 'https://app.0jay-shop.com/';
  const duration = 10000;
  let remaining = duration;
  let deadline = Date.now() + duration;
  let paused = false;
  let redirected = false;
  const seconds = document.getElementById('seconds');
  const count = document.getElementById('remaining');
  const progress = document.getElementById('progress');
  const pause = document.getElementById('pause');
  const status = document.getElementById('status');
  const detail = document.getElementById('detail');
  const announcement = document.getElementById('announcement');
  function update() {
    if (paused || redirected) return;
    remaining = Math.max(0, deadline - Date.now());
    const value = Math.ceil(remaining / 1000);
    seconds.textContent = value;
    count.textContent = value;
    progress.style.strokeDashoffset = String(175.929 * (1 - remaining / duration));
    if (remaining === 0) {
      redirected = true;
      clearInterval(interval);
      status.textContent = 'กำลังเปิดเว็บไซต์ใหม่…';
      announcement.textContent = 'กำลังไปเว็บไซต์ใหม่';
      window.location.replace(destination);
    }
  }
  const interval = setInterval(update, 100);
  pause.addEventListener('click', () => {
    if (redirected) return;
    if (!paused) {
      update();
      if (redirected) return;
      paused = true;
      status.textContent = 'หยุดนับถอยหลังแล้ว';
      detail.hidden = true;
      pause.textContent = 'นับถอยหลังต่อ';
      announcement.textContent = 'หยุดนับถอยหลังแล้ว คุณสามารถกดไปเว็บไซต์ใหม่ได้ทุกเมื่อ';
    } else {
      deadline = Date.now() + remaining;
      paused = false;
      status.textContent = 'กำลังพาคุณไปเว็บไซต์ใหม่';
      detail.hidden = false;
      pause.textContent = 'หยุดนับถอยหลัง';
      announcement.textContent = 'เริ่มนับถอยหลังต่อ';
      update();
    }
  });
  document.getElementById('dismiss').addEventListener('click', () => {
    document.querySelector('.toast').hidden = true;
    document.querySelector('.toast').style.display = 'none';
  });
  announcement.textContent = 'LordX3D ย้ายไปที่ 0JAYSNOWY แล้ว จะไปเว็บไซต์ใหม่อัตโนมัติใน 10 วินาที';
})();
