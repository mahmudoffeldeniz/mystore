// src/plugins/jquery.picZoomer.js
import $ from "jquery";

(function ($) {
  $.fn.picZoomer = function (options) {
    const opts = $.extend({}, $.fn.picZoomer.defaults, options),
      $this = this,
      $picBD = $('<div class="picZoomer-pic-wp"></div>')
        .css({ width: opts.picWidth + "px", height: opts.picHeight + "px" })
        .appendTo($this),
      $pic = $this.children("img").addClass("picZoomer-pic").appendTo($picBD),
      $cursor = $(
        '<div class="picZoomer-cursor"><i class="f-is picZoomCursor-ico"></i></div>'
      ).appendTo($picBD),
      cursorSizeHalf = { w: $cursor.width() / 2, h: $cursor.height() / 2 },
      $zoomWP = $(
        '<div class="picZoomer-zoom-wp"><img src="" alt="" class="picZoomer-zoom-pic"></div>'
      ).appendTo($this),
      $zoomPic = $zoomWP.find(".picZoomer-zoom-pic"),
      picBDOffset = { x: $picBD.offset().left, y: $picBD.offset().top };

    opts.zoomWidth = opts.zoomWidth || opts.picWidth;
    opts.zoomHeight = opts.zoomHeight || opts.picHeight;
    const zoomWPSizeHalf = { w: opts.zoomWidth / 2, h: opts.zoomHeight / 2 };

    $zoomWP
      .css({ width: opts.zoomWidth + "px", height: opts.zoomHeight + "px" })
      .css(opts.zoomerPosition || { top: 0, left: opts.picWidth + 30 + "px" });
    $zoomPic.css({
      width: opts.picWidth * opts.scale + "px",
      height: opts.picHeight * opts.scale + "px",
    });

    $picBD
      .on("mouseenter", () => {
        $cursor.show();
        $zoomWP.show();
        $zoomPic.attr("src", $pic.attr("src"));
      })
      .on("mouseleave", () => {
        $cursor.hide();
        $zoomWP.hide();
      })
      .on("mousemove", (event) => {
        const x = event.pageX - picBDOffset.x,
          y = event.pageY - picBDOffset.y;
        $cursor.css({
          left: x - cursorSizeHalf.w + "px",
          top: y - cursorSizeHalf.h + "px",
        });
        $zoomPic.css({
          left: -(x * opts.scale - zoomWPSizeHalf.w) + "px",
          top: -(y * opts.scale - zoomWPSizeHalf.h) + "px",
        });
      });

    return this;
  };

  $.fn.picZoomer.defaults = {
    picHeight: 460,
    scale: 2.5,
    zoomerPosition: { top: "0", left: "380px" },
    zoomWidth: 400,
    zoomHeight: 460,
  };
})($);
