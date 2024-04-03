import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import done from "../img/bi_check2-DONE.svg";
import close from "../img/bi_x-octagon.svg";
import "../css/snakebar.css";
const inputMs = document.querySelector('input[name="delay"]');
const fulfilled = document.querySelector('input[value="fulfilled"]');
const rejected = document.querySelector('input[value="rejected"]');
const form = document.querySelector('.form')
form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const inputValue = inputMs.value;
    const inputRadiofulfilled = fulfilled.checked;
    const inputRadiorejected = rejected.checked;
const promiseNew = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (inputRadiofulfilled){
            resolve(inputValue);
        } else if(inputRadiorejected){
            reject(inputValue);
        }
    }, inputValue);
    
});

    promiseNew
    .then (
        value => {iziToast.show({
            class: 'messageSnackbar',
            iconColor: 'white',
            message: `Fulfilled promise in ${value}ms`,
            iconUrl: done,
            messageColor: 'white',
            close: false,
            backgroundColor: '#59A10D',
            position: 'topRight',
        },)
    },)
    .catch(
        error => {iziToast.show({
            class: 'messageErrorSnackbar',
            iconColor: 'white',
            message: `Rejected promise in ${error}ms`,
            iconUrl: close,
            messageColor: 'white',
            close: false,
            backgroundColor: '#EF4040',
            position: 'topRight',
        }) 
        }
    ); 
    inputMs.value = "";
    fulfilled.checked = false;
    rejected.checked = false;

    },)
   
    // ------------second logic, but it is not yet ready-----------------

// console.log(fulfilled.checked)
//    function snackbar (delay, fulfilled) {
//     const promiseSecondTry = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if (fulfilled.checked) {
//                 resolve(delay)
//             }else{
//                 reject(delay)
//             }
//         },delay)
        
//    }); return promiseSecondTry;
// }

   
//    form.addEventListener('submit', (event)=> {
//         event.preventDefault();
//         const test1 =  snackbar(inputMs.value, fulfilled);
//         test1.then(tr).catch(fl)
//         inputMs.value = "";
//     })

//    function tr (data) {
//     console.log(`v ${data}`)
//    }

//    function fl (data) {
//     console.log(`f ${data}`)
//    }
