document.getElementById('generateCertBtn').addEventListener('click', () => {
  const name = document.getElementById('participantName').value.trim();
  if (!name) {
    alert('Please enter your name.');
    return;
  }

  const canvas = document.getElementById('certificateCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 600;

  // Show the canvas
  canvas.style.display = 'block';

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#1e1e2f');
  gradient.addColorStop(1, '#3e3e5e');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Certificate border
  ctx.strokeStyle = '#ff6f61';
  ctx.lineWidth = 8;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  // Title text
  ctx.fillStyle = '#ff6f61';
  ctx.font = 'bold 40px Poppins, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('KA20 Certificate of Participation', canvas.width / 2, 100);

  // Subtitle text
  ctx.fillStyle = '#fff';
  ctx.font = '24px Poppins, sans-serif';
  ctx.fillText('This certificate is proudly presented to', canvas.width / 2, 200);

  // Participant name
  ctx.fillStyle = '#ff6f61';
  ctx.font = 'bold 48px Poppins, sans-serif';
  ctx.fillText(name, canvas.width / 2, 300);

  // Footer text
  ctx.fillStyle = '#fff';
  ctx.font = '20px Poppins, sans-serif';
  ctx.fillText('For your valuable participation in KA20 Group activities', canvas.width / 2, 400);

  // Date (current date)
  const date = new Date();
  const dateStr = date.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
  ctx.font = '18px Poppins, sans-serif';
  ctx.fillText(`Date: ${dateStr}`, canvas.width / 2, 450);

  // Show download button and set href
  const downloadLink = document.getElementById('downloadCert');
  downloadLink.href = canvas.toDataURL('image/png');
  downloadLink.style.display = 'inline-block';
});
