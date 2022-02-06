function handleChangePassword() {
  document.querySelectorAll('.alert_error').forEach(e => e.parentNode.removeChild(e))
  document.querySelectorAll('.element_wrapper').forEach(n => n.classList.remove('element_wrapper_error'));
  document.querySelectorAll('.element_wrapper .error').forEach(e => e.parentNode.removeChild(e))
}