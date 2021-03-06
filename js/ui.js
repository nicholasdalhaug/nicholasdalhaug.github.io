document.addEventListener('DOMContentLoaded', function() {
  // top nav
  const menus = document.querySelectorAll('#cf-sidenav');
  M.Sidenav.init(menus, {edge: 'left'});
  
  // exercise form sidenav
  const exercise_form = document.querySelectorAll('#cf-exercise-form');
  M.Sidenav.init(exercise_form, {edge: 'right'});
  
  // routine form sidenav
  const routine_form = document.querySelectorAll('#cf-routine-form');
  M.Sidenav.init(routine_form, {edge: 'right'});
  
  // selects
  var selects = document.querySelectorAll('select');
  M.FormSelect.init(selects, {});
});









