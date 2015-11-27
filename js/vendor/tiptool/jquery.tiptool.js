(function ($) {

	var defaults = {
		window: "#popup",
		onClick: function () {

		},
		onMouseMove: function (event) {

		},
		onMouseLeave: function (event) {

		},
		onInit: function () {

		},
		onMouseOver: function () {

		},
		onMouseOut: function () {

		},
		offset: {
			x: 10,
			y: -20
		}
	};
	var cfg;

	var methods = {
		init: function (options, cfg) {

			cfg = $.extend({}, defaults, options, cfg);

			return this.each(function () {

				var $this = $(this);

				// onInit
				cfg.onInit.call(this);

				// onClick
				$this.click(function () {
					cfg.onClick.call(this);
				});

				// return event omMouse move
				$this.mousemove(function (e) {

					cfg.onMouseMove(e);

					$(cfg.window)
						.css({
							"position": "absolute",
							"top": e.pageY + cfg.offset.y,
							"left": e.pageX + cfg.offset.x
						})
				});

				// mouse over
				$this.mouseover(function () {
					cfg.onMouseOver.call(this);
				});

				// mouse leave
				$this.mouseleave(function (e) {
					cfg.onMouseLeave(e);
				});

				// mouse out
				$this.mouseout(function () {
					cfg.onMouseOut.call(this);
				});

			});
		},
		destroy: function (options, cfg) {

			cfg = $.extend({}, defaults, options, cfg);

			return this.each(function () {

				var $this = $(this);
				if ($(cfg.window).length > 0) {
					$(cfg.window).remove();
				}

			})

		},
		show: function (options, cfg) {

			cfg = $.extend({}, defaults, options, cfg);

			return this.each(function () {
				var $this = $(this);

				$(cfg.window).show();

			});

		},
		hide: function (options, cfg) {
			cfg = $.extend({}, defaults, options, cfg);

			return this.each(function () {
				var $this = $(this);

				$(cfg.window).hide();

			});
		},
		create: function (options, cfg) {

			cfg = $.extend({}, defaults, options, cfg);

			return this.each(function () {

				var $this = $(this);

				if ($(cfg.window).length == 0) {
					var popupWindow = "<div id=" + cfg.window.substr(1) + "></div>";
					$(popupWindow).empty().appendTo("body");
				}
			})
		},
		update: function (content, options, cfg) {

			cfg = $.extend({}, defaults, options, cfg);

			return this.each(function () {

				$(cfg.window).empty();
				$(cfg.window).append(content);
			})
		}
	};

	// debug
	function debug($obj) {
		if (window.console && window.console.log) {
			window.console.log($obj);
		}
	}

	$.fn.tiptool = function (method) {

		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Метод с именем ' + method + ' не существует для jQuery.tiptool');
		}

	};

})(jQuery);