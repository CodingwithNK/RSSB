// boxOne and boxTwo code.
const centreError = document.getElementById('centre-error');
const nameError = document.getElementById('name-error');
const F_H_NameError = document.getElementById('F-H-name-error');
const genderError = document.getElementById('gender-error');
const ageError = document.getElementById('age-error');
const phoneError = document.getElementById('phone-error');
const alt_phoneError = document.getElementById('alt-phone-error');
const adharCardError = document.getElementById('AdharCard-error');
const addressError = document.getElementById('address-error');
const submitError = document.getElementById('subit-error');

const usrName = document.getElementById('usrName');
const usrF_H_Name = document.getElementById('usrF-H-Name');
const usrPhone = document.getElementById('usrPhone');
const usrAlt_Phone = document.getElementById('usrAlt-Phone');
const usrAge = document.getElementById('usrAge');
const usrGender = document.getElementById('usrGender');
const usrAdharCard = document.getElementById('usrAdharCard');
const submitBtn = document.getElementById('smitBtn');



function chooseCentreName() {

    const selectCentreName = document.getElementById("selectCentreName").value;
    const addressContainer = document.getElementById("addressContainer");

    if (selectCentreName == "SelectCentreName") {

        addressContainer.innerHTML = "";
        centreError.innerHTML = "";


    } else if (selectCentreName == "Mohindergarh") {
        addressContainer.innerHTML = "";
        centreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="addressOfCentre" class="Addrs">Your Address :</label>
        <select name="Address" id="addressOfCentre">
        <option value="Mohindergarh Haryana - 123029">Mohindergarh Haryana - 123029</option>
        <option value="Diwan Colony - Mohindergarh (Hr.) - 123029">Diwan Colony - Mohindergarh (Hr.) - 123029</option>
        <option value="Kurhawata - Mohindergarh (Hr.) - 123029">Kurhawata - Mohindergarh (Hr.) - 123029</option>
        <option value="Zerpur - Mohindergarh (Hr.) - 123029">Zerpur - Mohindergarh (Hr.) - 123029</option>
        <option value="Balana - Mohindergarh (Hr.) - 123029">Balana - Mohindergarh (Hr.) - 123029</option>
        <option value="Rajawas - Mohindergarh (Hr.) - 123029">Rajawas - Mohindergarh (Hr.) - 123029</option>
        <option value="Khatodara - Mohindergarh (Hr.) - 123029">Khatodara - Mohindergarh (Hr.) - 123029</option>
        <option value="Khatod - Mohindergarh (Hr.) - 123029">Khatod - Mohindergarh (Hr.) - 123029</option>
        <option value="Khaira - Mohindergarh (Hr.) - 123029">Khaira - Mohindergarh (Hr.) - 123029</option>
        <option value="Rathiwas - Mohindergarh (Hr.) - 123029">Rathiwas - Mohindergarh (Hr.) - 123029</option>
        <option value="Paiga - Mohindergarh (Hr.) - 123029">Paiga - Mohindergarh (Hr.) - 123029</option>
        <option value="Jatwas - Mohindergarh (Hr.) - 123029">Jatwas - Mohindergarh (Hr.) - 123029</option>
        <option value="Beri - Mohindergarh (Hr.) - 123029">Beri - Mohindergarh (Hr.) - 123029</option>
        <option value="Bhandor Unchi - Mohindergarh (Hr.) - 123029">Bhandor Unchi - Mohindergarh(Hr.) - 123029</option>
        <option value="Sainipura - Mohindergarh (Hr.) - 123029">Sainipura - Mohindergarh (Hr.) - 123029</option>
        <option value="Bucholi - Mohindergarh (Hr.) - 123029">Bucholi - Mohindergarh (Hr.) - 123029</option>
        <option value="Sigra - Mohindergarh (Hr.) - 123029">Sigra - Mohindergarh (Hr.) - 123029</option>
        <option value="Jhagroli - Mohindergarh (Hr.) - 123029">Jhagroli - Mohindergarh (Hr.) - 123029</option>
        <option value="Buchawas - Mohindergarh (Hr.) - 123029">Buchawas - Mohindergarh (Hr.) - 123029</option>
        <option value="Rewasa - Mohindergarh (Hr.) - 123029">Rewasa - Mohindergarh (Hr.) - 123029</option>
        <option value="Sisoth - Mohindergarh (Hr.) - 123029">Sisoth - Mohindergarh (Hr.) - 123029</option>
        <option value="Palri - Mohindergarh (Hr.) - 123029">Palri - Mohindergarh (Hr.) - 123029</option>
        <option value="Palripanihara - Mohindergarh (Hr.) - 123029">Palripanihara - Mohindergarh(Hr.) - 123029</option>
        <option value="Bhagdana - Mohindergarh (Hr.) - 123029">Bhagdana - Mohindergarh (Hr.) - 123029</option>
        <option value="Majra Kalan - Mohindergarh (Hr.) - 123029">Majra Kalan - Mohindergarh (Hr.) - 123029</option>
        <option value="Majra Khurd - Mohindergarh (Hr.) - 123029">Majra Khurd - Mohindergarh (Hr.) - 123029</option>
        <option value="Jhook - Mohindergarh (Hr.) - 123029">Jhook - Mohindergarh (Hr.) - 123029</option>
        <option value="Pali - Mohindergarh (Hr.) - 123029">Pali - Mohindergarh (Hr.) - 123029</option>
        <option value="Lawan - Mohindergarh (Hr.) - 123029">Lawan - Mohindergarh (Hr.) - 123029</option>
        </select>
        <span id="address-error"><i class="fa-solid fa-circle-check"></i></span>`;

        addressContainer.appendChild(div);

    } else if (selectCentreName == "Bawania") {
        addressContainer.innerHTML = "";
        centreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="addressOfCentre" class="Addrs">Your Address :</label>
        <select name="Address" id="addressOfCentre">
            <option value="Bawania - Mohindergarh (Hr.) - 123034">Bawania - Mohindergarh (Hr.) - 123034</option>
            <option value="Khera - Bawania (Hr.) - 123034">Khera - Bawania (Hr.) - 123034</option>
            <option value="Gagarwas - Bawania (Hr.) - 123034">Gagarwas - Bawania (Hr.) - 123034</option>
            <option value="Sundrah - Bawania (Hr.) - 123034">Sundrah - Bawania (Hr.) - 123034</option>
            <option value="Bachini - Bawania (Hr.) - 123034">Bachini - Bawania (Hr.) - 123034</option>
            <option value="Nangal Harnath - Bawania (Hr.) - 123034">Nangal Harnath - Bawania (Hr.) - 123034</option>
            <option value="Meghanwas - Bawania (Hr.) - 123034">Meghanwas - Bawania (Hr.) - 123034</option>
            <option value="Surjanwas - Bawania (Hr.) - 123034">Surjanwas - Bawania (Hr.) - 123034</option>
        </select>
        <span id="address-error"><i class="fa-solid fa-circle-check"></i></span>`;

        addressContainer.appendChild(div);


    } else if (selectCentreName == "Bairawas") {
        addressContainer.innerHTML = "";
        centreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="addressOfCentre" class="Addrs">Your Address :</label>
        <select name="Address" id="addressOfCentre">
        <option value="Bairawas - Mohindergarh (Hr.) - 123028">Bairawas - Mohindergarh (Hr.) - 123028</option>
        <option value="Palh - Bairawas (Hr.) - 123028">Palh - Bairawas (Hr.) - 123028</option>
        <option value="Nangal Sirohi - Bairawas (Hr.) - 123028">Nangal Sirohi - Bairawas (Hr.) - 123028</option>
        <option value="Nihalawas - Bairawas (Hr.) - 123028">Nihalawas - Bairawas (Hr.) - 123028</option>
        <option value="Kuksi - Bairawas (Hr.) - 123028">Kuksi - Bairawas (Hr.) - 123028</option>
        <option value="Deroli Ahir - Bairawas (Hr.) - 123028">Deroli Ahir - Bairawas (Hr.) - 123028</option>
        <option value="Deroli Jat - Bairawas (Hr.) - 123028">Deroli Jat - Bairawas (Hr.) - 123028</option>
        <option value="Kherki - Bairawas (Hr.) - 123028">Kherki - Bairawas (Hr.) - 123028</option>
        <option value="Churina - Bairawas (Rj.) - 333515">Churina - Bairawas (Rj.) - 333515</option>
        <option value="Nangal Katha - Bairawas (Hr.) - 123001">Nangal Katha - Bairawas (Hr.) - 123001</option>
        <option value="Shyopura - Bairawas (Rj.) - 333515">Shyopura - Bairawas (Rj.) - 333515</option>
        <option value="Pal - Bairawas (Hr.) - 123028">Pal - Bairawas (Hr.) - 123028</option>
        <option value="Gadania - Bairawas (Hr.) - 123028">Gadania - Bairawas (Hr.) - 123028</option>
        <option value="Dhani Bhaloth - Bairawas (Rj.) - 333515">Dhani Bhaloth - Bairawas (Rj.) - 333515</option>
        <option value="Kakra - Bairawas (Rj.) - 333515">Kakra - Bairawas (Rj.) - 333515</option>
        <option value="Duloth - Bairawas (Hr.) - 123028">Duloth - Bairawas (Hr.) - 123028</option>
        <option value="Duloth Ahir - Bairawas (Hr.) - 123028">Duloth Ahir - Bairawas (Hr.) - 123028</option>
        <option value="Nimbi - Bairawas (Hr.) - 123028">Nimbi - Bairawas (Hr.) - 123028</option>
        <option value="Chhajiawas - Bairawas (Hr.) - 123028">Chhajiawas - Bairawas (Hr.) - 123028</option>
        <option value="Khairoli - Bairawas (Hr.) - 123028">Khairoli - Bairawas (Hr.) - 123028</option>
        </select>
        <span id="address-error"><i class="fa-solid fa-circle-check"></i></span>`;

        addressContainer.appendChild(div);

    } else if (selectCentreName == "Zerpur") {
        addressContainer.innerHTML = "";
        centreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="addressOfCentre" class="Addrs">Your Address :</label>
        <select name="Address" id="addressOfCentre">
            <option value="Zerpur - Mohindergarh (Hr.) - 123029">Zerpur - Mohindergarh (Hr.) - 123029</option>
            <option value="Mandola - Zerpur (Hr.) - 123029">Mandola - Zerpur (Hr.) - 123029</option>
            <option value="Dholi - Zerpur (Hr.) - 123029">Dholi - Zerpur (Hr.) - 123029</option>
            <option value="Devrali - Zerpur (Hr.) - 123029">Devrali - Zerpur (Hr.) - 123029</option>
            <option value="Ushmapur - Zerpur (Hr.) - 123029">Ushmapur - Zerpur (Hr.) - 123029</option>
            <option value="Nangal Mala - Zerpur (Hr.) - 123024">Nangal Mala - Zerpur (Hr.) - 123024</option>
            <option value="Madhogarh - Zerpur (Hr.) - 123029">Madhogarh - Zerpur (Hr.) - 123029</option>
            <option value="Gadarwas - Zerpur (Hr.) - 123029">Gadarwas - Zerpur (Hr.) - 123029</option>
            <option value="Rajawas - Zerpur (Hr.) - 123029">Rajawas - Zerpur (Hr.) - 123029</option>
            <option value="Khatodara - Zerpur (Hr.) - 123029">Khatodara - Zerpur (Hr.) - 123029</option>
            <option value="Balana - Zerpur (Hr.) - 123029">Balana - Zerpur (Hr.) - 123029</option>
            <option value="Nimbira - Zerpur (Hr.) - 123028">Nimbira - Zerpur (Hr.) - 123028</option>
            <option value="Dhador - Zerpur (Hr.) - 123028">Dhador - Zerpur (Hr.) - 123028</option>
            <option value="Balaicha - Zerpur (Hr.) - 123028">Balaicha - Zerpur (Hr.) - 123028</option>
        </select>
        <span id="address-error"><i class="fa-solid fa-circle-check"></i></span>`;

        addressContainer.appendChild(div);

    } else if (selectCentreName == "Satnali") {
        addressContainer.innerHTML = "";
        centreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="addressOfCentre" class="Addrs">Your Address :</label>
        <select name="Address" id="addressOfCentre">
           <option value="Satnali - Mohindergarh (Hr.) - 123024">Satnali - Mohindergarh (Hr.) - 123024</option>
           <option value="Shampura - Satnali (Hr.) - 123024">Shampura - Satnali (Hr.) - 123024</option>
           <option value="Patharwa - Satnali (Hr.) - 123024">Patharwa - Satnali (Hr.) - 123024</option>
           <option value="Bas - Satnali (Hr.) - 123024">Bas - Satnali (Hr.) - 123024</option>
           <option value="Surheti - Satnali (Hr.) - 123024">Surheti - Satnali (Hr.) - 123024</option>
           <option value="Digrota - Satnali (Hr.) - 123024">Digrota - Satnali (Hr.) - 123024</option>
           <option value="Nanwan - Satnali (Hr.) - 123024">Nanwan - Satnali (Hr.) - 123024</option>
           <option value="Gopalwas - Satnali (Hr.) - 123024">Gopalwas - Satnali (Hr.) - 123024</option>
           <option value="Sohadi - Satnali (Hr.) - 123024">Sohadi - Satnali (Hr.) - 123024</option>
           <option value="Jarwa - Satnali (Hr.) - 123024">Jarwa - Satnali (Hr.) - 123024</option>
           <option value="Kadma - Satnali (Hr.) - 127308">Kadma - Satnali (Hr.) - 127308</option>
        </select>
        <span id="address-error"><i class="fa-solid fa-circle-check"></i></span>`;

        addressContainer.appendChild(div);

    } else if (selectCentreName == "Sehlang") {
        addressContainer.innerHTML = "";
        centreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="addressOfCentre" class="Addrs">Your Address :</label>
        <select name="Address" id="addressOfCentre">
            <option value="Sehlang - Mohindergarh (Hr.) - 123027">Sehlang - Mohindergarh (Hr.) - 123027</option>
            <option value="Kheri Talwana - Sehlang (Hr.) - 123027">Kheri Talwana - Sehlang (Hr.) - 123027</option>
            <option value="Nautana - Sehlang (Hr.) - 123027">Nautana - Sehlang (Hr.) - 123027</option>
            <option value="Pota - Sehlang (Hr.) - 123027">Pota - Sehlang (Hr.) - 123027</option>
            <option value="Siana - Sehlang (Hr.) - 123027">Siana - Sehlang (Hr.) - 123027</option>
            <option value="Uchat - Sehlang (Hr.) - 123027">Uchat - Sehlang (Hr.) - 123027</option>
            <option value="Baghot - Sehlang (Hr.) - 123027">Baghot - Sehlang (Hr.) - 123027</option>
            <option value="Bawana - Sehlang (Hr.) - 123029">Bawana - Sehlang (Hr.) - 123029</option>
            <option value="Kharkhara - Sehlang (Hr.) - 123029">Kharkhara - Sehlang (Hr.) - 123029</option>
            <option value="Bhurjat - Sehlang (Hr.) - 123029">Bhurjat - Sehlang (Hr.) - 123029</option>
            <option value="Bassai - Sehlang (Hr.) - 123029">Bassai - Sehlang (Hr.) - 123029</option>
        </select>
        <span id="address-error"><i class="fa-solid fa-circle-check"></i></span>`;

        addressContainer.appendChild(div);
    };

};


