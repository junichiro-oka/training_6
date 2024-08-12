$(function() {
    // 最初に表示するアイテムを表示
    $(".time-schedule_contents").slice(0, 3).show();

    // ボタンがクリックされたときに全てのアイテムを表示
    $("#readmore").on("click", function() {
        $(".time-schedule_contents").show();
        $(this).hide(); // ボタンを非表示にする

        $('#gradient').removeClass('gradient');
    });
});