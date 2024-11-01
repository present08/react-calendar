var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { getDayEnd, getDayStart } from '@wojtekmaj/date-utils';
import { jsx as _jsx } from "react/jsx-runtime";
import Tile from '../Tile.js';
import { formatDay as defaultFormatDay, formatLongDate as defaultFormatLongDate, } from '../shared/dateFormatter.js';
import { isWeekend } from '../shared/dates.js';
var className = 'react-calendar__month-view__days__day';
export default function Day(_a) {
    var calendarType = _a.calendarType, _b = _a.classes, classes = _b === void 0 ? [] : _b, currentMonthIndex = _a.currentMonthIndex, _c = _a.formatDay, formatDay = _c === void 0 ? defaultFormatDay : _c, _d = _a.formatLongDate, formatLongDate = _d === void 0 ? defaultFormatLongDate : _d, otherProps = __rest(_a, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if (className) {
        classesProps.push(className);
    }
    if (isWeekend(date, calendarType) === 'Saturday') {
        classesProps.push("".concat(className, "--saturday"));
    } else if (isWeekend(date, calendarType) === 'Sunday') {
        classesProps.push("".concat(className, "--sunday"));
    }
    if (date.getMonth() !== currentMonthIndex) {
        classesProps.push("".concat(className, "--neighboringMonth"));
    }
    return (_jsx(Tile, __assign({}, otherProps, { classes: classesProps, formatAbbr: formatLongDate, maxDateTransform: getDayEnd, minDateTransform: getDayStart, view: "month", children: formatDay(locale, date) })));
}
