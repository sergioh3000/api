const container = document.querySelector('#container');

        fetch('https://restcountries.com/v3.1/name/france')
            .then((res) => res.json())
            .then((data) => {
                data.forEach(countryData => {
                    const countryName = countryData.name.common;
                    const countryFlagUrl = countryData.flags.png;

                    const countryElement = document.createElement('p');


                    const flagImage = document.createElement('img');
                    flagImage.src = countryFlagUrl;
                    flagImage.alt = `Bandeira de ${countryName}`;


                    countryElement.appendChild(flagImage);
                    countryElement.innerHTML += ` ${countryName}`;

                    
                    container.appendChild(countryElement);
                });

                console.log(data);
            })
            .catch((err) => console.error(err));
