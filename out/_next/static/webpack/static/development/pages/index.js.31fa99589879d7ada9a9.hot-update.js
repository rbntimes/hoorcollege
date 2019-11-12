webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Chart/index.js":
/*!***********************************!*\
  !*** ./components/Chart/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nivo_circle_packing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nivo/circle-packing */ "./node_modules/@nivo/circle-packing/dist/nivo-circle-packing.esm.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./components/Chart/data.js");
var _jsxFileName = "/Users/n86ies/Documents/school/functional-programming/hoorcollege/components/Chart/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Chart = function Chart() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: "Data visualisatie van hoorcolleges 11-11-2019",
    text: "Ik heb er voor gekozen mijn datavisualisatie van de hoorcolleges uit te werken. Klik op de bubbels om te lezen wat de presentaties voor mij betekende."
  }),
      description = _useState[0],
      setDescription = _useState[1];

  return __jsx("div", {
    className: "jsx-1385540880" + " " + "chartContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1385540880" + " " + "chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_nivo_circle_packing__WEBPACK_IMPORTED_MODULE_2__["ResponsiveBubble"], {
    root: _data__WEBPACK_IMPORTED_MODULE_3__["default"],
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    },
    identity: "name",
    value: "loc",
    colors: {
      scheme: "nivo"
    },
    padding: 6,
    labelTextColor: {
      from: "color",
      modifiers: [["darker", 0.8]]
    },
    borderWidth: 2,
    animate: true,
    motionStiffness: 50,
    motionDamping: 12,
    onClick: function onClick(_ref) {
      var data = _ref.data;
      return console.log(data) || setDescription(data);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1385540880" + " " + "meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1385540880",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, description.name), __jsx("span", {
    className: "jsx-1385540880",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, description.text)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1385540880",
    __self: this
  }, ".chartContainer.jsx-1385540880{width:80vw;height:80vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);-webkit-transition:0.3s;transition:0.3s;}.chartContainer.jsx-1385540880:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);}.chart.jsx-1385540880{width:70%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:white;}.meta.jsx-1385540880{width:40%;padding:20px;text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}span.jsx-1385540880{font-size:19px;line-height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9mdW5jdGlvbmFsLXByb2dyYW1taW5nL2hvb3Jjb2xsZWdlL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NrQixBQUdzQixBQU9nQyxBQUlqQyxBQU9BLEFBUUssVUFkSCxBQU9DLENBbEJELElBMEJLLE9BZEosQ0FYQSxBQWtCRyxTQVFsQixPQVBlLENBYmYsd0RBTTZCLENBWGUsZ0JBbUJwQix1QkFsQk4sd0NBQ2xCLGVBa0J5QixVQVJOLGlCQUNuQix3RUFRQSIsImZpbGUiOiIvVXNlcnMvbjg2aWVzL0RvY3VtZW50cy9zY2hvb2wvZnVuY3Rpb25hbC1wcm9ncmFtbWluZy9ob29yY29sbGVnZS9jb21wb25lbnRzL0NoYXJ0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlc3BvbnNpdmVCdWJibGUgfSBmcm9tIFwiQG5pdm8vY2lyY2xlLXBhY2tpbmdcIjtcblxuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuXG5jb25zdCBDaGFydCA9ICgpID0+IHtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJEYXRhIHZpc3VhbGlzYXRpZSB2YW4gaG9vcmNvbGxlZ2VzIDExLTExLTIwMTlcIixcbiAgICB0ZXh0OlxuICAgICAgXCJJayBoZWIgZXIgdm9vciBnZWtvemVuIG1pam4gZGF0YXZpc3VhbGlzYXRpZSB2YW4gZGUgaG9vcmNvbGxlZ2VzIHVpdCB0ZSB3ZXJrZW4uIEtsaWsgb3AgZGUgYnViYmVscyBvbSB0ZSBsZXplbiB3YXQgZGUgcHJlc2VudGF0aWVzIHZvb3IgbWlqIGJldGVrZW5kZS5cIlxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRDb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgPFJlc3BvbnNpdmVCdWJibGVcbiAgICAgICAgICByb290PXtkYXRhfVxuICAgICAgICAgIG1hcmdpbj17eyB0b3A6IDIwLCByaWdodDogMjAsIGJvdHRvbTogMjAsIGxlZnQ6IDIwIH19XG4gICAgICAgICAgaWRlbnRpdHk9XCJuYW1lXCJcbiAgICAgICAgICB2YWx1ZT1cImxvY1wiXG4gICAgICAgICAgY29sb3JzPXt7IHNjaGVtZTogXCJuaXZvXCIgfX1cbiAgICAgICAgICBwYWRkaW5nPXs2fVxuICAgICAgICAgIGxhYmVsVGV4dENvbG9yPXt7IGZyb206IFwiY29sb3JcIiwgbW9kaWZpZXJzOiBbW1wiZGFya2VyXCIsIDAuOF1dIH19XG4gICAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XG4gICAgICAgICAgYW5pbWF0ZT17dHJ1ZX1cbiAgICAgICAgICBtb3Rpb25TdGlmZm5lc3M9ezUwfVxuICAgICAgICAgIG1vdGlvbkRhbXBpbmc9ezEyfVxuICAgICAgICAgIG9uQ2xpY2s9eyh7IGRhdGEgfSkgPT4gY29uc29sZS5sb2coZGF0YSkgfHwgc2V0RGVzY3JpcHRpb24oZGF0YSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICA8aDE+e2Rlc2NyaXB0aW9uLm5hbWV9PC9oMT5cbiAgICAgICAgPHNwYW4+e2Rlc2NyaXB0aW9uLnRleHR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jaGFydENvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0Q29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoYXJ0IHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAubWV0YSB7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iXX0= */\n/*@ sourceURL=/Users/n86ies/Documents/school/functional-programming/hoorcollege/components/Chart/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ })

})
//# sourceMappingURL=index.js.31fa99589879d7ada9a9.hot-update.js.map