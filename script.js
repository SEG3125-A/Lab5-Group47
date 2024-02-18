// Update the barber photo whenever the barber selection changes
$(document).ready(function() {
    $('#professional').change(function() {
        var selectedImage = $(this).val();
        $('#displayedImage').attr('src', 'images/' + selectedImage + '.png');
    });
});


// Pre-populate the selected barber dropdown based on which barber's "Book Now" button is pressed
$('button.book-now').each((i, obj) => {
    obj.addEventListener("click", (e) => {
        
        // Set selection
        let selectBarber = $('#professional')[0]
        selectBarber.value = obj.id.split("-")[1];

        // Manually fire the dropdown's onChange event so that the picture also updates
        if ("createEvent" in document) {
            let evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            selectBarber.dispatchEvent(evt);
        } else {
            selectBarber.fireEvent("onchange");
        }

    });
});