function usrNameFunc() {
    if (usrName.value.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false
    }
    if (usrName.value.length <= 3) {
        nameError.innerHTML = 'Enter Valid Name';
        return false
    }
    if (usrName.value.length > 3) {
        nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

};

function usrF_H_NameFunc() {
    if (usrF_H_Name.value.length == 0) {
        F_H_NameError.innerHTML = 'Name is required';
        return false
    }
    if (usrF_H_Name.value.length <= 3) {
        F_H_NameError.innerHTML = 'Enter Valid Name';
        return false
    }
    if (usrF_H_Name.value.length > 3) {
        F_H_NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
};


function selectGenderFun() {
    const genderSelectBtn = document.getElementById("genderSelectBtn").value;

    if (genderSelectBtn == "SelectGender") {
        genderError.innerHTML = "";

    } else {
        genderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };
};


// date ko stop kar diya future date select nahi hogi.
const userDob = document.getElementById("usrAge");
userDob.max = new Date().toISOString().split("T")[0];

function usrDobFunc() {
    const dobValue = usrAge.value;

    if (dobValue.length == 0) {
        ageError.innerHTML = "";
    } else {
        ageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };

};

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
};


submitBtn.onclick = function () {

    if (!usrNameFunc() || !usrF_H_NameFunc() || !usrPhoneFunc() || !usrAltPhoneFunc() || !usrAdharCardFunc()) {

        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the error';

        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000)

        return false;
    }
};


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

            centreError.innerHTML = "";
            nameError.innerHTML = "";
            F_H_NameError.innerHTML = "";
            genderError.innerHTML = "";
            phoneError.innerHTML = "";
            alt_phoneError.innerHTML = "";
            ageError.innerHTML = "";
            adharCardError.innerHTML = "";
            message.style.color = "green";

            const CentreName = document.getElementById("selectCentreName").value;
            const addressBox = document.getElementById("addressContainer");

            if (CentreName == "SelectCentreName") {
                addressBox.innerHTML = "";
            };

        } else {
            throw new Error(`Server responded with ${res.status}`);
        };


    } catch (error) {
        console.error('Error!', error.message);
    };
});




