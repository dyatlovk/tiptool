$(document).ready(function () {

	$(".hover").tiptool({
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

			var pageX, pageY, pos;
			pageX = e.pageX;
			pageY = e.pageY;
			pos = "x: " + pageX + " y: " + pageY;

			$(this)
				.tiptool("update", pos)

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

			$(this).tiptool("destroy");
		}
	});

	$(".init").tiptool({
		onClick: function () {

			$(this).tiptool("create");
		}
	})

});

function over() {
	return "popup return"
}