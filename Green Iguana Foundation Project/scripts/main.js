var closeDropdown = function(){
    $('#dropdown').hide();
}

$('#menu').on('mouseover', function(e){ 
    $('#dropdown').show().addClass('active');
    clearTimeout(timeout);
});

$('#menu').on('mouseout', function(e){ 
     timeout = setTimeout(closeDropdown, 1000);
});