// ----------- sewadar information get from google sheet -------------

const searchBtn = document.getElementById('searchBtn');
const searchCentreName = document.getElementById('searchSelectCentreName');
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

    if (searchName.value.length == 0 && fath_Hus_Name.value.length == 0 && searchCentreName.value == "SelectCentreName") {
        searchName.classList.add('nullError');
        fath_Hus_Name.classList.add('nullError');
        searchCentreName.classList.add('nullError');

        searchBtn.style.display = 'block';
        searchIcon.style.display = 'none';
        sewadarSearchError.style.display = "none";

    } else {
        searchName.classList.remove('nullError');
        fath_Hus_Name.classList.remove('nullError');
        searchCentreName.classList.remove('nullError');
        sewadarSearchError.style.display = "none";

        setTimeout(() => {

            const URL = "https://script.google.com/macros/s/AKfycbzRDpURxxVEJB7D_HdrXPI5LibXghdbhknhils1EWgLdOjoeoJl_HmcFsoYOrbgegLV/exec";
            fetch(URL)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                    let val1 = searchCentreName.value;
                    let val2 = searchName.value;
                    let val3 = fath_Hus_Name.value;

                    data.content.filter(item => {
                        if (item.includes(val1) && item.includes(val2) && item.includes(val3)) {

                            searchIcon.style.display = 'none';
                            sewadarSearchError.style.display = "none";
                            searchBtn.style.display = 'block';

                            // datetime format ko date me convert karega or actual date print karega.
                            const dateStrng = item[4];
                            const dateFromSheet = new Date(dateStrng);
                            dateFromSheet.setDate(dateFromSheet.getDate() + 1);
                            const formattedDate = dateFromSheet.toISOString().split('T')[0];


                            const div = document.createElement('div');
                            div.classList.add('resultShow');

                            div.innerHTML =
                                `<div class="center">
                        <h1 class="centreName">${item[0]}</h1>
                        <h2 class="showName">${item[1]}</h2>
                        <span id="versis">W/D/S/o</span>
                        <h3 class="father_h_Name">${item[2]}</h3>
                        </div>
                        <div class="data">
                        <div class="box">
                        <p>Gender : </p>
                        <span> ${item[3]}</span>
                        </div>
                        <div class="box">
                        <p>Date of Birth : </p>
                        <span>${formattedDate}</span>
                        </div>
                        <div class="box">
                        <p>Phone : </p>
                        <span> ${item[5]}</span>
                        </div>
                        <div class="box">
                        <p>Alternative Phone No. : </p>
                        <span> ${item[6]}</span>
                        </div>
                        <div class="box">
                        <p>AdharCard No. : </p>
                        <span> ${item[7]}</span>
                        </div>
                        <div class="box">
                        <p>Address : </p>
                        <span> ${item[8]}</span>
                        </div>
                        </div>`;

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
                    searchCentreName.value = "SelectCentreName";
                });

        }, 1500);

    }


});





