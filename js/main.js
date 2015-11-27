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

			console.log(target.tiptool("state").data("isEmpty"));
		},

		onMouseOver: function () {

			$(this)
				.tiptool("update", over())
				.tiptool("show");
		},

		onMouseMove: function (e) {

			var pageX, pageY, pos;
			pageX = e.pageX;
			pageY = e.pageY;
			pos = "x: " + pageX + " y: " + pageY;

			$(this)
				.tiptool("update", pos);

			$(popup)
				.css({
					"position": "absolute",
					"top": pageY + 20,
					"left": pageX + 30
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

			target.tiptool("state").data()
		}
	})

});

function over() {
	return "popup return"
}