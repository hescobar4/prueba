(function ($) {
	$.fn.formValidation = function (options) {
		if (typeof window.jQuery == "undefined") throw new Error('jquery.formValidation: jQuery v3+ is required.');
		if (typeof window.formValidation == "undefined") {
			window.formValidation = true;
		} else {
			window.formValidation = window.formValidation;
		}
		$('.fv-danger').removeClass('fv-danger');
		if (typeof options == "undefined") {
			options = {
				showSuccess: false,
				showError: true,
				returnData: false,
				dataValidate: true,
				clean: false
			}
		} else {
			if (typeof options.showError == "undefined") options.showError = true;
			if (typeof options.dataValidate == "undefined") options.dataValidate = true;
			if (typeof options.clean == "undefined") options.clean = false;
			if (typeof options.showError !== "boolean") throw new Error('jquery.formValidation: options.showError is not boolean ("' + options.showError + '").');
			if (typeof options.showSuccess !== "boolean" && typeof options.showSuccess !== "undefined") throw new Error('jquery.formValidation: options.showSuccess is not boolean ("' + options.showSuccess + '").');
			if (typeof options.returnData !== "boolean" && typeof options.returnData !== "undefined") throw new Error('jquery.formValidation: options.returnData is not boolean ("' + options.returnData + '").');
			if (typeof options.dataValidate !== "boolean" && typeof options.dataValidate !== "undefined") throw new Error('jquery.formValidation: options.dataValidate is not boolean ("' + options.dataValidate + '").');
			if (typeof options.clean !== "boolean") throw new Error('jquery.formValidation: options.clean is not boolean ("' + options.clean + '").');
		}
		if (this.length < 1) throw new Error('jquery.formValidation: Element not found, check your writing.');
		if (this[0].tagName.toUpperCase() !== "FORM") throw new Error('jquery.formValidation: The element is not a form.');
		//console.log(options);
		function email(string) {
			var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
			var msg = caract.test(string) !== true ? msg = "Ingrese un correo valido." : undefined;
			var response = {
				success: caract.test(string),
				message: msg
			}
			return (response);
		}

		function radio(string, t) {
			var checked = t.find('input[name=' + string + ']:checked').val();
			var success = true;
			var msg;
			if (typeof checked == 'undefined') {
				msg = t.find('input[name=' + string + ']').data('error');
				success = false;
			}
			var response = {
				success: success,
				message: msg
			}
			return (response);
		}

		function checkbox(string, t) {
			var checked = t.find('input[name=' + string + ']:checked').val();
			var success = true;
			var msg;
			if (typeof checked == 'undefined') {
				msg = t.find('input[name=' + string + ']').data('error');
				success = false;
			}
			var response = {
				success: success,
				message: msg
			}
			return (response);
		}

		function file(string, t) {
			var element = t.find('input[name=' + string + ']');
			var success = false;
			var msg = element.data('error');
			if (element[0].files.length > 0) {
				msg = undefined;
				success = true;
			}
			var response = {
				success: success,
				message: msg
			}
			return (response);
		}

		function letter(string, t) {
			var comp = t.find('input[name=' + string + ']');
			var text = comp.val();
			var out = true;
			var numbers = "0123456789";
			for (i = 0; i < text.length; i++) {
				if (numbers.indexOf(text.charAt(i), 0) != -1) {
					out = false;
				}
			}
			var response = {
				success: out,
				message: 'Ingrese solo letras.'
			}
			return (response);
		}

		function number(string, t) {
			var comp = t.find('input[name=' + string + ']');
			var text = comp.val();
			var out = true;
			var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ';
			for (i = 0; i < text.length; i++) {
				if (letters.indexOf(text.charAt(i), 0) != -1) {
					out = false;
				}
			}
			var response = {
				success: out,
				message: 'Ingrese solo n&uacute;meros.'
			}
			return (response);
		}

		var data = this.serializeArray();
		var radioImputs = this.find('input[type=radio][disabled!=disabled]');
		for (var i = 0; i < radioImputs.length; i++) {
			var name = radioImputs[i].getAttribute('name');
			var exist = false;
			for (var j = 0; j < data.length; j++) {
				if (data[j]['name'] == name) {
					exist = true;
				}
			}
			if (exist === false) {
				data[data.length] = {
					name: name
				}
			}
		}
		var checkboxImputs = this.find('input[type=checkbox][disabled!=disabled]');
		for (var i = 0; i < checkboxImputs.length; i++) {
			var name = checkboxImputs[i].getAttribute('name');
			var exist = false;
			for (var j = 0; j < data.length; j++) {
				if (data[j]['name'] == name) {
					exist = true;
				}
			}
			if (exist === false) {
				data[data.length] = {
					name: name
				}
			}
		}
		var fileInputs = this.find('input[type=file]');
		for (var i = 0; i < fileInputs.length; i++) {
			var name = fileInputs[i].getAttribute('name');
			var exist = false;
			for (var j = 0; j < data.length; j++) {
				if (data[j]['name'] == name) {
					exist = true;
				}
			}
			if (exist === false) {
				data[data.length] = {
					name: name
				}
			}
		}
		if (options.clean === true) {
			for (var i = 0; i < data.length; i++) {
				var compItem = $(this).find('[name=' + data[i]['name'] + ']');
				if (compItem.attr('type') !== 'hidden'
					&& compItem.attr('type') !== 'checkbox'
					&& compItem.attr('type') !== 'radio') {
					if (typeof compItem.data('default') !== 'undefined') {
						compItem.val(compItem.data('default'));
					} else {
						compItem.val("");
					}
				}
			}
			for (i = 0; i < radioImputs.length; i++) {
				radioImputs[i].checked = false;
				var name = radioImputs[i].getAttribute('name');
				var defaultValue = radioImputs[i].getAttribute('data-default');
				$('[name=' + name + '][value="' + defaultValue + '"]').prop('checked', true);
			}
			for (i = 0; i < checkboxImputs.length; i++) {
				checkboxImputs[i].checked = false;
				var name = checkboxImputs[i].getAttribute('name');
				var defaultValue = checkboxImputs[i].getAttribute('data-default');
				$('[name=' + name + '][value="' + defaultValue + '"]').prop('checked', true);
			}
			return;
		}
		var error = false;
		var msg;
		if (options.dataValidate === true) {
			for (var i = 0; i < data.length; i++) {
				var compItem = $(this).find('[name=' + data[i]['name'] + ']');
				if (compItem.attr('type') !== 'hidden' && compItem.data('validation') !== false || compItem.data('validation') == true) {
					if (typeof data[i]['value'] !== 'undefined' && data[i]['value'].trim() == '') {
						msg = compItem.data('error') !== undefined && compItem.data('error') !== ""
							? compItem.data('error')
							: 'Todos los campos marcados con * son obligatorios.';
						if (options.showError === true) {
							compItem.parent('div').removeClass('fv-success');
							compItem.parent('div').removeClass('fv-danger');
							compItem.parent('div').addClass('fv-danger');
						}
						compItem.focus();
						error = true;
						i = data.length + 1;
					} else {
						if (typeof compItem.data('type') !== "undefined") {
							var fun = compItem.data('type');
							var element = data[i]['value'];
							if (compItem.data('type') == 'radio' || compItem.data('type') == 'checkbox'
								|| compItem.data('type') == 'number' || compItem.data('type') == 'letter'
								|| compItem.data('type') == 'file') element = data[i]['name'];

							eval("var response = " + fun + "(element, $(this));");
							if (response.success !== true) {
								msg = response.message;
								compItem.parent('div').addClass('fv-danger');
								compItem.focus();
								error = true;
								i = data.length + 1;
							}
						}
					}
				}
				compItem.data('errno', error);
				if (options.showSuccess === true) {
					if (compItem.data('errno') !== true) {
						compItem.parent('div').removeClass('fv-success');
						compItem.parent('div').removeClass('fv-danger');
						compItem.parent('div').addClass('fv-success');
					}
				} else {
					compItem.parent('.fv-success').removeClass('fv-success');
				}
			}
		}
		var response = {};
		var data_object = {};
		if (options.returnData === true) {
			var object = {};
			for (var i = 0; i < data.length; i++) {
				if ($('[name=' + data[i]['name'] + ']').data('type') == 'file') {
					object[data[i]['name']] = $('[name=' + data[i]['name'] + ']')[0].files[0];
				} else {
					object[data[i]['name']] = $.trim(data[i]['value']);
				}
			}
			var data_object = {
				data: object
			}
		}
		var resp = {
			error: error,
			message: msg
		}
		response = $.extend(resp, data_object);
		return (response);
	};
})(jQuery);
