const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  putData();
});

async function putData() {
  // var inum = document.getElementById("inum").value;
  //var permits = document.getElementById("permits").value;
  var user_email = document.getElementById('user_email').value;
  var country = document.getElementById('country').value;
  var country_code = document.getElementById('country_code').value;

  if (user_email.length < 5 || country.length < 4 || country.length < 2) {
    return alert('Please provide all the information');
  }

  var api = 'http://bn2021.pythonanywhere.com/api/vip-request-web/';

  var params = {
    //inum: inum,
    //permits: permits,
    user_email: user_email,
    country: country,
    country_code: country_code,
  };

  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();
    alert('Your data has been submitted!');
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}
