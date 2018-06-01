	//<li><input type="checkbox"><input type="text"><button type="button">Edit</button><button type="button">Delete</button></li>
$(document).ready(function(){
	$('#add').click(function(){
		var task = $('#task').val();
		if (task.length > 0){
			$('#task').val('');
			$('#todo').append('<li></li>');
			$('#todo li:last-child').append('<input class="check" type="checkbox">');
			$('#todo li:last-child').append('<input class="readonly" type="text" value="'+task+'" readonly>');
			$('#todo li:last-child').append('<button class="edit" type="button">Edit</button>');
			$('#todo li:last-child').append('<button class="delete" type="button">Delete</button>');
		}
	});

	$(document).on('click', '.edit', function(){
		if($(this).hasClass('save')){
			$(this).prev().prop('readOnly', true);
			$(this).prev().addClass('readonly')
			$(this).removeClass('save');
			$(this).text('Edit');
		} else {
			$(this).prev().prop('readOnly', false);
			$(this).prev().removeClass('readonly')
			$(this).addClass('save');
			$(this).text('Save');
		}
	});

	$(document).on('click', 'delete', function(){
		$(this).parent().remove();
	});

	$(document).on('click', '.check', function(e){
		var ch = $(this);
		if(!ch.hasClass('checked')){
			setTimeout(function(){
				var compl = ch.next().val();
				$('#completed').append('<li> <i class="fas fa-check"></i> '+compl+'</li>');
				ch.parent().remove();
			}, 500);
		}
	});

	// var add = document.getElementById('add');
	// add.onclick = function(){
	// 	var task = document.getElementById('task').value;
	// 	if (task.length > 0){
	// 		document.getElementById('task').value = '';
	// 		var li = document.createElement('li');
	// 		var checkbox = document.createElement('input');
	// 		checkbox.type = 'checkbox';
	// 		checkbox.addEventListener('click', function(e){
	// 			if(confirm('Точно?')){
	// 				var ch = this;
	// 				if(!checkbox.classList.contains('checked')){
	// 				    setTimeout(function(){
	// 				    	var compl = ch.nextSibling.value;
	// 				    	var li_compl = document.createElement('li');
	// 				    	li_compl.innerText = compl;
	// 				    	ch.parentElement.remove();
	// 				    	document.getElementById('completed').appendChild(li_compl);
	// 				}, 500);
	// 				    checkbox.classList.add('checked');
	// 				} else {
	// 					e.preventDefault();
	// 				}
	// 			}else{
	// 				e.preventDefault();
	// 			}
	// 		});
	// 		var text = document.createElement('input');
	// 		text.type = 'text';
	// 		text.value = task;
	// 		text.readOnly = true;
	// 		text.classList.add('readonly');
	// 		var edit = document.createElement('button');
	// 		edit.type = 'button';
	// 		edit.innerText = 'Edit';
	// 		edit.addEventListener('click', function(){
	// 			if(this.classList.contains('save')){
	// 				this.previousSibling.readOnly = true;
	// 				text.classList.add('readonly');
	// 				this.classList.remove('save');
	// 				this.innerText = 'Edit';
	// 			} else {

	// 				this.previousSibling.readOnly = false;
	// 				text.classList.remove('readonly');
	// 				this.classList.add('save');
	// 				this.innerText = 'Save';
	// 			}
	// 		});
	// 		var del = document.createElement('button');
	// 		del.innerText = 'Delete';
	// 		del.type = 'button';
	// 		del.addEventListener('click', function(){
	// 			li.remove();
	// 		});

	// 		/*Добавляем элементы в li*/
	// 		li.appendChild(checkbox);
	// 		li.appendChild(text);
	// 		li.appendChild(edit);
	// 		li.appendChild(del);

	// 		document.getElementById('todo').appendChild(li);
	// 	}
	// }
});