// boxThree code.
const initiationCentreError = document.getElementById('initiation-centre-error');
const initiationNameError = document.getElementById('initiation-name-error');
const initiation_F_H_NameError = document.getElementById('initiation-F-H-name-error');
const initiationGenderError = document.getElementById('initiation-gender-error');
const initiationPhoneError = document.getElementById('initiation-phone-error');
const initiationAltPhoneError = document.getElementById('initiation-alt-phone-error');
const initiationAddressError = document.getElementById('initiation-address-error');
const qualificationError = document.getElementById('qualification-error');
const occupationError = document.getElementById('occupation-error');
const initiationDateError = document.getElementById('initiation-Date-error');
const initiationPlaceError = document.getElementById('initiation-Place-error');
const initiationByError = document.getElementById('initiation-By-error');
const initiationSubmitError = document.getElementById('initiation-subit-error');


const initiationName = document.getElementById('initiationName');
const initiation_F_H_Name = document.getElementById('initiation-F-H-Name');
const initiationPhone = document.getElementById('initiationPhone');
const initiationAltPhone = document.getElementById('initiation-Alt-Phone');
const initiationGender = document.getElementById('initiationGender');
const initiationAddress = document.getElementById('initiationAddress');
const initiationQualification = document.getElementById('Initiation-Qualification');
const initiationOccupation = document.getElementById('Initiation-Occupation');
const initiationDate = document.getElementById('initiation-Date');
const initiationPlace = document.getElementById('Initiation-Place');
const initiationByyName = document.getElementById('initiation-Byy');
const iniSmitBtn = document.getElementById('iniSmitBtn');



