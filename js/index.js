function isResponsive() {
    return $('html').hasClass('responsive');
}

function resize() {
    if ($(window).outerWidth() < 600) {
        $('html').addClass('responsive');
    } else {
        $('html').removeClass('responsive');
    }
}

function highlight(str) {
    $('nav a').removeClass('active');
    $('#links').find('[href="#' + str + '"]').addClass('active');
}

function scroll() {
    const pos = $(window).scrollTop();
    const pos2 = pos + 50;
    const scrollBottom = pos + $(window).height();
    
    if (pos2 > $('#home').offset().top) {
        highlight('home');
    } 
    if (pos2 > $('#about').offset().top) {
        highlight('about');
    }
    if (pos2 > $('#projects').offset().top) {
        highlight('projects');
    }
    if (pos2 > $('#contact').offset().top || pos + $(window).height() === $(document).height()) {
        highlight('contact');
    }
}

function serializeContact() {
    const form = $('#contact-form');
    
    const name = form.find('input[type=text]').val();
    const email = form.find('input[type=email]').val();
    const text = form.find('textarea').val();
    
    return `Name: ${name}\nEmail: ${email}\nMessage: ${text}`;
}

$(window).ready(() => {
    $(window).resize(resize);
    $(window).scroll(scroll);
    
    $('#go-button').click(() => {
        highlight('about');
        
        $('html, body').animate({ scrollTop: $('#about').offset().top }, 400);
    });
    
    $('#menu').click(() => {
        $('#links').toggleClass('responsive');
        $('#menu').toggleClass('fa-bars fa-times');
    });
    
    $('#links a').click(() => {
        if (!$('#links').hasClass('responsive')) {
            return;
        }
        $('#links').removeClass('responsive');
        $('#menu').toggleClass('fa-bars fa-times');
    });
    
    $('.project').click(() => {
        
    });

    $('.project').hover(
        function() {
            $('.project').not(this).addClass('fade')
        },
        () => $('.project').removeClass('fade')
    );
    
    $('#contact-form').submit((e) => {
        e.preventDefault();
        
        $.ajax({
            url: 'https://formspree.io/xqkqlday',
            method: 'POST',
            data: { 
                message: serializeContact
            },
            dataType: 'json'
        }).done((response) => {
            $('#contact-form').find('input[type=text], input[type=email], textarea').val('');
            $('#success').css('display', 'block');
        });
    });
    
    $('#success span').click(() => {
        $('#success').css('display', 'none');
    });
}); 