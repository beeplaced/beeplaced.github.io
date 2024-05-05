function downloadPDF() {
    const contentElement = document.querySelector('.resume');
    const { jsPDF } = window.jsPDF
    const pdf = new jsPDF();

    // Generate PDF from content
    pdf.html(contentElement, {
        callback: function (pdf) {
            pdf.save('download.pdf'); // Save PDF as 'download.pdf'
        },
        x: 10,
        y: 10
    });
}