function chooseInitiationCentreName() {

    const selectInitiationCentreName = document.getElementById("selectInitiationCentreName").value;
    const initiationAddressContainer = document.getElementById("initiationAddressContainer");

    if (selectInitiationCentreName == "SelectCentreName") {

        initiationAddressContainer.innerHTML = "";
        initiationCentreError.innerHTML = "";


    } else if (selectInitiationCentreName == "Mohindergarh") {
        initiationAddressContainer.innerHTML = "";
        initiationCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="addressOfCentre" class="Addrs">Your Address :</label>
    <select name="Initiation-Address" id="addressOfCentre">
    <option value="Mohindergarh Haryana - 123029">Mohindergarh Haryana - 123029</option>
    <option value="Diwan Colony - Mohindergarh (Hr.) - 123029">Diwan Colony - Mohindergarh (Hr.) - 123029</option>
    <option value="Kurhawata - Mohindergarh (Hr.) - 123029">Kurhawata - Mohindergarh (Hr.) - 123029</option>
    <option value="Zerpur - Mohindergarh (Hr.) - 123029">Zerpur - Mohindergarh (Hr.) - 123029</option>
    <option value="Balana - Mohindergarh (Hr.) - 123029">Balana - Mohindergarh (Hr.) - 123029</option>
    <option value="Rajawas - Mohindergarh (Hr.) - 123029">Rajawas - Mohindergarh (Hr.) - 123029</option>
    <option value="Khatodara - Mohindergarh (Hr.) - 123029">Khatodara - Mohindergarh (Hr.) - 123029</option>
    <option value="Khatod - Mohindergarh (Hr.) - 123029">Khatod - Mohindergarh (Hr.) - 123029</option>
    <option value="Khaira - Mohindergarh (Hr.) - 123029">Khaira - Mohindergarh (Hr.) - 123029</option>
    <option value="Rathiwas - Mohindergarh (Hr.) - 123029">Rathiwas - Mohindergarh (Hr.) - 123029</option>
    <option value="Paiga - Mohindergarh (Hr.) - 123029">Paiga - Mohindergarh (Hr.) - 123029</option>
    <option value="Jatwas - Mohindergarh (Hr.) - 123029">Jatwas - Mohindergarh (Hr.) - 123029</option>
    <option value="Beri - Mohindergarh (Hr.) - 123029">Beri - Mohindergarh (Hr.) - 123029</option>
    <option value="Bhandor Unchi - Mohindergarh (Hr.) - 123029">Bhandor Unchi - Mohindergarh(Hr.) - 123029</option>
    <option value="Sainipura - Mohindergarh (Hr.) - 123029">Sainipura - Mohindergarh (Hr.) - 123029</option>
    <option value="Bucholi - Mohindergarh (Hr.) - 123029">Bucholi - Mohindergarh (Hr.) - 123029</option>
    <option value="Sigra - Mohindergarh (Hr.) - 123029">Sigra - Mohindergarh (Hr.) - 123029</option>
    <option value="Jhagroli - Mohindergarh (Hr.) - 123029">Jhagroli - Mohindergarh (Hr.) - 123029</option>
    <option value="Buchawas - Mohindergarh (Hr.) - 123029">Buchawas - Mohindergarh (Hr.) - 123029</option>
    <option value="Rewasa - Mohindergarh (Hr.) - 123029">Rewasa - Mohindergarh (Hr.) - 123029</option>
    <option value="Sisoth - Mohindergarh (Hr.) - 123029">Sisoth - Mohindergarh (Hr.) - 123029</option>
    <option value="Palri - Mohindergarh (Hr.) - 123029">Palri - Mohindergarh (Hr.) - 123029</option>
    <option value="Palripanihara - Mohindergarh (Hr.) - 123029">Palripanihara - Mohindergarh(Hr.) - 123029</option>
    <option value="Bhagdana - Mohindergarh (Hr.) - 123029">Bhagdana - Mohindergarh (Hr.) - 123029</option>
    <option value="Majra Kalan - Mohindergarh (Hr.) - 123029">Majra Kalan - Mohindergarh (Hr.) - 123029</option>
    <option value="Majra Khurd - Mohindergarh (Hr.) - 123029">Majra Khurd - Mohindergarh (Hr.) - 123029</option>
    <option value="Jhook - Mohindergarh (Hr.) - 123029">Jhook - Mohindergarh (Hr.) - 123029</option>
    <option value="Pali - Mohindergarh (Hr.) - 123029">Pali - Mohindergarh (Hr.) - 123029</option>
    <option value="Lawan - Mohindergarh (Hr.) - 123029">Lawan - Mohindergarh (Hr.) - 123029</option>
    </select>
    <span id="address-error"><i class="fa-solid fa-circle-check"></i></span>`;

        initiationAddressContainer.appendChild(div);

    } else if (selectInitiationCentreName == "Bawania") {
        initiationAddressContainer.innerHTML = "";
        initiationCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="addressOfCentre" class="Addrs">Your Address :</label>
    <select name="Initiation-Address" id="addressOfCentre">
        <option value="Bawania - Mohindergarh (Hr.) - 123034">Bawania - Mohindergarh (Hr.) - 123034</option>
        <option value="Khera - Bawania (Hr.) - 123034">Khera - Bawania (Hr.) - 123034</option>
        <option value="Gagarwas - Bawania (Hr.) - 123034">Gagarwas - Bawania (Hr.) - 123034</option>
        <option value="Sundrah - Bawania (Hr.) - 123034">Sundrah - Bawania (Hr.) - 123034</option>
        <option value="Bachini - Bawania (Hr.) - 123034">Bachini - Bawania (Hr.) - 123034</option>
        <option value="Nangal Harnath - Bawania (Hr.) - 123034">Nangal Harnath - Bawania (Hr.) - 123034</option>
        <option value="Meghanwas - Bawania (Hr.) - 123034">Meghanwas - Bawania (Hr.) - 123034</option>
        <option value="Surjanwas - Bawania (Hr.) - 123034">Surjanwas - Bawania (Hr.) - 123034</option>
    </select>
    <span id="address-error"><i class="fa-solid fa-circle-check"></i></span>`;

        initiationAddressContainer.appendChild(div);


    } else if (selectInitiationCentreName == "Bairawas") {
        initiationAddressContainer.innerHTML = "";
        initiationCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="addressOfCentre" class="Addrs">Your Address :</label>
    <select name="Initiation-Address" id="addressOfCentre">
    <option value="Bairawas - Mohindergarh (Hr.) - 123028">Bairawas - Mohindergarh (Hr.) - 123028</option>
    <option value="Palh - Bairawas (Hr.) - 123028">Palh - Bairawas (Hr.) - 123028</option>
    <option value="Nangal Sirohi - Bairawas (Hr.) - 123028">Nangal Sirohi - Bairawas (Hr.) - 123028</option>
    <option value="Nihalawas - Bairawas (Hr.) - 123028">Nihalawas - Bairawas (Hr.) - 123028</option>
    <option value="Kuksi - Bairawas (Hr.) - 123028">Kuksi - Bairawas (Hr.) - 123028</option>
    <option value="Deroli Ahir - Bairawas (Hr.) - 123028">Deroli Ahir - Bairawas (Hr.) - 123028</option>
    <option value="Deroli Jat - Bairawas (Hr.) - 123028">Deroli Jat - Bairawas (Hr.) - 123028</option>
    <option value="Kherki - Bairawas (Hr.) - 123028">Kherki - Bairawas (Hr.) - 123028</option>
    <option value="Churina - Bairawas (Rj.) - 333515">Churina - Bairawas (Rj.) - 333515</option>
    <option value="Nangal Katha - Bairawas (Hr.) - 123001">Nangal Katha - Bairawas (Hr.) - 123001</option>
    <option value="Shyopura - Bairawas (Rj.) - 333515">Shyopura - Bairawas (Rj.) - 333515</option>
    <option value="Pal - Bairawas (Hr.) - 123028">Pal - Bairawas (Hr.) - 123028</option>
    <option value="Gadania - Bairawas (Hr.) - 123028">Gadania - Bairawas (Hr.) - 123028</option>
    <option value="Dhani Bhaloth - Bairawas (Rj.) - 333515">Dhani Bhaloth - Bairawas (Rj.) - 333515</option>
    <option value="Kakra - Bairawas (Rj.) - 333515">Kakra - Bairawas (Rj.) - 333515</option>
    <option value="Duloth - Bairawas (Hr.) - 123028">Duloth - Bairawas (Hr.) - 123028</option>
    <option value="Duloth Ahir - Bairawas (Hr.) - 123028">Duloth Ahir - Bairawas (Hr.) - 123028</option>
    <option value="Nimbi - Bairawas (Hr.) - 123028">Nimbi - Bairawas (Hr.) - 123028</option>
    <option value="Chhajiawas - Bairawas (Hr.) - 123028">Chhajiawas - Bairawas (Hr.) - 123028</option>
    <option value="Khairoli - Bairawas (Hr.) - 123028">Khairoli - Bairawas (Hr.) - 123028</option>
    </select>
    <span id="address-error"><i class="fa-solid fa-circle-check"></i></span>`;

        initiationAddressContainer.appendChild(div);

    } else if (selectInitiationCentreName == "Zerpur") {
        initiationAddressContainer.innerHTML = "";
        initiationCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="addressOfCentre" class="Addrs">Your Address :</label>
    <select name="Initiation-Address" id="addressOfCentre">
        <option value="Zerpur - Mohindergarh (Hr.) - 123029">Zerpur - Mohindergarh (Hr.) - 123029</option>
        <option value="Mandola - Zerpur (Hr.) - 123029">Mandola - Zerpur (Hr.) - 123029</option>
        <option value="Dholi - Zerpur (Hr.) - 123029">Dholi - Zerpur (Hr.) - 123029</option>
        <option value="Devrali - Zerpur (Hr.) - 123029">Devrali - Zerpur (Hr.) - 123029</option>
        <option value="Ushmapur - Zerpur (Hr.) - 123029">Ushmapur - Zerpur (Hr.) - 123029</option>
        <option value="Nangal Mala - Zerpur (Hr.) - 123024">Nangal Mala - Zerpur (Hr.) - 123024</option>
        <option value="Madhogarh - Zerpur (Hr.) - 123029">Madhogarh - Zerpur (Hr.) - 123029</option>
        <option value="Gadarwas - Zerpur (Hr.) - 123029">Gadarwas - Zerpur (Hr.) - 123029</option>
        <option value="Rajawas - Zerpur (Hr.) - 123029">Rajawas - Zerpur (Hr.) - 123029</option>
        <option value="Khatodara - Zerpur (Hr.) - 123029">Khatodara - Zerpur (Hr.) - 123029</option>
        <option value="Balana - Zerpur (Hr.) - 123029">Balana - Zerpur (Hr.) - 123029</option>
        <option value="Nimbira - Zerpur (Hr.) - 123028">Nimbira - Zerpur (Hr.) - 123028</option>
        <option value="Dhador - Zerpur (Hr.) - 123028">Dhador - Zerpur (Hr.) - 123028</option>
        <option value="Balaicha - Zerpur (Hr.) - 123028">Balaicha - Zerpur (Hr.) - 123028</option>
    </select>
    <span id="address-error"><i class="fa-solid fa-circle-check"></i></span>`;

        initiationAddressContainer.appendChild(div);

    } else if (selectInitiationCentreName == "Satnali") {
        initiationAddressContainer.innerHTML = "";
        initiationCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="addressOfCentre" class="Addrs">Your Address :</label>
    <select name="Initiation-Address" id="addressOfCentre">
       <option value="Satnali - Mohindergarh (Hr.) - 123024">Satnali - Mohindergarh (Hr.) - 123024</option>
       <option value="Shampura - Satnali (Hr.) - 123024">Shampura - Satnali (Hr.) - 123024</option>
       <option value="Patharwa - Satnali (Hr.) - 123024">Patharwa - Satnali (Hr.) - 123024</option>
       <option value="Bas - Satnali (Hr.) - 123024">Bas - Satnali (Hr.) - 123024</option>
       <option value="Surheti - Satnali (Hr.) - 123024">Surheti - Satnali (Hr.) - 123024</option>
       <option value="Digrota - Satnali (Hr.) - 123024">Digrota - Satnali (Hr.) - 123024</option>
       <option value="Nanwan - Satnali (Hr.) - 123024">Nanwan - Satnali (Hr.) - 123024</option>
       <option value="Gopalwas - Satnali (Hr.) - 123024">Gopalwas - Satnali (Hr.) - 123024</option>
       <option value="Sohadi - Satnali (Hr.) - 123024">Sohadi - Satnali (Hr.) - 123024</option>
       <option value="Jarwa - Satnali (Hr.) - 123024">Jarwa - Satnali (Hr.) - 123024</option>
       <option value="Kadma - Satnali (Hr.) - 127308">Kadma - Satnali (Hr.) - 127308</option>
    </select>
    <span id="address-error"><i class="fa-solid fa-circle-check"></i></span>`;

        initiationAddressContainer.appendChild(div);

    } else if (selectInitiationCentreName == "Sehlang") {
        initiationAddressContainer.innerHTML = "";
        initiationCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="addressOfCentre" class="Addrs">Your Address :</label>
    <select name="Initiation-Address" id="addressOfCentre">
        <option value="Sehlang - Mohindergarh (Hr.) - 123027">Sehlang - Mohindergarh (Hr.) - 123027</option>
        <option value="Kheri Talwana - Sehlang (Hr.) - 123027">Kheri Talwana - Sehlang (Hr.) - 123027</option>
        <option value="Nautana - Sehlang (Hr.) - 123027">Nautana - Sehlang (Hr.) - 123027</option>
        <option value="Pota - Sehlang (Hr.) - 123027">Pota - Sehlang (Hr.) - 123027</option>
        <option value="Siana - Sehlang (Hr.) - 123027">Siana - Sehlang (Hr.) - 123027</option>
        <option value="Uchat - Sehlang (Hr.) - 123027">Uchat - Sehlang (Hr.) - 123027</option>
        <option value="Baghot - Sehlang (Hr.) - 123027">Baghot - Sehlang (Hr.) - 123027</option>
        <option value="Bawana - Sehlang (Hr.) - 123029">Bawana - Sehlang (Hr.) - 123029</option>
        <option value="Kharkhara - Sehlang (Hr.) - 123029">Kharkhara - Sehlang (Hr.) - 123029</option>
        <option value="Bhurjat - Sehlang (Hr.) - 123029">Bhurjat - Sehlang (Hr.) - 123029</option>
        <option value="Bassai - Sehlang (Hr.) - 123029">Bassai - Sehlang (Hr.) - 123029</option>
    </select>
    <span id="address-error"><i class="fa-solid fa-circle-check"></i></span>`;

        initiationAddressContainer.appendChild(div);
    };

};


