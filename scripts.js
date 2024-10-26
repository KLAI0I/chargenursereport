function printPage() {
    // Use html2canvas to take a screenshot of the entire page
    html2canvas(document.body).then(function(canvas) {
        // Convert the canvas to a data URL
        var imgData = canvas.toDataURL('image/png');

        // Create a new jsPDF instance
        var pdf = new jsPDF('p', 'mm', 'a4');

        // Get the image dimensions
        var imgWidth = 210; // A4 width in mm
        var pageHeight = pdf.internal.pageSize.height;
        var imgHeight = (canvas.height * imgWidth) / canvas.width;
        var heightLeft = imgHeight;

        // Calculate the number of pages needed
        var position = 0;

        // Add the image to the PDF and handle multiple pages if necessary
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        // Save the PDF
        pdf.save('report.pdf');
    });
}

// Event listener for the print button
document.getElementById('printButton').addEventListener('click', printPage);
