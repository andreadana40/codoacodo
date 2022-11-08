const fetchApp = (planetas) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fcb3c860d4msha100d8b3fc74e25p1c686cjsn7e1ee0cc5eb2',
            'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com'
        }
    };
   
 

    return fetch('https://planets-by-api-ninjas.p.rapidapi.com/v1/planets?name=Mars', options)
      .then(res => res.json())
      .catch(err => console.log(err))
};

  const $form = document.querySelector('#form');
  const $input = document.querySelector('#input');
  const $submit = document.querySelector('#submit');
  const $results = document.querySelector('#results');

  $form.addEventListener('submit', async function (event) { // 


    event.preventDefault();//evita que se recargue la pagina

    const { value } = $input;

    if (!value) return

    $submit.setAttribute('disabled', '');
    $submit.setAttribute('aria-busy', 'true');

    const infoApi = await fetchApp(value);

    if (infoApi) {
      $results.innerHTML = JSON.stringify(infoApi, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy');
  })