function initiationNameFunc() {
    if (initiationName.value.length == 0) {
        initiationNameError.innerHTML = 'Name is required';
        return false
    }
    if (initiationName.value.length <= 3) {
        initiationNameError.innerHTML = 'Enter Valid Name';
        return false
    }
    if (initiationName.value.length > 3) {
        initiationNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
};

function initiation_F_H_NameFunc() {
    if (initiation_F_H_Name.value.length == 0) {
        initiation_F_H_NameError.innerHTML = 'Name is required';
        return false
    }
    if (initiation_F_H_Name.value.length <= 3) {
        initiation_F_H_NameError.innerHTML = 'Enter Valid Name';
        return false
    }
    if (initiation_F_H_Name.value.length > 3) {
        initiation_F_H_NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
};


function initiationSelectGenderFun() {
    const initiationGenderSelect = document.getElementById("initiationGenderSelect").value;

    if (initiationGenderSelect == "SelectGender") {
        initiationGenderError.innerHTML = "";
    } else {
        initiationGenderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };
};


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
};


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
};


function initiationQualificationFun() {
    const initiationQualification = document.getElementById("initiationQualification").value;

    if (initiationQualification == "SelectQualification") {
        qualificationError.innerHTML = "";
    } else {
        qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };
};


function initiationQualificationFun() {

    const initiationQualification = document.getElementById("initiationQualification").value;
    const qualificationContainer = document.getElementById("qualificationContainer");

    if (initiationQualification == "SelectQualification") {

        qualificationContainer.innerHTML = "";
        qualificationError.innerHTML = "";


    } else if (initiationQualification == "DIPLOMA") {
        qualificationContainer.innerHTML = "";
        qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="initiationDegree" class="degree">Degree :</label>
    <select name="Degree" id="initiationDegree">
         <option value="A.M.I.E">A.M.I.E</option>
         <option value="AYURVEDIC">AYURVEDIC</option>
         <option value="COMPUTER">COMPUTER</option>
         <option value="D.H.M.S">D.H.M.S</option>
         <option value="DPHARMA">DPHARMA</option>
         <option value="ITI">ITI</option>
         <option value="JBT">JBT</option>
         <option value="LIBRARY SCIENCE">LIBRARY SCIENCE</option>
         <option value="MANAGEMENT">MANAGEMENT</option>
         <option value="PGDCA">PGDCA</option>
         <option value="OTHERS">OTHERS</option>
         <option value="NA">NA</option>
    </select>
    <span id="degree-error"><i class="fa-solid fa-circle-check"></i></span>`;

        qualificationContainer.appendChild(div);

    } else if (initiationQualification == "DOCTRATE") {
        qualificationContainer.innerHTML = "";
        qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="initiationDegree" class="degree">Degree :</label>
        <select name="Degree" id="initiationDegree">
           <option value="BOTANY">BOTANY</option>
           <option value="MD">MD</option>
           <option value="PHD">PHD</option>
           <option value="OTHERS">OTHERS</option>
           <option value="NA">NA</option>
        </select>
        <span id="degree-error"><i class="fa-solid fa-circle-check"></i></span>`;

        qualificationContainer.appendChild(div);


    } else if (initiationQualification == "ENGINEERING") {
        qualificationContainer.innerHTML = "";
        qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="initiationDegree" class="degree">Degree :</label>
    <select name="Degree" id="initiationDegree">
       <option value="B.E">B.E</option>
       <option value="B.TECH">B.TECH</option>
       <option value="OTHERS">OTHERS</option>
       <option value="NA">NA</option>
    </select>
    <span id="degree-error"><i class="fa-solid fa-circle-check"></i></span>`;

        qualificationContainer.appendChild(div);

    } else if (initiationQualification == "GRADUATION") {
        qualificationContainer.innerHTML = "";
        qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="initiationDegree" class="degree">Degree :</label>
    <select name="Degree" id="initiationDegree">
        <option value="B.ARCH">B.ARCH</option>
        <option value="B.ED">B.ED</option>
        <option value="B.H.M.S">B.H.M.S</option>
        <option value="B.I.M.S">B.I.M.S</option>
        <option value="B.LIB">B.LIB</option>
        <option value="B.SC">B.SC</option>
        <option value="B.T.C.">B.T.C.</option>
        <option value="BA">BA</option>
        <option value="BBA">BBA</option>
        <option value="BCA">BCA</option>
        <option value="BCOM">BCOM</option>
        <option value="BCOM(H)">BCOM(H)</option>
        <option value="NTT">NTT</option>
        <option value="OTHERS">OTHERS</option>
        <option value="NA">NA</option>
    </select>
    <span id="degree-error"><i class="fa-solid fa-circle-check"></i></span>`;

        qualificationContainer.appendChild(div);

    } else if (initiationQualification == "ILLITERATE") {
        qualificationContainer.innerHTML = "";
        qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="initiationDegree" class="degree">Degree :</label>
    <select name="Degree" id="initiationDegree">
       <option value="NONE">NONE</option>
       <option value="OTHERS">OTHERS</option>
       <option value="NA">NA</option>
    </select>
    <span id="degree-error"><i class="fa-solid fa-circle-check"></i></span>`;

        qualificationContainer.appendChild(div);

    } else if (initiationQualification == "MEDICAL") {
        qualificationContainer.innerHTML = "";
        qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="initiationDegree" class="degree">Degree :</label>
    <select name="Degree" id="initiationDegree">
        <option value="B.A.M.S">B.A.M.S</option>
        <option value="B.D.S">B.D.S</option>
        <option value="DOCTRATE">DOCTRATE</option>
        <option value="GEN NURSING">GEN NURSING</option>
        <option value="HMDS">HMDS</option>
        <option value="LAB TECNICIAN">LAB TECNICIAN</option>
        <option value="M.B.B.S">M.B.B.S</option>
        <option value="NURSING">NURSING</option>
        <option value="PARA MEDICAL">PARA MEDICAL</option>
        <option value="PHARMACY">PHARMACY</option>
        <option value="PHYSIOTHERAPY">PHYSIOTHERAPY</option>
        <option value="POSTGRADUATION">POSTGRADUATION</option>
        <option value="PULMONARY">PULMONARY</option>
        <option value="OTHERS">OTHERS</option>
        <option value="NA">NA</option>
    </select>
    <span id="degree-error"><i class="fa-solid fa-circle-check"></i></span>`;

        qualificationContainer.appendChild(div);

    } else if (initiationQualification == "OTHERS") {
        qualificationContainer.innerHTML = "";
        qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="initiationDegree" class="degree">Degree :</label>
    <select name="Degree" id="initiationDegree">
       <option value="OTHERS">OTHERS</option>
       <option value="NA">NA</option>
    </select>
    <span id="degree-error"><i class="fa-solid fa-circle-check"></i></span>`;

        qualificationContainer.appendChild(div);
    } else if (initiationQualification == "SCHOOLING") {
        qualificationContainer.innerHTML = "";
        qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="initiationDegree" class="degree">Degree :</label>
    <select name="Degree" id="initiationDegree">
       <option value="HR SECONDARY">HR SECONDARY</option>
       <option value="SENIOR SECONDARY">SENIOR SECONDARY</option>
       <option value="SECONDARY">SECONDARY</option>
       <option value="MIDDLE">MIDDLE</option>
       <option value="PRIMARY">PRIMARY</option>
       <option value="OTHERS">OTHERS</option>
       <option value="NA">NA</option>
    </select>
    <span id="degree-error"><i class="fa-solid fa-circle-check"></i></span>`;

        qualificationContainer.appendChild(div);
    } else if (initiationQualification == "POST GRADUATION") {
        qualificationContainer.innerHTML = "";
        qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="initiationDegree" class="degree">Degree :</label>
    <select name="Degree" id="initiationDegree">
        <option value="M.ARCH">M.ARCH</option>
        <option value="M.ED">M.ED</option>
        <option value="M.PHIL">M.PHIL</option>
        <option value="M.COM">M.COM</option>
        <option value="M.E">M.E</option>
        <option value="M.ED">M.ED</option>
        <option value="M.SC">M.SC</option>
        <option value="MA">MA</option>
        <option value="MBA">MBA</option>
        <option value="MCA">MCA</option>
        <option value="MLIB">MLIB</option>
        <option value="MTECH">MTECH</option>
        <option value="PGDBM">PGDBM</option>
        <option value="OTHERS">OTHERS</option>
        <option value="NA">NA</option>
    </select>
    <span id="degree-error"><i class="fa-solid fa-circle-check"></i></span>`;

        qualificationContainer.appendChild(div);
    } else if (initiationQualification == "PROFESSIONAL") {
        qualificationContainer.innerHTML = "";
        qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="initiationDegree" class="degree">Degree :</label>
    <select name="Degree" id="initiationDegree">
       <option value="AICWA">AICWA</option>
       <option value="B ARCH">B ARCH</option>
       <option value="CA">CA</option>
       <option value="CS">CS</option>
       <option value="LLB">LLB</option>
       <option value="LLM">LLM</option>
       <option value="OTHERS">OTHERS</option>
       <option value="NA">NA</option>
    </select>
    <span id="degree-error"><i class="fa-solid fa-circle-check"></i></span>`;

        qualificationContainer.appendChild(div);
    };

};


