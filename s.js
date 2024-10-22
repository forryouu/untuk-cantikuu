function DekaTutorial(konten, musik, nomorWhatsapp) {
    const container = document.createElement('div');
    container.style.backgroundColor = '#E0F7FA'; // Warna latar belakang biru muda
    container.style.padding = '20px';
    container.style.borderRadius = '10px';
    container.style.textAlign = 'center';

    konten.forEach(item => {
        const img = document.createElement('img');
        img.src = item.gambar;
        img.alt = "Gambar Ucapan";
        img.style.width = '200px';
        img.style.marginBottom = '10px';
        
        const message = document.createElement('p');
        message.innerText = item.ucapan;
        message.style.color = '#0288D1'; // Warna teks biru
        message.style.fontSize = '20px';
        message.style.fontFamily = 'Arial, sans-serif';

        container.appendChild(img);
        container.appendChild(message);
    });

    const music = document.createElement('audio');
    music.src = musik;
    music.controls = true;

    const whatsappLink = document.createElement('a');
    whatsappLink.href = `https://wa.me/${nomorWhatsapp}`;
    whatsappLink.innerText = 'Hubungi via WhatsApp';
    whatsappLink.style.display = 'block';
    whatsappLink.style.marginTop = '15px';
    whatsappLink.style.color = '#0288D1'; // Warna teks link biru
    whatsappLink.style.textDecoration = 'none';

    container.appendChild(music);
    container.appendChild(whatsappLink);

    document.body.appendChild(container);
}

// Contoh penggunaan fungsi
DekaTutorial(
    [{ gambar: 'gambar.png', ucapan: 'Selamat Datang!' }],
    'musik.mp3',
    '628123456789'
);
