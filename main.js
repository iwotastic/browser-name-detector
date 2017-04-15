(function(){
  var bnd = function() {
    if (typeof HTMLTemplateElement == "undefined") {
      return "Internet Explorer"
    }else{
      if (typeof HTMLSlotElement == "undefined") {
        if (typeof SVGStopElement == "undefined") {
          return "Edge"
        }else{
          return "Firefox"
        }
      }else{
        if (typeof HTMLDialogElement == "undefined") {
          return "Safari"
        }else{
          return "Chrome"
        }
      }
    }
  }
  if (!window.bnd) {
    window.bnd = bnd
  }else{
    window.browserNameDetector = bnd
  }
})
