function DekaTutorial(konten, musik, nomorWhatsapp) {
    const container = document.createElement('div');
    container.style.backgroundColor = '#E0F7FA'; // Warna latar belakang biru muda
    container.style.padding = '20px';
    container.style.borderRadius = '10px';
    container.style.textAlign = 'center';
    container.style.width = '100%';
    container.style.height = '100vh';

    konten.forEach(item => {
        const img = document.createElement('img');
        img.src = item.gambar;
        img.alt = "Gambar Ucapan";
        img.style.width = '200px';
        img.style.marginBottom = '10px';
        
        const message = document.createElement('p');
        message.innerText = item.ucapan;
        message.style.color = '#0288D1'; // Warna teks biru
        message.style.fontSize = '24px';
        message.style.fontFamily = 'Arial, sans-serif';

        container.appendChild(img);
        container.appendChild(message);
    });

    const music = document.createElement('audio');
    music.src = musik;
    music.controls = true;
    music.style.marginTop = '20px';

    const whatsappLink = document.createElement('a');
    whatsappLink.href = `https://wa.me/${nomorWhatsapp}`;
    whatsappLink.innerText = 'Hubungi via WhatsApp';
    whatsappLink.style.display = 'block';
    whatsappLink.style.marginTop = '15px';
    whatsappLink.style.color = '#0288D1'; // Warna teks link biru
    whatsappLink.style.textDecoration = 'none';
    whatsappLink.style.fontSize = '18px';

    container.appendChild(music);
    container.appendChild(whatsappLink);

    document.body.appendChild(container);
}

// Contoh penggunaan fungsi
DekaTutorial(
    [{ gambar: 'gambar.png', ucapan: 'Selamat Datang di Situs Kami!' }],
    'musik.mp3',
    '628123456789'
);
