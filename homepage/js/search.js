/**
 * Created by feng on 2017/8/4.
 */
$(function () {
        //initialize the javascript
        App.init();
        App.dashBoard();

//      introJs().setOption('showBullets', false).start();
        var date = new Date();
        switch (date.getDay()) {
            case 0 :
                day = '星期日';
                $('#DateShow').html('星期日');
                $('#DateShow2').html('星期日');
                break;
            case 1 :
                day = '星期一';
                $('#DateShow').html('星期一');
                $('#DateShow2').html('星期一');
                break;
            case 2 :
                day = '星期二';
                $('#DateShow').html('星期二');
                $('#DateShow2').html('星期二');
                break;
            case 3 :
                day = '星期三';
                $('#DateShow').html('星期三');
                $('#DateShow2').html('星期三');
                break;
            case 4 :
                day = '星期四';
                $('#DateShow').html('星期四');
                $('#DateShow2').html('星期四');
                break;
            case 5 :
                day = '星期五';
                $('#DateShow').html('星期五');
                $('#DateShow2').html('星期五');
                break;
            case 6 :
                day = '星期六';
                $('#DateShow').html('星期六');
                $('#DateShow2').html('星期六');
                break;
        }
        function initTime() {
            //时间范围
            $(".form_datetime").datetimepicker({
                format: "yyyy-mm-dd", // hh:ii:ss
                language: "zh-CN",
                autoclose: true,
                todayBtn: 'linked',
                todayHighlight: true,
                pickerPosition: 'bottom-left',
                minView: 'month'
            });
        };
        $('#DayShow').html(date.getDate());
        $('#DayDayShow').html(date.getFullYear() + ' ' + (date.getMonth() + 1) + ' ' + date.getDate());
        $('#selectTime').change(function() {
            if($(this).val() == "3") {
                $('.time-area').removeClass('hidden');
                initTime();
            } else {
                $('.time-area').addClass('hidden');
            }
        });
});