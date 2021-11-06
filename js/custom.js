(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const countDown = new Date("1925-02-23T10:00").getTime(),
        x = setInterval(function () {

            const now = new Date().getTime();

            const distance = countDown + now;
            document.getElementById('headline').innerText = `Мы вместе уже ${Math.floor(Math.floor(distance / (day)) / 365)} лет`;

            document.getElementById("days").innerText = Math.floor(distance / (day));
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            let min = Math.floor((distance % (hour)) / (minute)).toString();
            if (min === '0' || min === '15' || min === '30' ||min === '45') {
                document.querySelector('#img').classList.add('img1');
                document.querySelector('#img').classList.remove('img15');
            }

            if (min === '1' || min === '16' || min === '31' ||min === '46') {
                document.querySelector('#img').classList.add('img2');
                document.querySelector('#img').classList.remove('img1');
            }

            if (min === '2' || min === '17' || min === '32' ||min === '47') {
                document.querySelector('#img').classList.add('img3');
                document.querySelector('#img').classList.remove('img2');
            }

            if (min === '3' || min === '18' || min === '33' ||min === '48') {
                document.querySelector('#img').classList.add('img4');
                document.querySelector('#img').classList.remove('img3');
            }

            if (min === '4' || min === '19' || min === '34' ||min === '49') {
                document.querySelector('#img').classList.add('img5');
                document.querySelector('#img').classList.remove('img4');
            }

            if (min === '5' || min === '20' || min === '35' ||min === '50') {
                document.querySelector('#img').classList.add('img6');
                document.querySelector('#img').classList.remove('img5');
            }

            if (min === '6' || min === '21' || min === '36' ||min === '51') {
                document.querySelector('#img').classList.add('img7');
                document.querySelector('#img').classList.remove('img6');
            }

            if (min === '7' || min === '22' || min === '37' ||min === '52') {
                document.querySelector('#img').classList.add('img8');
                document.querySelector('#img').classList.remove('img7');
            }

            if (min === '8' || min === '23' || min === '38' ||min === '53') {
                document.querySelector('#img').classList.add('img9');
                document.querySelector('#img').classList.remove('img8');
            }

            if (min === '9' || min === '24' || min === '39' ||min === '54') {
                document.querySelector('#img').classList.add('img10');
                document.querySelector('#img').classList.remove('img9');
            }

            if (min === '10' || min === '25' || min === '40' ||min === '55') {
                document.querySelector('#img').classList.add('img11');
                document.querySelector('#img').classList.remove('img10');
            }

            if (min === '11' || min === '26' || min === '41' ||min === '56') {
                document.querySelector('#img').classList.add('img12');
                document.querySelector('#img').classList.remove('img11');
            }

            if (min === '12' || min === '27' || min === '42' ||min === '57') {
                document.querySelector('#img').classList.add('img13');
                document.querySelector('#img').classList.remove('img12');
            }

            if (min === '13' || min === '28' || min === '43' ||min === '58') {
                document.querySelector('#img').classList.add('img14');
                document.querySelector('#img').classList.remove('img13');
            }

            if (min === '14' || min === '29' || min === '44' ||min === '59') {
                document.querySelector('#img').classList.add('img15');
                document.querySelector('#img').classList.remove('img14');
            }



            //seconds
        }, 0)
}());