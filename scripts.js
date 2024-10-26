document.getElementById('printReport').addEventListener('click', function() {
    // Select the element to print
    var elementToPrint = document.querySelector('.container');

    // Use html2canvas to take a screenshot of the element
    html2canvas(elementToPrint).then(function(canvas) {
        // Create a new jsPDF instance
        var pdf = new jsPDF('p', 'mm', 'a4');

        // Convert the canvas to an image
        var imgData = canvas.toDataURL('image/png');

        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0); // Adjust the positioning as necessary

        // Save the PDF
        pdf.save('Charge_Nurse_Report.pdf');
    });
});
