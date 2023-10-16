document.getElementById('validationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let password = document.getElementById('password').value;

  //Sprawdzenie adresu email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    alert('nieprawidłowy mail');
  }

  //Sprawdzenie numeru telefonu (9 cyfr, możliwość odstępów co trzy cyfry)
  const phoneRegex = /^(\d{3}\s?){2}\d{3}$/;
  if (!phoneRegex.test(phone)) {
    alert('nieprawidłowy telefon');
  }

  //Sprawdzenie hasła 8-20znaków, co najmniej 1 cyfra, 1 wielka litera
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,20}$/; //asercja wyprzedzająca
  if (!passwordRegex.test(password)) {
    alert('nieprawidłowe hasło');
    return;
  } else {
    alert('formularz wysłany');
  }
});
