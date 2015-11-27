$(document).ready(function () {

	var target = $(".hover"),
		popup = target.tiptool("popup").data("window");

	target.tiptool({
		onInit: function () {

			$(this)
				.tiptool("create")
				.tiptool("hide");
		},

		onClick: function () {

		},

		onMouseOver: function () {

			$(this)
				.tiptool("update", over())
				.tiptool("show");
		},

		onMouseMove: function (e) {

			var pos;
			pos = "x: " + e.pageX + " y: " + e.pageY;

			$(this)
				.tiptool("update", pos);

			$(popup)
				.css({
					"position": "absolute",
					"top": e.pageY + 20,
					"left": e.pageX + 30
				})
		},

		onMouseLeave: function (e) {

			$(this)
				.tiptool("hide")
		},

		onMouseOut: function () {

		}
	});

	$(".destroy").tiptool({
		onClick: function () {

			$(popup).tiptool("destroy");
		}
	});

	$(".init").tiptool({
		onClick: function () {

			$(".hover").tiptool("create");
		}
	});

	$(".state").tiptool({
		onClick: function () {

			var vis = target.tiptool("state").data("visible"),
				empty = target.tiptool("state").data("empty");

			target.html("popup is:<br>" + "visible: " + vis + "<br>" + " empty: " + empty);
		}
	});

	$(".clear").click(function () {

		target.empty();
	})

});

function over() {
	return "popup return"
}