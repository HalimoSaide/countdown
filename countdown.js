   const daysEl = document.getElementById("days");
   const hoursEl = document.getElementById("hours");
   const minsEl = document.getElementById("mins");
   const secondsEl = document.getElementById("seconds");
   const newDate = "28 dec 2022";
   const newTimeDate = new Date();
   const aviso = document.getElementById('aviso');
   const avisoText = document.getElementById("avisoText");
   const temporizador = document.getElementById("temporizador");
   let button = document.getElementById("button");

   let v;

   button.addEventListener("click", function(e) {


       countdown();

       console.log('pppp')

       console.log(23)


   });

   function countdown() {


       const currentDate = new Date();


       const totalSeconds = (newTimeDate - currentDate) / 1000;
       const days = Math.floor(totalSeconds / 3600 / 24);
       const hours = Math.floor(totalSeconds / 3600) % 24;
       const mins = Math.floor(totalSeconds / 60) % 60;
       const seconds = Math.floor(totalSeconds) % 60;



       daysEl.innerHTML = days;

       v = days;

       if (days < 1) {
           temporizador.style.display = "none";
           avisoText.innerHTML = `Revisao Expirada à ${newDate}`;

           aviso.style.display = "block";



       } else if (days > 0) {
           temporizador.style.display = "block";
           aviso.style.display = "none";



       }



   }






   function formatTime(time) {

       return time < 10 ? `0${time}` : time;
   }


   countdown();
   setInterval(countdown, 1000)