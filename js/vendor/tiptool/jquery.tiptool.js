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
		}
	};
	var cfg;

	var methods = {
		init: function (cfg) {

			cfg = $.extend({}, defaults, cfg);

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

		destroy: function (cfg) {

			cfg = $.extend({}, defaults, cfg);

			return this.each(function () {

				var $this = $(this),
					data = $this.data();

				$this.removeData('tiptool');
				$(cfg.window).remove();
			})

		},

		show: function (cfg) {

			cfg = $.extend({}, defaults, cfg);

			return this.each(function () {

				var $this = $(this);

				$(cfg.window).show();
			});

		},

		hide: function (cfg) {
			cfg = $.extend({}, defaults, cfg);

			return this.each(function () {

				var $this = $(this);

				$(cfg.window).hide();
			});
		},

		create: function (cfg) {

			cfg = $.extend({}, defaults, cfg);

			return this.each(function () {

				var $this = $(this);

				if ($(cfg.window).length == 0) {

					var popupWindow = "<div id=" + cfg.window.substr(1) + "></div>";
					$(popupWindow).empty().appendTo("body");
				}
			})
		},

		update: function (content, cfg) {

			cfg = $.extend({}, defaults, cfg);

			return this.each(function () {

				$(cfg.window).empty();
				$(cfg.window).append(content);
			})
		},

		popup: function (cfg) {

			cfg = $.extend({}, defaults, cfg);

			return this.each(function () {

				var $this = $(this);

				$this.data({
					window: cfg.window
				});
			})
		},

		state: function (cfg) {

			cfg = $.extend({}, defaults, cfg);

			return this.each(function () {

				var $this = $(this);

				$this.data({
					visible: $(cfg.window).filter(":visible").length,
					empty: $(cfg.window).filter(":empty").length
				});

				debug($this.data());
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
			$.error('Method ' + method + ' does not exist for jQuery.tiptool');
		}

	};

})(jQuery);