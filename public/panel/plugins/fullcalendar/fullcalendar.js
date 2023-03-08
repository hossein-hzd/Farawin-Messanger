!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.persianDate = t() : e.persianDate = t()
}(this, function () {
    return function (e) {
        function t(i) {
            if (a[i]) return a[i].exports;
            var r = a[i] = {i: i, l: !1, exports: {}};
            return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }

        var a = {};
        return t.m = e, t.c = a, t.i = function (e) {
            return e
        }, t.d = function (e, a, i) {
            t.o(e, a) || Object.defineProperty(e, a, {configurable: !1, enumerable: !0, get: i})
        }, t.n = function (e) {
            var a = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(a, "a", a), a
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 8)
    }([function (e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var r = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t
            }
        }(), n = a(4).durationUnit, s = function () {
            function e() {
                i(this, e)
            }

            return r(e, [{
                key: "toPersianDigit", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return e.toString().replace(/\d+/g, function (e) {
                        var a = [], i = [], r = void 0, n = void 0;
                        for (r = 0; r < e.length; r += 1) a.push(e.charCodeAt(r));
                        for (n = 0; n < a.length; n += 1) i.push(String.fromCharCode(a[n] + (t && !0 === t ? 1584 : 1728)));
                        return i.join("")
                    })
                }
            }, {
                key: "leftZeroFill", value: function (e, t) {
                    for (var a = e + ""; a.length < t;) a = "0" + a;
                    return a
                }
            }, {
                key: "normalizeDuration", value: function () {
                    var e = void 0, t = void 0;
                    return "string" == typeof arguments[0] ? (e = arguments[0], t = arguments[1]) : (t = arguments[0], e = arguments[1]), n.year.indexOf(e) > -1 ? e = "year" : n.month.indexOf(e) > -1 ? e = "month" : n.week.indexOf(e) > -1 ? e = "week" : n.day.indexOf(e) > -1 ? e = "day" : n.hour.indexOf(e) > -1 ? e = "hour" : n.minute.indexOf(e) > -1 ? e = "minute" : n.second.indexOf(e) > -1 ? e = "second" : n.millisecond.indexOf(e) > -1 && (e = "millisecond"), {
                        unit: e,
                        value: t
                    }
                }
            }, {
                key: "absRound", value: function (e) {
                    return e < 0 ? Math.ceil(e) : Math.floor(e)
                }
            }, {
                key: "absFloor", value: function (e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }
            }]), e
        }();
        e.exports = s
    }, function (e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var r = function () {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var i = t[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }

                return function (t, a, i) {
                    return a && e(t.prototype, a), i && e(t, i), t
                }
            }(), n = a(10), s = a(2), o = a(0), h = a(5), u = a(11), d = (new o).toPersianDigit, l = (new o).leftZeroFill,
            c = (new o).normalizeDuration, y = a(7), f = a(6), v = function () {
                function t(e) {
                    return i(this, t), this.calendarType = t.calendarType, this.localType = t.localType, this.leapYearMode = t.leapYearMode, this.algorithms = new s(this), this.version = "1.1.0", this._utcMode = !1, "fa" !== this.localType ? this.formatPersian = !1 : this.formatPersian = "_default", this.State = this.algorithms.State, this.setup(e), this.State.isInvalidDate ? new Date([-1, -1]) : this
                }

                return r(t, [{
                    key: "setup", value: function (e) {
                        if (n.isDate(e)) this._gDateToCalculators(e); else if (n.isArray(e)) {
                            if (!u.validateInputArray(e)) return this.State.isInvalidDate = !0, !1;
                            this.algorithmsCalc([e[0], e[1] ? e[1] : 1, e[2] ? e[2] : 1, e[3] ? e[3] : 0, e[4] ? e[4] : 0, e[5] ? e[5] : 0, e[6] ? e[6] : 0])
                        } else if (n.isNumber(e)) {
                            var a = new Date(e);
                            this._gDateToCalculators(a)
                        } else if (e instanceof t) this.algorithmsCalc([e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]); else if (e && "/Date(" === e.substring(0, 6)) {
                            var i = new Date(parseInt(e.substr(6)));
                            this._gDateToCalculators(i)
                        } else {
                            var r = new Date;
                            this._gDateToCalculators(r)
                        }
                    }
                }, {
                    key: "_getSyncedClass", value: function (e) {
                        return new (t.toCalendar(this.calendarType).toLocale(this.localType).toLeapYearMode(this.leapYearMode))(e)
                    }
                }, {
                    key: "_gDateToCalculators", value: function (e) {
                        this.algorithms.calcGregorian([e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()])
                    }
                }, {
                    key: "rangeName", value: function () {
                        var e = this.calendarType;
                        return "fa" === this.localType ? "persian" === e ? y.persian : y.gregorian : "persian" === e ? f.persian : f.gregorian
                    }
                }, {
                    key: "toLeapYearMode", value: function (e) {
                        return this.leapYearMode = e, "astronomical" === e && "persian" == this.calendarType ? this.leapYearMode = "astronomical" : "algorithmic" === e && "persian" == this.calendarType && (this.leapYearMode = "algorithmic"), this.algorithms.updateFromGregorian(), this
                    }
                }, {
                    key: "toCalendar", value: function (e) {
                        return this.calendarType = e, this.algorithms.updateFromGregorian(), this
                    }
                }, {
                    key: "toLocale", value: function (e) {
                        return this.localType = e, "fa" !== this.localType ? this.formatPersian = !1 : this.formatPersian = "_default", this
                    }
                }, {
                    key: "_locale", value: function () {
                        var e = this.calendarType;
                        return "fa" === this.localType ? "persian" === e ? y.persian : y.gregorian : "persian" === e ? f.persian : f.gregorian
                    }
                }, {
                    key: "_weekName", value: function (e) {
                        return this._locale().weekdays[e - 1]
                    }
                }, {
                    key: "_weekNameShort", value: function (e) {
                        return this._locale().weekdaysShort[e - 1]
                    }
                }, {
                    key: "_weekNameMin", value: function (e) {
                        return this._locale().weekdaysMin[e - 1]
                    }
                }, {
                    key: "_dayName", value: function (e) {
                        return this._locale().persianDaysName[e - 1]
                    }
                }, {
                    key: "_monthName", value: function (e) {
                        return this._locale().months[e - 1]
                    }
                }, {
                    key: "_monthNameShort", value: function (e) {
                        return this._locale().monthsShort[e - 1]
                    }
                }, {
                    key: "isPersianDate", value: function (e) {
                        return e instanceof t
                    }
                }, {
                    key: "clone", value: function () {
                        return this._getSyncedClass(this.State.gDate)
                    }
                }, {
                    key: "algorithmsCalc", value: function (e) {
                        return this.isPersianDate(e) && (e = [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]), "persian" === this.calendarType && "algorithmic" == this.leapYearMode ? this.algorithms.calcPersian(e) : "persian" === this.calendarType && "astronomical" == this.leapYearMode ? this.algorithms.calcPersiana(e) : "gregorian" === this.calendarType ? (e[1] = e[1] - 1, this.algorithms.calcGregorian(e)) : void 0
                    }
                }, {
                    key: "calendar", value: function () {
                        var e = void 0;
                        return "persian" == this.calendarType ? "astronomical" == this.leapYearMode ? e = "persianAstro" : "algorithmic" == this.leapYearMode && (e = "persianAlgo") : e = "gregorian", this.State[e]
                    }
                }, {
                    key: "duration", value: function (e, t) {
                        return new h(e, t)
                    }
                }, {
                    key: "isDuration", value: function (e) {
                        return e instanceof h
                    }
                }, {
                    key: "years", value: function (e) {
                        return this.year(e)
                    }
                }, {
                    key: "year", value: function (e) {
                        return e || 0 === e ? (this.algorithmsCalc([e, this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]), this) : this.calendar().year
                    }
                }, {
                    key: "month", value: function (e) {
                        return e || 0 === e ? (this.algorithmsCalc([this.year(), e, this.date()]), this) : this.calendar().month + 1
                    }
                }, {
                    key: "days", value: function () {
                        return this.day()
                    }
                }, {
                    key: "day", value: function () {
                        return this.calendar().weekday
                    }
                }, {
                    key: "dates", value: function (e) {
                        return this.date(e)
                    }
                }, {
                    key: "date", value: function (e) {
                        return e || 0 === e ? (this.algorithmsCalc([this.year(), this.month(), e]), this) : this.calendar().day
                    }
                }, {
                    key: "hour", value: function (e) {
                        return this.hours(e)
                    }
                }, {
                    key: "hours", value: function (e) {
                        return e || 0 === e ? (0 === e && (e = 24), this.algorithmsCalc([this.year(), this.month(), this.date(), e]), this) : this.State.gDate.getHours()
                    }
                }, {
                    key: "minute", value: function (e) {
                        return this.minutes(e)
                    }
                }, {
                    key: "minutes", value: function (e) {
                        return e || 0 === e ? (this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), e]), this) : this.State.gDate.getMinutes()
                    }
                }, {
                    key: "second", value: function (e) {
                        return this.seconds(e)
                    }
                }, {
                    key: "seconds", value: function (e) {
                        return e || 0 === e ? (this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), e]), this) : this.State.gDate.getSeconds()
                    }
                }, {
                    key: "millisecond", value: function (e) {
                        return this.milliseconds(e)
                    }
                }, {
                    key: "milliseconds", value: function (e) {
                        return e || 0 === e ? (this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), e]), this) : this.State.gregorian.millisecond
                    }
                }, {
                    key: "unix", value: function (e) {
                        var t = void 0;
                        if (e) return this._getSyncedClass(1e3 * e);
                        var a = this.State.gDate.valueOf().toString();
                        return t = a.substring(0, a.length - 3), parseInt(t)
                    }
                }, {
                    key: "valueOf", value: function () {
                        return this.State.gDate.valueOf()
                    }
                }, {
                    key: "getFirstWeekDayOfMonth", value: function (e, t) {
                        return this._getSyncedClass([e, t, 1]).day()
                    }
                }, {
                    key: "diff", value: function (e, t, a) {
                        var i = this, r = e, n = i.State.gDate - r.toDate() - 0, s = i.year() - r.year(),
                            o = i.month() - r.month(), h = -1 * (i.date() - r.date()), u = void 0;
                        return u = "months" === t || "month" === t ? 12 * s + o + h / 30 : "years" === t || "year" === t ? s + (o + h / 30) / 12 : "seconds" === t || "second" === t ? n / 1e3 : "minutes" === t || "minute" === t ? n / 6e4 : "hours" === t || "hour" === t ? n / 36e5 : "days" === t || "day" === t ? n / 864e5 : "weeks" === t || "week" === t ? n / 6048e5 : n, a ? u : Math.round(u)
                    }
                }, {
                    key: "startOf", value: function (e) {
                        var a = t.toCalendar(this.calendarType).toLocale(this.localType),
                            i = new t(this.valueOf() - 864e5 * (this.calendar().weekday - 1)).toArray();
                        switch (e) {
                            case"years":
                            case"year":
                                return new a([this.year(), 1, 1]);
                            case"months":
                            case"month":
                                return new a([this.year(), this.month(), 1]);
                            case"days":
                            case"day":
                                return new a([this.year(), this.month(), this.date(), 0, 0, 0]);
                            case"hours":
                            case"hour":
                                return new a([this.year(), this.month(), this.date(), this.hours(), 0, 0]);
                            case"minutes":
                            case"minute":
                                return new a([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 0]);
                            case"seconds":
                            case"second":
                                return new a([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
                            case"weeks":
                            case"week":
                                return new a(i);
                            default:
                                return this.clone()
                        }
                    }
                }, {
                    key: "endOf", value: function (e) {
                        var a = t.toCalendar(this.calendarType).toLocale(this.localType);
                        switch (e) {
                            case"years":
                            case"year":
                                var i = this.isLeapYear() ? 30 : 29;
                                return new a([this.year(), 12, i, 23, 59, 59]);
                            case"months":
                            case"month":
                                var r = this.daysInMonth(this.year(), this.month());
                                return new a([this.year(), this.month(), r, 23, 59, 59]);
                            case"days":
                            case"day":
                                return new a([this.year(), this.month(), this.date(), 23, 59, 59]);
                            case"hours":
                            case"hour":
                                return new a([this.year(), this.month(), this.date(), this.hours(), 59, 59]);
                            case"minutes":
                            case"minute":
                                return new a([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 59]);
                            case"seconds":
                            case"second":
                                return new a([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
                            case"weeks":
                            case"week":
                                var n = this.calendar().weekday;
                                return new a([this.year(), this.month(), this.date() + (7 - n)]);
                            default:
                                return this.clone()
                        }
                    }
                }, {
                    key: "sod", value: function () {
                        return this.startOf("day")
                    }
                }, {
                    key: "eod", value: function () {
                        return this.endOf("day")
                    }
                }, {
                    key: "zone", value: function (e) {
                        return e || 0 === e ? (this.State.zone = e, this) : this.State.zone
                    }
                }, {
                    key: "local", value: function () {
                        var e = void 0;
                        if (this._utcMode) {
                            var a = new Date(this.toDate()).getTimezoneOffset(), i = 60 * a * 1e3;
                            e = a < 0 ? this.valueOf() - i : this.valueOf() + i, this.toCalendar(t.calendarType);
                            var r = new Date(e);
                            return this._gDateToCalculators(r), this._utcMode = !1, this.zone(a), this
                        }
                        return this
                    }
                }, {
                    key: "utc", value: function (e) {
                        var t = void 0;
                        if (e) return this._getSyncedClass(e).utc();
                        if (this._utcMode) return this;
                        var a = 60 * this.zone() * 1e3;
                        t = this.zone() < 0 ? this.valueOf() + a : this.valueOf() - a;
                        var i = new Date(t), r = this._getSyncedClass(i);
                        return this.algorithmsCalc(r), this._utcMode = !0, this.zone(0), this
                    }
                }, {
                    key: "isUtc", value: function () {
                        return this._utcMode
                    }
                }, {
                    key: "isDST", value: function () {
                        var e = this.month(), t = this.date();
                        return 1 == e && t > 1 || 6 == e && t < 31 || e < 6 && e >= 2
                    }
                }, {
                    key: "isLeapYear", value: function (e) {
                        return void 0 === e && (e = this.year()), "persian" == this.calendarType && "algorithmic" === this.leapYearMode ? this.algorithms.leap_persian(e) : "persian" == this.calendarType && "astronomical" === this.leapYearMode ? this.algorithms.leap_persiana(e) : "gregorian" == this.calendarType ? this.algorithms.leap_gregorian(e) : void 0
                    }
                }, {
                    key: "daysInMonth", value: function (e, t) {
                        var a = e || this.year(), i = t || this.month();
                        return "persian" === this.calendarType ? i < 1 || i > 12 ? 0 : i < 7 ? 31 : i < 12 ? 30 : this.isLeapYear(a) ? 30 : 29 : "gregorian" === this.calendarType ? new Date(a, i, 0).getDate() : void 0
                    }
                }, {
                    key: "toDate", value: function () {
                        return this.State.gDate
                    }
                }, {
                    key: "toArray", value: function () {
                        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
                    }
                }, {
                    key: "formatNumber", value: function () {
                        var t = void 0, a = this;
                        return "_default" === this.formatPersian ? t = void 0 !== e && void 0 !== e.exports ? !1 !== a.formatPersian : !1 !== window.formatPersian : !0 === this.formatPersian ? t = !0 : !1 === this.formatPersian ? t = !1 : Error('Invalid Config "formatPersian" !!'), t
                    }
                }, {
                    key: "format", value: function (e) {
                        function t(e) {
                            switch (e) {
                                case"a":
                                    return n ? r.hour >= 12 ? "ب ظ" : "ق ظ" : r.hour >= 12 ? "PM" : "AM";
                                case"H":
                                    return s(r.hour);
                                case"HH":
                                    return s(l(r.hour, 2));
                                case"h":
                                    return s(r.hour % 12);
                                case"hh":
                                    return s(l(r.hour % 12, 2));
                                case"m":
                                case"mm":
                                    return s(l(r.minute, 2));
                                case"s":
                                    return s(r.second);
                                case"ss":
                                    return s(l(r.second, 2));
                                case"D":
                                    return s(l(r.date));
                                case"DD":
                                    return s(l(r.date, 2));
                                case"DDD":
                                    var t = a.startOf("year");
                                    return s(l(a.diff(t, "days"), 3));
                                case"DDDD":
                                    var i = a.startOf("year");
                                    return s(l(a.diff(i, "days"), 3));
                                case"d":
                                    return s(a.calendar().weekday);
                                case"ddd":
                                    return a._weekNameShort(a.calendar().weekday);
                                case"dddd":
                                    return a._weekName(a.calendar().weekday);
                                case"ddddd":
                                    return a._dayName(a.calendar().day);
                                case"dddddd":
                                    return a._weekNameMin(a.calendar().weekday);
                                case"w":
                                    var o = a.startOf("year"), h = parseInt(a.diff(o, "days") / 7) + 1;
                                    return s(h);
                                case"ww":
                                    var u = a.startOf("year"), d = l(parseInt(a.diff(u, "days") / 7) + 1, 2);
                                    return s(d);
                                case"M":
                                    return s(r.month);
                                case"MM":
                                    return s(l(r.month, 2));
                                case"MMM":
                                    return a._monthNameShort(r.month);
                                case"MMMM":
                                    return a._monthName(r.month);
                                case"YY":
                                    var c = r.year.toString().split("");
                                    return s(c[2] + c[3]);
                                case"YYYY":
                                    return s(r.year);
                                case"Z":
                                    var y = "+", f = Math.round(r.timezone / 60), v = r.timezone % 60;
                                    v < 0 && (v *= -1), f < 0 && (y = "-", f *= -1);
                                    var m = y + l(f, 2) + ":" + l(v, 2);
                                    return s(m);
                                case"ZZ":
                                    var p = "+", g = Math.round(r.timezone / 60), _ = r.timezone % 60;
                                    _ < 0 && (_ *= -1), g < 0 && (p = "-", g *= -1);
                                    var k = p + l(g, 2) + "" + l(_, 2);
                                    return s(k);
                                case"X":
                                    return a.unix();
                                case"LT":
                                    return a.format("H:m a");
                                case"L":
                                    return a.format("YYYY/MM/DD");
                                case"l":
                                    return a.format("YYYY/M/D");
                                case"LL":
                                    return a.format("MMMM DD YYYY");
                                case"ll":
                                    return a.format("MMM DD YYYY");
                                case"LLL":
                                    return a.format("MMMM YYYY DD   H:m  a");
                                case"lll":
                                    return a.format("MMM YYYY DD   H:m  a");
                                case"LLLL":
                                    return a.format("dddd D MMMM YYYY  H:m  a");
                                case"llll":
                                    return a.format("ddd D MMM YYYY  H:m  a")
                            }
                        }

                        if (this.State.isInvalidDate) return !1;
                        var a = this,
                            i = /([[^[]*])|(\\)?(Mo|MM?M?M?|Do|DD?D?D?|dddddd?|ddddd?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|X|LT|ll?l?l?|LL?L?L?)/g,
                            r = {
                                year: a.year(),
                                month: a.month(),
                                hour: a.hours(),
                                minute: a.minutes(),
                                second: a.seconds(),
                                date: a.date(),
                                timezone: a.zone(),
                                unix: a.unix()
                            }, n = a.formatNumber(), s = function (e) {
                                return n ? d(e) : e
                            };
                        return e ? e.replace(i, t) : "YYYY-MM-DD HH:mm:ss a".replace(i, t)
                    }
                }, {
                    key: "add", value: function (e, a) {
                        if (0 === a) return this;
                        var i = c(e, a).unit, r = this.toArray();
                        if (a = c(e, a).value, "year" === i) {
                            var n = r[2], s = this.daysInMonth(r[0] + a, r[1]);
                            r[2] > s && (n = s);
                            return new t([r[0] + a, r[1], n, r[3], r[4], r[5], r[6], r[7]])
                        }
                        if ("month" === i) {
                            var o = Math.floor(a / 12), h = a - 12 * o, u = null;
                            r[1] + h > 12 ? (o += 1, u = r[1] + h - 12) : u = r[1] + h;
                            var d = r[2], l = new t([r[0] + o, u, 1, r[3], r[4], r[5], r[6], r[7]]).toArray(),
                                y = this.daysInMonth(r[0] + o, u);
                            return r[2] > y && (d = y), new t([l[0], l[1], d, l[3], l[4], l[5], l[6], l[7]])
                        }
                        if ("day" === i) {
                            return new t(new t(this.valueOf()).hour(12).valueOf() + 864e5 * a).hour(r[3])
                        }
                        if ("week" === i) {
                            return new t(new t(this.valueOf()).hour(12).valueOf() + 7 * a * 864e5).hour(r[3])
                        }
                        if ("hour" === i) {
                            var f = this.valueOf() + 36e5 * a;
                            return this.unix(f / 1e3)
                        }
                        if ("minute" === i) {
                            var v = this.valueOf() + 6e4 * a;
                            return this.unix(v / 1e3)
                        }
                        if ("second" === i) {
                            var m = this.valueOf() + 1e3 * a;
                            return this.unix(m / 1e3)
                        }
                        if ("millisecond" === i) {
                            var p = this.valueOf() + a;
                            return this.unix(p / 1e3)
                        }
                        return this._getSyncedClass(this.valueOf())
                    }
                }, {
                    key: "subtract", value: function (e, t) {
                        return this.add(e, -1 * t)
                    }
                }, {
                    key: "isSameDay", value: function (e) {
                        return this && e && this.date() == e.date() && this.year() == e.year() && this.month() == e.month()
                    }
                }, {
                    key: "isSameMonth", value: function (e) {
                        return this && e && this.year() == this.year() && this.month() == e.month()
                    }
                }], [{
                    key: "rangeName", value: function () {
                        var e = t, a = e.calendarType;
                        return "fa" === e.localType ? "persian" === a ? y.persian : y.gregorian : "persian" === a ? f.persian : f.gregorian
                    }
                }, {
                    key: "toLeapYearMode", value: function (e) {
                        var a = t;
                        return a.leapYearMode = e, a
                    }
                }, {
                    key: "toCalendar", value: function (e) {
                        var a = t;
                        return a.calendarType = e, a
                    }
                }, {
                    key: "toLocale", value: function (e) {
                        var a = t;
                        return a.localType = e, "fa" !== a.localType ? a.formatPersian = !1 : a.formatPersian = "_default", a
                    }
                }, {
                    key: "isPersianDate", value: function (e) {
                        return e instanceof t
                    }
                }, {
                    key: "duration", value: function (e, t) {
                        return new h(e, t)
                    }
                }, {
                    key: "isDuration", value: function (e) {
                        return e instanceof h
                    }
                }, {
                    key: "unix", value: function (e) {
                        return e ? new t(1e3 * e) : (new t).unix()
                    }
                }, {
                    key: "getFirstWeekDayOfMonth", value: function (e, a) {
                        return new t([e, a, 1]).day()
                    }
                }, {
                    key: "utc", value: function (e) {
                        return e ? new t(e).utc() : (new t).utc()
                    }
                }, {
                    key: "isSameDay", value: function (e, t) {
                        return e && t && e.date() == t.date() && e.year() == t.year() && e.month() == t.month()
                    }
                }, {
                    key: "isSameMonth", value: function (e, t) {
                        return e && t && e.year() == t.year() && e.month() == t.month()
                    }
                }]), t
            }();
        e.exports = v
    }, function (e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var r = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t
            }
        }(), n = a(3), s = a(9), o = function () {
            function e(t) {
                i(this, e), this.parent = t, this.ASTRO = new n, this.State = new s, this.J0000 = 1721424.5, this.J1970 = 2440587.5, this.JMJD = 2400000.5, this.NormLeap = [!1, !0], this.GREGORIAN_EPOCH = 1721425.5, this.PERSIAN_EPOCH = 1948320.5
            }

            return r(e, [{
                key: "leap_gregorian", value: function (e) {
                    return e % 4 == 0 && !(e % 100 == 0 && e % 400 != 0)
                }
            }, {
                key: "gregorian_to_jd", value: function (e, t, a) {
                    return this.GREGORIAN_EPOCH - 1 + 365 * (e - 1) + Math.floor((e - 1) / 4) + -Math.floor((e - 1) / 100) + Math.floor((e - 1) / 400) + Math.floor((367 * t - 362) / 12 + (t <= 2 ? 0 : this.leap_gregorian(e) ? -1 : -2) + a)
                }
            }, {
                key: "jd_to_gregorian", value: function (e) {
                    var t = void 0, a = void 0, i = void 0, r = void 0, n = void 0, s = void 0, o = void 0, h = void 0,
                        u = void 0, d = void 0, l = void 0, c = void 0, y = void 0, f = void 0;
                    return t = Math.floor(e - .5) + .5, a = t - this.GREGORIAN_EPOCH, i = Math.floor(a / 146097), r = this.ASTRO.mod(a, 146097), n = Math.floor(r / 36524), s = this.ASTRO.mod(r, 36524), o = Math.floor(s / 1461), h = this.ASTRO.mod(s, 1461), u = Math.floor(h / 365), d = 400 * i + 100 * n + 4 * o + u, 4 !== n && 4 !== u && d++, l = t - this.gregorian_to_jd(d, 1, 1), c = t < this.gregorian_to_jd(d, 3, 1) ? 0 : this.leap_gregorian(d) ? 1 : 2, y = Math.floor((12 * (l + c) + 373) / 367), f = t - this.gregorian_to_jd(d, y, 1) + 1, [d, y, f]
                }
            }, {
                key: "tehran_equinox", value: function (e) {
                    var t = void 0, a = void 0, i = void 0, r = void 0;
                    return t = this.ASTRO.equinox(e, 0), a = t - this.ASTRO.deltat(e) / 86400, i = a + this.ASTRO.equationOfTime(t), r = 52.5 / 360, i + r
                }
            }, {
                key: "tehran_equinox_jd", value: function (e) {
                    var t = void 0;
                    return t = this.tehran_equinox(e), Math.floor(t)
                }
            }, {
                key: "persiana_year", value: function (e) {
                    var t = this.jd_to_gregorian(e)[0] - 2, a = void 0, i = void 0, r = void 0;
                    for (a = this.tehran_equinox_jd(t); a > e;) t--, a = this.tehran_equinox_jd(t);
                    for (i = a - 1; !(a <= e && e < i);) a = i, t++, i = this.tehran_equinox_jd(t);
                    return r = Math.round((a - this.PERSIAN_EPOCH) / this.ASTRO.TropicalYear) + 1, [r, a]
                }
            }, {
                key: "jd_to_persiana", value: function (e) {
                    var t = void 0, a = void 0, i = void 0, r = void 0, n = void 0, s = void 0;
                    return e = Math.floor(e) + .5, r = this.persiana_year(e), t = r[0], n = r[1], i = Math.floor((e - n) / 30) + 1, s = Math.floor(e) - this.persiana_to_jd(t, 1, 1) + 1, a = s <= 186 ? Math.ceil(s / 31) : Math.ceil((s - 6) / 30), i = Math.floor(e) - this.persiana_to_jd(t, a, 1) + 1, [t, a, i]
                }
            }, {
                key: "persiana_to_jd", value: function (e, t, a) {
                    var i = void 0, r = void 0, n = void 0;
                    for (n = this.PERSIAN_EPOCH - 1 + this.ASTRO.TropicalYear * (e - 1 - 1), i = [e - 1, 0]; i[0] < e;) i = this.persiana_year(n), n = i[1] + (this.ASTRO.TropicalYear + 2);
                    return r = i[1], r + (t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6) + (a - 1)
                }
            }, {
                key: "leap_persiana", value: function (e) {
                    return this.persiana_to_jd(e + 1, 1, 1) - this.persiana_to_jd(e, 1, 1) > 365
                }
            }, {
                key: "leap_persian", value: function (e) {
                    return 682 * ((e - (e > 0 ? 474 : 473)) % 2820 + 474 + 38) % 2816 < 682
                }
            }, {
                key: "persian_to_jd", value: function (e, t, a) {
                    var i = void 0, r = void 0;
                    return i = e - (e >= 0 ? 474 : 473), r = 474 + this.ASTRO.mod(i, 2820), a + (t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6) + Math.floor((682 * r - 110) / 2816) + 365 * (r - 1) + 1029983 * Math.floor(i / 2820) + (this.PERSIAN_EPOCH - 1)
                }
            }, {
                key: "jd_to_persian", value: function (e) {
                    var t = void 0, a = void 0, i = void 0, r = void 0, n = void 0, s = void 0, o = void 0, h = void 0,
                        u = void 0, d = void 0;
                    return e = Math.floor(e) + .5, r = e - this.persian_to_jd(475, 1, 1), n = Math.floor(r / 1029983), s = this.ASTRO.mod(r, 1029983), 1029982 === s ? o = 2820 : (h = Math.floor(s / 366), u = this.ASTRO.mod(s, 366), o = Math.floor((2134 * h + 2816 * u + 2815) / 1028522) + h + 1), t = o + 2820 * n + 474, t <= 0 && t--, d = e - this.persian_to_jd(t, 1, 1) + 1, a = d <= 186 ? Math.ceil(d / 31) : Math.ceil((d - 6) / 30), i = e - this.persian_to_jd(t, a, 1) + 1, [t, a, i]
                }
            }, {
                key: "gWeekDayToPersian", value: function (e) {
                    return e + 2 === 8 ? 1 : e + 2 === 7 ? 7 : e + 2
                }
            }, {
                key: "updateFromGregorian", value: function () {
                    var e = void 0, t = void 0, a = void 0, i = void 0, r = void 0, n = void 0, s = void 0, o = void 0,
                        h = void 0, u = void 0;
                    t = this.State.gregorian.year, a = this.State.gregorian.month, i = this.State.gregorian.day, r = 0, n = 0, s = 0, this.State.gDate = new Date(t, a, i, this.State.gregorian.hour, this.State.gregorian.minute, this.State.gregorian.second, this.State.gregorian.millisecond), !1 === this.parent._utcMode && (this.State.zone = this.State.gDate.getTimezoneOffset()), this.State.gregorian.year = this.State.gDate.getFullYear(), this.State.gregorian.month = this.State.gDate.getMonth(), this.State.gregorian.day = this.State.gDate.getDate(), e = this.gregorian_to_jd(t, a + 1, i) + Math.floor(s + 60 * (n + 60 * r) + .5) / 86400, this.State.julianday = e, this.State.modifiedjulianday = e - this.JMJD, o = this.ASTRO.jwday(e), this.State.gregorian.weekday = o + 1, this.State.gregorian.leap = this.NormLeap[this.leap_gregorian(t) ? 1 : 0], o = this.ASTRO.jwday(e), "persian" == this.parent.calendarType && "algorithmic" == this.parent.leapYearMode && (u = this.jd_to_persian(e), this.State.persian.year = u[0], this.State.persian.month = u[1] - 1, this.State.persian.day = u[2], this.State.persian.weekday = this.gWeekDayToPersian(o), this.State.persian.leap = this.NormLeap[this.leap_persian(u[0]) ? 1 : 0]), "persian" == this.parent.calendarType && "astronomical" == this.parent.leapYearMode && (u = this.jd_to_persiana(e), this.State.persianAstro.year = u[0], this.State.persianAstro.month = u[1] - 1, this.State.persianAstro.day = u[2], this.State.persianAstro.weekday = this.gWeekDayToPersian(o), this.State.persianAstro.leap = this.NormLeap[this.leap_persiana(u[0]) ? 1 : 0]), null !== this.State.gregserial.day && (this.State.gregserial.day = e - this.J0000), h = 864e5 * (e - this.J1970), this.State.unixtime = Math.round(h / 1e3)
                }
            }, {
                key: "calcGregorian", value: function (e) {
                    (e[0] || 0 === e[0]) && (this.State.gregorian.year = e[0]), (e[1] || 0 === e[1]) && (this.State.gregorian.month = e[1]), (e[2] || 0 === e[2]) && (this.State.gregorian.day = e[2]), (e[3] || 0 === e[3]) && (this.State.gregorian.hour = e[3]), (e[4] || 0 === e[4]) && (this.State.gregorian.minute = e[4]), (e[5] || 0 === e[5]) && (this.State.gregorian.second = e[5]), (e[6] || 0 === e[6]) && (this.State.gregorian.millisecond = e[6]), this.updateFromGregorian()
                }
            }, {
                key: "calcJulian", value: function () {
                    var e = void 0, t = void 0;
                    e = this.State.julianday, t = this.jd_to_gregorian(e), this.State.gregorian.year = t[0], this.State.gregorian.month = t[1] - 1, this.State.gregorian.day = t[2], this.updateFromGregorian()
                }
            }, {
                key: "setJulian", value: function (e) {
                    this.State.julianday = e, this.calcJulian()
                }
            }, {
                key: "calcPersian", value: function (e) {
                    (e[0] || 0 === e[0]) && (this.State.persian.year = e[0]), (e[1] || 0 === e[1]) && (this.State.persian.month = e[1]), (e[2] || 0 === e[2]) && (this.State.persian.day = e[2]), (e[3] || 0 === e[3]) && (this.State.gregorian.hour = e[3]), (e[4] || 0 === e[4]) && (this.State.gregorian.minute = e[4]), (e[5] || 0 === e[5]) && (this.State.gregorian.second = e[5]), (e[6] || 0 === e[6]) && (this.State.gregorian.millisecond = e[6]), this.setJulian(this.persian_to_jd(this.State.persian.year, this.State.persian.month, this.State.persian.day))
                }
            }, {
                key: "calcPersiana", value: function (e) {
                    (e[0] || 0 === e[0]) && (this.State.persianAstro.year = e[0]), (e[1] || 0 === e[1]) && (this.State.persianAstro.month = e[1]), (e[2] || 0 === e[2]) && (this.State.persianAstro.day = e[2]), (e[3] || 0 === e[3]) && (this.State.gregorian.hour = e[3]), (e[4] || 0 === e[4]) && (this.State.gregorian.minute = e[4]), (e[5] || 0 === e[5]) && (this.State.gregorian.second = e[5]), (e[6] || 0 === e[6]) && (this.State.gregorian.millisecond = e[6]), this.setJulian(this.persiana_to_jd(this.State.persianAstro.year, this.State.persianAstro.month, this.State.persianAstro.day + .5))
                }
            }]), e
        }();
        e.exports = o
    }, function (e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var r = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t
            }
        }(), n = function () {
            function e() {
                i(this, e), this.J2000 = 2451545, this.JulianCentury = 36525, this.JulianMillennium = 10 * this.JulianCentury, this.TropicalYear = 365.24219878, this.oterms = [-4680.93, -1.55, 1999.25, -51.38, -249.67, -39.05, 7.12, 27.87, 5.79, 2.45], this.nutArgMult = [0, 0, 0, 0, 1, -2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, -2, 1, 0, 2, 2, 0, 0, 0, 2, 1, 0, 0, 1, 2, 2, -2, -1, 0, 2, 2, -2, 0, 1, 0, 0, -2, 0, 0, 2, 1, 0, 0, -1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, -1, 2, 2, 0, 0, -1, 0, 1, 0, 0, 1, 2, 1, -2, 0, 2, 0, 0, 0, 0, -2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, -2, 0, 1, 2, 2, 0, 0, 0, 2, 0, -2, 0, 0, 2, 0, 0, 0, -1, 2, 1, 0, 2, 0, 0, 0, 2, 0, -1, 0, 1, -2, 2, 0, 2, 2, 0, 1, 0, 0, 1, -2, 0, 1, 0, 1, 0, -1, 0, 0, 1, 0, 0, 2, -2, 0, 2, 0, -1, 2, 1, 2, 0, 1, 2, 2, 0, 1, 0, 2, 2, -2, 1, 1, 0, 0, 0, -1, 0, 2, 2, 2, 0, 0, 2, 1, 2, 0, 1, 0, 0, -2, 0, 2, 2, 2, -2, 0, 1, 2, 1, 2, 0, -2, 0, 1, 2, 0, 0, 0, 1, 0, -1, 1, 0, 0, -2, -1, 0, 2, 1, -2, 0, 0, 0, 1, 0, 0, 2, 2, 1, -2, 0, 2, 0, 1, -2, 1, 0, 2, 1, 0, 0, 1, -2, 0, -1, 0, 1, 0, 0, -2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, -1, -1, 1, 0, 0, 0, 1, 1, 0, 0, 0, -1, 1, 2, 2, 2, -1, -1, 2, 2, 0, 0, -2, 2, 2, 0, 0, 3, 2, 2, 2, -1, 0, 2, 2], this.nutArgCoeff = [-171996, -1742, 92095, 89, -13187, -16, 5736, -31, -2274, -2, 977, -5, 2062, 2, -895, 5, 1426, -34, 54, -1, 712, 1, -7, 0, -517, 12, 224, -6, -386, -4, 200, 0, -301, 0, 129, -1, 217, -5, -95, 3, -158, 0, 0, 0, 129, 1, -70, 0, 123, 0, -53, 0, 63, 0, 0, 0, 63, 1, -33, 0, -59, 0, 26, 0, -58, -1, 32, 0, -51, 0, 27, 0, 48, 0, 0, 0, 46, 0, -24, 0, -38, 0, 16, 0, -31, 0, 13, 0, 29, 0, 0, 0, 29, 0, -12, 0, 26, 0, 0, 0, -22, 0, 0, 0, 21, 0, -10, 0, 17, -1, 0, 0, 16, 0, -8, 0, -16, 1, 7, 0, -15, 0, 9, 0, -13, 0, 7, 0, -12, 0, 6, 0, 11, 0, 0, 0, -10, 0, 5, 0, -8, 0, 3, 0, 7, 0, -3, 0, -7, 0, 0, 0, -7, 0, 3, 0, -7, 0, 3, 0, 6, 0, 0, 0, 6, 0, -3, 0, 6, 0, -3, 0, -6, 0, 3, 0, -6, 0, 3, 0, 5, 0, 0, 0, -5, 0, 3, 0, -5, 0, 3, 0, -5, 0, 3, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, -4, 0, 0, 0, -4, 0, 0, 0, -4, 0, 0, 0, 3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0], this.deltaTtab = [121, 112, 103, 95, 88, 82, 77, 72, 68, 63, 60, 56, 53, 51, 48, 46, 44, 42, 40, 38, 35, 33, 31, 29, 26, 24, 22, 20, 18, 16, 14, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 14, 13, 13.1, 12.5, 12.2, 12, 12, 12, 12, 12, 12, 11.9, 11.6, 11, 10.2, 9.2, 8.2, 7.1, 6.2, 5.6, 5.4, 5.3, 5.4, 5.6, 5.9, 6.2, 6.5, 6.8, 7.1, 7.3, 7.5, 7.6, 7.7, 7.3, 6.2, 5.2, 2.7, 1.4, -1.2, -2.8, -3.8, -4.8, -5.5, -5.3, -5.6, -5.7, -5.9, -6, -6.3, -6.5, -6.2, -4.7, -2.8, -.1, 2.6, 5.3, 7.7, 10.4, 13.3, 16, 18.2, 20.2, 21.1, 22.4, 23.5, 23.8, 24.3, 24, 23.9, 23.9, 23.7, 24, 24.3, 25.3, 26.2, 27.3, 28.2, 29.1, 30, 30.7, 31.4, 32.2, 33.1, 34, 35, 36.5, 38.3, 40.2, 42.2, 44.5, 46.5, 48.5, 50.5, 52.2, 53.8, 54.9, 55.8, 56.9, 58.3, 60, 61.6, 63, 65, 66.6], this.EquinoxpTerms = [485, 324.96, 1934.136, 203, 337.23, 32964.467, 199, 342.08, 20.186, 182, 27.85, 445267.112, 156, 73.14, 45036.886, 136, 171.52, 22518.443, 77, 222.54, 65928.934, 74, 296.72, 3034.906, 70, 243.58, 9037.513, 58, 119.81, 33718.147, 52, 297.17, 150.678, 50, 21.02, 2281.226, 45, 247.54, 29929.562, 44, 325.15, 31555.956, 29, 60.93, 4443.417, 18, 155.12, 67555.328, 17, 288.79, 4562.452, 16, 198.04, 62894.029, 14, 199.76, 31436.921, 12, 95.39, 14577.848, 12, 287.11, 31931.756, 12, 320.81, 34777.259, 9, 227.73, 1222.114, 8, 15.45, 16859.074], this.JDE0tab1000 = [new Array(1721139.29189, 365242.1374, .06134, .00111, -71e-5), new Array(1721233.25401, 365241.72562, -.05323, .00907, 25e-5), new Array(1721325.70455, 365242.49558, -.11677, -.00297, 74e-5), new Array(1721414.39987, 365242.88257, -.00769, -.00933, -6e-5)], this.JDE0tab2000 = [new Array(2451623.80984, 365242.37404, .05169, -.00411, -57e-5), new Array(2451716.56767, 365241.62603, .00325, .00888, -3e-4), new Array(2451810.21715, 365242.01767, -.11575, .00337, 78e-5), new Array(2451900.05952, 365242.74049, -.06223, -.00823, 32e-5)]
            }

            return r(e, [{
                key: "dtr", value: function (e) {
                    return e * Math.PI / 180
                }
            }, {
                key: "rtd", value: function (e) {
                    return 180 * e / Math.PI
                }
            }, {
                key: "fixangle", value: function (e) {
                    return e - 360 * Math.floor(e / 360)
                }
            }, {
                key: "fixangr", value: function (e) {
                    return e - 2 * Math.PI * Math.floor(e / (2 * Math.PI))
                }
            }, {
                key: "dsin", value: function (e) {
                    return Math.sin(this.dtr(e))
                }
            }, {
                key: "dcos", value: function (e) {
                    return Math.cos(this.dtr(e))
                }
            }, {
                key: "mod", value: function (e, t) {
                    return e - t * Math.floor(e / t)
                }
            }, {
                key: "jwday", value: function (e) {
                    return this.mod(Math.floor(e + 1.5), 7)
                }
            }, {
                key: "obliqeq", value: function (e) {
                    var t, a, i, r;
                    if (i = a = (e - this.J2000) / (100 * this.JulianCentury), t = 23.43929111111111, Math.abs(a) < 1) for (r = 0; r < 10; r++) t += this.oterms[r] / 3600 * i, i *= a;
                    return t
                }
            }, {
                key: "nutation", value: function (e) {
                    var t, a, i, r, n, s, o, h, u = (e - 2451545) / 36525, d = [], l = 0, c = 0;
                    for (s = u * (n = u * u), d[0] = this.dtr(297.850363 + 445267.11148 * u - .0019142 * n + s / 189474), d[1] = this.dtr(357.52772 + 35999.05034 * u - 1603e-7 * n - s / 3e5), d[2] = this.dtr(134.96298 + 477198.867398 * u + .0086972 * n + s / 56250), d[3] = this.dtr(93.27191 + 483202.017538 * u - .0036825 * n + s / 327270), d[4] = this.dtr(125.04452 - 1934.136261 * u + .0020708 * n + s / 45e4), i = 0; i < 5; i++) d[i] = this.fixangr(d[i]);
                    for (o = u / 10, i = 0; i < 63; i++) {
                        for (h = 0, r = 0; r < 5; r++) 0 !== this.nutArgMult[5 * i + r] && (h += this.nutArgMult[5 * i + r] * d[r]);
                        l += (this.nutArgCoeff[4 * i + 0] + this.nutArgCoeff[4 * i + 1] * o) * Math.sin(h), c += (this.nutArgCoeff[4 * i + 2] + this.nutArgCoeff[4 * i + 3] * o) * Math.cos(h)
                    }
                    return t = l / 36e6, a = c / 36e6, [t, a]
                }
            }, {
                key: "deltat", value: function (e) {
                    var t, a, i, r;
                    return e >= 1620 && e <= 2e3 ? (i = Math.floor((e - 1620) / 2), a = (e - 1620) / 2 - i, t = this.deltaTtab[i] + (this.deltaTtab[i + 1] - this.deltaTtab[i]) * a) : (r = (e - 2e3) / 100, e < 948 ? t = 2177 + 497 * r + 44.1 * r * r : (t = 102 + 102 * r + 25.3 * r * r, e > 2e3 && e < 2100 && (t += .37 * (e - 2100)))), t
                }
            }, {
                key: "equinox", value: function (e, t) {
                    var a = void 0, i = void 0, r = void 0, n = void 0, s = void 0, o = void 0, h = void 0, u = void 0,
                        d = void 0;
                    for (e < 1e3 ? (s = this.JDE0tab1000, d = e / 1e3) : (s = this.JDE0tab2000, d = (e - 2e3) / 1e3), n = s[t][0] + s[t][1] * d + s[t][2] * d * d + s[t][3] * d * d * d + s[t][4] * d * d * d * d, h = (n - 2451545) / 36525, u = 35999.373 * h - 2.47, a = 1 + .0334 * this.dcos(u) + 7e-4 * this.dcos(2 * u), o = 0, i = r = 0; i < 24; i++) o += this.EquinoxpTerms[r] * this.dcos(this.EquinoxpTerms[r + 1] + this.EquinoxpTerms[r + 2] * h), r += 3;
                    return n + 1e-5 * o / a
                }
            }, {
                key: "sunpos", value: function (e) {
                    var t = void 0, a = void 0, i = void 0, r = void 0, n = void 0, s = void 0, o = void 0, h = void 0,
                        u = void 0, d = void 0, l = void 0, c = void 0, y = void 0, f = void 0, v = void 0, m = void 0,
                        p = void 0;
                    return t = (e - this.J2000) / this.JulianCentury, a = t * t, i = 280.46646 + 36000.76983 * t + 3032e-7 * a, i = this.fixangle(i), r = 357.52911 + 35999.05029 * t + -1537e-7 * a, r = this.fixangle(r), n = .016708634 + -42037e-9 * t + -1.267e-7 * a, s = (1.914602 + -.004817 * t + -14e-6 * a) * this.dsin(r) + (.019993 - 101e-6 * t) * this.dsin(2 * r) + 289e-6 * this.dsin(3 * r), o = i + s, h = r + s, u = 1.000001018 * (1 - n * n) / (1 + n * this.dcos(h)), d = 125.04 - 1934.136 * t, l = o + -.00569 + -.00478 * this.dsin(d), y = this.obliqeq(e), c = y + .00256 * this.dcos(d), f = this.rtd(Math.atan2(this.dcos(y) * this.dsin(o), this.dcos(o))), f = this.fixangle(f), v = this.rtd(Math.asin(this.dsin(y) * this.dsin(o))), m = this.rtd(Math.atan2(this.dcos(c) * this.dsin(l), this.dcos(l))), m = this.fixangle(m), p = this.rtd(Math.asin(this.dsin(c) * this.dsin(l))), [i, r, n, s, o, h, u, l, f, v, m, p]
                }
            }, {
                key: "equationOfTime", value: function (e) {
                    var t = void 0, a = void 0, i = void 0, r = void 0, n = void 0, s = void 0;
                    return s = (e - this.J2000) / this.JulianMillennium, n = 280.4664567 + 360007.6982779 * s + .03032028 * s * s + s * s * s / 49931 + -s * s * s * s / 15300 + -s * s * s * s * s / 2e6, n = this.fixangle(n), t = this.sunpos(e)[10], a = this.nutation(e)[0], r = this.obliqeq(e) + this.nutation(e)[1], i = n + -.0057183 + -t + a * this.dcos(r), i -= 20 * Math.floor(i / 20), i /= 1440
                }
            }]), e
        }();
        e.exports = n
    }, function (e, t, a) {
        "use strict";
        e.exports = {
            durationUnit: {
                year: ["y", "years", "year"],
                month: ["M", "months", "month"],
                day: ["d", "days", "day"],
                hour: ["h", "hours", "hour"],
                minute: ["m", "minutes", "minute"],
                second: ["s", "second", "seconds"],
                millisecond: ["ms", "milliseconds", "millisecond"],
                week: ["W", "w", "weeks", "week"]
            }
        }
    }, function (e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var r = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t
            }
        }(), n = a(0), s = (new n).normalizeDuration, o = (new n).absRound, h = (new n).absFloor, u = function () {
            function e(t, a) {
                i(this, e);
                var r = {}, n = this._data = {}, u = 0, d = s(t, a);
                r[d.unit] = d.value, u = r.milliseconds || r.millisecond || r.ms || 0;
                var l = r.years || r.year || r.y || 0, c = r.months || r.month || r.M || 0,
                    y = r.weeks || r.w || r.week || 0, f = r.days || r.d || r.day || 0,
                    v = r.hours || r.hour || r.h || 0, m = r.minutes || r.minute || r.m || 0,
                    p = r.seconds || r.second || r.s || 0;
                return this._milliseconds = u + 1e3 * p + 6e4 * m + 36e5 * v, this._days = f + 7 * y, this._months = c + 12 * l, n.milliseconds = u % 1e3, p += h(u / 1e3), n.seconds = p % 60, m += o(p / 60), n.minutes = m % 60, v += o(m / 60), n.hours = v % 24, f += o(v / 24), f += 7 * y, n.days = f % 30, c += o(f / 30), n.months = c % 12, l += o(c / 12), n.years = l, this
            }

            return r(e, [{
                key: "valueOf", value: function () {
                    return this._milliseconds + 864e5 * this._days + 2592e6 * this._months
                }
            }]), e
        }();
        e.exports = u
    }, function (e, t, a) {
        "use strict";
        e.exports = {
            gregorian: {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
            },
            persian: {
                months: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                monthsShort: ["Far", "Ord", "Kho", "Tir", "Mor", "Sha", "Meh", "Aba", "Aza", "Dey", "Bah", "Esf"],
                weekdays: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                weekdaysShort: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
                weekdaysMin: ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"],
                persianDaysName: ["Urmazd", "Bahman", "Ordibehesht", "Shahrivar", "Sepandarmaz", "Khurdad", "Amordad", "Dey-be-azar", "Azar", "Aban", "Khorshid", "Mah", "Tir", "Gush", "Dey-be-mehr", "Mehr", "Sorush", "Rashn", "Farvardin", "Bahram", "Ram", "Bad", "Dey-be-din", "Din", "Ord", "Ashtad", "Asman", "Zamyad", "Mantre-sepand", "Anaram", "Ziadi"]
            }
        }
    }, function (e, t, a) {
        "use strict";
        e.exports = {
            gregorian: {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_")
            },
            persian: {
                months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                monthsShort: ["فرو", "ارد", "خرد", "تیر", "مرد", "شهر", "مهر", "آبا", "آذر", "دی", "بهم", "اسف"],
                weekdays: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهار شنبه", "پنج‌شنبه", "جمعه"],
                weekdaysShort: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
                weekdaysMin: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
                persianDaysName: ["اورمزد", "بهمن", "اوردیبهشت", "شهریور", "سپندارمذ", "خورداد", "امرداد", "دی به آذز", "آذز", "آبان", "خورشید", "ماه", "تیر", "گوش", "دی به مهر", "مهر", "سروش", "رشن", "فروردین", "بهرام", "رام", "باد", "دی به دین", "دین", "ارد", "اشتاد", "آسمان", "زامیاد", "مانتره سپند", "انارام", "زیادی"]
            }
        }
    }, function (e, t, a) {
        "use strict";
        var i = a(1);
        i.calendarType = "persian", i.leapYearMode = "astronomical", i.localType = "fa", e.exports = i
    }, function (e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var r = function e() {
            i(this, e), this.isInvalidDate = null, this.gDate = null, this.modifiedjulianday = 0, this.julianday = 0, this.gregserial = {day: 0}, this.zone = 0, this.gregorian = {
                year: 0,
                month: 0,
                day: 0,
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
                weekday: 0,
                unix: 0,
                leap: 0
            }, this.juliancalendar = {year: 0, month: 0, day: 0, leap: 0, weekday: 0}, this.islamic = {
                year: 0,
                month: 0,
                day: 0,
                leap: 0,
                weekday: 0
            }, this.persianAlgo = this.persian = {
                year: 0,
                month: 0,
                day: 0,
                leap: 0,
                weekday: 0
            }, this.persianAstro = {year: 0, month: 0, day: 0, leap: 0, weekday: 0}, this.isoweek = {
                year: 0,
                week: 0,
                day: 0
            }, this.isoday = {year: 0, day: 0}
        };
        e.exports = r
    }, function (e, t, a) {
        "use strict";
        e.exports = {
            isArray: function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, isNumber: function (e) {
                return "number" == typeof e
            }, isDate: function (e) {
                return e instanceof Date
            }
        }
    }, function (e, t, a) {
        "use strict";
        e.exports = {
            validateInputArray: function (e) {
                var t = !0;
                return (e[1] < 1 || e[1] > 12) && (t = !1), (e[2] < 1 || e[1] > 31) && (t = !1), (e[3] < 0 || e[3] > 24) && (t = !1), (e[4] < 0 || e[4] > 60) && (t = !1), (e[5] < 0 || e[5] > 60) && (t = !1), t
            }
        }
    }])
});
var FullCalendar = function (e) {
    "use strict";
    var t = function (e, n) {
        return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        })(e, n)
    };

    function n(e, n) {
        function r() {
            this.constructor = e
        }

        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }

    var r = function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function o() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e), o = 0;
        for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
        return r
    }

    var i, a, s, l, u, c, d = {}, p = [], f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function h(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function v(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function g(e, t, n) {
        var r, o, i, a = arguments, s = {};
        for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
        if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++) n.push(a[i]);
        if (null != n && (s.children = n), "function" == typeof e && null != e.defaultProps) for (i in e.defaultProps) void 0 === s[i] && (s[i] = e.defaultProps[i]);
        return m(e, s, r, o, null)
    }

    function m(e, t, n, r, o) {
        var a = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == o ? ++i.__v : o
        };
        return null != i.vnode && i.vnode(a), a
    }

    function y(e) {
        return e.children
    }

    function E(e, t) {
        this.props = e, this.context = t
    }

    function S(e, t) {
        if (null == t) return e.__ ? S(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? S(e) : null
    }

    function D(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break
            }
            return D(e)
        }
    }

    function b(e) {
        (!e.__d && (e.__d = !0) && a.push(e) && !C.__r++ || l !== i.debounceRendering) && ((l = i.debounceRendering) || s)(C)
    }

    function C() {
        for (var e; C.__r = a.length;) e = a.sort(function (e, t) {
            return e.__v.__b - t.__v.__b
        }), a = [], e.some(function (e) {
            var t, n, r, o, i, a, s;
            e.__d && (a = (i = (t = e).__v).__e, (s = t.__P) && (n = [], (r = h({}, i)).__v = i.__v + 1, o = I(s, i, r, t.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [a] : null, n, null == a ? S(i) : a, i.__h), P(n, i), o != a && D(i)))
        })
    }

    function w(e, t, n, r, o, i, a, s, l, u) {
        var c, f, h, g, E, D, b, C = r && r.__k || p, w = C.length;
        for (l == d && (l = null != a ? a[0] : w ? S(r, 0) : null), n.__k = [], c = 0; c < t.length; c++) if (null != (g = n.__k[c] = null == (g = t[c]) || "boolean" == typeof g ? null : "string" == typeof g || "number" == typeof g ? m(null, g, null, null, g) : Array.isArray(g) ? m(y, {children: g}, null, null, null) : null != g.__e || null != g.__c ? m(g.type, g.props, g.key, null, g.__v) : g)) {
            if (g.__ = n, g.__b = n.__b + 1, null === (h = C[c]) || h && g.key == h.key && g.type === h.type) C[c] = void 0; else for (f = 0; f < w; f++) {
                if ((h = C[f]) && g.key == h.key && g.type === h.type) {
                    C[f] = void 0;
                    break
                }
                h = null
            }
            E = I(e, g, h = h || d, o, i, a, s, l, u), (f = g.ref) && h.ref != f && (b || (b = []), h.ref && b.push(h.ref, null, g), b.push(f, g.__c || E, g)), null != E ? (null == D && (D = E), l = R(e, g, h, C, a, E, l), u || "option" != n.type ? "function" == typeof n.type && (n.__d = l) : e.value = "") : l && h.__e == l && l.parentNode != e && (l = S(h))
        }
        if (n.__e = D, null != a && "function" != typeof n.type) for (c = a.length; c--;) null != a[c] && v(a[c]);
        for (c = w; c--;) null != C[c] && O(C[c], C[c]);
        if (b) for (c = 0; c < b.length; c++) H(b[c], b[++c], b[++c])
    }

    function R(e, t, n, r, o, i, a) {
        var s, l, u;
        if (void 0 !== t.__d) s = t.__d, t.__d = void 0; else if (o == n || i != a || null == i.parentNode) e:if (null == a || a.parentNode !== e) e.appendChild(i), s = null; else {
            for (l = a, u = 0; (l = l.nextSibling) && u < r.length; u += 2) if (l == i) break e;
            e.insertBefore(i, a), s = a
        }
        return void 0 !== s ? s : i.nextSibling
    }

    function T(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || f.test(t) ? n : n + "px"
    }

    function k(e, t, n, r, o) {
        var i, a, s;
        if (o && "className" == t && (t = "class"), "style" === t) if ("string" == typeof n) e.style.cssText = n; else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) n && t in n || T(e.style, t, "");
            if (n) for (t in n) r && n[t] === r[t] || T(e.style, t, n[t])
        } else "o" === t[0] && "n" === t[1] ? (i = t !== (t = t.replace(/Capture$/, "")), (a = t.toLowerCase()) in e && (t = a), t = t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, s = i ? x : M, n ? r || e.addEventListener(t, s, i) : e.removeEventListener(t, s, i)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n))
    }

    function M(e) {
        this.l[e.type + !1](i.event ? i.event(e) : e)
    }

    function x(e) {
        this.l[e.type + !0](i.event ? i.event(e) : e)
    }

    function _(e, t, n) {
        var r, o;
        for (r = 0; r < e.__k.length; r++) (o = e.__k[r]) && (o.__ = e, o.__e && ("function" == typeof o.type && o.__k.length > 1 && _(o, t, n), t = R(n, o, o, e.__k, null, o.__e, t), "function" == typeof e.type && (e.__d = t)))
    }

    function I(e, t, n, r, o, a, s, l, u) {
        var c, d, p, f, v, g, m, S, D, b, C, R = t.type;
        if (void 0 !== t.constructor) return null;
        null != n.__h && (u = n.__h, l = t.__e = n.__e, t.__h = null, a = [l]), (c = i.__b) && c(t);
        try {
            e:if ("function" == typeof R) {
                if (S = t.props, D = (c = R.contextType) && r[c.__c], b = c ? D ? D.props.value : c.__ : r, n.__c ? m = (d = t.__c = n.__c).__ = d.__E : ("prototype" in R && R.prototype.render ? t.__c = d = new R(S, b) : (t.__c = d = new E(S, b), d.constructor = R, d.render = A), D && D.sub(d), d.props = S, d.state || (d.state = {}), d.context = b, d.__n = r, p = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != R.getDerivedStateFromProps && (d.__s == d.state && (d.__s = h({}, d.__s)), h(d.__s, R.getDerivedStateFromProps(S, d.__s))), f = d.props, v = d.state, p) null == R.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount); else {
                    if (null == R.getDerivedStateFromProps && S !== f && null != d.componentWillReceiveProps && d.componentWillReceiveProps(S, b), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(S, d.__s, b) || t.__v === n.__v) {
                        d.props = S, d.state = d.__s, t.__v !== n.__v && (d.__d = !1), d.__v = t, t.__e = n.__e, t.__k = n.__k, d.__h.length && s.push(d), _(t, l, e);
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(S, d.__s, b), null != d.componentDidUpdate && d.__h.push(function () {
                        d.componentDidUpdate(f, v, g)
                    })
                }
                d.context = b, d.props = S, d.state = d.__s, (c = i.__r) && c(t), d.__d = !1, d.__v = t, d.__P = e, c = d.render(d.props, d.state, d.context), d.state = d.__s, null != d.getChildContext && (r = h(h({}, r), d.getChildContext())), p || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(f, v)), C = null != c && c.type == y && null == c.key ? c.props.children : c, w(e, Array.isArray(C) ? C : [C], t, n, r, o, a, s, l, u), d.base = t.__e, t.__h = null, d.__h.length && s.push(d), m && (d.__E = d.__ = null), d.__e = !1
            } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = N(n.__e, t, n, r, o, a, s, u);
            (c = i.diffed) && c(t)
        } catch (e) {
            t.__v = null, (u || null != a) && (t.__e = l, t.__h = !!u, a[a.indexOf(l)] = null), i.__e(e, t, n)
        }
        return t.__e
    }

    function P(e, t) {
        i.__c && i.__c(t, e), e.some(function (t) {
            try {
                e = t.__h, t.__h = [], e.some(function (e) {
                    e.call(t)
                })
            } catch (e) {
                i.__e(e, t.__v)
            }
        })
    }

    function N(e, t, n, r, o, i, a, s) {
        var l, u, c, f, h, v = n.props, g = t.props;
        if (o = "svg" === t.type || o, null != i) for (l = 0; l < i.length; l++) if (null != (u = i[l]) && ((null === t.type ? 3 === u.nodeType : u.localName === t.type) || e == u)) {
            e = u, i[l] = null;
            break
        }
        if (null == e) {
            if (null === t.type) return document.createTextNode(g);
            e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, g.is && {is: g.is}), i = null, s = !1
        }
        if (null === t.type) v === g || s && e.data === g || (e.data = g); else {
            if (null != i && (i = p.slice.call(e.childNodes)), c = (v = n.props || d).dangerouslySetInnerHTML, f = g.dangerouslySetInnerHTML, !s) {
                if (null != i) for (v = {}, h = 0; h < e.attributes.length; h++) v[e.attributes[h].name] = e.attributes[h].value;
                (f || c) && (f && (c && f.__html == c.__html || f.__html === e.innerHTML) || (e.innerHTML = f && f.__html || ""))
            }
            (function (e, t, n, r, o) {
                var i;
                for (i in n) "children" === i || "key" === i || i in t || k(e, i, null, n[i], r);
                for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || k(e, i, t[i], n[i], r)
            })(e, g, v, o, s), f ? t.__k = [] : (l = t.props.children, w(e, Array.isArray(l) ? l : [l], t, n, r, "foreignObject" !== t.type && o, i, a, d, s)), s || ("value" in g && void 0 !== (l = g.value) && (l !== e.value || "progress" === t.type && !l) && k(e, "value", l, v.value, !1), "checked" in g && void 0 !== (l = g.checked) && l !== e.checked && k(e, "checked", l, v.checked, !1))
        }
        return e
    }

    function H(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            i.__e(e, n)
        }
    }

    function O(e, t, n) {
        var r, o, a;
        if (i.unmount && i.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || H(r, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.__d = void 0, null != (r = e.__c)) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount()
            } catch (e) {
                i.__e(e, t)
            }
            r.base = r.__P = null
        }
        if (r = e.__k) for (a = 0; a < r.length; a++) r[a] && O(r[a], t, n);
        null != o && v(o)
    }

    function A(e, t, n) {
        return this.constructor(e, n)
    }

    function U(e, t, n) {
        var r, o, a;
        i.__ && i.__(e, t), o = (r = n === u) ? null : n && n.__k || t.__k, e = g(y, null, [e]), a = [], I(t, (r ? t : n || t).__k = e, o || d, d, void 0 !== t.ownerSVGElement, n && !r ? [n] : o ? null : t.childNodes.length ? p.slice.call(t.childNodes) : null, a, n || d, r), P(a, e)
    }

    i = {
        __e: function (e, t) {
            for (var n, r, o, i = t.__h; t = t.__;) if ((n = t.__c) && !n.__) try {
                if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return t.__h = i, n.__E = n
            } catch (t) {
                e = t
            }
            throw e
        }, __v: 0
    }, E.prototype.setState = function (e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof e && (e = e(h({}, n), this.props)), e && h(n, e), null != e && this.__v && (t && this.__h.push(t), b(this))
    }, E.prototype.forceUpdate = function (e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), b(this))
    }, E.prototype.render = y, a = [], s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, C.__r = 0, u = d, c = 0;
    var L = "undefined" != typeof globalThis ? globalThis : window;
    L.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : L.FullCalendarVDom = {
        Component: E, createElement: g, render: U, createRef: function () {
            return {current: null}
        }, Fragment: y, createContext: function (e) {
            var t = (r = e, i = {
                __c: o = "__cC" + c++, __: r, Consumer: function (e, t) {
                    return e.children(t)
                }, Provider: function (e, t, n) {
                    return this.getChildContext || (t = [], (n = {})[o] = this, this.getChildContext = function () {
                        return n
                    }, this.shouldComponentUpdate = function (e) {
                        this.props.value !== e.value && t.some(b)
                    }, this.sub = function (e) {
                        t.push(e);
                        var n = e.componentWillUnmount;
                        e.componentWillUnmount = function () {
                            t.splice(t.indexOf(e), 1), n && n.call(e)
                        }
                    }), e.children
                }
            }, i.Provider.__ = i.Consumer.contextType = i), n = t.Provider;
            var r, o, i;
            return t.Provider = function () {
                var e = this, t = !this.getChildContext, r = n.apply(this, arguments);
                if (t) {
                    var o = [];
                    this.shouldComponentUpdate = function (t) {
                        e.props.value !== t.value && o.forEach(function (e) {
                            e.context = t.value, e.forceUpdate()
                        })
                    }, this.sub = function (e) {
                        o.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function () {
                            o.splice(o.indexOf(e), 1), t && t.call(e)
                        }
                    }
                }
                return r
            }, t
        }, flushToDom: function () {
            var e = i.debounceRendering, t = [];
            i.debounceRendering = function (e) {
                t.push(e)
            }, U(g(W, {}), document.createElement("div"));
            for (; t.length;) t.shift()();
            i.debounceRendering = e
        }, unmountComponentAtNode: function (e) {
            U(null, e)
        }
    };
    var W = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            return g("div", {})
        }, t.prototype.componentDidMount = function () {
            this.setState({})
        }, t
    }(E);
    var V = function () {
        function e(e, t) {
            this.context = e, this.internalEventSource = t
        }

        return e.prototype.remove = function () {
            this.context.dispatch({type: "REMOVE_EVENT_SOURCE", sourceId: this.internalEventSource.sourceId})
        }, e.prototype.refetch = function () {
            this.context.dispatch({type: "FETCH_EVENT_SOURCES", sourceIds: [this.internalEventSource.sourceId]})
        }, Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this.internalEventSource.publicId
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "url", {
            get: function () {
                return this.internalEventSource.meta.url
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "format", {
            get: function () {
                return this.internalEventSource.meta.format
            }, enumerable: !1, configurable: !0
        }), e
    }();

    function F(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function z(e, t) {
        if (e.closest) return e.closest(t);
        if (!document.documentElement.contains(e)) return null;
        do {
            if (B(e, t)) return e;
            e = e.parentElement || e.parentNode
        } while (null !== e && 1 === e.nodeType);
        return null
    }

    function B(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t)
    }

    function j(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1) for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1) r.push(i[a]);
        return r
    }

    var G = /(top|left|right|bottom|width|height)$/i;

    function q(e, t) {
        for (var n in t) Y(e, n, t[n])
    }

    function Y(e, t, n) {
        null == n ? e.style[t] = "" : "number" == typeof n && G.test(t) ? e.style[t] = n + "px" : e.style[t] = n
    }

    function Z(e) {
        e.preventDefault()
    }

    function X(e, t) {
        return function (n) {
            var r = z(n.target, e);
            r && t.call(r, n, r)
        }
    }

    function K(e, t, n, r) {
        var o = X(n, r);
        return e.addEventListener(t, o), function () {
            e.removeEventListener(t, o)
        }
    }

    var J = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];

    function $(e, t) {
        var n = function (r) {
            t(r), J.forEach(function (t) {
                e.removeEventListener(t, n)
            })
        };
        J.forEach(function (t) {
            e.addEventListener(t, n)
        })
    }

    var Q = 0;

    function ee() {
        return String(Q += 1)
    }

    function te() {
        document.body.classList.add("fc-not-allowed")
    }

    function ne() {
        document.body.classList.remove("fc-not-allowed")
    }

    function re(e) {
        e.classList.add("fc-unselectable"), e.addEventListener("selectstart", Z)
    }

    function oe(e) {
        e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", Z)
    }

    function ie(e) {
        e.addEventListener("contextmenu", Z)
    }

    function ae(e) {
        e.removeEventListener("contextmenu", Z)
    }

    function se(e) {
        var t, n, r = [], o = [];
        for ("string" == typeof e ? o = e.split(/\s*,\s*/) : "function" == typeof e ? o = [e] : Array.isArray(e) && (o = e), t = 0; t < o.length; t += 1) "string" == typeof (n = o[t]) ? r.push("-" === n.charAt(0) ? {
            field: n.substring(1),
            order: -1
        } : {field: n, order: 1}) : "function" == typeof n && r.push({func: n});
        return r
    }

    function le(e, t, n) {
        var r, o;
        for (r = 0; r < n.length; r += 1) if (o = ue(e, t, n[r])) return o;
        return 0
    }

    function ue(e, t, n) {
        return n.func ? n.func(e, t) : ce(e[n.field], t[n.field]) * (n.order || 1)
    }

    function ce(e, t) {
        return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0
    }

    function de(e, t) {
        var n = String(e);
        return "000".substr(0, t - n.length) + n
    }

    function pe(e, t) {
        return e - t
    }

    function fe(e) {
        return e % 1 == 0
    }

    function he(e) {
        var t = e.querySelector(".fc-scrollgrid-shrink-frame"), n = e.querySelector(".fc-scrollgrid-shrink-cushion");
        if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
        if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
        return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width
    }

    var ve = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    function ge(e, t) {
        var n = xe(e);
        return n[2] += 7 * t, _e(n)
    }

    function me(e, t) {
        var n = xe(e);
        return n[2] += t, _e(n)
    }

    function ye(e, t) {
        var n = xe(e);
        return n[6] += t, _e(n)
    }

    function Ee(e, t) {
        return Se(e, t) / 7
    }

    function Se(e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5
    }

    function De(e, t) {
        var n = we(e), r = we(t);
        return {
            years: 0,
            months: 0,
            days: Math.round(Se(n, r)),
            milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
        }
    }

    function be(e, t) {
        var n = Ce(e, t);
        return null !== n && n % 7 == 0 ? n / 7 : null
    }

    function Ce(e, t) {
        return Pe(e) === Pe(t) ? Math.round(Se(e, t)) : null
    }

    function we(e) {
        return _e([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()])
    }

    function Re(e, t, n, r) {
        var o = _e([t, 0, 1 + Te(t, n, r)]), i = we(e), a = Math.round(Se(o, i));
        return Math.floor(a / 7) + 1
    }

    function Te(e, t, n) {
        var r = 7 + t - n;
        return -((7 + _e([e, 0, r]).getUTCDay() - t) % 7) + r - 1
    }

    function ke(e) {
        return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()]
    }

    function Me(e) {
        return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0)
    }

    function xe(e) {
        return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()]
    }

    function _e(e) {
        return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e))
    }

    function Ie(e) {
        return !isNaN(e.valueOf())
    }

    function Pe(e) {
        return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds()
    }

    function Ne(e, t, n, r) {
        return {
            instanceId: ee(),
            defId: e,
            range: t,
            forcedStartTzo: null == n ? null : n,
            forcedEndTzo: null == r ? null : r
        }
    }

    var He = Object.prototype.hasOwnProperty;

    function Oe(e, t) {
        var n = {};
        if (t) for (var r in t) {
            for (var o = [], i = e.length - 1; i >= 0; i -= 1) {
                var a = e[i][r];
                if ("object" == typeof a && a) o.unshift(a); else if (void 0 !== a) {
                    n[r] = a;
                    break
                }
            }
            o.length && (n[r] = Oe(o))
        }
        for (i = e.length - 1; i >= 0; i -= 1) {
            var s = e[i];
            for (var l in s) l in n || (n[l] = s[l])
        }
        return n
    }

    function Ae(e, t) {
        var n = {};
        for (var r in e) t(e[r], r) && (n[r] = e[r]);
        return n
    }

    function Ue(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
    }

    function Le(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
            t[r[n]] = !0
        }
        return t
    }

    function We(e) {
        var t = [];
        for (var n in e) t.push(e[n]);
        return t
    }

    function Ve(e, t) {
        if (e === t) return !0;
        for (var n in e) if (He.call(e, n) && !(n in t)) return !1;
        for (var n in t) if (He.call(t, n) && e[n] !== t[n]) return !1;
        return !0
    }

    function Fe(e, t) {
        var n = [];
        for (var r in e) He.call(e, r) && (r in t || n.push(r));
        for (var r in t) He.call(t, r) && e[r] !== t[r] && n.push(r);
        return n
    }

    function ze(e, t, n) {
        if (void 0 === n && (n = {}), e === t) return !0;
        for (var r in t) if (!(r in e && Be(e[r], t[r], n[r]))) return !1;
        for (var r in e) if (!(r in t)) return !1;
        return !0
    }

    function Be(e, t, n) {
        return e === t || !0 === n || !!n && n(e, t)
    }

    function je(e, t, n, r) {
        void 0 === t && (t = 0), void 0 === r && (r = 1);
        var o = [];
        null == n && (n = Object.keys(e).length);
        for (var i = t; i < n; i += r) {
            var a = e[i];
            void 0 !== a && o.push(a)
        }
        return o
    }

    function Ge(e, t, n) {
        var r = n.dateEnv, o = n.pluginHooks, i = n.options, a = e.defs, s = e.instances;
        for (var l in s = Ae(s, function (e) {
            return !a[e.defId].recurringDef
        }), a) {
            var u = a[l];
            if (u.recurringDef) {
                var c = u.recurringDef.duration;
                c || (c = u.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);
                for (var d = 0, p = qe(u, c, t, r, o.recurringTypes); d < p.length; d++) {
                    var f = p[d], h = Ne(l, {start: f, end: r.add(f, c)});
                    s[h.instanceId] = h
                }
            }
        }
        return {defs: a, instances: s}
    }

    function qe(e, t, n, r, o) {
        var i = o[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
            start: r.subtract(n.start, t),
            end: n.end
        }, r);
        return e.allDay && (i = i.map(we)), i
    }

    var Ye = ["years", "months", "days", "milliseconds"],
        Ze = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;

    function Xe(e, t) {
        var n;
        return "string" == typeof e ? function (e) {
            var t = Ze.exec(e);
            if (t) {
                var n = t[1] ? -1 : 1;
                return {
                    years: 0,
                    months: 0,
                    days: n * (t[2] ? parseInt(t[2], 10) : 0),
                    milliseconds: n * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
                }
            }
            return null
        }(e) : "object" == typeof e && e ? Ke(e) : "number" == typeof e ? Ke(((n = {})[t || "milliseconds"] = e, n)) : null
    }

    function Ke(e) {
        var t = {
            years: e.years || e.year || 0,
            months: e.months || e.month || 0,
            days: e.days || e.day || 0,
            milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
        }, n = e.weeks || e.week;
        return n && (t.days += 7 * n, t.specifiedWeeks = !0), t
    }

    function Je(e, t) {
        return {
            years: e.years + t.years,
            months: e.months + t.months,
            days: e.days + t.days,
            milliseconds: e.milliseconds + t.milliseconds
        }
    }

    function $e(e, t) {
        return {years: e.years * t, months: e.months * t, days: e.days * t, milliseconds: e.milliseconds * t}
    }

    function Qe(e) {
        return et(e) / 864e5
    }

    function et(e) {
        return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
    }

    function tt(e, t) {
        for (var n = null, r = 0; r < Ye.length; r += 1) {
            var o = Ye[r];
            if (t[o]) {
                var i = e[o] / t[o];
                if (!fe(i) || null !== n && n !== i) return null;
                n = i
            } else if (e[o]) return null
        }
        return n
    }

    function nt(e) {
        var t = e.milliseconds;
        if (t) {
            if (t % 1e3 != 0) return {unit: "millisecond", value: t};
            if (t % 6e4 != 0) return {unit: "second", value: t / 1e3};
            if (t % 36e5 != 0) return {unit: "minute", value: t / 6e4};
            if (t) return {unit: "hour", value: t / 36e5}
        }
        return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {unit: "week", value: e.days / 7} : {
            unit: "day",
            value: e.days
        } : e.months ? {unit: "month", value: e.months} : e.years ? {
            unit: "year",
            value: e.years
        } : {unit: "millisecond", value: 0}
    }

    function rt(e) {
        return e.toISOString().replace(/T.*$/, "")
    }

    function ot(e) {
        return de(e.getUTCHours(), 2) + ":" + de(e.getUTCMinutes(), 2) + ":" + de(e.getUTCSeconds(), 2)
    }

    function it(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = Math.round(r % 60);
        return t ? n + de(o, 2) + ":" + de(i, 2) : "GMT" + n + o + (i ? ":" + de(i, 2) : "")
    }

    function at(e, t, n) {
        if (e === t) return !0;
        var r, o = e.length;
        if (o !== t.length) return !1;
        for (r = 0; r < o; r += 1) if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
        return !0
    }

    function st(e, t, n) {
        var r, o;
        return function () {
            for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
            if (r) {
                if (!at(r, i)) {
                    n && n(o);
                    var s = e.apply(this, i);
                    t && t(s, o) || (o = s)
                }
            } else o = e.apply(this, i);
            return r = i, o
        }
    }

    function lt(e, t, n) {
        var r, o, i = this;
        return function (a) {
            if (r) {
                if (!Ve(r, a)) {
                    n && n(o);
                    var s = e.call(i, a);
                    t && t(s, o) || (o = s)
                }
            } else o = e.call(i, a);
            return r = a, o
        }
    }

    var ut = {week: 3, separator: 0, omitZeroMinute: 0, meridiem: 0, omitCommas: 0},
        ct = {timeZoneName: 7, era: 6, year: 5, month: 4, day: 2, weekday: 2, hour: 1, minute: 1, second: 1},
        dt = /\s*([ap])\.?m\.?/i, pt = /,/g, ft = /\s+/g, ht = /\u200e/g, vt = /UTC|GMT/, gt = function () {
            function e(e) {
                var t = {}, n = {}, r = 0;
                for (var o in e) o in ut ? (n[o] = e[o], r = Math.max(ut[o], r)) : (t[o] = e[o], o in ct && (r = Math.max(ct[o], r)));
                this.standardDateProps = t, this.extendedSettings = n, this.severity = r, this.buildFormattingFunc = st(mt)
            }

            return e.prototype.format = function (e, t) {
                return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e)
            }, e.prototype.formatRange = function (e, t, n, r) {
                var o = this.standardDateProps, i = this.extendedSettings, a = function (e, t, n) {
                    if (n.getMarkerYear(e) !== n.getMarkerYear(t)) return 5;
                    if (n.getMarkerMonth(e) !== n.getMarkerMonth(t)) return 4;
                    if (n.getMarkerDay(e) !== n.getMarkerDay(t)) return 2;
                    if (Pe(e) !== Pe(t)) return 1;
                    return 0
                }(e.marker, t.marker, n.calendarSystem);
                if (!a) return this.format(e, n);
                var s = a;
                !(s > 1) || "numeric" !== o.year && "2-digit" !== o.year || "numeric" !== o.month && "2-digit" !== o.month || "numeric" !== o.day && "2-digit" !== o.day || (s = 1);
                var l = this.format(e, n), u = this.format(t, n);
                if (l === u) return l;
                var c = mt(function (e, t) {
                    var n = {};
                    for (var r in e) r in ct && !(ct[r] <= t) || (n[r] = e[r]);
                    return n
                }(o, s), i, n), d = c(e), p = c(t), f = function (e, t, n, r) {
                    var o = 0;
                    for (; o < e.length;) {
                        var i = e.indexOf(t, o);
                        if (-1 === i) break;
                        var a = e.substr(0, i);
                        o = i + t.length;
                        for (var s = e.substr(o), l = 0; l < n.length;) {
                            var u = n.indexOf(r, l);
                            if (-1 === u) break;
                            var c = n.substr(0, u);
                            l = u + r.length;
                            var d = n.substr(l);
                            if (a === c && s === d) return {before: a, after: s}
                        }
                    }
                    return null
                }(l, d, u, p), h = i.separator || r || n.defaultSeparator || "";
                return f ? f.before + d + h + p + f.after : l + h + u
            }, e.prototype.getLargestUnit = function () {
                switch (this.severity) {
                    case 7:
                    case 6:
                    case 5:
                        return "year";
                    case 4:
                        return "month";
                    case 3:
                        return "week";
                    case 2:
                        return "day";
                    default:
                        return "time"
                }
            }, e
        }();

    function mt(e, t, n) {
        var o = Object.keys(e).length;
        return 1 === o && "short" === e.timeZoneName ? function (e) {
            return it(e.timeZoneOffset)
        } : 0 === o && t.week ? function (e) {
            return function (e, t, n, r) {
                var o = [];
                "narrow" === r ? o.push(t) : "short" === r && o.push(t, " ");
                o.push(n.simpleNumberFormat.format(e)), "rtl" === n.options.direction && o.reverse();
                return o.join("")
            }(n.computeWeekNumber(e.marker), n.weekText, n.locale, t.week)
        } : function (e, t, n) {
            e = r({}, e), t = r({}, t), function (e, t) {
                e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit"));
                "long" === e.timeZoneName && (e.timeZoneName = "short");
                t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute
            }(e, t), e.timeZone = "UTC";
            var o, i = new Intl.DateTimeFormat(n.locale.codes, e);
            if (t.omitZeroMinute) {
                var a = r({}, e);
                delete a.minute, o = new Intl.DateTimeFormat(n.locale.codes, a)
            }
            return function (r) {
                var a = r.marker, s = (o && !a.getUTCMinutes() ? o : i).format(a);
                return function (e, t, n, r, o) {
                    e = e.replace(ht, ""), "short" === n.timeZoneName && (e = function (e, t) {
                        var n = !1;
                        e = e.replace(vt, function () {
                            return n = !0, t
                        }), n || (e += " " + t);
                        return e
                    }(e, "UTC" === o.timeZone || null == t.timeZoneOffset ? "UTC" : it(t.timeZoneOffset)));
                    r.omitCommas && (e = e.replace(pt, "").trim());
                    r.omitZeroMinute && (e = e.replace(":00", ""));
                    !1 === r.meridiem ? e = e.replace(dt, "").trim() : "narrow" === r.meridiem ? e = e.replace(dt, function (e, t) {
                        return t.toLocaleLowerCase()
                    }) : "short" === r.meridiem ? e = e.replace(dt, function (e, t) {
                        return t.toLocaleLowerCase() + "m"
                    }) : "lowercase" === r.meridiem && (e = e.replace(dt, function (e) {
                        return e.toLocaleLowerCase()
                    }));
                    return e = (e = e.replace(ft, " ")).trim()
                }(s, r, e, t, n)
            }
        }(e, t, n)
    }

    function yt(e, t) {
        var n = t.markerToArray(e.marker);
        return {
            marker: e.marker,
            timeZoneOffset: e.timeZoneOffset,
            array: n,
            year: n[0],
            month: n[1],
            day: n[2],
            hour: n[3],
            minute: n[4],
            second: n[5],
            millisecond: n[6]
        }
    }

    function Et(e, t, n, r) {
        var o = yt(e, n.calendarSystem);
        return {
            date: o,
            start: o,
            end: t ? yt(t, n.calendarSystem) : null,
            timeZone: n.timeZone,
            localeCodes: n.locale.codes,
            defaultSeparator: r || n.defaultSeparator
        }
    }

    var St = function () {
        function e(e) {
            this.cmdStr = e
        }

        return e.prototype.format = function (e, t, n) {
            return t.cmdFormatter(this.cmdStr, Et(e, null, t, n))
        }, e.prototype.formatRange = function (e, t, n, r) {
            return n.cmdFormatter(this.cmdStr, Et(e, t, n, r))
        }, e
    }(), Dt = function () {
        function e(e) {
            this.func = e
        }

        return e.prototype.format = function (e, t, n) {
            return this.func(Et(e, null, t, n))
        }, e.prototype.formatRange = function (e, t, n, r) {
            return this.func(Et(e, t, n, r))
        }, e
    }();

    function bt(e) {
        return "object" == typeof e && e ? new gt(e) : "string" == typeof e ? new St(e) : "function" == typeof e ? new Dt(e) : null
    }

    var Ct = {
            navLinkDayClick: Pt,
            navLinkWeekClick: Pt,
            duration: Xe,
            bootstrapFontAwesome: Pt,
            buttonIcons: Pt,
            customButtons: Pt,
            defaultAllDayEventDuration: Xe,
            defaultTimedEventDuration: Xe,
            nextDayThreshold: Xe,
            scrollTime: Xe,
            slotMinTime: Xe,
            slotMaxTime: Xe,
            dayPopoverFormat: bt,
            slotDuration: Xe,
            snapDuration: Xe,
            headerToolbar: Pt,
            footerToolbar: Pt,
            defaultRangeSeparator: String,
            titleRangeSeparator: String,
            forceEventDuration: Boolean,
            dayHeaders: Boolean,
            dayHeaderFormat: bt,
            dayHeaderClassNames: Pt,
            dayHeaderContent: Pt,
            dayHeaderDidMount: Pt,
            dayHeaderWillUnmount: Pt,
            dayCellClassNames: Pt,
            dayCellContent: Pt,
            dayCellDidMount: Pt,
            dayCellWillUnmount: Pt,
            initialView: String,
            aspectRatio: Number,
            weekends: Boolean,
            weekNumberCalculation: Pt,
            weekNumbers: Boolean,
            weekNumberClassNames: Pt,
            weekNumberContent: Pt,
            weekNumberDidMount: Pt,
            weekNumberWillUnmount: Pt,
            editable: Boolean,
            viewClassNames: Pt,
            viewDidMount: Pt,
            viewWillUnmount: Pt,
            nowIndicator: Boolean,
            nowIndicatorClassNames: Pt,
            nowIndicatorContent: Pt,
            nowIndicatorDidMount: Pt,
            nowIndicatorWillUnmount: Pt,
            showNonCurrentDates: Boolean,
            lazyFetching: Boolean,
            startParam: String,
            endParam: String,
            timeZoneParam: String,
            timeZone: String,
            locales: Pt,
            locale: Pt,
            themeSystem: String,
            dragRevertDuration: Number,
            dragScroll: Boolean,
            allDayMaintainDuration: Boolean,
            unselectAuto: Boolean,
            dropAccept: Pt,
            eventOrder: se,
            handleWindowResize: Boolean,
            windowResizeDelay: Number,
            longPressDelay: Number,
            eventDragMinDistance: Number,
            expandRows: Boolean,
            height: Pt,
            contentHeight: Pt,
            direction: String,
            weekNumberFormat: bt,
            eventResizableFromStart: Boolean,
            displayEventTime: Boolean,
            displayEventEnd: Boolean,
            weekText: String,
            progressiveEventRendering: Boolean,
            businessHours: Pt,
            initialDate: Pt,
            now: Pt,
            eventDataTransform: Pt,
            stickyHeaderDates: Pt,
            stickyFooterScrollbar: Pt,
            viewHeight: Pt,
            defaultAllDay: Boolean,
            eventSourceFailure: Pt,
            eventSourceSuccess: Pt,
            eventDisplay: String,
            eventStartEditable: Boolean,
            eventDurationEditable: Boolean,
            eventOverlap: Pt,
            eventConstraint: Pt,
            eventAllow: Pt,
            eventBackgroundColor: String,
            eventBorderColor: String,
            eventTextColor: String,
            eventColor: String,
            eventClassNames: Pt,
            eventContent: Pt,
            eventDidMount: Pt,
            eventWillUnmount: Pt,
            selectConstraint: Pt,
            selectOverlap: Pt,
            selectAllow: Pt,
            droppable: Boolean,
            unselectCancel: String,
            slotLabelFormat: Pt,
            slotLaneClassNames: Pt,
            slotLaneContent: Pt,
            slotLaneDidMount: Pt,
            slotLaneWillUnmount: Pt,
            slotLabelClassNames: Pt,
            slotLabelContent: Pt,
            slotLabelDidMount: Pt,
            slotLabelWillUnmount: Pt,
            dayMaxEvents: Pt,
            dayMaxEventRows: Pt,
            dayMinWidth: Number,
            slotLabelInterval: Xe,
            allDayText: String,
            allDayClassNames: Pt,
            allDayContent: Pt,
            allDayDidMount: Pt,
            allDayWillUnmount: Pt,
            slotMinWidth: Number,
            navLinks: Boolean,
            eventTimeFormat: bt,
            rerenderDelay: Number,
            moreLinkText: Pt,
            selectMinDistance: Number,
            selectable: Boolean,
            selectLongPressDelay: Number,
            eventLongPressDelay: Number,
            selectMirror: Boolean,
            eventMinHeight: Number,
            slotEventOverlap: Boolean,
            plugins: Pt,
            firstDay: Number,
            dayCount: Number,
            dateAlignment: String,
            dateIncrement: Xe,
            hiddenDays: Pt,
            monthMode: Boolean,
            fixedWeekCount: Boolean,
            validRange: Pt,
            visibleRange: Pt,
            titleFormat: Pt,
            noEventsText: String
        }, wt = {
            eventDisplay: "auto",
            defaultRangeSeparator: " - ",
            titleRangeSeparator: " – ",
            defaultTimedEventDuration: "01:00:00",
            defaultAllDayEventDuration: {day: 1},
            forceEventDuration: !1,
            nextDayThreshold: "00:00:00",
            dayHeaders: !0,
            initialView: "",
            aspectRatio: 1.35,
            headerToolbar: {start: "title", center: "", end: "today prev,next"},
            weekends: !0,
            weekNumbers: !1,
            weekNumberCalculation: "local",
            editable: !1,
            nowIndicator: !1,
            scrollTime: "06:00:00",
            slotMinTime: "00:00:00",
            slotMaxTime: "24:00:00",
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            timeZoneParam: "timeZone",
            timeZone: "local",
            locales: [],
            locale: "",
            themeSystem: "standard",
            dragRevertDuration: 500,
            dragScroll: !0,
            allDayMaintainDuration: !1,
            unselectAuto: !0,
            dropAccept: "*",
            eventOrder: "start,-duration,allDay,title",
            dayPopoverFormat: {month: "long", day: "numeric", year: "numeric"},
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3,
            eventDragMinDistance: 5,
            expandRows: !1,
            navLinks: !1,
            selectable: !1
        }, Rt = {
            datesSet: Pt,
            eventsSet: Pt,
            eventAdd: Pt,
            eventChange: Pt,
            eventRemove: Pt,
            windowResize: Pt,
            eventClick: Pt,
            eventMouseEnter: Pt,
            eventMouseLeave: Pt,
            select: Pt,
            unselect: Pt,
            loading: Pt,
            _unmount: Pt,
            _beforeprint: Pt,
            _afterprint: Pt,
            _noEventDrop: Pt,
            _noEventResize: Pt,
            _resize: Pt,
            _scrollRequest: Pt
        }, Tt = {buttonText: Pt, views: Pt, plugins: Pt, initialEvents: Pt, events: Pt, eventSources: Pt},
        kt = {headerToolbar: Mt, footerToolbar: Mt, buttonText: Mt, buttonIcons: Mt};

    function Mt(e, t) {
        return "object" == typeof e && "object" == typeof t && e && t ? Ve(e, t) : e === t
    }

    var xt = {
        type: String,
        component: Pt,
        buttonText: String,
        buttonTextKey: String,
        dateProfileGeneratorClass: Pt,
        usesMinMaxTime: Boolean,
        classNames: Pt,
        content: Pt,
        didMount: Pt,
        willUnmount: Pt
    };

    function _t(e) {
        return Oe(e, kt)
    }

    function It(e, t) {
        var n = {}, r = {};
        for (var o in t) o in e && (n[o] = t[o](e[o]));
        for (var o in e) o in t || (r[o] = e[o]);
        return {refined: n, extra: r}
    }

    function Pt(e) {
        return e
    }

    function Nt(e, t, n, r) {
        for (var o = {defs: {}, instances: {}}, i = Kt(n), a = 0, s = e; a < s.length; a++) {
            var l = Zt(s[a], t, n, r, i);
            l && Ht(l, o)
        }
        return o
    }

    function Ht(e, t) {
        return void 0 === t && (t = {
            defs: {},
            instances: {}
        }), t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t
    }

    function Ot(e, t) {
        var n = e.instances[t];
        if (n) {
            var r = e.defs[n.defId], o = Lt(e, function (e) {
                return t = r, n = e, Boolean(t.groupId && t.groupId === n.groupId);
                var t, n
            });
            return o.defs[r.defId] = r, o.instances[n.instanceId] = n, o
        }
        return {defs: {}, instances: {}}
    }

    function At() {
        return {defs: {}, instances: {}}
    }

    function Ut(e, t) {
        return {defs: r(r({}, e.defs), t.defs), instances: r(r({}, e.instances), t.instances)}
    }

    function Lt(e, t) {
        var n = Ae(e.defs, t), r = Ae(e.instances, function (e) {
            return n[e.defId]
        });
        return {defs: n, instances: r}
    }

    function Wt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : []
    }

    var Vt = {
        display: String,
        editable: Boolean,
        startEditable: Boolean,
        durationEditable: Boolean,
        constraint: Pt,
        overlap: Pt,
        allow: Pt,
        className: Wt,
        classNames: Wt,
        color: String,
        backgroundColor: String,
        borderColor: String,
        textColor: String
    }, Ft = {
        display: null,
        startEditable: null,
        durationEditable: null,
        constraints: [],
        overlap: null,
        allows: [],
        backgroundColor: "",
        borderColor: "",
        textColor: "",
        classNames: []
    };

    function zt(e, t) {
        var n = function (e, t) {
            return Array.isArray(e) ? Nt(e, null, t, !0) : "object" == typeof e && e ? Nt([e], null, t, !0) : null != e ? String(e) : null
        }(e.constraint, t);
        return {
            display: e.display || null,
            startEditable: null != e.startEditable ? e.startEditable : e.editable,
            durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
            constraints: null != n ? [n] : [],
            overlap: null != e.overlap ? e.overlap : null,
            allows: null != e.allow ? [e.allow] : [],
            backgroundColor: e.backgroundColor || e.color || "",
            borderColor: e.borderColor || e.color || "",
            textColor: e.textColor || "",
            classNames: (e.className || []).concat(e.classNames || [])
        }
    }

    function Bt(e) {
        return e.reduce(jt, Ft)
    }

    function jt(e, t) {
        return {
            display: null != t.display ? t.display : e.display,
            startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
            durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
            constraints: e.constraints.concat(t.constraints),
            overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
            allows: e.allows.concat(t.allows),
            backgroundColor: t.backgroundColor || e.backgroundColor,
            borderColor: t.borderColor || e.borderColor,
            textColor: t.textColor || e.textColor,
            classNames: e.classNames.concat(t.classNames)
        }
    }

    var Gt = {id: String, groupId: String, title: String, url: String},
        qt = {start: Pt, end: Pt, date: Pt, allDay: Boolean}, Yt = r(r(r({}, Gt), qt), {extendedProps: Pt});

    function Zt(e, t, n, r, o) {
        void 0 === o && (o = Kt(n));
        var i = Xt(e, n, o), a = i.refined, s = i.extra, l = function (e, t) {
            var n = null;
            e && (n = e.defaultAllDay);
            null == n && (n = t.options.defaultAllDay);
            return n
        }(t, n), u = function (e, t, n, r) {
            for (var o = 0; o < r.length; o += 1) {
                var i = r[o].parse(e, n);
                if (i) {
                    var a = e.allDay;
                    return null == a && null == (a = t) && null == (a = i.allDayGuess) && (a = !1), {
                        allDay: a,
                        duration: i.duration,
                        typeData: i.typeData,
                        typeId: o
                    }
                }
            }
            return null
        }(a, l, n.dateEnv, n.pluginHooks.recurringTypes);
        if (u) return (c = Jt(a, s, t ? t.sourceId : "", u.allDay, Boolean(u.duration), n)).recurringDef = {
            typeId: u.typeId,
            typeData: u.typeData,
            duration: u.duration
        }, {def: c, instance: null};
        var c, d = function (e, t, n, r) {
            var o, i, a = e.allDay, s = null, l = !1, u = null, c = null != e.start ? e.start : e.date;
            if (o = n.dateEnv.createMarkerMeta(c)) s = o.marker; else if (!r) return null;
            null != e.end && (i = n.dateEnv.createMarkerMeta(e.end));
            null == a && (a = null != t ? t : (!o || o.isTimeUnspecified) && (!i || i.isTimeUnspecified));
            a && s && (s = we(s));
            i && (u = i.marker, a && (u = we(u)), s && u <= s && (u = null));
            u ? l = !0 : r || (l = n.options.forceEventDuration || !1, u = n.dateEnv.add(s, a ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration));
            return {
                allDay: a,
                hasEnd: l,
                range: {start: s, end: u},
                forcedStartTzo: o ? o.forcedTzo : null,
                forcedEndTzo: i ? i.forcedTzo : null
            }
        }(a, l, n, r);
        return d ? {
            def: c = Jt(a, s, t ? t.sourceId : "", d.allDay, d.hasEnd, n),
            instance: Ne(c.defId, d.range, d.forcedStartTzo, d.forcedEndTzo)
        } : null
    }

    function Xt(e, t, n) {
        return void 0 === n && (n = Kt(t)), It(e, n)
    }

    function Kt(e) {
        return r(r(r({}, Vt), Yt), e.pluginHooks.eventRefiners)
    }

    function Jt(e, t, n, o, i, a) {
        for (var s = {
            title: e.title || "",
            groupId: e.groupId || "",
            publicId: e.id || "",
            url: e.url || "",
            recurringDef: null,
            defId: ee(),
            sourceId: n,
            allDay: o,
            hasEnd: i,
            ui: zt(e, a),
            extendedProps: r(r({}, e.extendedProps || {}), t)
        }, l = 0, u = a.pluginHooks.eventDefMemberAdders; l < u.length; l++) {
            var c = u[l];
            r(s, c(e))
        }
        return Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s
    }

    function $t(e) {
        var t = Math.floor(Se(e.start, e.end)) || 1, n = we(e.start);
        return {start: n, end: me(n, t)}
    }

    function Qt(e, t) {
        void 0 === t && (t = Xe(0));
        var n = null, r = null;
        if (e.end) {
            r = we(e.end);
            var o = e.end.valueOf() - r.valueOf();
            o && o >= et(t) && (r = me(r, 1))
        }
        return e.start && (n = we(e.start), r && r <= n && (r = me(n, 1))), {start: n, end: r}
    }

    function en(e) {
        var t = Qt(e);
        return Se(t.start, t.end) > 1
    }

    function tn(e, t, n, r) {
        return "year" === r ? Xe(n.diffWholeYears(e, t), "year") : "month" === r ? Xe(n.diffWholeMonths(e, t), "month") : De(e, t)
    }

    function nn(e, t) {
        var n, r, o = [], i = t.start;
        for (e.sort(rn), n = 0; n < e.length; n += 1) (r = e[n]).start > i && o.push({
            start: i,
            end: r.start
        }), r.end > i && (i = r.end);
        return i < t.end && o.push({start: i, end: t.end}), o
    }

    function rn(e, t) {
        return e.start.valueOf() - t.start.valueOf()
    }

    function on(e, t) {
        var n = e.start, r = e.end, o = null;
        return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (null === n || null === r || n < r) && (o = {
            start: n,
            end: r
        }), o
    }

    function an(e, t) {
        return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf())
    }

    function sn(e, t) {
        return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end)
    }

    function ln(e, t) {
        return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end)
    }

    function un(e, t) {
        return (null === e.start || t >= e.start) && (null === e.end || t < e.end)
    }

    function cn(e, t, n, r) {
        var o = {}, i = {}, a = {}, s = [], l = [], u = hn(e.defs, t);
        for (var c in e.defs) {
            "inverse-background" === (f = u[(S = e.defs[c]).defId]).display && (S.groupId ? (o[S.groupId] = [], a[S.groupId] || (a[S.groupId] = S)) : i[c] = [])
        }
        for (var d in e.instances) {
            var p = e.instances[d], f = u[(S = e.defs[p.defId]).defId], h = p.range, v = !S.allDay && r ? Qt(h, r) : h,
                g = on(v, n);
            g && ("inverse-background" === f.display ? S.groupId ? o[S.groupId].push(g) : i[p.defId].push(g) : "none" !== f.display && ("background" === f.display ? s : l).push({
                def: S,
                ui: f,
                instance: p,
                range: g,
                isStart: v.start && v.start.valueOf() === g.start.valueOf(),
                isEnd: v.end && v.end.valueOf() === g.end.valueOf()
            }))
        }
        for (var m in o) for (var y = 0, E = nn(o[m], n); y < E.length; y++) {
            var S, D = E[y];
            f = u[(S = a[m]).defId];
            s.push({def: S, ui: f, instance: null, range: D, isStart: !1, isEnd: !1})
        }
        for (var c in i) for (var b = 0, C = nn(i[c], n); b < C.length; b++) {
            D = C[b];
            s.push({def: e.defs[c], ui: u[c], instance: null, range: D, isStart: !1, isEnd: !1})
        }
        return {bg: s, fg: l}
    }

    function dn(e) {
        return "background" === e.ui.display || "inverse-background" === e.ui.display
    }

    function pn(e, t) {
        e.fcSeg = t
    }

    function fn(e) {
        return e.fcSeg || e.parentNode.fcSeg || null
    }

    function hn(e, t) {
        return Ue(e, function (e) {
            return vn(e, t)
        })
    }

    function vn(e, t) {
        var n = [];
        return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), Bt(n)
    }

    function gn(e, t) {
        var n = e.map(mn);
        return n.sort(function (e, n) {
            return le(e, n, t)
        }), n.map(function (e) {
            return e._seg
        })
    }

    function mn(e) {
        var t = e.eventRange, n = t.def, o = t.instance ? t.instance.range : t.range,
            i = o.start ? o.start.valueOf() : 0, a = o.end ? o.end.valueOf() : 0;
        return r(r(r({}, n.extendedProps), n), {
            id: n.publicId,
            start: i,
            end: a,
            duration: a - i,
            allDay: Number(n.allDay),
            _seg: e
        })
    }

    function yn(e, t) {
        for (var n = t.pluginHooks.isDraggableTransformers, r = e.eventRange, o = r.def, i = r.ui, a = i.startEditable, s = 0, l = n; s < l.length; s++) {
            a = (0, l[s])(a, o, i, t)
        }
        return a
    }

    function En(e, t) {
        return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart
    }

    function Sn(e, t) {
        return e.isEnd && e.eventRange.ui.durationEditable
    }

    function Dn(e, t, n, r, o, i, a) {
        var s = n.dateEnv, l = n.options, u = l.displayEventTime, c = l.displayEventEnd, d = e.eventRange.def,
            p = e.eventRange.instance;
        if (null == u && (u = !1 !== r), null == c && (c = !1 !== o), u && !d.allDay && (e.isStart || e.isEnd)) {
            var f = i || (e.isStart ? p.range.start : e.start || e.eventRange.range.start),
                h = a || (e.isEnd ? p.range.end : e.end || e.eventRange.range.end);
            return c && d.hasEnd ? s.formatRange(f, h, t, {
                forcedStartTzo: i ? null : p.forcedStartTzo,
                forcedEndTzo: a ? null : p.forcedEndTzo
            }) : s.format(f, t, {forcedTzo: i ? null : p.forcedStartTzo})
        }
        return ""
    }

    function bn(e, t, n) {
        var r = e.eventRange.range;
        return {isPast: r.end < (n || t.start), isFuture: r.start >= (n || t.end), isToday: t && un(t, r.start)}
    }

    function Cn(e) {
        var t = ["fc-event"];
        return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t
    }

    function wn(e) {
        return e.instance ? e.instance.instanceId : e.def.defId + ":" + e.range.start.toISOString()
    }

    var Rn = {start: Pt, end: Pt, allDay: Boolean};

    function Tn(e, t, n) {
        var o = function (e, t) {
            var n = It(e, Rn), o = n.refined, i = n.extra, a = o.start ? t.createMarkerMeta(o.start) : null,
                s = o.end ? t.createMarkerMeta(o.end) : null, l = o.allDay;
            null == l && (l = a && a.isTimeUnspecified && (!s || s.isTimeUnspecified));
            return r({range: {start: a ? a.marker : null, end: s ? s.marker : null}, allDay: l}, i)
        }(e, t), i = o.range;
        if (!i.start) return null;
        if (!i.end) {
            if (null == n) return null;
            i.end = t.add(i.start, n)
        }
        return o
    }

    function kn(e, t) {
        return an(e.range, t.range) && e.allDay === t.allDay && function (e, t) {
            for (var n in t) if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
            for (var n in e) if (!(n in t)) return !1;
            return !0
        }(e, t)
    }

    function Mn(e, t, n) {
        return r(r({}, xn(e, t, n)), {timeZone: t.timeZone})
    }

    function xn(e, t, n) {
        return {
            start: t.toDate(e.start),
            end: t.toDate(e.end),
            startStr: t.formatIso(e.start, {omitTime: n}),
            endStr: t.formatIso(e.end, {omitTime: n})
        }
    }

    function _n(e, t, n) {
        n.emitter.trigger("select", r(r({}, In(e, n)), {
            jsEvent: t ? t.origEvent : null,
            view: n.viewApi || n.calendarApi.view
        }))
    }

    function In(e, t) {
        for (var n, o, i = {}, a = 0, s = t.pluginHooks.dateSpanTransforms; a < s.length; a++) {
            var l = s[a];
            r(i, l(e, t))
        }
        return r(i, (n = e, o = t.dateEnv, r(r({}, xn(n.range, o, n.allDay)), {allDay: n.allDay}))), i
    }

    function Pn(e, t, n) {
        var r = n.dateEnv, o = n.options, i = t;
        return e ? (i = we(i), i = r.add(i, o.defaultAllDayEventDuration)) : i = r.add(i, o.defaultTimedEventDuration), i
    }

    function Nn(e, t, n, r) {
        var o = hn(e.defs, t), i = {defs: {}, instances: {}};
        for (var a in e.defs) {
            var s = e.defs[a];
            i.defs[a] = Hn(s, o[a], n, r)
        }
        for (var l in e.instances) {
            var u = e.instances[l];
            s = i.defs[u.defId];
            i.instances[l] = On(u, s, o[u.defId], n, r)
        }
        return i
    }

    function Hn(e, t, n, o) {
        var i = n.standardProps || {};
        null == i.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
        var a = r(r(r({}, e), i), {ui: r(r({}, e.ui), i.ui)});
        n.extendedProps && (a.extendedProps = r(r({}, a.extendedProps), n.extendedProps));
        for (var s = 0, l = o.pluginHooks.eventDefMutationAppliers; s < l.length; s++) {
            (0, l[s])(a, n, o)
        }
        return !a.hasEnd && o.options.forceEventDuration && (a.hasEnd = !0), a
    }

    function On(e, t, n, o, i) {
        var a = i.dateEnv, s = o.standardProps && !0 === o.standardProps.allDay,
            l = o.standardProps && !1 === o.standardProps.hasEnd, u = r({}, e);
        return s && (u.range = $t(u.range)), o.datesDelta && n.startEditable && (u.range = {
            start: a.add(u.range.start, o.datesDelta),
            end: a.add(u.range.end, o.datesDelta)
        }), o.startDelta && n.durationEditable && (u.range = {
            start: a.add(u.range.start, o.startDelta),
            end: u.range.end
        }), o.endDelta && n.durationEditable && (u.range = {
            start: u.range.start,
            end: a.add(u.range.end, o.endDelta)
        }), l && (u.range = {
            start: u.range.start,
            end: Pn(t.allDay, u.range.start, i)
        }), t.allDay && (u.range = {
            start: we(u.range.start),
            end: we(u.range.end)
        }), u.range.end < u.range.start && (u.range.end = Pn(t.allDay, u.range.start, i)), u
    }

    var An = function () {
        function e(e, t, n) {
            this.type = e, this.getCurrentData = t, this.dateEnv = n
        }

        return Object.defineProperty(e.prototype, "calendar", {
            get: function () {
                return this.getCurrentData().calendarApi
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "title", {
            get: function () {
                return this.getCurrentData().viewTitle
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "activeStart", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "activeEnd", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "currentStart", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "currentEnd", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)
            }, enumerable: !1, configurable: !0
        }), e.prototype.getOption = function (e) {
            return this.getCurrentData().options[e]
        }, e
    }(), Un = {
        id: String,
        defaultAllDay: Boolean,
        url: String,
        format: String,
        events: Pt,
        eventDataTransform: Pt,
        success: Pt,
        failure: Pt
    };

    function Ln(e, t, n) {
        var r;
        if (void 0 === n && (n = Wn(t)), "string" == typeof e ? r = {url: e} : "function" == typeof e || Array.isArray(e) ? r = {events: e} : "object" == typeof e && e && (r = e), r) {
            var o = It(r, n), i = o.refined, a = o.extra, s = function (e, t) {
                for (var n = t.pluginHooks.eventSourceDefs, r = n.length - 1; r >= 0; r -= 1) {
                    var o = n[r], i = o.parseMeta(e);
                    if (i) return {sourceDefId: r, meta: i}
                }
                return null
            }(i, t);
            if (s) return {
                _raw: e,
                isFetching: !1,
                latestFetchId: "",
                fetchRange: null,
                defaultAllDay: i.defaultAllDay,
                eventDataTransform: i.eventDataTransform,
                success: i.success,
                failure: i.failure,
                publicId: i.id || "",
                sourceId: ee(),
                sourceDefId: s.sourceDefId,
                meta: s.meta,
                ui: zt(i, t),
                extendedProps: a
            }
        }
        return null
    }

    function Wn(e) {
        return r(r(r({}, Vt), Un), e.pluginHooks.eventSourceRefiners)
    }

    function Vn(e, t) {
        return "function" == typeof e && (e = e()), null == e ? t.createNowMarker() : t.createMarker(e)
    }

    var Fn = function () {
        function e() {
        }

        return e.prototype.getCurrentData = function () {
            return this.currentDataManager.getCurrentData()
        }, e.prototype.dispatch = function (e) {
            return this.currentDataManager.dispatch(e)
        }, Object.defineProperty(e.prototype, "view", {
            get: function () {
                return this.getCurrentData().viewApi
            }, enumerable: !1, configurable: !0
        }), e.prototype.batchRendering = function (e) {
            e()
        }, e.prototype.updateSize = function () {
            this.trigger("_resize", !0)
        }, e.prototype.setOption = function (e, t) {
            this.dispatch({type: "SET_OPTION", optionName: e, rawOptionValue: t})
        }, e.prototype.getOption = function (e) {
            return this.currentDataManager.currentCalendarOptionsInput[e]
        }, e.prototype.getAvailableLocaleCodes = function () {
            return Object.keys(this.getCurrentData().availableRawLocales)
        }, e.prototype.on = function (e, t) {
            var n = this.currentDataManager;
            n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn("Unknown listener name '" + e + "'")
        }, e.prototype.off = function (e, t) {
            this.currentDataManager.emitter.off(e, t)
        }, e.prototype.trigger = function (e) {
            for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            (t = this.currentDataManager.emitter).trigger.apply(t, o([e], n))
        }, e.prototype.changeView = function (e, t) {
            var n = this;
            this.batchRendering(function () {
                if (n.unselect(), t) if (t.start && t.end) n.dispatch({
                    type: "CHANGE_VIEW_TYPE",
                    viewType: e
                }), n.dispatch({type: "SET_OPTION", optionName: "visibleRange", rawOptionValue: t}); else {
                    var r = n.getCurrentData().dateEnv;
                    n.dispatch({type: "CHANGE_VIEW_TYPE", viewType: e, dateMarker: r.createMarker(t)})
                } else n.dispatch({type: "CHANGE_VIEW_TYPE", viewType: e})
            })
        }, e.prototype.zoomTo = function (e, t) {
            var n;
            t = t || "day", n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t), this.unselect(), n ? this.dispatch({
                type: "CHANGE_VIEW_TYPE",
                viewType: n.type,
                dateMarker: e
            }) : this.dispatch({type: "CHANGE_DATE", dateMarker: e})
        }, e.prototype.getUnitViewSpec = function (e) {
            var t, n, r = this.getCurrentData(), o = r.viewSpecs, i = r.toolbarConfig,
                a = [].concat(i.viewsWithButtons);
            for (var s in o) a.push(s);
            for (t = 0; t < a.length; t += 1) if ((n = o[a[t]]) && n.singleUnit === e) return n;
            return null
        }, e.prototype.prev = function () {
            this.unselect(), this.dispatch({type: "PREV"})
        }, e.prototype.next = function () {
            this.unselect(), this.dispatch({type: "NEXT"})
        }, e.prototype.prevYear = function () {
            var e = this.getCurrentData();
            this.unselect(), this.dispatch({type: "CHANGE_DATE", dateMarker: e.dateEnv.addYears(e.currentDate, -1)})
        }, e.prototype.nextYear = function () {
            var e = this.getCurrentData();
            this.unselect(), this.dispatch({type: "CHANGE_DATE", dateMarker: e.dateEnv.addYears(e.currentDate, 1)})
        }, e.prototype.today = function () {
            var e = this.getCurrentData();
            this.unselect(), this.dispatch({type: "CHANGE_DATE", dateMarker: Vn(e.calendarOptions.now, e.dateEnv)})
        }, e.prototype.gotoDate = function (e) {
            var t = this.getCurrentData();
            this.unselect(), this.dispatch({type: "CHANGE_DATE", dateMarker: t.dateEnv.createMarker(e)})
        }, e.prototype.incrementDate = function (e) {
            var t = this.getCurrentData(), n = Xe(e);
            n && (this.unselect(), this.dispatch({type: "CHANGE_DATE", dateMarker: t.dateEnv.add(t.currentDate, n)}))
        }, e.prototype.getDate = function () {
            var e = this.getCurrentData();
            return e.dateEnv.toDate(e.currentDate)
        }, e.prototype.formatDate = function (e, t) {
            var n = this.getCurrentData().dateEnv;
            return n.format(n.createMarker(e), bt(t))
        }, e.prototype.formatRange = function (e, t, n) {
            var r = this.getCurrentData().dateEnv;
            return r.formatRange(r.createMarker(e), r.createMarker(t), bt(n), n)
        }, e.prototype.formatIso = function (e, t) {
            var n = this.getCurrentData().dateEnv;
            return n.formatIso(n.createMarker(e), {omitTime: t})
        }, e.prototype.select = function (e, t) {
            var n;
            n = null == t ? null != e.start ? e : {start: e, end: null} : {start: e, end: t};
            var r = this.getCurrentData(), o = Tn(n, r.dateEnv, Xe({days: 1}));
            o && (this.dispatch({type: "SELECT_DATES", selection: o}), _n(o, null, r))
        }, e.prototype.unselect = function (e) {
            var t = this.getCurrentData();
            t.dateSelection && (this.dispatch({type: "UNSELECT_DATES"}), function (e, t) {
                t.emitter.trigger("unselect", {jsEvent: e ? e.origEvent : null, view: t.viewApi || t.calendarApi.view})
            }(e, t))
        }, e.prototype.addEvent = function (e, t) {
            if (e instanceof zn) {
                var n = e._def, r = e._instance;
                return this.getCurrentData().eventStore.defs[n.defId] || (this.dispatch({
                    type: "ADD_EVENTS",
                    eventStore: Ht({def: n, instance: r})
                }), this.triggerEventAdd(e)), e
            }
            var o, i = this.getCurrentData();
            if (t instanceof V) o = t.internalEventSource; else if ("boolean" == typeof t) t && (o = We(i.eventSources)[0]); else if (null != t) {
                var a = this.getEventSourceById(t);
                if (!a) return console.warn('Could not find an event source with ID "' + t + '"'), null;
                o = a.internalEventSource
            }
            var s = Zt(e, o, i, !1);
            if (s) {
                var l = new zn(i, s.def, s.def.recurringDef ? null : s.instance);
                return this.dispatch({type: "ADD_EVENTS", eventStore: Ht(s)}), this.triggerEventAdd(l), l
            }
            return null
        }, e.prototype.triggerEventAdd = function (e) {
            var t = this;
            this.getCurrentData().emitter.trigger("eventAdd", {
                event: e, relatedEvents: [], revert: function () {
                    t.dispatch({type: "REMOVE_EVENTS", eventStore: Bn(e)})
                }
            })
        }, e.prototype.getEventById = function (e) {
            var t = this.getCurrentData(), n = t.eventStore, r = n.defs, o = n.instances;
            for (var i in e = String(e), r) {
                var a = r[i];
                if (a.publicId === e) {
                    if (a.recurringDef) return new zn(t, a, null);
                    for (var s in o) {
                        var l = o[s];
                        if (l.defId === a.defId) return new zn(t, a, l)
                    }
                }
            }
            return null
        }, e.prototype.getEvents = function () {
            var e = this.getCurrentData();
            return jn(e.eventStore, e)
        }, e.prototype.removeAllEvents = function () {
            this.dispatch({type: "REMOVE_ALL_EVENTS"})
        }, e.prototype.getEventSources = function () {
            var e = this.getCurrentData(), t = e.eventSources, n = [];
            for (var r in t) n.push(new V(e, t[r]));
            return n
        }, e.prototype.getEventSourceById = function (e) {
            var t = this.getCurrentData(), n = t.eventSources;
            for (var r in e = String(e), n) if (n[r].publicId === e) return new V(t, n[r]);
            return null
        }, e.prototype.addEventSource = function (e) {
            var t = this.getCurrentData();
            if (e instanceof V) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
                type: "ADD_EVENT_SOURCES",
                sources: [e.internalEventSource]
            }), e;
            var n = Ln(e, t);
            return n ? (this.dispatch({type: "ADD_EVENT_SOURCES", sources: [n]}), new V(t, n)) : null
        }, e.prototype.removeAllEventSources = function () {
            this.dispatch({type: "REMOVE_ALL_EVENT_SOURCES"})
        }, e.prototype.refetchEvents = function () {
            this.dispatch({type: "FETCH_EVENT_SOURCES"})
        }, e.prototype.scrollToTime = function (e) {
            var t = Xe(e);
            t && this.trigger("_scrollRequest", {time: t})
        }, e
    }(), zn = function () {
        function e(e, t, n) {
            this._context = e, this._def = t, this._instance = n || null
        }

        return e.prototype.setProp = function (e, t) {
            var n, r;
            if (e in qt) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead."); else if (e in Gt) t = Gt[e](t), this.mutate({standardProps: (n = {}, n[e] = t, n)}); else if (e in Vt) {
                var o = Vt[e](t);
                "color" === e ? o = {backgroundColor: t, borderColor: t} : "editable" === e ? o = {
                    startEditable: t,
                    durationEditable: t
                } : ((r = {})[e] = t, o = r), this.mutate({standardProps: {ui: o}})
            } else console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.")
        }, e.prototype.setExtendedProp = function (e, t) {
            var n;
            this.mutate({extendedProps: (n = {}, n[e] = t, n)})
        }, e.prototype.setStart = function (e, t) {
            void 0 === t && (t = {});
            var n = this._context.dateEnv, r = n.createMarker(e);
            if (r && this._instance) {
                var o = tn(this._instance.range.start, r, n, t.granularity);
                t.maintainDuration ? this.mutate({datesDelta: o}) : this.mutate({startDelta: o})
            }
        }, e.prototype.setEnd = function (e, t) {
            void 0 === t && (t = {});
            var n, r = this._context.dateEnv;
            if ((null == e || (n = r.createMarker(e))) && this._instance) if (n) {
                var o = tn(this._instance.range.end, n, r, t.granularity);
                this.mutate({endDelta: o})
            } else this.mutate({standardProps: {hasEnd: !1}})
        }, e.prototype.setDates = function (e, t, n) {
            void 0 === n && (n = {});
            var r, o, i, a = this._context.dateEnv, s = {allDay: n.allDay}, l = a.createMarker(e);
            if (l && ((null == t || (r = a.createMarker(t))) && this._instance)) {
                var u = this._instance.range;
                !0 === n.allDay && (u = $t(u));
                var c = tn(u.start, l, a, n.granularity);
                if (r) {
                    var d = tn(u.end, r, a, n.granularity);
                    i = d, (o = c).years === i.years && o.months === i.months && o.days === i.days && o.milliseconds === i.milliseconds ? this.mutate({
                        datesDelta: c,
                        standardProps: s
                    }) : this.mutate({startDelta: c, endDelta: d, standardProps: s})
                } else s.hasEnd = !1, this.mutate({datesDelta: c, standardProps: s})
            }
        }, e.prototype.moveStart = function (e) {
            var t = Xe(e);
            t && this.mutate({startDelta: t})
        }, e.prototype.moveEnd = function (e) {
            var t = Xe(e);
            t && this.mutate({endDelta: t})
        }, e.prototype.moveDates = function (e) {
            var t = Xe(e);
            t && this.mutate({datesDelta: t})
        }, e.prototype.setAllDay = function (e, t) {
            void 0 === t && (t = {});
            var n = {allDay: e}, r = t.maintainDuration;
            null == r && (r = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = r), this.mutate({standardProps: n})
        }, e.prototype.formatRange = function (e) {
            var t = this._context.dateEnv, n = this._instance, r = bt(e);
            return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
                forcedStartTzo: n.forcedStartTzo,
                forcedEndTzo: n.forcedEndTzo
            }) : t.format(n.range.start, r, {forcedTzo: n.forcedStartTzo})
        }, e.prototype.mutate = function (t) {
            var n = this._instance;
            if (n) {
                var r = this._def, o = this._context, i = o.getCurrentData().eventStore, a = Ot(i, n.instanceId);
                a = Nn(a, {
                    "": {
                        display: "",
                        startEditable: !0,
                        durationEditable: !0,
                        constraints: [],
                        overlap: null,
                        allows: [],
                        backgroundColor: "",
                        borderColor: "",
                        textColor: "",
                        classNames: []
                    }
                }, t, o);
                var s = new e(o, r, n);
                this._def = a.defs[r.defId], this._instance = a.instances[n.instanceId], o.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: a
                }), o.emitter.trigger("eventChange", {
                    oldEvent: s,
                    event: this,
                    relatedEvents: jn(a, o, n),
                    revert: function () {
                        o.dispatch({type: "RESET_EVENTS", eventStore: i})
                    }
                })
            }
        }, e.prototype.remove = function () {
            var e = this._context, t = Bn(this);
            e.dispatch({type: "REMOVE_EVENTS", eventStore: t}), e.emitter.trigger("eventRemove", {
                event: this,
                relatedEvents: [],
                revert: function () {
                    e.dispatch({type: "MERGE_EVENTS", eventStore: t})
                }
            })
        }, Object.defineProperty(e.prototype, "source", {
            get: function () {
                var e = this._def.sourceId;
                return e ? new V(this._context, this._context.getCurrentData().eventSources[e]) : null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "start", {
            get: function () {
                return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "end", {
            get: function () {
                return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "startStr", {
            get: function () {
                var e = this._instance;
                return e ? this._context.dateEnv.formatIso(e.range.start, {
                    omitTime: this._def.allDay,
                    forcedTzo: e.forcedStartTzo
                }) : ""
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "endStr", {
            get: function () {
                var e = this._instance;
                return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
                    omitTime: this._def.allDay,
                    forcedTzo: e.forcedEndTzo
                }) : ""
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this._def.publicId
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "groupId", {
            get: function () {
                return this._def.groupId
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "allDay", {
            get: function () {
                return this._def.allDay
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "title", {
            get: function () {
                return this._def.title
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "url", {
            get: function () {
                return this._def.url
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "display", {
            get: function () {
                return this._def.ui.display || "auto"
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "startEditable", {
            get: function () {
                return this._def.ui.startEditable
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "durationEditable", {
            get: function () {
                return this._def.ui.durationEditable
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "constraint", {
            get: function () {
                return this._def.ui.constraints[0] || null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "overlap", {
            get: function () {
                return this._def.ui.overlap
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "allow", {
            get: function () {
                return this._def.ui.allows[0] || null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "backgroundColor", {
            get: function () {
                return this._def.ui.backgroundColor
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "borderColor", {
            get: function () {
                return this._def.ui.borderColor
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "textColor", {
            get: function () {
                return this._def.ui.textColor
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "classNames", {
            get: function () {
                return this._def.ui.classNames
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "extendedProps", {
            get: function () {
                return this._def.extendedProps
            }, enumerable: !1, configurable: !0
        }), e.prototype.toPlainObject = function (e) {
            void 0 === e && (e = {});
            var t = this._def, n = t.ui, o = this.startStr, i = this.endStr, a = {};
            return t.title && (a.title = t.title), o && (a.start = o), i && (a.end = i), t.publicId && (a.id = t.publicId), t.groupId && (a.groupId = t.groupId), t.url && (a.url = t.url), n.display && "auto" !== n.display && (a.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? a.color = n.backgroundColor : (n.backgroundColor && (a.backgroundColor = n.backgroundColor), n.borderColor && (a.borderColor = n.borderColor)), n.textColor && (a.textColor = n.textColor), n.classNames.length && (a.classNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? r(a, t.extendedProps) : a.extendedProps = t.extendedProps), a
        }, e.prototype.toJSON = function () {
            return this.toPlainObject()
        }, e
    }();

    function Bn(e) {
        var t, n, r = e._def, o = e._instance;
        return {defs: (t = {}, t[r.defId] = r, t), instances: o ? (n = {}, n[o.instanceId] = o, n) : {}}
    }

    function jn(e, t, n) {
        var r = e.defs, o = e.instances, i = [], a = n ? n.instanceId : "";
        for (var s in o) {
            var l = o[s], u = r[l.defId];
            l.instanceId !== a && i.push(new zn(t, u, l))
        }
        return i
    }

    var Gn = {};
    var qn, Yn = function () {
        function e() {
        }

        return e.prototype.getMarkerYear = function (e) {
            return e.getUTCFullYear()
        }, e.prototype.getMarkerMonth = function (e) {
            return e.getUTCMonth()
        }, e.prototype.getMarkerDay = function (e) {
            return e.getUTCDate()
        }, e.prototype.arrayToMarker = function (e) {
            return _e(e)
        }, e.prototype.markerToArray = function (e) {
            return xe(e)
        }, e
    }();
    qn = Yn, Gn["gregory"] = qn;
    var Zn = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

    function Xn(e) {
        var t = Zn.exec(e);
        if (t) {
            var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0));
            if (Ie(n)) {
                var r = null;
                return t[13] && (r = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), {
                    marker: n,
                    isTimeUnspecified: !t[6],
                    timeZoneOffset: r
                }
            }
        }
        return null
    }

    var Kn = function () {
        function e(e) {
            var t, n = this.timeZone = e.timeZone, r = "local" !== n && "UTC" !== n;
            e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = Boolean(!r || this.namedTimeZoneImpl), this.calendarSystem = (t = e.calendarSystem, new Gn[t]), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, "ISO" === e.weekNumberCalculation && (this.weekDow = 1, this.weekDoy = 4), "number" == typeof e.firstDay && (this.weekDow = e.firstDay), "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = null != e.weekText ? e.weekText : e.locale.options.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator
        }

        return e.prototype.createMarker = function (e) {
            var t = this.createMarkerMeta(e);
            return null === t ? null : t.marker
        }, e.prototype.createNowMarker = function () {
            return this.canComputeOffset ? this.timestampToMarker((new Date).valueOf()) : _e(ke(new Date))
        }, e.prototype.createMarkerMeta = function (e) {
            if ("string" == typeof e) return this.parse(e);
            var t = null;
            return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = _e(e)), null !== t && Ie(t) ? {
                marker: t,
                isTimeUnspecified: !1,
                forcedTzo: null
            } : null
        }, e.prototype.parse = function (e) {
            var t = Xn(e);
            if (null === t) return null;
            var n = t.marker, r = null;
            return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset), {
                marker: n,
                isTimeUnspecified: t.isTimeUnspecified,
                forcedTzo: r
            }
        }, e.prototype.getYear = function (e) {
            return this.calendarSystem.getMarkerYear(e)
        }, e.prototype.getMonth = function (e) {
            return this.calendarSystem.getMarkerMonth(e)
        }, e.prototype.add = function (e, t) {
            var n = this.calendarSystem.markerToArray(e);
            return n[0] += t.years, n[1] += t.months, n[2] += t.days, n[6] += t.milliseconds, this.calendarSystem.arrayToMarker(n)
        }, e.prototype.subtract = function (e, t) {
            var n = this.calendarSystem.markerToArray(e);
            return n[0] -= t.years, n[1] -= t.months, n[2] -= t.days, n[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(n)
        }, e.prototype.addYears = function (e, t) {
            var n = this.calendarSystem.markerToArray(e);
            return n[0] += t, this.calendarSystem.arrayToMarker(n)
        }, e.prototype.addMonths = function (e, t) {
            var n = this.calendarSystem.markerToArray(e);
            return n[1] += t, this.calendarSystem.arrayToMarker(n)
        }, e.prototype.diffWholeYears = function (e, t) {
            var n = this.calendarSystem;
            return Pe(e) === Pe(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null
        }, e.prototype.diffWholeMonths = function (e, t) {
            var n = this.calendarSystem;
            return Pe(e) === Pe(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null
        }, e.prototype.greatestWholeUnit = function (e, t) {
            var n = this.diffWholeYears(e, t);
            return null !== n ? {unit: "year", value: n} : null !== (n = this.diffWholeMonths(e, t)) ? {
                unit: "month",
                value: n
            } : null !== (n = be(e, t)) ? {unit: "week", value: n} : null !== (n = Ce(e, t)) ? {
                unit: "day",
                value: n
            } : fe(n = function (e, t) {
                return (t.valueOf() - e.valueOf()) / 36e5
            }(e, t)) ? {unit: "hour", value: n} : fe(n = function (e, t) {
                return (t.valueOf() - e.valueOf()) / 6e4
            }(e, t)) ? {unit: "minute", value: n} : fe(n = function (e, t) {
                return (t.valueOf() - e.valueOf()) / 1e3
            }(e, t)) ? {unit: "second", value: n} : {unit: "millisecond", value: t.valueOf() - e.valueOf()}
        }, e.prototype.countDurationsBetween = function (e, t, n) {
            var r;
            return n.years && null !== (r = this.diffWholeYears(e, t)) ? r / (Qe(n) / 365) : n.months && null !== (r = this.diffWholeMonths(e, t)) ? r / function (e) {
                return Qe(e) / 30
            }(n) : n.days && null !== (r = Ce(e, t)) ? r / Qe(n) : (t.valueOf() - e.valueOf()) / et(n)
        }, e.prototype.startOf = function (e, t) {
            return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? we(e) : "hour" === t ? function (e) {
                return _e([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()])
            }(e) : "minute" === t ? function (e) {
                return _e([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()])
            }(e) : "second" === t ? function (e) {
                return _e([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()])
            }(e) : null
        }, e.prototype.startOfYear = function (e) {
            return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])
        }, e.prototype.startOfMonth = function (e) {
            return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)])
        }, e.prototype.startOfWeek = function (e) {
            return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7])
        }, e.prototype.computeWeekNumber = function (e) {
            return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function (e, t, n) {
                var r = e.getUTCFullYear(), o = Re(e, r, t, n);
                if (o < 1) return Re(e, r - 1, t, n);
                var i = Re(e, r + 1, t, n);
                return i >= 1 ? Math.min(o, i) : o
            }(e, this.weekDow, this.weekDoy)
        }, e.prototype.format = function (e, t, n) {
            return void 0 === n && (n = {}), t.format({
                marker: e,
                timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
            }, this)
        }, e.prototype.formatRange = function (e, t, n, r) {
            return void 0 === r && (r = {}), r.isEndExclusive && (t = ye(t, -1)), n.formatRange({
                marker: e,
                timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
            }, {
                marker: t,
                timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
            }, this, r.defaultSeparator)
        }, e.prototype.formatIso = function (e, t) {
            void 0 === t && (t = {});
            var n = null;
            return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)), function (e, t, n) {
                void 0 === n && (n = !1);
                var r = e.toISOString();
                return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", it(t, !0)))), r
            }(e, n, t.omitTime)
        }, e.prototype.timestampToMarker = function (e) {
            return "local" === this.timeZone ? _e(ke(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? _e(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e)
        }, e.prototype.offsetForMarker = function (e) {
            return "local" === this.timeZone ? -Me(xe(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(xe(e)) : null
        }, e.prototype.toDate = function (e, t) {
            return "local" === this.timeZone ? Me(xe(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(xe(e)) * 60) : new Date(e.valueOf() - (t || 0))
        }, e
    }(), Jn = [], $n = {
        code: "en",
        week: {dow: 0, doy: 4},
        direction: "ltr",
        buttonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            year: "year",
            today: "today",
            month: "month",
            week: "week",
            day: "day",
            list: "list"
        },
        weekText: "W",
        allDayText: "all-day",
        moreLinkText: "more",
        noEventsText: "No events to display"
    };

    function Qn(e) {
        for (var t = e.length > 0 ? e[0].code : "en", n = Jn.concat(e), r = {en: $n}, o = 0, i = n; o < i.length; o++) {
            var a = i[o];
            r[a.code] = a
        }
        return {map: r, defaultCode: t}
    }

    function er(e, t) {
        return "object" != typeof e || Array.isArray(e) ? function (e, t) {
            var n = [].concat(e || []), r = function (e, t) {
                for (var n = 0; n < e.length; n += 1) for (var r = e[n].toLocaleLowerCase().split("-"), o = r.length; o > 0; o -= 1) {
                    var i = r.slice(0, o).join("-");
                    if (t[i]) return t[i]
                }
                return null
            }(n, t) || $n;
            return tr(e, n, r)
        }(e, t) : tr(e.code, [e.code], e)
    }

    function tr(e, t, n) {
        var r = Oe([$n, n], ["buttonText"]);
        delete r.code;
        var o = r.week;
        return delete r.week, {codeArg: e, codes: t, week: o, simpleNumberFormat: new Intl.NumberFormat(e), options: r}
    }

    function nr(e) {
        var t = er(e.locale || "en", Qn([]).map);
        return new Kn(r(r({timeZone: wt.timeZone, calendarSystem: "gregory"}, e), {locale: t}))
    }

    var rr, or = {
        startTime: "09:00",
        endTime: "17:00",
        daysOfWeek: [1, 2, 3, 4, 5],
        display: "inverse-background",
        classNames: "fc-non-business",
        groupId: "_businessHours"
    };

    function ir(e, t) {
        return Nt(function (e) {
            var t;
            t = !0 === e ? [{}] : Array.isArray(e) ? e.filter(function (e) {
                return e.daysOfWeek
            }) : "object" == typeof e && e ? [e] : [];
            return t = t.map(function (e) {
                return r(r({}, or), e)
            })
        }(e), null, t)
    }

    function ar(e, t) {
        return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
    }

    function sr(e, t) {
        var n = {
            left: Math.max(e.left, t.left),
            right: Math.min(e.right, t.right),
            top: Math.max(e.top, t.top),
            bottom: Math.min(e.bottom, t.bottom)
        };
        return n.left < n.right && n.top < n.bottom && n
    }

    function lr(e, t) {
        return {left: Math.min(Math.max(e.left, t.left), t.right), top: Math.min(Math.max(e.top, t.top), t.bottom)}
    }

    function ur(e) {
        return {left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2}
    }

    function cr(e, t) {
        return {left: e.left - t.left, top: e.top - t.top}
    }

    function dr() {
        return null == rr && (rr = function () {
            if ("undefined" == typeof document) return !0;
            var e = document.createElement("div");
            e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
            var t = e.querySelector("div").offsetHeight > 0;
            return document.body.removeChild(e), t
        }()), rr
    }

    var pr = {defs: {}, instances: {}}, fr = function () {
        function e() {
            this.getKeysForEventDefs = st(this._getKeysForEventDefs), this.splitDateSelection = st(this._splitDateSpan), this.splitEventStore = st(this._splitEventStore), this.splitIndividualUi = st(this._splitIndividualUi), this.splitEventDrag = st(this._splitInteraction), this.splitEventResize = st(this._splitInteraction), this.eventUiBuilders = {}
        }

        return e.prototype.splitProps = function (e) {
            var t = this, n = this.getKeyInfo(e), r = this.getKeysForEventDefs(e.eventStore),
                o = this.splitDateSelection(e.dateSelection), i = this.splitIndividualUi(e.eventUiBases, r),
                a = this.splitEventStore(e.eventStore, r), s = this.splitEventDrag(e.eventDrag),
                l = this.splitEventResize(e.eventResize), u = {};
            for (var c in this.eventUiBuilders = Ue(n, function (e, n) {
                return t.eventUiBuilders[n] || st(hr)
            }), n) {
                var d = n[c], p = a[c] || pr, f = this.eventUiBuilders[c];
                u[c] = {
                    businessHours: d.businessHours || e.businessHours,
                    dateSelection: o[c] || null,
                    eventStore: p,
                    eventUiBases: f(e.eventUiBases[""], d.ui, i[c]),
                    eventSelection: p.instances[e.eventSelection] ? e.eventSelection : "",
                    eventDrag: s[c] || null,
                    eventResize: l[c] || null
                }
            }
            return u
        }, e.prototype._splitDateSpan = function (e) {
            var t = {};
            if (e) for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++) {
                t[r[n]] = e
            }
            return t
        }, e.prototype._getKeysForEventDefs = function (e) {
            var t = this;
            return Ue(e.defs, function (e) {
                return t.getKeysForEventDef(e)
            })
        }, e.prototype._splitEventStore = function (e, t) {
            var n = e.defs, r = e.instances, o = {};
            for (var i in n) for (var a = 0, s = t[i]; a < s.length; a++) {
                o[p = s[a]] || (o[p] = {defs: {}, instances: {}}), o[p].defs[i] = n[i]
            }
            for (var l in r) for (var u = r[l], c = 0, d = t[u.defId]; c < d.length; c++) {
                var p;
                o[p = d[c]] && (o[p].instances[l] = u)
            }
            return o
        }, e.prototype._splitIndividualUi = function (e, t) {
            var n = {};
            for (var r in e) if (r) for (var o = 0, i = t[r]; o < i.length; o++) {
                var a = i[o];
                n[a] || (n[a] = {}), n[a][r] = e[r]
            }
            return n
        }, e.prototype._splitInteraction = function (e) {
            var t = {};
            if (e) {
                var n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)),
                    r = this._getKeysForEventDefs(e.mutatedEvents), o = this._splitEventStore(e.mutatedEvents, r),
                    i = function (r) {
                        t[r] || (t[r] = {affectedEvents: n[r] || pr, mutatedEvents: o[r] || pr, isEvent: e.isEvent})
                    };
                for (var a in n) i(a);
                for (var a in o) i(a)
            }
            return t
        }, e
    }();

    function hr(e, t, n) {
        var o = [];
        e && o.push(e), t && o.push(t);
        var i = {"": Bt(o)};
        return n && r(i, n), i
    }

    function vr(e, t, n, r) {
        return {
            dow: e.getUTCDay(),
            isDisabled: Boolean(r && !un(r.activeRange, e)),
            isOther: Boolean(r && !un(r.currentRange, e)),
            isToday: Boolean(t && un(t, e)),
            isPast: Boolean(n ? e < n : !!t && e < t.start),
            isFuture: Boolean(n ? e > n : !!t && e >= t.end)
        }
    }

    function gr(e, t) {
        var n = ["fc-day", "fc-day-" + ve[e.dow]];
        return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n
    }

    function mr(e, t) {
        return void 0 === t && (t = "day"), JSON.stringify({date: rt(e), type: t})
    }

    var yr, Er = null;

    function Sr() {
        return null === Er && (Er = function () {
            var e = document.createElement("div");
            q(e, {
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }), e.innerHTML = "<div></div>", document.body.appendChild(e);
            var t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
            return F(e), t
        }()), Er
    }

    function Dr() {
        return yr || (yr = function () {
            var e = document.createElement("div");
            e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", document.body.appendChild(e);
            var t = br(e);
            return document.body.removeChild(e), t
        }()), yr
    }

    function br(e) {
        return {x: e.offsetHeight - e.clientHeight, y: e.offsetWidth - e.clientWidth}
    }

    function Cr(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e), r = parseInt(n.borderLeftWidth, 10) || 0,
            o = parseInt(n.borderRightWidth, 10) || 0, i = parseInt(n.borderTopWidth, 10) || 0,
            a = parseInt(n.borderBottomWidth, 10) || 0, s = br(e), l = s.y - r - o, u = {
                borderLeft: r,
                borderRight: o,
                borderTop: i,
                borderBottom: a,
                scrollbarBottom: s.x - i - a,
                scrollbarLeft: 0,
                scrollbarRight: 0
            };
        return Sr() && "rtl" === n.direction ? u.scrollbarLeft = l : u.scrollbarRight = l, t && (u.paddingLeft = parseInt(n.paddingLeft, 10) || 0, u.paddingRight = parseInt(n.paddingRight, 10) || 0, u.paddingTop = parseInt(n.paddingTop, 10) || 0, u.paddingBottom = parseInt(n.paddingBottom, 10) || 0), u
    }

    function wr(e, t, n) {
        void 0 === t && (t = !1);
        var r = n ? e.getBoundingClientRect() : Rr(e), o = Cr(e, t), i = {
            left: r.left + o.borderLeft + o.scrollbarLeft,
            right: r.right - o.borderRight - o.scrollbarRight,
            top: r.top + o.borderTop,
            bottom: r.bottom - o.borderBottom - o.scrollbarBottom
        };
        return t && (i.left += o.paddingLeft, i.right -= o.paddingRight, i.top += o.paddingTop, i.bottom -= o.paddingBottom), i
    }

    function Rr(e) {
        var t = e.getBoundingClientRect();
        return {
            left: t.left + window.pageXOffset,
            top: t.top + window.pageYOffset,
            right: t.right + window.pageXOffset,
            bottom: t.bottom + window.pageYOffset
        }
    }

    function Tr(e) {
        for (var t = []; e instanceof HTMLElement;) {
            var n = window.getComputedStyle(e);
            if ("fixed" === n.position) break;
            /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode
        }
        return t
    }

    function kr(e, t, n) {
        var r = !1, o = function () {
            r || (r = !0, t.apply(this, arguments))
        }, i = function () {
            r || (r = !0, n && n.apply(this, arguments))
        }, a = e(o, i);
        a && "function" == typeof a.then && a.then(o, i)
    }

    var Mr = function () {
        function e() {
            this.handlers = {}, this.thisContext = null
        }

        return e.prototype.setThisContext = function (e) {
            this.thisContext = e
        }, e.prototype.setOptions = function (e) {
            this.options = e
        }, e.prototype.on = function (e, t) {
            !function (e, t, n) {
                (e[t] || (e[t] = [])).push(n)
            }(this.handlers, e, t)
        }, e.prototype.off = function (e, t) {
            !function (e, t, n) {
                n ? e[t] && (e[t] = e[t].filter(function (e) {
                    return e !== n
                })) : delete e[t]
            }(this.handlers, e, t)
        }, e.prototype.trigger = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            for (var r = this.handlers[e] || [], o = this.options && this.options[e], i = 0, a = [].concat(o || [], r); i < a.length; i++) {
                a[i].apply(this.thisContext, t)
            }
        }, e.prototype.hasHandlers = function (e) {
            return this.handlers[e] && this.handlers[e].length || this.options && this.options[e]
        }, e
    }();
    var xr = function () {
        function e(e, t, n, r) {
            this.els = t;
            var o = this.originClientRect = e.getBoundingClientRect();
            n && this.buildElHorizontals(o.left), r && this.buildElVerticals(o.top)
        }

        return e.prototype.buildElHorizontals = function (e) {
            for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                var i = o[r].getBoundingClientRect();
                t.push(i.left - e), n.push(i.right - e)
            }
            this.lefts = t, this.rights = n
        }, e.prototype.buildElVerticals = function (e) {
            for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                var i = o[r].getBoundingClientRect();
                t.push(i.top - e), n.push(i.bottom - e)
            }
            this.tops = t, this.bottoms = n
        }, e.prototype.leftToIndex = function (e) {
            var t, n = this.lefts, r = this.rights, o = n.length;
            for (t = 0; t < o; t += 1) if (e >= n[t] && e < r[t]) return t
        }, e.prototype.topToIndex = function (e) {
            var t, n = this.tops, r = this.bottoms, o = n.length;
            for (t = 0; t < o; t += 1) if (e >= n[t] && e < r[t]) return t
        }, e.prototype.getWidth = function (e) {
            return this.rights[e] - this.lefts[e]
        }, e.prototype.getHeight = function (e) {
            return this.bottoms[e] - this.tops[e]
        }, e
    }(), _r = function () {
        function e() {
        }

        return e.prototype.getMaxScrollTop = function () {
            return this.getScrollHeight() - this.getClientHeight()
        }, e.prototype.getMaxScrollLeft = function () {
            return this.getScrollWidth() - this.getClientWidth()
        }, e.prototype.canScrollVertically = function () {
            return this.getMaxScrollTop() > 0
        }, e.prototype.canScrollHorizontally = function () {
            return this.getMaxScrollLeft() > 0
        }, e.prototype.canScrollUp = function () {
            return this.getScrollTop() > 0
        }, e.prototype.canScrollDown = function () {
            return this.getScrollTop() < this.getMaxScrollTop()
        }, e.prototype.canScrollLeft = function () {
            return this.getScrollLeft() > 0
        }, e.prototype.canScrollRight = function () {
            return this.getScrollLeft() < this.getMaxScrollLeft()
        }, e
    }(), Ir = function (e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.el = t, n
        }

        return n(t, e), t.prototype.getScrollTop = function () {
            return this.el.scrollTop
        }, t.prototype.getScrollLeft = function () {
            return this.el.scrollLeft
        }, t.prototype.setScrollTop = function (e) {
            this.el.scrollTop = e
        }, t.prototype.setScrollLeft = function (e) {
            this.el.scrollLeft = e
        }, t.prototype.getScrollWidth = function () {
            return this.el.scrollWidth
        }, t.prototype.getScrollHeight = function () {
            return this.el.scrollHeight
        }, t.prototype.getClientHeight = function () {
            return this.el.clientHeight
        }, t.prototype.getClientWidth = function () {
            return this.el.clientWidth
        }, t
    }(_r), Pr = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.getScrollTop = function () {
            return window.pageYOffset
        }, t.prototype.getScrollLeft = function () {
            return window.pageXOffset
        }, t.prototype.setScrollTop = function (e) {
            window.scroll(window.pageXOffset, e)
        }, t.prototype.setScrollLeft = function (e) {
            window.scroll(e, window.pageYOffset)
        }, t.prototype.getScrollWidth = function () {
            return document.documentElement.scrollWidth
        }, t.prototype.getScrollHeight = function () {
            return document.documentElement.scrollHeight
        }, t.prototype.getClientHeight = function () {
            return document.documentElement.clientHeight
        }, t.prototype.getClientWidth = function () {
            return document.documentElement.clientWidth
        }, t
    }(_r), Nr = function () {
        function e(e) {
            this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption])
        }

        return e.prototype.setIconOverride = function (e) {
            var t, n;
            if ("object" == typeof e && e) {
                for (n in t = r({}, this.iconClasses), e) t[n] = this.applyIconOverridePrefix(e[n]);
                this.iconClasses = t
            } else !1 === e && (this.iconClasses = {})
        }, e.prototype.applyIconOverridePrefix = function (e) {
            var t = this.iconOverridePrefix;
            return t && 0 !== e.indexOf(t) && (e = t + e), e
        }, e.prototype.getClass = function (e) {
            return this.classes[e] || ""
        }, e.prototype.getIconClass = function (e, t) {
            var n;
            return (n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e]) ? this.baseIconClass + " " + n : ""
        }, e.prototype.getCustomButtonIconClass = function (e) {
            var t;
            return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : ""
        }, e
    }();
    if (Nr.prototype.classes = {}, Nr.prototype.iconClasses = {}, Nr.prototype.baseIconClass = "", Nr.prototype.iconOverridePrefix = "", "undefined" == typeof FullCalendarVDom) throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
    var Hr = FullCalendarVDom.Component, Or = FullCalendarVDom.createElement, Ar = FullCalendarVDom.render,
        Ur = FullCalendarVDom.createRef, Lr = FullCalendarVDom.Fragment, Wr = FullCalendarVDom.createContext,
        Vr = FullCalendarVDom.flushToDom, Fr = FullCalendarVDom.unmountComponentAtNode, zr = function () {
            function e(e, t, n) {
                var o = this;
                this.execFunc = e, this.emitter = t, this.scrollTime = n, this.handleScrollRequest = function (e) {
                    o.queuedRequest = r({}, o.queuedRequest || {}, e), o.drain()
                }, t.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll()
            }

            return e.prototype.detach = function () {
                this.emitter.off("_scrollRequest", this.handleScrollRequest)
            }, e.prototype.update = function (e) {
                e ? this.fireInitialScroll() : this.drain()
            }, e.prototype.fireInitialScroll = function () {
                this.handleScrollRequest({time: this.scrollTime})
            }, e.prototype.drain = function () {
                this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null)
            }, e
        }(), Br = Wr({});

    function jr(e, t, n, r, o, i, a, s, l, u, c, d, p) {
        return {
            dateEnv: o,
            options: n,
            pluginHooks: a,
            emitter: u,
            dispatch: s,
            getCurrentData: l,
            calendarApi: c,
            viewSpec: e,
            viewApi: t,
            dateProfileGenerator: r,
            theme: i,
            isRtl: "rtl" === n.direction,
            addResizeHandler: function (e) {
                u.on("_resize", e)
            },
            removeResizeHandler: function (e) {
                u.off("_resize", e)
            },
            createScrollResponder: function (e) {
                return new zr(e, u, Xe(n.scrollTime))
            },
            registerInteractiveComponent: d,
            unregisterInteractiveComponent: p
        }
    }

    var Gr = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.shouldComponentUpdate = function (e, t) {
            return this.debug, !ze(this.props, e, this.propEquality) || !ze(this.state, t, this.stateEquality)
        }, t.addPropsEquality = Yr, t.addStateEquality = Zr, t.contextType = Br, t
    }(Hr);
    Gr.prototype.propEquality = {}, Gr.prototype.stateEquality = {};
    var qr = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.contextType = Br, t
    }(Gr);

    function Yr(e) {
        var t = Object.create(this.prototype.propEquality);
        r(t, e), this.prototype.propEquality = t
    }

    function Zr(e) {
        var t = Object.create(this.prototype.stateEquality);
        r(t, e), this.prototype.stateEquality = t
    }

    function Xr(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t)
    }

    function Kr(e, t, n, r, o) {
        switch (t.type) {
            case"RECEIVE_EVENTS":
                return function (e, t, n, r, o, i) {
                    if (t && n === t.latestFetchId) {
                        var a = Nt(function (e, t, n) {
                            var r = n.options.eventDataTransform, o = t ? t.eventDataTransform : null;
                            o && (e = Jr(e, o));
                            r && (e = Jr(e, r));
                            return e
                        }(o, t, i), t, i);
                        return r && (a = Ge(a, r, i)), Ut($r(e, t.sourceId), a)
                    }
                    return e
                }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);
            case"ADD_EVENTS":
                return function (e, t, n, r) {
                    n && (t = Ge(t, n, r));
                    return Ut(e, t)
                }(e, t.eventStore, r ? r.activeRange : null, o);
            case"RESET_EVENTS":
                return t.eventStore;
            case"MERGE_EVENTS":
                return Ut(e, t.eventStore);
            case"PREV":
            case"NEXT":
            case"CHANGE_DATE":
            case"CHANGE_VIEW_TYPE":
                return r ? Ge(e, r.activeRange, o) : e;
            case"REMOVE_EVENTS":
                return function (e, t) {
                    var n = e.defs, r = e.instances, o = {}, i = {};
                    for (var a in n) t.defs[a] || (o[a] = n[a]);
                    for (var s in r) !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
                    return {defs: o, instances: i}
                }(e, t.eventStore);
            case"REMOVE_EVENT_SOURCE":
                return $r(e, t.sourceId);
            case"REMOVE_ALL_EVENT_SOURCES":
                return Lt(e, function (e) {
                    return !e.sourceId
                });
            case"REMOVE_ALL_EVENTS":
                return {defs: {}, instances: {}};
            default:
                return e
        }
    }

    function Jr(e, t) {
        var n;
        if (t) {
            n = [];
            for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r], a = t(i);
                a ? n.push(a) : null == a && n.push(i)
            }
        } else n = e;
        return n
    }

    function $r(e, t) {
        return Lt(e, function (e) {
            return e.sourceId !== t
        })
    }

    function Qr(e, t) {
        return eo({eventDrag: e}, t)
    }

    function eo(e, t) {
        var n = t.getCurrentData(), o = r({
            businessHours: n.businessHours,
            dateSelection: "",
            eventStore: n.eventStore,
            eventUiBases: n.eventUiBases,
            eventSelection: "",
            eventDrag: null,
            eventResize: null
        }, e);
        return (t.pluginHooks.isPropsValid || to)(o, t)
    }

    function to(e, t, n, o) {
        return void 0 === n && (n = {}), !(e.eventDrag && !function (e, t, n, o) {
            var i = t.getCurrentData(), a = e.eventDrag, s = a.mutatedEvents, l = s.defs, u = s.instances,
                c = hn(l, a.isEvent ? e.eventUiBases : {"": i.selectionConfig});
            o && (c = Ue(c, o));
            var d = (v = e.eventStore, g = a.affectedEvents.instances, {
                defs: v.defs,
                instances: Ae(v.instances, function (e) {
                    return !g[e.instanceId]
                })
            }), p = d.defs, f = d.instances, h = hn(p, e.eventUiBases);
            var v, g;
            for (var m in u) {
                var y = u[m], E = y.range, S = c[y.defId], D = l[y.defId];
                if (!no(S.constraints, E, d, e.businessHours, t)) return !1;
                var b = t.options.eventOverlap, C = "function" == typeof b ? b : null;
                for (var w in f) {
                    var R = f[w];
                    if (sn(E, R.range)) {
                        var T = h[R.defId].overlap;
                        if (!1 === T && a.isEvent) return !1;
                        if (!1 === S.overlap) return !1;
                        if (C && !C(new zn(t, p[R.defId], R), new zn(t, D, y))) return !1
                    }
                }
                for (var k = i.eventStore, M = 0, x = S.allows; M < x.length; M++) {
                    var _ = x[M], I = r(r({}, n), {range: y.range, allDay: D.allDay}), P = k.defs[D.defId],
                        N = k.instances[m], H = void 0;
                    if (H = P ? new zn(t, P, N) : new zn(t, D), !_(In(I, t), H)) return !1
                }
            }
            return !0
        }(e, t, n, o)) && !(e.dateSelection && !function (e, t, n, o) {
            var i = e.eventStore, a = i.defs, s = i.instances, l = e.dateSelection, u = l.range,
                c = t.getCurrentData().selectionConfig;
            o && (c = o(c));
            if (!no(c.constraints, u, i, e.businessHours, t)) return !1;
            var d = t.options.selectOverlap, p = "function" == typeof d ? d : null;
            for (var f in s) {
                var h = s[f];
                if (sn(u, h.range)) {
                    if (!1 === c.overlap) return !1;
                    if (p && !p(new zn(t, a[h.defId], h), null)) return !1
                }
            }
            for (var v = 0, g = c.allows; v < g.length; v++) {
                var m = g[v], y = r(r({}, n), l);
                if (!m(In(y, t), null)) return !1
            }
            return !0
        }(e, t, n, o))
    }

    function no(e, t, n, r, o) {
        for (var i = 0, a = e; i < a.length; i++) {
            if (!io(ro(a[i], t, n, r, o), t)) return !1
        }
        return !0
    }

    function ro(e, t, n, r, o) {
        return "businessHours" === e ? oo(Ge(r, t, o)) : "string" == typeof e ? oo(Lt(n, function (t) {
            return t.groupId === e
        })) : "object" == typeof e && e ? oo(Ge(e, t, o)) : []
    }

    function oo(e) {
        var t = e.instances, n = [];
        for (var r in t) n.push(t[r].range);
        return n
    }

    function io(e, t) {
        for (var n = 0, r = e; n < r.length; n++) {
            if (ln(r[n], t)) return !0
        }
        return !1
    }

    var ao = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.uid = ee(), t
        }

        return n(t, e), t.prototype.prepareHits = function () {
        }, t.prototype.queryHit = function (e, t, n, r) {
            return null
        }, t.prototype.isInteractionValid = function (e) {
            var t = this.props.dateProfile, n = e.mutatedEvents.instances;
            if (t) for (var r in n) if (!ln(t.validRange, n[r].range)) return !1;
            return Qr(e, this.context)
        }, t.prototype.isDateSelectionValid = function (e) {
            var t, n, r = this.props.dateProfile;
            return !(r && !ln(r.validRange, e.range)) && (t = e, n = this.context, eo({dateSelection: t}, n))
        }, t.prototype.isValidSegDownEl = function (e) {
            return !this.props.eventDrag && !this.props.eventResize && !z(e, ".fc-event-mirror")
        }, t.prototype.isValidDateDownEl = function (e) {
            return !(z(e, ".fc-event:not(.fc-bg-event)") || z(e, ".fc-daygrid-more-link") || z(e, "a[data-navlink]") || z(e, ".fc-popover"))
        }, t
    }(qr);

    function so(e) {
        return {
            id: ee(),
            deps: e.deps || [],
            reducers: e.reducers || [],
            isLoadingFuncs: e.isLoadingFuncs || [],
            contextInit: [].concat(e.contextInit || []),
            eventRefiners: e.eventRefiners || {},
            eventDefMemberAdders: e.eventDefMemberAdders || [],
            eventSourceRefiners: e.eventSourceRefiners || {},
            isDraggableTransformers: e.isDraggableTransformers || [],
            eventDragMutationMassagers: e.eventDragMutationMassagers || [],
            eventDefMutationAppliers: e.eventDefMutationAppliers || [],
            dateSelectionTransformers: e.dateSelectionTransformers || [],
            datePointTransforms: e.datePointTransforms || [],
            dateSpanTransforms: e.dateSpanTransforms || [],
            views: e.views || {},
            viewPropsTransformers: e.viewPropsTransformers || [],
            isPropsValid: e.isPropsValid || null,
            externalDefTransforms: e.externalDefTransforms || [],
            eventResizeJoinTransforms: e.eventResizeJoinTransforms || [],
            viewContainerAppends: e.viewContainerAppends || [],
            eventDropTransformers: e.eventDropTransformers || [],
            componentInteractions: e.componentInteractions || [],
            calendarInteractions: e.calendarInteractions || [],
            themeClasses: e.themeClasses || {},
            eventSourceDefs: e.eventSourceDefs || [],
            cmdFormatter: e.cmdFormatter,
            recurringTypes: e.recurringTypes || [],
            namedTimeZonedImpl: e.namedTimeZonedImpl,
            initialView: e.initialView || "",
            elementDraggingImpl: e.elementDraggingImpl,
            optionChangeHandlers: e.optionChangeHandlers || {},
            scrollGridImpl: e.scrollGridImpl || null,
            contentTypeHandlers: e.contentTypeHandlers || {},
            listenerRefiners: e.listenerRefiners || {},
            optionRefiners: e.optionRefiners || {},
            propSetHandlers: e.propSetHandlers || {}
        }
    }

    var lo = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t
    }(Nr);

    function uo(e, t, n, o) {
        if (t[e]) return t[e];
        var i = function (e, t, n, o) {
            var i = n[e], a = o[e], s = function (e) {
                return i && null !== i[e] ? i[e] : a && null !== a[e] ? a[e] : null
            }, l = s("component"), u = s("superType"), c = null;
            if (u) {
                if (u === e) throw new Error("Can't have a custom view type that references itself");
                c = uo(u, t, n, o)
            }
            !l && c && (l = c.component);
            if (!l) return null;
            return {
                type: e,
                component: l,
                defaults: r(r({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
                overrides: r(r({}, c ? c.overrides : {}), a ? a.rawOptions : {})
            }
        }(e, t, n, o);
        return i && (t[e] = i), i
    }

    lo.prototype.classes = {
        root: "fc-theme-standard",
        tableCellShaded: "fc-cell-shaded",
        buttonGroup: "fc-button-group",
        button: "fc-button fc-button-primary",
        buttonActive: "fc-button-active"
    }, lo.prototype.baseIconClass = "fc-icon", lo.prototype.iconClasses = {
        close: "fc-icon-x",
        prev: "fc-icon-chevron-left",
        next: "fc-icon-chevron-right",
        prevYear: "fc-icon-chevrons-left",
        nextYear: "fc-icon-chevrons-right"
    }, lo.prototype.rtlIconClasses = {
        prev: "fc-icon-chevron-right",
        next: "fc-icon-chevron-left",
        prevYear: "fc-icon-chevrons-right",
        nextYear: "fc-icon-chevrons-left"
    }, lo.prototype.iconOverrideOption = "buttonIcons", lo.prototype.iconOverrideCustomButtonOption = "icon", lo.prototype.iconOverridePrefix = "fc-icon-";
    var co = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = Ur(), t.handleRootEl = function (e) {
                Xr(t.rootElRef, e), t.props.elRef && Xr(t.props.elRef, e)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props, n = t.hookProps;
            return Or(vo, {
                hookProps: n,
                didMount: t.didMount,
                willUnmount: t.willUnmount,
                elRef: this.handleRootEl
            }, function (r) {
                return Or(fo, {
                    hookProps: n,
                    content: t.content,
                    defaultContent: t.defaultContent,
                    backupElRef: e.rootElRef
                }, function (e, o) {
                    return t.children(r, mo(t.classNames, n), e, o)
                })
            })
        }, t
    }(qr), po = Wr(0);

    function fo(e) {
        return Or(po.Consumer, null, function (t) {
            return Or(ho, r({renderId: t}, e))
        })
    }

    var ho = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.innerElRef = Ur(), t
        }

        return n(t, e), t.prototype.render = function () {
            return this.props.children(this.innerElRef, this.renderInnerContent())
        }, t.prototype.componentDidMount = function () {
            this.updateCustomContent()
        }, t.prototype.componentDidUpdate = function () {
            this.updateCustomContent()
        }, t.prototype.componentWillUnmount = function () {
            this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy()
        }, t.prototype.renderInnerContent = function () {
            var e = this.context.pluginHooks.contentTypeHandlers, t = this.props, n = this.customContentInfo,
                o = yo(t.content, t.hookProps), i = null;
            if (void 0 === o && (o = yo(t.defaultContent, t.hookProps)), void 0 !== o) {
                if (n) n.contentVal = o[n.contentKey]; else if ("object" == typeof o) for (var a in e) if (void 0 !== o[a]) {
                    var s = e[a]();
                    n = this.customContentInfo = r({contentKey: a, contentVal: o[a]}, s);
                    break
                }
                i = n ? [] : o
            }
            return i
        }, t.prototype.updateCustomContent = function () {
            this.customContentInfo && this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, this.customContentInfo.contentVal)
        }, t
    }(qr), vo = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleRootEl = function (e) {
                t.rootEl = e, t.props.elRef && Xr(t.props.elRef, e)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            return this.props.children(this.handleRootEl)
        }, t.prototype.componentDidMount = function () {
            var e = this.props.didMount;
            e && e(r(r({}, this.props.hookProps), {el: this.rootEl}))
        }, t.prototype.componentWillUnmount = function () {
            var e = this.props.willUnmount;
            e && e(r(r({}, this.props.hookProps), {el: this.rootEl}))
        }, t
    }(qr);

    function go() {
        var e, t, n = [];
        return function (r, o) {
            return t && Ve(t, o) && r === e || (e = r, t = o, n = mo(r, o)), n
        }
    }

    function mo(e, t) {
        return "function" == typeof e && (e = e(t)), Wt(e)
    }

    function yo(e, t) {
        return "function" == typeof e ? e(t, Or) : e
    }

    var Eo = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.normalizeClassNames = go(), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.options, r = {view: t.viewApi},
                o = this.normalizeClassNames(n.viewClassNames, r);
            return Or(vo, {
                hookProps: r,
                didMount: n.viewDidMount,
                willUnmount: n.viewWillUnmount,
                elRef: e.elRef
            }, function (t) {
                return e.children(t, ["fc-" + e.viewSpec.type + "-view", "fc-view"].concat(o))
            })
        }, t
    }(qr);

    function So(e) {
        return Ue(e, Do)
    }

    function Do(e) {
        var t, n = "function" == typeof e ? {component: e} : e, o = n.component;
        return n.content && (t = n, o = function (e) {
            return Or(Br.Consumer, null, function (n) {
                return Or(Eo, {viewSpec: n.viewSpec}, function (o, i) {
                    var a = r(r({}, e), {nextDayThreshold: n.options.nextDayThreshold});
                    return Or(co, {
                        hookProps: a,
                        classNames: t.classNames,
                        content: t.content,
                        didMount: t.didMount,
                        willUnmount: t.willUnmount,
                        elRef: o
                    }, function (e, t, n, r) {
                        return Or("div", {className: i.concat(t).join(" "), ref: e}, r)
                    })
                })
            })
        }), {superType: n.type, component: o, rawOptions: n}
    }

    function bo(e, t, n, o) {
        var i = So(e), a = So(t.views);
        return Ue(function (e, t) {
            var n, r = {};
            for (n in e) uo(n, r, e, t);
            for (n in t) uo(n, r, e, t);
            return r
        }(i, a), function (e) {
            return function (e, t, n, o, i) {
                var a = e.overrides.duration || e.defaults.duration || o.duration || n.duration, s = null, l = "",
                    u = "", c = {};
                if (a && (s = function (e) {
                    var t = JSON.stringify(e), n = Co[t];
                    void 0 === n && (n = Xe(e), Co[t] = n);
                    return n
                }(a))) {
                    var d = nt(s);
                    l = d.unit, 1 === d.value && (u = l, c = t[l] ? t[l].rawOptions : {})
                }
                var p = function (t) {
                    var n = t.buttonText || {}, r = e.defaults.buttonTextKey;
                    return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[u] ? n[u] : null
                };
                return {
                    type: e.type,
                    component: e.component,
                    duration: s,
                    durationUnit: l,
                    singleUnit: u,
                    optionDefaults: e.defaults,
                    optionOverrides: r(r({}, c), e.overrides),
                    buttonTextOverride: p(o) || p(n) || e.overrides.buttonText,
                    buttonTextDefault: p(i) || e.defaults.buttonText || p(wt) || e.type
                }
            }(e, a, t, n, o)
        })
    }

    var Co = {};
    var wo = function () {
        function e(e) {
            this.props = e, this.nowDate = Vn(e.nowInput, e.dateEnv), this.initHiddenDays()
        }

        return e.prototype.buildPrev = function (e, t, n) {
            if ("month" == e.currentRangeUnit) {
                var r = new persianDate(t);
                r.date(6), r.month(r.month() - 1);
                var o = r.toDate();
                return this.build(o, -1, n)
            }
            var i = this.props.dateEnv;
            o = i.subtract(i.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(o, -1, n)
        }, e.prototype.buildNext = function (e, t, n) {
            if ("month" == e.currentRangeUnit) {
                var r = new persianDate(t);
                r.date(6), r.month(r.month() + 1);
                var o = r.toDate();
                return this.build(o, 1, n)
            }
            var i = this.props.dateEnv;
            o = i.add(i.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(o, 1, n)
        }, e.prototype.build = function (e, t, n) {
            void 0 === n && (n = !0);
            var r, o, i, a, s, l, u, c, d = this.props;
            return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (u = e, e = null != (c = r).start && u < c.start ? c.start : null != c.end && u >= c.end ? new Date(c.end.valueOf() - 1) : u), o = this.buildCurrentRangeInfo(e, t), i = /^(year|month|week|day)$/.test(o.unit), a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, i), s = a = this.trimHiddenDays(a), d.showNonCurrentDates || (s = on(s, o.range)), s = on(s = this.adjustActiveRange(s), r), l = sn(o.range, r), {
                validRange: r,
                currentRange: o.range,
                currentRangeUnit: o.unit,
                isRangeAllDay: i,
                activeRange: s,
                renderRange: a,
                slotMinTime: d.slotMinTime,
                slotMaxTime: d.slotMaxTime,
                isValid: l,
                dateIncrement: this.buildDateIncrement(o.duration)
            }
        }, e.prototype.buildValidRange = function () {
            var e = this.props.validRangeInput,
                t = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
            return this.refineRange(t) || {start: null, end: null}
        }, e.prototype.buildCurrentRangeInfo = function (e, t) {
            var n, r = this.props, o = null, i = null, a = null;
            return r.duration ? (o = r.duration, i = r.durationUnit, a = this.buildRangeFromDuration(e, t, o, i)) : (n = this.props.dayCount) ? (i = "day", a = this.buildRangeFromDayCount(e, t, n)) : (a = this.buildCustomVisibleRange(e)) ? i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit : (i = nt(o = this.getFallbackDuration()).unit, a = this.buildRangeFromDuration(e, t, o, i)), {
                duration: o,
                unit: i,
                range: a
            }
        }, e.prototype.getFallbackDuration = function () {
            return Xe({day: 1})
        }, e.prototype.adjustActiveRange = function (e) {
            var t = this.props, n = t.dateEnv, r = t.usesMinMaxTime, o = t.slotMinTime, i = t.slotMaxTime, a = e.start,
                s = e.end;
            return r && (Qe(o) < 0 && (a = we(a), a = n.add(a, o)), Qe(i) > 1 && (s = me(s = we(s), -1), s = n.add(s, i))), {
                start: a,
                end: s
            }
        }, e.prototype.buildRangeFromDuration = function (e, t, n, r) {
            var o, i, a, s = this.props, l = s.dateEnv, u = s.dateAlignment;
            if (!u) {
                var c = this.props.dateIncrement;
                u = c && et(c) < et(n) ? nt(c).unit : r
            }

            function d() {
                if ("month" == u) {
                    var t = new persianDate(e);
                    t.date(1);
                    var r = t.clone();
                    r.month(r.month() + 1);
                    var s = t.toDate();
                    (s = we(s)).getDate() < t.toDate().getDate() ? s.setDate(s.getDate() + 1) : s.getDate() > t.toDate().getDate() && s.setDate(s.getDate() - 1), t = new persianDate(s);
                    var c = r.toDate();
                    (c = we(c)).getDate() < r.toDate().getDate() ? c.setDate(c.getDate() - 1) : c.getDate() > r.toDate().getDate() && c.setDate(c.getDate() + 1), r = new persianDate(c), a = {
                        start: t.toDate(),
                        end: r.toDate()
                    }
                } else o = l.startOf(e, u), i = l.add(o, n), a = {start: o, end: i}
            }

            return Qe(n) <= 1 && this.isHiddenDay(o) && (o = we(o = this.skipHiddenDays(o, t))), d(), this.trimHiddenDays(a) || (e = this.skipHiddenDays(e, t), d()), a
        }, e.prototype.buildRangeFromDayCount = function (e, t, n) {
            var r, o = this.props, i = o.dateEnv, a = o.dateAlignment, s = 0, l = e;
            a && (l = i.startOf(l, a)), l = we(l), r = l = this.skipHiddenDays(l, t);
            do {
                r = me(r, 1), this.isHiddenDay(r) || (s += 1)
            } while (s < n);
            return {start: l, end: r}
        }, e.prototype.buildCustomVisibleRange = function (e) {
            var t = this.props, n = t.visibleRangeInput,
                r = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n, o = this.refineRange(r);
            return !o || null != o.start && null != o.end ? o : null
        }, e.prototype.buildRenderRange = function (e, t, n) {
            return e
        }, e.prototype.buildDateIncrement = function (e) {
            var t, n = this.props.dateIncrement;
            return n || ((t = this.props.dateAlignment) ? Xe(1, t) : e || Xe({days: 1}))
        }, e.prototype.refineRange = function (e) {
            if (e) {
                var t = (n = e, r = this.props.dateEnv, o = null, i = null, n.start && (o = r.createMarker(n.start)), n.end && (i = r.createMarker(n.end)), o || i ? o && i && i < o ? null : {
                    start: o,
                    end: i
                } : null);
                return t && (t = Qt(t)), t
            }
            var n, r, o, i;
            return null
        }, e.prototype.initHiddenDays = function () {
            var e, t = this.props.hiddenDays || [], n = [], r = 0;
            for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1) (n[e] = -1 !== t.indexOf(e)) || (r += 1);
            if (!r) throw new Error("invalid hiddenDays");
            this.isHiddenDayHash = n
        }, e.prototype.trimHiddenDays = function (e) {
            var t = e.start, n = e.end;
            return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null == t || null == n || t < n ? {
                start: t,
                end: n
            } : null
        }, e.prototype.isHiddenDay = function (e) {
            return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e]
        }, e.prototype.skipHiddenDays = function (e, t, n) {
            for (void 0 === t && (t = 1), void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) e = me(e, t);
            return e
        }, e
    }();

    function Ro(e, t, n) {
        var r = t ? t.activeRange : null;
        return Mo({}, function (e, t) {
            var n = Wn(t), r = [].concat(e.eventSources || []), o = [];
            e.initialEvents && r.unshift(e.initialEvents);
            e.events && r.unshift(e.events);
            for (var i = 0, a = r; i < a.length; i++) {
                var s = a[i], l = Ln(s, t, n);
                l && o.push(l)
            }
            return o
        }(e, n), r, n)
    }

    function To(e, t, n, o) {
        var i, a, s = n ? n.activeRange : null;
        switch (t.type) {
            case"ADD_EVENT_SOURCES":
                return Mo(e, t.sources, s, o);
            case"REMOVE_EVENT_SOURCE":
                return i = e, a = t.sourceId, Ae(i, function (e) {
                    return e.sourceId !== a
                });
            case"PREV":
            case"NEXT":
            case"CHANGE_DATE":
            case"CHANGE_VIEW_TYPE":
                return n ? xo(e, s, o) : e;
            case"FETCH_EVENT_SOURCES":
                return _o(e, t.sourceIds ? Le(t.sourceIds) : Po(e, o), s, o);
            case"RECEIVE_EVENTS":
            case"RECEIVE_EVENT_ERROR":
                return function (e, t, n, o) {
                    var i, a = e[t];
                    if (a && n === a.latestFetchId) return r(r({}, e), ((i = {})[t] = r(r({}, a), {
                        isFetching: !1,
                        fetchRange: o
                    }), i));
                    return e
                }(e, t.sourceId, t.fetchId, t.fetchRange);
            case"REMOVE_ALL_EVENT_SOURCES":
                return {};
            default:
                return e
        }
    }

    function ko(e) {
        for (var t in e) if (e[t].isFetching) return !0;
        return !1
    }

    function Mo(e, t, n, o) {
        for (var i = {}, a = 0, s = t; a < s.length; a++) {
            var l = s[a];
            i[l.sourceId] = l
        }
        return n && (i = xo(i, n, o)), r(r({}, e), i)
    }

    function xo(e, t, n) {
        return _o(e, Ae(e, function (e) {
            return function (e, t, n) {
                if (!No(e, n)) return !e.latestFetchId;
                return !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end
            }(e, t, n)
        }), t, n)
    }

    function _o(e, t, n, r) {
        var o = {};
        for (var i in e) {
            var a = e[i];
            t[i] ? o[i] = Io(a, n, r) : o[i] = a
        }
        return o
    }

    function Io(e, t, n) {
        var o = n.options, i = n.calendarApi, a = n.pluginHooks.eventSourceDefs[e.sourceDefId], s = ee();
        return a.fetch({eventSource: e, range: t, context: n}, function (r) {
            var a = r.rawEvents;
            o.eventSourceSuccess && (a = o.eventSourceSuccess.call(i, a, r.xhr) || a), e.success && (a = e.success.call(i, a, r.xhr) || a), n.dispatch({
                type: "RECEIVE_EVENTS",
                sourceId: e.sourceId,
                fetchId: s,
                fetchRange: t,
                rawEvents: a
            })
        }, function (r) {
            console.warn(r.message, r), o.eventSourceFailure && o.eventSourceFailure.call(i, r), e.failure && e.failure(r), n.dispatch({
                type: "RECEIVE_EVENT_ERROR",
                sourceId: e.sourceId,
                fetchId: s,
                fetchRange: t,
                error: r
            })
        }), r(r({}, e), {isFetching: !0, latestFetchId: s})
    }

    function Po(e, t) {
        return Ae(e, function (e) {
            return No(e, t)
        })
    }

    function No(e, t) {
        return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange
    }

    function Ho(e, t) {
        switch (t.type) {
            case"UNSELECT_DATES":
                return null;
            case"SELECT_DATES":
                return t.selection;
            default:
                return e
        }
    }

    function Oo(e, t) {
        switch (t.type) {
            case"UNSELECT_EVENT":
                return "";
            case"SELECT_EVENT":
                return t.eventInstanceId;
            default:
                return e
        }
    }

    function Ao(e, t) {
        var n;
        switch (t.type) {
            case"UNSET_EVENT_DRAG":
                return null;
            case"SET_EVENT_DRAG":
                return {
                    affectedEvents: (n = t.state).affectedEvents,
                    mutatedEvents: n.mutatedEvents,
                    isEvent: n.isEvent
                };
            default:
                return e
        }
    }

    function Uo(e, t) {
        var n;
        switch (t.type) {
            case"UNSET_EVENT_RESIZE":
                return null;
            case"SET_EVENT_RESIZE":
                return {
                    affectedEvents: (n = t.state).affectedEvents,
                    mutatedEvents: n.mutatedEvents,
                    isEvent: n.isEvent
                };
            default:
                return e
        }
    }

    function Lo(e, t, n, r, o) {
        var i = [];
        return {
            headerToolbar: e.headerToolbar ? Wo(e.headerToolbar, e, t, n, r, o, i) : null,
            footerToolbar: e.footerToolbar ? Wo(e.footerToolbar, e, t, n, r, o, i) : null,
            viewsWithButtons: i
        }
    }

    function Wo(e, t, n, r, o, i, a) {
        return Ue(e, function (e) {
            return function (e, t, n, r, o, i, a) {
                var s = "rtl" === t.direction, l = t.customButtons || {}, u = n.buttonText || {},
                    c = t.buttonText || {};
                return (e ? e.split(" ") : []).map(function (e) {
                    return e.split(",").map(function (e) {
                        return "title" === e ? {buttonName: e} : ((t = l[e]) ? (d = function (e) {
                            t.click && t.click.call(e.target, e, e.target)
                        }, (p = r.getCustomButtonIconClass(t)) || (p = r.getIconClass(e, s)) || (f = t.text)) : (n = o[e]) ? (a.push(e), d = function () {
                            i.changeView(e)
                        }, (f = n.buttonTextOverride) || (p = r.getIconClass(e, s)) || (f = n.buttonTextDefault)) : i[e] && (d = function () {
                            i[e]()
                        }, (f = u[e]) || (p = r.getIconClass(e, s)) || (f = c[e])), {
                            buttonName: e,
                            buttonClick: d,
                            buttonIcon: p,
                            buttonText: f
                        });
                        var t, n, d, p, f
                    })
                })
            }(e, t, n, r, o, i, a)
        })
    }

    function Vo(e, t, n, r, o) {
        var i = null;
        "GET" === (e = e.toUpperCase()) ? t = function (e, t) {
            return e + (-1 === e.indexOf("?") ? "?" : "&") + Fo(t)
        }(t, n) : i = Fo(n);
        var a = new XMLHttpRequest;
        a.open(e, t, !0), "GET" !== e && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.onload = function () {
            if (a.status >= 200 && a.status < 400) {
                var e = !1, t = void 0;
                try {
                    t = JSON.parse(a.responseText), e = !0
                } catch (e) {
                }
                e ? r(t, a) : o("Failure parsing JSON", a)
            } else o("Request failed", a)
        }, a.onerror = function () {
            o("Request failed", a)
        }, a.send(i)
    }

    function Fo(e) {
        var t = [];
        for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }

    function zo(e, t) {
        for (var n = We(t.getCurrentData().eventSources), r = [], o = 0, i = e; o < i.length; o++) {
            for (var a = i[o], s = !1, l = 0; l < n.length; l += 1) if (n[l]._raw === a) {
                n.splice(l, 1), s = !0;
                break
            }
            s || r.push(a)
        }
        for (var u = 0, c = n; u < c.length; u++) {
            var d = c[u];
            t.dispatch({type: "REMOVE_EVENT_SOURCE", sourceId: d.sourceId})
        }
        for (var p = 0, f = r; p < f.length; p++) {
            var h = f[p];
            t.calendarApi.addEventSource(h)
        }
    }

    var Bo = [so({
        eventSourceDefs: [{
            ignoreRange: !0, parseMeta: function (e) {
                return Array.isArray(e.events) ? e.events : null
            }, fetch: function (e, t) {
                t({rawEvents: e.eventSource.meta})
            }
        }]
    }), so({
        eventSourceDefs: [{
            parseMeta: function (e) {
                return "function" == typeof e.events ? e.events : null
            }, fetch: function (e, t, n) {
                var r = e.context.dateEnv;
                kr(e.eventSource.meta.bind(null, Mn(e.range, r)), function (e) {
                    t({rawEvents: e})
                }, n)
            }
        }]
    }), so({
        eventSourceRefiners: {
            method: String,
            extraParams: Pt,
            startParam: String,
            endParam: String,
            timeZoneParam: String
        }, eventSourceDefs: [{
            parseMeta: function (e) {
                return !e.url || "json" !== e.format && e.format ? null : {
                    url: e.url,
                    format: "json",
                    method: (e.method || "GET").toUpperCase(),
                    extraParams: e.extraParams,
                    startParam: e.startParam,
                    endParam: e.endParam,
                    timeZoneParam: e.timeZoneParam
                }
            }, fetch: function (e, t, n) {
                var o = e.eventSource.meta, i = function (e, t, n) {
                    var o, i, a, s, l = n.dateEnv, u = n.options, c = {};
                    null == (o = e.startParam) && (o = u.startParam);
                    null == (i = e.endParam) && (i = u.endParam);
                    null == (a = e.timeZoneParam) && (a = u.timeZoneParam);
                    s = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                    r(c, s), c[o] = l.formatIso(t.start), c[i] = l.formatIso(t.end), "local" !== l.timeZone && (c[a] = l.timeZone);
                    return c
                }(o, e.range, e.context);
                Vo(o.method, o.url, i, function (e, n) {
                    t({rawEvents: e, xhr: n})
                }, function (e, t) {
                    n({message: e, xhr: t})
                })
            }
        }]
    }), so({
        recurringTypes: [{
            parse: function (e, t) {
                if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
                    var n = {
                        daysOfWeek: e.daysOfWeek || null,
                        startTime: e.startTime || null,
                        endTime: e.endTime || null,
                        startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
                        endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
                    }, r = void 0;
                    return e.duration && (r = e.duration), !r && e.startTime && e.endTime && (o = e.endTime, i = e.startTime, r = {
                        years: o.years - i.years,
                        months: o.months - i.months,
                        days: o.days - i.days,
                        milliseconds: o.milliseconds - i.milliseconds
                    }), {allDayGuess: Boolean(!e.startTime && !e.endTime), duration: r, typeData: n}
                }
                var o, i;
                return null
            }, expand: function (e, t, n) {
                var r = on(t, {start: e.startRecur, end: e.endRecur});
                return r ? function (e, t, n, r) {
                    var o = e ? Le(e) : null, i = we(n.start), a = n.end, s = [];
                    for (; i < a;) {
                        var l = void 0;
                        o && !o[i.getUTCDay()] || (l = t ? r.add(i, t) : i, s.push(l)), i = me(i, 1)
                    }
                    return s
                }(e.daysOfWeek, e.startTime, r, n) : []
            }
        }], eventRefiners: {daysOfWeek: Pt, startTime: Xe, endTime: Xe, duration: Xe, startRecur: Pt, endRecur: Pt}
    }), so({
        optionChangeHandlers: {
            events: function (e, t) {
                zo([e], t)
            }, eventSources: zo
        }
    }), so({
        isLoadingFuncs: [function (e) {
            return ko(e.eventSources)
        }], contentTypeHandlers: {
            html: function () {
                return {render: jo}
            }, domNodes: function () {
                return {render: Go}
            }
        }, propSetHandlers: {
            dateProfile: function (e, t) {
                t.emitter.trigger("datesSet", r(r({}, Mn(e.activeRange, t.dateEnv)), {view: t.viewApi}))
            }, eventStore: function (e, t) {
                var n = t.emitter;
                n.hasHandlers("eventsSet") && n.trigger("eventsSet", jn(e, t))
            }
        }
    })];

    function jo(e, t) {
        e.innerHTML = t
    }

    function Go(e, t) {
        var n = Array.prototype.slice.call(e.childNodes), r = Array.prototype.slice.call(t);
        if (!at(n, r)) {
            for (var o = 0, i = r; o < i.length; o++) {
                var a = i[o];
                e.appendChild(a)
            }
            n.forEach(F)
        }
    }

    var qo = function () {
        function e(e) {
            this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0
        }

        return e.prototype.request = function (e) {
            this.isDirty = !0, this.isPaused() || (this.clearTimeout(), null == e ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e))
        }, e.prototype.pause = function (e) {
            void 0 === e && (e = "");
            var t = this.pauseDepths;
            t[e] = (t[e] || 0) + 1, this.clearTimeout()
        }, e.prototype.resume = function (e, t) {
            void 0 === e && (e = "");
            var n = this.pauseDepths;
            if (e in n) {
                if (t) delete n[e]; else n[e] -= 1, n[e] <= 0 && delete n[e];
                this.tryDrain()
            }
        }, e.prototype.isPaused = function () {
            return Object.keys(this.pauseDepths).length
        }, e.prototype.tryDrain = function () {
            if (!this.isRunning && !this.isPaused()) {
                for (this.isRunning = !0; this.isDirty;) this.isDirty = !1, this.drained();
                this.isRunning = !1
            }
        }, e.prototype.clear = function () {
            this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {}
        }, e.prototype.clearTimeout = function () {
            this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0)
        }, e.prototype.drained = function () {
            this.drainedOption && this.drainedOption()
        }, e
    }(), Yo = function () {
        function e(e, t) {
            this.runTaskOption = e, this.drainedOption = t, this.queue = [], this.delayedRunner = new qo(this.drain.bind(this))
        }

        return e.prototype.request = function (e, t) {
            this.queue.push(e), this.delayedRunner.request(t)
        }, e.prototype.pause = function (e) {
            this.delayedRunner.pause(e)
        }, e.prototype.resume = function (e, t) {
            this.delayedRunner.resume(e, t)
        }, e.prototype.drain = function () {
            for (var e = this.queue; e.length;) {
                for (var t = [], n = void 0; n = e.shift();) this.runTask(n), t.push(n);
                this.drained(t)
            }
        }, e.prototype.runTask = function (e) {
            this.runTaskOption && this.runTaskOption(e)
        }, e.prototype.drained = function (e) {
            this.drainedOption && this.drainedOption(e)
        }, e
    }();

    function Zo(e, t, n) {
        var r;
        return r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange, n.formatRange(r.start, r.end, bt(t.titleFormat || function (e) {
            var t = e.currentRangeUnit;
            if ("year" === t) return {year: "numeric"};
            if ("month" === t) return {year: "numeric", month: "long"};
            var n = Ce(e.currentRange.start, e.currentRange.end);
            if (null !== n && n > 1) return {year: "numeric", month: "short", day: "numeric"};
            return {year: "numeric", month: "long", day: "numeric"}
        }(e)), {isEndExclusive: e.isRangeAllDay, defaultSeparator: t.titleRangeSeparator})
    }

    var Xo = function () {
        function e(e) {
            var t, n, o, i = this;
            this.computeOptionsData = st(this._computeOptionsData), this.computeCurrentViewData = st(this._computeCurrentViewData), this.organizeRawLocales = st(Qn), this.buildLocale = st(er), this.buildPluginHooks = (n = [], o = [], function (e, i) {
                return t && at(e, n) && at(i, o) || (t = function (e, t) {
                    var n = {}, o = {
                        reducers: [],
                        isLoadingFuncs: [],
                        contextInit: [],
                        eventRefiners: {},
                        eventDefMemberAdders: [],
                        eventSourceRefiners: {},
                        isDraggableTransformers: [],
                        eventDragMutationMassagers: [],
                        eventDefMutationAppliers: [],
                        dateSelectionTransformers: [],
                        datePointTransforms: [],
                        dateSpanTransforms: [],
                        views: {},
                        viewPropsTransformers: [],
                        isPropsValid: null,
                        externalDefTransforms: [],
                        eventResizeJoinTransforms: [],
                        viewContainerAppends: [],
                        eventDropTransformers: [],
                        componentInteractions: [],
                        calendarInteractions: [],
                        themeClasses: {},
                        eventSourceDefs: [],
                        cmdFormatter: null,
                        recurringTypes: [],
                        namedTimeZonedImpl: null,
                        initialView: "",
                        elementDraggingImpl: null,
                        optionChangeHandlers: {},
                        scrollGridImpl: null,
                        contentTypeHandlers: {},
                        listenerRefiners: {},
                        optionRefiners: {},
                        propSetHandlers: {}
                    };

                    function i(e) {
                        for (var t = 0, a = e; t < a.length; t++) {
                            var s = a[t];
                            n[s.id] || (n[s.id] = !0, i(s.deps), u = s, o = {
                                reducers: (l = o).reducers.concat(u.reducers),
                                isLoadingFuncs: l.isLoadingFuncs.concat(u.isLoadingFuncs),
                                contextInit: l.contextInit.concat(u.contextInit),
                                eventRefiners: r(r({}, l.eventRefiners), u.eventRefiners),
                                eventDefMemberAdders: l.eventDefMemberAdders.concat(u.eventDefMemberAdders),
                                eventSourceRefiners: r(r({}, l.eventSourceRefiners), u.eventSourceRefiners),
                                isDraggableTransformers: l.isDraggableTransformers.concat(u.isDraggableTransformers),
                                eventDragMutationMassagers: l.eventDragMutationMassagers.concat(u.eventDragMutationMassagers),
                                eventDefMutationAppliers: l.eventDefMutationAppliers.concat(u.eventDefMutationAppliers),
                                dateSelectionTransformers: l.dateSelectionTransformers.concat(u.dateSelectionTransformers),
                                datePointTransforms: l.datePointTransforms.concat(u.datePointTransforms),
                                dateSpanTransforms: l.dateSpanTransforms.concat(u.dateSpanTransforms),
                                views: r(r({}, l.views), u.views),
                                viewPropsTransformers: l.viewPropsTransformers.concat(u.viewPropsTransformers),
                                isPropsValid: u.isPropsValid || l.isPropsValid,
                                externalDefTransforms: l.externalDefTransforms.concat(u.externalDefTransforms),
                                eventResizeJoinTransforms: l.eventResizeJoinTransforms.concat(u.eventResizeJoinTransforms),
                                viewContainerAppends: l.viewContainerAppends.concat(u.viewContainerAppends),
                                eventDropTransformers: l.eventDropTransformers.concat(u.eventDropTransformers),
                                calendarInteractions: l.calendarInteractions.concat(u.calendarInteractions),
                                componentInteractions: l.componentInteractions.concat(u.componentInteractions),
                                themeClasses: r(r({}, l.themeClasses), u.themeClasses),
                                eventSourceDefs: l.eventSourceDefs.concat(u.eventSourceDefs),
                                cmdFormatter: u.cmdFormatter || l.cmdFormatter,
                                recurringTypes: l.recurringTypes.concat(u.recurringTypes),
                                namedTimeZonedImpl: u.namedTimeZonedImpl || l.namedTimeZonedImpl,
                                initialView: l.initialView || u.initialView,
                                elementDraggingImpl: l.elementDraggingImpl || u.elementDraggingImpl,
                                optionChangeHandlers: r(r({}, l.optionChangeHandlers), u.optionChangeHandlers),
                                scrollGridImpl: u.scrollGridImpl || l.scrollGridImpl,
                                contentTypeHandlers: r(r({}, l.contentTypeHandlers), u.contentTypeHandlers),
                                listenerRefiners: r(r({}, l.listenerRefiners), u.listenerRefiners),
                                optionRefiners: r(r({}, l.optionRefiners), u.optionRefiners),
                                propSetHandlers: r(r({}, l.propSetHandlers), u.propSetHandlers)
                            })
                        }
                        var l, u
                    }

                    return e && i(e), i(t), o
                }(e, i)), n = e, o = i, t
            }), this.buildDateEnv = st(Ko), this.buildTheme = st(Jo), this.parseToolbars = st(Lo), this.buildViewSpecs = st(bo), this.buildDateProfileGenerator = lt($o), this.buildViewApi = st(Qo), this.buildViewUiProps = lt(ni), this.buildEventUiBySource = st(ei, Ve), this.buildEventUiBases = st(ti), this.parseContextBusinessHours = lt(oi), this.buildTitle = st(Zo), this.emitter = new Mr, this.actionRunner = new Yo(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function () {
                return i.data
            }, this.dispatch = function (e) {
                i.actionRunner.request(e)
            }, this.props = e, this.actionRunner.pause();
            var a = {}, s = this.computeOptionsData(e.optionOverrides, a, e.calendarApi),
                l = s.calendarOptions.initialView || s.pluginHooks.initialView,
                u = this.computeCurrentViewData(l, s, e.optionOverrides, a);
            e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(u.options);
            var c, d, p,
                f = (c = s.calendarOptions, d = s.dateEnv, null != (p = c.initialDate) ? d.createMarker(p) : Vn(c.now, d)),
                h = u.dateProfileGenerator.build(f);
            un(h.activeRange, f) || (f = h.currentRange.start);
            for (var v = {
                dateEnv: s.dateEnv,
                options: s.calendarOptions,
                pluginHooks: s.pluginHooks,
                calendarApi: e.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData
            }, g = 0, m = s.pluginHooks.contextInit; g < m.length; g++) {
                (0, m[g])(v)
            }
            for (var y = Ro(s.calendarOptions, h, v), E = {
                dynamicOptionOverrides: a,
                currentViewType: l,
                currentDate: f,
                dateProfile: h,
                businessHours: this.parseContextBusinessHours(v),
                eventSources: y,
                eventUiBases: {},
                eventStore: {defs: {}, instances: {}},
                renderableEventStore: {defs: {}, instances: {}},
                dateSelection: null,
                eventSelection: "",
                eventDrag: null,
                eventResize: null,
                selectionConfig: this.buildViewUiProps(v).selectionConfig
            }, S = r(r({}, v), E), D = 0, b = s.pluginHooks.reducers; D < b.length; D++) {
                var C = b[D];
                r(E, C(null, null, S))
            }
            ri(E, v) && this.emitter.trigger("loading", !0), this.state = E, this.updateData(), this.actionRunner.resume()
        }

        return e.prototype.resetOptions = function (e, t) {
            var n = this.props;
            n.optionOverrides = t ? r(r({}, n.optionOverrides), e) : e, this.actionRunner.request({type: "NOTHING"})
        }, e.prototype._handleAction = function (e) {
            var t = this.props, n = this.state, o = this.emitter, i = function (e, t) {
                    var n;
                    switch (t.type) {
                        case"SET_OPTION":
                            return r(r({}, e), ((n = {})[t.optionName] = t.rawOptionValue, n));
                        default:
                            return e
                    }
                }(n.dynamicOptionOverrides, e), a = this.computeOptionsData(t.optionOverrides, i, t.calendarApi),
                s = function (e, t) {
                    switch (t.type) {
                        case"CHANGE_VIEW_TYPE":
                            e = t.viewType
                    }
                    return e
                }(n.currentViewType, e), l = this.computeCurrentViewData(s, a, t.optionOverrides, i);
            t.calendarApi.currentDataManager = this, o.setThisContext(t.calendarApi), o.setOptions(l.options);
            var u = {
                dateEnv: a.dateEnv,
                options: a.calendarOptions,
                pluginHooks: a.pluginHooks,
                calendarApi: t.calendarApi,
                dispatch: this.dispatch,
                emitter: o,
                getCurrentData: this.getCurrentData
            }, c = n.currentDate, d = n.dateProfile;
            this.data && this.data.dateProfileGenerator !== l.dateProfileGenerator && (d = l.dateProfileGenerator.build(c)), d = function (e, t, n, r) {
                var o;
                switch (t.type) {
                    case"CHANGE_VIEW_TYPE":
                        return r.build(t.dateMarker || n);
                    case"CHANGE_DATE":
                        if (!e.activeRange || !un(e.currentRange, t.dateMarker)) return r.build(t.dateMarker);
                        break;
                    case"PREV":
                        if ((o = r.buildPrev(e, n)).isValid) return o;
                        break;
                    case"NEXT":
                        if ((o = r.buildNext(e, n)).isValid) return o
                }
                return e
            }(d, e, c = function (e, t) {
                switch (t.type) {
                    case"CHANGE_DATE":
                        return t.dateMarker;
                    default:
                        return e
                }
            }(c, e), l.dateProfileGenerator), un(d.currentRange, c) || (c = d.currentRange.start);
            for (var p = To(n.eventSources, e, d, u), f = Kr(n.eventStore, e, p, d, u), h = ko(p) && !l.options.progressiveEventRendering && n.renderableEventStore || f, v = this.buildViewUiProps(u), g = v.eventUiSingleBase, m = v.selectionConfig, y = this.buildEventUiBySource(p), E = {
                dynamicOptionOverrides: i,
                currentViewType: s,
                currentDate: c,
                dateProfile: d,
                eventSources: p,
                eventStore: f,
                renderableEventStore: h,
                selectionConfig: m,
                eventUiBases: this.buildEventUiBases(h.defs, g, y),
                businessHours: this.parseContextBusinessHours(u),
                dateSelection: Ho(n.dateSelection, e),
                eventSelection: Oo(n.eventSelection, e),
                eventDrag: Ao(n.eventDrag, e),
                eventResize: Uo(n.eventResize, e)
            }, S = r(r({}, u), E), D = 0, b = a.pluginHooks.reducers; D < b.length; D++) {
                var C = b[D];
                r(E, C(n, e, S))
            }
            var w = ri(n, u), R = ri(E, u);
            !w && R ? o.trigger("loading", !0) : w && !R && o.trigger("loading", !1), this.state = E, t.onAction && t.onAction(e)
        }, e.prototype.updateData = function () {
            var e, t, n, o, i, a, s, l, u, c = this.props, d = this.state, p = this.data,
                f = this.computeOptionsData(c.optionOverrides, d.dynamicOptionOverrides, c.calendarApi),
                h = this.computeCurrentViewData(d.currentViewType, f, c.optionOverrides, d.dynamicOptionOverrides),
                v = this.data = r(r(r({
                    viewTitle: this.buildTitle(d.dateProfile, h.options, f.dateEnv),
                    calendarApi: c.calendarApi,
                    dispatch: this.dispatch,
                    emitter: this.emitter,
                    getCurrentData: this.getCurrentData
                }, f), h), d), g = f.pluginHooks.optionChangeHandlers, m = p && p.calendarOptions,
                y = f.calendarOptions;
            if (m && m !== y) for (var E in m.timeZone !== y.timeZone && (d.eventSources = v.eventSources = (a = v.eventSources, s = d.dateProfile, l = v, u = s ? s.activeRange : null, _o(a, Po(a, l), u, l)), d.eventStore = v.eventStore = (e = v.eventStore, t = p.dateEnv, n = v.dateEnv, o = e.defs, i = Ue(e.instances, function (e) {
                var i = o[e.defId];
                return i.allDay || i.recurringDef ? e : r(r({}, e), {
                    range: {
                        start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
                        end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
                    },
                    forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
                    forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo
                })
            }), {defs: o, instances: i})), g) m[E] !== y[E] && g[E](y[E], v);
            c.onData && c.onData(v)
        }, e.prototype._computeOptionsData = function (e, t, n) {
            var r = this.processRawCalendarOptions(e, t), o = r.refinedOptions, i = r.pluginHooks, a = r.localeDefaults,
                s = r.availableLocaleData;
            ii(r.extra);
            var l = this.buildDateEnv(o.timeZone, o.locale, o.weekNumberCalculation, o.firstDay, o.weekText, i, s, o.defaultRangeSeparator),
                u = this.buildViewSpecs(i.views, e, t, a), c = this.buildTheme(o, i);
            return {
                calendarOptions: o,
                pluginHooks: i,
                dateEnv: l,
                viewSpecs: u,
                theme: c,
                toolbarConfig: this.parseToolbars(o, e, c, u, n),
                localeDefaults: a,
                availableRawLocales: s.map
            }
        }, e.prototype.processRawCalendarOptions = function (e, t) {
            var n = _t([wt, e, t]), o = n.locales, i = n.locale, a = this.organizeRawLocales(o), s = a.map,
                l = this.buildLocale(i || a.defaultCode, s).options, u = this.buildPluginHooks(e.plugins || [], Bo),
                c = this.currentCalendarOptionsRefiners = r(r(r(r(r({}, Ct), Rt), Tt), u.listenerRefiners), u.optionRefiners),
                d = {}, p = _t([wt, l, e, t]), f = {}, h = this.currentCalendarOptionsInput,
                v = this.currentCalendarOptionsRefined, g = !1;
            for (var m in p) "plugins" !== m && (p[m] === h[m] || kt[m] && m in h && kt[m](h[m], p[m]) ? f[m] = v[m] : c[m] ? (f[m] = c[m](p[m]), g = !0) : d[m] = h[m]);
            return g && (this.currentCalendarOptionsInput = p, this.currentCalendarOptionsRefined = f), {
                rawOptions: this.currentCalendarOptionsInput,
                refinedOptions: this.currentCalendarOptionsRefined,
                pluginHooks: u,
                availableLocaleData: a,
                localeDefaults: l,
                extra: d
            }
        }, e.prototype._computeCurrentViewData = function (e, t, n, r) {
            var o = t.viewSpecs[e];
            if (!o) throw new Error('viewType "' + e + "\" is not available. Please make sure you've loaded all neccessary plugins");
            var i = this.processRawViewOptions(o, t.pluginHooks, t.localeDefaults, n, r), a = i.refinedOptions;
            return ii(i.extra), {
                viewSpec: o,
                options: a,
                dateProfileGenerator: this.buildDateProfileGenerator({
                    dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
                    duration: o.duration,
                    durationUnit: o.durationUnit,
                    usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
                    dateEnv: t.dateEnv,
                    calendarApi: this.props.calendarApi,
                    slotMinTime: a.slotMinTime,
                    slotMaxTime: a.slotMaxTime,
                    showNonCurrentDates: a.showNonCurrentDates,
                    dayCount: a.dayCount,
                    dateAlignment: a.dateAlignment,
                    dateIncrement: a.dateIncrement,
                    hiddenDays: a.hiddenDays,
                    weekends: a.weekends,
                    nowInput: a.now,
                    validRangeInput: a.validRange,
                    visibleRangeInput: a.visibleRange,
                    monthMode: a.monthMode,
                    fixedWeekCount: a.fixedWeekCount
                }),
                viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
            }
        }, e.prototype.processRawViewOptions = function (e, t, n, o, i) {
            var a = _t([wt, e.optionDefaults, n, o, e.optionOverrides, i]),
                s = r(r(r(r(r(r({}, Ct), Rt), Tt), xt), t.listenerRefiners), t.optionRefiners), l = {},
                u = this.currentViewOptionsInput, c = this.currentViewOptionsRefined, d = !1, p = {};
            for (var f in a) a[f] === u[f] ? l[f] = c[f] : (a[f] === this.currentCalendarOptionsInput[f] ? f in this.currentCalendarOptionsRefined && (l[f] = this.currentCalendarOptionsRefined[f]) : s[f] ? l[f] = s[f](a[f]) : p[f] = a[f], d = !0);
            return d && (this.currentViewOptionsInput = a, this.currentViewOptionsRefined = l), {
                rawOptions: this.currentViewOptionsInput,
                refinedOptions: this.currentViewOptionsRefined,
                extra: p
            }
        }, e
    }();

    function Ko(e, t, n, r, o, i, a, s) {
        var l = er(t || a.defaultCode, a.map);
        return new Kn({
            calendarSystem: "gregory",
            timeZone: e,
            namedTimeZoneImpl: i.namedTimeZonedImpl,
            locale: l,
            weekNumberCalculation: n,
            firstDay: r,
            weekText: o,
            cmdFormatter: i.cmdFormatter,
            defaultSeparator: s
        })
    }

    function Jo(e, t) {
        return new (t.themeClasses[e.themeSystem] || lo)(e)
    }

    function $o(e) {
        return new (e.dateProfileGeneratorClass || wo)(e)
    }

    function Qo(e, t, n) {
        return new An(e, t, n)
    }

    function ei(e) {
        return Ue(e, function (e) {
            return e.ui
        })
    }

    function ti(e, t, n) {
        var r = {"": t};
        for (var o in e) {
            var i = e[o];
            i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId])
        }
        return r
    }

    function ni(e) {
        var t = e.options;
        return {
            eventUiSingleBase: zt({
                display: t.eventDisplay,
                editable: t.editable,
                startEditable: t.eventStartEditable,
                durationEditable: t.eventDurationEditable,
                constraint: t.eventConstraint,
                overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
                allow: t.eventAllow,
                backgroundColor: t.eventBackgroundColor,
                borderColor: t.eventBorderColor,
                textColor: t.eventTextColor,
                color: t.eventColor
            }, e),
            selectionConfig: zt({
                constraint: t.selectConstraint,
                overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
                allow: t.selectAllow
            }, e)
        }
    }

    function ri(e, t) {
        for (var n = 0, r = t.pluginHooks.isLoadingFuncs; n < r.length; n++) {
            if ((0, r[n])(e)) return !0
        }
        return !1
    }

    function oi(e) {
        return ir(e.options.businessHours, e)
    }

    function ii(e, t) {
        for (var n in e) console.warn("Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : ""))
    }

    var ai = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleData = function (e) {
                n.dataManager ? n.setState(e) : n.state = e
            }, n.dataManager = new Xo({
                optionOverrides: t.optionOverrides,
                calendarApi: t.calendarApi,
                onData: n.handleData
            }), n
        }

        return n(t, e), t.prototype.render = function () {
            return this.props.children(this.state)
        }, t.prototype.componentDidUpdate = function (e) {
            var t = this.props.optionOverrides;
            t !== e.optionOverrides && this.dataManager.resetOptions(t)
        }, t
    }(Hr);
    var si = function () {
        return function (e) {
            this.timeZoneName = e
        }
    }(), li = function () {
        function e(e) {
            this.component = e.component
        }

        return e.prototype.destroy = function () {
        }, e
    }();

    function ui(e) {
        var t;
        return (t = {})[e.component.uid] = e, t
    }

    var ci = {}, di = function () {
        function e(e, t) {
            this.emitter = new Mr
        }

        return e.prototype.destroy = function () {
        }, e.prototype.setMirrorIsVisible = function (e) {
        }, e.prototype.setMirrorNeedsRevert = function (e) {
        }, e.prototype.setAutoScrollEnabled = function (e) {
        }, e
    }(), pi = {}, fi = {startTime: Xe, duration: Xe, create: Boolean, sourceId: String};

    function hi(e) {
        var t = It(e, fi), n = t.refined, r = t.extra;
        return {
            startTime: n.startTime || null,
            duration: n.duration || null,
            create: null == n.create || n.create,
            sourceId: n.sourceId,
            leftoverProps: r
        }
    }

    var vi = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props.widgetGroups.map(function (t) {
                return e.renderWidgetGroup(t)
            });
            return Or.apply(void 0, o(["div", {className: "fc-toolbar-chunk"}], t))
        }, t.prototype.renderWidgetGroup = function (e) {
            for (var t = this.props, n = this.context.theme, i = [], a = !0, s = 0, l = e; s < l.length; s++) {
                var u = l[s], c = u.buttonName, d = u.buttonClick, p = u.buttonText, f = u.buttonIcon;
                if ("title" === c) a = !1, i.push(Or("h2", {className: "fc-toolbar-title"}, t.title)); else {
                    var h = f ? {"aria-label": c} : {}, v = ["fc-" + c + "-button", n.getClass("button")];
                    c === t.activeButton && v.push(n.getClass("buttonActive"));
                    var g = !t.isTodayEnabled && "today" === c || !t.isPrevEnabled && "prev" === c || !t.isNextEnabled && "next" === c;
                    i.push(Or("button", r({
                        disabled: g,
                        className: v.join(" "),
                        onClick: d,
                        type: "button"
                    }, h), p || (f ? Or("span", {className: f}) : "")))
                }
            }
            if (i.length > 1) {
                var m = a && n.getClass("buttonGroup") || "";
                return Or.apply(void 0, o(["div", {className: m}], i))
            }
            return i[0]
        }, t
    }(qr), gi = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e, t, n = this.props, r = n.model, o = n.extraClassName, i = !1, a = r.center;
            return r.left ? (i = !0, e = r.left) : e = r.start, r.right ? (i = !0, t = r.right) : t = r.end, Or("div", {className: [o || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(" ")}, this.renderSection("start", e || []), this.renderSection("center", a || []), this.renderSection("end", t || []))
        }, t.prototype.renderSection = function (e, t) {
            var n = this.props;
            return Or(vi, {
                key: e,
                widgetGroups: t,
                title: n.title,
                activeButton: n.activeButton,
                isTodayEnabled: n.isTodayEnabled,
                isPrevEnabled: n.isPrevEnabled,
                isNextEnabled: n.isNextEnabled
            })
        }, t
    }(qr), mi = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {availableWidth: null}, t.handleEl = function (e) {
                t.el = e, Xr(t.props.elRef, e), t.updateAvailableWidth()
            }, t.handleResize = function () {
                t.updateAvailableWidth()
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.state, n = e.aspectRatio,
                r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"],
                o = "", i = "";
            return n ? null !== t.availableWidth ? o = t.availableWidth / n : i = 1 / n * 100 + "%" : o = e.height || "", Or("div", {
                ref: this.handleEl,
                onClick: e.onClick,
                className: r.join(" "),
                style: {height: o, paddingBottom: i}
            }, e.children)
        }, t.prototype.componentDidMount = function () {
            this.context.addResizeHandler(this.handleResize)
        }, t.prototype.componentWillUnmount = function () {
            this.context.removeResizeHandler(this.handleResize)
        }, t.prototype.updateAvailableWidth = function () {
            this.el && this.props.aspectRatio && this.setState({availableWidth: this.el.offsetWidth})
        }, t
    }(qr), yi = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleSegClick = function (e, t) {
                var r = n.component, o = r.context, i = fn(t);
                if (i && r.isValidSegDownEl(e.target)) {
                    var a = z(e.target, ".fc-event-forced-url"), s = a ? a.querySelector("a[href]").href : "";
                    o.emitter.trigger("eventClick", {
                        el: t,
                        event: new zn(r.context, i.eventRange.def, i.eventRange.instance),
                        jsEvent: e,
                        view: o.viewApi
                    }), s && !e.defaultPrevented && (window.location.href = s)
                }
            }, n.destroy = K(t.el, "click", ".fc-event", n.handleSegClick), n
        }

        return n(t, e), t
    }(li), Ei = function (e) {
        function t(t) {
            var n, r, o, i, a, s = e.call(this, t) || this;
            return s.handleEventElRemove = function (e) {
                e === s.currentSegEl && s.handleSegLeave(null, s.currentSegEl)
            }, s.handleSegEnter = function (e, t) {
                fn(t) && (s.currentSegEl = t, s.triggerEvent("eventMouseEnter", e, t))
            }, s.handleSegLeave = function (e, t) {
                s.currentSegEl && (s.currentSegEl = null, s.triggerEvent("eventMouseLeave", e, t))
            }, s.removeHoverListeners = (n = t.el, r = ".fc-event", o = s.handleSegEnter, i = s.handleSegLeave, K(n, "mouseover", r, function (e, t) {
                if (t !== a) {
                    a = t, o(e, t);
                    var n = function (e) {
                        a = null, i(e, t), t.removeEventListener("mouseleave", n)
                    };
                    t.addEventListener("mouseleave", n)
                }
            })), s
        }

        return n(t, e), t.prototype.destroy = function () {
            this.removeHoverListeners()
        }, t.prototype.triggerEvent = function (e, t, n) {
            var r = this.component, o = r.context, i = fn(n);
            t && !r.isValidSegDownEl(t.target) || o.emitter.trigger(e, {
                el: n,
                event: new zn(o, i.eventRange.def, i.eventRange.instance),
                jsEvent: t,
                view: o.viewApi
            })
        }, t
    }(li), Si = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildViewContext = st(jr), t.buildViewPropTransformers = st(bi), t.buildToolbarProps = st(Di), t.handleNavLinkClick = X("a[data-navlink]", t._handleNavLinkClick.bind(t)), t.headerRef = Ur(), t.footerRef = Ur(), t.interactionsStore = {}, t.registerInteractiveComponent = function (e, n) {
                var r = function (e, t) {
                    return {component: e, el: t.el, useEventCenter: null == t.useEventCenter || t.useEventCenter}
                }(e, n), o = [yi, Ei].concat(t.props.pluginHooks.componentInteractions).map(function (e) {
                    return new e(r)
                });
                t.interactionsStore[e.uid] = o, ci[e.uid] = r
            }, t.unregisterInteractiveComponent = function (e) {
                for (var n = 0, r = t.interactionsStore[e.uid]; n < r.length; n++) {
                    r[n].destroy()
                }
                delete t.interactionsStore[e.uid], delete ci[e.uid]
            }, t.resizeRunner = new qo(function () {
                t.props.emitter.trigger("_resize", !0), t.props.emitter.trigger("windowResize", {view: t.props.viewApi})
            }), t.handleWindowResize = function (e) {
                var n = t.props.options;
                n.handleWindowResize && e.target === window && t.resizeRunner.request(n.windowResizeDelay)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e, t = this.props, n = t.toolbarConfig, o = t.options,
                i = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, Vn(t.options.now, t.dateEnv), t.viewTitle),
                a = !1, s = "";
            t.isHeightAuto || t.forPrint ? s = "" : null != o.height ? a = !0 : null != o.contentHeight ? s = o.contentHeight : e = Math.max(o.aspectRatio, .5);
            var l = this.buildViewContext(t.viewSpec, t.viewApi, t.options, t.dateProfileGenerator, t.dateEnv, t.theme, t.pluginHooks, t.dispatch, t.getCurrentData, t.emitter, t.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
            return Or(Br.Provider, {value: l}, n.headerToolbar && Or(gi, r({
                ref: this.headerRef,
                extraClassName: "fc-header-toolbar",
                model: n.headerToolbar
            }, i)), Or(mi, {
                liquid: a,
                height: s,
                aspectRatio: e,
                onClick: this.handleNavLinkClick
            }, this.renderView(t), this.buildAppendContent()), n.footerToolbar && Or(gi, r({
                ref: this.footerRef,
                extraClassName: "fc-footer-toolbar",
                model: n.footerToolbar
            }, i)))
        }, t.prototype.componentDidMount = function () {
            var e = this.props;
            this.calendarInteractions = e.pluginHooks.calendarInteractions.map(function (t) {
                return new t(e)
            }), window.addEventListener("resize", this.handleWindowResize);
            var t = e.pluginHooks.propSetHandlers;
            for (var n in t) t[n](e[n], e)
        }, t.prototype.componentDidUpdate = function (e) {
            var t = this.props, n = t.pluginHooks.propSetHandlers;
            for (var r in n) t[r] !== e[r] && n[r](t[r], t)
        }, t.prototype.componentWillUnmount = function () {
            window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
            for (var e = 0, t = this.calendarInteractions; e < t.length; e++) {
                t[e].destroy()
            }
            this.props.emitter.trigger("_unmount")
        }, t.prototype._handleNavLinkClick = function (e, t) {
            var n = this.props, r = n.dateEnv, o = n.options, i = n.calendarApi, a = t.getAttribute("data-navlink");
            a = a ? JSON.parse(a) : {};
            var s = r.createMarker(a.date), l = a.type,
                u = "day" === l ? o.navLinkDayClick : "week" === l ? o.navLinkWeekClick : null;
            "function" == typeof u ? u.call(i, r.toDate(s), e) : ("string" == typeof u && (l = u), i.zoomTo(s, l))
        }, t.prototype.buildAppendContent = function () {
            var e = this.props, t = e.pluginHooks.viewContainerAppends.map(function (t) {
                return t(e)
            });
            return Or.apply(void 0, o([Lr, {}], t))
        }, t.prototype.renderView = function (e) {
            for (var t = e.pluginHooks, n = e.viewSpec, o = {
                dateProfile: e.dateProfile,
                businessHours: e.businessHours,
                eventStore: e.renderableEventStore,
                eventUiBases: e.eventUiBases,
                dateSelection: e.dateSelection,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                isHeightAuto: e.isHeightAuto,
                forPrint: e.forPrint
            }, i = 0, a = this.buildViewPropTransformers(t.viewPropsTransformers); i < a.length; i++) {
                var s = a[i];
                r(o, s.transform(o, e))
            }
            var l = n.component;
            return Or(l, r({}, o))
        }, t
    }(Gr);

    function Di(e, t, n, r, o, i) {
        var a = n.build(o, void 0, !1), s = n.buildPrev(t, r, !1), l = n.buildNext(t, r, !1);
        return {
            title: i,
            activeButton: e.type,
            isTodayEnabled: a.isValid && !un(t.currentRange, o),
            isPrevEnabled: s.isValid,
            isNextEnabled: l.isValid
        }
    }

    function bi(e) {
        return e.map(function (e) {
            return new e
        })
    }

    var Ci = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {forPrint: !1}, t.handleBeforePrint = function () {
                t.setState({forPrint: !0})
            }, t.handleAfterPrint = function () {
                t.setState({forPrint: !1})
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = e.options, n = this.state.forPrint,
                r = n || "auto" === t.height || "auto" === t.contentHeight, o = r || null == t.height ? "" : t.height,
                i = ["fc", n ? "fc-media-print" : "fc-media-screen", "fc-direction-" + t.direction, e.theme.getClass("root")];
            return dr() || i.push("fc-liquid-hack"), e.children(i, o, r, n)
        }, t.prototype.componentDidMount = function () {
            var e = this.props.emitter;
            e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint)
        }, t.prototype.componentWillUnmount = function () {
            var e = this.props.emitter;
            e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint)
        }, t
    }(qr);

    function wi(e, t) {
        return bt(!e || t > 10 ? {weekday: "short"} : t > 1 ? {
            weekday: "short",
            month: "numeric",
            day: "numeric",
            omitCommas: !0
        } : {weekday: "long"})
    }

    var Ri = "fc-col-header-cell";

    function Ti(e) {
        return e.text
    }

    var ki = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.context, t = e.dateEnv, n = e.options, o = e.theme, i = e.viewApi, a = this.props, s = a.date,
                l = a.dateProfile, u = vr(s, a.todayRange, null, l), c = [Ri].concat(gr(u, o)),
                d = t.format(s, a.dayHeaderFormat),
                p = n.navLinks && !u.isDisabled && a.colCnt > 1 ? {"data-navlink": mr(s), tabIndex: 0} : {},
                f = r(r(r({date: t.toDate(s), view: i}, a.extraHookProps), {text: d}), u);
            return Or(co, {
                hookProps: f,
                classNames: n.dayHeaderClassNames,
                content: n.dayHeaderContent,
                defaultContent: Ti,
                didMount: n.dayHeaderDidMount,
                willUnmount: n.dayHeaderWillUnmount
            }, function (e, t, n, o) {
                return Or("th", r({
                    ref: e,
                    className: c.concat(t).join(" "),
                    "data-date": u.isDisabled ? void 0 : rt(s),
                    colSpan: a.colSpan
                }, a.extraDataAttrs), Or("div", {className: "fc-scrollgrid-sync-inner"}, !u.isDisabled && Or("a", r({
                    ref: n,
                    className: ["fc-col-header-cell-cushion", a.isSticky ? "fc-sticky" : ""].join(" ")
                }, p), o)))
            })
        }, t
    }(qr), Mi = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.dateEnv, o = t.theme, i = t.viewApi, a = t.options,
                s = me(new Date(2592e5), e.dow),
                l = {dow: e.dow, isDisabled: !1, isFuture: !1, isPast: !1, isToday: !1, isOther: !1},
                u = [Ri].concat(gr(l, o), e.extraClassNames || []), c = n.format(s, e.dayHeaderFormat),
                d = r(r(r(r({date: s}, l), {view: i}), e.extraHookProps), {text: c});
            return Or(co, {
                hookProps: d,
                classNames: a.dayHeaderClassNames,
                content: a.dayHeaderContent,
                defaultContent: Ti,
                didMount: a.dayHeaderDidMount,
                willUnmount: a.dayHeaderWillUnmount
            }, function (t, n, o, i) {
                return Or("th", r({
                    ref: t,
                    className: u.concat(n).join(" "),
                    colSpan: e.colSpan
                }, e.extraDataAttrs), Or("div", {className: "fc-scrollgrid-sync-inner"}, Or("a", {
                    className: ["fc-col-header-cell-cushion", e.isSticky ? "fc-sticky" : ""].join(" "),
                    ref: o
                }, i)))
            })
        }, t
    }(qr), xi = function (e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.initialNowDate = Vn(n.options.now, n.dateEnv), r.initialNowQueriedMs = (new Date).valueOf(), r.state = r.computeTiming().currentState, r
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.state;
            return e.children(t.nowDate, t.todayRange)
        }, t.prototype.componentDidMount = function () {
            this.setTimeout()
        }, t.prototype.componentDidUpdate = function (e) {
            e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout())
        }, t.prototype.componentWillUnmount = function () {
            this.clearTimeout()
        }, t.prototype.computeTiming = function () {
            var e = this.props, t = this.context,
                n = ye(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs),
                r = t.dateEnv.startOf(n, e.unit), o = t.dateEnv.add(r, Xe(1, e.unit)), i = o.valueOf() - n.valueOf();
            return i = Math.min(864e5, i), {
                currentState: {nowDate: r, todayRange: _i(r)},
                nextState: {nowDate: o, todayRange: _i(o)},
                waitMs: i
            }
        }, t.prototype.setTimeout = function () {
            var e = this, t = this.computeTiming(), n = t.nextState, r = t.waitMs;
            this.timeoutId = setTimeout(function () {
                e.setState(n, function () {
                    e.setTimeout()
                })
            }, r)
        }, t.prototype.clearTimeout = function () {
            this.timeoutId && clearTimeout(this.timeoutId)
        }, t.contextType = Br, t
    }(Hr);

    function _i(e) {
        var t = we(e);
        return {start: t, end: me(t, 1)}
    }

    var Ii = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.createDayHeaderFormatter = st(Pi), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.context, t = this.props, n = t.dates, r = t.dateProfile, o = t.datesRepDistinctDays,
                i = t.renderIntro, a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, o, n.length);
            return Or(xi, {unit: "day"}, function (e, t) {
                return Or("tr", null, i && i("day"), n.map(function (e) {
                    return o ? Or(ki, {
                        key: e.toISOString(),
                        date: e,
                        dateProfile: r,
                        todayRange: t,
                        colCnt: n.length,
                        dayHeaderFormat: a
                    }) : Or(Mi, {key: e.getUTCDay(), dow: e.getUTCDay(), dayHeaderFormat: a})
                }))
            })
        }, t
    }(qr);

    function Pi(e, t, n) {
        return e || wi(t, n)
    }

    var Ni = function () {
        function e(e, t) {
            for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r;) t.isHiddenDay(n) ? o.push(a + .5) : (a += 1, o.push(a), i.push(n)), n = me(n, 1);
            this.dates = i, this.indices = o, this.cnt = i.length
        }

        return e.prototype.sliceRange = function (e) {
            var t = this.getDateDayIndex(e.start), n = this.getDateDayIndex(me(e.end, -1)), r = Math.max(0, t),
                o = Math.min(this.cnt - 1, n);
            return (r = Math.ceil(r)) <= (o = Math.floor(o)) ? {
                firstIndex: r,
                lastIndex: o,
                isStart: t === r,
                isEnd: n === o
            } : null
        }, e.prototype.getDateDayIndex = function (e) {
            var t = this.indices, n = Math.floor(Se(this.dates[0], e));
            return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
        }, e
    }(), Hi = function () {
        function e(e, t) {
            var n, r, o, i = e.dates;
            if (t) {
                for (r = i[0].getUTCDay(), n = 1; n < i.length && i[n].getUTCDay() !== r; n += 1) ;
                o = Math.ceil(i.length / n)
            } else o = 1, n = i.length;
            this.rowCnt = o, this.colCnt = n, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates()
        }

        return e.prototype.buildCells = function () {
            for (var e = [], t = 0; t < this.rowCnt; t += 1) {
                for (var n = [], r = 0; r < this.colCnt; r += 1) n.push(this.buildCell(t, r));
                e.push(n)
            }
            return e
        }, e.prototype.buildCell = function (e, t) {
            var n = this.daySeries.dates[e * this.colCnt + t];
            return {key: n.toISOString(), date: n}
        }, e.prototype.buildHeaderDates = function () {
            for (var e = [], t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date);
            return e
        }, e.prototype.sliceRange = function (e) {
            var t = this.colCnt, n = this.daySeries.sliceRange(e), r = [];
            if (n) for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i;) {
                var s = Math.floor(a / t), l = Math.min((s + 1) * t, i + 1);
                r.push({
                    row: s,
                    firstCol: a % t,
                    lastCol: (l - 1) % t,
                    isStart: n.isStart && a === o,
                    isEnd: n.isEnd && l - 1 === i
                }), a = l
            }
            return r
        }, e
    }(), Oi = function () {
        function e() {
            this.sliceBusinessHours = st(this._sliceBusinessHours), this.sliceDateSelection = st(this._sliceDateSpan), this.sliceEventStore = st(this._sliceEventStore), this.sliceEventDrag = st(this._sliceInteraction), this.sliceEventResize = st(this._sliceInteraction), this.forceDayIfListItem = !1
        }

        return e.prototype.sliceProps = function (e, t, n, r) {
            for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
            var s = e.eventUiBases, l = this.sliceEventStore.apply(this, o([e.eventStore, s, t, n], i));
            return {
                dateSelectionSegs: this.sliceDateSelection.apply(this, o([e.dateSelection, s, r], i)),
                businessHourSegs: this.sliceBusinessHours.apply(this, o([e.businessHours, t, n, r], i)),
                fgEventSegs: l.fg,
                bgEventSegs: l.bg,
                eventDrag: this.sliceEventDrag.apply(this, o([e.eventDrag, s, t, n], i)),
                eventResize: this.sliceEventResize.apply(this, o([e.eventResize, s, t, n], i)),
                eventSelection: e.eventSelection
            }
        }, e.prototype.sliceNowDate = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            return this._sliceDateSpan.apply(this, o([{range: {start: e, end: ye(e, 1)}, allDay: !1}, {}, t], n))
        }, e.prototype._sliceBusinessHours = function (e, t, n, r) {
            for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
            return e ? this._sliceEventStore.apply(this, o([Ge(e, Ai(t, Boolean(n)), r), {}, t, n], i)).bg : []
        }, e.prototype._sliceEventStore = function (e, t, n, r) {
            for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
            if (e) {
                var a = cn(e, t, Ai(n, Boolean(r)), r);
                return {bg: this.sliceEventRanges(a.bg, o), fg: this.sliceEventRanges(a.fg, o)}
            }
            return {bg: [], fg: []}
        }, e.prototype._sliceInteraction = function (e, t, n, r) {
            for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
            if (!e) return null;
            var a = cn(e.mutatedEvents, t, Ai(n, Boolean(r)), r);
            return {
                segs: this.sliceEventRanges(a.fg, o),
                affectedInstances: e.affectedEvents.instances,
                isEvent: e.isEvent
            }
        }, e.prototype._sliceDateSpan = function (e, t, n) {
            for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
            if (!e) return [];
            for (var a = function (e, t, n) {
                var r = Xt({editable: !1}, n), o = Jt(r.refined, r.extra, "", e.allDay, !0, n);
                return {def: o, ui: vn(o, t), instance: Ne(o.defId, e.range), range: e.range, isStart: !0, isEnd: !0}
            }(e, t, n), s = this.sliceRange.apply(this, o([e.range], r)), l = 0, u = s; l < u.length; l++) {
                u[l].eventRange = a
            }
            return s
        }, e.prototype.sliceEventRanges = function (e, t) {
            for (var n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                n.push.apply(n, this.sliceEventRange(i, t))
            }
            return n
        }, e.prototype.sliceEventRange = function (e, t) {
            var n = e.range;
            this.forceDayIfListItem && "list-item" === e.ui.display && (n = {start: n.start, end: me(n.start, 1)});
            for (var r = this.sliceRange.apply(this, o([n], t)), i = 0, a = r; i < a.length; i++) {
                var s = a[i];
                s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd
            }
            return r
        }, e
    }();

    function Ai(e, t) {
        var n = e.activeRange;
        return t ? n : {
            start: ye(n.start, e.slotMinTime.milliseconds),
            end: ye(n.end, e.slotMaxTime.milliseconds - 864e5)
        }
    }

    var Ui = /^(visible|hidden)$/, Li = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleEl = function (e) {
                t.el = e, Xr(t.props.elRef, e)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = e.liquid, n = e.liquidIsAbsolute, r = t && n, o = ["fc-scroller"];
            return t && (n ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), Or("div", {
                ref: this.handleEl,
                className: o.join(" "),
                style: {
                    overflowX: e.overflowX,
                    overflowY: e.overflowY,
                    left: r && -(e.overcomeLeft || 0) || "",
                    right: r && -(e.overcomeRight || 0) || "",
                    bottom: r && -(e.overcomeBottom || 0) || "",
                    marginLeft: !r && -(e.overcomeLeft || 0) || "",
                    marginRight: !r && -(e.overcomeRight || 0) || "",
                    marginBottom: !r && -(e.overcomeBottom || 0) || "",
                    maxHeight: e.maxHeight || ""
                }
            }, e.children)
        }, t.prototype.needsXScrolling = function () {
            if (Ui.test(this.props.overflowX)) return !1;
            for (var e = this.el, t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) {
                if (n[r].getBoundingClientRect().width > t) return !0
            }
            return !1
        }, t.prototype.needsYScrolling = function () {
            if (Ui.test(this.props.overflowY)) return !1;
            for (var e = this.el, t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) {
                if (n[r].getBoundingClientRect().height > t) return !0
            }
            return !1
        }, t.prototype.getXScrollbarWidth = function () {
            return Ui.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight
        }, t.prototype.getYScrollbarWidth = function () {
            return Ui.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth
        }, t
    }(qr), Wi = function () {
        function e(e) {
            var t = this;
            this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function (e, n) {
                var r = t, o = r.depths, i = r.currentMap, a = !1, s = !1;
                null !== e ? (a = n in i, i[n] = e, o[n] = (o[n] || 0) + 1, s = !0) : (o[n] -= 1, o[n] || (delete i[n], delete t.callbackMap[n], a = !0)), t.masterCallback && (a && t.masterCallback(null, String(n)), s && t.masterCallback(e, String(n)))
            }
        }

        return e.prototype.createRef = function (e) {
            var t = this, n = this.callbackMap[e];
            return n || (n = this.callbackMap[e] = function (n) {
                t.handleValue(n, String(e))
            }), n
        }, e.prototype.collect = function (e, t, n) {
            return je(this.currentMap, e, t, n)
        }, e.prototype.getAll = function () {
            return We(this.currentMap)
        }, e
    }();

    function Vi(e) {
        for (var t = 0, n = 0, r = j(e, ".fc-scrollgrid-shrink"); n < r.length; n++) {
            var o = r[n];
            t = Math.max(t, he(o))
        }
        return Math.ceil(t)
    }

    function Fi(e, t) {
        return e.liquid && t.liquid
    }

    function zi(e, t) {
        return null != t.maxHeight || Fi(e, t)
    }

    function Bi(e, t, n) {
        var r = n.expandRows;
        return "function" == typeof t.content ? t.content(n) : Or("table", {
            className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
            style: {minWidth: n.tableMinWidth, width: n.clientWidth, height: r ? n.clientHeight : ""}
        }, n.tableColGroupNode, Or("tbody", {}, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent))
    }

    function ji(e, t) {
        return at(e, t, Ve)
    }

    function Gi(e, t) {
        for (var n = [], r = 0, i = e; r < i.length; r++) for (var a = i[r], s = a.span || 1, l = 0; l < s; l += 1) n.push(Or("col", {
            style: {
                width: "shrink" === a.width ? qi(t) : a.width || "",
                minWidth: a.minWidth || ""
            }
        }));
        return Or.apply(void 0, o(["colgroup", {}], n))
    }

    function qi(e) {
        return null == e ? 4 : e
    }

    function Yi(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            if ("shrink" === n[t].width) return !0
        }
        return !1
    }

    function Zi(e, t) {
        var n = ["fc-scrollgrid", t.theme.getClass("table")];
        return e && n.push("fc-scrollgrid-liquid"), n
    }

    function Xi(e, t) {
        var n = ["fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type, e.className];
        return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n
    }

    function Ki(e) {
        return Or("div", {
            className: "fc-scrollgrid-sticky-shim",
            style: {width: e.clientWidth, minWidth: e.tableMinWidth}
        })
    }

    function Ji(e) {
        var t = e.stickyHeaderDates;
        return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t
    }

    function $i(e) {
        var t = e.stickyFooterScrollbar;
        return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t
    }

    var Qi = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.processCols = st(function (e) {
                return e
            }, ji), t.renderMicroColGroup = st(Gi), t.scrollerRefs = new Wi, t.scrollerElRefs = new Wi(t._handleScrollerEl.bind(t)), t.state = {
                shrinkWidth: null,
                forceYScrollbars: !1,
                scrollerClientWidths: {},
                scrollerClientHeights: {}
            }, t.handleSizing = function () {
                t.setState(r({shrinkWidth: t.computeShrinkWidth()}, t.computeScrollerDims()))
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            for (var e, t = this.props, n = this.state, r = this.context, i = t.sections || [], a = this.processCols(t.cols), s = this.renderMicroColGroup(a, n.shrinkWidth), l = Zi(t.liquid, r), u = i.length, c = 0, d = [], p = [], f = []; c < u && "header" === (e = i[c]).type;) d.push(this.renderSection(e, s)), c += 1;
            for (; c < u && "body" === (e = i[c]).type;) p.push(this.renderSection(e, s)), c += 1;
            for (; c < u && "footer" === (e = i[c]).type;) f.push(this.renderSection(e, s)), c += 1;
            var h = !dr();
            return Or("table", {
                className: l.join(" "),
                style: {height: t.height}
            }, Boolean(!h && d.length) && Or.apply(void 0, o(["thead", {}], d)), Boolean(!h && p.length) && Or.apply(void 0, o(["tbody", {}], p)), Boolean(!h && f.length) && Or.apply(void 0, o(["tfoot", {}], f)), h && Or.apply(void 0, o(["tbody", {}], d, p, f)))
        }, t.prototype.renderSection = function (e, t) {
            return "outerContent" in e ? Or(Lr, {key: e.key}, e.outerContent) : Or("tr", {
                key: e.key,
                className: Xi(e, this.props.liquid).join(" ")
            }, this.renderChunkTd(e, t, e.chunk))
        }, t.prototype.renderChunkTd = function (e, t, n) {
            if ("outerContent" in n) return n.outerContent;
            var r = this.props, o = this.state, i = o.forceYScrollbars, a = o.scrollerClientWidths,
                s = o.scrollerClientHeights, l = zi(r, e), u = Fi(r, e),
                c = r.liquid ? i ? "scroll" : l ? "auto" : "hidden" : "visible", d = e.key, p = Bi(e, n, {
                    tableColGroupNode: t,
                    tableMinWidth: "",
                    clientWidth: void 0 !== a[d] ? a[d] : null,
                    clientHeight: void 0 !== s[d] ? s[d] : null,
                    expandRows: e.expandRows,
                    syncRowHeights: !1,
                    rowSyncHeights: [],
                    reportRowHeightChange: function () {
                    }
                });
            return Or("td", {ref: n.elRef}, Or("div", {className: "fc-scroller-harness" + (u ? " fc-scroller-harness-liquid" : "")}, Or(Li, {
                ref: this.scrollerRefs.createRef(d),
                elRef: this.scrollerElRefs.createRef(d),
                overflowY: c,
                overflowX: r.liquid ? "hidden" : "visible",
                maxHeight: e.maxHeight,
                liquid: u,
                liquidIsAbsolute: !0
            }, p)))
        }, t.prototype._handleScrollerEl = function (e, t) {
            var n = function (e, t) {
                for (var n = 0, r = e; n < r.length; n++) {
                    var o = r[n];
                    if (o.key === t) return o
                }
                return null
            }(this.props.sections, t);
            n && Xr(n.chunk.scrollerElRef, e)
        }, t.prototype.componentDidMount = function () {
            this.handleSizing(), this.context.addResizeHandler(this.handleSizing)
        }, t.prototype.componentDidUpdate = function () {
            this.handleSizing()
        }, t.prototype.componentWillUnmount = function () {
            this.context.removeResizeHandler(this.handleSizing)
        }, t.prototype.computeShrinkWidth = function () {
            return Yi(this.props.cols) ? Vi(this.scrollerElRefs.getAll()) : 0
        }, t.prototype.computeScrollerDims = function () {
            var e = Dr(), t = this.scrollerRefs, n = this.scrollerElRefs, r = !1, o = {}, i = {};
            for (var a in t.currentMap) {
                var s = t.currentMap[a];
                if (s && s.needsYScrolling()) {
                    r = !0;
                    break
                }
            }
            for (var l = 0, u = this.props.sections; l < u.length; l++) {
                a = u[l].key;
                var c = n.currentMap[a];
                if (c) {
                    var d = c.parentNode;
                    o[a] = Math.floor(d.getBoundingClientRect().width - (r ? e.y : 0)), i[a] = Math.floor(d.getBoundingClientRect().height)
                }
            }
            return {forceYScrollbars: r, scrollerClientWidths: o, scrollerClientHeights: i}
        }, t
    }(qr);
    Qi.addStateEquality({scrollerClientWidths: Ve, scrollerClientHeights: Ve});
    var ea = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.elRef = Ur(), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.options, r = e.seg, o = r.eventRange, i = o.ui, a = {
                event: new zn(t, o.def, o.instance),
                view: t.viewApi,
                timeText: e.timeText,
                textColor: i.textColor,
                backgroundColor: i.backgroundColor,
                borderColor: i.borderColor,
                isDraggable: !e.disableDragging && yn(r, t),
                isStartResizable: !e.disableResizing && En(r, t),
                isEndResizable: !e.disableResizing && Sn(r),
                isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
                isStart: Boolean(r.isStart),
                isEnd: Boolean(r.isEnd),
                isPast: Boolean(e.isPast),
                isFuture: Boolean(e.isFuture),
                isToday: Boolean(e.isToday),
                isSelected: Boolean(e.isSelected),
                isDragging: Boolean(e.isDragging),
                isResizing: Boolean(e.isResizing)
            }, s = Cn(a).concat(i.classNames);
            return Or(co, {
                hookProps: a,
                classNames: n.eventClassNames,
                content: n.eventContent,
                defaultContent: e.defaultContent,
                didMount: n.eventDidMount,
                willUnmount: n.eventWillUnmount,
                elRef: this.elRef
            }, function (t, n, r, o) {
                return e.children(t, s.concat(n), r, o, a)
            })
        }, t.prototype.componentDidMount = function () {
            pn(this.elRef.current, this.props.seg)
        }, t.prototype.componentDidUpdate = function (e) {
            var t = this.props.seg;
            t !== e.seg && pn(this.elRef.current, t)
        }, t
    }(qr), ta = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = e.seg, o = t.options.eventTimeFormat || e.defaultTimeFormat,
                i = Dn(n, o, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
            return Or(ea, {
                seg: n,
                timeText: i,
                disableDragging: e.disableDragging,
                disableResizing: e.disableResizing,
                defaultContent: e.defaultContent || na,
                isDragging: e.isDragging,
                isResizing: e.isResizing,
                isDateSelecting: e.isDateSelecting,
                isSelected: e.isSelected,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday
            }, function (t, o, i, a, s) {
                return Or("a", r({
                    className: e.extraClassNames.concat(o).join(" "),
                    style: {borderColor: s.borderColor, backgroundColor: s.backgroundColor},
                    ref: t
                }, function (e) {
                    var t = e.eventRange.def.url;
                    return t ? {href: t} : {}
                }(n)), Or("div", {
                    className: "fc-event-main",
                    ref: i,
                    style: {color: s.textColor}
                }, a), s.isStartResizable && Or("div", {className: "fc-event-resizer fc-event-resizer-start"}), s.isEndResizable && Or("div", {className: "fc-event-resizer fc-event-resizer-end"}))
            })
        }, t
    }(qr);

    function na(e) {
        return Or("div", {className: "fc-event-main-frame"}, e.timeText && Or("div", {className: "fc-event-time"}, e.timeText), Or("div", {className: "fc-event-title-container"}, Or("div", {className: "fc-event-title fc-sticky"}, e.event.title || Or(Lr, null, " "))))
    }

    var ra = function (e) {
        return Or(Br.Consumer, null, function (t) {
            var n = t.options, r = {isAxis: e.isAxis, date: t.dateEnv.toDate(e.date), view: t.viewApi};
            return Or(co, {
                hookProps: r,
                classNames: n.nowIndicatorClassNames,
                content: n.nowIndicatorContent,
                didMount: n.nowIndicatorDidMount,
                willUnmount: n.nowIndicatorWillUnmount
            }, e.children)
        })
    }, oa = bt({day: "numeric"}), ia = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.options, r = aa({
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                showDayNumber: e.showDayNumber,
                extraProps: e.extraHookProps,
                viewApi: t.viewApi,
                dateEnv: t.dateEnv
            });
            return Or(fo, {hookProps: r, content: n.dayCellContent, defaultContent: e.defaultContent}, e.children)
        }, t
    }(qr);

    function aa(e) {
        var t = e.date, n = e.dateEnv, o = vr(t, e.todayRange, null, e.dateProfile);
        return r(r(r({
            date: n.toDate(t),
            view: e.viewApi
        }, o), {dayNumberText: e.showDayNumber ? n.format(t, oa) : ""}), e.extraProps)
    }

    var sa = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.refineHookProps = lt(aa), t.normalizeClassNames = go(), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.options, r = this.refineHookProps({
                    date: e.date,
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    showDayNumber: e.showDayNumber,
                    extraProps: e.extraHookProps,
                    viewApi: t.viewApi,
                    dateEnv: t.dateEnv
                }), o = gr(r, t.theme).concat(r.isDisabled ? [] : this.normalizeClassNames(n.dayCellClassNames, r)),
                i = r.isDisabled ? {} : {"data-date": rt(e.date)};
            return Or(vo, {
                hookProps: r,
                didMount: n.dayCellDidMount,
                willUnmount: n.dayCellWillUnmount,
                elRef: e.elRef
            }, function (t) {
                return e.children(t, o, i, r.isDisabled)
            })
        }, t
    }(qr);

    function la(e) {
        return Or("div", {className: "fc-" + e})
    }

    var ua = function (e) {
        return Or(ea, {
            defaultContent: ca,
            seg: e.seg,
            timeText: "",
            disableDragging: !0,
            disableResizing: !0,
            isDragging: !1,
            isResizing: !1,
            isDateSelecting: !1,
            isSelected: !1,
            isPast: e.isPast,
            isFuture: e.isFuture,
            isToday: e.isToday
        }, function (e, t, n, r, o) {
            return Or("div", {
                ref: e,
                className: ["fc-bg-event"].concat(t).join(" "),
                style: {backgroundColor: o.backgroundColor}
            }, r)
        })
    };

    function ca(e) {
        return e.event.title && Or("div", {className: "fc-event-title"}, e.event.title)
    }

    var da = function (e) {
        return Or(Br.Consumer, null, function (t) {
            var n = t.dateEnv, r = t.options, o = e.date, i = r.weekNumberFormat || e.defaultFormat,
                a = n.computeWeekNumber(o), s = n.format(o, i);
            return Or(co, {
                hookProps: {num: a, text: s, date: o},
                classNames: r.weekNumberClassNames,
                content: r.weekNumberContent,
                defaultContent: pa,
                didMount: r.weekNumberDidMount,
                willUnmount: r.weekNumberWillUnmount
            }, e.children)
        })
    };

    function pa(e) {
        return e.text
    }

    var fa = function (e) {
        function t(t, n) {
            void 0 === n && (n = {});
            var o = e.call(this) || this;
            return o.isRendering = !1, o.isRendered = !1, o.currentClassNames = [], o.customContentRenderId = 0, o.handleAction = function (e) {
                switch (e.type) {
                    case"SET_EVENT_DRAG":
                    case"SET_EVENT_RESIZE":
                        o.renderRunner.tryDrain()
                }
            }, o.handleData = function (e) {
                o.currentData = e, o.renderRunner.request(e.calendarOptions.rerenderDelay)
            }, o.handleRenderRequest = function () {
                if (o.isRendering) {
                    o.isRendered = !0;
                    var e = o.currentData;
                    Ar(Or(Ci, {options: e.calendarOptions, theme: e.theme, emitter: e.emitter}, function (t, n, i, a) {
                        return o.setClassNames(t), o.setHeight(n), Or(po.Provider, {value: o.customContentRenderId}, Or(Si, r({
                            isHeightAuto: i,
                            forPrint: a
                        }, e)))
                    }), o.el)
                } else o.isRendered && (o.isRendered = !1, Fr(o.el), o.setClassNames([]), o.setHeight(""));
                Vr()
            }, o.el = t, o.renderRunner = new qo(o.handleRenderRequest), new Xo({
                optionOverrides: n,
                calendarApi: o,
                onAction: o.handleAction,
                onData: o.handleData
            }), o
        }

        return n(t, e), Object.defineProperty(t.prototype, "view", {
            get: function () {
                return this.currentData.viewApi
            }, enumerable: !1, configurable: !0
        }), t.prototype.render = function () {
            var e = this.isRendering;
            e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize()
        }, t.prototype.destroy = function () {
            this.isRendering && (this.isRendering = !1, this.renderRunner.request())
        }, t.prototype.updateSize = function () {
            e.prototype.updateSize.call(this), Vr()
        }, t.prototype.batchRendering = function (e) {
            this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering")
        }, t.prototype.pauseRendering = function () {
            this.renderRunner.pause("pauseRendering")
        }, t.prototype.resumeRendering = function () {
            this.renderRunner.resume("pauseRendering", !0)
        }, t.prototype.resetOptions = function (e, t) {
            this.currentDataManager.resetOptions(e, t)
        }, t.prototype.setClassNames = function (e) {
            if (!at(e, this.currentClassNames)) {
                for (var t = this.el.classList, n = 0, r = this.currentClassNames; n < r.length; n++) {
                    var o = r[n];
                    t.remove(o)
                }
                for (var i = 0, a = e; i < a.length; i++) {
                    o = a[i];
                    t.add(o)
                }
                this.currentClassNames = e
            }
        }, t.prototype.setHeight = function (e) {
            Y(this.el, "height", e)
        }, t
    }(Fn);
    pi.touchMouseIgnoreWait = 500;
    var ha = 0, va = 0, ga = !1, ma = function () {
        function e(e) {
            var t = this;
            this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function (e) {
                if (!t.shouldIgnoreMouse() && function (e) {
                    return 0 === e.button && !e.ctrlKey
                }(e) && t.tryStart(e)) {
                    var n = t.createEventFromMouse(e, !0);
                    t.emitter.trigger("pointerdown", n), t.initScrollWatch(n), t.shouldIgnoreMove || document.addEventListener("mousemove", t.handleMouseMove), document.addEventListener("mouseup", t.handleMouseUp)
                }
            }, this.handleMouseMove = function (e) {
                var n = t.createEventFromMouse(e);
                t.recordCoords(n), t.emitter.trigger("pointermove", n)
            }, this.handleMouseUp = function (e) {
                document.removeEventListener("mousemove", t.handleMouseMove), document.removeEventListener("mouseup", t.handleMouseUp), t.emitter.trigger("pointerup", t.createEventFromMouse(e)), t.cleanup()
            }, this.handleTouchStart = function (e) {
                if (t.tryStart(e)) {
                    t.isTouchDragging = !0;
                    var n = t.createEventFromTouch(e, !0);
                    t.emitter.trigger("pointerdown", n), t.initScrollWatch(n);
                    var r = e.target;
                    t.shouldIgnoreMove || r.addEventListener("touchmove", t.handleTouchMove), r.addEventListener("touchend", t.handleTouchEnd), r.addEventListener("touchcancel", t.handleTouchEnd), window.addEventListener("scroll", t.handleTouchScroll, !0)
                }
            }, this.handleTouchMove = function (e) {
                var n = t.createEventFromTouch(e);
                t.recordCoords(n), t.emitter.trigger("pointermove", n)
            }, this.handleTouchEnd = function (e) {
                if (t.isDragging) {
                    var n = e.target;
                    n.removeEventListener("touchmove", t.handleTouchMove), n.removeEventListener("touchend", t.handleTouchEnd), n.removeEventListener("touchcancel", t.handleTouchEnd), window.removeEventListener("scroll", t.handleTouchScroll, !0), t.emitter.trigger("pointerup", t.createEventFromTouch(e)), t.cleanup(), t.isTouchDragging = !1, ha += 1, setTimeout(function () {
                        ha -= 1
                    }, pi.touchMouseIgnoreWait)
                }
            }, this.handleTouchScroll = function () {
                t.wasTouchScroll = !0
            }, this.handleScroll = function (e) {
                if (!t.shouldIgnoreMove) {
                    var n = window.pageXOffset - t.prevScrollX + t.prevPageX,
                        r = window.pageYOffset - t.prevScrollY + t.prevPageY;
                    t.emitter.trigger("pointermove", {
                        origEvent: e,
                        isTouch: t.isTouchDragging,
                        subjectEl: t.subjectEl,
                        pageX: n,
                        pageY: r,
                        deltaX: n - t.origPageX,
                        deltaY: r - t.origPageY
                    })
                }
            }, this.containerEl = e, this.emitter = new Mr, e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {passive: !0}), 1 === (va += 1) && window.addEventListener("touchmove", ya, {passive: !1})
        }

        return e.prototype.destroy = function () {
            this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {passive: !0}), (va -= 1) || window.removeEventListener("touchmove", ya, {passive: !1})
        }, e.prototype.tryStart = function (e) {
            var t = this.querySubjectEl(e), n = e.target;
            return !(!t || this.handleSelector && !z(n, this.handleSelector)) && (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1, !0)
        }, e.prototype.cleanup = function () {
            ga = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch()
        }, e.prototype.querySubjectEl = function (e) {
            return this.selector ? z(e.target, this.selector) : this.containerEl
        }, e.prototype.shouldIgnoreMouse = function () {
            return ha || this.isTouchDragging
        }, e.prototype.cancelTouchScroll = function () {
            this.isDragging && (ga = !0)
        }, e.prototype.initScrollWatch = function (e) {
            this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0))
        }, e.prototype.recordCoords = function (e) {
            this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset)
        }, e.prototype.destroyScrollWatch = function () {
            this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0)
        }, e.prototype.createEventFromMouse = function (e, t) {
            var n = 0, r = 0;
            return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
                origEvent: e,
                isTouch: !1,
                subjectEl: this.subjectEl,
                pageX: e.pageX,
                pageY: e.pageY,
                deltaX: n,
                deltaY: r
            }
        }, e.prototype.createEventFromTouch = function (e, t) {
            var n, r, o = e.touches, i = 0, a = 0;
            return o && o.length ? (n = o[0].pageX, r = o[0].pageY) : (n = e.pageX, r = e.pageY), t ? (this.origPageX = n, this.origPageY = r) : (i = n - this.origPageX, a = r - this.origPageY), {
                origEvent: e,
                isTouch: !0,
                subjectEl: this.subjectEl,
                pageX: n,
                pageY: r,
                deltaX: i,
                deltaY: a
            }
        }, e
    }();

    function ya(e) {
        ga && e.preventDefault()
    }

    var Ea = function () {
        function e() {
            this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0
        }

        return e.prototype.start = function (e, t, n) {
            this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition()
        }, e.prototype.handleMove = function (e, t) {
            this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = t - window.pageYOffset - this.origScreenY, this.updateElPosition()
        }, e.prototype.setIsVisible = function (e) {
            e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e)
        }, e.prototype.stop = function (e, t) {
            var n = this, r = function () {
                n.cleanup(), t()
            };
            e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0)
        }, e.prototype.doRevertAnimation = function (e, t) {
            var n = this.mirrorEl, r = this.sourceEl.getBoundingClientRect();
            n.style.transition = "top " + t + "ms,left " + t + "ms", q(n, {
                left: r.left,
                top: r.top
            }), $(n, function () {
                n.style.transition = "", e()
            })
        }, e.prototype.cleanup = function () {
            this.mirrorEl && (F(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null
        }, e.prototype.updateElPosition = function () {
            this.sourceEl && this.isVisible && q(this.getMirrorEl(), {
                left: this.sourceElRect.left + this.deltaX,
                top: this.sourceElRect.top + this.deltaY
            })
        }, e.prototype.getMirrorEl = function () {
            var e = this.sourceElRect, t = this.mirrorEl;
            return t || ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"), t.classList.add("fc-event-dragging"), q(t, {
                position: "fixed",
                zIndex: this.zIndex,
                visibility: "",
                boxSizing: "border-box",
                width: e.right - e.left,
                height: e.bottom - e.top,
                right: "auto",
                bottom: "auto",
                margin: 0
            }), this.parentNode.appendChild(t)), t
        }, e
    }(), Sa = function (e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.handleScroll = function () {
                r.scrollTop = r.scrollController.getScrollTop(), r.scrollLeft = r.scrollController.getScrollLeft(), r.handleScrollChange()
            }, r.scrollController = t, r.doesListening = n, r.scrollTop = r.origScrollTop = t.getScrollTop(), r.scrollLeft = r.origScrollLeft = t.getScrollLeft(), r.scrollWidth = t.getScrollWidth(), r.scrollHeight = t.getScrollHeight(), r.clientWidth = t.getClientWidth(), r.clientHeight = t.getClientHeight(), r.clientRect = r.computeClientRect(), r.doesListening && r.getEventTarget().addEventListener("scroll", r.handleScroll), r
        }

        return n(t, e), t.prototype.destroy = function () {
            this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll)
        }, t.prototype.getScrollTop = function () {
            return this.scrollTop
        }, t.prototype.getScrollLeft = function () {
            return this.scrollLeft
        }, t.prototype.setScrollTop = function (e) {
            this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange())
        }, t.prototype.setScrollLeft = function (e) {
            this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange())
        }, t.prototype.getClientWidth = function () {
            return this.clientWidth
        }, t.prototype.getClientHeight = function () {
            return this.clientHeight
        }, t.prototype.getScrollWidth = function () {
            return this.scrollWidth
        }, t.prototype.getScrollHeight = function () {
            return this.scrollHeight
        }, t.prototype.handleScrollChange = function () {
        }, t
    }(_r), Da = function (e) {
        function t(t, n) {
            return e.call(this, new Ir(t), n) || this
        }

        return n(t, e), t.prototype.getEventTarget = function () {
            return this.scrollController.el
        }, t.prototype.computeClientRect = function () {
            return wr(this.scrollController.el)
        }, t
    }(Sa), ba = function (e) {
        function t(t) {
            return e.call(this, new Pr, t) || this
        }

        return n(t, e), t.prototype.getEventTarget = function () {
            return window
        }, t.prototype.computeClientRect = function () {
            return {
                left: this.scrollLeft,
                right: this.scrollLeft + this.clientWidth,
                top: this.scrollTop,
                bottom: this.scrollTop + this.clientHeight
            }
        }, t.prototype.handleScrollChange = function () {
            this.clientRect = this.computeClientRect()
        }, t
    }(Sa), Ca = "function" == typeof performance ? performance.now : Date.now, wa = function () {
        function e() {
            var e = this;
            this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function () {
                if (e.isAnimating) {
                    var t = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);
                    if (t) {
                        var n = Ca();
                        e.handleSide(t, (n - e.msSinceRequest) / 1e3), e.requestAnimation(n)
                    } else e.isAnimating = !1
                }
            }
        }

        return e.prototype.start = function (e, t) {
            this.isEnabled && (this.scrollCaches = this.buildCaches(), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t))
        }, e.prototype.handleMove = function (e, t) {
            if (this.isEnabled) {
                var n = e - window.pageXOffset, r = t - window.pageYOffset,
                    o = null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
                    i = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
                o < 0 ? this.everMovedUp = !0 : o > 0 && (this.everMovedDown = !0), i < 0 ? this.everMovedLeft = !0 : i > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Ca()))
            }
        }, e.prototype.stop = function () {
            if (this.isEnabled) {
                this.isAnimating = !1;
                for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                    t[e].destroy()
                }
                this.scrollCaches = null
            }
        }, e.prototype.requestAnimation = function (e) {
            this.msSinceRequest = e, requestAnimationFrame(this.animate)
        }, e.prototype.handleSide = function (e, t) {
            var n = e.scrollCache, r = this.edgeThreshold, o = r - e.distance,
                i = o * o / (r * r) * this.maxVelocity * t, a = 1;
            switch (e.name) {
                case"left":
                    a = -1;
                case"right":
                    n.setScrollLeft(n.getScrollLeft() + i * a);
                    break;
                case"top":
                    a = -1;
                case"bottom":
                    n.setScrollTop(n.getScrollTop() + i * a)
            }
        }, e.prototype.computeBestEdge = function (e, t) {
            for (var n = this.edgeThreshold, r = null, o = 0, i = this.scrollCaches; o < i.length; o++) {
                var a = i[o], s = a.clientRect, l = e - s.left, u = s.right - e, c = t - s.top, d = s.bottom - t;
                l >= 0 && u >= 0 && c >= 0 && d >= 0 && (c <= n && this.everMovedUp && a.canScrollUp() && (!r || r.distance > c) && (r = {
                    scrollCache: a,
                    name: "top",
                    distance: c
                }), d <= n && this.everMovedDown && a.canScrollDown() && (!r || r.distance > d) && (r = {
                    scrollCache: a,
                    name: "bottom",
                    distance: d
                }), l <= n && this.everMovedLeft && a.canScrollLeft() && (!r || r.distance > l) && (r = {
                    scrollCache: a,
                    name: "left",
                    distance: l
                }), u <= n && this.everMovedRight && a.canScrollRight() && (!r || r.distance > u) && (r = {
                    scrollCache: a,
                    name: "right",
                    distance: u
                }))
            }
            return r
        }, e.prototype.buildCaches = function () {
            return this.queryScrollEls().map(function (e) {
                return e === window ? new ba(!1) : new Da(e, !1)
            })
        }, e.prototype.queryScrollEls = function () {
            for (var e = [], t = 0, n = this.scrollQuery; t < n.length; t++) {
                var r = n[t];
                "object" == typeof r ? e.push(r) : e.push.apply(e, Array.prototype.slice.call(document.querySelectorAll(r)))
            }
            return e
        }, e
    }(), Ra = function (e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            r.delay = null, r.minDistance = 0, r.touchScrollAllowed = !0, r.mirrorNeedsRevert = !1, r.isInteracting = !1, r.isDragging = !1, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, r.delayTimeoutId = null, r.onPointerDown = function (e) {
                r.isDragging || (r.isInteracting = !0, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, re(document.body), ie(document.body), e.isTouch || e.origEvent.preventDefault(), r.emitter.trigger("pointerdown", e), r.isInteracting && !r.pointer.shouldIgnoreMove && (r.mirror.setIsVisible(!1), r.mirror.start(e.subjectEl, e.pageX, e.pageY), r.startDelay(e), r.minDistance || r.handleDistanceSurpassed(e)))
            }, r.onPointerMove = function (e) {
                if (r.isInteracting) {
                    if (r.emitter.trigger("pointermove", e), !r.isDistanceSurpassed) {
                        var t = r.minDistance, n = e.deltaX, o = e.deltaY;
                        n * n + o * o >= t * t && r.handleDistanceSurpassed(e)
                    }
                    r.isDragging && ("scroll" !== e.origEvent.type && (r.mirror.handleMove(e.pageX, e.pageY), r.autoScroller.handleMove(e.pageX, e.pageY)), r.emitter.trigger("dragmove", e))
                }
            }, r.onPointerUp = function (e) {
                r.isInteracting && (r.isInteracting = !1, oe(document.body), ae(document.body), r.emitter.trigger("pointerup", e), r.isDragging && (r.autoScroller.stop(), r.tryStopDrag(e)), r.delayTimeoutId && (clearTimeout(r.delayTimeoutId), r.delayTimeoutId = null))
            };
            var o = r.pointer = new ma(t);
            return o.emitter.on("pointerdown", r.onPointerDown), o.emitter.on("pointermove", r.onPointerMove), o.emitter.on("pointerup", r.onPointerUp), n && (o.selector = n), r.mirror = new Ea, r.autoScroller = new wa, r
        }

        return n(t, e), t.prototype.destroy = function () {
            this.pointer.destroy(), this.onPointerUp({})
        }, t.prototype.startDelay = function (e) {
            var t = this;
            "number" == typeof this.delay ? this.delayTimeoutId = setTimeout(function () {
                t.delayTimeoutId = null, t.handleDelayEnd(e)
            }, this.delay) : this.handleDelayEnd(e)
        }, t.prototype.handleDelayEnd = function (e) {
            this.isDelayEnded = !0, this.tryStartDrag(e)
        }, t.prototype.handleDistanceSurpassed = function (e) {
            this.isDistanceSurpassed = !0, this.tryStartDrag(e)
        }, t.prototype.tryStartDrag = function (e) {
            this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY), this.emitter.trigger("dragstart", e), !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()))
        }, t.prototype.tryStopDrag = function (e) {
            this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
        }, t.prototype.stopDrag = function (e) {
            this.isDragging = !1, this.emitter.trigger("dragend", e)
        }, t.prototype.setIgnoreMove = function (e) {
            this.pointer.shouldIgnoreMove = e
        }, t.prototype.setMirrorIsVisible = function (e) {
            this.mirror.setIsVisible(e)
        }, t.prototype.setMirrorNeedsRevert = function (e) {
            this.mirrorNeedsRevert = e
        }, t.prototype.setAutoScrollEnabled = function (e) {
            this.autoScroller.isEnabled = e
        }, t
    }(di), Ta = function () {
        function e(e) {
            this.origRect = Rr(e), this.scrollCaches = Tr(e).map(function (e) {
                return new Da(e, !0)
            })
        }

        return e.prototype.destroy = function () {
            for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                t[e].destroy()
            }
        }, e.prototype.computeLeft = function () {
            for (var e = this.origRect.left, t = 0, n = this.scrollCaches; t < n.length; t++) {
                var r = n[t];
                e += r.origScrollLeft - r.getScrollLeft()
            }
            return e
        }, e.prototype.computeTop = function () {
            for (var e = this.origRect.top, t = 0, n = this.scrollCaches; t < n.length; t++) {
                var r = n[t];
                e += r.origScrollTop - r.getScrollTop()
            }
            return e
        }, e.prototype.isWithinClipping = function (e, t) {
            for (var n, r, o = {left: e, top: t}, i = 0, a = this.scrollCaches; i < a.length; i++) {
                var s = a[i];
                if (n = s.getEventTarget(), r = void 0, "HTML" !== (r = n.tagName) && "BODY" !== r && !ar(o, s.clientRect)) return !1
            }
            return !0
        }, e
    }();
    var ka = function () {
        function e(e, t) {
            var n = this;
            this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function (e) {
                var t = n.dragging;
                n.initialHit = null, n.movingHit = null, n.finalHit = null, n.prepareHits(), n.processFirstCoord(e), n.initialHit || !n.requireInitial ? (t.setIgnoreMove(!1), n.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0)
            }, this.handleDragStart = function (e) {
                n.emitter.trigger("dragstart", e), n.handleMove(e, !0)
            }, this.handleDragMove = function (e) {
                n.emitter.trigger("dragmove", e), n.handleMove(e)
            }, this.handlePointerUp = function (e) {
                n.releaseHits(), n.emitter.trigger("pointerup", e)
            }, this.handleDragEnd = function (e) {
                n.movingHit && n.emitter.trigger("hitupdate", null, !0, e), n.finalHit = n.movingHit, n.movingHit = null, n.emitter.trigger("dragend", e)
            }, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new Mr
        }

        return e.prototype.processFirstCoord = function (e) {
            var t, n = {left: e.pageX, top: e.pageY}, r = n, o = e.subjectEl;
            o !== document && (r = lr(r, t = Rr(o)));
            var i = this.initialHit = this.queryHitForOffset(r.left, r.top);
            if (i) {
                if (this.useSubjectCenter && t) {
                    var a = sr(t, i.rect);
                    a && (r = ur(a))
                }
                this.coordAdjust = cr(r, n)
            } else this.coordAdjust = {left: 0, top: 0}
        }, e.prototype.handleMove = function (e, t) {
            var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
            !t && Ma(this.movingHit, n) || (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e))
        }, e.prototype.prepareHits = function () {
            this.offsetTrackers = Ue(this.droppableStore, function (e) {
                return e.component.prepareHits(), new Ta(e.el)
            })
        }, e.prototype.releaseHits = function () {
            var e = this.offsetTrackers;
            for (var t in e) e[t].destroy();
            this.offsetTrackers = {}
        }, e.prototype.queryHitForOffset = function (e, t) {
            var n = this.droppableStore, r = this.offsetTrackers, o = null;
            for (var i in n) {
                var a = n[i].component, s = r[i];
                if (s && s.isWithinClipping(e, t)) {
                    var l = s.computeLeft(), u = s.computeTop(), c = e - l, d = t - u, p = s.origRect,
                        f = p.right - p.left, h = p.bottom - p.top;
                    if (c >= 0 && c < f && d >= 0 && d < h) {
                        var v = a.queryHit(c, d, f, h), g = a.context.getCurrentData().dateProfile;
                        v && ln(g.activeRange, v.dateSpan.range) && (!o || v.layer > o.layer) && (v.rect.left += l, v.rect.right += l, v.rect.top += u, v.rect.bottom += u, o = v)
                    }
                }
            }
            return o
        }, e
    }();

    function Ma(e, t) {
        return !e && !t || Boolean(e) === Boolean(t) && kn(e.dateSpan, t.dateSpan)
    }

    function xa(e, t) {
        for (var n, o, i = {}, a = 0, s = t.pluginHooks.datePointTransforms; a < s.length; a++) {
            var l = s[a];
            r(i, l(e, t))
        }
        var aaa= r(i, (n = e, {
            date: (o = t.dateEnv).toDate(n.range.start),
            dateStr: o.formatIso(n.range.start, {omitTime: n.allDay}),
            allDay: n.allDay
        }));
        var _dateStr = o.formatIso(n.range.start, {omitTime: n.allDay});
        _dateStr = _dateStr.split("-");
        return aaa, i;
    }

    var _a = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.handlePointerDown = function (e) {
                var t = n.dragging, r = e.origEvent.target;
                t.setIgnoreMove(!n.component.isValidDateDownEl(r))
            }, n.handleDragEnd = function (e) {
                var t = n.component;
                if (!n.dragging.pointer.wasTouchScroll) {
                    var o = n.hitDragging, i = o.initialHit, a = o.finalHit;
                    if (i && a && Ma(i, a)) {
                        var s = t.context, l = r(r({}, xa(i.dateSpan, s)), {
                            dayEl: i.dayEl,
                            jsEvent: e.origEvent,
                            view: s.viewApi || s.calendarApi.view
                        });
                        s.emitter.trigger("dateClick", l)
                    }
                }
            }, n.dragging = new Ra(t.el), n.dragging.autoScroller.isEnabled = !1;
            var o = n.hitDragging = new ka(n.dragging, ui(t));
            return o.emitter.on("pointerdown", n.handlePointerDown), o.emitter.on("dragend", n.handleDragEnd), n
        }

        return n(t, e), t.prototype.destroy = function () {
            this.dragging.destroy()
        }, t
    }(li), Ia = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.dragSelection = null, n.handlePointerDown = function (e) {
                var t = n, r = t.component, o = t.dragging,
                    i = r.context.options.selectable && r.isValidDateDownEl(e.origEvent.target);
                o.setIgnoreMove(!i), o.delay = e.isTouch ? function (e) {
                    var t = e.context.options, n = t.selectLongPressDelay;
                    null == n && (n = t.longPressDelay);
                    return n
                }(r) : null
            }, n.handleDragStart = function (e) {
                n.component.context.calendarApi.unselect(e)
            }, n.handleHitUpdate = function (e, t) {
                var o = n.component.context, i = null, a = !1;
                e && ((i = function (e, t, n) {
                    var o = e.dateSpan, i = t.dateSpan, a = [o.range.start, o.range.end, i.range.start, i.range.end];
                    a.sort(pe);
                    for (var s = {}, l = 0, u = n; l < u.length; l++) {
                        var c = u[l], d = c(e, t);
                        if (!1 === d) return null;
                        d && r(s, d)
                    }
                    return s.range = {start: a[0], end: a[3]}, s.allDay = o.allDay, s
                }(n.hitDragging.initialHit, e, o.pluginHooks.dateSelectionTransformers)) && n.component.isDateSelectionValid(i) || (a = !0, i = null)), i ? o.dispatch({
                    type: "SELECT_DATES",
                    selection: i
                }) : t || o.dispatch({type: "UNSELECT_DATES"}), a ? te() : ne(), t || (n.dragSelection = i)
            }, n.handlePointerUp = function (e) {
                n.dragSelection && (_n(n.dragSelection, e, n.component.context), n.dragSelection = null)
            };
            var o = t.component.context.options, i = n.dragging = new Ra(t.el);
            i.touchScrollAllowed = !1, i.minDistance = o.selectMinDistance || 0, i.autoScroller.isEnabled = o.dragScroll;
            var a = n.hitDragging = new ka(n.dragging, ui(t));
            return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("dragstart", n.handleDragStart), a.emitter.on("hitupdate", n.handleHitUpdate), a.emitter.on("pointerup", n.handlePointerUp), n
        }

        return n(t, e), t.prototype.destroy = function () {
            this.dragging.destroy()
        }, t
    }(li);
    var Pa = function (e) {
        function t(n) {
            var o = e.call(this, n) || this;
            o.subjectEl = null, o.subjectSeg = null, o.isDragging = !1, o.eventRange = null, o.relevantEvents = null, o.receivingContext = null, o.validMutation = null, o.mutatedRelevantEvents = null, o.handlePointerDown = function (e) {
                var t = e.origEvent.target, n = o, r = n.component, i = n.dragging, a = i.mirror, s = r.context.options,
                    l = r.context;
                o.subjectEl = e.subjectEl;
                var u = o.subjectSeg = fn(e.subjectEl), c = (o.eventRange = u.eventRange).instance.instanceId;
                o.relevantEvents = Ot(l.getCurrentData().eventStore, c), i.minDistance = e.isTouch ? 0 : s.eventDragMinDistance, i.delay = e.isTouch && c !== r.props.eventSelection ? function (e) {
                    var t = e.context.options, n = t.eventLongPressDelay;
                    null == n && (n = t.longPressDelay);
                    return n
                }(r) : null, s.fixedMirrorParent ? a.parentNode = s.fixedMirrorParent : a.parentNode = z(t, ".fc"), a.revertDuration = s.dragRevertDuration;
                var d = r.isValidSegDownEl(t) && !z(t, ".fc-event-resizer");
                i.setIgnoreMove(!d), o.isDragging = d && e.subjectEl.classList.contains("fc-event-draggable")
            }, o.handleDragStart = function (e) {
                var t = o.component.context, n = o.eventRange, r = n.instance.instanceId;
                e.isTouch ? r !== o.component.props.eventSelection && t.dispatch({
                    type: "SELECT_EVENT",
                    eventInstanceId: r
                }) : t.dispatch({type: "UNSELECT_EVENT"}), o.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
                    el: o.subjectEl,
                    event: new zn(t, n.def, n.instance),
                    jsEvent: e.origEvent,
                    view: t.viewApi
                }))
            }, o.handleHitUpdate = function (e, t) {
                if (o.isDragging) {
                    var n = o.relevantEvents, r = o.hitDragging.initialHit, i = o.component.context, a = null, s = null,
                        l = null, u = !1,
                        c = {affectedEvents: n, mutatedEvents: {defs: {}, instances: {}}, isEvent: !0};
                    if (e) {
                        var d = e.component, p = (a = d.context).options;
                        i === a || p.editable && p.droppable ? (s = function (e, t, n) {
                            var r = e.dateSpan, o = t.dateSpan, i = r.range.start, a = o.range.start, s = {};
                            r.allDay !== o.allDay && (s.allDay = o.allDay, s.hasEnd = t.component.context.options.allDayMaintainDuration, o.allDay && (i = we(i)));
                            var l = tn(i, a, e.component.context.dateEnv, e.component === t.component ? e.component.largeUnit : null);
                            l.milliseconds && (s.allDay = !1);
                            for (var u = {datesDelta: l, standardProps: s}, c = 0, d = n; c < d.length; c++) {
                                var p = d[c];
                                p(u, e, t)
                            }
                            return u
                        }(r, e, a.getCurrentData().pluginHooks.eventDragMutationMassagers)) && (l = Nn(n, a.getCurrentData().eventUiBases, s, a), c.mutatedEvents = l, d.isInteractionValid(c) || (u = !0, s = null, l = null, c.mutatedEvents = {
                            defs: {},
                            instances: {}
                        })) : a = null
                    }
                    o.displayDrag(a, c), u ? te() : ne(), t || (i === a && Ma(r, e) && (s = null), o.dragging.setMirrorNeedsRevert(!s), o.dragging.setMirrorIsVisible(!e || !document.querySelector(".fc-event-mirror")), o.receivingContext = a, o.validMutation = s, o.mutatedRelevantEvents = l)
                }
            }, o.handlePointerUp = function () {
                o.isDragging || o.cleanup()
            }, o.handleDragEnd = function (e) {
                if (o.isDragging) {
                    var t = o.component.context, n = t.viewApi, i = o, a = i.receivingContext, s = i.validMutation,
                        l = o.eventRange.def, u = o.eventRange.instance, c = new zn(t, l, u), d = o.relevantEvents,
                        p = o.mutatedRelevantEvents, f = o.hitDragging.finalHit;
                    if (o.clearDrag(), t.emitter.trigger("eventDragStop", {
                        el: o.subjectEl,
                        event: c,
                        jsEvent: e.origEvent,
                        view: n
                    }), s) {
                        if (a === t) {
                            var h = new zn(t, p.defs[l.defId], u ? p.instances[u.instanceId] : null);
                            t.dispatch({type: "MERGE_EVENTS", eventStore: p});
                            for (var v = {
                                oldEvent: c, event: h, relatedEvents: jn(p, t, u), revert: function () {
                                    t.dispatch({type: "MERGE_EVENTS", eventStore: d})
                                }
                            }, g = {}, m = 0, y = t.getCurrentData().pluginHooks.eventDropTransformers; m < y.length; m++) {
                                var E = y[m];
                                r(g, E(s, t))
                            }
                            t.emitter.trigger("eventDrop", r(r(r({}, v), g), {
                                el: e.subjectEl,
                                delta: s.datesDelta,
                                jsEvent: e.origEvent,
                                view: n
                            })), t.emitter.trigger("eventChange", v)
                        } else if (a) {
                            var S = {
                                event: c, relatedEvents: jn(d, t, u), revert: function () {
                                    t.dispatch({type: "MERGE_EVENTS", eventStore: d})
                                }
                            };
                            t.emitter.trigger("eventLeave", r(r({}, S), {
                                draggedEl: e.subjectEl,
                                view: n
                            })), t.dispatch({
                                type: "REMOVE_EVENTS",
                                eventStore: d
                            }), t.emitter.trigger("eventRemove", S);
                            var D = p.defs[l.defId], b = p.instances[u.instanceId], C = new zn(a, D, b);
                            a.dispatch({type: "MERGE_EVENTS", eventStore: p});
                            var w = {
                                event: C, relatedEvents: jn(p, a, b), revert: function () {
                                    a.dispatch({type: "REMOVE_EVENTS", eventStore: p})
                                }
                            };
                            a.emitter.trigger("eventAdd", w), e.isTouch && a.dispatch({
                                type: "SELECT_EVENT",
                                eventInstanceId: u.instanceId
                            }), a.emitter.trigger("drop", r(r({}, xa(f.dateSpan, a)), {
                                draggedEl: e.subjectEl,
                                jsEvent: e.origEvent,
                                view: f.component.context.viewApi
                            })), a.emitter.trigger("eventReceive", r(r({}, w), {
                                draggedEl: e.subjectEl,
                                view: f.component.context.viewApi
                            }))
                        }
                    } else t.emitter.trigger("_noEventDrop")
                }
                o.cleanup()
            };
            var i = o.component.context.options, a = o.dragging = new Ra(n.el);
            a.pointer.selector = t.SELECTOR, a.touchScrollAllowed = !1, a.autoScroller.isEnabled = i.dragScroll;
            var s = o.hitDragging = new ka(o.dragging, ci);
            return s.useSubjectCenter = n.useEventCenter, s.emitter.on("pointerdown", o.handlePointerDown), s.emitter.on("dragstart", o.handleDragStart), s.emitter.on("hitupdate", o.handleHitUpdate), s.emitter.on("pointerup", o.handlePointerUp), s.emitter.on("dragend", o.handleDragEnd), o
        }

        return n(t, e), t.prototype.destroy = function () {
            this.dragging.destroy()
        }, t.prototype.displayDrag = function (e, t) {
            var n = this.component.context, r = this.receivingContext;
            r && r !== e && (r === n ? r.dispatch({
                type: "SET_EVENT_DRAG",
                state: {affectedEvents: t.affectedEvents, mutatedEvents: {defs: {}, instances: {}}, isEvent: !0}
            }) : r.dispatch({type: "UNSET_EVENT_DRAG"})), e && e.dispatch({type: "SET_EVENT_DRAG", state: t})
        }, t.prototype.clearDrag = function () {
            var e = this.component.context, t = this.receivingContext;
            t && t.dispatch({type: "UNSET_EVENT_DRAG"}), e !== t && e.dispatch({type: "UNSET_EVENT_DRAG"})
        }, t.prototype.cleanup = function () {
            this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null
        }, t.SELECTOR = ".fc-event-draggable, .fc-event-resizable", t
    }(li);
    var Na = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.draggingSegEl = null, n.draggingSeg = null, n.eventRange = null, n.relevantEvents = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function (e) {
                var t = n.component, r = fn(n.querySegEl(e)), o = n.eventRange = r.eventRange;
                n.dragging.minDistance = t.context.options.eventDragMinDistance, n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && n.component.props.eventSelection !== o.instance.instanceId)
            }, n.handleDragStart = function (e) {
                var t = n.component.context, r = n.eventRange;
                n.relevantEvents = Ot(t.getCurrentData().eventStore, n.eventRange.instance.instanceId);
                var o = n.querySegEl(e);
                n.draggingSegEl = o, n.draggingSeg = fn(o), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
                    el: o,
                    event: new zn(t, r.def, r.instance),
                    jsEvent: e.origEvent,
                    view: t.viewApi
                })
            }, n.handleHitUpdate = function (e, t, o) {
                var i = n.component.context, a = n.relevantEvents, s = n.hitDragging.initialHit,
                    l = n.eventRange.instance, u = null, c = null, d = !1,
                    p = {affectedEvents: a, mutatedEvents: {defs: {}, instances: {}}, isEvent: !0};
                e && (u = function (e, t, n, o, i) {
                    for (var a = e.component.context.dateEnv, s = e.dateSpan.range.start, l = t.dateSpan.range.start, u = tn(s, l, a, e.component.largeUnit), c = {}, d = 0, p = i; d < p.length; d++) {
                        var f = p[d], h = f(e, t);
                        if (!1 === h) return null;
                        h && r(c, h)
                    }
                    if (n) {
                        if (a.add(o.start, u) < o.end) return c.startDelta = u, c
                    } else if (a.add(o.end, u) > o.start) return c.endDelta = u, c;
                    return null
                }(s, e, o.subjectEl.classList.contains("fc-event-resizer-start"), l.range, i.pluginHooks.eventResizeJoinTransforms)), u && (c = Nn(a, i.getCurrentData().eventUiBases, u, i), p.mutatedEvents = c, n.component.isInteractionValid(p) || (d = !0, u = null, c = null, p.mutatedEvents = null)), c ? i.dispatch({
                    type: "SET_EVENT_RESIZE",
                    state: p
                }) : i.dispatch({type: "UNSET_EVENT_RESIZE"}), d ? te() : ne(), t || (u && Ma(s, e) && (u = null), n.validMutation = u, n.mutatedRelevantEvents = c)
            }, n.handleDragEnd = function (e) {
                var t = n.component.context, o = n.eventRange.def, i = n.eventRange.instance, a = new zn(t, o, i),
                    s = n.relevantEvents, l = n.mutatedRelevantEvents;
                if (t.emitter.trigger("eventResizeStop", {
                    el: n.draggingSegEl,
                    event: a,
                    jsEvent: e.origEvent,
                    view: t.viewApi
                }), n.validMutation) {
                    var u = new zn(t, l.defs[o.defId], i ? l.instances[i.instanceId] : null);
                    t.dispatch({type: "MERGE_EVENTS", eventStore: l});
                    var c = {
                        oldEvent: a, event: u, relatedEvents: jn(l, t, i), revert: function () {
                            t.dispatch({type: "MERGE_EVENTS", eventStore: s})
                        }
                    };
                    t.emitter.trigger("eventResize", r(r({}, c), {
                        el: n.draggingSegEl,
                        startDelta: n.validMutation.startDelta || Xe(0),
                        endDelta: n.validMutation.endDelta || Xe(0),
                        jsEvent: e.origEvent,
                        view: t.viewApi
                    })), t.emitter.trigger("eventChange", c)
                } else t.emitter.trigger("_noEventResize");
                n.draggingSeg = null, n.relevantEvents = null, n.validMutation = null
            };
            var o = t.component, i = n.dragging = new Ra(t.el);
            i.pointer.selector = ".fc-event-resizer", i.touchScrollAllowed = !1, i.autoScroller.isEnabled = o.context.options.dragScroll;
            var a = n.hitDragging = new ka(n.dragging, ui(t));
            return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("dragstart", n.handleDragStart), a.emitter.on("hitupdate", n.handleHitUpdate), a.emitter.on("dragend", n.handleDragEnd), n
        }

        return n(t, e), t.prototype.destroy = function () {
            this.dragging.destroy()
        }, t.prototype.querySegEl = function (e) {
            return z(e.subjectEl, ".fc-event")
        }, t
    }(li);
    var Ha = function () {
        function e(e) {
            var t = this;
            this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function (e) {
                e.jsEvent && (t.isRecentPointerDateSelect = !0)
            }, this.onDocumentPointerDown = function (e) {
                var n = t.context.options.unselectCancel, r = e.origEvent.target;
                t.matchesCancel = !!z(r, n), t.matchesEvent = !!z(r, Pa.SELECTOR)
            }, this.onDocumentPointerUp = function (e) {
                var n = t.context, r = t.documentPointer, o = n.getCurrentData();
                if (!r.wasTouchScroll) {
                    if (o.dateSelection && !t.isRecentPointerDateSelect) {
                        var i = n.options.unselectAuto;
                        !i || i && t.matchesCancel || n.calendarApi.unselect(e)
                    }
                    o.eventSelection && !t.matchesEvent && n.dispatch({type: "UNSELECT_EVENT"})
                }
                t.isRecentPointerDateSelect = !1
            };
            var n = this.documentPointer = new ma(document);
            n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect)
        }

        return e.prototype.destroy = function () {
            this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy()
        }, e
    }(), Oa = {fixedMirrorParent: Pt}, Aa = {
        dateClick: Pt,
        eventDragStart: Pt,
        eventDragStop: Pt,
        eventDrop: Pt,
        eventResizeStart: Pt,
        eventResizeStop: Pt,
        eventResize: Pt,
        drop: Pt,
        eventReceive: Pt,
        eventLeave: Pt
    }, Ua = function () {
        function e(e, t) {
            var n = this;
            this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = function (e) {
                n.dragMeta = n.buildDragMeta(e.subjectEl)
            }, this.handleHitUpdate = function (e, t, o) {
                var i = n.hitDragging.dragging, a = null, s = null, l = !1, u = {
                    affectedEvents: {defs: {}, instances: {}},
                    mutatedEvents: {defs: {}, instances: {}},
                    isEvent: n.dragMeta.create
                };
                e && (a = e.component.context, n.canDropElOnCalendar(o.subjectEl, a) && (s = function (e, t, n) {
                    for (var o = r({}, t.leftoverProps), i = 0, a = n.pluginHooks.externalDefTransforms; i < a.length; i++) {
                        var s = a[i];
                        r(o, s(e, t))
                    }
                    var l = Xt(o, n), u = l.refined, c = l.extra,
                        d = Jt(u, c, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n),
                        p = e.range.start;
                    e.allDay && t.startTime && (p = n.dateEnv.add(p, t.startTime));
                    var f = t.duration ? n.dateEnv.add(p, t.duration) : Pn(e.allDay, p, n),
                        h = Ne(d.defId, {start: p, end: f});
                    return {def: d, instance: h}
                }(e.dateSpan, n.dragMeta, a), u.mutatedEvents = Ht(s), (l = !Qr(u, a)) && (u.mutatedEvents = {
                    defs: {},
                    instances: {}
                }, s = null))), n.displayDrag(a, u), i.setMirrorIsVisible(t || !s || !document.querySelector(".fc-event-mirror")), l ? te() : ne(), t || (i.setMirrorNeedsRevert(!s), n.receivingContext = a, n.droppableEvent = s)
            }, this.handleDragEnd = function (e) {
                var t = n, o = t.receivingContext, i = t.droppableEvent;
                if (n.clearDrag(), o && i) {
                    var a = n.hitDragging.finalHit, s = a.component.context.viewApi, l = n.dragMeta;
                    if (o.emitter.trigger("drop", r(r({}, xa(a.dateSpan, o)), {
                        draggedEl: e.subjectEl,
                        jsEvent: e.origEvent,
                        view: s
                    })), l.create) {
                        var u = Ht(i);
                        o.dispatch({
                            type: "MERGE_EVENTS",
                            eventStore: u
                        }), e.isTouch && o.dispatch({
                            type: "SELECT_EVENT",
                            eventInstanceId: i.instance.instanceId
                        }), o.emitter.trigger("eventReceive", {
                            event: new zn(o, i.def, i.instance),
                            relatedEvents: [],
                            revert: function () {
                                o.dispatch({type: "REMOVE_EVENTS", eventStore: u})
                            },
                            draggedEl: e.subjectEl,
                            view: s
                        })
                    }
                }
                n.receivingContext = null, n.droppableEvent = null
            };
            var o = this.hitDragging = new ka(e, ci);
            o.requireInitial = !1, o.emitter.on("dragstart", this.handleDragStart), o.emitter.on("hitupdate", this.handleHitUpdate), o.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = t
        }

        return e.prototype.buildDragMeta = function (e) {
            return "object" == typeof this.suppliedDragMeta ? hi(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? hi(this.suppliedDragMeta(e)) : hi((t = function (e, t) {
                var n = pi.dataAttrPrefix, r = (n ? n + "-" : "") + t;
                return e.getAttribute("data-" + r) || ""
            }(e, "event")) ? JSON.parse(t) : {create: !1});
            var t
        }, e.prototype.displayDrag = function (e, t) {
            var n = this.receivingContext;
            n && n !== e && n.dispatch({type: "UNSET_EVENT_DRAG"}), e && e.dispatch({type: "SET_EVENT_DRAG", state: t})
        }, e.prototype.clearDrag = function () {
            this.receivingContext && this.receivingContext.dispatch({type: "UNSET_EVENT_DRAG"})
        }, e.prototype.canDropElOnCalendar = function (e, t) {
            var n = t.options.dropAccept;
            return "function" == typeof n ? n.call(t.calendarApi, e) : "string" != typeof n || !n || Boolean(B(e, n))
        }, e
    }();
    pi.dataAttrPrefix = "";
    var La = function () {
        function e(e, t) {
            var n = this;
            void 0 === t && (t = {}), this.handlePointerDown = function (e) {
                var t = n.dragging, r = n.settings, o = r.minDistance, i = r.longPressDelay;
                t.minDistance = null != o ? o : e.isTouch ? 0 : wt.eventDragMinDistance, t.delay = e.isTouch ? null != i ? i : wt.longPressDelay : 0
            }, this.handleDragStart = function (e) {
                e.isTouch && n.dragging.delay && e.subjectEl.classList.contains("fc-event") && n.dragging.mirror.getMirrorEl().classList.add("fc-event-selected")
            }, this.settings = t;
            var r = this.dragging = new Ra(e);
            r.touchScrollAllowed = !1, null != t.itemSelector && (r.pointer.selector = t.itemSelector), null != t.appendTo && (r.mirror.parentNode = t.appendTo), r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragstart", this.handleDragStart), new Ua(r, t.eventData)
        }

        return e.prototype.destroy = function () {
            this.dragging.destroy()
        }, e
    }(), Wa = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.shouldIgnoreMove = !1, n.mirrorSelector = "", n.currentMirrorEl = null, n.handlePointerDown = function (e) {
                n.emitter.trigger("pointerdown", e), n.shouldIgnoreMove || n.emitter.trigger("dragstart", e)
            }, n.handlePointerMove = function (e) {
                n.shouldIgnoreMove || n.emitter.trigger("dragmove", e)
            }, n.handlePointerUp = function (e) {
                n.emitter.trigger("pointerup", e), n.shouldIgnoreMove || n.emitter.trigger("dragend", e)
            };
            var r = n.pointer = new ma(t);
            return r.emitter.on("pointerdown", n.handlePointerDown), r.emitter.on("pointermove", n.handlePointerMove), r.emitter.on("pointerup", n.handlePointerUp), n
        }

        return n(t, e), t.prototype.destroy = function () {
            this.pointer.destroy()
        }, t.prototype.setIgnoreMove = function (e) {
            this.shouldIgnoreMove = e
        }, t.prototype.setMirrorIsVisible = function (e) {
            if (e) this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null); else {
                var t = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
                t && (this.currentMirrorEl = t, t.style.visibility = "hidden")
            }
        }, t
    }(di), Va = function () {
        function e(e, t) {
            var n = document;
            e === document || e instanceof Element ? (n = e, t = t || {}) : t = e || {};
            var r = this.dragging = new Wa(n);
            "string" == typeof t.itemSelector ? r.pointer.selector = t.itemSelector : n === document && (r.pointer.selector = "[data-event]"), "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector), new Ua(r, t.eventData)
        }

        return e.prototype.destroy = function () {
            this.dragging.destroy()
        }, e
    }(), Fa = so({
        componentInteractions: [_a, Ia, Pa, Na],
        calendarInteractions: [Ha],
        elementDraggingImpl: Ra,
        optionRefiners: Oa,
        listenerRefiners: Aa
    }), za = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.headerElRef = Ur(), t
        }

        return n(t, e), t.prototype.renderSimpleLayout = function (e, t) {
            var n = this.props, r = this.context, o = [], i = Ji(r.options);
            return e && o.push({
                type: "header",
                key: "header",
                isSticky: i,
                chunk: {elRef: this.headerElRef, tableClassName: "fc-col-header", rowContent: e}
            }), o.push({
                type: "body",
                key: "body",
                liquid: !0,
                chunk: {content: t}
            }), Or(Eo, {viewSpec: r.viewSpec}, function (e, t) {
                return Or("div", {
                    ref: e,
                    className: ["fc-daygrid"].concat(t).join(" ")
                }, Or(Qi, {liquid: !n.isHeightAuto && !n.forPrint, cols: [], sections: o}))
            })
        }, t.prototype.renderHScrollLayout = function (e, t, n, r) {
            var o = this.context.pluginHooks.scrollGridImpl;
            if (!o) throw new Error("No ScrollGrid implementation");
            var i = this.props, a = this.context, s = !i.forPrint && Ji(a.options), l = !i.forPrint && $i(a.options),
                u = [];
            return e && u.push({
                type: "header",
                key: "header",
                isSticky: s,
                chunks: [{key: "main", elRef: this.headerElRef, tableClassName: "fc-col-header", rowContent: e}]
            }), u.push({
                type: "body",
                key: "body",
                liquid: !0,
                chunks: [{key: "main", content: t}]
            }), l && u.push({
                type: "footer",
                key: "footer",
                isSticky: !0,
                chunks: [{key: "main", content: Ki}]
            }), Or(Eo, {viewSpec: a.viewSpec}, function (e, t) {
                return Or("div", {
                    ref: e,
                    className: ["fc-daygrid"].concat(t).join(" ")
                }, Or(o, {
                    liquid: !i.isHeightAuto && !i.forPrint,
                    colGroups: [{cols: [{span: n, minWidth: r}]}],
                    sections: u
                }))
            })
        }, t
    }(ao);

    function Ba(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.row].push(a)
        }
        return n
    }

    function ja(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.firstCol].push(a)
        }
        return n
    }

    function Ga(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) n[a] = {affectedInstances: e.affectedInstances, isEvent: e.isEvent, segs: []};
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.row].segs.push(i)
            }
        } else for (var a = 0; a < t; a += 1) n[a] = null;
        return n
    }

    var qa = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context.options.navLinks ? {"data-navlink": mr(e.date), tabIndex: 0} : {};
            return Or(ia, {
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                showDayNumber: e.showDayNumber,
                extraHookProps: e.extraHookProps,
                defaultContent: Ya
            }, function (n, o) {
                return (o || e.forceDayTop) && Or("div", {
                    className: "fc-daygrid-day-top",
                    ref: n
                }, Or("a", r({className: "fc-daygrid-day-number"}, t), o || Or(Lr, null, " ")))
            })
        }, t
    }(qr);

    function Ya(e) {
        return e.dayNumberText
    }

    var Za = bt({week: "narrow"}), Xa = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleRootEl = function (e) {
                t.rootEl = e, Xr(t.props.elRef, e)
            }, t.handleMoreLinkClick = function (e) {
                var n = t.props;
                if (n.onMoreClick) {
                    var r = n.segsByEachCol, o = r.filter(function (e) {
                        return n.segIsHidden[e.eventRange.instance.instanceId]
                    });
                    n.onMoreClick({date: n.date, allSegs: r, hiddenSegs: o, moreCnt: n.moreCnt, dayEl: t.rootEl, ev: e})
                }
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.context, n = t.options, o = t.viewApi, i = this.props, a = i.date, s = i.dateProfile,
                l = {num: i.moreCnt, text: i.buildMoreLinkText(i.moreCnt), view: o},
                u = n.navLinks ? {"data-navlink": mr(a, "week"), tabIndex: 0} : {};
            return Or(sa, {
                date: a,
                dateProfile: s,
                todayRange: i.todayRange,
                showDayNumber: i.showDayNumber,
                extraHookProps: i.extraHookProps,
                elRef: this.handleRootEl
            }, function (t, o, c, d) {
                return Or("td", r({
                    ref: t,
                    className: ["fc-daygrid-day"].concat(o, i.extraClassNames || []).join(" ")
                }, c, i.extraDataAttrs), Or("div", {
                    className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                    ref: i.innerElRef
                }, i.showWeekNumber && Or(da, {date: a, defaultFormat: Za}, function (e, t, n, o) {
                    return Or("a", r({ref: e, className: ["fc-daygrid-week-number"].concat(t).join(" ")}, u), o)
                }), !d && Or(qa, {
                    date: a,
                    dateProfile: s,
                    showDayNumber: i.showDayNumber,
                    forceDayTop: i.forceDayTop,
                    todayRange: i.todayRange,
                    extraHookProps: i.extraHookProps
                }), Or("div", {
                    className: "fc-daygrid-day-events",
                    ref: i.fgContentElRef,
                    style: {paddingBottom: i.fgPaddingBottom}
                }, i.fgContent, Boolean(i.moreCnt) && Or("div", {
                    className: "fc-daygrid-day-bottom",
                    style: {marginTop: i.moreMarginTop}
                }, Or(co, {
                    hookProps: l,
                    classNames: n.moreLinkClassNames,
                    content: n.moreLinkContent,
                    defaultContent: Ka,
                    didMount: n.moreLinkDidMount,
                    willUnmount: n.moreLinkWillUnmount
                }, function (t, n, r, o) {
                    return Or("a", {
                        ref: t,
                        className: ["fc-daygrid-more-link"].concat(n).join(" "),
                        onClick: e.handleMoreLinkClick
                    }, o)
                }))), Or("div", {className: "fc-daygrid-day-bg"}, i.bgContent)))
            })
        }, t
    }(ao);

    function Ka(e) {
        return e.text
    }

    Xa.addPropsEquality({onMoreClick: !0});
    var Ja = bt({hour: "numeric", minute: "2-digit", omitZeroMinute: !0, meridiem: "narrow"});

    function $a(e) {
        var t = e.eventRange.ui.display;
        return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd
    }

    var Qa = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.options.eventTimeFormat || Ja,
                o = Dn(e.seg, n, t, !0, e.defaultDisplayEventEnd);
            return Or(ea, {
                seg: e.seg,
                timeText: o,
                defaultContent: es,
                isDragging: e.isDragging,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: e.isSelected,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday
            }, function (t, n, o, i) {
                return Or("a", r({
                    className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(n).join(" "),
                    ref: t
                }, (a = e.seg, (s = a.eventRange.def.url) ? {href: s} : {})), i);
                var a, s
            })
        }, t
    }(qr);

    function es(e) {
        return Or(Lr, null, Or("div", {
            className: "fc-daygrid-event-dot",
            style: {borderColor: e.borderColor || e.backgroundColor}
        }), e.timeText && Or("div", {className: "fc-event-time"}, e.timeText), Or("div", {className: "fc-event-title"}, e.event.title || Or(Lr, null, " ")))
    }

    var ts = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props;
            return Or(ta, r({}, e, {
                extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
                defaultTimeFormat: Ja,
                defaultDisplayEventEnd: e.defaultDisplayEventEnd,
                disableResizing: !e.seg.eventRange.def.allDay
            }))
        }, t
    }(qr);

    function ns(e, t, n, o, i, a, s, l) {
        for (var u = [], c = [], d = {}, p = {}, f = {}, h = {}, v = {}, g = 0; g < s; g += 1) u.push([]), c.push(0);
        for (var m = 0, y = t = gn(t, l); m < y.length; m++) {
            T(w = y[m], i[w.eventRange.instance.instanceId + ":" + w.firstCol] || 0)
        }
        !0 === n || !0 === o ? function (e, t, n, r) {
            os(e, t, n, !0, function (e) {
                return e.bottom <= r
            })
        }(c, d, u, a) : "number" == typeof n ? function (e, t, n, r) {
            os(e, t, n, !1, function (e, t) {
                return t < r
            })
        }(c, d, u, n) : "number" == typeof o && function (e, t, n, r) {
            os(e, t, n, !0, function (e, t) {
                return t < r
            })
        }(c, d, u, o);
        for (var E = 0; E < s; E += 1) {
            for (var S = 0, D = 0, b = 0, C = u[E]; b < C.length; b++) {
                var w, R = C[b];
                d[(w = R.seg).eventRange.instance.instanceId] || (p[w.eventRange.instance.instanceId] = R.top, w.firstCol === w.lastCol && w.isStart && w.isEnd ? (f[w.eventRange.instance.instanceId] = R.top - S, D = 0, S = R.bottom) : D = R.bottom - S)
            }
            D && (c[E] ? h[E] = D : v[E] = D)
        }

        function T(e, t) {
            if (!k(e, t, 0)) for (var n = e.firstCol; n <= e.lastCol; n += 1) for (var r = 0, o = u[n]; r < o.length; r++) {
                if (k(e, t, o[r].bottom)) return
            }
        }

        function k(e, t, n) {
            if (function (e, t, n) {
                for (var r = e.firstCol; r <= e.lastCol; r += 1) for (var o = 0, i = u[r]; o < i.length; o++) {
                    var a = i[o];
                    if (n < a.bottom && n + t > a.top) return !1
                }
                return !0
            }(e, t, n)) {
                for (var r = e.firstCol; r <= e.lastCol; r += 1) {
                    for (var o = u[r], i = 0; i < o.length && n >= o[i].top;) i += 1;
                    o.splice(i, 0, {seg: e, top: n, bottom: n + t})
                }
                return !0
            }
            return !1
        }

        for (var M in i) i[M] || (d[M.split(":")[0]] = !0);
        return {
            segsByFirstCol: u.map(rs), segsByEachCol: u.map(function (t, n) {
                var o = function (e) {
                    for (var t = [], n = 0, r = e; n < r.length; n++) {
                        var o = r[n];
                        t.push(o.seg)
                    }
                    return t
                }(t);
                return o = function (e, t, n) {
                    for (var o = t, i = me(o, 1), a = {start: o, end: i}, s = [], l = 0, u = e; l < u.length; l++) {
                        var c = u[l], d = c.eventRange, p = d.range, f = on(p, a);
                        f && s.push(r(r({}, c), {
                            firstCol: n,
                            lastCol: n,
                            eventRange: {
                                def: d.def,
                                ui: r(r({}, d.ui), {durationEditable: !1}),
                                instance: d.instance,
                                range: f
                            },
                            isStart: c.isStart && f.start.valueOf() === p.start.valueOf(),
                            isEnd: c.isEnd && f.end.valueOf() === p.end.valueOf()
                        }))
                    }
                    return s
                }(o, e[n].date, n)
            }), segIsHidden: d, segTops: p, segMarginTops: f, moreCnts: c, moreTops: h, paddingBottoms: v
        }
    }

    function rs(e, t) {
        for (var n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            i.seg.firstCol === t && n.push(i.seg)
        }
        return n
    }

    function os(e, t, n, r, o) {
        for (var i = e.length, a = {}, s = [], l = 0; l < i; l += 1) s.push([]);
        for (l = 0; l < i; l += 1) for (var u = 0, c = 0, d = n[l]; c < d.length; c++) {
            var p = d[c];
            o(p, u) ? f(p) : h(p, u, r), p.top !== p.bottom && (u += 1)
        }

        function f(e) {
            var t = e.seg, n = t.eventRange.instance.instanceId;
            if (!a[n]) {
                a[n] = !0;
                for (var r = t.firstCol; r <= t.lastCol; r += 1) {
                    for (var o = s[r], i = 0; i < o.length && e.top >= o[i].top;) i += 1;
                    o.splice(i, 0, e)
                }
            }
        }

        function h(n, r, o) {
            var i = n.seg, a = i.eventRange.instance.instanceId;
            if (!t[a]) {
                t[a] = !0;
                for (var l = i.firstCol; l <= i.lastCol; l += 1) {
                    e[l] += 1;
                    var u = e[l];
                    if (o && 1 === u && r > 0) for (var c = r - 1; s[l].length > c;) h(s[l].pop(), s[l].length, !1)
                }
            }
        }
    }

    var is = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.cellElRefs = new Wi, t.frameElRefs = new Wi, t.fgElRefs = new Wi, t.segHarnessRefs = new Wi, t.rootElRef = Ur(), t.state = {
                framePositions: null,
                maxContentHeight: null,
                segHeights: {}
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props, n = this.state, o = this.context, i = t.cells.length,
                a = ja(t.businessHourSegs, i), s = ja(t.bgEventSegs, i), l = ja(this.getHighlightSegs(), i),
                u = ja(this.getMirrorSegs(), i),
                c = ns(t.cells, t.fgEventSegs, t.dayMaxEvents, t.dayMaxEventRows, n.segHeights, n.maxContentHeight, i, o.options.eventOrder),
                d = c.paddingBottoms, p = c.segsByFirstCol, f = c.segsByEachCol, h = c.segIsHidden, v = c.segTops,
                g = c.segMarginTops, m = c.moreCnts, y = c.moreTops,
                E = t.eventDrag && t.eventDrag.affectedInstances || t.eventResize && t.eventResize.affectedInstances || {};
            return Or("tr", {ref: this.rootElRef}, t.renderIntro && t.renderIntro(), t.cells.map(function (n, o) {
                var i = e.renderFgSegs(p[o], h, v, g, E, t.todayRange),
                    c = e.renderFgSegs(u[o], {}, v, {}, {}, t.todayRange, Boolean(t.eventDrag), Boolean(t.eventResize), !1);
                return Or(Xa, {
                    key: n.key,
                    elRef: e.cellElRefs.createRef(n.key),
                    innerElRef: e.frameElRefs.createRef(n.key),
                    dateProfile: t.dateProfile,
                    date: n.date,
                    showDayNumber: t.showDayNumbers,
                    showWeekNumber: t.showWeekNumbers && 0 === o,
                    forceDayTop: t.showWeekNumbers,
                    todayRange: t.todayRange,
                    extraHookProps: n.extraHookProps,
                    extraDataAttrs: n.extraDataAttrs,
                    extraClassNames: n.extraClassNames,
                    moreCnt: m[o],
                    buildMoreLinkText: t.buildMoreLinkText,
                    onMoreClick: function (e) {
                        t.onMoreClick(r(r({}, e), {fromCol: o}))
                    },
                    segIsHidden: h,
                    moreMarginTop: y[o],
                    segsByEachCol: f[o],
                    fgPaddingBottom: d[o],
                    fgContentElRef: e.fgElRefs.createRef(n.key),
                    fgContent: Or(Lr, null, Or(Lr, null, i), Or(Lr, null, c)),
                    bgContent: Or(Lr, null, e.renderFillSegs(l[o], "highlight"), e.renderFillSegs(a[o], "non-business"), e.renderFillSegs(s[o], "bg-event"))
                })
            }))
        }, t.prototype.componentDidMount = function () {
            this.updateSizing(!0)
        }, t.prototype.componentDidUpdate = function (e, t) {
            var n = this.props;
            this.updateSizing(!Ve(e, n))
        }, t.prototype.getHighlightSegs = function () {
            var e = this.props;
            return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs
        }, t.prototype.getMirrorSegs = function () {
            var e = this.props;
            return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : []
        }, t.prototype.renderFgSegs = function (e, t, n, o, i, a, s, l, u) {
            var c = this.context, d = this.props.eventSelection, p = this.state.framePositions,
                f = 1 === this.props.cells.length, h = [];
            if (p) for (var v = 0, g = e; v < g.length; v++) {
                var m = g[v], y = m.eventRange.instance.instanceId, E = s || l || u, S = i[y], D = t[y] || S,
                    b = t[y] || E || m.firstCol !== m.lastCol || !m.isStart || !m.isEnd, C = void 0, w = void 0,
                    R = void 0, T = void 0;
                b ? (w = n[y], c.isRtl ? (T = 0, R = p.lefts[m.lastCol] - p.lefts[m.firstCol]) : (R = 0, T = p.rights[m.firstCol] - p.rights[m.lastCol])) : C = o[y], h.push(Or("div", {
                    className: "fc-daygrid-event-harness" + (b ? " fc-daygrid-event-harness-abs" : ""),
                    key: y,
                    ref: E ? null : this.segHarnessRefs.createRef(y + ":" + m.firstCol),
                    style: {
                        visibility: D ? "hidden" : "",
                        marginTop: C || "",
                        top: w || "",
                        left: R || "",
                        right: T || ""
                    }
                }, $a(m) ? Or(Qa, r({
                    seg: m,
                    isDragging: s,
                    isSelected: y === d,
                    defaultDisplayEventEnd: f
                }, bn(m, a))) : Or(ts, r({
                    seg: m,
                    isDragging: s,
                    isResizing: l,
                    isDateSelecting: u,
                    isSelected: y === d,
                    defaultDisplayEventEnd: f
                }, bn(m, a)))))
            }
            return h
        }, t.prototype.renderFillSegs = function (e, t) {
            var n = this.context.isRtl, i = this.props.todayRange, a = this.state.framePositions, s = [];
            if (a) for (var l = 0, u = e; l < u.length; l++) {
                var c = u[l], d = n ? {right: 0, left: a.lefts[c.lastCol] - a.lefts[c.firstCol]} : {
                    left: 0,
                    right: a.rights[c.firstCol] - a.rights[c.lastCol]
                };
                s.push(Or("div", {
                    key: wn(c.eventRange),
                    className: "fc-daygrid-bg-harness",
                    style: d
                }, "bg-event" === t ? Or(ua, r({seg: c}, bn(c, i))) : la(t)))
            }
            return Or.apply(void 0, o([Lr, {}], s))
        }, t.prototype.updateSizing = function (e) {
            var t = this.props, n = this.frameElRefs;
            if (null !== t.clientWidth) {
                if (e) {
                    var r = t.cells.map(function (e) {
                        return n.currentMap[e.key]
                    });
                    if (r.length) {
                        var o = this.rootElRef.current;
                        this.setState({framePositions: new xr(o, r, !0, !1)})
                    }
                }
                var i = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
                this.setState({
                    segHeights: this.computeSegHeights(),
                    maxContentHeight: i ? this.computeMaxContentHeight() : null
                })
            }
        }, t.prototype.computeSegHeights = function () {
            return Ue(this.segHarnessRefs.currentMap, function (e) {
                return e.getBoundingClientRect().height
            })
        }, t.prototype.computeMaxContentHeight = function () {
            var e = this.props.cells[0].key, t = this.cellElRefs.currentMap[e], n = this.fgElRefs.currentMap[e];
            return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top
        }, t.prototype.getCellEls = function () {
            var e = this.cellElRefs.currentMap;
            return this.props.cells.map(function (t) {
                return e[t.key]
            })
        }, t
    }(ao);
    is.addPropsEquality({onMoreClick: !0}), is.addStateEquality({segHeights: Ve});
    var as = 10, ss = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.repositioner = new qo(t.updateSize.bind(t)), t.handleRootEl = function (e) {
                t.rootEl = e, t.props.elRef && Xr(t.props.elRef, e)
            }, t.handleDocumentMousedown = function (e) {
                var n = t.props.onClose;
                n && !t.rootEl.contains(e.target) && n()
            }, t.handleDocumentScroll = function () {
                t.repositioner.request(as)
            }, t.handleCloseClick = function () {
                var e = t.props.onClose;
                e && e()
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.context.theme, t = this.props,
                n = ["fc-popover", e.getClass("popover")].concat(t.extraClassNames || []);
            return Or("div", r({className: n.join(" ")}, t.extraAttrs, {ref: this.handleRootEl}), Or("div", {className: "fc-popover-header " + e.getClass("popoverHeader")}, Or("span", {className: "fc-popover-title"}, t.title), Or("span", {
                className: "fc-popover-close " + e.getIconClass("close"),
                onClick: this.handleCloseClick
            })), Or("div", {className: "fc-popover-body " + e.getClass("popoverContent")}, t.children))
        }, t.prototype.componentDidMount = function () {
            document.addEventListener("mousedown", this.handleDocumentMousedown), document.addEventListener("scroll", this.handleDocumentScroll), this.updateSize()
        }, t.prototype.componentWillUnmount = function () {
            document.removeEventListener("mousedown", this.handleDocumentMousedown), document.removeEventListener("scroll", this.handleDocumentScroll)
        }, t.prototype.updateSize = function () {
            var e = this.props, t = e.alignmentEl, n = e.topAlignmentEl, r = this.rootEl;
            if (r) {
                var o, i = r.getBoundingClientRect(), a = t.getBoundingClientRect(),
                    s = n ? n.getBoundingClientRect().top : a.top;
                s = Math.min(s, window.innerHeight - i.height - 10), s = Math.max(s, 10), o = this.context.isRtl ? a.right - i.width : a.left, o = Math.min(o, window.innerWidth - i.width - 10), q(r, {
                    top: s,
                    left: o = Math.max(o, 10)
                })
            }
        }, t
    }(qr), ls = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = Ur(), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.context, t = e.options, n = e.dateEnv, o = this.props, i = o.date, a = o.hiddenInstances,
                s = o.todayRange, l = o.dateProfile, u = o.selectedInstanceId, c = n.format(i, t.dayPopoverFormat);
            return Or(sa, {date: i, dateProfile: l, todayRange: s, elRef: this.rootElRef}, function (e, t, n) {
                return Or(ss, {
                    elRef: e,
                    title: c,
                    extraClassNames: ["fc-more-popover"].concat(t),
                    extraAttrs: n,
                    onClose: o.onCloseClick,
                    alignmentEl: o.alignmentEl,
                    topAlignmentEl: o.topAlignmentEl
                }, Or(ia, {date: i, dateProfile: l, todayRange: s}, function (e, t) {
                    return t && Or("div", {className: "fc-more-popover-misc", ref: e}, t)
                }), o.segs.map(function (e) {
                    var t = e.eventRange.instance.instanceId;
                    return Or("div", {
                        className: "fc-daygrid-event-harness",
                        key: t,
                        style: {visibility: a[t] ? "hidden" : ""}
                    }, $a(e) ? Or(Qa, r({
                        seg: e,
                        isDragging: !1,
                        isSelected: t === u,
                        defaultDisplayEventEnd: !1
                    }, bn(e, s))) : Or(ts, r({
                        seg: e,
                        isDragging: !1,
                        isResizing: !1,
                        isDateSelecting: !1,
                        isSelected: t === u,
                        defaultDisplayEventEnd: !1
                    }, bn(e, s))))
                }))
            })
        }, t.prototype.positionToHit = function (e, t, n) {
            var r = this.rootElRef.current;
            if (!n || !r) return null;
            var o = n.getBoundingClientRect(), i = r.getBoundingClientRect(), a = i.left - o.left, s = i.top - o.top,
                l = e - a, u = t - s, c = this.props.date;
            return l >= 0 && l < i.width && u >= 0 && u < i.height ? {
                dateSpan: {
                    allDay: !0,
                    range: {start: c, end: me(c, 1)}
                }, dayEl: r, relativeRect: {left: a, top: s, right: i.width, bottom: i.height}, layer: 1
            } : null
        }, t
    }(ao), us = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.splitBusinessHourSegs = st(Ba), t.splitBgEventSegs = st(Ba), t.splitFgEventSegs = st(Ba), t.splitDateSelectionSegs = st(Ba), t.splitEventDrag = st(Ga), t.splitEventResize = st(Ga), t.buildBuildMoreLinkText = st(cs), t.morePopoverRef = Ur(), t.rowRefs = new Wi, t.state = {morePopoverState: null}, t.handleRootEl = function (e) {
                t.rootEl = e, Xr(t.props.elRef, e)
            }, t.handleMoreLinkClick = function (e) {
                var n = t.context, o = n.dateEnv, i = n.options.moreLinkClick;

                function a(e) {
                    var t = e.eventRange, r = t.def, i = t.instance, a = t.range;
                    return {
                        event: new zn(n, r, i),
                        start: o.toDate(a.start),
                        end: o.toDate(a.end),
                        isStart: e.isStart,
                        isEnd: e.isEnd
                    }
                }

                "function" == typeof i && (i = i({
                    date: o.toDate(e.date),
                    allDay: !0,
                    allSegs: e.allSegs.map(a),
                    hiddenSegs: e.hiddenSegs.map(a),
                    jsEvent: e.ev,
                    view: n.viewApi
                })), i && "popover" !== i ? "string" == typeof i && n.calendarApi.zoomTo(e.date, i) : t.setState({
                    morePopoverState: r(r({}, e), {
                        currentFgEventSegs: t.props.fgEventSegs,
                        fromRow: e.fromRow,
                        fromCol: e.fromCol
                    })
                })
            }, t.handleMorePopoverClose = function () {
                t.setState({morePopoverState: null})
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props, n = t.dateProfile, o = t.dayMaxEventRows, i = t.dayMaxEvents,
                a = t.expandRows, s = this.state.morePopoverState, l = t.cells.length,
                u = this.splitBusinessHourSegs(t.businessHourSegs, l), c = this.splitBgEventSegs(t.bgEventSegs, l),
                d = this.splitFgEventSegs(t.fgEventSegs, l), p = this.splitDateSelectionSegs(t.dateSelectionSegs, l),
                f = this.splitEventDrag(t.eventDrag, l), h = this.splitEventResize(t.eventResize, l),
                v = this.buildBuildMoreLinkText(this.context.options.moreLinkText), g = !0 === i || !0 === o;
            return g && !a && (g = !1, o = null, i = null), Or("div", {
                className: ["fc-daygrid-body", g ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", a ? "" : "fc-daygrid-body-natural"].join(" "),
                ref: this.handleRootEl,
                style: {width: t.clientWidth, minWidth: t.tableMinWidth}
            }, Or(xi, {unit: "day"}, function (g, m) {
                return Or(Lr, null, Or("table", {
                    className: "fc-scrollgrid-sync-table",
                    style: {width: t.clientWidth, minWidth: t.tableMinWidth, height: a ? t.clientHeight : ""}
                }, t.colGroupNode, Or("tbody", null, t.cells.map(function (a, s) {
                    return Or(is, {
                        ref: e.rowRefs.createRef(s),
                        key: a.length ? a[0].date.toISOString() : s,
                        showDayNumbers: l > 1,
                        showWeekNumbers: t.showWeekNumbers,
                        todayRange: m,
                        dateProfile: n,
                        cells: a,
                        renderIntro: t.renderRowIntro,
                        businessHourSegs: u[s],
                        eventSelection: t.eventSelection,
                        bgEventSegs: c[s].filter(ds),
                        fgEventSegs: d[s],
                        dateSelectionSegs: p[s],
                        eventDrag: f[s],
                        eventResize: h[s],
                        dayMaxEvents: i,
                        dayMaxEventRows: o,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        buildMoreLinkText: v,
                        onMoreClick: function (t) {
                            e.handleMoreLinkClick(r(r({}, t), {fromRow: s}))
                        }
                    })
                }))), !t.forPrint && s && s.currentFgEventSegs === t.fgEventSegs && Or(ls, {
                    ref: e.morePopoverRef,
                    date: s.date,
                    dateProfile: n,
                    segs: s.allSegs,
                    alignmentEl: s.dayEl,
                    topAlignmentEl: 1 === l ? t.headerAlignElRef.current : null,
                    onCloseClick: e.handleMorePopoverClose,
                    selectedInstanceId: t.eventSelection,
                    hiddenInstances: (t.eventDrag ? t.eventDrag.affectedInstances : null) || (t.eventResize ? t.eventResize.affectedInstances : null) || {},
                    todayRange: m
                }))
            }))
        }, t.prototype.prepareHits = function () {
            this.rowPositions = new xr(this.rootEl, this.rowRefs.collect().map(function (e) {
                return e.getCellEls()[0]
            }), !1, !0), this.colPositions = new xr(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1)
        }, t.prototype.positionToHit = function (e, t) {
            var n = this.morePopoverRef.current, o = n ? n.positionToHit(e, t, this.rootEl) : null,
                i = this.state.morePopoverState;
            if (o) return r({row: i.fromRow, col: i.fromCol}, o);
            var a = this.colPositions, s = this.rowPositions, l = a.leftToIndex(e), u = s.topToIndex(t);
            return null != u && null != l ? {
                row: u,
                col: l,
                dateSpan: {range: this.getCellRange(u, l), allDay: !0},
                dayEl: this.getCellEl(u, l),
                relativeRect: {left: a.lefts[l], right: a.rights[l], top: s.tops[u], bottom: s.bottoms[u]}
            } : null
        }, t.prototype.getCellEl = function (e, t) {
            return this.rowRefs.currentMap[e].getCellEls()[t]
        }, t.prototype.getCellRange = function (e, t) {
            var n = this.props.cells[e][t].date;
            return {start: n, end: me(n, 1)}
        }, t
    }(ao);

    function cs(e) {
        return "function" == typeof e ? e : function (t) {
            return "+" + t + " " + e
        }
    }

    function ds(e) {
        return e.eventRange.def.allDay
    }

    var ps = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.forceDayIfListItem = !0, t
        }

        return n(t, e), t.prototype.sliceRange = function (e, t) {
            return t.sliceRange(e)
        }, t
    }(Oi), fs = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.slicer = new ps, t.tableRef = Ur(), t.handleRootEl = function (e) {
                e ? t.context.registerInteractiveComponent(t, {el: e}) : t.context.unregisterInteractiveComponent(t)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context;
            return Or(us, r({
                ref: this.tableRef,
                elRef: this.handleRootEl
            }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
                dateProfile: e.dateProfile,
                cells: e.dayTableModel.cells,
                colGroupNode: e.colGroupNode,
                tableMinWidth: e.tableMinWidth,
                renderRowIntro: e.renderRowIntro,
                dayMaxEvents: e.dayMaxEvents,
                dayMaxEventRows: e.dayMaxEventRows,
                showWeekNumbers: e.showWeekNumbers,
                expandRows: e.expandRows,
                headerAlignElRef: e.headerAlignElRef,
                clientWidth: e.clientWidth,
                clientHeight: e.clientHeight,
                forPrint: e.forPrint
            }))
        }, t.prototype.prepareHits = function () {
            this.tableRef.current.prepareHits()
        }, t.prototype.queryHit = function (e, t) {
            var n = this.tableRef.current.positionToHit(e, t);
            return n ? {
                component: this,
                dateSpan: n.dateSpan,
                dayEl: n.dayEl,
                rect: {
                    left: n.relativeRect.left,
                    right: n.relativeRect.right,
                    top: n.relativeRect.top,
                    bottom: n.relativeRect.bottom
                },
                layer: 0
            } : null
        }, t
    }(ao), hs = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildDayTableModel = st(vs), t.headerRef = Ur(), t.tableRef = Ur(), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.context, n = t.options, r = t.dateProfileGenerator, o = this.props,
                i = this.buildDayTableModel(o.dateProfile, r), a = n.dayHeaders && Or(Ii, {
                    ref: this.headerRef,
                    dateProfile: o.dateProfile,
                    dates: i.headerDates,
                    datesRepDistinctDays: 1 === i.rowCnt
                }), s = function (t) {
                    return Or(fs, {
                        ref: e.tableRef,
                        dateProfile: o.dateProfile,
                        dayTableModel: i,
                        businessHours: o.businessHours,
                        dateSelection: o.dateSelection,
                        eventStore: o.eventStore,
                        eventUiBases: o.eventUiBases,
                        eventSelection: o.eventSelection,
                        eventDrag: o.eventDrag,
                        eventResize: o.eventResize,
                        nextDayThreshold: n.nextDayThreshold,
                        colGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        dayMaxEvents: n.dayMaxEvents,
                        dayMaxEventRows: n.dayMaxEventRows,
                        showWeekNumbers: n.weekNumbers,
                        expandRows: !o.isHeightAuto,
                        headerAlignElRef: e.headerElRef,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: o.forPrint
                    })
                };
            return n.dayMinWidth ? this.renderHScrollLayout(a, s, i.colCnt, n.dayMinWidth) : this.renderSimpleLayout(a, s)
        }, t
    }(za);

    function vs(e, t) {
        var n = new Ni(e.renderRange, t);
        return new Hi(n, /year|month|week/.test(e.currentRangeUnit))
    }

    var gs = so({
        initialView: "dayGridMonth",
        optionRefiners: {
            moreLinkClick: Pt,
            moreLinkClassNames: Pt,
            moreLinkContent: Pt,
            moreLinkDidMount: Pt,
            moreLinkWillUnmount: Pt
        },
        views: {
            dayGrid: {
                component: hs, dateProfileGeneratorClass: function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }

                    return n(t, e), t.prototype.buildRenderRange = function (t, n, r) {
                        var o, i = this.props.dateEnv, a = e.prototype.buildRenderRange.call(this, t, n, r),
                            s = a.start, l = a.end;
                        (/^(year|month)$/.test(n) && (s = i.startOfWeek(s), (o = i.startOfWeek(l)).valueOf() !== l.valueOf() && (l = ge(o, 1))), this.props.monthMode && this.props.fixedWeekCount) && (l = ge(l, 6 - Math.ceil(Ee(s, l))));
                        return {start: s, end: l}
                    }, t
                }(wo)
            },
            dayGridDay: {type: "dayGrid", duration: {days: 1}},
            dayGridWeek: {type: "dayGrid", duration: {weeks: 1}},
            dayGridMonth: {type: "dayGrid", duration: {months: 1}, monthMode: !0, fixedWeekCount: !0}
        }
    }), ms = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.getKeyInfo = function () {
            return {allDay: {}, timed: {}}
        }, t.prototype.getKeysForDateSpan = function (e) {
            return e.allDay ? ["allDay"] : ["timed"]
        }, t.prototype.getKeysForEventDef = function (e) {
            return e.allDay ? dn(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"]
        }, t
    }(fr), ys = bt({hour: "numeric", minute: "2-digit", omitZeroMinute: !0, meridiem: "short"});

    function Es(e) {
        var t = ["fc-timegrid-slot", "fc-timegrid-slot-label", e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
        return Or(Br.Consumer, null, function (n) {
            if (!e.isLabeled) return Or("td", {className: t.join(" "), "data-time": e.isoTimeStr});
            var r = n.dateEnv, o = n.options, i = n.viewApi,
                a = null == o.slotLabelFormat ? ys : Array.isArray(o.slotLabelFormat) ? bt(o.slotLabelFormat[0]) : bt(o.slotLabelFormat),
                s = {level: 0, time: e.time, date: r.toDate(e.date), view: i, text: r.format(e.date, a)};
            return Or(co, {
                hookProps: s,
                classNames: o.slotLabelClassNames,
                content: o.slotLabelContent,
                defaultContent: Ss,
                didMount: o.slotLabelDidMount,
                willUnmount: o.slotLabelWillUnmount
            }, function (n, r, o, i) {
                return Or("td", {
                    ref: n,
                    className: t.concat(r).join(" "),
                    "data-time": e.isoTimeStr
                }, Or("div", {className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"}, Or("div", {
                    className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
                    ref: o
                }, i)))
            })
        })
    }

    function Ss(e) {
        return e.text
    }

    var Ds = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            return this.props.slatMetas.map(function (e) {
                return Or("tr", {key: e.key}, Or(Es, r({}, e)))
            })
        }, t
    }(qr), bs = bt({week: "short"}), Cs = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.allDaySplitter = new ms, t.headerElRef = Ur(), t.rootElRef = Ur(), t.scrollerElRef = Ur(), t.state = {slatCoords: null}, t.handleScrollTopRequest = function (e) {
                var n = t.scrollerElRef.current;
                n && (n.scrollTop = e)
            }, t.renderHeadAxis = function (e, n) {
                void 0 === n && (n = "");
                var o = t.context.options, i = t.props.dateProfile.renderRange, a = Se(i.start, i.end),
                    s = o.navLinks && 1 === a ? {"data-navlink": mr(i.start, "week"), tabIndex: 0} : {};
                return o.weekNumbers && "day" === e ? Or(da, {date: i.start, defaultFormat: bs}, function (e, t, o, i) {
                    return Or("th", {
                        ref: e,
                        className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(t).join(" ")
                    }, Or("div", {
                        className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",
                        style: {height: n}
                    }, Or("a", r({
                        ref: o,
                        className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"
                    }, s), i)))
                }) : Or("th", {className: "fc-timegrid-axis"}, Or("div", {
                    className: "fc-timegrid-axis-frame",
                    style: {height: n}
                }))
            }, t.renderTableRowAxis = function (e) {
                var n = t.context, r = n.options, o = n.viewApi, i = {text: r.allDayText, view: o};
                return Or(co, {
                    hookProps: i,
                    classNames: r.allDayClassNames,
                    content: r.allDayContent,
                    defaultContent: ws,
                    didMount: r.allDayDidMount,
                    willUnmount: r.allDayWillUnmount
                }, function (t, n, r, o) {
                    return Or("td", {
                        ref: t,
                        className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(n).join(" ")
                    }, Or("div", {
                        className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" + (null == e ? " fc-timegrid-axis-frame-liquid" : ""),
                        style: {height: e}
                    }, Or("span", {
                        className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                        ref: r
                    }, o)))
                })
            }, t.handleSlatCoords = function (e) {
                t.setState({slatCoords: e})
            }, t
        }

        return n(t, e), t.prototype.renderSimpleLayout = function (e, t, n) {
            var r = this.context, o = this.props, i = [], a = Ji(r.options);
            return e && i.push({
                type: "header",
                key: "header",
                isSticky: a,
                chunk: {elRef: this.headerElRef, tableClassName: "fc-col-header", rowContent: e}
            }), t && (i.push({type: "body", key: "all-day", chunk: {content: t}}), i.push({
                type: "body",
                key: "all-day-divider",
                outerContent: Or("tr", {className: "fc-scrollgrid-section"}, Or("td", {className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded")}))
            })), i.push({
                type: "body",
                key: "body",
                liquid: !0,
                expandRows: Boolean(r.options.expandRows),
                chunk: {scrollerElRef: this.scrollerElRef, content: n}
            }), Or(Eo, {viewSpec: r.viewSpec, elRef: this.rootElRef}, function (e, t) {
                return Or("div", {
                    className: ["fc-timegrid"].concat(t).join(" "),
                    ref: e
                }, Or(Qi, {liquid: !o.isHeightAuto && !o.forPrint, cols: [{width: "shrink"}], sections: i}))
            })
        }, t.prototype.renderHScrollLayout = function (e, t, n, r, o, i, a) {
            var s = this, l = this.context.pluginHooks.scrollGridImpl;
            if (!l) throw new Error("No ScrollGrid implementation");
            var u = this.context, c = this.props, d = !c.forPrint && Ji(u.options), p = !c.forPrint && $i(u.options),
                f = [];
            e && f.push({
                type: "header",
                key: "header",
                isSticky: d,
                syncRowHeights: !0,
                chunks: [{
                    key: "axis", rowContent: function (e) {
                        return Or("tr", null, s.renderHeadAxis("day", e.rowSyncHeights[0]))
                    }
                }, {key: "cols", elRef: this.headerElRef, tableClassName: "fc-col-header", rowContent: e}]
            }), t && (f.push({
                type: "body",
                key: "all-day",
                syncRowHeights: !0,
                chunks: [{
                    key: "axis", rowContent: function (e) {
                        return Or("tr", null, s.renderTableRowAxis(e.rowSyncHeights[0]))
                    }
                }, {key: "cols", content: t}]
            }), f.push({
                key: "all-day-divider",
                type: "body",
                outerContent: Or("tr", {className: "fc-scrollgrid-section"}, Or("td", {
                    colSpan: 2,
                    className: "fc-timegrid-divider " + u.theme.getClass("tableCellShaded")
                }))
            }));
            var h = u.options.nowIndicator;
            return f.push({
                type: "body",
                key: "body",
                liquid: !0,
                expandRows: Boolean(u.options.expandRows),
                chunks: [{
                    key: "axis", content: function (e) {
                        return Or("div", {className: "fc-timegrid-axis-chunk"}, Or("table", {style: {height: e.expandRows ? e.clientHeight : ""}}, e.tableColGroupNode, Or("tbody", null, Or(Ds, {slatMetas: i}))), Or("div", {className: "fc-timegrid-now-indicator-container"}, Or(xi, {unit: h ? "minute" : "day"}, function (e) {
                            var t = h && a && a.safeComputeTop(e);
                            return "number" == typeof t ? Or(ra, {isAxis: !0, date: e}, function (e, n, r, o) {
                                return Or("div", {
                                    ref: e,
                                    className: ["fc-timegrid-now-indicator-arrow"].concat(n).join(" "),
                                    style: {top: t}
                                }, o)
                            }) : null
                        })))
                    }
                }, {key: "cols", scrollerElRef: this.scrollerElRef, content: n}]
            }), p && f.push({
                key: "footer",
                type: "footer",
                isSticky: !0,
                chunks: [{key: "axis", content: Ki}, {key: "cols", content: Ki}]
            }), Or(Eo, {viewSpec: u.viewSpec, elRef: this.rootElRef}, function (e, t) {
                return Or("div", {
                    className: ["fc-timegrid"].concat(t).join(" "),
                    ref: e
                }, Or(l, {
                    liquid: !c.isHeightAuto && !c.forPrint,
                    colGroups: [{width: "shrink", cols: [{width: "shrink"}]}, {cols: [{span: r, minWidth: o}]}],
                    sections: f
                }))
            })
        }, t.prototype.getAllDayMaxEventProps = function () {
            var e = this.context.options, t = e.dayMaxEvents, n = e.dayMaxEventRows;
            return !0 !== t && !0 !== n || (t = void 0, n = 5), {dayMaxEvents: t, dayMaxEventRows: n}
        }, t
    }(ao);

    function ws(e) {
        return e.text
    }

    var Rs = function () {
        function e(e, t, n) {
            this.positions = e, this.dateProfile = t, this.slotDuration = n
        }

        return e.prototype.safeComputeTop = function (e) {
            var t = this.dateProfile;
            if (un(t.currentRange, e)) {
                var n = we(e), r = e.valueOf() - n.valueOf();
                if (r >= et(t.slotMinTime) && r < et(t.slotMaxTime)) return this.computeTimeTop(Xe(r))
            }
            return null
        }, e.prototype.computeDateTop = function (e, t) {
            return t || (t = we(e)), this.computeTimeTop(Xe(e.valueOf() - t.valueOf()))
        }, e.prototype.computeTimeTop = function (e) {
            var t, n, r = this.positions, o = this.dateProfile, i = r.els.length,
                a = (e.milliseconds - et(o.slotMinTime)) / et(this.slotDuration);
            return a = Math.max(0, a), a = Math.min(i, a), t = Math.floor(a), n = a - (t = Math.min(t, i - 1)), r.tops[t] + r.getHeight(t) * n
        }, e
    }(), Ts = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.options, o = e.slatElRefs;
            return Or("tbody", null, e.slatMetas.map(function (i, a) {
                var s = {time: i.time, date: t.dateEnv.toDate(i.date), view: t.viewApi},
                    l = ["fc-timegrid-slot", "fc-timegrid-slot-lane", i.isLabeled ? "" : "fc-timegrid-slot-minor"];
                return Or("tr", {key: i.key, ref: o.createRef(i.key)}, e.axis && Or(Es, r({}, i)), Or(co, {
                    hookProps: s,
                    classNames: n.slotLaneClassNames,
                    content: n.slotLaneContent,
                    didMount: n.slotLaneDidMount,
                    willUnmount: n.slotLaneWillUnmount
                }, function (e, t, n, r) {
                    return Or("td", {ref: e, className: l.concat(t).join(" "), "data-time": i.isoTimeStr}, r)
                }))
            }))
        }, t
    }(qr), ks = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = Ur(), t.slatElRefs = new Wi, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context;
            return Or("div", {
                className: "fc-timegrid-slots",
                ref: this.rootElRef
            }, Or("table", {
                className: t.theme.getClass("table"),
                style: {minWidth: e.tableMinWidth, width: e.clientWidth, height: e.minHeight}
            }, e.tableColGroupNode, Or(Ts, {slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas})))
        }, t.prototype.componentDidMount = function () {
            this.updateSizing()
        }, t.prototype.componentDidUpdate = function () {
            this.updateSizing()
        }, t.prototype.componentWillUnmount = function () {
            this.props.onCoords && this.props.onCoords(null)
        }, t.prototype.updateSizing = function () {
            var e, t = this.context, n = this.props;
            n.onCoords && null !== n.clientWidth && (this.rootElRef.current.offsetHeight && n.onCoords(new Rs(new xr(this.rootElRef.current, (e = this.slatElRefs.currentMap, n.slatMetas.map(function (t) {
                return e[t.key]
            })), !1, !0), this.props.dateProfile, t.options.slotDuration)))
        }, t
    }(qr);

    function Ms(e, t) {
        var n, r = [];
        for (n = 0; n < t; n += 1) r.push([]);
        if (e) for (n = 0; n < e.length; n += 1) r[e[n].col].push(e[n]);
        return r
    }

    function xs(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) n[a] = {affectedInstances: e.affectedInstances, isEvent: e.isEvent, segs: []};
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.col].segs.push(i)
            }
        } else for (var a = 0; a < t; a += 1) n[a] = null;
        return n
    }

    function _s(e, t, n, r, o) {
        return Is(e, t, n, r), function (e, t) {
            for (var n = 0, r = e; n < r.length; n++) {
                var o = r[n];
                o.level = null, o.forwardCoord = null, o.backwardCoord = null, o.forwardPressure = null
            }
            var i, a = function (e) {
                var t, n, r, o = [];
                for (t = 0; t < e.length; t += 1) {
                    for (n = e[t], r = 0; r < o.length && Ps(n, o[r]).length; r += 1) ;
                    n.level = r, (o[r] || (o[r] = [])).push(n)
                }
                return o
            }(e = gn(e, t));
            if (function (e) {
                var t, n, r, o, i;
                for (t = 0; t < e.length; t += 1) for (n = e[t], r = 0; r < n.length; r += 1) for ((o = n[r]).forwardSegs = [], i = t + 1; i < e.length; i += 1) Ps(o, e[i], o.forwardSegs)
            }(a), i = a[0]) {
                for (var s = 0, l = i; s < l.length; s++) {
                    var o = l[s];
                    Ns(o)
                }
                for (var u = 0, c = i; u < c.length; u++) {
                    var o = c[u];
                    Hs(o, 0, 0, t)
                }
            }
            return e
        }(e, o)
    }

    function Is(e, t, n, r) {
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            a.top = n.computeDateTop(a.start, t), a.bottom = Math.max(a.top + (r || 0), n.computeDateTop(a.end, t))
        }
    }

    function Ps(e, t, n) {
        void 0 === n && (n = []);
        for (var r = 0; r < t.length; r += 1) o = e, i = t[r], o.bottom > i.top && o.top < i.bottom && n.push(t[r]);
        var o, i;
        return n
    }

    function Ns(e) {
        var t, n, r = e.forwardSegs, o = 0;
        if (null == e.forwardPressure) {
            for (t = 0; t < r.length; t += 1) Ns(n = r[t]), o = Math.max(o, 1 + n.forwardPressure);
            e.forwardPressure = o
        }
    }

    function Hs(e, t, n, r) {
        var o, i = e.forwardSegs;
        if (null == e.forwardCoord) for (i.length ? (!function (e, t) {
            var n = e.map(Os),
                r = [{field: "forwardPressure", order: -1}, {field: "backwardCoord", order: 1}].concat(t);
            n.sort(function (e, t) {
                return le(e, t, r)
            }), n.map(function (e) {
                return e._seg
            })
        }(i, r), Hs(i[0], t + 1, n, r), e.forwardCoord = i[0].backwardCoord) : e.forwardCoord = 1, e.backwardCoord = e.forwardCoord - (e.forwardCoord - n) / (t + 1), o = 0; o < i.length; o += 1) Hs(i[o], 0, e.forwardCoord, r)
    }

    function Os(e) {
        var t = mn(e);
        return t.forwardPressure = e.forwardPressure, t.backwardCoord = e.backwardCoord, t
    }

    var As = bt({hour: "numeric", minute: "2-digit", meridiem: !1}), Us = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = ["fc-timegrid-event", "fc-v-event"];
            return this.props.isCondensed && e.push("fc-timegrid-event-condensed"), Or(ta, r({}, this.props, {
                defaultTimeFormat: As,
                extraClassNames: e
            }))
        }, t
    }(qr), Ls = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props;
            return Or(ia, {
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                extraHookProps: e.extraHookProps
            }, function (e, t) {
                return t && Or("div", {className: "fc-timegrid-col-misc", ref: e}, t)
            })
        }, t
    }(qr);
    pi.timeGridEventCondensedHeight = 30;
    var Ws = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props, n = this.context.options.selectMirror,
                o = t.eventDrag && t.eventDrag.segs || t.eventResize && t.eventResize.segs || n && t.dateSelectionSegs || [],
                i = t.eventDrag && t.eventDrag.affectedInstances || t.eventResize && t.eventResize.affectedInstances || {};
            return Or(sa, {
                elRef: t.elRef,
                date: t.date,
                dateProfile: t.dateProfile,
                todayRange: t.todayRange,
                extraHookProps: t.extraHookProps
            }, function (a, s, l) {
                return Or("td", r({
                    ref: a,
                    className: ["fc-timegrid-col"].concat(s, t.extraClassNames || []).join(" ")
                }, l, t.extraDataAttrs), Or("div", {className: "fc-timegrid-col-frame"}, Or("div", {className: "fc-timegrid-col-bg"}, e.renderFillSegs(t.businessHourSegs, "non-business"), e.renderFillSegs(t.bgEventSegs, "bg-event"), e.renderFillSegs(t.dateSelectionSegs, "highlight")), Or("div", {className: "fc-timegrid-col-events"}, e.renderFgSegs(t.fgEventSegs, i)), Or("div", {className: "fc-timegrid-col-events"}, e.renderFgSegs(o, {}, Boolean(t.eventDrag), Boolean(t.eventResize), Boolean(n))), Or("div", {className: "fc-timegrid-now-indicator-container"}, e.renderNowIndicator(t.nowIndicatorSegs)), Or(Ls, {
                    date: t.date,
                    dateProfile: t.dateProfile,
                    todayRange: t.todayRange,
                    extraHookProps: t.extraHookProps
                })))
            })
        }, t.prototype.renderFgSegs = function (e, t, n, r, o) {
            var i = this.props;
            return i.forPrint ? this.renderPrintFgSegs(e) : i.slatCoords ? this.renderPositionedFgSegs(e, t, n, r, o) : null
        }, t.prototype.renderPrintFgSegs = function (e) {
            var t = this.props;
            return (e = gn(e, this.context.options.eventOrder)).map(function (e) {
                return Or("div", {
                    className: "fc-timegrid-event-harness",
                    key: e.eventRange.instance.instanceId
                }, Or(Us, r({
                    seg: e,
                    isDragging: !1,
                    isResizing: !1,
                    isDateSelecting: !1,
                    isSelected: !1,
                    isCondensed: !1
                }, bn(e, t.todayRange, t.nowDate))))
            })
        }, t.prototype.renderPositionedFgSegs = function (e, t, n, o, i) {
            var a = this, s = this.context, l = this.props;
            return (e = _s(e, l.date, l.slatCoords, s.options.eventMinHeight, s.options.eventOrder)).map(function (e) {
                var s = e.eventRange.instance.instanceId, u = n || o || i ? r({
                    left: 0,
                    right: 0
                }, a.computeSegTopBottomCss(e)) : a.computeFgSegPositionCss(e);
                return Or("div", {
                    className: "fc-timegrid-event-harness" + (e.level > 0 ? " fc-timegrid-event-harness-inset" : ""),
                    key: s,
                    style: r({visibility: t[s] ? "hidden" : ""}, u)
                }, Or(Us, r({
                    seg: e,
                    isDragging: n,
                    isResizing: o,
                    isDateSelecting: i,
                    isSelected: s === l.eventSelection,
                    isCondensed: e.bottom - e.top < pi.timeGridEventCondensedHeight
                }, bn(e, l.todayRange, l.nowDate))))
            })
        }, t.prototype.renderFillSegs = function (e, t) {
            var n = this, o = this.context, i = this.props;
            if (!i.slatCoords) return null;
            Is(e, i.date, i.slatCoords, o.options.eventMinHeight);
            var a = e.map(function (e) {
                return Or("div", {
                    key: wn(e.eventRange),
                    className: "fc-timegrid-bg-harness",
                    style: n.computeSegTopBottomCss(e)
                }, "bg-event" === t ? Or(ua, r({seg: e}, bn(e, i.todayRange, i.nowDate))) : la(t))
            });
            return Or(Lr, null, a)
        }, t.prototype.renderNowIndicator = function (e) {
            var t = this.props, n = t.slatCoords, r = t.date;
            return n ? e.map(function (e, t) {
                return Or(ra, {isAxis: !1, date: r, key: t}, function (t, o, i, a) {
                    return Or("div", {
                        ref: t,
                        className: ["fc-timegrid-now-indicator-line"].concat(o).join(" "),
                        style: {top: n.computeDateTop(e.start, r)}
                    }, a)
                })
            }) : null
        }, t.prototype.computeFgSegPositionCss = function (e) {
            var t, n, o = this.context, i = o.isRtl, a = o.options.slotEventOverlap, s = e.backwardCoord,
                l = e.forwardCoord;
            a && (l = Math.min(1, s + 2 * (l - s))), i ? (t = 1 - l, n = s) : (t = s, n = 1 - l);
            var u = {zIndex: e.level + 1, left: 100 * t + "%", right: 100 * n + "%"};
            return a && e.forwardPressure && (u[i ? "marginLeft" : "marginRight"] = 20), r(r({}, u), this.computeSegTopBottomCss(e))
        }, t.prototype.computeSegTopBottomCss = function (e) {
            return {top: e.top, bottom: -e.bottom}
        }, t
    }(qr), Vs = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.splitFgEventSegs = st(Ms), t.splitBgEventSegs = st(Ms), t.splitBusinessHourSegs = st(Ms), t.splitNowIndicatorSegs = st(Ms), t.splitDateSelectionSegs = st(Ms), t.splitEventDrag = st(xs), t.splitEventResize = st(xs), t.rootElRef = Ur(), t.cellElRefs = new Wi, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props,
                n = this.context.options.nowIndicator && t.slatCoords && t.slatCoords.safeComputeTop(t.nowDate),
                r = t.cells.length, o = this.splitFgEventSegs(t.fgEventSegs, r),
                i = this.splitBgEventSegs(t.bgEventSegs, r), a = this.splitBusinessHourSegs(t.businessHourSegs, r),
                s = this.splitNowIndicatorSegs(t.nowIndicatorSegs, r),
                l = this.splitDateSelectionSegs(t.dateSelectionSegs, r), u = this.splitEventDrag(t.eventDrag, r),
                c = this.splitEventResize(t.eventResize, r);
            return Or("div", {
                className: "fc-timegrid-cols",
                ref: this.rootElRef
            }, Or("table", {
                style: {
                    minWidth: t.tableMinWidth,
                    width: t.clientWidth
                }
            }, t.tableColGroupNode, Or("tbody", null, Or("tr", null, t.axis && Or("td", {className: "fc-timegrid-col fc-timegrid-axis"}, Or("div", {className: "fc-timegrid-col-frame"}, Or("div", {className: "fc-timegrid-now-indicator-container"}, "number" == typeof n && Or(ra, {
                isAxis: !0,
                date: t.nowDate
            }, function (e, t, r, o) {
                return Or("div", {
                    ref: e,
                    className: ["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),
                    style: {top: n}
                }, o)
            })))), t.cells.map(function (n, r) {
                return Or(Ws, {
                    key: n.key,
                    elRef: e.cellElRefs.createRef(n.key),
                    dateProfile: t.dateProfile,
                    date: n.date,
                    nowDate: t.nowDate,
                    todayRange: t.todayRange,
                    extraHookProps: n.extraHookProps,
                    extraDataAttrs: n.extraDataAttrs,
                    extraClassNames: n.extraClassNames,
                    fgEventSegs: o[r],
                    bgEventSegs: i[r],
                    businessHourSegs: a[r],
                    nowIndicatorSegs: s[r],
                    dateSelectionSegs: l[r],
                    eventDrag: u[r],
                    eventResize: c[r],
                    slatCoords: t.slatCoords,
                    eventSelection: t.eventSelection,
                    forPrint: t.forPrint
                })
            })))))
        }, t.prototype.componentDidMount = function () {
            this.updateCoords()
        }, t.prototype.componentDidUpdate = function () {
            this.updateCoords()
        }, t.prototype.updateCoords = function () {
            var e, t = this.props;
            t.onColCoords && null !== t.clientWidth && t.onColCoords(new xr(this.rootElRef.current, (e = this.cellElRefs.currentMap, t.cells.map(function (t) {
                return e[t.key]
            })), !0, !1))
        }, t
    }(qr);
    var Fs = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.processSlotOptions = st(zs), t.state = {slatCoords: null}, t.handleScrollRequest = function (e) {
                var n = t.props.onScrollTopRequest, r = t.state.slatCoords;
                if (n && r) {
                    if (e.time) {
                        var o = r.computeTimeTop(e.time);
                        (o = Math.ceil(o)) && (o += 1), n(o)
                    }
                    return !0
                }
                return !1
            }, t.handleColCoords = function (e) {
                t.colCoords = e
            }, t.handleSlatCoords = function (e) {
                t.setState({slatCoords: e}), t.props.onSlatCoords && t.props.onSlatCoords(e)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.state;
            return Or("div", {
                className: "fc-timegrid-body",
                ref: e.rootElRef,
                style: {width: e.clientWidth, minWidth: e.tableMinWidth}
            }, Or(ks, {
                axis: e.axis,
                dateProfile: e.dateProfile,
                slatMetas: e.slatMetas,
                clientWidth: e.clientWidth,
                minHeight: e.expandRows ? e.clientHeight : "",
                tableMinWidth: e.tableMinWidth,
                tableColGroupNode: e.axis ? e.tableColGroupNode : null,
                onCoords: this.handleSlatCoords
            }), Or(Vs, {
                cells: e.cells,
                axis: e.axis,
                dateProfile: e.dateProfile,
                businessHourSegs: e.businessHourSegs,
                bgEventSegs: e.bgEventSegs,
                fgEventSegs: e.fgEventSegs,
                dateSelectionSegs: e.dateSelectionSegs,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                todayRange: e.todayRange,
                nowDate: e.nowDate,
                nowIndicatorSegs: e.nowIndicatorSegs,
                clientWidth: e.clientWidth,
                tableMinWidth: e.tableMinWidth,
                tableColGroupNode: e.tableColGroupNode,
                slatCoords: t.slatCoords,
                onColCoords: this.handleColCoords,
                forPrint: e.forPrint
            }))
        }, t.prototype.componentDidMount = function () {
            this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
        }, t.prototype.componentDidUpdate = function (e) {
            this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
        }, t.prototype.componentWillUnmount = function () {
            this.scrollResponder.detach()
        }, t.prototype.positionToHit = function (e, t) {
            var n = this.context, r = n.dateEnv, o = n.options, i = this.colCoords, a = this.props.dateProfile,
                s = this.state.slatCoords, l = this.processSlotOptions(this.props.slotDuration, o.snapDuration),
                u = l.snapDuration, c = l.snapsPerSlot, d = i.leftToIndex(e), p = s.positions.topToIndex(t);
            if (null != d && null != p) {
                var f = s.positions.tops[p], h = s.positions.getHeight(p), v = (t - f) / h,
                    g = p * c + Math.floor(v * c), m = this.props.cells[d].date, y = Je(a.slotMinTime, $e(u, g)),
                    E = r.add(m, y);
                return {
                    col: d,
                    dateSpan: {range: {start: E, end: r.add(E, u)}, allDay: !1},
                    dayEl: i.els[d],
                    relativeRect: {left: i.lefts[d], right: i.rights[d], top: f, bottom: f + h}
                }
            }
            return null
        }, t
    }(qr);

    function zs(e, t) {
        var n = t || e, r = tt(e, n);
        return null === r && (n = e, r = 1), {snapDuration: n, snapsPerSlot: r}
    }

    var Bs = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.sliceRange = function (e, t) {
            for (var n = [], r = 0; r < t.length; r += 1) {
                var o = on(e, t[r]);
                o && n.push({
                    start: o.start,
                    end: o.end,
                    isStart: o.start.valueOf() === e.start.valueOf(),
                    isEnd: o.end.valueOf() === e.end.valueOf(),
                    col: r
                })
            }
            return n
        }, t
    }(Oi), js = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildDayRanges = st(Gs), t.slicer = new Bs, t.timeColsRef = Ur(), t.handleRootEl = function (e) {
                e ? t.context.registerInteractiveComponent(t, {el: e}) : t.context.unregisterInteractiveComponent(t)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props, n = this.context, o = t.dateProfile, i = t.dayTableModel,
                a = n.options.nowIndicator, s = this.buildDayRanges(i, o, n.dateEnv);
            return Or(xi, {unit: a ? "minute" : "day"}, function (l, u) {
                return Or(Fs, r({
                    ref: e.timeColsRef,
                    rootElRef: e.handleRootEl
                }, e.slicer.sliceProps(t, o, null, n, s), {
                    forPrint: t.forPrint,
                    axis: t.axis,
                    dateProfile: o,
                    slatMetas: t.slatMetas,
                    slotDuration: t.slotDuration,
                    cells: i.cells[0],
                    tableColGroupNode: t.tableColGroupNode,
                    tableMinWidth: t.tableMinWidth,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    expandRows: t.expandRows,
                    nowDate: l,
                    nowIndicatorSegs: a && e.slicer.sliceNowDate(l, n, s),
                    todayRange: u,
                    onScrollTopRequest: t.onScrollTopRequest,
                    onSlatCoords: t.onSlatCoords
                }))
            })
        }, t.prototype.queryHit = function (e, t) {
            var n = this.timeColsRef.current.positionToHit(e, t);
            return n ? {
                component: this,
                dateSpan: n.dateSpan,
                dayEl: n.dayEl,
                rect: {
                    left: n.relativeRect.left,
                    right: n.relativeRect.right,
                    top: n.relativeRect.top,
                    bottom: n.relativeRect.bottom
                },
                layer: 0
            } : null
        }, t
    }(ao);

    function Gs(e, t, n) {
        for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
            var a = i[o];
            r.push({start: n.add(a, t.slotMinTime), end: n.add(a, t.slotMaxTime)})
        }
        return r
    }

    var qs = [{hours: 1}, {minutes: 30}, {minutes: 15}, {seconds: 30}, {seconds: 15}];

    function Ys(e, t, n, r, o) {
        for (var i = new Date(0), a = e, s = Xe(0), l = n || function (e) {
            var t, n, r;
            for (t = qs.length - 1; t >= 0; t -= 1) if (n = Xe(qs[t]), null !== (r = tt(n, e)) && r > 1) return n;
            return e
        }(r), u = []; et(a) < et(t);) {
            var c = o.add(i, a), d = null !== tt(s, l);
            u.push({
                date: c,
                time: a,
                key: c.toISOString(),
                isoTimeStr: ot(c),
                isLabeled: d
            }), a = Je(a, r), s = Je(s, r)
        }
        return u
    }

    var Zs = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildTimeColsModel = st(Xs), t.buildSlatMetas = st(Ys), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.context, n = t.options, o = t.dateEnv, i = t.dateProfileGenerator, a = this.props,
                s = a.dateProfile, l = this.buildTimeColsModel(s, i), u = this.allDaySplitter.splitProps(a),
                c = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, n.slotLabelInterval, n.slotDuration, o),
                d = n.dayMinWidth, p = !d, f = d, h = n.dayHeaders && Or(Ii, {
                    dates: l.headerDates,
                    dateProfile: s,
                    datesRepDistinctDays: !0,
                    renderIntro: p ? this.renderHeadAxis : null
                }), v = !1 !== n.allDaySlot && function (t) {
                    return Or(fs, r({}, u.allDay, {
                        dateProfile: s,
                        dayTableModel: l,
                        nextDayThreshold: n.nextDayThreshold,
                        tableMinWidth: t.tableMinWidth,
                        colGroupNode: t.tableColGroupNode,
                        renderRowIntro: p ? e.renderTableRowAxis : null,
                        showWeekNumbers: !1,
                        expandRows: !1,
                        headerAlignElRef: e.headerElRef,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: a.forPrint
                    }, e.getAllDayMaxEventProps()))
                }, g = function (t) {
                    return Or(js, r({}, u.timed, {
                        dayTableModel: l,
                        dateProfile: s,
                        axis: p,
                        slotDuration: n.slotDuration,
                        slatMetas: c,
                        forPrint: a.forPrint,
                        tableColGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        onSlatCoords: e.handleSlatCoords,
                        expandRows: t.expandRows,
                        onScrollTopRequest: e.handleScrollTopRequest
                    }))
                };
            return f ? this.renderHScrollLayout(h, v, g, l.colCnt, d, c, this.state.slatCoords) : this.renderSimpleLayout(h, v, g)
        }, t
    }(Cs);

    function Xs(e, t) {
        var n = new Ni(e.renderRange, t);
        return new Hi(n, !1)
    }

    var Ks = so({
        initialView: "timeGridWeek",
        optionRefiners: {allDaySlot: Boolean},
        views: {
            timeGrid: {
                component: Zs,
                usesMinMaxTime: !0,
                allDaySlot: !0,
                slotDuration: "00:30:00",
                slotEventOverlap: !0
            },
            timeGridDay: {type: "timeGrid", duration: {days: 1}},
            timeGridWeek: {type: "timeGrid", duration: {weeks: 1}}
        }
    }), Js = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = e.dayDate, n = e.todayRange, o = this.context, i = o.theme, a = o.dateEnv,
                s = o.options, l = o.viewApi, u = vr(t, n), c = s.listDayFormat ? a.format(t, s.listDayFormat) : "",
                d = s.listDaySideFormat ? a.format(t, s.listDaySideFormat) : "", p = s.navLinks ? mr(t) : null,
                f = r({date: a.toDate(t), view: l, text: c, sideText: d, navLinkData: p}, u),
                h = ["fc-list-day"].concat(gr(u, i));
            return Or(co, {
                hookProps: f,
                classNames: s.dayHeaderClassNames,
                content: s.dayHeaderContent,
                defaultContent: $s,
                didMount: s.dayHeaderDidMount,
                willUnmount: s.dayHeaderWillUnmount
            }, function (e, n, r, o) {
                return Or("tr", {
                    ref: e,
                    className: h.concat(n).join(" "),
                    "data-date": rt(t)
                }, Or("th", {colSpan: 3}, Or("div", {
                    className: "fc-list-day-cushion " + i.getClass("tableCellShaded"),
                    ref: r
                }, o)))
            })
        }, t
    }(qr);

    function $s(e) {
        var t = e.navLinkData ? {"data-navlink": e.navLinkData, tabIndex: 0} : {};
        return Or(Lr, null, e.text && Or("a", r({className: "fc-list-day-text"}, t), e.text), e.sideText && Or("a", r({className: "fc-list-day-side-text"}, t), e.sideText))
    }

    var Qs = bt({hour: "numeric", minute: "2-digit", meridiem: "short"}), el = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = e.seg, r = t.options.eventTimeFormat || Qs;
            return Or(ea, {
                seg: n,
                timeText: "",
                disableDragging: !0,
                disableResizing: !0,
                defaultContent: tl,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday,
                isSelected: e.isSelected,
                isDragging: e.isDragging,
                isResizing: e.isResizing,
                isDateSelecting: e.isDateSelecting
            }, function (e, o, i, a, s) {
                return Or("tr", {
                    className: ["fc-list-event", s.event.url ? "fc-event-forced-url" : ""].concat(o).join(" "),
                    ref: e
                }, function (e, t, n) {
                    var r = n.options;
                    if (!1 !== r.displayEventTime) {
                        var o = e.eventRange.def, i = e.eventRange.instance, a = !1, s = void 0;
                        if (o.allDay ? a = !0 : en(e.eventRange.range) ? e.isStart ? s = Dn(e, t, n, null, null, i.range.start, e.end) : e.isEnd ? s = Dn(e, t, n, null, null, e.start, i.range.end) : a = !0 : s = Dn(e, t, n), a) {
                            var l = {text: n.options.allDayText, view: n.viewApi};
                            return Or(co, {
                                hookProps: l,
                                classNames: r.allDayClassNames,
                                content: r.allDayContent,
                                defaultContent: nl,
                                didMount: r.allDayDidMount,
                                willUnmount: r.allDayWillUnmount
                            }, function (e, t, n, r) {
                                return Or("td", {className: ["fc-list-event-time"].concat(t).join(" "), ref: e}, r)
                            })
                        }
                        return Or("td", {className: "fc-list-event-time"}, s)
                    }
                    return null
                }(n, r, t), Or("td", {className: "fc-list-event-graphic"}, Or("span", {
                    className: "fc-list-event-dot",
                    style: {borderColor: s.borderColor || s.backgroundColor}
                })), Or("td", {className: "fc-list-event-title", ref: i}, a))
            })
        }, t
    }(qr);

    function tl(e) {
        var t = e.event, n = t.url;
        return Or("a", r({}, n ? {href: n} : {}), t.title)
    }

    function nl(e) {
        return e.text
    }

    var rl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.computeDateVars = st(il), t.eventStoreToSegs = st(t._eventStoreToSegs), t.setRootEl = function (e) {
                e ? t.context.registerInteractiveComponent(t, {el: e}) : t.context.unregisterInteractiveComponent(t)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props, n = this.context,
                r = ["fc-list", n.theme.getClass("table"), !1 !== n.options.stickyHeaderDates ? "fc-list-sticky" : ""],
                o = this.computeDateVars(t.dateProfile), i = o.dayDates, a = o.dayRanges,
                s = this.eventStoreToSegs(t.eventStore, t.eventUiBases, a);
            return Or(Eo, {viewSpec: n.viewSpec, elRef: this.setRootEl}, function (n, o) {
                return Or("div", {ref: n, className: r.concat(o).join(" ")}, Or(Li, {
                    liquid: !t.isHeightAuto,
                    overflowX: t.isHeightAuto ? "visible" : "hidden",
                    overflowY: t.isHeightAuto ? "visible" : "auto"
                }, s.length > 0 ? e.renderSegList(s, i) : e.renderEmptyMessage()))
            })
        }, t.prototype.renderEmptyMessage = function () {
            var e = this.context, t = e.options, n = e.viewApi, r = {text: t.noEventsText, view: n};
            return Or(co, {
                hookProps: r,
                classNames: t.noEventsClassNames,
                content: t.noEventsContent,
                defaultContent: ol,
                didMount: t.noEventsDidMount,
                willUnmount: t.noEventsWillUnmount
            }, function (e, t, n, r) {
                return Or("div", {
                    className: ["fc-list-empty"].concat(t).join(" "),
                    ref: e
                }, Or("div", {className: "fc-list-empty-cushion", ref: n}, r))
            })
        }, t.prototype.renderSegList = function (e, t) {
            var n = this.context, o = n.theme, i = n.options, a = function (e) {
                var t, n, r = [];
                for (t = 0; t < e.length; t += 1) n = e[t], (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
                return r
            }(e);
            return Or(xi, {unit: "day"}, function (e, n) {
                for (var s = [], l = 0; l < a.length; l += 1) {
                    var u = a[l];
                    if (u) {
                        var c = t[l].toISOString();
                        s.push(Or(Js, {key: c, dayDate: t[l], todayRange: n}));
                        for (var d = 0, p = u = gn(u, i.eventOrder); d < p.length; d++) {
                            var f = p[d];
                            s.push(Or(el, r({
                                key: c + ":" + f.eventRange.instance.instanceId,
                                seg: f,
                                isDragging: !1,
                                isResizing: !1,
                                isDateSelecting: !1,
                                isSelected: !1
                            }, bn(f, n, e))))
                        }
                    }
                }
                return Or("table", {className: "fc-list-table " + o.getClass("table")}, Or("tbody", null, s))
            })
        }, t.prototype._eventStoreToSegs = function (e, t, n) {
            return this.eventRangesToSegs(cn(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n)
        }, t.prototype.eventRangesToSegs = function (e, t) {
            for (var n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                n.push.apply(n, this.eventRangeToSegs(i, t))
            }
            return n
        }, t.prototype.eventRangeToSegs = function (e, t) {
            var n, r, o, i = this.context.dateEnv, a = this.context.options.nextDayThreshold, s = e.range,
                l = e.def.allDay, u = [];
            for (n = 0; n < t.length; n += 1) if ((r = on(s, t[n])) && (o = {
                component: this,
                eventRange: e,
                start: r.start,
                end: r.end,
                isStart: e.isStart && r.start.valueOf() === s.start.valueOf(),
                isEnd: e.isEnd && r.end.valueOf() === s.end.valueOf(),
                dayIndex: n
            }, u.push(o), !o.isEnd && !l && n + 1 < t.length && s.end < i.add(t[n + 1].start, a))) {
                o.end = s.end, o.isEnd = !0;
                break
            }
            return u
        }, t
    }(ao);

    function ol(e) {
        return e.text
    }

    function il(e) {
        for (var t = we(e.renderRange.start), n = e.renderRange.end, r = [], o = []; t < n;) r.push(t), o.push({
            start: t,
            end: me(t, 1)
        }), t = me(t, 1);
        return {dayDates: r, dayRanges: o}
    }

    function al(e) {
        return !1 === e ? null : bt(e)
    }

    var sl = so({
        optionRefiners: {
            listDayFormat: al,
            listDaySideFormat: al,
            noEventsClassNames: Pt,
            noEventsContent: Pt,
            noEventsDidMount: Pt,
            noEventsWillUnmount: Pt
        },
        views: {
            list: {
                component: rl,
                buttonTextKey: "list",
                listDayFormat: {month: "long", day: "numeric", year: "numeric"}
            },
            listDay: {type: "list", duration: {days: 1}, listDayFormat: {weekday: "long"}},
            listWeek: {
                type: "list",
                duration: {weeks: 1},
                listDayFormat: {weekday: "long"},
                listDaySideFormat: {month: "long", day: "numeric", year: "numeric"}
            },
            listMonth: {type: "list", duration: {month: 1}, listDaySideFormat: {weekday: "long"}},
            listYear: {type: "list", duration: {year: 1}, listDaySideFormat: {weekday: "long"}}
        }
    }), ll = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t
    }(Nr);
    ll.prototype.classes = {
        root: "fc-theme-bootstrap",
        table: "table-bordered",
        tableCellShaded: "table-active",
        buttonGroup: "btn-group",
        button: "btn btn-primary",
        buttonActive: "active",
        popover: "popover",
        popoverHeader: "popover-header",
        popoverContent: "popover-body"
    }, ll.prototype.baseIconClass = "fa", ll.prototype.iconClasses = {
        close: "fa-times",
        prev: "fa-chevron-left",
        next: "fa-chevron-right",
        prevYear: "fa-angle-double-left",
        nextYear: "fa-angle-double-right"
    }, ll.prototype.rtlIconClasses = {
        prev: "fa-chevron-right",
        next: "fa-chevron-left",
        prevYear: "fa-angle-double-right",
        nextYear: "fa-angle-double-left"
    }, ll.prototype.iconOverrideOption = "bootstrapFontAwesome", ll.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome", ll.prototype.iconOverridePrefix = "fa-";
    var ul = so({themeClasses: {bootstrap: ll}}), cl = {googleCalendarApiKey: String},
        dl = {googleCalendarApiKey: String, googleCalendarId: String, googleCalendarApiBase: String, extraParams: Pt},
        pl = "https://www.googleapis.com/calendar/v3/calendars";
    var fl = so({
        eventSourceDefs: [{
            parseMeta: function (e) {
                var t = e.googleCalendarId;
                return !t && e.url && (t = function (e) {
                    var t;
                    if (/^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(e)) return e;
                    if ((t = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(e)) || (t = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(e))) return decodeURIComponent(t[1]);
                    return null
                }(e.url)), t ? {
                    googleCalendarId: t,
                    googleCalendarApiKey: e.googleCalendarApiKey,
                    googleCalendarApiBase: e.googleCalendarApiBase,
                    extraParams: e.extraParams
                } : null
            }, fetch: function (e, t, n) {
                var o = e.context, i = o.dateEnv, a = o.options, s = e.eventSource.meta,
                    l = s.googleCalendarApiKey || a.googleCalendarApiKey;
                if (l) {
                    var u = function (e) {
                        var t = e.googleCalendarApiBase;
                        t || (t = pl);
                        return t + "/" + encodeURIComponent(e.googleCalendarId) + "/events"
                    }(s), c = s.extraParams, d = "function" == typeof c ? c() : c, p = function (e, t, n, o) {
                        var i, a, s;
                        o.canComputeOffset ? (a = o.formatIso(e.start), s = o.formatIso(e.end)) : (a = me(e.start, -1).toISOString(), s = me(e.end, 1).toISOString());
                        i = r(r({}, n || {}), {
                            key: t,
                            timeMin: a,
                            timeMax: s,
                            singleEvents: !0,
                            maxResults: 9999
                        }), "local" !== o.timeZone && (i.timeZone = o.timeZone);
                        return i
                    }(e.range, l, d, i);
                    Vo("GET", u, p, function (e, r) {
                        var o, i;
                        e.error ? n({
                            message: "Google Calendar API: " + e.error.message,
                            errors: e.error.errors,
                            xhr: r
                        }) : t({
                            rawEvents: (o = e.items, i = p.timeZone, o.map(function (e) {
                                return function (e, t) {
                                    var n = e.htmlLink || null;
                                    n && t && (n = function (e, t) {
                                        return e.replace(/(\?.*?)?(#|$)/, function (e, n, r) {
                                            return (n ? n + "&" : "?") + t + r
                                        })
                                    }(n, "ctz=" + t));
                                    return {
                                        id: e.id,
                                        title: e.summary,
                                        start: e.start.dateTime || e.start.date,
                                        end: e.end.dateTime || e.end.date,
                                        url: n,
                                        location: e.location,
                                        description: e.description
                                    }
                                }(e, i)
                            })), xhr: r
                        })
                    }, function (e, t) {
                        n({message: e, xhr: t})
                    })
                } else n({message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"})
            }
        }], optionRefiners: cl, eventSourceRefiners: dl
    });
    return Bo.push(Fa, gs, Ks, sl, ul, fl), e.BASE_OPTION_DEFAULTS = wt, e.BASE_OPTION_REFINERS = Ct, e.BaseComponent = qr, e.BgEvent = ua, e.BootstrapTheme = ll, e.Calendar = fa, e.CalendarApi = Fn, e.CalendarContent = Si, e.CalendarDataManager = Xo, e.CalendarDataProvider = ai, e.CalendarRoot = Ci, e.Component = Hr, e.ContentHook = fo, e.CustomContentRenderContext = po, e.DateComponent = ao, e.DateEnv = Kn, e.DateProfileGenerator = wo, e.DayCellContent = ia, e.DayCellRoot = sa, e.DayGridView = hs, e.DayHeader = Ii, e.DaySeriesModel = Ni, e.DayTable = fs, e.DayTableModel = Hi, e.DayTableSlicer = ps, e.DayTimeCols = js, e.DayTimeColsSlicer = Bs, e.DayTimeColsView = Zs, e.DelayedRunner = qo, e.Draggable = La, e.ElementDragging = di, e.ElementScrollController = Ir, e.Emitter = Mr, e.EventApi = zn, e.EventRoot = ea, e.EventSourceApi = V, e.FeaturefulElementDragging = Ra, e.Fragment = Lr, e.Interaction = li, e.ListView = rl, e.MountHook = vo, e.NamedTimeZoneImpl = si, e.NowIndicatorRoot = ra, e.NowTimer = xi, e.PointerDragging = ma, e.PositionCache = xr, e.RefMap = Wi, e.RenderHook = co, e.ScrollController = _r, e.ScrollResponder = zr, e.Scroller = Li, e.SimpleScrollGrid = Qi, e.Slicer = Oi, e.Splitter = fr, e.StandardEvent = ta, e.Table = us, e.TableDateCell = ki, e.TableDowCell = Mi, e.TableView = za, e.Theme = Nr, e.ThirdPartyDraggable = Va, e.TimeCols = Fs, e.TimeColsSlatsCoords = Rs, e.TimeColsView = Cs, e.ViewApi = An, e.ViewContextType = Br, e.ViewRoot = Eo, e.WeekNumberRoot = da, e.WindowScrollController = Pr, e.addDays = me, e.addDurations = Je, e.addMs = ye, e.addWeeks = ge, e.allowContextMenu = ae, e.allowSelection = oe, e.applyMutationToEventStore = Nn, e.applyStyle = q, e.applyStyleProp = Y, e.asCleanDays = function (e) {
        return e.years || e.months || e.milliseconds ? 0 : e.days
    }, e.asRoughMinutes = function (e) {
        return et(e) / 6e4
    }, e.asRoughMs = et, e.asRoughSeconds = function (e) {
        return et(e) / 1e3
    }, e.buildClassNameNormalizer = go, e.buildDayRanges = Gs, e.buildDayTableModel = vs, e.buildEventApis = jn, e.buildEventRangeKey = wn, e.buildHashFromArray = function (e, t) {
        for (var n = {}, r = 0; r < e.length; r += 1) {
            var o = t(e[r], r);
            n[o[0]] = o[1]
        }
        return n
    }, e.buildNavLinkData = mr, e.buildSegCompareObj = mn, e.buildSegTimeText = Dn, e.buildSlatMetas = Ys, e.buildTimeColsModel = Xs, e.collectFromHash = je, e.combineEventUis = Bt, e.compareByFieldSpec = ue, e.compareByFieldSpecs = le, e.compareNumbers = pe, e.compareObjs = ze, e.computeEdges = Cr,e.computeFallbackHeaderFormat = wi,e.computeHeightAndMargins = function (e) {
        return e.getBoundingClientRect().height + function (e) {
            var t = window.getComputedStyle(e);
            return parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10)
        }(e)
    },e.computeInnerRect = wr,e.computeRect = Rr,e.computeSegDraggable = yn,e.computeSegEndResizable = Sn,e.computeSegStartResizable = En,e.computeShrinkWidth = Vi,e.computeSmallestCellWidth = he,e.computeVisibleDayRange = Qt,e.config = pi,e.constrainPoint = lr,e.createContext = Wr,e.createDuration = Xe,e.createElement = Or,e.createEmptyEventStore = At,e.createEventInstance = Ne,e.createEventUi = zt,e.createFormatter = bt,e.createPlugin = so,e.createRef = Ur,e.diffDates = tn,e.diffDayAndTime = De,e.diffDays = Se,e.diffPoints = cr,e.diffWeeks = Ee,e.diffWholeDays = Ce,e.diffWholeWeeks = be,e.disableCursor = te,e.elementClosest = z,e.elementMatches = B,e.enableCursor = ne,e.eventTupleToStore = Ht,e.filterEventStoreDefs = Lt,e.filterHash = Ae,e.findDirectChildren = function (e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1) for (var i = n[o].children, a = 0; a < i.length; a += 1) {
            var s = i[a];
            t && !B(s, t) || r.push(s)
        }
        return r
    },e.findElements = j,e.flexibleCompare = ce,e.flushToDom = Vr,e.formatDate = function (e, t) {
        void 0 === t && (t = {});
        var n = nr(t), r = bt(t), o = n.createMarkerMeta(e);
        return o ? n.format(o.marker, r, {forcedTzo: o.forcedTzo}) : ""
    },e.formatDayString = rt,e.formatIsoTimeString = ot,e.formatRange = function (e, t, n) {
        var r = nr("object" == typeof n && n ? n : {}), o = bt(n), i = r.createMarkerMeta(e), a = r.createMarkerMeta(t);
        return i && a ? r.formatRange(i.marker, a.marker, o, {
            forcedStartTzo: i.forcedTzo,
            forcedEndTzo: a.forcedTzo,
            isEndExclusive: n.isEndExclusive,
            defaultSeparator: wt.defaultRangeSeparator
        }) : ""
    },e.getAllowYScrolling = zi,e.getCanVGrowWithinCell = dr,e.getClippingParents = Tr,e.getDateMeta = vr,e.getDayClassNames = gr,e.getDefaultEventEnd = Pn,e.getElSeg = fn,e.getEventClassNames = Cn,e.getIsRtlScrollbarOnLeft = Sr,e.getRectCenter = ur,e.getRelevantEvents = Ot,e.getScrollGridClassNames = Zi,e.getScrollbarWidths = Dr,e.getSectionClassNames = Xi,e.getSectionHasLiquidHeight = Fi,e.getSegMeta = bn,e.getSlotClassNames = function (e, t) {
        var n = ["fc-slot", "fc-slot-" + ve[e.dow]];
        return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-slot-past"), e.isFuture && n.push("fc-slot-future")), n
    },e.getStickyFooterScrollbar = $i,e.getStickyHeaderDates = Ji,e.getUnequalProps = Fe,e.globalLocales = Jn,e.globalPlugins = Bo,e.greatestDurationDenominator = nt,e.guid = ee,e.hasBgRendering = dn,e.hasShrinkWidth = Yi,e.identity = Pt,e.interactionSettingsStore = ci,e.interactionSettingsToStore = ui,e.intersectRanges = on,e.intersectRects = sr,e.isArraysEqual = at,e.isColPropsEqual = ji,e.isDateSpansEqual = kn,e.isInt = fe,e.isInteractionValid = Qr,e.isMultiDayRange = en,e.isPropsEqual = Ve,e.isPropsValid = to,e.isValidDate = Ie,e.listenBySelector = K,e.mapHash = Ue,e.memoize = st,e.memoizeArraylike = function (e, t, n) {
        var r = this, o = [], i = [];
        return function (a) {
            for (var s = o.length, l = a.length, u = 0; u < s; u += 1) if (a[u]) {
                if (!at(o[u], a[u])) {
                    n && n(i[u]);
                    var c = e.apply(r, a[u]);
                    t && t(c, i[u]) || (i[u] = c)
                }
            } else n && n(i[u]);
            for (; u < l; u += 1) i[u] = e.apply(r, a[u]);
            return o = a, i.splice(l), i
        }
    },e.memoizeHashlike = function (e, t, n) {
        var r = this, o = {}, i = {};
        return function (a) {
            var s = {};
            for (var l in a) if (i[l]) if (at(o[l], a[l])) s[l] = i[l]; else {
                n && n(i[l]);
                var u = e.apply(r, a[l]);
                s[l] = t && t(u, i[l]) ? i[l] : u
            } else s[l] = e.apply(r, a[l]);
            return o = a, i = s, s
        }
    },e.memoizeObjArg = lt,e.mergeEventStores = Ut,e.multiplyDuration = $e,e.padStart = de,e.parseBusinessHours = ir,e.parseClassNames = Wt,e.parseDragMeta = hi,e.parseEventDef = Jt,e.parseFieldSpecs = se,e.parseMarker = Xn,e.pointInsideRect = ar,e.preventContextMenu = ie,e.preventDefault = Z,e.preventSelection = re,e.rangeContainsMarker = un,e.rangeContainsRange = ln,e.rangesEqual = an,e.rangesIntersect = sn,e.refineEventDef = Xt,e.refineProps = It,e.removeElement = F,e.removeExact = function (e, t) {
        for (var n = 0, r = 0; r < e.length;) e[r] === t ? (e.splice(r, 1), n += 1) : r += 1;
        return n
    },e.render = Ar,e.renderChunkContent = Bi,e.renderFill = la,e.renderMicroColGroup = Gi,e.renderScrollShim = Ki,e.requestJson = Vo,e.sanitizeShrinkWidth = qi,e.setElSeg = pn,e.setRef = Xr,e.sliceEventStore = cn,e.sliceEvents = function (e, t) {
        return cn(e.eventStore, e.eventUiBases, e.dateProfile.activeRange, t ? e.nextDayThreshold : null).fg
    },e.sortEventSegs = gn,e.startOfDay = we,e.translateRect = function (e, t, n) {
        return {left: e.left + t, right: e.right + t, top: e.top + n, bottom: e.bottom + n}
    },e.triggerDateSelect = _n,e.unmountComponentAtNode = Fr,e.unpromisify = kr,e.version = "5.5.1",e.whenTransitionDone = $,e.wholeDivideDurations = tt,Object.defineProperty(e, "__esModule", {value: !0}),e
}({});