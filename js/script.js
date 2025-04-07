var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'शुभ सायंकाळ !';
} else if (hourNow > 12) {
    greeting = ' शुभ दुपार!';
} else if (hourNow > 0) {
    greeting = 'सुप्रभात !';
} else {
    greeting = 'सुस्वागत !';
}

document.write('<h3>' + greeting + '</h3>');