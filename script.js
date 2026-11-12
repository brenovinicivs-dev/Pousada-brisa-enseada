const btnReserva = document.getElementById('btn_reserva');
const modalReserva = document.getElementById('modal_reserva');
const btnFechar = document.getElementById('btn_fechar');
const formReserva = document.getElementById('form_reserva');


btnReserva.addEventListener('click', () => {
    modalReserva.showModal();
});

btnFechar.addEventListener('click', () => {
    modalReserva.close();
});


formReserva.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Reserva enviada com suscesso!!!')
    formReserva.close();
    formReserva.reset();
});

