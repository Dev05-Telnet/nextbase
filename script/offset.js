window["fp_offsetSectionsExtension"] = function () {
    var fullPageData = fullpage_api["getFullpageData"](),
      internals = fullPageData["internals"],
      SECTION = "fp-section",
      SECTION_SEL = "." + SECTION;
    (this["getWindowHeight"] = function (element) {
      var secion = fp_utils["hasClass"](element, SECTION) ?
        element :
        fp_utils["closest"](element, SECTION_SEL);
      return null != secion["getAttribute"]("data-percentage") ?
        (secion["getAttribute"]("data-percentage") *
          fp_utils["getWindowHeight"]()) /
        0x64 :
        fp_utils["getWindowHeight"]();
    }),
    (this["getSectionPosition"] = function (isTrue, offset, element) {
      if (
        null != element["getAttribute"]("data-percentage")
      ) {
        var _0x15952f =
          null == fp_utils["prev"](element) ||
          null == fp_utils["next"](element),
          _0x255308 =
          null == element["getAttribute"]("data-centered") ||
          "true" === element["getAttribute"]("data-centered"),
          _0xe8272f =
          fp_utils["getWindowHeight"]() -
          getComputedStyle(element)["height"]["replace"]("px", ""),
          _0x42ce48 = _0x15952f ? 0x0 : _0x255308 ? _0xe8272f / 0x2 : _0xe8272f;
        offset = isTrue ?
          offset + _0x42ce48 :
          Math["abs"](offset - _0x42ce48);
      }
      return offset;
    }),
    (this["c"] = internals["c"]);
    var _0x3780d1 = this["common" ["charAt"](0x0)];
    console.log('what is this now',_0x3780d1)
    return (
      "complete" === document["readyState"] && _0x3780d1("offsetSections"),
      window["addEventListener"]("load", function () {
        _0x3780d1("offsetSections");
      }),
      this
    );
  };



//   window["fp_offsetSectionsExtension"] = function () {
//     var fullPageData = fullpage_api["getFullpageData"](),
//       internals = fullPageData["internals"],
//       SECTION = "fp-section",
//       SECTION_SEL = "." + SECTION;
//     (this["getWindowHeight"] = function (element) {
//       var section = fp_utils["hasClass"](element, SECTION) ? element : fp_utils["closest"](element, SECTION_SEL);
//       return null != section["getAttribute"]("data-percentage") ?
//         (section["getAttribute"]("data-percentage") * fp_utils["getWindowHeight"]()) / 0x64 : fp_utils["getWindowHeight"]();
//     }),
//     (this["getSectionPosition"] = function (isDownwards, stickTo, element) {
//       if (null != element["getAttribute"]("data-percentage")) {
//         var firstOrLast = null == fp_utils["prev"](element) || null == fp_utils["next"](element),
//           isCentered = null == element["getAttribute"]("data-centered") || "true" === element["getAttribute"]("data-centered"),
//           sectionHeight = fp_utils["getWindowHeight"]() - getComputedStyle(element)["height"]["replace"]("px", ""),
//           calculatedOffset = firstOrLast ? 0x0 : isCentered ? sectionHeight / 0x2 : sectionHeight,
//           stickTo = isDownwards ? stickTo + calculatedOffset : Math["abs"](stickTo - calculatedOffset);
//       }
//       return stickTo;
//     }),
//     (this["c"] = internals["c"]);
//     var extension = this["common" ["charAt"](0x0)];
//     return (
//       "complete" === document["readyState"] && extension("offsetSections"),
//       window["addEventListener"]("load", function () {
//         extension("offsetSections");
//       }),
//       this
//     );
//   }; (edited) 