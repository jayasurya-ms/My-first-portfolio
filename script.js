 $(document).ready(function() {
    // Header click interaction
    $('.big').on('click', function() {
        alert('Header clicked!');
    });

    // Hover effect on links
    $('.linker').hover(
        function() {
            $(this).css('color','blue');
            $(this).css('text-decoration','underline');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

    // Toggle visibility example
    $('.subbleft1').on('click', function() {
        $(this).next('.subbleft2').toggle();
    });
});

