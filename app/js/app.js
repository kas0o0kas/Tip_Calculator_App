var $bill_total = 0;
var $tip_procent = 0;
var $guest_number = 0;
var $tip_eachPerson = 0;
var $total_eachPerson = 0;

//function to calculate tip each person
function calculation_tip (bill, tip, guest) {
    var $tip_amount = 0;
    if(bill != 0 && tip != 0 && guest !=0) {
        $tip_amount = (bill * tip) / 100 / guest;
        $tip_amount = $tip_amount.toFixed(2);
    }
    return $tip_amount;
}

//function to calculate bill each person
function calculation_total (bill, tip, guest) {
    var $total_amount = 0;
    if(bill != 0 && tip != 0 && guest !=0) {
        $total_amount = bill / guest + (bill * tip) / 100 / guest;
        $total_amount = $total_amount.toFixed(2);
    }
    return $total_amount;
}

//event when bill value is changed
$('.bill__input input').click(function(){
    $(this).css('border','1px solid blue');
    $(this).val("");
    $('.bill__notice').html("");

    if($(this).val() == ""){
        $('<span class="bill__notice">  Please insert Bill!</span>').appendTo($('.bill__text'));
        $('.bill__notice').css('left','25%');
    }
    
});
$('.bill__input input').change(function(){
    $('.information__input').css('border','transparent');
    if(isNaN($(this).val()) || $(this).val() < 0 || $(this).val() > 10000000){
        $(this).css('border','1px solid red');
        $('.bill__notice').html("");
        $('<span class="bill__notice">  Invalid! Try Again!</span>').appendTo($('.bill__text'));
        $('.bill__notice').css('left','25%');
    }
    else{
        $('.bill__notice').html("");
        $bill_total = $(this).val();
        //tip-calculation and bill total-calculation for each person
        $tip_eachPerson = calculation_tip($bill_total, $tip_procent, $guest_number);
        $('.tip__amount').html('$' + $tip_eachPerson);

        $total_eachPerson = calculation_total($bill_total, $tip_procent, $guest_number);
        $('.total__amount').html('$' + $total_eachPerson);
    }
});

//event when chosing tip procent
$('.tip__value').hover(function(){
    if(!$(this).hasClass('click')){
        $(this).toggleClass('hover');
    }
});

$('.tip__value').click(function(){
    $('.tip__value').removeClass('click').removeClass('hover');
    $('.tip__custom').val('Custom');
    $(this).addClass('click');
    $tip_procent = parseInt($(this).val());

    //tip calculation and bill total calculation for each person
    $tip_eachPerson = calculation_tip($bill_total, $tip_procent, $guest_number);
    $('.tip__amount').html('$' + $tip_eachPerson);

    $total_eachPerson = calculation_total($bill_total, $tip_procent, $guest_number);
    $('.total__amount').html('$' + $total_eachPerson);
});
    //tip custom 
$('.tip__custom').click(function(){
    $('.tip__value').removeClass('click').removeClass('hover');
    $(this).css('border','1px solid blue');
    $(this).val("");
});
$('.tip__custom').change(function(){
    $(this).css('border','transparent');
    if(isNaN($(this).val()) || $(this).val() < 0 || $(this).val() > 100) {
        $(this).css('border','1px solid red');
        $(this).val('Invalid!');
        $(this).css('color','red');
    }
    else {
        $(this).css('color','hsl(183, 100%, 15%)');
        $tip_procent = $(this).val();

        //tip calculation and bill total calculation for each person
        $tip_eachPerson = calculation_tip($bill_total, $tip_procent, $guest_number);
        $('.tip__amount').html('$' + $tip_eachPerson);

        $total_eachPerson = calculation_total($bill_total, $tip_procent, $guest_number);
        $('.total__amount').html('$' + $total_eachPerson);
    }
});

//event when gast number changing
$('.gast__input input').click(function(){
    $(this).css('border','1px solid blue');
    $(this).val("");
    $('.gast__notice').html("");

    if($(this).val() == ""){
        $('<span class="gast__notice">  Guest number?</span>').appendTo($('.gast__text'));
        $('.gast__notice').css('left','7%');
    }
    
});
$('.gast__input input').change(function(){
    $('.information__input').css('border','transparent');
    if(isNaN($(this).val()) || $(this).val() < 0){
        $(this).css('border','1px solid red');
        $('.gast__notice').html("");
        $('<span class="gast__notice">  Invalid!</span>').appendTo($('.gast__text'));
        $('.gast__notice').css('left','25%');
    }
    else{
        $('.gast__notice').html("");
        $guest_number = $(this).val();

        //tip calculation and bill total calculation for each person
        $tip_eachPerson = calculation_tip($bill_total, $tip_procent, $guest_number);
        $('.tip__amount').html('$' + $tip_eachPerson);

        $total_eachPerson = calculation_total($bill_total, $tip_procent, $guest_number);
        $('.total__amount').html('$' + $total_eachPerson);
    }
});

//event when click reset button 
$('.calculate__resetbutton').click(function(){
    //reload page
    location.reload();
});

