var closeDropdown = function () {
    $('#dropdown').hide();
}

$('#menu').on('mouseover', function () {
    $('#dropdown').show().addClass('active');
});

$('#menu').on('mouseout', function () {
    timeout = setTimeout(closeDropdown, 2000);
});