function getScreenshot() {
    html2canvas(document.getElementById('game')).then(canvas => {
        // crear un enlace para descargar la imagen
        var link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        link.click();
    });
}
