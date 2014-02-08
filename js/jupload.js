(function() {
    window.onload = function() {
        $("#image").change(function() {
            //Logic when select an image
            $('#ju-image-name').html('');
            var totalSelected = this.files.length;
            var endMessage = '';
            if (totalSelected === 0) {
                $('#button-submit').addClass('disabled');
                $('#ju-image-name').append('<div>Seleecione una o m&aacute;s im&aacute;genes por favor</div>');
            } else {
                if (totalSelected > 1) {
                    endMessage = 'im&aacute;genes';
                } else {
                    endMessage = 'im&aacute;gen';
                }
                $('#button-submit').removeClass('disabled');
                $('#ju-image-name').append('<div>Has seleccionado ' + totalSelected + ' ' + endMessage + '</div>');
            }
        });

        $("#ju-upload-picture").submit(function(event) {
            if (!$('#button-submit').hasClass('disabled')) {
                var form = new FormData($('#ju-upload-picture')[0]);
                $.ajax({
                    url: 'php/upload.php',
                    type: 'POST',
                    data: form,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function(res) {
                        var data = JSON.parse(res);
                        if (!data.error) {
                            $('#ju-image-name').html('');
                            $('#ju-image-name').append('<div>Seleecione una o m&aacute;s im&aacute;genes por favor</div>');
                            $('#button-submit').addClass('disabled');
                            alert('Se ha completado la carga imágenes correctamente');
                        } else {
                            alert(data.error);
                        }
                    }
                });
            }
            event.preventDefault();
        });
    };
})();


