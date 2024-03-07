  //Envio de datos para ambos

  function enviar(){
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    const successMessage = document.getElementById('success-message');
  
    inputs.forEach(input => {
            input.value = ''; 
    });
  
    successMessage.style.display = 'block';
  
    setTimeout(() => {
            successMessage.style.display = 'none';
    }, 3000); 
  
  }

//Creacion y eliminacion de un nuevoInput
function agregarProducto() {
    var productosContainer = document.getElementById('productos-container');
    var nuevoInput = document.createElement('div');
    nuevoInput.classList.add('producto-input');
    nuevoInput.innerHTML = '<input type="text" class="form-control" placeholder="Nuevo Producto">' +
      '<span class="add-producto" onclick="eliminarProducto(this)">-</span>';
    productosContainer.appendChild(nuevoInput);
  }

  function eliminarProducto(elemento) {
    var productosContainer = document.getElementById('productos-container');
    productosContainer.removeChild(elemento.parentNode);
  }
