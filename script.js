// boxOne and boxTwo code.
const nameError = document.getElementById('name-error');
const F_H_NameError = document.getElementById('F-H-name-error');
const phoneError = document.getElementById('phone-error');
const alt_phoneError = document.getElementById('alt-phone-error');
const ageError = document.getElementById('age-error');
const genderError = document.getElementById('gender-error');
const addressError = document.getElementById('address-error');

const adharCardError = document.getElementById('AdharCard-error');
const submitError = document.getElementById('subit-error');

const usrName = document.getElementById('usrName');
const usrF_H_Name = document.getElementById('usrF-H-Name');
const usrPhone = document.getElementById('usrPhone');
const usrAlt_Phone = document.getElementById('usrAlt-Phone');
const usrAge = document.getElementById('usrAge');
const usrGender = document.getElementById('usrGender');
const usrAddress = document.getElementById('usrAddress');
const usrAdharCard = document.getElementById('usrAdharCard');
const submitBtn = document.getElementById('smitBtn');


function usrNameFunc() {
    if (usrName.value.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false
    }
    if (usrName.value.length >= 3) {
        nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function usrF_H_NameFunc() {
    if (usrF_H_Name.value.length == 0) {
        F_H_NameError.innerHTML = 'Name is required';
        return false
    }
    if (usrF_H_Name.value.length >= 3) {
        F_H_NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function usrGenderFunc() {
    if (usrGender.value.length == 0) {
        genderError.innerHTML = 'Gender is required';
        return false
    }
    if (usrGender.value.length >= 3) {
        genderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function usrPhoneFunc() {
    if (usrPhone.value.length == 0) {
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if (usrPhone.value.length !== 10) {
        phoneError.innerHTML = 'Please no. should be 10 degits';
        return false;
    }
    if (usrPhone.value.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function usrAltPhoneFunc() {
    if (usrAlt_Phone.value.length == 0) {
        alt_phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if (usrAlt_Phone.value.length !== 10) {
        alt_phoneError.innerHTML = 'Please no. should be 10 degits';
        return false;
    }
    if (usrAlt_Phone.value.match(/^[0-9]{10}$/)) {
        alt_phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function usrAddressFunc() {
    if (usrAddress.value.length == 0) {
        addressError.innerHTML = 'Address is required';
        return false
    }
    if (usrAddress.value.length >= 6) {
        addressError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function usrAgeFunc() {

    if (usrAge.value.length == 0) {
        ageError.innerHTML = 'Date Of Birth is required';
        return false;
    }
    if (usrAge.value.length !== 10) {
        ageError.innerHTML = 'Please Enter like this 01.01.2000';
        return false;
    }
    ageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}


function usrAdharCardFunc() {

    if (usrAdharCard.value.length == 0) {
        adharCardError.innerHTML = 'AdharCard No. is required';
        return false;
    }
    if (usrAdharCard.value.length !== 12) {
        adharCardError.innerHTML = `You enter ${usrAdharCard.value.length}/12`;
        return false;
    }

    adharCardError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


submitBtn.onclick = function () {

    if (!usrNameFunc() || !usrF_H_NameFunc() || !usrGenderFunc() || !usrPhoneFunc() || !usrAltPhoneFunc() || !usrAddressFunc() || !usrAgeFunc() || !usrAdharCardFunc()) {

        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the error';

        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000)

        return false;
    }
}


let counter = 3;
let intervalOne;

function startCounter() {
    if (intervalOne) {
        clearInterval(intervalOne);
        intervalOne = undefined;
    } else {
        intervalOne = setInterval(function () {

            let addValues = (counter < 10) ? '0' + counter : counter;
            submitBtn.innerHTML = "00:" + addValues;

            if (counter === 0) {
                clearInterval(intervalOne);
                intervalOne = undefined;
                submitBtn.innerHTML = "Save Data";
                counter = 3;
            } else {
                counter--;
            }

        }, 1000);
    }
}


// form data submit into google excel sheet

const message = document.querySelector(".msg");
const badgeForm = document.forms['form1'];


const url = "https://script.google.com/macros/s/AKfycbx753TkgUvJ5r0s2DHRGwwyqG82SMN5zdhZQ8VHAc7BW1IYosngbRV6g0yzB7Vh4g-O/exec";

badgeForm.addEventListener("submit", async (evt) => {

    evt.preventDefault();

    startCounter();

    try {

        const res = await fetch(url, { method: 'POST', body: new FormData(badgeForm) })

        if (res.ok) {

            message.innerHTML = "Thank You for Submit!";

            setTimeout(function () {
                message.innerHTML = "";
            }, 5000);

            badgeForm.reset();

            nameError.innerHTML = "";
            F_H_NameError.innerHTML = "";
            phoneError.innerHTML = "";
            alt_phoneError.innerHTML = "";
            ageError.innerHTML = "";
            genderError.innerHTML = "";
            addressError.innerHTML = "";
            adharCardError.innerHTML = "";
            message.style.color = "green";

        } else {
            throw new Error(`Server responded with ${res.status}`);
        };


    } catch (error) {
        console.error('Error!', error.message);
    };
});





// form data get into google excel sheet

const searchBtn = document.getElementById('searchBtn');
const searchName = document.getElementById('searchName');
const fath_Hus_Name = document.getElementById('Fath_Hus_Name');
const resultBox = document.querySelector('.resultBox');
const searchIcon = document.querySelector(".searchIcon");
const sewadarSearchError = document.getElementById('sewadar-search-error');

searchBtn.addEventListener("click", function () {

    resultBox.innerHTML = "";

    searchBtn.style.display = 'none';
    sewadarSearchError.style.display = "none";
    searchIcon.style.display = 'block';

    if (searchName.value.length == 0 && fath_Hus_Name.value.length == 0) {
        searchName.classList.add('nullError');
        fath_Hus_Name.classList.add('nullError');
        searchBtn.style.display = 'block';
        searchIcon.style.display = 'none';
        sewadarSearchError.style.display = "none";

    } else {
        searchName.classList.remove('nullError');
        fath_Hus_Name.classList.remove('nullError');
        sewadarSearchError.style.display = "none";

        setTimeout(() => {

            const URL = "https://script.google.com/macros/s/AKfycbzRDpURxxVEJB7D_HdrXPI5LibXghdbhknhils1EWgLdOjoeoJl_HmcFsoYOrbgegLV/exec";
            fetch(URL)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                    let val1 = searchName.value;
                    let val2 = fath_Hus_Name.value;

                    data.content.filter(item => {
                        if (item.includes(val1) && item.includes(val2)) {

                            searchIcon.style.display = 'none';
                            sewadarSearchError.style.display = "none";
                            searchBtn.style.display = 'block';

                            const div = document.createElement('div');
                            div.classList.add('resultShow');

                            div.innerHTML =
                                `<div class="center">
                        <h2 class="showName">${item[0]}</h2>
                        <span id="versis">W/D/S/o</span>
                        <h3 class="father_h_Name">${item[1]}</h3>
                        </div>
                        <div class="data">
                        <div class="box">
                        <p>Gender : </p>
                        <span> ${item[2]}</span>
                        </div>
                        <div class="box">
                        <p>Date of Birth : </p>
                        <span> ${item[3]}</span>
                        </div>
                        <div class="box">
                        <p>Phone : </p>
                        <span> ${item[4]}</span>
                        </div>
                        <div class="box">
                        <p>Alternative Phone No. : </p>
                        <span> ${item[5]}</span>
                        </div>
                        <div class="box">
                        <p>Address : </p>
                        <span> ${item[6]}</span>
                        </div>
                        <div class="box">
                        <p>AdharCard No. : </p>
                        <span> ${item[7]}</span>
                        </div>
                        </div>`

                            resultBox.appendChild(div);

                        } else {
                            searchIcon.style.display = 'none';
                            searchBtn.style.display = 'block';

                            if (resultBox.innerHTML !== "") {
                                sewadarSearchError.style.display = "none";
                            } else {
                                sewadarSearchError.style.display = "block";
                            };
                        };

                    });

                    searchName.value = "";
                    fath_Hus_Name.value = "";

                });

        }, 1500);

    }


});





// boxThree code.
const initiationNameError = document.getElementById('initiation-name-error');
const initiation_F_H_NameError = document.getElementById('initiation-F-H-name-error');
const initiationPhoneError = document.getElementById('initiation-phone-error');
const initiationAltPhoneError = document.getElementById('initiation-alt-phone-error');
const qualificationError = document.getElementById('qualification-error');
const occupationError = document.getElementById('occupation-error');
const initiationDateError = document.getElementById('initiation-Date-error');
const initiationPlaceError = document.getElementById('initiation-Place-error');
const initiationByError = document.getElementById('initiation-By-error');
const initiationGenderError = document.getElementById('initiation-gender-error');
const initiationAddressError = document.getElementById('initiation-address-error');
const initiationSubmitError = document.getElementById('initiation-subit-error');


const initiationName = document.getElementById('initiationName');
const initiation_F_H_Name = document.getElementById('initiation-F-H-Name');
const initiationPhone = document.getElementById('initiationPhone');
const initiationAltPhone = document.getElementById('initiation-Alt-Phone');
const initiationGender = document.getElementById('initiationGender');
const initiationAddress = document.getElementById('initiationAddress');
const initiationQualification = document.getElementById('Initiation-Qualification');
const initiationOccupation = document.getElementById('Initiation-Occupation');
const initiationDate = document.getElementById('Initiation-Date');
const initiationPlace = document.getElementById('Initiation-Place');
const initiationByyName = document.getElementById('initiation-Byy');
const iniSmitBtn = document.getElementById('iniSmitBtn');




function initiationNameFunc() {
    if (initiationName.value.length == 0) {
        initiationNameError.innerHTML = 'Name is required';
        return false
    }
    if (initiationName.value.length >= 3) {
        initiationNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function initiation_F_H_NameFunc() {
    if (initiation_F_H_Name.value.length == 0) {
        initiation_F_H_NameError.innerHTML = 'Name is required';
        return false
    }
    if (initiation_F_H_Name.value.length >= 3) {
        initiation_F_H_NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function initiationGenderFunc() {
    if (initiationGender.value.length == 0) {
        initiationGenderError.innerHTML = 'Gender is required';
        return false
    }
    if (initiationGender.value.length >= 3) {
        initiationGenderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function initiationPhoneFunc() {
    if (initiationPhone.value.length == 0) {
        initiationPhoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if (initiationPhone.value.length !== 10) {
        initiationPhoneError.innerHTML = 'Please no. should be 10 degits';
        return false;
    }
    if (initiationPhone.value.match(/^[0-9]{10}$/)) {
        initiationPhoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function initiationAltPhoneFunc() {
    if (initiationAltPhone.value.length == 0) {
        initiationAltPhoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if (initiationAltPhone.value.length !== 10) {
        initiationAltPhoneError.innerHTML = 'Please no. should be 10 degits';
        return false;
    }
    if (initiationAltPhone.value.match(/^[0-9]{10}$/)) {
        initiationAltPhoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function initiationAddressFunc() {
    if (initiationAddress.value.length == 0) {
        initiationAddressError.innerHTML = 'Address is required';
        return false
    }
    if (initiationAddress.value.length >= 6) {
        initiationAddressError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function iniQualificationFunc() {

    if (initiationQualification.value.length == 0) {
        qualificationError.innerHTML = 'Qualification is required';
        return false;
    }
    if (initiationQualification.value.length > 3) {
        qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

}

function iniOccupationFunc() {
    if (initiationOccupation.value.length == 0) {
        occupationError.innerHTML = 'Occupation is required';
        return false
    }
    if (initiationOccupation.value.length >= 3) {
        occupationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function initiationDateFunc() {
    if (initiationDate.value.length == 0) {
        initiationDateError.innerHTML = 'Initiation Date is required';
        return false
    }

    if (initiationDate.value.length !== 10) {
        initiationDateError.innerHTML = 'Please Date should be like - 01.01.2000';
        return false;
    }

    if (initiationDate.value.length == 10) {
        initiationDateError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function initiationPlaceFunc() {
    if (initiationPlace.value.length == 0) {
        initiationPlaceError.innerHTML = 'Initiation Place is required';
        return false
    }
    if (initiationPlace.value.length >= 4) {
        initiationPlaceError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function initiationKisSeFunc() {
    if (initiationByyName.value.length == 0) {
        initiationByError.innerHTML = 'Initiation By is required';
        return false
    }
    if (initiationByyName.value.length >= 6) {
        initiationByError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}




iniSmitBtn.onclick = function () {

    if (!initiationNameFunc() || !initiation_F_H_NameFunc() || !initiationGenderFunc() || !initiationPhoneFunc() || !initiationAltPhoneFunc() || !initiationAddressFunc() || !iniQualificationFunc() || !iniOccupationFunc() || !initiationDateFunc() || !initiationPlaceFunc() || !initiationKisSeFunc()) {

        initiationSubmitError.style.display = 'block';
        initiationSubmitError.innerHTML = 'Please fix the error';

        setTimeout(function () {
            initiationSubmitError.style.display = 'none';
        }, 3000)

        return false;
    }
}


let counting = 3;
let intervalTwo;

function startCount() {
    if (intervalTwo) {
        clearInterval(intervalTwo);
        intervalTwo = undefined;
    } else {
        intervalTwo = setInterval(function () {

            let addValues = (counting < 10) ? '0' + counting : counting;
            iniSmitBtn.innerHTML = "00:" + addValues;

            if (counting === 0) {
                clearInterval(intervalTwo);
                intervalTwo = undefined;
                iniSmitBtn.innerHTML = "Save Data";
                counting = 3;
            } else {
                counting--;
            }

        }, 910);
    }
}





// initiation form data submit into google excel sheet

const initiationMessage = document.querySelector(".ini-msg");
const initiationForm = document.forms['form2'];


const initiationUrl = "https://script.google.com/macros/s/AKfycbxa6vSUU_O-AXC_cfYimJLC42DbVXHNkTBwM46pz79Op6XblBPfpZqO06eDTrXGuC5IeQ/exec";

initiationForm.addEventListener("submit", async (evt) => {

    evt.preventDefault();

    startCount();

    try {
        const response = await fetch(initiationUrl, { method: 'POST', body: new FormData(initiationForm) })

        if (response.ok) {

            initiationMessage.innerHTML = "Thank You for Submit!";

            setTimeout(function () {
                initiationMessage.innerHTML = "";
            }, 5000);

            initiationForm.reset();

            initiationNameError.innerHTML = "";
            initiation_F_H_NameError.innerHTML = "";
            initiationPhoneError.innerHTML = "";
            initiationAltPhoneError.innerHTML = "";
            initiationAddressError.innerHTML = "";
            initiationGenderError.innerHTML = "";
            qualificationError.innerHTML = "";
            occupationError.innerHTML = "";
            initiationDateError.innerHTML = "";
            initiationPlaceError.innerHTML = "";
            initiationByError.innerHTML = "";
            initiationSubmitError.innerHTML = "";
        } else {
            throw new Error(`Server responded with ${response.status}`);
        }

    } catch (error) {
        console.error('Error!', error.message);
    }
})




// initiation form data get into google excel sheet

const iniSearchBtn = document.getElementById('iniSearchBtn');
const iniSearchName = document.getElementById('iniSearchName');
const iniFath_Hus_Name = document.getElementById('iniFath_Hus_Name');
const initiationResultBox = document.querySelector('.initiationResultBox');
const initiationSearchIcon = document.querySelector(".iniSearchIcon");
const initiationSearchError = document.getElementById('initiation-search-error');

iniSearchBtn.addEventListener("click", function () {

    initiationResultBox.innerHTML = "";

    iniSearchBtn.style.display = 'none';
    initiationSearchError.style.display = "none";
    initiationSearchIcon.style.display = 'block';

    if (iniSearchName.value.length == 0 && iniFath_Hus_Name.value.length == 0) {
        iniSearchName.classList.add('nullError');
        iniFath_Hus_Name.classList.add('nullError');
        iniSearchBtn.style.display = 'block';
        initiationSearchIcon.style.display = 'none';
        initiationSearchError.style.display = "none";
    } else {
        iniSearchName.classList.remove('nullError');
        iniFath_Hus_Name.classList.remove('nullError');
        initiationSearchError.style.display = "none";


        setTimeout(() => {
            const initiationURL = "https://script.google.com/macros/s/AKfycbxa6vSUU_O-AXC_cfYimJLC42DbVXHNkTBwM46pz79Op6XblBPfpZqO06eDTrXGuC5IeQ/exec";
            fetch(initiationURL)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                    let val1 = iniSearchName.value;
                    let val2 = iniFath_Hus_Name.value;


                    data.content.filter(item => {

                        if (item.includes(val1) && item.includes(val2)) {

                            initiationSearchError.style.display = "none";
                            initiationSearchIcon.style.display = 'none';
                            iniSearchBtn.style.display = 'block';


                            const div = document.createElement('div');

                            div.classList.add('resultShow');

                            div.innerHTML =
                                `<div class="center">
                                <h2 class="showName">${item[0]}</h2>
                                <span id="versis">W/D/S/o</span>
                                <h3 class="father_h_Name">${item[1]}</h3>
                               </div>
                               <div class="data">
                                <div class="box">
                                    <p>Gender : </p>
                                    <span> ${item[2]}</span>
                                </div>
                                <div class="box">
                                    <p>Phone : </p>
                                    <span>${item[3]}</span>
                                </div>
                                <div class="box">
                                    <p>Alternative Phone No. : </p>
                                    <span>${item[4]}</span>
                                </div>
                                <div class="box">
                                    <p>Address : </p>
                                    <span>${item[5]}</span>
                                </div>
                                <div class="box">
                                    <p>Qualification : </p>
                                    <span>${item[6]}</span>
                                </div>
                                <div class="box">
                                    <p>Occupation : </p>
                                    <span>${item[7]}</span>
                                </div>
                                <div class="box">
                                    <p>Initiation Date : </p>
                                    <span>${item[8]}</span>
                                </div>
                                <div class="box">
                                    <p>Initiation Place : </p>
                                    <span>${item[9]}</span>
                                </div>
                                <div class="box">
                                    <p>Initiation By : </p>
                                    <span>${item[10]}</span>
                                </div>
                             </div>`;

                            initiationResultBox.appendChild(div);


                        } else {

                            initiationSearchIcon.style.display = 'none';
                            iniSearchBtn.style.display = 'block';

                            if (initiationResultBox.innerHTML !== "") {
                                initiationSearchError.style.display = "none";
                            } else {
                                initiationSearchError.style.display = "block";
                            };
                        };

                    });

                    iniSearchName.value = "";
                    iniFath_Hus_Name.value = "";
                });


        }, 1500);


    };

});







// this code excute after page load.

const mainName = document.querySelector(".pageLoad");
const boxOne = document.getElementById("boxOne");
const boxTwo = document.getElementById("boxTwo");
const boxThree = document.getElementById("boxThree");
const replyInput = document.querySelector('.replyInput');
const usrInput = document.getElementById('usrInput');
const timerRunner = document.getElementById('timeRunner');
const inrTime = document.querySelector('.inrTime');
const rssbError = document.getElementById('rssbError');


let count = 10;
let interval;

function startCounting() {
    if (interval) {
        clearInterval(interval);
        interval = undefined;
    } else {
        interval = setInterval(function () {
            let addValue = (count < 10) ? '0' + count : count;
            inrTime.innerHTML = "00:" + addValue;

            if (count === 0) {
                clearInterval(interval);
                interval = undefined;
                count = 10;
            } else {
                count--;
            }
        }, 1000);
    }
}






var str = "";

function timing() {


    var timer = setInterval(() => {
        str = usrInput.value;
    }, 1000);

    setTimeout(() => {
        clearInterval(timer);
        pageLoadFunc();
    }, 11000);
}

function pageLoadFunc() {
    mainName.style.display = "block";
    boxOne.style.display = "none";
    boxTwo.style.display = "none";
    timerRunner.style.display = "none";


    if (str === "Radha Soami Ji") {
        replyInput.classList.remove('responseError');
        setTimeout(() => {
            boxOne.style.display = "block";
            boxTwo.style.display = "block";
            mainName.style.display = "none";
        }, 500);
    } else {

        if (str.length == 0) {
            rssbError.style.display = "none";
            return false;
        }

        if (str !== "Radha Soami Ji") {
            rssbError.style.display = "block";
            replyInput.classList.add('responseError');
            return false;
        }

        rssbError.style.display = "none";
        return true;
    }

}



replyInput.addEventListener("click", function () {
    timing();
    startCounting();
    str = usrInput.value = "";
    replyInput.classList.remove('responseError');
    timerRunner.style.display = "block";
    rssbError.style.display = "none";
});





const homeBtn = document.getElementById('homeBtn');
const initionBtn = document.getElementById('initionBtn');

homeBtn.addEventListener("click", function () {
    boxTwo.style.display = 'block';
    boxThree.style.display = 'none';
})

initionBtn.addEventListener("click", function () {
    boxTwo.style.display = 'none';
    boxThree.style.display = 'block';
})



