var assert =
{
    strictEquals: function(
        lhs,
        rhs
        )
    {
        it(
            lhs + ' === ' + rhs,
            function()
            {
                expect(eval(lhs)).toBe(eval(rhs));
            });
    }
};

describe(
    'padStart',
    function()
    {
        assert.strictEquals("typeof String.prototype.padStart", "'function'");
        assert.strictEquals("''.padStart(2, '0')", "'00'");
        assert.strictEquals("'1'.padStart(2, '0')", "'01'");
        assert.strictEquals("'12'.padStart(2, '0')", "'12'");
        assert.strictEquals("'123'.padStart(2, '0')", "'123'");
    });

describe(
    'Date',
    function()
    {
        var calendar = Date.calendar;

        var testYears1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
            1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009
        ];
        var testYears2 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
            990, 991, 992, 993, 994, 995, 996, 997, 998, 999,
            9990, 9991, 9992, 9993, 9994, 9995, 9996, 9997, 9998, 9999
        ];
        var testYears = testYears2;

        assert.strictEquals("typeof Date.calendar", "'object'");
        assert.strictEquals("typeof dateFieldSymbols", "'object'");

        describe(
            'Date.prototype.formatDate(dateFormatPattern)',
            function()
            {
                assert.strictEquals("typeof Date.prototype.formatDate", "'function'");

                describe(
                    'Symbol: y',
                    function()
                    {
                        testYears.forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "new Date(new Date(0).setFullYear(" + year.toString() + ")).formatDate('y')",
                                    "'" + year.toString() + "'");
                            });
                    });

                describe(
                    'Symbol: yy',
                    function()
                    {
                        for(var year = 2000;year <= 2010;++year)
                            assert.strictEquals(
                                "new Date(new Date(0).setFullYear(" + year.toString() + ")).formatDate('yy')",
                                "'" + (year % 100).toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: yyyy',
                    function()
                    {
                        testYears.forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "new Date(new Date(0).setFullYear(" + year.toString() + ")).formatDate('yyyy')",
                                    "'" + year.toString().padStart(4, '0') + "'");
                            });
                    });

                describe(
                    'Symbol: M',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(2000, " + (month - 1).toString() + ").formatDate('M')",
                                "'" + month.toString() + "'");
                    });

                describe(
                    'Symbol: MM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(2000, " + (month - 1).toString() + ").formatDate('MM')",
                                "'" + month.toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: MMM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(2000, " + (month - 1).toString() + ").formatDate('MMM')",
                                "'" + calendar.months.format.abbreviated[month] + "'");
                    });

                describe(
                    'Symbol: MMMM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(2000, " + (month - 1).toString() + ").formatDate('MMMM')",
                                "'" + calendar.months.format.wide[month] + "'");
                    });

                describe(
                    'Symbol: MMMMM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(2000, " + (month - 1).toString() + ").formatDate('MMMMM')",
                                "'" + calendar.months.format.narrow[month] + "'");
                    });

                describe(
                    'Symbol: L',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(2000, " + (month - 1).toString() + ").formatDate('L')",
                                "'" + month.toString() + "'");
                    });

                describe(
                    'Symbol: LL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(2000, " + (month - 1).toString() + ").formatDate('LL')",
                                "'" + month.toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: LLL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(2000, " + (month - 1).toString() + ").formatDate('LLL')",
                                "'" + calendar.months['stand-alone'].abbreviated[month] + "'");
                    });

                describe(
                    'Symbol: LLLL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(2000, " + (month - 1).toString() + ").formatDate('LLLL')",
                                "'" + calendar.months['stand-alone'].wide[month] + "'");
                    });

                describe(
                    'Symbol: LLLLL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(2000, " + (month - 1).toString() + ").formatDate('LLLLL')",
                                "'" + calendar.months['stand-alone'].narrow[month] + "'");
                    });

                describe(
                    'Symbol: d',
                    function()
                    {
                        for(var day = 1;day <= 31;++day)
                            assert.strictEquals(
                                "new Date(2000, 0, " + day.toString() + ").formatDate('d')",
                                "'" + day.toString() + "'");
                    });

                describe(
                    'Symbol: dd',
                    function()
                    {
                        for(var day = 1;day <= 31;++day)
                            assert.strictEquals(
                                "new Date(2000, 0, " + day.toString() + ").formatDate('dd')",
                                "'" + day.toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: H',
                    function()
                    {
                        for(var hour = 0;hour < 24;++hour)
                            assert.strictEquals(
                                "new Date(2000, 0, 1, " + hour.toString() + ").formatDate('H')",
                                "'" + hour.toString() + "'");
                    });

                describe(
                    'Symbol: HH',
                    function()
                    {
                        for(var hour = 0;hour < 24;++hour)
                            assert.strictEquals(
                                "new Date(2000, 0, 1, " + hour.toString() + ").formatDate('HH')",
                                "'" + hour.toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: m',
                    function()
                    {
                        for(var minute = 0;minute < 60;++minute)
                            assert.strictEquals(
                                "new Date(2000, 0, 1, 0, " + minute.toString() + ").formatDate('m')",
                                "'" + minute.toString() + "'");
                    });

                describe(
                    'Symbol: mm',
                    function()
                    {
                        for(var minute = 0;minute < 60;++minute)
                            assert.strictEquals(
                                "new Date(2000, 0, 1, 0, " + minute.toString() + ").formatDate('mm')",
                                "'" + minute.toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: s',
                    function()
                    {
                        for(var second = 0;second < 60;++second)
                            assert.strictEquals(
                                "new Date(2000, 0, 1, 0, 0, " + second.toString() + ").formatDate('s')",
                                "'" + second.toString() + "'");
                    });

                describe(
                    'Symbol: ss',
                    function()
                    {
                        for(var second = 0;second < 60;++second)
                            assert.strictEquals(
                                "new Date(2000, 0, 1, 0, 0, " + second.toString() + ").formatDate('ss')",
                                "'" + second.toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: SSS',
                    function()
                    {
                        [0, 9, 99, 999].forEach(
                            function(
                                millisecond
                                )
                            {
                                assert.strictEquals(
                                    "new Date(2000, 0, 1, 0, 0, 0, " + millisecond.toString() + ").formatDate('s.SSS')",
                                    "'0." + millisecond.toString().padStart(3, '0') + "'");
                            });
                    });

                describe(
                    "Symbol: EEE",
                    function()
                    {
                        for(var day = 1;day <= 7;++day)
                        {
                            var date = new Date(2000, 0, day);
                            assert.strictEquals(
                                "new Date(2000, 0, " + day.toString() + ").formatDate('EEE')",
                                "'" + Date.calendar.days.format.abbreviated[Date.dayKeys[date.getDay()]] + "'");
                        }
                    });

                describe(
                    "Symbol: EEEE",
                    function()
                    {
                        for(var day = 1;day <= 7;++day)
                        {
                            var date = new Date(2000, 0, day);
                            assert.strictEquals(
                                "new Date(2000, 0, " + day.toString() + ").formatDate('EEEE')",
                                "'" + Date.calendar.days.format.wide[Date.dayKeys[date.getDay()]] + "'");
                        }
                    });

                describe(
                    "Symbol: EEEEE",
                    function()
                    {
                        for(var day = 1;day <= 7;++day)
                        {
                            var date = new Date(2000, 0, day);
                            assert.strictEquals(
                                "new Date(2000, 0, " + day.toString() + ").formatDate('EEEEE')",
                                "'" + Date.calendar.days.format.narrow[Date.dayKeys[date.getDay()]] + "'");
                        }
                    });

                describe(
                    "Symbol: EEEEEE",
                    function()
                    {
                        for(var day = 1;day <= 7;++day)
                        {
                            var date = new Date(2000, 0, day);
                            assert.strictEquals(
                                "new Date(2000, 0, " + day.toString() + ").formatDate('EEEEEE')",
                                "'" + Date.calendar.days.format.short[Date.dayKeys[date.getDay()]] + "'");
                        }
                    });

                describe(
                    'Symbol: xx',
                    function()
                    {
                        assert.strictEquals("dateFieldSymbols.xx.format( 61)", "'+0101'");
                        assert.strictEquals("dateFieldSymbols.xx.format(-61)", "'-0101'");
                        assert.strictEquals("dateFieldSymbols.xx.format( 61, ':')", "'+01:01'");
                        assert.strictEquals("dateFieldSymbols.xx.format(-61, ':')", "'-01:01'");

                        ["new Date(2000, 0)", "new Date(2000, 6)"].forEach(
                            function(
                                date
                                )
                            {
                                var offset = -eval(date).getTimezoneOffset();
                                assert.strictEquals(
                                    date + ".formatDate('xx')",
                                    "'" +(offset >= 0 ? '+' : '-') +
                                    (Math.abs(offset) / 60).toString().padStart(2, '0') +
                                    (offset % 60).toString().padStart(2, '0') + "'");
                            });
                    });

                describe(
                    'Symbol: xxx',
                    function()
                    {
                        ["new Date(2000, 0)", "new Date(2000, 6)"].forEach(
                            function(
                                date
                                )
                            {
                                var offset = -eval(date).getTimezoneOffset();
                                assert.strictEquals(
                                    date + ".formatDate('xxx')",
                                    "'" + (offset >= 0 ? '+' : '-') +
                                    (Math.abs(offset) / 60).toString().padStart(2, '0') +
                                    ':' +
                                    (offset % 60).toString().padStart(2, '0') + "'");
                            });
                    });

                describe(
                    'Symbol: XX',
                    function()
                    {
                        ["new Date(2000, 0)", "new Date(2000, 6)"].forEach(
                            function(
                                date
                                )
                            {
                                var offset = -eval(date).getTimezoneOffset();
                                assert.strictEquals(
                                   date + ".formatDate('XX')",
                                     offset === 0 ? "'Z'" : "'" + (offset >= 0 ? '+' : '-') +
                                    (Math.abs(offset) / 60).toString().padStart(2, '0') +
                                    (offset % 60).toString().padStart(2, '0') + "'");
                            });
                    });

                describe(
                    'Symbol: XXX',
                    function()
                    {
                        ["new Date(2000, 0)", "new Date(2000, 6)"].forEach(
                            function(
                                date
                                )
                            {
                                var offset = -eval(date).getTimezoneOffset();
                                assert.strictEquals(
                                   date + ".formatDate('XXX')",
                                     offset === 0 ? "'Z'" : "'" + (offset >= 0 ? '+' : '-') +
                                    (Math.abs(offset) / 60).toString().padStart(2, '0') +
                                    ':' +
                                    (offset % 60).toString().padStart(2, '0') + "'");
                            });
                    });

                describe(
                    "Symbol: '",
                    function()
                    {
                        assert.strictEquals(
                            "new Date(2000, 0, 1).formatDate(\"'A'yyyy\")",
                            "'A2000'");

                        assert.strictEquals(
                            "new Date(2000, 0, 1).formatDate(\"'yyyy'yyyy\")",
                            "'yyyy2000'");
                    });

                describe(
                    "Symbol: ''",
                    function()
                    {
                        assert.strictEquals(
                            "new Date(2000, 0, 1).formatDate(\"''yyyy\")",
                            "\"'2000\"");

                        assert.strictEquals(
                            "new Date(2000, 0, 1).formatDate(\"'''AB'yyyy\")",
                            "\"'AB2000\"");

                        assert.strictEquals(
                            "new Date(2000, 0, 1).formatDate(\"'''''AB'yyyy\")",
                            "\"''AB2000\"");

                        assert.strictEquals(
                            "new Date(2000, 0, 1).formatDate(\"'A''B'yyyy\")",
                            "\"A'B2000\"");

                        assert.strictEquals(
                            "new Date(2000, 0, 1).formatDate(\"'AB'''yyyy\")",
                            "\"AB'2000\"");
                    });
            });

        describe(
            'Date.prototype.formatUTCDate(dateFormatPattern)',
            function()
            {
                assert.strictEquals("typeof Date.prototype.formatUTCDate", "'function'");

                describe(
                    'Symbol: y',
                    function()
                    {
                        testYears.forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "new Date(new Date(0).setUTCFullYear(" + year.toString() + ")).formatUTCDate('y')",
                                    "'" + year.toString() + "'");
                            });
                    });

                describe(
                    'Symbol: yy',
                    function()
                    {
                        for(var year = 2000;year <= 2010;++year)
                            assert.strictEquals(
                                "new Date(new Date(0).setUTCFullYear(" + year.toString() + ")).formatUTCDate('yy')",
                                "'" + (year % 100).toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: yyyy',
                    function()
                    {
                        testYears.forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "new Date(new Date(0).setUTCFullYear(" + year.toString() + ")).formatUTCDate('yyyy')",
                                    "'" + year.toString().padStart(4, '0') + "'");
                            });
                    });

                describe(
                    'Symbol: M',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, " + (month - 1).toString() + ")).formatUTCDate('M')",
                                "'" + month.toString() + "'");
                    });

                describe(
                    'Symbol: MM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, " + (month - 1).toString() + ")).formatUTCDate('MM')",
                                "'" + month.toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: MMM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, " + (month - 1).toString() + ")).formatUTCDate('MMM')",
                                "'" + calendar.months.format.abbreviated[month] + "'");
                    });

                describe(
                    'Symbol: MMMM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, " + (month - 1).toString() + ")).formatUTCDate('MMMM')",
                                "'" + calendar.months.format.wide[month] + "'");
                    });

                describe(
                    'Symbol: MMMMM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, " + (month - 1).toString() + ")).formatUTCDate('MMMMM')",
                                "'" + calendar.months.format.narrow[month] + "'");
                    });

                describe(
                    'Symbol: L',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, " + (month - 1).toString() + ")).formatUTCDate('L')",
                                "'" + month.toString() + "'");
                    });

                describe(
                    'Symbol: LL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, " + (month - 1).toString() + ")).formatUTCDate('LL')",
                                "'" + month.toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: LLL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, " + (month - 1).toString() + ")).formatUTCDate('LLL')",
                                "'" + calendar.months['stand-alone'].abbreviated[month] + "'");
                    });

                describe(
                    'Symbol: LLLL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, " + (month - 1).toString() + ")).formatUTCDate('LLLL')",
                                "'" + calendar.months['stand-alone'].wide[month] + "'");
                    });

                describe(
                    'Symbol: LLLLL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, " + (month - 1).toString() + ")).formatUTCDate('LLLLL')",
                                "'" + calendar.months['stand-alone'].narrow[month] + "'");
                    });

                describe(
                    'Symbol: d',
                    function()
                    {
                        for(var day = 1;day <= 31;++day)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, 0, " + day.toString() + ")).formatUTCDate('d')",
                                "'" + day.toString() + "'");
                    });

                describe(
                    'Symbol: dd',
                    function()
                    {
                        for(var day = 1;day <= 31;++day)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, 0, " + day.toString() + ")).formatUTCDate('dd')",
                                "'" + day.toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: H',
                    function()
                    {
                        for(var hour = 0;hour < 24;++hour)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, 6, 1, " + hour.toString() + ")).formatUTCDate('H')",
                                "'" + hour.toString() + "'");
                    });

                describe(
                    'Symbol: HH',
                    function()
                    {
                        for(var hour = 0;hour < 24;++hour)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, 6, 1, " + hour.toString() + ")).formatUTCDate('HH')",
                                "'" + hour.toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: m',
                    function()
                    {
                        for(var minute = 0;minute < 60;++minute)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, 0, 1, 0, " + minute.toString() + ")).formatUTCDate('m')",
                                "'" + minute.toString() + "'");
                    });

                describe(
                    'Symbol: mm',
                    function()
                    {
                        for(var minute = 0;minute < 60;++minute)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, 0, 1, 0, " + minute.toString() + ")).formatUTCDate('mm')",
                                "'" + minute.toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: s',
                    function()
                    {
                        for(var second = 0;second < 60;++second)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, 0, 1, 0, 0, " + second.toString() + ")).formatUTCDate('s')",
                                "'" + second.toString() + "'");
                    });

                describe(
                    'Symbol: ss',
                    function()
                    {
                        for(var second = 0;second < 60;++second)
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, 0, 1, 0, 0, " + second.toString() + ")).formatUTCDate('ss')",
                                "'" + second.toString().padStart(2, '0') + "'");
                    });

                describe(
                    'Symbol: SSS',
                    function()
                    {
                        [0, 9, 99, 999].forEach(
                            function(
                                millisecond
                                )
                            {
                                assert.strictEquals(
                                    "new Date(Date.UTC(2000, 0, 1, 0, 0, 0, " + millisecond.toString() + ")).formatUTCDate('s.SSS')",
                                    "'0." + millisecond.toString().padStart(3, '0') + "'");
                            });
                    });

                describe(
                    "Symbol: EEE",
                    function()
                    {
                        for(var day = 1;day <= 7;++day)
                        {
                            var date = new Date(2000, 0, day);
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, 0, " + day.toString() + ")).formatUTCDate('EEE')",
                                "'" + Date.calendar.days.format.abbreviated[Date.dayKeys[date.getDay()]] + "'");
                        }
                    });

                describe(
                    "Symbol: EEEE",
                    function()
                    {
                        for(var day = 1;day <= 7;++day)
                        {
                            var date = new Date(2000, 0, day);
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, 0, " + day.toString() + ")).formatUTCDate('EEEE')",
                                "'" + Date.calendar.days.format.wide[Date.dayKeys[date.getDay()]] + "'");
                        }
                    });

                describe(
                    "Symbol: EEEEE",
                    function()
                    {
                        for(var day = 1;day <= 7;++day)
                        {
                            var date = new Date(2000, 0, day);
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, 0, " + day.toString() + ")).formatUTCDate('EEEEE')",
                                "'" + Date.calendar.days.format.narrow[Date.dayKeys[date.getDay()]] + "'");
                        }
                    });

                describe(
                    "Symbol: EEEEEE",
                    function()
                    {
                        for(var day = 1;day <= 7;++day)
                        {
                            var date = new Date(2000, 0, day);
                            assert.strictEquals(
                                "new Date(Date.UTC(2000, 0, " + day.toString() + ")).formatUTCDate('EEEEEE')",
                                "'" + Date.calendar.days.format.short[Date.dayKeys[date.getDay()]] + "'");
                        }
                    });

                describe(
                    'Symbol: xx',
                    function()
                    {
                        ["new Date(2000, 0)", "new Date(2000, 6)"].forEach(
                            function(
                                date
                                )
                            {
                                assert.strictEquals(date + ".formatUTCDate('xx')", "'+0000'");
                            });
                    });

                describe(
                    'Symbol: xxx',
                    function()
                    {
                        ["new Date(2000, 0)", "new Date(2000, 6)"].forEach(
                            function(
                                date
                                )
                            {
                                assert.strictEquals(date + ".formatUTCDate('xxx')", "'+00:00'");
                            });
                    });

                describe(
                    'Symbol: XX',
                    function()
                    {
                        ["new Date(2000, 0)", "new Date(2000, 6)"].forEach(
                            function(
                                date
                                )
                            {
                                assert.strictEquals(date + ".formatUTCDate('XX')", "'Z'");
                            });
                    });

                describe(
                    'Symbol: XXX',
                    function()
                    {
                        ["new Date(2000, 0)", "new Date(2000, 6)"].forEach(
                            function(
                                date
                                )
                            {
                                assert.strictEquals(date + ".formatUTCDate('XXX')", "'Z'");
                            });
                    });
            });

        describe(
            'parseDate(value, dateFormatPattern)',
            function()
            {
                assert.strictEquals("typeof parseDate", "'function'");

                describe(
                    'Symbol: y',
                    function()
                    {
                        testYears.forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('y', '" + year.toString() + "').valueOf()",
                                    "new Date(0).setFullYear(" + year.toString() + ")");
                            });

                        [ '', 'a', 'b', 'c', 'a1', '1a', (Date.maxYear + 1).toString()].forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('y', '" + year + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: yy',
                    function()
                    {
                        for(var year = 1;year <= 10;++year)
                            assert.strictEquals(
                                "parseDate('yy', '" + year.toString().padStart(2, '0') + "').valueOf()",
                                "new Date(0).setFullYear(" + (2000 + year).toString() + ")");

                        ['', 'a', 'b', 'c', 'a10', '10a'].forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('yy', '" + year + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: yyyy',
                    function()
                    {
                        testYears.forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('yyyy', '" + year.toString().padStart(4, '0') + "').valueOf()",
                                    "new Date(0).setFullYear(" + year.toString() + ")");
                            });


                        ['', 'a', 'b', 'c', 'a1000', '1000a', (Date.maxYear + 1).toString()].forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('yyyy', '" + year + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: M',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-M', '2000-" + month.toString() + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        ['', 'a', 'b', 'c', 'a1', '1a', '0', '13'].forEach(
                            function(
                                month
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('M', '" + month + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: MM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-MM', '2000-" + month.toString().padStart(2, '0') + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        ['', 'a', 'b', 'c', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a01', '01a', '0', '13'].forEach(
                            function(
                                month
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('MM', '" + month + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: MMM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-MMM', '2000-" + calendar.months.format.abbreviated[month] + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-MMM', '2000-" + calendar.months.format.abbreviated[month].toLowerCase() + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-MMM', '2000-" + calendar.months.format.abbreviated[month].toUpperCase() + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        ['Ja', 'Jaa', 'Jana'].forEach(
                            function(
                                invalidMonth
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('y-MMM', '2000-" + invalidMonth + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: MMMM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-MMMM', '2000-" + calendar.months.format.wide[month] + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-MMMM', '2000-" + calendar.months.format.wide[month].toLowerCase() + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-MMMM', '2000-" + calendar.months.format.wide[month].toUpperCase() + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        ['Januar', 'Januara', 'Januarya'].forEach(
                            function(
                                invalidMonth
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('y-MMMM', '2000-" + invalidMonth + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: L',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-L', '2000-" + month.toString() + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        ['', 'a', 'b', 'c', 'a1', '1a', '0', '13'].forEach(
                            function(
                                month
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('L', '" + month + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: LL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-LL', '2000-" + month.toString().padStart(2, '0') + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        ['', 'a', 'b', 'c', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a01', '01a', '0', '13'].forEach(
                            function(
                                month
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('LL', '" + month + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: LLL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-LLL', '2000-" + calendar.months['stand-alone'].abbreviated[month] + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-LLL', '2000-" + calendar.months['stand-alone'].abbreviated[month].toLowerCase() + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-LLL', '2000-" + calendar.months['stand-alone'].abbreviated[month].toUpperCase() + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        ['Ja', 'Jaa', 'Jana'].forEach(
                            function(
                                invalidMonth
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('y-LLL', '2000-" + invalidMonth + "')",
                                    "null");
                            });
                    });


                describe(
                    'Symbol: LLLL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-LLLL', '2000-" + calendar.months['stand-alone'].wide[month] + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-LLLL', '2000-" + calendar.months['stand-alone'].wide[month].toLowerCase() + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-LLLL', '2000-" + calendar.months['stand-alone'].wide[month].toUpperCase() + "').valueOf()",
                                "new Date(2000, " + (month - 1).toString() + ").valueOf()");

                        ['Januar', 'Januara', 'Januarya'].forEach(
                            function(
                                invalidMonth
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('y-LLLL', '2000-" + invalidMonth + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: d',
                    function()
                    {
                        for(var day = 1;day <= 31;++day)
                            assert.strictEquals(
                                "parseDate('y-M-d', '2000-1-" + day.toString() + "').valueOf()",
                                "new Date(2000, 0, " + day.toString() + ").valueOf()");

                        ['', 'a', 'b', 'c', 'a1', '1a'].forEach(
                            function(
                                month
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('d', '" + month + "')",
                                    "null");
                            });

                        var daysInMonth =
                            [
                                31,//January
                                28,//February
                                31,//March
                                30,//April
                                31,//May
                                30,//June
                                31,//July
                                31,//August
                                30,//September
                                31,//October
                                30,//November
                                31 //December
                            ];

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-M-d', '2001-" + (month - 1).toString() + "-0')",
                                "null");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-M-d', '2001-" + month.toString() + "-" + daysInMonth[month - 1].toString() + "').valueOf()",
                                "new Date(2001, " + (month - 1).toString() + ", " + daysInMonth[month - 1].toString() + ").valueOf()");

                        assert.strictEquals(
                            "parseDate('y-M-d', '2004-2-29').valueOf()",
                            "new Date(2004, 1, 29).valueOf()");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-M-d', '2001-" + month.toString() + "-" + (daysInMonth[month - 1] + 1).toString() + "')",
                                "null");
                    });

                describe(
                    'Symbol: dd',
                    function()
                    {
                        for(var day = 1;day <= 31;++day)
                            assert.strictEquals(
                                "parseDate('y-M-dd', '2000-1-" + day.toString().padStart(2, '0') + "').valueOf()",
                                "new Date(2000, 0, " + day.toString() + ").valueOf()");

                        ['', 'a', 'b', 'c', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a01', '01a'].forEach(
                            function(
                                month
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('dd', '" + month + "')",
                                    "null");
                            });

                        var daysInMonth =
                            [
                                31,//January
                                28,//February
                                31,//March
                                30,//April
                                31,//May
                                30,//June
                                31,//July
                                31,//August
                                30,//September
                                31,//October
                                30,//November
                                31 //December
                            ];

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-M-dd', '2001-" + (month - 1).toString() + "-00')",
                                "null");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-M-dd', '2001-" + month.toString() + "-" + daysInMonth[month - 1].toString().padStart(2, '0') + "').valueOf()",
                                "new Date(2001, " + (month - 1).toString() + ", " + daysInMonth[month - 1].toString() + ").valueOf()");

                        assert.strictEquals(
                            "parseDate('y-M-dd', '2004-2-29').valueOf()",
                            "new Date(2004, 1, 29).valueOf()");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseDate('y-M-dd', '2001-" + month.toString() + "-" + (daysInMonth[month - 1] + 1).toString() + "')",
                                "null");
                    });

                describe(
                    'Symbol: H',
                    function()
                    {
                        for(var hour = 0;hour < 24;++hour)
                            assert.strictEquals(
                                "parseDate('y-M-d H', '2000-1-1 " + hour.toString() + "').valueOf()",
                                "new Date(2000, 0, 1, " + hour.toString() + ").valueOf()");

                        ['', 'a', 'b', 'c', 'a0', '0a', '24'].forEach(
                            function(
                                hour
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('H', '" + hour + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: HH',
                    function()
                    {
                        for(var hour = 0;hour < 24;++hour)
                            assert.strictEquals(
                                "parseDate('y-M-d HH', '2000-1-1 " + hour.toString().padStart(2, '0') + "').valueOf()",
                                "new Date(2000, 0, 1, " + hour.toString() + ").valueOf()");

                        ['', 'a', 'b', 'c', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a01', '01a', '24'].forEach(
                            function(
                                hour
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('HH', '" + hour + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: m',
                    function()
                    {
                        for(var minute = 0;minute < 60;++minute)
                            assert.strictEquals(
                                "parseDate('y-M-d H:m', '2000-1-1 0:" + minute.toString() + "').valueOf()",
                                "new Date(2000, 0, 1, 0, " + minute.toString() + ").valueOf()");

                        ['', 'a', 'b', 'c', 'a0', '0a', '60'].forEach(
                            function(
                                minute
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('m', '" + minute + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: mm',
                    function()
                    {
                        for(var minute = 0;minute < 60;++minute)
                            assert.strictEquals(
                                "parseDate('y-M-d H:mm', '2000-1-1 0:" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "new Date(2000, 0, 1, 0, " + minute.toString() + ").valueOf()");

                        ['', 'a', 'b', 'c', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a00', '00a', '60'].forEach(
                            function(
                                minute
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('mm', '" + minute + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: s',
                    function()
                    {
                        for(var second = 0;second < 60;++second)
                            assert.strictEquals(
                                "parseDate('y-M-d H:m:s', '2000-1-1 0:0:" + second.toString() + "').valueOf()",
                                "new Date(2000, 0, 1, 0, 0, " + second.toString() + ").valueOf()");

                        ['', 'a', 'b', 'c', 'a0', '0a', '60'].forEach(
                            function(
                                second
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('s', '" + second + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: ss',
                    function()
                    {
                        for(var second = 0;second < 60;++second)
                            assert.strictEquals(
                                "parseDate('y-M-d H:m:ss', '2000-1-1 0:0:" + second.toString().padStart(2, '0') + "').valueOf()",
                                "new Date(2000, 0, 1, 0, 0, " + second.toString() + ").valueOf()");

                        ['', 'a', 'b', 'c', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a00', '00a', '60'].forEach(
                            function(
                                second
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('ss', '" + second + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: SSS',
                    function()
                    {
                        [0, 9, 99, 999].forEach(
                            function(
                                millisecond
                                )
                            {
                                assert.strictEquals(
                                    "parseDate('y-M-d H:m:s.SSS', '2000-1-1 0:0:0." + millisecond.toString().padStart(3, '0') + "').valueOf()",
                                    "new Date(2000, 0, 1, 0, 0, 0, " + millisecond.toString() + ").valueOf()");
                            });
                    });

                describe(
                    'Symbol: xx',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                        {
                            for(var minute = 0;minute < 60;++minute)
                                assert.strictEquals(
                                    "parseDate('y-Mxx', '2000-" + month.toString() + "+00" + minute.toString().padStart(2, '0') + "').valueOf()",
                                    "Date.UTC(2000, " + (month - 1).toString() + ") - " + minute.toString() + " * 60 * 1000");

                            for(var minute = 0;minute < 60;++minute)
                                assert.strictEquals(
                                    "parseDate('y-Mxx', '2000-" + month.toString() + "-00" + minute.toString().padStart(2, '0') + "').valueOf()",
                                    "Date.UTC(2000, " + (month - 1).toString() + ") + " + minute.toString() + " * 60 * 1000");

                            for(var hour = 0;hour <= 12;++hour)
                                assert.strictEquals(
                                    "parseDate('y-Mxx', '2000-" + month.toString() + "+" + hour.toString().padStart(2, '0') + "00').valueOf()",
                                    "Date.UTC(2000, " + (month - 1).toString() + ") - " + hour.toString() + " * 60 * 60 * 1000");

                            for(var hour = 0;hour <= 12;++hour)
                                assert.strictEquals(
                                    "parseDate('y-Mxx', '2000-" + month.toString() + "-" + hour.toString().padStart(2, '0') + "00').valueOf()",
                                    "Date.UTC(2000, " + (month - 1).toString() + ") + " + hour.toString() + " * 60 * 60 * 1000");
                        }
                    });

                describe(
                    'Symbol: xxx',
                    function()
                    {
                        for(var minute = 0;minute < 60;++minute)
                            assert.strictEquals(
                                "parseDate('y-Mxxx', '2000-7+00:" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 6) - " + minute.toString() + " * 60 * 1000");

                        for(var minute = 0;minute < 60;++minute)
                            assert.strictEquals(
                                "parseDate('y-Mxxx', '2000-7-00:" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 6) + " + minute.toString() + " * 60 * 1000");

                        for(var hour = 0;hour <= 12;++hour)
                            assert.strictEquals(
                                "parseDate('y-Mxxx', '2000-7+" + hour.toString().padStart(2, '0') + ":00').valueOf()",
                                "Date.UTC(2000, 6) - " + hour.toString() + " * 60 * 60 * 1000");

                        for(var hour = 0;hour <= 12;++hour)
                            assert.strictEquals(
                                "parseDate('y-Mxxx', '2000-7-" + hour.toString().padStart(2, '0') + ":00').valueOf()",
                                "Date.UTC(2000, 6) + " + hour.toString() + " * 60 * 60 * 1000");
                    });

                describe(
                    'Symbol: XX',
                    function()
                    {
                        assert.strictEquals(
                            "parseDate('y-MXX', '2000-7Z').valueOf()",
                            "Date.UTC(2000, 6)");

                        for(var minute = 1;minute < 60;++minute)
                            assert.strictEquals(
                                "parseDate('y-MXX', '2000-7+00" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 6) - " + minute.toString() + " * 60 * 1000");

                        for(var minute = 1;minute < 60;++minute)
                            assert.strictEquals(
                                "parseDate('y-MXX', '2000-7-00" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 6) + " + minute.toString() + " * 60 * 1000");

                        for(var hour = 1;hour <= 12;++hour)
                            assert.strictEquals(
                                "parseDate('y-MXX', '2000-7+" + hour.toString().padStart(2, '0') + "00').valueOf()",
                                "Date.UTC(2000, 6) - " + hour.toString() + " * 60 * 60 * 1000");

                        for(var hour = 1;hour <= 12;++hour)
                            assert.strictEquals(
                                "parseDate('y-MXX', '2000-7-" + hour.toString().padStart(2, '0') + "00').valueOf()",
                                "Date.UTC(2000, 6) + " + hour.toString() + " * 60 * 60 * 1000");
                    });

                describe(
                    'Symbol: XXX',
                    function()
                    {
                        assert.strictEquals(
                            "parseDate('y-MXXX', '2000-7Z').valueOf()",
                            "Date.UTC(2000, 6)");

                        for(var minute = 1;minute < 60;++minute)
                            assert.strictEquals(
                                "parseDate('y-MXXX', '2000-7+00:" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 6) - " + minute.toString() + " * 60 * 1000");

                        for(var minute = 1;minute < 60;++minute)
                            assert.strictEquals(
                                "parseDate('y-MXXX', '2000-7-00:" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 6) + " + minute.toString() + " * 60 * 1000");

                        for(var hour = 1;hour <= 12;++hour)
                            assert.strictEquals(
                                "parseDate('y-MXXX', '2000-7+" + hour.toString().padStart(2, '0') + ":00').valueOf()",
                                "Date.UTC(2000, 6) - " + hour.toString() + " * 60 * 60 * 1000");

                        for(var hour = 1;hour <= 12;++hour)
                            assert.strictEquals(
                                "parseDate('y-MXXX', '2000-7-" + hour.toString().padStart(2, '0') + ":00').valueOf()",
                                "Date.UTC(2000, 6) + " + hour.toString() + " * 60 * 60 * 1000");
                    });

                describe(
                    "Symbol: '",
                    function()
                    {
                        assert.strictEquals(
                            "parseDate(\"'A'yyyy\", \"A2000\").valueOf()",
                            "new Date(2000, 0, 1).valueOf()");

                        assert.strictEquals(
                            "parseDate(\"'yyyy'yyyy\", \"yyyy2000\").valueOf()",
                            "new Date(2000, 0, 1).valueOf()");

                    });

                describe(
                    "Symbol: ''",
                    function()
                    {
                        assert.strictEquals(
                            "parseDate(\"''yyyy\", \"'2000\").valueOf()",
                            "new Date(2000, 0, 1).valueOf()");

                        assert.strictEquals(
                            "parseDate(\"'''AB'yyyy\", \"'AB2000\").valueOf()",
                            "new Date(2000, 0, 1).valueOf()");

                        assert.strictEquals(
                            "parseDate(\"'''''AB'yyyy\", \"''AB2000\").valueOf()",
                            "new Date(2000, 0, 1).valueOf()");

                        assert.strictEquals(
                            "parseDate(\"'A''B'yyyy\", \"A'B2000\").valueOf()",
                            "new Date(2000, 0, 1).valueOf()");

                        assert.strictEquals(
                            "parseDate(\"'AB'''yyyy\", \"AB'2000\").valueOf()",
                            "new Date(2000, 0, 1).valueOf()");
                    });

                describe(
                    'Partial Application',
                    function()
                    {
                        assert.strictEquals(
                            "parseDate('y-M-d')('2000-1-1').valueOf()",
                            "new Date(2000, 0, 1).valueOf()");
                    });

                describe(
                    "Regular Expression Characters",
                    function()
                    {
                        assert.strictEquals(
                            "parseDate('\\\\Dy-M', 'A2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseDate('\\\\Dy-M', '\\\\D2000-1').valueOf()",
                            "new Date(2000, 0).valueOf()");
                        assert.strictEquals(
                            "parseDate('.y-M', 'A2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseDate('.y-M', '.2000-1').valueOf()",
                            "new Date(2000, 0).valueOf()");
                        assert.strictEquals(
                            "parseDate('A*y-M', '2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseDate('A*y-M', 'A*2000-1').valueOf()",
                            "new Date(2000, 0).valueOf()");
                        assert.strictEquals(
                            "parseDate('A+y-M', 'A2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseDate('A+y-M', 'A+2000-1').valueOf()",
                            "new Date(2000, 0).valueOf()");
                        assert.strictEquals(
                            "parseDate('A?y-M', '2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseDate('A?y-M', 'A?2000-1').valueOf()",
                            "new Date(2000, 0).valueOf()");
                        assert.strictEquals(
                            "parseDate('[A]y-M', 'A2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseDate('[A]y-M', '[A]2000-1').valueOf()",
                            "new Date(2000, 0).valueOf()");
                        assert.strictEquals(
                            "parseDate('A{1,2}y-M', 'AA2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseDate('A{1,2}y-M', 'A{1,2}2000-1').valueOf()",
                            "new Date(2000, 0).valueOf()");
                        assert.strictEquals(
                            "parseDate('A|By-M', 'B2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseDate('A|By-M', 'A|B2000-1').valueOf()",
                            "new Date(2000, 0).valueOf()");
                        assert.strictEquals(
                            "parseDate('y-M(A)', '2000-1A')",
                            "null");
                        assert.strictEquals(
                            "parseDate('y-M(A)', '2000-1(A)').valueOf()",
                            "new Date(2000, 0).valueOf()");
                    })
            });

        describe(
            'parseUTCDate(value, dateFormatPattern)',
            function()
            {
                assert.strictEquals("typeof parseUTCDate", "'function'");

                describe(
                    'Symbol: y',
                    function()
                    {
                        testYears.forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('y', '" + year.toString() + "').valueOf()",
                                    "new Date(0).setUTCFullYear(" + year.toString() + ")");
                            });

                        ['', 'a', 'b', 'c', 'a1', '1a', (Date.maxYear + 1).toString()].forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('y', '" + year + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: yy',
                    function()
                    {
                        for(var year = 1;year <= 10;++year)
                            assert.strictEquals(
                                "parseUTCDate('yy', '" + year.toString().padStart(2, '0') + "').valueOf()",
                                "new Date(0).setUTCFullYear(" + (2000 + year).toString() + ")");

                        ['', 'a', 'b', 'c', 'a10', '10a'].forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('yy', '" + year + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: yyyy',
                    function()
                    {
                        testYears.forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('yyyy', '" + year.toString().padStart(4, '0') + "').valueOf()",
                                    "new Date(0).setUTCFullYear(" + year.toString() + ")");
                            });


                        ['', 'a', 'b', 'c', 'a1000', '1000a', (Date.maxYear + 1).toString()].forEach(
                            function(
                                year
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('yyyy', '" + year + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: M',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-M', '2000-" + month.toString() + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        ['', 'a', 'b', 'c', 'a1', '1a', '0', '13'].forEach(
                            function(
                                month
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('M', '" + month + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: MM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-MM', '2000-" + month.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        ['', 'a', 'b', 'c', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a01', '01a', '0', '13'].forEach(
                            function(
                                month
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('MM', '" + month + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: MMM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-MMM', '2000-" + calendar.months.format.abbreviated[month] + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-MMM', '2000-" + calendar.months.format.abbreviated[month].toLowerCase() + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-MMM', '2000-" + calendar.months.format.abbreviated[month].toUpperCase() + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        ['Ja', 'Jaa', 'Jana'].forEach(
                            function(
                                invalidMonth
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('y-MMM', '2000-" + invalidMonth + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: MMMM',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-MMMM', '2000-" + calendar.months.format.wide[month] + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-MMMM', '2000-" + calendar.months.format.wide[month].toLowerCase() + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-MMMM', '2000-" + calendar.months.format.wide[month].toUpperCase() + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        ['Januar', 'Januara', 'Januarya'].forEach(
                            function(
                                invalidMonth
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('y-MMMM', '2000-" + invalidMonth + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: L',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-L', '2000-" + month.toString() + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        ['', 'a', 'b', 'c', 'a1', '1a', '0', '13'].forEach(
                            function(
                                month
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('L', '" + month + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: LL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-LL', '2000-" + month.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        ['', 'a', 'b', 'c', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a01', '01a', '0', '13'].forEach(
                            function(
                                month
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('LL', '" + month + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: LLL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-LLL', '2000-" + calendar.months['stand-alone'].abbreviated[month] + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-LLL', '2000-" + calendar.months['stand-alone'].abbreviated[month].toLowerCase() + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-LLL', '2000-" + calendar.months['stand-alone'].abbreviated[month].toUpperCase() + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        ['Ja', 'Jaa', 'Jana'].forEach(
                            function(
                                invalidMonth
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('y-LLL', '2000-" + invalidMonth + "')",
                                    "null");
                            });
                    });


                describe(
                    'Symbol: LLLL',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-LLLL', '2000-" + calendar.months['stand-alone'].wide[month] + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-LLLL', '2000-" + calendar.months['stand-alone'].wide[month].toLowerCase() + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-LLLL', '2000-" + calendar.months['stand-alone'].wide[month].toUpperCase() + "').valueOf()",
                                "Date.UTC(2000, " + (month - 1).toString() + ")");

                        ['Januar', 'Januara', 'Januarya'].forEach(
                            function(
                                invalidMonth
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('y-LLLL', '2000-" + invalidMonth + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: d',
                    function()
                    {
                        for(var day = 1;day <= 31;++day)
                            assert.strictEquals(
                                "parseUTCDate('y-M-d', '2000-1-" + day.toString() + "').valueOf()",
                                "Date.UTC(2000, 0, " + day.toString() + ")");

                        ['', 'a', 'b', 'c', 'a1', '1a'].forEach(
                            function(
                                month
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('d', '" + month + "')",
                                    "null");
                            });

                        var daysInMonth =
                            [
                                31,//January
                                28,//February
                                31,//March
                                30,//April
                                31,//May
                                30,//June
                                31,//July
                                31,//August
                                30,//September
                                31,//October
                                30,//November
                                31 //December
                            ];

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-M-d', '2001-" + (month - 1).toString() + "-0')",
                                "null");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-M-d', '2001-" + month.toString() + "-" + daysInMonth[month - 1].toString() + "').valueOf()",
                                "Date.UTC(2001, " + (month - 1).toString() + ", " + daysInMonth[month - 1].toString() + ")");

                        assert.strictEquals(
                            "parseUTCDate('y-M-d', '2004-2-29').valueOf()",
                            "Date.UTC(2004, 1, 29).valueOf()");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-M-d', '2001-" + month.toString() + "-" + (daysInMonth[month - 1] + 1).toString() + "')",
                                "null");
                    });

                describe(
                    'Symbol: dd',
                    function()
                    {
                        for(var day = 1;day <= 31;++day)
                            assert.strictEquals(
                                "parseUTCDate('y-M-dd', '2000-1-" + day.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 0, " + day.toString() + ")");

                        ['', 'a', 'b', 'c', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a01', '01a'].forEach(
                            function(
                                month
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('dd', '" + month + "')",
                                    "null");
                            });

                        var daysInMonth =
                            [
                                31,//January
                                28,//February
                                31,//March
                                30,//April
                                31,//May
                                30,//June
                                31,//July
                                31,//August
                                30,//September
                                31,//October
                                30,//November
                                31 //December
                            ];

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-M-dd', '2001-" + (month - 1).toString() + "-00')",
                                "null");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-M-dd', '2001-" + month.toString() + "-" + daysInMonth[month - 1].toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2001, " + (month - 1).toString() + ", " + daysInMonth[month - 1].toString() + ")");

                        assert.strictEquals(
                            "parseUTCDate('y-M-dd', '2004-2-29').valueOf()",
                            "Date.UTC(2004, 1, 29)");

                        for(var month = 1;month <= 12;++month)
                            assert.strictEquals(
                                "parseUTCDate('y-M-dd', '2001-" + month.toString() + "-" + (daysInMonth[month - 1] + 1).toString() + "')",
                                "null");
                    });

                describe(
                    'Symbol: H',
                    function()
                    {
                        for(var hour = 0;hour < 24;++hour)
                            assert.strictEquals(
                                "parseUTCDate('y-M-d H', '2000-1-1 " + hour.toString() + "').valueOf()",
                                "Date.UTC(2000, 0, 1, " + hour.toString() + ")");

                        ['', 'a', 'b', 'c', 'a0', '0a', '24'].forEach(
                            function(
                                hour
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('H', '" + hour + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: HH',
                    function()
                    {
                        for(var hour = 0;hour < 24;++hour)
                            assert.strictEquals(
                                "parseUTCDate('y-M-d HH', '2000-1-1 " + hour.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 0, 1, " + hour.toString() + ")");

                        ['', 'a', 'b', 'c', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a01', '01a', '24'].forEach(
                            function(
                                hour
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('HH', '" + hour + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: m',
                    function()
                    {
                        for(var minute = 0;minute < 60;++minute)
                            assert.strictEquals(
                                "parseUTCDate('y-M-d H:m', '2000-1-1 0:" + minute.toString() + "').valueOf()",
                                "Date.UTC(2000, 0, 1, 0, " + minute.toString() + ")");

                        ['', 'a', 'b', 'c', 'a0', '0a', '60'].forEach(
                            function(
                                minute
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('m', '" + minute + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: mm',
                    function()
                    {
                        for(var minute = 0;minute < 60;++minute)
                            assert.strictEquals(
                                "parseUTCDate('y-M-d H:mm', '2000-1-1 0:" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 0, 1, 0, " + minute.toString() + ")");

                        ['', 'a', 'b', 'c', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a00', '00a', '60'].forEach(
                            function(
                                minute
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('mm', '" + minute + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: s',
                    function()
                    {
                        for(var second = 0;second < 60;++second)
                            assert.strictEquals(
                                "parseUTCDate('y-M-d H:m:s', '2000-1-1 0:0:" + second.toString() + "').valueOf()",
                                "Date.UTC(2000, 0, 1, 0, 0, " + second.toString() + ")");

                        ['', 'a', 'b', 'c', 'a0', '0a', '60'].forEach(
                            function(
                                second
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('s', '" + second + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: ss',
                    function()
                    {
                        for(var second = 0;second < 60;++second)
                            assert.strictEquals(
                                "parseUTCDate('y-M-d H:m:ss', '2000-1-1 0:0:" + second.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 0, 1, 0, 0, " + second.toString() + ")");

                        ['', 'a', 'b', 'c', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a00', '00a', '60'].forEach(
                            function(
                                second
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('ss', '" + second + "')",
                                    "null");
                            });
                    });

                describe(
                    'Symbol: SSS',
                    function()
                    {
                        [0, 9, 99, 999].forEach(
                            function(
                                millisecond
                                )
                            {
                                assert.strictEquals(
                                    "parseUTCDate('y-M-d H:m:s.SSS', '2000-1-1 0:0:0." + millisecond.toString().padStart(3, '0') + "').valueOf()",
                                    "Date.UTC(2000, 0, 1, 0, 0, 0, " + millisecond.toString() + ")");
                            });
                    });

                describe(
                    'Symbol: xx',
                    function()
                    {
                        for(var month = 1;month <= 12;++month)
                        {
                            for(var minute = 0;minute < 60;++minute)
                                assert.strictEquals(
                                    "parseUTCDate('y-Mxx', '2000-" + month.toString() + "+00" + minute.toString().padStart(2, '0') + "').valueOf()",
                                    "Date.UTC(2000, " + (month - 1).toString() + ") - " + minute.toString() + " * 60 * 1000");

                            for(var minute = 0;minute < 60;++minute)
                                assert.strictEquals(
                                    "parseUTCDate('y-Mxx', '2000-" + month.toString() + "-00" + minute.toString().padStart(2, '0') + "').valueOf()",
                                    "Date.UTC(2000, " + (month - 1).toString() + ") + " + minute.toString() + " * 60 * 1000");

                            for(var hour = 0;hour <= 12;++hour)
                                assert.strictEquals(
                                    "parseUTCDate('y-Mxx', '2000-" + month.toString() + "+" + hour.toString().padStart(2, '0') + "00').valueOf()",
                                    "Date.UTC(2000, " + (month - 1).toString() + ") - " + hour.toString() + " * 60 * 60 * 1000");

                            for(var hour = 0;hour <= 12;++hour)
                                assert.strictEquals(
                                    "parseUTCDate('y-Mxx', '2000-" + month.toString() + "-" + hour.toString().padStart(2, '0') + "00').valueOf()",
                                    "Date.UTC(2000, " + (month - 1).toString() + ") + " + hour.toString() + " * 60 * 60 * 1000");
                        }
                    });

                describe(
                    'Symbol: xxx',
                    function()
                    {
                        for(var minute = 0;minute < 60;++minute)
                            assert.strictEquals(
                                "parseUTCDate('y-Mxxx', '2000-7+00:" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 6) - " + minute.toString() + " * 60 * 1000");

                        for(var minute = 0;minute < 60;++minute)
                            assert.strictEquals(
                                "parseUTCDate('y-Mxxx', '2000-7-00:" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 6) + " + minute.toString() + " * 60 * 1000");

                        for(var hour = 0;hour <= 12;++hour)
                            assert.strictEquals(
                                "parseUTCDate('y-Mxxx', '2000-7+" + hour.toString().padStart(2, '0') + ":00').valueOf()",
                                "Date.UTC(2000, 6) - " + hour.toString() + " * 60 * 60 * 1000");

                        for(var hour = 0;hour <= 12;++hour)
                            assert.strictEquals(
                                "parseUTCDate('y-Mxxx', '2000-7-" + hour.toString().padStart(2, '0') + ":00').valueOf()",
                                "Date.UTC(2000, 6) + " + hour.toString() + " * 60 * 60 * 1000");
                    });

                describe(
                    'Symbol: XX',
                    function()
                    {
                        assert.strictEquals(
                            "parseUTCDate('y-MXX', '2000-7Z').valueOf()",
                            "Date.UTC(2000, 6)");

                        for(var minute = 1;minute < 60;++minute)
                            assert.strictEquals(
                                "parseUTCDate('y-MXX', '2000-7+00" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 6) - " + minute.toString() + " * 60 * 1000");

                        for(var minute = 1;minute < 60;++minute)
                            assert.strictEquals(
                                "parseUTCDate('y-MXX', '2000-7-00" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 6) + " + minute.toString() + " * 60 * 1000");

                        for(var hour = 1;hour <= 12;++hour)
                            assert.strictEquals(
                                "parseUTCDate('y-MXX', '2000-7+" + hour.toString().padStart(2, '0') + "00').valueOf()",
                                "Date.UTC(2000, 6) - " + hour.toString() + " * 60 * 60 * 1000");

                        for(var hour = 1;hour <= 12;++hour)
                            assert.strictEquals(
                                "parseUTCDate('y-MXX', '2000-7-" + hour.toString().padStart(2, '0') + "00').valueOf()",
                                "Date.UTC(2000, 6) + " + hour.toString() + " * 60 * 60 * 1000");
                    });

                describe(
                    'Symbol: XXX',
                    function()
                    {
                        assert.strictEquals(
                            "parseUTCDate('y-MXXX', '2000-7Z').valueOf()",
                            "Date.UTC(2000, 6)");

                        for(var minute = 1;minute < 60;++minute)
                            assert.strictEquals(
                                "parseUTCDate('y-MXXX', '2000-7+00:" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 6) - " + minute.toString() + " * 60 * 1000");

                        for(var minute = 1;minute < 60;++minute)
                            assert.strictEquals(
                                "parseUTCDate('y-MXXX', '2000-7-00:" + minute.toString().padStart(2, '0') + "').valueOf()",
                                "Date.UTC(2000, 6) + " + minute.toString() + " * 60 * 1000");

                        for(var hour = 1;hour <= 12;++hour)
                            assert.strictEquals(
                                "parseUTCDate('y-MXXX', '2000-7+" + hour.toString().padStart(2, '0') + ":00').valueOf()",
                                "Date.UTC(2000, 6) - " + hour.toString() + " * 60 * 60 * 1000");

                        for(var hour = 1;hour <= 12;++hour)
                            assert.strictEquals(
                                "parseUTCDate('y-MXXX', '2000-7-" + hour.toString().padStart(2, '0') + ":00').valueOf()",
                                "Date.UTC(2000, 6) + " + hour.toString() + " * 60 * 60 * 1000");
                    });

                describe(
                    'Partial Application',
                    function()
                    {
                        assert.strictEquals(
                            "parseUTCDate('y-M-d')('2000-1-1').valueOf()",
                            "Date.UTC(2000, 0, 1)");
                    });

                describe(
                    "Regular Expression Characters",
                    function()
                    {
                        assert.strictEquals(
                            "parseUTCDate('\\\\Dy-M', 'A2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseUTCDate('\\\\Dy-M', '\\\\D2000-1').valueOf()",
                            "Date.UTC(2000, 0)");
                        assert.strictEquals(
                            "parseUTCDate('.y-M', 'A2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseUTCDate('.y-M', '.2000-1').valueOf()",
                            "Date.UTC(2000, 0)");
                        assert.strictEquals(
                            "parseUTCDate('A*y-M', '2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseUTCDate('A*y-M', 'A*2000-1').valueOf()",
                            "Date.UTC(2000, 0)");
                        assert.strictEquals(
                            "parseUTCDate('A+y-M', 'A2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseUTCDate('A+y-M', 'A+2000-1').valueOf()",
                            "Date.UTC(2000, 0)");
                        assert.strictEquals(
                            "parseUTCDate('A?y-M', '2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseUTCDate('A?y-M', 'A?2000-1').valueOf()",
                            "Date.UTC(2000, 0)");
                        assert.strictEquals(
                            "parseUTCDate('[A]y-M', 'A2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseUTCDate('[A]y-M', '[A]2000-1').valueOf()",
                            "Date.UTC(2000, 0)");
                        assert.strictEquals(
                            "parseUTCDate('A{1,2}y-M', 'AA2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseUTCDate('A{1,2}y-M', 'A{1,2}2000-1').valueOf()",
                            "Date.UTC(2000, 0)");
                        assert.strictEquals(
                            "parseUTCDate('A|By-M', 'B2000-1')",
                            "null");
                        assert.strictEquals(
                            "parseUTCDate('A|By-M', 'A|B2000-1').valueOf()",
                            "Date.UTC(2000, 0)");
                        assert.strictEquals(
                            "parseUTCDate('y-M(A)', '2000-1A')",
                            "null");
                        assert.strictEquals(
                            "parseUTCDate('y-M(A)', '2000-1(A)').valueOf()",
                            "Date.UTC(2000, 0)");
                    })
            });
    });