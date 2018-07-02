var closeDropdown = function(){
    $('#dropdown').hide();
}

$('#menu').on('mouseover', function(){ 
    $('#dropdown').show().addClass('active');
    clearTimeout(timeout);
});

$('#menu').on('mouseout', function(){ 
     timeout = setTimeout(closeDropdown, 500);
});