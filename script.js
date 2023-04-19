function verificar(){
    var data = new Date();
    var ano = data.getFullYear();   //Recupera el año en el que estamos actualmente
    
    var fano = window.document.getElementById('txtano');//Recuerda, si vas a llamar a un id en tu HTML, DEBE SER ENTRE COMILLAS, NO SIN ELLAS.
    var res = window.document.getElementById('res');

    if(fano.value.lenght == 0 || fano.value > ano){
        console.log('[ERRO] Verifique os dados e tente novamente');

    }
    else{
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var ultima_letra = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Homem';
            ultima_letra = '';
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'css/images/foto-bebe-m.png');
            }
            else if(idade <21){
                //JOvem
                img.setAttribute('src', 'css/images/foto-jovem-m-png');

            }
            else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'css/images/foto-adulto-m.png');

            }
            else{
                //idoso
                img.setAttribute('src', 'css/images/foto-idoso-m.png');
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher';
            ultima_letra = 'a';
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'css/images/foto-bebe-f.png');
            }
            else if(idade <21){
                //JOvem
                img.setAttribute('src', 'css/images/foto-jovem-f.png');

            }
            else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'css/images/foto-adulto-f.png');
            }
            else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png');
            }

        }

        res.style.textAlign = 'center'  //Solamente se centrará cuando se ejecute el evento.

        res.innerHTML = `Você é um${ultima_letra} ${genero} com ${idade} anos.`;


        res.appendChild(img)    //Lo que hace es agregar un elemento nuevo a la clase, en este caso la imagen.

        img.style.display = 'block';
        img.style.marginLeft = 'auto';
        img.style.marginRight = 'auto';

        img.style.paddingTop = '1.3rem';
    }

    console.log("Funciona!")

}

