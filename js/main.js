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
				.tiptool("update", "demo");
		},
		onMouseMove: function (e) {

			$(this)
				.tiptool("show");
		},
		onMouseLeave: function (e) {

			$(this)
				.tiptool("hide")
		}
	});

});