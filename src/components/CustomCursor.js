import React, { useEffect } from 'react';
import $ from 'jquery';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = $(".cursor");

    $(window).mousemove((e) => {
      cursor.css({
        top: e.clientY - cursor.height() / 2,
        left: e.clientX - cursor.width() / 2,
      });
    });

    $(window)
      .mouseleave(() => {
        cursor.css({ opacity: "0" });
      })
      .mouseenter(() => {
        cursor.css({ opacity: "1" });
      });

    $(".btn, .zoom, .nav-link, a img, footer a, h1, .persona a")
      .mouseenter(() => {
        cursor.css({ transform: "scale(3.2)" });
        cursor.addClass('opacity-low');
      })
      .mouseleave(() => {
        cursor.css({ transform: "scale(1)" });
        cursor.removeClass('opacity-low');
      });

    $(window)
      .mousedown(() => {
        cursor.css({ transform: "scale(.2)" });
      })
      .mouseup(() => {
        cursor.css({ transform: "scale(1)" });
      });

    return () => {
      $(window).off('mousemove');
      $(window).off('mouseleave mouseenter mousedown mouseup');
      $(".btn, .zoom, .nav-link, a img, footer a, h1, .persona a").off('mouseenter mouseleave');
    };
  }, []);

  return <div className="cursor"></div>;
};

export default CustomCursor;
