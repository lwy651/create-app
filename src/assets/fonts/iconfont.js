;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-check" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696C170.208 511.872 149.952 512 137.536 524.608c-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224 0.096 0.096 0.128 0.224 0.224 0.32 2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224l449.184-478.208C901.44 330.592 900.768 310.336 887.904 298.208z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-close" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-edit" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M800 960 224 960c-52.928 0-96-43.072-96-96L128 224c0-52.928 43.072-96 96-96l448 0c17.696 0 32 14.336 32 32s-14.304 32-32 32L224 192C206.368 192 192 206.368 192 224l0 640c0 17.664 14.368 32 32 32l576 0c17.664 0 32-14.336 32-32L832 352c0-17.664 14.304-32 32-32s32 14.336 32 32l0 512C896 916.928 852.928 960 800 960z"  ></path>' +
    '' +
    '<path d="M612 448c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248l318.016-318.016c12.512-12.512 32.736-12.512 45.248 0s12.512 32.736 0 45.248l-318.016 318.016C628.384 444.896 620.192 448 612 448z"  ></path>' +
    '' +
    '<path d="M480 448 288 448c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0c17.664 0 32 14.336 32 32S497.664 448 480 448z"  ></path>' +
    '' +
    '<path d="M672 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l384 0c17.696 0 32 14.304 32 32S689.696 640 672 640z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-favorfill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M957.216 404.32c-3.808-11.36-13.632-19.68-25.504-21.504l-270.336-41.728-120.8-258.624C535.328 71.232 524.032 64.032 511.648 64c0 0-0.032 0-0.064 0-12.384 0-23.648 7.136-28.928 18.336l-121.856 258.016-270.72 40.8c-11.872 1.792-21.728 10.048-25.568 21.408-3.84 11.36-0.992 23.936 7.36 32.512l196.448 202.08L221.44 921.952c-1.984 12.096 3.104 24.256 13.12 31.328 9.984 7.072 23.168 7.808 33.888 1.92l241.824-133.024 241.312 133.856C756.416 958.656 761.76 960 767.104 960c0.256 0 0.48 0 0.64 0 17.696 0 32-14.304 32-32 0-3.968-0.704-7.776-2.016-11.296l-44.896-278.688 196.928-201.248C958.08 428.224 960.992 415.68 957.216 404.32z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-locationfill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C317.92 64 160 221.92 160 416c0 187.36 315.424 520.032 328.832 534.08C494.88 956.448 503.264 960 512 960c0.224 0 0.48 0 0.704 0 8.992 0 17.472-4.192 23.392-10.944l109.216-125.12C790.432 646.176 864 508.928 864 416 864 221.92 706.08 64 512 64zM512 576c-88.384 0-160-71.616-160-160s71.616-160 160-160 160 71.616 160 160S600.384 576 512 576z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-location" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 608c-105.888 0-192-86.112-192-192s86.112-192 192-192 192 86.112 192 192S617.888 608 512 608zM512 288c-70.592 0-128 57.408-128 128s57.408 128 128 128c70.592 0 128-57.408 128-128S582.592 288 512 288z"  ></path>' +
    '' +
    '<path d="M512 960c-7.936 0-15.904-2.944-22.08-8.832-12.768-12.224-13.248-32.48-1.056-45.248C575.392 815.2 800 550.336 800 416c0-158.784-129.184-288-288-288-158.784 0-288 129.216-288 288 0 75.616 72.544 206.08 204.256 367.424 11.2 13.728 9.152 33.888-4.544 45.024-13.696 11.168-33.888 9.152-45.024-4.544C233.568 646.176 160 508.928 160 416 160 221.92 317.92 64 512 64s352 157.92 352 352c0 187.36-315.424 520.032-328.832 534.08C528.864 956.672 520.448 960 512 960z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M953.504 908.256l-152.608-163.296c61.856-74.496 95.872-167.36 95.872-265.12 0-229.344-186.624-415.968-416.032-415.968-229.344 0-415.968 186.592-415.968 415.968s186.624 415.968 416 415.968c60.096-0.032 118.048-12.576 172.224-37.248 16.096-7.328 23.2-26.304 15.872-42.368-7.328-16.128-26.4-23.264-42.368-15.872-45.856 20.864-94.88 31.456-145.76 31.488-194.08 0-351.968-157.888-351.968-351.968 0-194.048 157.888-351.968 351.968-351.968 194.112 0 352.032 157.888 352.032 351.968 0 91.36-34.848 177.92-98.08 243.744-12.256 12.736-11.84 32.992 0.864 45.248 0.96 0.928 2.208 1.28 3.296 2.08 0.864 1.28 1.312 2.752 2.4 3.904l165.504 177.088c6.272 6.752 14.816 10.144 23.36 10.144 7.84 0 15.68-2.848 21.856-8.64C964.864 941.408 965.568 921.152 953.504 908.256z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-back" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-delete" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z"  ></path>' +
    '' +
    '<path d="M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z"  ></path>' +
    '' +
    '<path d="M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z"  ></path>' +
    '' +
    '<path d="M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M96 480c-9.6 0-19.2-3.2-25.6-12.8-12.8-12.8-9.6-35.2 3.2-44.8l377.6-310.4c35.2-25.6 86.4-25.6 118.4 0l377.6 307.2c12.8 9.6 16 32 3.2 44.8-12.8 12.8-32 16-44.8 3.2L531.2 166.4c-9.6-6.4-28.8-6.4-38.4 0L115.2 473.6c-6.4 6.4-12.8 6.4-19.2 6.4zM816 928H608c-19.2 0-32-12.8-32-32v-150.4c0-22.4-38.4-44.8-67.2-44.8-28.8 0-64 19.2-64 44.8V896c0 19.2-12.8 32-32 32H211.2C163.2 928 128 892.8 128 848V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304c0 9.6 6.4 16 19.2 16H384v-118.4c0-64 67.2-108.8 128-108.8s131.2 44.8 131.2 108.8V864h176c9.6 0 16 0 16-19.2V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304C896 896 864 928 816 928z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M728.864 497.056c-12.48-3.712-29.152-6.752-22.624-22.944 14.144-35.136 15.744-73.792 0.416-95.424-28.736-40.576-99.36-29.472-189.44 7.808 0-0.064-28.288 12.224-21.056-9.952 13.856-44.032 11.776-80.896-9.792-102.208-48.896-48.352-178.88 1.824-290.368 111.936C112.48 468.8 64 556.256 64 631.84c0 144.608 187.68 232.544 371.296 232.544 240.704 0 395.776-139.104 395.776-248.832C831.072 549.28 779.616 512.608 728.864 497.056zM435.808 812.576c-146.528 14.272-272.992-51.168-282.496-146.208-9.504-95.04 101.568-183.68 248.096-197.984 146.528-14.304 273.024 51.136 282.496 146.144C693.376 709.6 582.336 798.24 435.808 812.576z"  ></path>' +
    '' +
    '<path d="M897.632 235.136c-60.096-62.496-148.704-86.304-230.496-69.984l-0.032 0c-18.944 3.808-30.976 21.28-26.944 38.976 4.032 17.728 22.656 29.056 41.568 25.28 58.176-11.584 121.152 5.376 163.872 49.76 42.656 44.384 54.272 104.928 35.968 157.984l0 0c-5.952 17.28 4.128 35.776 22.592 41.376 18.368 5.568 38.144-3.872 44.096-21.12 0-0.032 0-0.096 0-0.096C973.92 382.656 957.728 297.568 897.632 235.136"  ></path>' +
    '' +
    '<path d="M807.904 317.088c-29.024-31.2-71.872-43.04-111.456-34.88-16.16 3.328-26.464 18.752-23.008 34.432 3.456 15.616 19.36 25.632 35.488 22.24l0 0.032c19.328-3.968 40.32 1.824 54.496 17.024 14.208 15.264 18.016 36.032 11.936 54.272l0.032 0c-5.056 15.232 3.52 31.584 19.264 36.512 15.744 4.864 32.608-3.424 37.696-18.688C844.768 390.752 836.992 348.288 807.904 317.088"  ></path>' +
    '' +
    '<path d="M484.928 504.064C413.12 485.76 331.968 520.8 300.8 582.72c-31.744 63.168-1.056 133.28 71.488 156.192 75.136 23.712 163.68-12.64 194.464-80.8C597.12 591.488 559.2 522.848 484.928 504.064zM430.08 662.528c-14.592 22.336-45.824 32.128-69.376 21.824-23.2-10.144-30.048-36.096-15.456-57.856 14.432-21.696 44.608-31.36 67.968-21.952C436.864 614.208 444.416 639.968 430.08 662.528zM478.176 603.328c-5.28 8.64-16.928 12.832-26.08 9.216-8.992-3.552-11.808-13.248-6.688-21.728 5.248-8.448 16.48-12.608 25.44-9.184C479.936 584.8 483.2 594.592 478.176 603.328z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-mobile" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M736 992 288 992c-52.928 0-96-43.072-96-96L192 128c0-52.928 43.072-96 96-96l448 0c52.928 0 96 43.072 96 96l0 768C832 948.928 788.928 992 736 992zM288 96C270.368 96 256 110.368 256 128l0 768c0 17.664 14.368 32 32 32l448 0c17.664 0 32-14.336 32-32L768 128c0-17.632-14.336-32-32-32L288 96z"  ></path>' +
    '' +
    '<path d="M512 896.416c-35.296 0-64-28.704-64-64s28.704-64 64-64c35.296 0 64 28.704 64 64S547.296 896.416 512 896.416zM512.032 832.416c0 0-0.064 0-0.064 0.032L512 864.416 512.032 832.416z"  ></path>' +
    '' +
    '<path d="M704 736 320 736c-17.664 0-32-14.304-32-32L288 160c0-17.664 14.336-32 32-32l384 0c17.696 0 32 14.336 32 32l0 544C736 721.696 721.696 736 704 736zM352 672l320 0L672 192 352 192 352 672z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-community" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M704 732.8c51.2 0 96-41.6 96-96V224c0-51.2-41.6-96-96-96H156.8c-51.2 0-96 41.6-96 96v412.8c0 51.2 41.6 96 96 96H192v160c0 12.8 9.6 25.6 22.4 32H224c9.6 0 19.2-3.2 25.6-12.8l131.2-179.2H704zM233.6 672c-3.2-3.2-9.6-3.2-12.8-3.2h-64c-16 0-32-12.8-32-32V224c0-16 12.8-32 32-32H704c16 0 32 12.8 32 32v412.8c0 16-12.8 32-32 32H364.8 355.2c-3.2 3.2-3.2 3.2-6.4 3.2s-3.2 3.2-6.4 3.2l-3.2 3.2s-3.2 0-3.2 3.2L256 796.8V704c0-16-9.6-25.6-22.4-32z" fill="#666666" ></path>' +
    '' +
    '<path d="M864 252.8c-19.2 0-32 12.8-32 32s16 32 32 32 32 12.8 32 32v348.8c0 19.2-16 25.6-32 25.6h-32c-19.2 0-32 12.8-32 32v3.2c0 3.2-3.2 6.4-3.2 9.6v60.8l-73.6-57.6c-3.2-3.2-9.6-3.2-16-3.2H544c-19.2 0-32 12.8-32 32s12.8 32 32 32h153.6l115.2 89.6c6.4 3.2 12.8 6.4 19.2 6.4 3.2 0 9.6 0 12.8-3.2 9.6-6.4 19.2-16 19.2-28.8v-108.8c54.4 0 96-38.4 96-89.6V348.8c0-51.2-44.8-96-96-96z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-my" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M800 384c0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 16 6.4 35.2 25.6 38.4h6.4c16 0 28.8-9.6 32-25.6 28.8-150.4 160-259.2 313.6-262.4h6.4c156.8 0 284.8-128 284.8-288zM288 384c0-124.8 99.2-224 224-224s224 99.2 224 224c0 121.6-99.2 220.8-220.8 224H505.6C384 604.8 288 505.6 288 384zM723.2 675.2c-16-9.6-35.2-6.4-44.8 9.6-9.6 16-6.4 35.2 9.6 44.8 73.6 51.2 124.8 121.6 140.8 204.8 3.2 16 16 25.6 32 25.6h6.4c16-3.2 28.8-19.2 25.6-38.4-19.2-99.2-80-185.6-169.6-246.4z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)