$(function () {
	
	  $('.box').draggable();
	   $('#box1').draggable({scroll:true ,revert:'invalid'});
	 $('#box2').draggable({axis:"x"});
	 $('#box4').draggable({containment:".container"});
	
	
	//droppable
	
	$('#droppable').droppable({
		accept:"#box1",
		drop:function() {
			$(this).text("when a box got attitude,dro it like it's hot!");
		}
	});
	
	//sortable
	
	$('#sortable').sortable({connectWith:"#sortableToo"});
	$('#sortableToo').sortable({connectWith:"#sortable"});
	
	//Accorian----
	
	$('#accordion').accordion({collapsible:true,heightStyle:"content"});
	
	//Darepicker---
	$('.date').datepicker({
		showOtherMonths: true,
		selectOtherMonths: true,
		showButtonPanel:true,
		changeMonth:true,
		changeYear:true
	});
	//TO DO LIST
	
	 $('#todoList ul').sortable({
		items:"li:not('.listTitle, .addItem')",
		 connectWith:"ul",
		 dropOnEmpty:true,
		 placeholder:"emptySpace"
	 });
	$('input').keydown(function(e){
		if(e.keyCode == 13){
			var item = $(this).val();
			$(this).parent().parent().append('<li>' + item + '</li>');
		$(this).val('');
			}
		$('#trash').droppable({
			drop:function(event, ui){
				ui.draggable.remove();
			}
		});
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});