function initiationOccupationFun() {
    const initiationOccupation = document.getElementById("initiationOccupation").value;

    if (initiationOccupation == "SelectOccupation") {
        occupationError.innerHTML = "";
    } else {
        occupationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };
};


// date ko stop kar diya future date select nahi hogi.
const initiationValue = document.getElementById("initiation-Date");
initiationValue.max = new Date().toISOString().split("T")[0];


function initiationDateFunc() {
    const initiationDateValue = initiationDate.value;

    if (initiationDateValue.length == 0) {
        initiationDateError.innerHTML = "";
    } else {
        initiationDateError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };
};


function initiationPlaceFun() {
    const initiationPlace = document.getElementById("initiationPlace").value;

    if (initiationPlace == "SelectInitiationPlace") {
        initiationPlaceError.innerHTML = "";
    } else {
        initiationPlaceError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };
};


function initiationKisSeLiyeFun() {
    const initiationByy = document.getElementById("initiation-Byy").value;

    if (initiationByy == "SelectInitiationByy") {
        initiationByError.innerHTML = "";
    } else {
        initiationByError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };
};


iniSmitBtn.onclick = function () {

    if (!initiationNameFunc() || !initiation_F_H_NameFunc() || !initiationPhoneFunc() || !initiationAltPhoneFunc()) {

        initiationSubmitError.style.display = 'block';
        initiationSubmitError.innerHTML = 'Please fix the error';

        setTimeout(function () {
            initiationSubmitError.style.display = 'none';
        }, 3000)

        return false;
    }
};


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

        }, 1000);
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
            initiationDateError.innerHTML = "";
            initiationSubmitError.innerHTML = "";
            initiationCentreError.innerHTML = "";
            initiationGenderError.innerHTML = "";
            qualificationError.innerHTML = "";
            occupationError.innerHTML = "";
            initiationDateError.innerHTML = "";
            initiationPlaceError.innerHTML = "";
            initiationByError.innerHTML = "";


            const selectInitiationCentreName = document.getElementById("selectInitiationCentreName").value;
            const initiationAddressContainer = document.getElementById("initiationAddressContainer");

            if (selectInitiationCentreName == "SelectCentreName") {
                initiationAddressContainer.innerHTML = "";
            };


            const initiationQualification = document.getElementById("initiationQualification").value;
            const qualificationContainer = document.getElementById("qualificationContainer");

            if (initiationQualification == "SelectQualification") {
                qualificationContainer.innerHTML = "";
            };


        } else {
            throw new Error(`Server responded with ${response.status}`);
        }

    } catch (error) {
        console.error('Error!', error.message);
    }
});




