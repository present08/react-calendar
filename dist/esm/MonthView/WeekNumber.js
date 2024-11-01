var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
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
import { jsx as _jsx } from "react/jsx-runtime";
var className = 'react-calendar__tile';
export default function WeekNumber(props) {
    var onClickWeekNumber = props.onClickWeekNumber, weekNumber = props.weekNumber;
    var children = _jsx("span", { children: weekNumber });
    if (onClickWeekNumber) {
        var date_1 = props.date, onClickWeekNumber_1 = props.onClickWeekNumber, weekNumber_1 = props.weekNumber, otherProps = __rest(props, ["date", "onClickWeekNumber", "weekNumber"]);
        return (_jsx("button", __assign({}, otherProps, { className: className, onClick: function (event) { return onClickWeekNumber_1(weekNumber_1, date_1, event); }, type: "button", children: children })));
        // biome-ignore lint/style/noUselessElse: TypeScript is unhappy if we remove this else
    }
    else {
        var date = props.date, onClickWeekNumber_2 = props.onClickWeekNumber, weekNumber_2 = props.weekNumber, otherProps = __rest(props, ["date", "onClickWeekNumber", "weekNumber"]);
        return (_jsx("div", __assign({}, otherProps, { className: className, children: children })));
    }
}
