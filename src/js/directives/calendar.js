'use strict';

(function(){

    angular.module('snApp').directive('calendar', [Calendar]);

    function Calendar(){



        return {
            restrict: "E",
            templateUrl: "tpl/calendar.html",
            scope: {
                selected: "=",
                event:"@"
            },
            link: function(scope) {
                scope.selected = _removeTime(scope.selected || moment());
                scope.month = scope.selected.clone();

                var start = scope.selected.clone();
                start.date(1);
                _removeTime(start.day(0));

                _buildMonth(scope, start, scope.month);

                scope.select = function(day) {
                    scope.selected = day.date;
                };

                scope.next = function() {
                    var next = scope.month.clone();
                    _removeTime(next.month(next.month()+1).date(1));
                scope.month.month(scope.month.month()+1);
                _buildMonth(scope, next, scope.month);
            };

                scope.previous = function() {
                    var previous = scope.month.clone();
                    _removeTime(previous.month(previous.month()-1).date(1));
                    scope.month.month(scope.month.month()-1);
                    _buildMonth(scope, previous, scope.month);
                };
    }
        };
    };
    function _removeTime(date) {
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }

    function _buildMonth(scope, start, month) {
        scope.weeks = [];
        var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
        while (!done) {

            scope.weeks.push({ days: _buildWeek(date.clone(), month,scope.event) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    function _buildWeek(date, month,scope) {
        var days = [];
        var eventParsed=JSON.parse(scope);
        function formatDate(date) {

            var dd = date.getDate();
            if (dd < 10) dd = '0' + dd;

            var mm = date.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;

            var yy = date.getFullYear() ;
            if (yy < 10) yy = '0' + yy;

            return yy + '-' + mm + '-' + dd;
        }
        // console.log(eventParsed);
        function returnEvent(date) {
            var arr=[];
            console.log();
            for (var j=0;j<eventParsed.length;j++){
                // console.log(eventParsed[j].date);
                if(formatDate(date._d)==eventParsed[j].date){
                    arr.push(eventParsed[j])
                }
            }
            return arr
        }
        for (var i = 0; i < 7; i++) {

            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date,
                eventsList:returnEvent(date)
            });
            console.log(days);
            // for (var j=0;j<eventParsed.length;j++){
            //     console.log(days)
            // }
            date = date.clone();
            date.add(1, "d");
        }
        return days;
    }

})();