// initiation form data get into google excel sheet

const searchInitiationCentreName = document.getElementById('searchInitiationCentreName');
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

    if (iniSearchName.value.length == 0 && iniFath_Hus_Name.value.length == 0 && searchInitiationCentreName.value == "SearchIniCentreName") {
        iniSearchName.classList.add('nullError');
        iniFath_Hus_Name.classList.add('nullError');
        searchInitiationCentreName.classList.add('nullError');

        iniSearchBtn.style.display = 'block';
        initiationSearchIcon.style.display = 'none';
        initiationSearchError.style.display = "none";
    } else {
        searchInitiationCentreName.classList.remove('nullError');
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

                    let val1 = searchInitiationCentreName.value;
                    let val2 = iniSearchName.value;
                    let val3 = iniFath_Hus_Name.value;


                    data.content.filter(item => {

                        if (item.includes(val1) && item.includes(val2) && item.includes(val3)) {

                            initiationSearchError.style.display = "none";
                            initiationSearchIcon.style.display = 'none';
                            iniSearchBtn.style.display = 'block';


                            // datetime format ko date me convert karega or actual date print karega.
                            const dateOfBirthStrng = item[10];
                            const iniDateFromSheet = new Date(dateOfBirthStrng);
                            iniDateFromSheet.setDate(iniDateFromSheet.getDate() + 1);
                            const formattedIniDate = iniDateFromSheet.toISOString().split('T')[0];


                            const div = document.createElement('div');
                            div.classList.add('resultShow');

                            div.innerHTML =
                                `<div class="center">
                                <h1 class="centreName">${item[0]}</h1>
                                <h2 class="showName">${item[1]}</h2>
                                <span id="versis">W/D/S/o</span>
                                <h3 class="father_h_Name">${item[2]}</h3>
                               </div>
                               <div class="data">
                                <div class="box">
                                    <p>Gender : </p>
                                    <span> ${item[3]}</span>
                                </div>
                                <div class="box">
                                    <p>Phone : </p>
                                    <span>${item[4]}</span>
                                </div>
                                <div class="box">
                                    <p>Alternative Phone No. : </p>
                                    <span>${item[5]}</span>
                                </div>
                                <div class="box">
                                    <p>Address : </p>
                                    <span>${item[6]}</span>
                                </div>
                                <div class="box">
                                    <p>Qualification : </p>
                                    <span>${item[7]}</span>
                                </div>
                                <div class="box">
                                    <p>Degree : </p>
                                    <span>${item[8]}</span>
                                </div>
                                <div class="box">
                                    <p>Occupation : </p>
                                    <span>${item[9]}</span>
                                </div>
                                <div class="box">
                                    <p>Initiation Date : </p>
                                    <span>${formattedIniDate}</span>
                                </div>
                                <div class="box">
                                    <p>Initiation Place : </p>
                                    <span>${item[11]}</span>
                                </div>
                                <div class="box">
                                    <p>Initiation By : </p>
                                    <span>${item[12]}</span>
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
                    searchInitiationCentreName.value == "SearchIniCentreName";
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
});

initionBtn.addEventListener("click", function () {
    boxTwo.style.display = 'none';
    boxThree.style.display = 'block';
});



