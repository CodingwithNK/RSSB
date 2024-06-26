// boxOne and boxTwo code.
const centreError = document.getElementById('centre-error');
const nameError = document.getElementById('name-error');
const badgeError = document.getElementById('badge-error');
const sewadarDesigError = document.getElementById('sewadar-desig-error');
const F_H_NameError = document.getElementById('F-H-name-error');
const genderError = document.getElementById('gender-error');
const ageError = document.getElementById('age-error');
const phoneError = document.getElementById('phone-error');
const alt_phoneError = document.getElementById('alt-phone-error');
const adharCardError = document.getElementById('AdharCard-error');
const addressError = document.getElementById('address-error');
const submitError = document.getElementById('subit-error');

const usrName = document.getElementById('usrName');
const usrBadgeNo = document.getElementById('usrBadgeNo');
const selectCentreName = document.getElementById('selectCentreName');
const sewadarDesignation = document.getElementById('sewadarDesignation');
const usrF_H_Name = document.getElementById('usrF-H-Name');
const usrPhone = document.getElementById('usrPhone');
const usrAlt_Phone = document.getElementById('usrAlt-Phone');
const usrGender = document.getElementById('usrGender');
const genderSelectBtn = document.getElementById('genderSelectBtn');
const usrAdharCard = document.getElementById('usrAdharCard');
const submitBtn = document.getElementById('smitBtn');
const sewadarUpdateBtn = document.getElementById('sewadarUpdateBtn');
const clearBtn = document.getElementById('clrBtn');



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

function usrBadgeFunc() {
    if (usrBadgeNo.value.length == 0) {
        badgeError.innerHTML = 'Badge No. is required';
        return false
    }
    if (usrBadgeNo.value.length !== 12) {
        badgeError.innerHTML = 'Enter Valid Badge No.';
        return false
    }
    if (usrBadgeNo.value.length == 12) {
        badgeError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

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

    if (genderSelectBtn === "SelectGender") {
        genderError.innerHTML = "";

    } else {
        genderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };
};

function sewadarDesignFunc() {

    if (sewadarDesignation.value === "SelectDesignation") {
        sewadarDesigError.innerHTML = "";

    } else {
        sewadarDesigError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };
};


// date ko stop kar diya future date select nahi hogi.
const userDobValue = document.getElementById("usrAge");
userDobValue.max = new Date().toISOString().split("T")[0];

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


clearBtn.onclick = function (e) {
    e.preventDefault();

    let formReset = document.getElementById("badgeDataForm");
    let cnfrm = window.confirm("Are you sure to clear your data?");
    if (cnfrm) {
        formReset.reset();

        centreError.innerHTML = "";
        nameError.innerHTML = "";
        badgeError.innerHTML = "";
        F_H_NameError.innerHTML = "";
        genderError.innerHTML = "";
        phoneError.innerHTML = "";
        alt_phoneError.innerHTML = "";
        ageError.innerHTML = "";
        adharCardError.innerHTML = "";
        document.getElementById("addressContainer").innerHTML = "";
    } else {
        return false;
    }

};




// Sewadar form data submit into google excel sheet--------------------------------

const message = document.querySelector(".msg");
const badgeForm = document.forms['form1'];


const url = "https://script.google.com/macros/s/AKfycbwMW7czh3VLpSSk0vKU_iWhSf49pYKX7qJh6NF8QGPZdByFNYXz513EGxeHzYfcbgtN/exec";

submitBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    submitBtn.style.display = "block";
    sewadarUpdateBtn.style.display = "none";

    try {

        if (!usrNameFunc()) {

            submitError.style.display = 'block';
            submitError.innerHTML = 'Please fix the error';

            setTimeout(function () {
                submitError.style.display = 'none';
            }, 3000)

            return false;
        } else {

            submitBtn.innerHTML = `<img width="30" src="loader1.gif" style="filter: brightness(0) saturate(100%) invert(100%) sepia(100%) brightness(100%) contrast(101%);"/>`;

            const res = await fetch(url, { method: 'POST', body: new FormData(badgeForm) })

            if (res.ok) {

                message.innerHTML = "Thank You for Submit!";
                submitBtn.innerHTML = "Save Data";

                submitBtn.style.display = "block";
                sewadarUpdateBtn.style.display = "none";

                setTimeout(function () {
                    message.innerHTML = "";
                }, 5000);

                badgeForm.reset();

                centreError.innerHTML = "";
                nameError.innerHTML = "";
                sewadarDesigError.innerHTML = "";
                badgeError.innerHTML = "";
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
        };

    } catch (error) {
        console.error('Error!', error.message);
    };
});




// ----------- sewadar information get from google sheet -------------

const searchBtn = document.getElementById('searchBtn');
const searchBadge = document.getElementById('searchBadge');
const searchCentreName = document.getElementById('searchSelectCentreName');
const searchUsrDesign = document.getElementById('searchUsrDesign');
const searchName = document.getElementById('searchName');
const fath_Hus_Name = document.getElementById('Fath_Hus_Name');
const resultBox = document.querySelector('.resultBox');
const searchIcon = document.querySelector(".searchIcon");
const sewadarSearchError = document.getElementById('sewadar-search-error');
const sewadarExcelButton = document.getElementById('sewadarExcelButton');


const SewadarIsNew = document.getElementById('SewadarIsNew');
const SewadarStartRow = document.getElementById('SewadarStartRow');



// print in result box of search sewadar data
function sewadarsDetails(bulkData) {

    downloadSewadarDetailsExcelFormat(bulkData);

    searchIcon.style.display = 'none';
    sewadarSearchError.style.display = "none";
    searchBtn.style.display = 'block';


    bulkData.forEach((item) => {

        // datetime format ko date me convert karega or actual date print karega.
        const dateStrng = item[6];
        const dateFromSheet = new Date(dateStrng);
        dateFromSheet.setDate(dateFromSheet.getDate() + 1);
        const formattedDate = dateFromSheet.toISOString().split('T')[0];


        const div = document.createElement('div');
        div.classList.add('resultShow');

        div.innerHTML =
            `<div class="center">
              <h1 class="centreName">${item[0]}</h1>
              <h2 class="showName">${item[3]}</h2>
              <span id="versis">W/D/S/o</span>
              <h3 class="father_h_Name">${item[4]}</h3>
              </div>
              <div class="data">
              <div class="box">
              <p>Badge Number : </p>
              <span> ${item[1]}</span>
              </div>
              <div class="box">
              <p>Designation : </p>
              <span> ${item[2]}</span>
              </div>
              <div class="box">
              <p>Gender : </p>
              <span> ${item[5]}</span>
              </div>
              <div class="box">
              <p>Date of Birth : </p>
              <span>${formattedDate}</span>
              </div>
              <div class="box">
              <p>Phone : </p>
              <span> ${item[7]}</span>
              </div>
              <div class="box">
              <p>Alternative Phone No. : </p>
              <span> ${item[8]}</span>
              </div>
              <div class="box">
              <p>Address : </p>
              <span> ${item[9]}</span>
              </div>
              <div class="box">
              <p>AdharCard No. : </p>
              <span> ${item[10]}</span>
              </div>
              <div class="editBtn">
              <i title="Click For Edit Details" class="fa-solid fa-pen-to-square"></i>
              </div>
              </div>`;

        resultBox.appendChild(div);

    });


    sewadarDetailsEdit(); // this function will be used when sewadar click on edit btn.



    // this condition will be used for editBtn (hide and unhide)
    const val1 = searchBadge.value;
    const val2 = searchCentreName.value;
    const val3 = searchUsrDesign.value;
    const val4 = searchName.value;
    const val5 = fath_Hus_Name.value;


    if (val1 !== "" && val2 === "SelectCentreName" && val3 === "SelectDesignation" && val4 === "" && val5 === "") {

        const editBtns = document.querySelectorAll(".editBtn");

        editBtns.forEach((btn) => {

            btn.style.display = "block";

        });

    } else {

        const edtBtns = document.querySelectorAll(".editBtn");

        edtBtns.forEach((btn) => {

            btn.style.display = "none";

        });

    };

};

// sewadar's details edit function 
function sewadarDetailsEdit() {

    const dataBox = document.querySelector(".resultBox");


    dataBox.addEventListener("click", function (e) {

        if (e.target.tagName === "I") {


            const data = e.target.closest(".data");

            const centrName = data.previousElementSibling.children[0].innerText;
            const naam = data.previousElementSibling.children[1].innerText;
            const fNaam = data.previousElementSibling.children[3].innerText;


            const boxes = data.querySelectorAll(".box");

            const bdgNum = boxes[0].children[1].innerText;
            const desig = boxes[1].children[1].innerText;
            const gndr = boxes[2].children[1].innerText;
            const dob = boxes[3].children[1].innerText;
            const phn = boxes[4].children[1].innerText;
            const altPhn = boxes[5].children[1].innerText;
            const addrs = boxes[6].children[1].innerText;
            const adrCrdNo = boxes[7].children[1].innerText;




            selectCentreName.value = centrName;
            usrName.value = naam;
            usrBadgeNo.value = bdgNum;
            sewadarDesignation.value = desig;
            usrF_H_Name.value = fNaam;
            usrPhone.value = phn;
            usrAlt_Phone.value = altPhn;
            usrAge.value = dob;
            genderSelectBtn.value = gndr;
            usrAdharCard.value = adrCrdNo;


            if (selectCentreName.value == centrName) {

                chooseCentreName();

                document.getElementById('addressOfCentre').value = addrs;

            };


            submitBtn.style.display = "none";
            sewadarUpdateBtn.style.display = "block";

            centreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            badgeError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            sewadarDesigError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            F_H_NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            genderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            ageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            alt_phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            adharCardError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        };


    });

};

// sewadar's details update into database
sewadarUpdateBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    submitBtn.style.display = "none";
    sewadarUpdateBtn.style.display = "block";

    try {

        sewadarUpdateBtn.innerHTML = `<img width="30" src="loader1.gif" style="filter: brightness(0) saturate(100%) invert(100%) sepia(100%) brightness(100%) contrast(101%);"/>`;


        const url = "https://script.google.com/macros/s/AKfycbwMW7czh3VLpSSk0vKU_iWhSf49pYKX7qJh6NF8QGPZdByFNYXz513EGxeHzYfcbgtN/exec";

        const res = await fetch(url, { method: 'POST', body: new FormData(badgeForm) })

        if (res.ok) {

            message.innerHTML = "Thank You for Update Your Details!";
            sewadarUpdateBtn.innerHTML = "Update Data";

            submitBtn.style.display = "block";
            sewadarUpdateBtn.style.display = "none";


            setTimeout(function () {
                message.innerHTML = "";
            }, 5000);

            badgeForm.reset();

            centreError.innerHTML = "";
            nameError.innerHTML = "";
            sewadarDesigError.innerHTML = "";
            badgeError.innerHTML = "";
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




// sewadar's details search from database
searchBtn.addEventListener("click", function () {

    resultBox.innerHTML = "";
    sewadarExcelButton.innerHTML = "";

    searchBtn.style.display = 'none';
    sewadarSearchError.style.display = "none";
    searchIcon.style.display = 'block';

    if (searchName.value.length == 0 && searchUsrDesign.value === "SelectDesignation" && fath_Hus_Name.value.length == 0 && searchCentreName.value === "SelectCentreName" && searchBadge.value == 0) {
        searchName.classList.add('nullError');
        fath_Hus_Name.classList.add('nullError');
        searchCentreName.classList.add('nullError');
        searchBadge.classList.add('nullError');
        searchUsrDesign.classList.add('nullError');

        searchBtn.style.display = 'block';
        searchIcon.style.display = 'none';
        sewadarSearchError.style.display = "none";


    } else {
        searchName.classList.remove('nullError');
        fath_Hus_Name.classList.remove('nullError');
        searchCentreName.classList.remove('nullError');
        searchBadge.classList.remove('nullError');
        searchUsrDesign.classList.remove('nullError');
        sewadarSearchError.style.display = "none";


        setTimeout(() => {

            const no = searchBadge.value;
            const cntrNm = searchCentreName.value;
            const desig = searchUsrDesign.value;
            const sNm = searchName.value;
            const sFNm = fath_Hus_Name.value;


            // this condition for update details by badge number only
            if (no !== "" && cntrNm === "SelectCentreName" && desig === "SelectDesignation" && sNm === "" && sFNm === "") {

                fetch("https://script.google.com/macros/s/AKfycbwMW7czh3VLpSSk0vKU_iWhSf49pYKX7qJh6NF8QGPZdByFNYXz513EGxeHzYfcbgtN/exec?page=search&no=" + no)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {

                        let record = data.record;
                        let rowNumber = data.SR;


                        SewadarIsNew.value = 'N';
                        SewadarStartRow.value = rowNumber;


                        sewadarsDetails(record);

                    });
            };




            fetch("https://script.google.com/macros/s/AKfycbwMW7czh3VLpSSk0vKU_iWhSf49pYKX7qJh6NF8QGPZdByFNYXz513EGxeHzYfcbgtN/exec?page=all")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                    let val1 = searchBadge.value;
                    let val2 = searchCentreName.value;
                    let val3 = searchUsrDesign.value;
                    let val4 = searchName.value;
                    let val5 = fath_Hus_Name.value;


                    let bulkData = [];


                    // all filter conditions for searchbox of sewadar's details.
                    if (val1 === '' && val2 !== 'SelectCentreName' && val3 === 'SelectDesignation' && val4 === '' && val5 === '') {

                        if (val2 !== 'ALL') {

                            data.content.filter(item => {

                                if (item.includes(val2)) {

                                    bulkData.push(item);
                                }

                            });
                        } else if (val2 === 'ALL') {

                            const filteredItems = data.content.filter((item, index) => index !== 0);

                            filteredItems.forEach(item => {

                                bulkData.push(item);

                            });
                        };

                    } else if (val1 === '' && val2 === 'SelectCentreName' && val3 !== 'SelectDesignation' && val4 === '' && val5 === '') {

                        if (val3 !== 'ALL') {

                            data.content.filter(item => {

                                if (item.includes(val3)) {

                                    bulkData.push(item);
                                }

                            });
                        } else if (val3 === 'ALL') {

                            const filteredItems = data.content.filter((item, index) => index !== 0);

                            filteredItems.forEach(item => {

                                bulkData.push(item);

                            });
                        };

                    } else if (val1 === '' && val2 === 'SelectCentreName' && val3 === 'SelectDesignation' && val4 !== '' && val5 !== '') {

                        data.content.filter(item => {

                            if (item.includes(val4) && item.includes(val5)) {

                                bulkData.push(item);
                            }

                        });

                    } else if (val1 === '' && val2 !== 'SelectCentreName' && val3 !== 'SelectDesignation' && val4 === '' && val5 === '') {

                        if (val2 !== 'ALL' && val3 === 'ALL') {

                            data.content.filter(item => {

                                if (item.includes(val2)) {

                                    bulkData.push(item);
                                }

                            });
                        } else if (val2 === 'ALL' && val3 !== 'ALL') {

                            data.content.filter(item => {

                                if (item.includes(val3)) {

                                    bulkData.push(item);
                                }

                            });
                        } else if (val2 === 'ALL' && val3 === 'ALL') {

                            const filteredItems = data.content.filter((item, index) => index !== 0);

                            filteredItems.forEach(item => {

                                bulkData.push(item);

                            });
                        } else if (val2 !== 'ALL' && val3 !== 'ALL') {

                            data.content.filter(item => {

                                if (item.includes(val2) && item.includes(val3)) {

                                    bulkData.push(item);
                                }

                            });
                        };

                    } else if (val1 === '' && val2 !== 'SelectCentreName' && val3 === 'SelectDesignation' && val4 !== '' && val5 !== '') {

                        if (val2 !== "ALL" && val4 !== "" && val5 !== "") {

                            data.content.filter(item => {

                                if (item.includes(val2) && item.includes(val4) && item.includes(val5)) {

                                    bulkData.push(item);
                                }

                            });

                        } else if (val2 === "ALL" && val4 !== "" && val5 !== "") {

                            data.content.filter(item => {

                                if (item.includes(val4) && item.includes(val5)) {

                                    bulkData.push(item);
                                }

                            });

                        }


                    } else if (val1 === '' && val2 === 'SelectCentreName' && val3 !== 'SelectDesignation' && val4 !== '' && val5 !== '') {

                        if (val3 !== 'ALL' && val4 !== '' && val5 !== '') {

                            data.content.filter(item => {

                                if (item.includes(val3) && item.includes(val4) && item.includes(val5)) {

                                    bulkData.push(item);
                                }

                            });

                        } else if (val3 === 'ALL' && val4 !== '' && val5 !== '') {

                            data.content.filter(item => {

                                if (item.includes(val4) && item.includes(val5)) {

                                    bulkData.push(item);
                                }

                            });
                        };

                    } else if (val1 === '' && val2 !== 'SelectCentreName' && val3 !== 'SelectDesignation' && val4 !== '' && val5 !== '') {

                        if (val2 !== 'ALL' && val3 !== 'ALL' && val4 !== '' && val5 !== '') {

                            data.content.filter(item => {

                                if (item.includes(val2) && item.includes(val3) && item.includes(val4) && item.includes(val5)) {

                                    bulkData.push(item);
                                }

                            });

                        } else if (val2 === 'ALL' && val3 === 'ALL' && val4 !== '' && val5 !== '') {

                            data.content.filter(item => {

                                if (item.includes(val4) && item.includes(val5)) {

                                    bulkData.push(item);
                                }

                            });
                        };

                    };





                    if (bulkData.length !== 0) {

                        sewadarsDetails(bulkData);

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





        }, 10);

    }


});

// Download Sewadar search data in excel format.
function downloadSewadarDetailsExcelFormat(bulkData) {

    // Create a new Excel Workbook
    const workbook = XLSX.utils.book_new();

    // Add headings
    const headings = ['Sr._No.', 'Centre_Name', 'Badge_Number', 'Designation', 'Sewadar_Name', 'Father/Husband_Name', 'Gender', 'Date_Of_Birth', 'Mobile_No.', 'Alternative_Mobile_No.', 'Address', 'AadharCard No.'];


    // Create an array to store all data rows
    const allDataRows = [];


    // Loop through each element in bulkData
    bulkData.forEach((sewadar, index) => {
        // Extract values for the current row
        const rowData = [
            index + 1,
            sewadar[0],
            sewadar[1],
            sewadar[2],
            sewadar[3],
            sewadar[4],
            sewadar[5],
            DDMMYYConvert(sewadar[6]),
            sewadar[7],
            sewadar[8],
            sewadar[9],
            sewadar[10]
        ];


        allDataRows.push(rowData);
    });


    // Combine headings with all data rows
    const dataWithHeadings = [headings, ...allDataRows];

    // Add a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(dataWithHeadings);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "BulkData");

    // Convert the workbook to a binary string
    const excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

    // Convert the binary string to a Blob
    const blob = new Blob([s2ab(excelData)], { type: "application/octet-stream" });

    // Create a download link
    const url = window.URL.createObjectURL(blob);
    const buttonHtml = `<button type="download" title="Download In Excel Format" class="sewadarBulkDataExcel" onclick="excelDownload('${url}')">Download Excel</button>`;
    sewadarExcelButton.innerHTML = buttonHtml;

    // Function to convert binary string to array buffer
    function s2ab(s) {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
};

// ye date format ko change karega DD/MM/YY me
function DDMMYYConvert(item) {

    if (item !== "") {
        const inputFromDate = new Date(item);
        const year = inputFromDate.getFullYear();
        const month = ("0" + (inputFromDate.getMonth() + 1)).slice(-2);
        const day = ("0" + inputFromDate.getDate()).slice(-2);
        const sewaFromDt = `${day}-${month}-${year}`;
        return sewaFromDt;
    }
};




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


const initiationCentreName = document.getElementById("selectInitiationCentreName")
const initiationName = document.getElementById('initiationName');
const initiation_F_H_Name = document.getElementById('initiation-F-H-Name');
const initiationPhone = document.getElementById('initiationPhone');
const initiationAltPhone = document.getElementById('initiation-Alt-Phone');
const initiationAddress = document.getElementById('initiationAddress');
const initiationQualification = document.getElementById('initiationQualification');
const initiationGenderSelect = document.getElementById("initiationGenderSelect");
const initiationOccupation = document.getElementById('initiationOccupation');
const initiationDate = document.getElementById('initiationDate');
const initiationPlace = document.getElementById('initiationPlace');
const initiationByyName = document.getElementById('initiation-Byy');
const iniSmitBtn = document.getElementById('iniSmitBtn');
const iniUpdateBtn = document.getElementById('iniUpdateBtn');
const iniClearBtn = document.getElementById('iniClrBtn');



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

        div.innerHTML = `<label for="iniAdressOfCentre" class="Addrs">Your Address :</label>
    <select name="InitiationAddress" id="iniAdressOfCentre">
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

        div.innerHTML = `<label for="iniAdressOfCentre" class="Addrs">Your Address :</label>
    <select name="InitiationAddress" id="iniAdressOfCentre">
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

        div.innerHTML = `<label for="iniAdressOfCentre" class="Addrs">Your Address :</label>
    <select name="InitiationAddress" id="iniAdressOfCentre">
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

        div.innerHTML = `<label for="iniAdressOfCentre" class="Addrs">Your Address :</label>
    <select name="InitiationAddress" id="iniAdressOfCentre">
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

        div.innerHTML = `<label for="iniAdressOfCentre" class="Addrs">Your Address :</label>
    <select name="InitiationAddress" id="iniAdressOfCentre">
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

        div.innerHTML = `<label for="iniAdressOfCentre" class="Addrs">Your Address :</label>
    <select name="InitiationAddress" id="iniAdressOfCentre">
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
const initiationValue = document.getElementById("initiationDate");
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


iniClearBtn.onclick = function (e) {
    e.preventDefault();

    let formReset = document.getElementById("initiationForm");
    let cnfrm = window.confirm("Are you sure to clear your data?");
    if (cnfrm) {
        formReset.reset();

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
        document.getElementById("initiationAddressContainer").innerHTML = "";
        document.getElementById("qualificationContainer").innerHTML = "";
    } else {
        return false;
    }

};





// initiation form data submit into google excel sheet------------------------

const initiationMessage = document.querySelector(".ini-msg");
const initiationForm = document.forms['form2'];


const initiationUrl = "https://script.google.com/macros/s/AKfycby39P-thcvxCduMN0NG6n3R2YE93YS778h03eVdsED0HuUaS_A_ynzLLE1xdtX6WAK8XQ/exec";

iniSmitBtn.addEventListener("click", async (evt) => {

    evt.preventDefault();

    try {

        if (!initiationNameFunc() || !initiation_F_H_NameFunc() || !initiationPhoneFunc() || !initiationAltPhoneFunc()) {

            initiationSubmitError.style.display = 'block';
            initiationSubmitError.innerHTML = 'Please fix the error';

            setTimeout(function () {
                initiationSubmitError.style.display = 'none';
            }, 3000)

            return false;

        } else {

            iniSmitBtn.innerHTML = `<img width="30" src="loader1.gif" style="filter: brightness(0) saturate(100%) invert(100%) sepia(100%) brightness(100%) contrast(101%);"/>`;

            const response = await fetch(initiationUrl, { method: 'POST', body: new FormData(initiationForm) })

            if (response.ok) {

                initiationMessage.innerHTML = "Thank You for Submit!";
                iniSmitBtn.innerHTML = "Save Data";

                iniSmitBtn.style.display = "block";
                iniUpdateBtn.style.display = "none";

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
                initiationMessage.style.color = "green";


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

            return true;

        };

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
const initiationExcelButton = document.getElementById('initiationExcelButton');



const InitiationIsNew = document.getElementById('InitiationIsNew');
const InitiationStartRow = document.getElementById('InitiationStartRow');





// initiation details print in result box
function initiationDataPrint(bulkData) {

    downloadInitiationDetailsExcelFormat(bulkData);

    initiationSearchError.style.display = "none";
    initiationSearchIcon.style.display = 'none';
    iniSearchBtn.style.display = 'block';

    bulkData.forEach((item) => {

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
    <div class="editBtn">
     <i title="Click For Edit Details" class="fa-solid fa-pen-to-square"></i>
    </div>
 </div>`;

        initiationResultBox.appendChild(div);

    });


    initiationDetailsEdit(); // this function call when click on edit btn.



    // this condition will be used for editbtn hide and unhide.
    const val1 = searchInitiationCentreName.value;
    const val2 = iniSearchName.value;
    const val3 = iniFath_Hus_Name.value;


    if (val1 !== "SelectCentreName" && val2 !== "" && val3 !== "" && (val1 !== "All" && val2 !== "" && val3 !== "")) {

        const editBtns = document.querySelectorAll(".editBtn");

        editBtns.forEach((btn) => {

            btn.style.display = "block";

        });

    } else {

        const edtBtns = document.querySelectorAll(".editBtn");

        edtBtns.forEach((btn) => {

            btn.style.display = "none";

        });

    };

};

// initiation's details edit function 
function initiationDetailsEdit() {

    const dataBox = document.querySelector(".initiationResultBox");


    dataBox.addEventListener("click", function (e) {

        if (e.target.tagName === "I") {


            const data = e.target.closest(".data");

            const centrName = data.previousElementSibling.children[0].innerText;
            const iniNaam = data.previousElementSibling.children[1].innerText;
            const inifNaam = data.previousElementSibling.children[3].innerText;


            const boxes = data.querySelectorAll(".box");


            const iniGndr = boxes[0].children[1].innerText;
            const iniPhn = boxes[1].children[1].innerText;
            const iniAltPhn = boxes[2].children[1].innerText;
            const iniAddrs = boxes[3].children[1].innerText;
            const iniQuali = boxes[4].children[1].innerText;
            const iniDegr = boxes[5].children[1].innerText;
            const iniOccup = boxes[6].children[1].innerText;
            const iniDt = boxes[7].children[1].innerText;
            const iniPlc = boxes[8].children[1].innerText;
            const iniByy = boxes[9].children[1].innerText;




            initiationCentreName.value = centrName;
            initiationName.value = iniNaam;
            initiation_F_H_Name.value = inifNaam;
            initiationPhone.value = iniPhn;
            initiationAltPhone.value = iniAltPhn;
            initiationGenderSelect.value = iniGndr;
            initiationQualification.value = iniQuali;
            initiationOccupation.value = iniOccup;
            initiationDate.value = iniDt;
            initiationPlace.value = iniPlc;
            initiationByyName.value = iniByy;



            if (initiationCentreName.value == centrName) {
                chooseInitiationCentreName();
                document.getElementById('iniAdressOfCentre').value = iniAddrs;
            };


            if (initiationQualification.value == iniQuali) {
                initiationQualificationFun();
                document.getElementById('initiationDegree').value = iniDegr;
            };





            iniSmitBtn.style.display = "none";
            iniUpdateBtn.style.display = "block";


            initiationCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            initiationNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            initiation_F_H_NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            initiationGenderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            initiationPhoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            initiationAltPhoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            qualificationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            occupationError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            initiationDateError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            initiationPlaceError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            initiationByError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';


        };


    });

};

// initiation's details update into database
iniUpdateBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    iniSmitBtn.style.display = "none";
    iniUpdateBtn.style.display = "block";

    try {

        iniUpdateBtn.innerHTML = `<img width="30" src="loader1.gif" style="filter: brightness(0) saturate(100%) invert(100%) sepia(100%) brightness(100%) contrast(101%);"/>`;

        const response = await fetch(initiationUrl, { method: 'POST', body: new FormData(initiationForm) })

        if (response.ok) {

            initiationMessage.innerHTML = "Thank You for Update Your Details!";
            iniUpdateBtn.innerHTML = "Update Data";

            iniSmitBtn.style.display = "block";
            iniUpdateBtn.style.display = "none";



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
            initiationMessage.style.color = "green";


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

        return true;



    } catch (error) {
        console.error('Error!', error.message);
    }
});




// initiation details search from the database
iniSearchBtn.addEventListener("click", function () {

    initiationResultBox.innerHTML = "";
    initiationExcelButton.innerHTML = "";

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




        const cntr = searchInitiationCentreName.value;
        const nam = iniSearchName.value;
        const fNam = iniFath_Hus_Name.value;


        // this condition for update details by badge number only
        if (cntr !== "SelectCentreName" && nam !== "" && fNam !== "" && (cntr !== "All" && nam !== "" && fNam !== "")) {

            fetch("https://script.google.com/macros/s/AKfycby39P-thcvxCduMN0NG6n3R2YE93YS778h03eVdsED0HuUaS_A_ynzLLE1xdtX6WAK8XQ/exec?page=search&cntr=" + cntr + "&nam=" + nam + "&fNam=" + fNam)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                    let record = data.record;
                    let rowNumber = data.SR;


                    InitiationIsNew.value = 'N';
                    InitiationStartRow.value = rowNumber;


                    initiationDataPrint(record);

                });
        };





        setTimeout(() => {
            const initiationURL = "https://script.google.com/macros/s/AKfycby39P-thcvxCduMN0NG6n3R2YE93YS778h03eVdsED0HuUaS_A_ynzLLE1xdtX6WAK8XQ/exec?page=all";
            fetch(initiationURL)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                    let val1 = searchInitiationCentreName.value;
                    let val2 = iniSearchName.value;
                    let val3 = iniFath_Hus_Name.value;


                    let bulkData = [];


                    if (val2 === "" && val3 === "" && val1 !== "SearchIniCentreName") {

                        if (val2 === "" && val3 === "" && val1 !== "All") {

                            data.content.filter(item => {

                                if (item.includes(val1)) {

                                    bulkData.push(item);

                                }

                            });

                        } else if (val2 === "" && val3 === "" && val1 === "All") {

                            const dataWithoutHeading = data.content.slice(1);

                            dataWithoutHeading.forEach((item) => {
                                bulkData.push(item);
                            });

                        };

                    } else if (val2 !== "" && val3 !== "" && val1 === "SearchIniCentreName") {

                        data.content.filter(item => {

                            if (item.includes(val2) && item.includes(val3)) {

                                bulkData.push(item);
                            }

                        });

                    } else if (val1 !== "SearchIniCentreName" && val2 !== "" && val3 !== "" && (val1 === "All" && val2 !== "" && val3 !== "")) {

                        data.content.filter(item => {

                            if (item.includes(val2) && item.includes(val3)) {

                                bulkData.push(item);
                            }

                        });

                    };








                    if (bulkData.length !== 0) {

                        initiationDataPrint(bulkData);

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


        }, 10);


    };

});

// Download Initiation search data in excel format.
function downloadInitiationDetailsExcelFormat(bulkData) {


    // Create a new Excel Workbook
    const workbook = XLSX.utils.book_new();

    // Add headings
    const headings = ['Sr._No.', 'Centre_Name', 'Initiation_Name', 'Father/Husband_Name', 'Gender', 'Mobile_No.', 'Alternative_Mobile_No.', 'Address', 'Qualification', 'Degree', 'Occupation', 'Initiation_Date', 'Initiation_Place', 'Initiation_By'];


    // Create an array to store all data rows
    const allDataRows = [];

    // Loop through each element in bulkData
    bulkData.forEach((sewadar, index) => {
        // Extract values for the current row
        const rowData = [
            index + 1,
            sewadar[0],
            sewadar[1],
            sewadar[2],
            sewadar[3],
            sewadar[4],
            sewadar[5],
            sewadar[6],
            sewadar[7],
            sewadar[8],
            sewadar[9],
            DDMMYYConvert(sewadar[10]),
            sewadar[11],
            sewadar[12],
        ];


        allDataRows.push(rowData);
    });


    // Combine headings with all data rows
    const dataWithHeadings = [headings, ...allDataRows];

    // Add a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(dataWithHeadings);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "BulkData");

    // Convert the workbook to a binary string
    const excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

    // Convert the binary string to a Blob
    const blob = new Blob([s2ab(excelData)], { type: "application/octet-stream" });

    // Create a download link
    const url = window.URL.createObjectURL(blob);
    const buttonHtml = `<button type="download" title="Download In Excel Format" class="initiationBulkDataExcel" onclick="excelDownload('${url}')">Download Excel</button>`;
    initiationExcelButton.innerHTML = buttonHtml;

    // Function to convert binary string to array buffer
    function s2ab(s) {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
};





// boxFour code start here //

const sangatCentreError = document.getElementById('sangat-centre-error');
const sangatNameError = document.getElementById('sangat-name-error');
const sangatDesigError = document.getElementById('sangat-desig-error');
const sangat_F_H_NameError = document.getElementById('sangat-F-H-name-error');
const sangatGenderError = document.getElementById('sangat-gender-error');
const sangatAgeError = document.getElementById('sangat-age-error');
const sangatPhoneError = document.getElementById('sangat-phone-error');
const sangatAlt_phoneError = document.getElementById('sangat-alt-phone-error');
const sangatAdharCardError = document.getElementById('sangat-AdharCard-error');
const sangatAddressError = document.getElementById('sangat-address-error');
const sangatSubmitError = document.getElementById('sangat-subit-error');

const sangatUsrName = document.getElementById('sangatUsrName');
const selectSangatCentreName = document.getElementById('selectSangatCentreName');
const sangatDesignation = document.getElementById('sangatDesignation');
const sangatUsrF_H_Name = document.getElementById('sangatUsrF-H-Name');
const sangatUsrPhone = document.getElementById('sangatUsrPhone');
const sangatUsrAlt_Phone = document.getElementById('sangatUsrAlt-Phone');
const sangatUsrAge = document.getElementById('sangatUsrAge');
const sangatGenderSelectBtn = document.getElementById('sangatGenderSelectBtn');
const sangatUsrAdharCard = document.getElementById('sangatUsrAdharCard');
const sangatSubmitBtn = document.getElementById('sangatSmitBtn');
const sangatUpdateBtn = document.getElementById('sangatUpdateBtn');
const sangatClearBtn = document.getElementById('sangatClrBtn');



function sangatChooseCentreName() {

    const selectCentreName = document.getElementById("selectSangatCentreName").value;
    const addressContainer = document.getElementById("sangatAddressContainer");

    if (selectCentreName == "SelectCentreName") {

        addressContainer.innerHTML = "";
        sangatCentreError.innerHTML = "";


    } else if (selectCentreName == "Mohindergarh") {
        addressContainer.innerHTML = "";
        sangatCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';


        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="sangatAddressOfCentre" class="Addrs">Your Address :</label>
        <select name="SangatAddress" id="sangatAddressOfCentre">
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
        sangatCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="sangatAddressOfCentre" class="Addrs">Your Address :</label>
        <select name="SangatAddress" id="sangatAddressOfCentre">
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
        sangatCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="sangatAddressOfCentre" class="Addrs">Your Address :</label>
        <select name="SangatAddress" id="sangatAddressOfCentre">
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
        sangatCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="sangatAddressOfCentre" class="Addrs">Your Address :</label>
        <select name="SangatAddress" id="sangatAddressOfCentre">
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
        sangatCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="sangatAddressOfCentre" class="Addrs">Your Address :</label>
        <select name="SangatAddress" id="sangatAddressOfCentre">
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
        sangatCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';



        const div = document.createElement("div");
        div.classList.add("inputBox");

        div.innerHTML = `<label for="sangatAddressOfCentre" class="Addrs">Your Address :</label>
        <select name="SangatAddress" id="sangatAddressOfCentre">
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

function sangatUsrNameFunc() {
    if (sangatUsrName.value.length == 0) {
        sangatNameError.innerHTML = 'Name is required';
        return false
    }
    if (sangatUsrName.value.length <= 3) {
        sangatNameError.innerHTML = 'Enter Valid Name';
        return false
    }
    if (sangatUsrName.value.length > 3) {
        sangatNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

};

function sangatUsrF_H_NameFunc() {
    if (sangatUsrF_H_Name.value.length == 0) {
        sangat_F_H_NameError.innerHTML = 'Name is required';
        return false
    }
    if (sangatUsrF_H_Name.value.length <= 3) {
        sangat_F_H_NameError.innerHTML = 'Enter Valid Name';
        return false
    }
    if (sangatUsrF_H_Name.value.length > 3) {
        sangat_F_H_NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
};

function sangatSelectGenderFun() {
    const genderSelectBtn = document.getElementById("selectSangatCentreName").value;

    if (genderSelectBtn == "SelectGender") {
        sangatGenderError.innerHTML = "";

    } else {
        sangatGenderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };
};

function sangatDesigFun() {

    if (sangatDesignation.value === "SelectDesignation") {
        sangatDesigError.innerHTML = "";

    } else {
        sangatDesigError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };
};


// date ko stop kar diya future date select nahi hogi.
const sangatUserDob = document.getElementById("sangatUsrAge");
sangatUserDob.max = new Date().toISOString().split("T")[0];

function sangatUsrDobFunc() {
    const dobValue = sangatUsrAge.value;

    if (dobValue.length == 0) {
        sangatAgeError.innerHTML = "";
    } else {
        sangatAgeError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };

};

function sangatUsrPhoneFunc() {
    if (sangatUsrPhone.value.length == 0) {
        sangatPhoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if (sangatUsrPhone.value.length !== 10) {
        sangatPhoneError.innerHTML = 'Please no. should be 10 degits';
        return false;
    }
    if (sangatUsrPhone.value.match(/^[0-9]{10}$/)) {
        sangatPhoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function sangatUsrAltPhoneFunc() {
    if (sangatUsrAlt_Phone.value.length == 0) {
        sangatAlt_phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if (sangatUsrAlt_Phone.value.length !== 10) {
        sangatAlt_phoneError.innerHTML = 'Please no. should be 10 degits';
        return false;
    }
    if (sangatUsrAlt_Phone.value.match(/^[0-9]{10}$/)) {
        sangatAlt_phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}


function sangatUsrAdharCardFunc() {

    if (sangatUsrAdharCard.value.length == 0) {
        sangatAdharCardError.innerHTML = 'AdharCard No. is required';
        return false;
    }
    if (sangatUsrAdharCard.value.length !== 12) {
        sangatAdharCardError.innerHTML = `You enter ${sangatUsrAdharCard.value.length}/12`;
        return false;
    }

    sangatAdharCardError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};


sangatClearBtn.onclick = function (e) {
    e.preventDefault();

    let formReset = document.getElementById("sangatDataForm");
    let cnfrm = window.confirm("Are you sure to clear your data?");
    if (cnfrm) {
        formReset.reset();

        sangatCentreError.innerHTML = "";
        sangatNameError.innerHTML = "";
        sangat_F_H_NameError.innerHTML = "";
        sangatGenderError.innerHTML = "";
        sangatPhoneError.innerHTML = "";
        sangatAlt_phoneError.innerHTML = "";
        sangatAgeError.innerHTML = "";
        sangatAdharCardError.innerHTML = "";
        document.getElementById('sangatAddressOfCentre').innerHTML = "";
        document.getElementById("sangatAddressContainer").innerHTML = "";
    } else {
        return false;
    }

};





// sangat form data submit into google excel sheet-----------------------------------

const sangatMessage = document.querySelector(".sangat-msg");
const sangatForm = document.forms['form3'];


const sangatUrl = "https://script.google.com/macros/s/AKfycbwn_SAX5zJjTFRFYguU7IE_lkn8TLDDkhhY6M3FeJ65Aut2k4Fh-QI-_32a18PIRk69yg/exec";

sangatSubmitBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    try {

        if (!sangatUsrNameFunc()) {

            sangatSubmitError.style.display = 'block';
            sangatSubmitError.innerHTML = 'Please fix the error';

            setTimeout(function () {
                sangatSubmitError.style.display = 'none';
            }, 3000)

            return false;
        } else {


            sangatSubmitBtn.innerHTML = `<img width="30" src="loader1.gif" style="filter: brightness(0) saturate(100%) invert(100%) sepia(100%) brightness(100%) contrast(101%);"/>`;



            const res = await fetch(sangatUrl, { method: 'POST', body: new FormData(sangatForm) })

            if (res.ok) {

                sangatMessage.innerHTML = "Thank You for Submit!";
                sangatSubmitBtn.innerHTML = "Save Data";

                sangatSubmitBtn.style.display = "block";
                sangatUpdateBtn.style.display = "none";

                setTimeout(function () {
                    sangatMessage.innerHTML = "";
                }, 5000);

                sangatForm.reset();

                sangatCentreError.innerHTML = "";
                sangatNameError.innerHTML = "";
                sangatDesigError.innerHTML = "";
                sangat_F_H_NameError.innerHTML = "";
                sangatGenderError.innerHTML = "";
                sangatPhoneError.innerHTML = "";
                sangatAlt_phoneError.innerHTML = "";
                sangatAgeError.innerHTML = "";
                sangatAdharCardError.innerHTML = "";
                sangatMessage.style.color = "green";

                const centreName = document.getElementById("selectSangatCentreName").value;
                const addressBox = document.getElementById("sangatAddressContainer");

                if (centreName == "SelectCentreName") {
                    addressBox.innerHTML = "";
                };


            } else {
                throw new Error(`Server responded with ${res.status}`);
            };
        };

    } catch (error) {
        console.error('Error!', error.message);
    };
});



// ----------- sangat information get from google sheet -------------

const sangatSearchBtn = document.getElementById('sangatSearchBtn');
const sangatSearchCentreName = document.getElementById('sangatSearchSelectCentreName');
const searchSangatDesignation = document.getElementById('searchSangatDesignation');
const sangatSearchName = document.getElementById('sangatSearchName');
const sangatFath_Hus_Name = document.getElementById('sangatFath_Hus_Name');
const sangatResultBox = document.querySelector('.sangatResultBox');
const sangatSearchIcon = document.querySelector(".sangatSearchIcon");
const sangatSearchError = document.getElementById('sangat-search-error');
const sangatDataEditButton = document.getElementById('sangatEditBtn');
const sangatExcelButton = document.getElementById('sangatExcelButton');


const SangatIsNew = document.getElementById('SangatIsNew');
const SangatStartRow = document.getElementById('SangatStartRow');




// sangat details print in result box
function sangatDetailsPrint(bulkData) {

    downloadSangatDetailsExcelFormat(bulkData);

    sangatSearchIcon.style.display = 'none';
    sangatSearchBtn.style.display = 'block';
    sangatSearchError.style.display = "none";


    bulkData.forEach((item) => {

        // datetime format ko date me convert karega or actual date print karega.
        const dateStrng = item[5];
        const dateFromSheet = new Date(dateStrng);
        dateFromSheet.setDate(dateFromSheet.getDate() + 1);
        const formattedDate = dateFromSheet.toISOString().split('T')[0];


        const div = document.createElement('div');
        div.classList.add('resultShow');

        div.innerHTML =
            `<div class="center">
<h1 class="centreName">${item[0]}</h1>
<h2 class="showName">${item[2]}</h2>
<span id="versis">W/D/S/o</span>
<h3 class="father_h_Name">${item[3]}</h3>
</div>
<div class="data">
<div class="box">
<p>Designation : </p>
<span> ${item[1]}</span>
</div>
<div class="box">
<p>Gender : </p>
<span> ${item[4]}</span>
</div>
<div class="box">
<p>Date of Birth : </p>
<span>${formattedDate}</span>
</div>
<div class="box">
<p>Phone : </p>
<span> ${item[6]}</span>
</div>
<div class="box">
<p>Alternative Phone No. : </p>
<span> ${item[7]}</span>
</div>
<div class="box">
<p>Address : </p>
<span> ${item[8]}</span>
</div>
<div class="box">
<p>AdharCard No. : </p>
<span> ${item[9]}</span>
</div>
<div class="editBtn">
  <i title="Click For Edit Details" class="fa-solid fa-pen-to-square"></i>
</div>
</div>`;

        sangatResultBox.appendChild(div);

    });


    sangatDetailsEdit(); // this function will be used for when sangat click on edit btn.



    // this condition will be used for editbtn (hide and unhide).
    const val1 = sangatSearchCentreName.value;
    const val2 = searchSangatDesignation.value;
    const val3 = sangatSearchName.value;
    const val4 = sangatFath_Hus_Name.value;


    if (val1 !== "SelectCentreName" && val2 !== "SelectDesignation" && val3 !== "" && val4 !== "" && (val1 !== "ALL" && val2 !== "ALL" && val3 !== "" && val4 !== "")) {

        const editBtns = document.querySelectorAll(".editBtn");

        editBtns.forEach((btn) => {

            btn.style.display = "block";

        });

    } else {

        const edtBtns = document.querySelectorAll(".editBtn");

        edtBtns.forEach((btn) => {

            btn.style.display = "none";

        });

    };



};

// initiation's details edit function 
function sangatDetailsEdit() {

    const dataBox = document.querySelector(".sangatResultBox");


    dataBox.addEventListener("click", function (e) {

        if (e.target.tagName === "I") {


            const data = e.target.closest(".data");

            const centrName = data.previousElementSibling.children[0].innerText;
            const sngtNaam = data.previousElementSibling.children[1].innerText;
            const sngtfNaam = data.previousElementSibling.children[3].innerText;


            const boxes = data.querySelectorAll(".box");


            const sngtDesig = boxes[0].children[1].innerText;
            const sngtGndr = boxes[1].children[1].innerText;
            const sngtDob = boxes[2].children[1].innerText;
            const sngtPhn = boxes[3].children[1].innerText;
            const sngtAltPhn = boxes[4].children[1].innerText;
            const sngtAdrs = boxes[5].children[1].innerText;
            const sngtAdhr = boxes[6].children[1].innerText;




            selectSangatCentreName.value = centrName;
            sangatUsrName.value = sngtNaam;
            sangatUsrF_H_Name.value = sngtfNaam;
            sangatDesignation.value = sngtDesig;
            sangatUsrPhone.value = sngtPhn;
            sangatUsrAlt_Phone.value = sngtAltPhn;
            sangatUsrAge.value = sngtDob;
            sangatGenderSelectBtn.value = sngtGndr;
            sangatUsrAdharCard.value = sngtAdhr;



            if (selectSangatCentreName.value == centrName) {
                sangatChooseCentreName();
                document.getElementById('sangatAddressOfCentre').value = sngtAdrs;
            };






            sangatSubmitBtn.style.display = "none";
            sangatUpdateBtn.style.display = "block";


            sangatCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            sangatNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            sangatDesigError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            sangat_F_H_NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            sangatGenderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            sangatAgeError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            sangatPhoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            sangatAlt_phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            sangatAdharCardError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        };


    });

};

// initiation's details update into database
sangatUpdateBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    sangatSubmitBtn.style.display = "none";
    sangatUpdateBtn.style.display = "block";

    try {

        sangatUpdateBtn.innerHTML = `<img width="30" src="loader1.gif" style="filter: brightness(0) saturate(100%) invert(100%) sepia(100%) brightness(100%) contrast(101%);"/>`;


        const res = await fetch(sangatUrl, { method: 'POST', body: new FormData(sangatForm) })

        if (res.ok) {

            sangatMessage.innerHTML = "Thank You for Update Your Details!";
            sangatUpdateBtn.innerHTML = "Update Data";

            sangatSubmitBtn.style.display = "block";
            sangatUpdateBtn.style.display = "none";


            setTimeout(function () {
                sangatMessage.innerHTML = "";
            }, 5000);

            sangatForm.reset();

            sangatCentreError.innerHTML = "";
            sangatNameError.innerHTML = "";
            sangatDesigError.innerHTML = "";
            sangat_F_H_NameError.innerHTML = "";
            sangatGenderError.innerHTML = "";
            sangatPhoneError.innerHTML = "";
            sangatAlt_phoneError.innerHTML = "";
            sangatAgeError.innerHTML = "";
            sangatAdharCardError.innerHTML = "";
            sangatMessage.style.color = "green";

            const centreName = document.getElementById("selectSangatCentreName").value;
            const addressBox = document.getElementById("sangatAddressContainer");

            if (centreName == "SelectCentreName") {
                addressBox.innerHTML = "";
            };


        } else {
            throw new Error(`Server responded with ${res.status}`);
        };


    } catch (error) {
        console.error('Error!', error.message);
    };
});




// search sangat details from database
sangatSearchBtn.addEventListener("click", function () {

    sangatResultBox.innerHTML = "";
    sangatExcelButton.innerHTML = "";

    sangatSearchBtn.style.display = 'none';
    sangatSearchIcon.style.display = 'block';
    sangatSearchError.style.display = "none";

    if (sangatSearchName.value.length == 0 && searchSangatDesignation.value === 'SelectDesignation' && sangatFath_Hus_Name.value.length == 0 && sangatSearchCentreName.value === "SelectCentreName") {
        sangatSearchName.classList.add('nullError');
        sangatFath_Hus_Name.classList.add('nullError');
        sangatSearchCentreName.classList.add('nullError');
        searchSangatDesignation.classList.add('nullError');

        sangatSearchBtn.style.display = 'block';
        sangatSearchIcon.style.display = 'none';
        sangatSearchError.style.display = "none";


    } else {
        sangatSearchName.classList.remove('nullError');
        sangatFath_Hus_Name.classList.remove('nullError');
        sangatSearchCentreName.classList.remove('nullError');
        searchSangatDesignation.classList.remove('nullError');
        sangatSearchError.style.display = "none";




        let cntr = sangatSearchCentreName.value;
        let desig = searchSangatDesignation.value;
        let nam = sangatSearchName.value;
        let fNam = sangatFath_Hus_Name.value;


        // this condition for update details by centre name, designation , name and father name.
        if (cntr !== "SelectCentreName" && desig !== "SelectDesignation" && nam !== "" && fNam !== "" && (cntr !== "ALL" && desig !== "ALL" && nam !== "" && fNam !== "")) {

            fetch("https://script.google.com/macros/s/AKfycbwn_SAX5zJjTFRFYguU7IE_lkn8TLDDkhhY6M3FeJ65Aut2k4Fh-QI-_32a18PIRk69yg/exec?page=search&cntr=" + cntr + "&desig=" + desig + "&nam=" + nam + "&fNam=" + fNam)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                    let record = data.record;
                    let rowNumber = data.SR;

                    SangatIsNew.value = 'N';
                    SangatStartRow.value = rowNumber;


                    sangatDetailsPrint(record);

                });
        };









        setTimeout(() => {

            const URL = "https://script.google.com/macros/s/AKfycbwn_SAX5zJjTFRFYguU7IE_lkn8TLDDkhhY6M3FeJ65Aut2k4Fh-QI-_32a18PIRk69yg/exec?page=all";
            fetch(URL)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                    let val1 = sangatSearchCentreName.value;
                    let val2 = searchSangatDesignation.value;
                    let val3 = sangatSearchName.value;
                    let val4 = sangatFath_Hus_Name.value;



                    let bulkData = [];


                    // all filters conditions for sangat's details.
                    if (val1 !== 'SelectCentreName' && val2 === 'SelectDesignation' && val3 === '' && val4 === '') {

                        if (val1 !== "ALL") {

                            data.content.filter(item => {
                                if (item.includes(val1)) {

                                    bulkData.push(item);
                                }
                            });

                        } else if (val1 === "ALL") {

                            const filteredItems = data.content.filter((item, index) => index !== 0);

                            filteredItems.forEach(item => {

                                bulkData.push(item);

                            });

                        }

                    } else if (val1 === 'SelectCentreName' && val2 !== 'SelectDesignation' && val3 === '' && val4 === '') {

                        if (val2 !== 'ALL') {

                            data.content.filter(item => {

                                if (item.includes(val2)) {

                                    bulkData.push(item);

                                }

                            });

                        } else if (val2 === 'ALL') {

                            const filteredItems = data.content.filter((item, index) => index !== 0);

                            filteredItems.forEach(item => {

                                bulkData.push(item);

                            });
                        };

                    } else if (val1 === 'SelectCentreName' && val2 === 'SelectDesignation' && val3 !== '' && val4 !== '') {

                        data.content.filter(item => {

                            if (item.includes(val3) && item.includes(val4)) {

                                bulkData.push(item);

                            }

                        });


                    } else if (val1 !== 'SelectCentreName' && val2 !== 'SelectDesignation' && val3 === '' && val4 === '') {

                        if (val1 === 'ALL' && val2 !== 'ALL') {

                            data.content.filter(item => {

                                if (item.includes(val2)) {

                                    bulkData.push(item);
                                }

                            });

                        } else if (val1 !== 'ALL' && val2 === 'ALL') {

                            data.content.filter(item => {

                                if (item.includes(val1)) {

                                    bulkData.push(item);
                                }

                            });
                        } else if (val1 !== 'ALL' && val2 !== 'ALL') {

                            data.content.filter(item => {

                                if (item.includes(val1) && item.includes(val2)) {

                                    bulkData.push(item);
                                }

                            });

                        } else if (val1 === 'ALL' && val2 === 'ALL') {

                            const filteredItems = data.content.filter((item, index) => index !== 0);

                            filteredItems.forEach(item => {

                                bulkData.push(item);

                            });
                        }

                    } else if (val1 !== 'SelectCentreName' && val2 === 'SelectDesignation' && val3 !== '' && val4 !== '') {

                        if (val1 !== "ALL" && val3 !== "" && val4 !== "") {

                            data.content.filter(item => {

                                if (item.includes(val1) && item.includes(val3) && item.includes(val4)) {

                                    bulkData.push(item);
                                }
                            });

                        } else if (val1 === "ALL" && val3 !== "" && val4 !== "") {

                            data.content.filter(item => {

                                if (item.includes(val3) && item.includes(val4)) {

                                    bulkData.push(item);
                                }
                            });

                        }


                    } else if (val1 === 'SelectCentreName' && val2 !== 'SelectDesignation' && val3 !== '' && val4 !== '') {

                        if (val2 !== 'ALL' && val3 !== '' && val4 !== '') {

                            data.content.filter(item => {

                                if (item.includes(val2) && item.includes(val3) && item.includes(val4)) {

                                    bulkData.push(item);
                                }

                            });

                        } else if (val2 === 'ALL' && val3 !== '' && val4 !== '') {

                            data.content.filter(item => {

                                if (item.includes(val3) && item.includes(val4)) {

                                    bulkData.push(item);
                                }

                            });
                        };

                    };





                    if (bulkData.length !== 0) {

                        sangatDetailsPrint(bulkData);

                    } else {

                        sangatSearchIcon.style.display = 'none';
                        sangatSearchBtn.style.display = 'block';

                        if (sangatResultBox.innerHTML !== "") {
                            sangatSearchError.style.display = "none";
                        } else {
                            sangatSearchError.style.display = "block";
                        };
                    };



                });

        }, 10);

    }


});

// Download Sangat search data in excel format.
function downloadSangatDetailsExcelFormat(bulkData) {

    // Create a new Excel Workbook
    const workbook = XLSX.utils.book_new();

    // Add headings
    const headings = ['Sr._No.', 'Centre_Name', 'Designation', 'Sangat_Name', 'Father/Husband_Name', 'Gender', 'Date_Of_Birth', 'Mobile_No.', 'Alternative_Mobile_No.', 'Address', 'AdharCard_No.'];


    // Create an array to store all data rows
    const allDataRows = [];

    // Loop through each element in bulkData
    bulkData.forEach((sewadar, index) => {
        // Extract values for the current row
        const rowData = [
            index + 1,
            sewadar[0],
            sewadar[1],
            sewadar[2],
            sewadar[3],
            sewadar[4],
            DDMMYYConvert(sewadar[5]),
            sewadar[6],
            sewadar[7],
            sewadar[8],
            sewadar[9],
            sewadar[10],
        ];


        allDataRows.push(rowData);
    });


    // Combine headings with all data rows
    const dataWithHeadings = [headings, ...allDataRows];

    // Add a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(dataWithHeadings);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "BulkData");

    // Convert the workbook to a binary string
    const excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

    // Convert the binary string to a Blob
    const blob = new Blob([s2ab(excelData)], { type: "application/octet-stream" });

    // Create a download link
    const url = window.URL.createObjectURL(blob);
    const buttonHtml = `<button type="download" title="Download In Excel Format" class="sangatBulkDataExcel" onclick="excelDownload('${url}')">Download Excel</button>`;
    sangatExcelButton.innerHTML = buttonHtml;

    // Function to convert binary string to array buffer
    function s2ab(s) {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
};


// boxFour code end here //





// boxFive code start here //

const nominalRollIdError = document.getElementById('nominal-roll-id-error');
const nominalCentreError = document.getElementById('nominal-centre-error');
const areaNameError = document.getElementById('area-name-error');
const nominalNameError = document.getElementById('nominal-name-error');
const driverNameError = document.getElementById('driver-name-error');
const vehicleNameError = document.getElementById('vehicle-name-error');
const vehicleNumberError = document.getElementById('vehicle-number-error');
const placeNameError = document.getElementById('place-name-error');
const sewaDurationFromError = document.getElementById('sewa-duration-from-error');
const sewaDurationToError = document.getElementById('sewa-duration-to-error');
const departmentSewaError = document.getElementById('department-sewa-error');
const jathedarNameError = document.getElementById('jathedar-name-error');
const jathedarSignDateError = document.getElementById('jathedar-sign-date-error');
const secretaryNameError = document.getElementById('secretary-name-error');
const secSignDateError = document.getElementById('sec-sign-date-error');
const nominalSumbitError = document.getElementById('nominal-subit-error');

const nominalRollId = document.getElementById('nominalRollId');
const nominalRollTable = document.getElementById('nominalRollTable');
const selectNominalCentreName = document.getElementById('selectNominalCentreName');

const nameOfArea = document.getElementById('nameOfArea');
const nameOfJathedar = document.getElementById('nameOfJathedar');
const nameOfDriver = document.getElementById('nameOfDriver');
const vehicleName = document.getElementById('vehicleName');
const vehicleNumber = document.getElementById('vehicleNumber');
const placeOfSewa = document.getElementById('placeOfSewa');
const durationOfSewa = document.getElementById('durationOfSewa');
const sewaTo = document.getElementById('sewaTo');
const departmentSewa = document.getElementById('departmentSewa');
const jathedarSignName = document.getElementById('jathedarSignName');
const jathedarSignDate = document.getElementById('jathedarSignDate');
const secretarySignName = document.getElementById('secretarySignName');
const secSignDate = document.getElementById('secSignDate');
const nominalSubmitBtn = document.getElementById('nominalSmitBtn');
const nominalUpdateBtn = document.getElementById('nominalUpdateBtn');
const nominalCreateBtn = document.getElementById('nominalCreateBtn');
const nominalClearBtn = document.getElementById('nominalClrBtn');
const nominalFinlSubmitBtn = document.getElementById('nominalFinlSubmitBtn');


const IsNew = document.getElementById('IsNew');
const StartRow = document.getElementById('StartRow');
const RowCount = document.getElementById('RowCount');



let maleCount = document.getElementById('maleCount');
let femaleCount = document.getElementById('femaleCount');
let totalCount = document.getElementById('totalCount');

let badgeMaleCount = document.getElementById('badgeMaleCount');
let badgeFemaleCount = document.getElementById('badgeFemaleCount');
let badgeTotalCount = document.getElementById('badgeTotalCount');

const automaticFillJathedarName = document.getElementById('automaticFillJathedarName');
const maleFemaleTotalOfSewa = document.querySelector('.maleFemaleTotalOfSewa');
const maleFemaleTotalOfBadge = document.querySelector('.maleFemaleTotalOfBadge');


function nominalRollIdFunc() {

    if (nominalRollId.value.length == 0) {
        nominalRollIdError.innerHTML = 'Enter Nominal Roll Id';
        return false
    }
    if (nominalRollId.value.length <= 17) {
        nominalRollIdError.innerHTML = 'Enter Valid Nominal Roll Id';
        return false
    }
    if (nominalRollId.value.length >= 18) {
        nominalRollIdError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        dataAutomaticFillByNominalRollId(nominalRollId.value);
        return true;
    }
};

function nominalChooseCentreName() {

    const selectCentreName = document.getElementById("selectNominalCentreName").value;

    if (selectCentreName == "SelectCentreName") {

        nominalCentreError.innerHTML = "Please Choose Centre Name";
        nameOfArea.value = "";
        areaNameError.innerHTML = 'Choose Your Centre Name';

    } else if (selectCentreName == "MOHINDERGARH") {

        nominalCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        nameOfArea.value = "REWARI";
        areaNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    } else if (selectCentreName == "BAWANIA") {
        nominalCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        nameOfArea.value = "REWARI";
        areaNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    } else if (selectCentreName == "BAIRAWAS") {
        nominalCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        nameOfArea.value = "REWARI";
        areaNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    } else if (selectCentreName == "ZERPUR") {
        nominalCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        nameOfArea.value = "REWARI";
        areaNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    } else if (selectCentreName == "SATNALI") {
        nominalCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        nameOfArea.value = "REWARI";
        areaNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    } else if (selectCentreName == "SEHLANG") {
        nominalCentreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        nameOfArea.value = "REWARI";
        areaNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };

};

function jathedarNameFunc() {
    if (nameOfJathedar.value.length == 0) {
        nominalNameError.innerHTML = 'Name is required';
        automaticFillJathedarName.innerHTML = "";
        return false
    }
    if (nameOfJathedar.value.length < 4) {
        nominalNameError.innerHTML = 'Enter Valid Name';
        return false
    }
    if (nameOfJathedar.value.length >= 4) {
        nominalNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        automaticFillJathedarName.innerHTML = nameOfJathedar.value;
        return true;
    }


};

function driverNameFunc() {
    if (nameOfDriver.value.length == 0) {
        driverNameError.innerHTML = 'Name is required';
        return false
    }
    if (nameOfDriver.value.length <= 3) {
        driverNameError.innerHTML = 'Enter Valid Name';
        return false
    }
    if (nameOfDriver.value.length > 3) {
        driverNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
};

function vehicleNameFunc() {
    if (vehicleName.value.length == 0) {
        vehicleNameError.innerHTML = 'Name is required';
        return false
    }
    if (vehicleName.value.length <= 3) {
        vehicleNameError.innerHTML = 'Enter Valid Name';
        return false
    }
    if (vehicleName.value.length > 3) {
        vehicleNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
};

function vehicleNumberFunc() {
    if (vehicleNumber.value.length == 0) {
        vehicleNumberError.innerHTML = 'Vehicle no. is required';
        return false;
    }
    if (vehicleNumber.value.length <= 4) {
        vehicleNumberError.innerHTML = 'Please enter valid number';
        return false;
    }
    if (vehicleNumber.value.length > 4) {
        vehicleNumberError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

}

function placeOfSewaFunc() {
    if (placeOfSewa.value == "SelectSewaPlace") {
        placeNameError.innerHTML = 'Place is required';
        return false

    } else {
        placeNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

};

function departmentSewaFunc() {
    if (departmentSewa.value == "ChooseYourDepartment") {
        departmentSewaError.innerHTML = 'Department is Required';
        return false

    } else {

        departmentSewaError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
};

function durationOfSewaFunc() {
    const durationSewa = durationOfSewa.value;

    if (durationSewa.length == 0) {
        sewaDurationFromError.innerHTML = "Enter From Date";
    } else {
        sewaDurationFromError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };

};

function sewaToFunc() {
    const sewaDurationTo = sewaTo.value;

    if (sewaDurationTo.length == 0) {
        sewaDurationToError.innerHTML = "Enter To Date";
    } else {
        sewaDurationToError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };

};

function jathedarSignFunc() {
    if (jathedarSignName.value.length == 0) {
        jathedarNameError.innerHTML = 'Name is required';
        return false
    }
    if (jathedarSignName.value.length <= 3) {
        jathedarNameError.innerHTML = 'Enter Valid Name';
        return false
    }
    if (jathedarSignName.value.length > 3) {
        jathedarNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
};

function jathedarSignDateFunc() {
    const signDate = jathedarSignDate.value;

    if (signDate.length == 0) {
        jathedarSignDateError.innerHTML = "";
    } else {
        jathedarSignDateError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };

};

function secretaryNameFunc() {
    if (secretarySignName.value.length == 0) {
        secretaryNameError.innerHTML = 'Name is required';
        return false
    }
    if (secretarySignName.value.length <= 3) {
        secretaryNameError.innerHTML = 'Enter Valid Name';
        return false
    }
    if (secretarySignName.value.length > 3) {
        secretaryNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
};

function secSignDateFunc() {

    if (secSignDate.value.length == 0) {
        secSignDateError.innerHTML = "";
    } else {
        secSignDateError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };

};


nominalClearBtn.onclick = function (e) {
    e.preventDefault();

    let formReset = document.getElementById("nominalDataForm");
    let cnfrm = window.confirm("Are you sure to clear your data?");
    if (cnfrm) {

        formReset.reset();

        nominalUpdateBtn.style.display = "none";
        nominalSubmitBtn.style.display = "block";

        nominalRollIdError.innerHTML = "";
        nominalCentreError.innerHTML = "";
        areaNameError.innerHTML = "";
        nominalNameError.innerHTML = "";
        driverNameError.innerHTML = "";
        vehicleNameError.innerHTML = "";
        vehicleNumberError.innerHTML = "";
        placeNameError.innerHTML = "";
        sewaDurationFromError.innerHTML = "";
        sewaDurationToError.innerHTML = "";
        departmentSewaError.innerHTML = "";
        automaticFillJathedarName.innerHTML = "";
        jathedarSignDateError.innerHTML = "";
        secretaryNameError.innerHTML = "";
        secSignDateError.innerHTML = "";
        maleCount.innerHTML = "00";
        femaleCount.innerHTML = "00";
        totalCount.innerHTML = "00";
        badgeMaleCount.innerHTML = "00";
        badgeFemaleCount.innerHTML = "00";
        badgeTotalCount.innerHTML = "00";
        nominalRollTable.innerHTML = "";
        nominalRollTableOfBadge.innerHTML = "";
    } else {
        return false;
    }

};





// form4 create nominal data submit into google excel sheet---------------------------------
const nominalMessage = document.getElementById("nominal-success-msg");
const nominalForm = document.forms['form4'];

const nominalUrl = "https://script.google.com/macros/s/AKfycbz-qiQZkRbaeHlJ1gERoisJMyvxLPr-EI2DqFFZeGz1NsDCzniFAih7sdmWtGUHW_GOCw/exec";

let idNumber = "";

// final submit into database
nominalFinlSubmitBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    nominalUpdateBtn.style.display = "none";
    nominalSubmitBtn.style.display = "block";

    try {

        if (!nominalRollIdFunc()) {
            nominalSumbitError.style.display = 'block';
            nominalSumbitError.innerHTML = 'Please fix the error';

            setTimeout(function () {
                nominalSumbitError.style.display = 'none';
            }, 3000);

            return false;
        } else {

            if ((nominalRollTable.children.length === 0 && nominalRollTableOfBadge.children.length === 0)) {

                const cnfrmMsg = confirm("Please Enter Valid Data Into The Tables And Ensure Nominal Roll ID Is Correct.");

                if (cnfrmMsg === true || cnfrmMsg === false) {
                    console.log("Please Enter Sewadar's Details.");
                }

                return;

            } else if ((nominalRollTable.children.length > 0 || nominalRollTableOfBadge.children.length > 0) && nominalRollIdFunc()) {

                nominalFinlSubmitBtn.innerHTML = `<img width="30" src="loader1.gif" style="filter: brightness(0) saturate(100%) invert(100%) sepia(100%) brightness(100%) contrast(101%);"/>`;

                const res = await fetch(nominalUrl, { method: 'POST', body: new FormData(nominalForm) });


                if (res.ok) {

                    nominalMessage.innerHTML = "Thank You for Submit!";
                    nominalFinlSubmitBtn.innerHTML = "Final Submit";
                    localStorage.removeItem(idNumber);


                    // this code for delete all rows when create the nominal Roll and submit into database.
                    let table = document.getElementById('nominalRollTable');

                    if (table) {
                        while (table.rows.length > 0) {
                            table.deleteRow(0);
                            maleCount.innerHTML = "00";
                            femaleCount.innerHTML = "00";
                            totalCount.innerHTML = "00";
                        }
                    };


                    let table1 = document.getElementById('nominalRollTableOfBadge');

                    if (table1) {
                        while (table1.rows.length > 0) {
                            table1.deleteRow(0);
                            badgeMaleCount.innerHTML = "00";
                            badgeFemaleCount.innerHTML = "00";
                            badgeTotalCount.innerHTML = "00";
                        }
                    };


                    setTimeout(function () {
                        nominalMessage.innerHTML = "";
                    }, 5000);

                    nominalForm.reset();

                    nominalRollIdError.innerHTML = "";
                    nominalCentreError.innerHTML = "";
                    areaNameError.innerHTML = "";
                    nominalNameError.innerHTML = "";
                    driverNameError.innerHTML = "";
                    vehicleNameError.innerHTML = "";
                    vehicleNumberError.innerHTML = "";
                    placeNameError.innerHTML = "";
                    sewaDurationFromError.innerHTML = "";
                    sewaDurationToError.innerHTML = "";
                    departmentSewaError.innerHTML = "";


                    if (nameOfJathedar.value.length == 0) {
                        automaticFillJathedarName.innerHTML = "";
                    }

                    if (jathedarSignDate.value.length == 0) {
                        jathedarSignDateError.innerHTML = "";
                    }

                    if (secretarySignName.value.length == 0) {
                        secretaryNameError.innerHTML = "";
                    }

                    if (secSignDate.value.length == 0) {
                        secSignDateError.innerHTML = "";
                    }


                } else {
                    throw new Error(`Server responded with ${res.status}`);
                }

            }
        }
    } catch (error) {
        console.error('Error!', error.message);
    }
});


// nominal data send into pending page URL
const jathaNominalUrl = "https://script.google.com/macros/s/AKfycbyNwWrYuvZKbCqUhFMiS9Am83R6QiKViJwWW96sH2eFK0GE_JWiwmeeWrNg4fF1Jcfzew/exec";

// user click on update button then data send into pending page and update data into database.
nominalUpdateBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    try {

        if (!nominalRollIdFunc()) {
            nominalSumbitError.style.display = 'block';
            nominalSumbitError.innerHTML = 'Please fix the error';

            setTimeout(function () {
                nominalSumbitError.style.display = 'none';
            }, 3000);

            return false;
        } else {

            const formDataObject = {
                "NominalRollId": nominalRollId.value,
                "NameOfSatsangPlace": selectNominalCentreName.value,
                "DepartmentAndCentreName": departmentSewa.value,
                "FromDateSewa": durationOfSewa.value,
                "ToDateSewa": sewaTo.value,
                "SewaPlaceOfSewa": placeOfSewa.value,
                "CardFooterDate": createCardFooterDate(),
            };

            const formDataString = JSON.stringify(formDataObject);

            nominalUpdateBtn.innerHTML = `<img width="30" src="loader1.gif" style="filter: brightness(0) saturate(100%) invert(100%) sepia(100%) brightness(100%) contrast(101%);"/>`;


            const res = await fetch(jathaNominalUrl, { method: 'POST', body: new FormData(nominalForm) });

            if (res.ok) {

                localStorage.setItem(idNumber, formDataString);
                nominalUpdateBtn.innerHTML = "Update Data";
                callDataSend();

            } else {
                throw new Error(`Server responded with ${res.status}`);
            }
        }

    } catch (error) {
        console.error('Error!', error.message);
    }


});

// first time save data into pending page
const uniqueKey = Date.now().toString();

nominalSubmitBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    nominalUpdateBtn.style.display = "none";
    nominalSubmitBtn.style.display = "block";

    try {

        if (!nominalRollIdFunc()) {
            nominalSumbitError.style.display = 'block';
            nominalSumbitError.innerHTML = 'Please fix the error';

            setTimeout(function () {
                nominalSumbitError.style.display = 'none';
            }, 3000);

            return false;
        } else {

            nominalSubmitBtn.innerHTML = `<img width="30" src="loader1.gif" style="filter: brightness(0) saturate(100%) invert(100%) sepia(100%) brightness(100%) contrast(101%);"/>`;


            const formDataObject = {
                "NominalRollId": nominalRollId.value,
                "NameOfSatsangPlace": selectNominalCentreName.value,
                "DepartmentAndCentreName": departmentSewa.value,
                "FromDateSewa": durationOfSewa.value,
                "ToDateSewa": sewaTo.value,
                "SewaPlaceOfSewa": placeOfSewa.value,
                "CardFooterDate": createCardFooterDate(),
            };

            const formDataString = JSON.stringify(formDataObject);


            // Get all keys from localStorage
            const keys = Object.keys(localStorage);

            // only timestamp vali keys ko get karega.
            const dateKeys = keys.filter(key => /^\d+$/.test(key));

            let foundInLocalStorage = false;

            for (const key of dateKeys) {
                const value = localStorage.getItem(key);
                const parseValue = JSON.parse(value);

                if (nominalRollId.value === parseValue.NominalRollId && selectNominalCentreName.value === parseValue.NameOfSatsangPlace && departmentSewa.value === parseValue.DepartmentAndCentreName && durationOfSewa.value === parseValue.FromDateSewa && sewaTo.value === parseValue.ToDateSewa && placeOfSewa.value === parseValue.SewaPlaceOfSewa) {
                    foundInLocalStorage = true;
                    displayMessage();
                    break;
                }
            };


            if (!foundInLocalStorage) {

                try {
                    const res = await fetch(jathaNominalUrl, { method: 'POST', body: new FormData(nominalForm) });

                    if (res.ok) {
                        localStorage.setItem(uniqueKey, formDataString);
                        nominalSubmitBtn.innerHTML = "Save Data";
                        callDataSend();
                    } else {
                        throw new Error(`Server responded with ${res.status}`);
                    }
                } catch (err) {
                    console.error('Error:', err.message);
                }
            }

        }
    } catch (error) {
        console.error('Error!', error.message);
    }
});



// create date for card's footer
function createCardFooterDate() {

    const createDate = new Date();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const crtDt = createDate.getDate();
    const crtDy = createDate.getDay();
    const crtMnth = createDate.getMonth();
    const crtYr = createDate.getFullYear();
    const crtHr = createDate.getHours();
    const crtMnt = createDate.getMinutes();


    function convertTo12HourFormat(hours, minutes) {

        let ampm = hours >= 12 ? 'PM' : 'AM';
        let formattedHours = hours % 12;
        formattedHours = formattedHours ? formattedHours : 12;

        let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        return formattedHours + ':' + formattedMinutes + ' ' + ampm;
    };

    const formattedTimeDate = convertTo12HourFormat(crtHr, crtMnt);
    const fullDateOfCreate = `${days[crtDy]} ${crtDt} ${months[crtMnth]} ${crtYr} ${formattedTimeDate}`;

    return fullDateOfCreate;

};

// if nominal roll's details find in database then call this function.
function displayMessage() {

    nominalSubmitBtn.innerHTML = "Save Data";
    const cnfrmData = confirm("This Details Allready Save In Our Database. You Can See In Pending Tab.");

    if (cnfrmData === true || cnfrmData === false) {
        console.log("You Should Check In Pending Page..");
    }

};

// if nominal roll's details not find in database then call this function.
function callDataSend() {

    nominalMessage.innerHTML = "Thank You for Submit!";

    nominalUpdateBtn.style.display = "none";
    nominalSubmitBtn.style.display = "block";


    // this code for delete all rows when create the nominal Roll and submit into database.
    let table = document.getElementById('nominalRollTable');

    if (table) {
        while (table.rows.length > 0) {
            table.deleteRow(0);
            maleCount.innerHTML = "00";
            femaleCount.innerHTML = "00";
            totalCount.innerHTML = "00";
        }
    };


    let table1 = document.getElementById('nominalRollTableOfBadge');

    if (table1) {
        while (table1.rows.length > 0) {
            table1.deleteRow(0);
            badgeMaleCount.innerHTML = "00";
            badgeFemaleCount.innerHTML = "00";
            badgeTotalCount.innerHTML = "00";
        }
    };


    setTimeout(function () {
        nominalMessage.innerHTML = "";
    }, 5000);

    nominalForm.reset();

    nominalRollIdError.innerHTML = "";
    nominalCentreError.innerHTML = "";
    areaNameError.innerHTML = "";
    nominalNameError.innerHTML = "";
    driverNameError.innerHTML = "";
    vehicleNameError.innerHTML = "";
    vehicleNumberError.innerHTML = "";
    placeNameError.innerHTML = "";
    sewaDurationFromError.innerHTML = "";
    sewaDurationToError.innerHTML = "";
    departmentSewaError.innerHTML = "";


    if (nameOfJathedar.value.length == 0) {
        automaticFillJathedarName.innerHTML = "";
    }

    if (jathedarSignDate.value.length == 0) {
        jathedarSignDateError.innerHTML = "";
    }

    if (secretarySignName.value.length == 0) {
        secretaryNameError.innerHTML = "";
    }

    if (secSignDate.value.length == 0) {
        secSignDateError.innerHTML = "";
    }


};


const cardBoxes = document.getElementById("cardBoxes");
const pendingButton = document.getElementById("pendingBtn");
const jathaCentreName = document.getElementById("jathaCentreName");
const jathaDepartmentName = document.getElementById("jathaDepartmentName");
const jathaFromDate = document.getElementById("jathaFromDate");
const jathaToDate = document.getElementById("jathaToDate");
const jathaPlaceName = document.getElementById("jathaPlaceName");
const loaderImg = document.getElementById("loaderContainer");

let inrTime = document.querySelector('.inrTime');
let count = 0;
let interval;

const badgeNumberSelect = document.querySelector(".badgeNumberSelect");

const jathaSubmitBtn = document.getElementById("jathaSubmitBtn");
const jathaEditBtn = document.getElementById("jathaEditBtn");
const jathaDeleteBtn = document.getElementById("jathaDeleteBtn");


// this function call when user put nominal roll id into nominal roll input field.

let isDataFetched = false;

function dataAutomaticFillByNominalRollId(nominalIdNum) {

    if (!isDataFetched) {

        const no = nominalIdNum;

        fetch("https://script.google.com/macros/s/AKfycbyNwWrYuvZKbCqUhFMiS9Am83R6QiKViJwWW96sH2eFK0GE_JWiwmeeWrNg4fF1Jcfzew/exec?page=search&no=" + no)
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                let record = data.record;

                let bulkData = [];
                let firstPart = [];
                let secondPart = [];
                let includeNextRows = false;
                let isNominalIdFound = false;

                for (const row of record) {
                    if (row.length === 25) {
                        // Extract the first 14 cells
                        firstPart = row.slice(0, 14);

                        // Extract the next 11 cells (from index 14 to 24)
                        secondPart = row.slice(14, 25);

                        if (row.includes(nominalIdNum)) {
                            bulkData.push(firstPart);
                            includeNextRows = true;
                            isNominalIdFound = true;
                        } else {
                            includeNextRows = false;
                            bulkData.push(secondPart);
                        }
                    }
                };

                if (!isNominalIdFound) {
                    console.log("Nominal ID Not Found In Our Database.");
                };


                if (bulkData.length === 0) {

                    const dataNot = confirm("Check The Nominal Roll ID. If It Is Correct Then It Has Been More Than 3 Days. These Details Are Stored In The Pending Tab As The System Automatically Deletes Them After 3 Days.");

                    if (dataNot === true || dataNot === false) {
                        console.log("Parameters are not correct.")
                        loaderImg.style.display = "none";
                    }

                } else {


                    const cnfrmMsg = confirm("Edit Nominal Roll For Badge Sewadar Press Ok Rather Than Press Cancel. (Check Create Nominal Roll Tab)")

                    let verify = false;

                    if (cnfrmMsg === true) {

                        nominalRollTableList.style.display = "none";
                        nominalRollTableOfBadgeSewadar.style.display = "block";

                        document.querySelector(".maleFemaleTotalOfSewa").style.display = "none";
                        document.querySelector(".maleFemaleTotalOfBadge").style.display = "block";

                        verify = true;
                        editJathaDataInNominalRoll(bulkData, verify);

                    } else {

                        nominalRollTableList.style.display = "block";
                        nominalRollTableOfBadgeSewadar.style.display = "none";

                        document.querySelector(".maleFemaleTotalOfSewa").style.display = "block";
                        document.querySelector(".maleFemaleTotalOfBadge").style.display = "none";

                        verify = false;
                        editJathaDataInNominalRoll(bulkData, verify);

                    };


                };



            })
            .catch(error => console.error('Error:', error));

        isDataFetched = true;
    };
};


// this code for jatha details edit in nominal Roll. ---------------------
function jathaNominalEditBtn(e) {

    startTimer();

    const card = e.closest('.card');
    loaderImg.style.display = "block";


    idNumber = card.id;


    const nominalId = card.querySelector('.nominalRollId').innerText;


    let no = nominalId;

    fetch("https://script.google.com/macros/s/AKfycbyNwWrYuvZKbCqUhFMiS9Am83R6QiKViJwWW96sH2eFK0GE_JWiwmeeWrNg4fF1Jcfzew/exec?page=search&no=" + no)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            let record = data.record;
            let rowNumber = data.SR;
            let countRow = data.CNT;


            IsNew.value = 'N';
            StartRow.value = rowNumber;
            RowCount.value = countRow;


            let bulkData = [];
            let firstPart = [];
            let secondPart = [];
            let includeNextRows = false;

            for (const row of record) {
                if (row.length === 25) {
                    // Extract the first 14 cells
                    firstPart = row.slice(0, 14);

                    // Extract the next 11 cells (from index 14 to 24)
                    secondPart = row.slice(14, 25);

                    if (row.includes(nominalId)) {
                        bulkData.push(firstPart);
                        includeNextRows = true;
                    } else {
                        includeNextRows = false;
                        bulkData.push(secondPart);
                    }

                }
            };


            if (bulkData.length === 0) {

                const dataNot = confirm("Check The Nominal Roll ID. If It Is Correct Then It Has Been More Than 3 Days. These Details Are Stored In The Pending Tab As The System Automatically Deletes Them After 3 Days.");

                if (dataNot === true || dataNot === false) {
                    console.log("Parameters are not correct.")
                    loaderImg.style.display = "none";
                }

            } else {


                const cnfrmMsg = confirm("Edit Nominal Roll For Badge Sewadar Press Ok Rather Than Press Cancel. (Check Create Nominal Roll Tab)")

                let verify = false;

                if (cnfrmMsg === true) {

                    nominalRollTableList.style.display = "none";
                    nominalRollTableOfBadgeSewadar.style.display = "block";

                    document.querySelector(".maleFemaleTotalOfSewa").style.display = "none";
                    document.querySelector(".maleFemaleTotalOfBadge").style.display = "block";

                    verify = true;
                    editJathaDataInNominalRoll(bulkData, verify);

                } else {

                    nominalRollTableList.style.display = "block";
                    nominalRollTableOfBadgeSewadar.style.display = "none";

                    document.querySelector(".maleFemaleTotalOfSewa").style.display = "block";
                    document.querySelector(".maleFemaleTotalOfBadge").style.display = "none";

                    verify = false;
                    editJathaDataInNominalRoll(bulkData, verify);

                };


            };
        })
        .catch(error => console.error('Error:', error));
};

// ye date format ko change karega yy/mm/dd me
function dateConvertYYMMDD(item) {

    if (item !== "") {
        const inputFromDate = new Date(item);
        const year = inputFromDate.getFullYear();
        const month = ("0" + (inputFromDate.getMonth() + 1)).slice(-2);
        const day = ("0" + inputFromDate.getDate()).slice(-2);
        const sewaFromDt = `${year}-${month}-${day}`;
        return sewaFromDt;
    }
};

// nominal data send into nominal for edit details
function editJathaDataInNominalRoll(editData, verify) {

    nominalUpdateBtn.style.display = "block";
    nominalSubmitBtn.style.display = "none";
    badgeNumberSelect.style.display = "none";
    badgeSewadarSearchBtn.style.display = "none";
    sangatSewadarSearchBtn.style.display = "block";


    clickForWithoutBadgeEdit();


    for (const row of editData) {

        if (row.length === 14) {

            nominalRollId.value = row[0];
            selectNominalCentreName.value = row[1];
            nameOfArea.value = row[2];
            nameOfJathedar.value = row[3] || "";

            if (row[4].innerHTML !== "" && row[5].innerHTML !== "" && row[6].innerHTML !== "") {

                nameOfDriver.value = row[4];
                vehicleName.value = row[5];
                vehicleNumber.value = row[6];
            }

            placeOfSewa.value = row[7];
            durationOfSewa.value = dateConvertYYMMDD(row[8]);
            sewaTo.value = dateConvertYYMMDD(row[9]);
            departmentSewa.value = row[10];
            automaticFillJathedarName.innerHTML = row[3] || "";

            jathedarSignDate.value = dateConvertYYMMDD(row[11]) || "";
            secSignDate.value = dateConvertYYMMDD(row[13]) || "";


            if (row[12]) {
                secretarySignName.value = row[12] || "";
            }


        } else if (row.length === 11) {

            if (verify === true) {

                function updateCounts() {

                    let gender = row[5].trim();

                    if (gender === "Male") {
                        badgeMaleCount.innerHTML = parseInt(badgeMaleCount.innerHTML) + 1;
                    } else if (gender === "Female") {
                        badgeFemaleCount.innerHTML = parseInt(badgeFemaleCount.innerHTML) + 1;
                    }
                    badgeTotalCount.innerHTML = parseInt(badgeTotalCount.innerHTML) + 1;
                };

                updateCounts();

                let rowNumber = parseInt(nominalRollTableOfBadge.rows.length) + 1;

                const createTableRow = document.createElement('tr');

                createTableRow.innerHTML =
                    `<td><input type="text" name="SrNoSewa" value="${rowNumber}"></td>
                    <td><input type="text" name="BadgeOfSewadarTd" value="${row[1]}"></td>
                    <td class="hideData"><input type="text" name="Designation" value="${row[2]}"></td>
                    <td><input type="text" name="NameOfSewadarTd" value="${row[3]}"></td>
                    <td><input type="text" name="FHNameTd" value="${row[4]}"></td>
                    <td><input type="text" name="GenderTd" value="${row[5]}"></td>
                    <td><input type="text" name="AgeTd" value="${row[6]}"></td>
                    <td><input type="text" name="AddressTd" value="${row[7]}"></td>
                    <td class="hideData"><input type="text" name="MobileNoTd" value="${row[8]}"></td>
                   <td class="hideData"><input type="text" name="AadharCardTd" value="${row[9]}">
                   <span id="deleteIconOfNominal">
                     <i class="fa-solid fa-trash-can"></i>
                    </span>
                   </td>
                    <td class="hideData">
                   <select name="Status">
                   <option value="Present">${row[10]}</option>
                   <option value="Absent">Absent</option>
                   </select>
                   </td>`;

                nominalRollTableOfBadge.appendChild(createTableRow);

            } else {

                function updateCounts() {
                    let gender = row[5].trim();

                    if (gender === "Male") {
                        maleCount.innerHTML = parseInt(maleCount.innerHTML) + 1;

                    } else if (gender === "Female") {
                        femaleCount.innerHTML = parseInt(femaleCount.innerHTML) + 1;
                    }

                    totalCount.innerHTML = parseInt(totalCount.innerHTML) + 1;

                };

                updateCounts();

                let rowNumber = parseInt(nominalRollTable.rows.length) + 1;


                const createTableRow = document.createElement('tr');

                createTableRow.innerHTML =
                    `<td><input type="text" name="SrNoSewa" value="${rowNumber}"></td>
                <td class="hideData"><input type="text" name="BadgeOfSewadarTd" value="${row[1]}"></td>
                <td class="hideData"><input type="text" name="Designation" value="${row[2]}"></td>
               <td><input type="text" name="NameOfSewadarTd" value="${row[3]}"></td>
               <td><input type="text" name="FHNameTd" value="${row[4]}"></td>
               <td><input type="text" name="GenderTd" value="${row[5]}"></td>
               <td><input type="text" name="AgeTd" value="${row[6]}"></td>
               <td><input type="text" name="AddressTd" value="${row[7]}"></td>
               <td><input type="text" name="MobileNoTd" value="${row[8]}"></td>
               <td><input type="text" name="AadharCardTd" value="${row[9]}">
               <span id="deleteIcon">
                <i class="fa-solid fa-trash-can"></i>
               </span>
               </td>
               <td class="hideData">
               <select name="Status">
               <option value="Present">${row[10]}</option>
               <option value="Absent">Absent</option>
               </select>
               </td>`;

                nominalRollTable.appendChild(createTableRow);

            }

        } else if (row.length === 25) {

            if (verify === true) {

                function updateCounts() {

                    let gender = row[19].trim();

                    if (gender === "Male") {
                        badgeMaleCount.innerHTML = parseInt(badgeMaleCount.innerHTML) + 1;
                    } else if (gender === "Female") {
                        badgeFemaleCount.innerHTML = parseInt(badgeFemaleCount.innerHTML) + 1;
                    }
                    badgeTotalCount.innerHTML = parseInt(badgeTotalCount.innerHTML) + 1;
                };

                updateCounts();

                let rowNumber = parseInt(nominalRollTableOfBadge.rows.length) + 1;

                const createTableRow = document.createElement('tr');

                createTableRow.innerHTML =
                    `<td><input type="text" name="SrNoSewa" value="${rowNumber}"></td>
                    <td><input type="text" name="BadgeOfSewadarTd" value="${row[15]}"></td>
                    <td class="hideData"><input type="text" name="Designation" value="${row[16]}"></td>
                    <td><input type="text" name="NameOfSewadarTd" value="${row[17]}"></td>
                    <td><input type="text" name="FHNameTd" value="${row[18]}"></td>
                    <td><input type="text" name="GenderTd" value="${row[19]}"></td>
                    <td><input type="text" name="AgeTd" value="${row[20]}"></td>
                    <td><input type="text" name="AddressTd" value="${row[21]}"></td>
                    <td class="hideData"><input type="text" name="MobileNoTd" value="${row[22]}"></td>
                   <td class="hideData"><input type="text" name="AadharCardTd" value="${row[23]}"></td>`;

                nominalRollTableOfBadge.appendChild(createTableRow);

            } else {

                function updateCounts() {
                    let gender = row[19].trim();

                    if (gender === "Male") {
                        maleCount.innerHTML = parseInt(maleCount.innerHTML) + 1;

                    } else if (gender === "Female") {
                        femaleCount.innerHTML = parseInt(femaleCount.innerHTML) + 1;
                    }

                    totalCount.innerHTML = parseInt(totalCount.innerHTML) + 1;

                };

                updateCounts();

                let rowNumber = parseInt(nominalRollTable.rows.length) + 1;


                const createTableRow = document.createElement('tr');

                createTableRow.innerHTML =
                    `<td><input type="text" name="SrNoSewa" value="${rowNumber}"></td>
                <td class="hideData"><input type="text" name="BadgeOfSewadarTd" value="${row[15]}"></td>
                <td class="hideData"><input type="text" name="Designation" value="${row[16]}"></td>
               <td><input type="text" name="NameOfSewadarTd" value="${row[17]}"></td>
               <td><input type="text" name="FHNameTd" value="${row[18]}"></td>
               <td><input type="text" name="GenderTd" value="${row[19]}"></td>
               <td><input type="text" name="AgeTd" value="${row[20]}"></td>
               <td><input type="text" name="AddressTd" value="${row[21]}"></td>
               <td><input type="text" name="MobileNoTd" value="${row[22]}"></td>
               <td><input type="text" name="AadharCardTd" value="${row[23]}"></td>`;

                nominalRollTable.appendChild(createTableRow);

            }

        }

    };
};

// click on pending button and access details of jatha from localStorage
pendingButton.addEventListener("click", function (e) {
    e.preventDefault();

    cardBoxes.innerHTML = "";

    if (cardBoxes.children.length === 0) {
        notesForBoxOfSix.style.display = "none";
    }

    // Get all keys from localStorage
    const keys = Object.keys(localStorage);

    // only timestamp vali keys ko get karega.
    const dateKeys = keys.filter(key => /^\d+$/.test(key));

    dateKeys.forEach(key => {
        const value = localStorage.getItem(key);
        printJathaDetails({ key: key, value: JSON.parse(value) });
    });



    // Add event listeners to all delete buttons
    const deleteButtons = document.querySelectorAll('.jathaDeleteBtn');

    deleteButtons.forEach(button => {
        button.addEventListener('click', handleDeleteClick);
    });


});

// print details in card into pending page
function printJathaDetails(data) {

    const key = data.key;
    const formDataObject = data.value;

    const div = document.createElement('div');
    div.classList.add("col");


    const fromDate = new Date(formDataObject.FromDateSewa);
    const toDate = new Date(formDataObject.ToDateSewa);
    const fromDateString = `${fromDate.getFullYear()}-${(fromDate.getMonth() + 1).toString().padStart(2, '0')}-${fromDate.getDate().toString().padStart(2, '0')}`;
    const toDateString = `${toDate.getFullYear()}-${(toDate.getMonth() + 1).toString().padStart(2, '0')}-${toDate.getDate().toString().padStart(2, '0')}`;

    div.innerHTML = `<div class="card h-100" id="${key}">
    <div class="card-body">
        <h2 class="card-title" id="jathaCentreName">${formDataObject.NameOfSatsangPlace}</h2>
        <h5 class="card-title" id="jathaDepartmentName">${formDataObject.DepartmentAndCentreName}</h5>
        <h6 class="card-title"><b><span class="jathaFromDate">${fromDateString}</span> <b style="margin: 0 7px;">To</b> <span class="jathaToDate">${toDateString}</span>
            </b></h6>
        <h3> NominalRoll Id : <span class="nominalRollId"> ${formDataObject.NominalRollId} </span> </h3>
        <p class="card-text">
            This Jatha Is Going To Be <b><span class="jathaPlaceName">${formDataObject.SewaPlaceOfSewa}</span></b>. If You Want To Make Some Changes In Your Nominal Roll Then Click On Edit Rather Than Click On Submit.
        </p>
    </div>
    <div class="jathaButtons">
        <button class="jathaSubmitBtn" onclick="sendDataToAnotherSheet(this)" type="submit">Final Submit</button>
        <button class="jathaEditBtn" onclick="jathaNominalEditBtn(this)" type="edit">Edit</button>
        <button class="jathaDeleteBtn"  type="delete">Delete</button>
    </div>
    <div class="card-footer">
        <small class="text-body-secondary">Last Updated On - ${formDataObject.CardFooterDate}</small>
    </div>
</div>`;

    cardBoxes.appendChild(div);

};





// this code for get data from temp database file and send into submitJathaDataInNominalRoll function. ---------
function sendDataToAnotherSheet(e) {

    loaderImg.style.display = "block";
    startTimer();

    const card = e.closest('.card');

    idNumber = card.id;

    const nominalId = card.querySelector('.nominalRollId').innerText;

    const no = nominalId;

    fetch("https://script.google.com/macros/s/AKfycbyNwWrYuvZKbCqUhFMiS9Am83R6QiKViJwWW96sH2eFK0GE_JWiwmeeWrNg4fF1Jcfzew/exec?page=search&no=" + no)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            let record = data.record;

            let bulkData = [];
            let firstPart = [];
            let secondPart = [];
            let includeNextRows = false;

            for (const row of record) {
                if (row.length === 25) {
                    // Extract the first 14 cells
                    firstPart = row.slice(0, 14);

                    // Extract the next 11 cells (from index 14 to 24)
                    secondPart = row.slice(14, 25);

                    if (row.includes(nominalId)) {
                        bulkData.push(firstPart);
                        includeNextRows = true;
                    } else {
                        includeNextRows = false;
                        bulkData.push(secondPart);
                    }

                }
            };


            if (bulkData.length === 0) {
                const dataNote = confirm("Something Is Going Wrong!");

                if (dataNote === true || dataNote === false) {
                    console.log("Parameters are not correct.")
                    loaderImg.style.display = "none";
                }
            } else {
                submitJathaDataInNominalRoll(bulkData);
            }


        })
        .catch(error => console.error('Error:', error));
};


// this code for user data put in nominal roll automatic after that call sendNominalDataToOriginalDatabase function. ---------
function submitJathaDataInNominalRoll(submitData) {

    nominalUpdateBtn.style.display = "none";
    nominalSubmitBtn.style.display = "block";

    for (const row of submitData) {

        if (row.length === 14) {

            nominalRollId.value = row[0];
            selectNominalCentreName.value = row[1];
            nameOfArea.value = row[2];
            nameOfJathedar.value = row[3] || "";

            if (row[4].innerHTML !== "" && row[5].innerHTML !== "" && row[6].innerHTML !== "") {

                nameOfDriver.value = row[4];
                vehicleName.value = row[5];
                vehicleNumber.value = row[6];
            }

            placeOfSewa.value = row[7];
            durationOfSewa.value = dateConvertYYMMDD(row[8]);
            sewaTo.value = dateConvertYYMMDD(row[9]);
            departmentSewa.value = row[10];
            automaticFillJathedarName.innerHTML = row[3] || "";

            jathedarSignDate.value = dateConvertYYMMDD(row[11]);
            secSignDate.value = dateConvertYYMMDD(row[13]);


            if (row[12]) {
                secretarySignName.value = row[12] || "";
            }


        } else if (row.length === 11) {

            function updateCounts() {
                let gender = row[5].trim();

                if (gender === "Male") {
                    maleCount.innerHTML = parseInt(maleCount.innerHTML) + 1;

                } else if (gender === "Female") {
                    femaleCount.innerHTML = parseInt(femaleCount.innerHTML) + 1;
                }

                totalCount.innerHTML = parseInt(totalCount.innerHTML) + 1;

            };

            updateCounts();

            let rowNumber = parseInt(nominalRollTable.rows.length) + 1;


            const createTableRow = document.createElement('tr');

            createTableRow.innerHTML =
                `<td><input type="text" name="SrNoSewa" value="${rowNumber}"></td>
            <td class="hideData"><input type="text" name="BadgeOfSewadarTd" value="${row[1]}"></td>
            <td class="hideData"><input type="text" name="Designation" value="${row[2]}"></td>
           <td><input type="text" name="NameOfSewadarTd" value="${row[3]}"></td>
           <td><input type="text" name="FHNameTd" value="${row[4]}"></td>
           <td><input type="text" name="GenderTd" value="${row[5]}"></td>
           <td><input type="text" name="AgeTd" value="${row[6]}"></td>
           <td><input type="text" name="AddressTd" value="${row[7]}"></td>
           <td><input type="text" name="MobileNoTd" value="${row[8]}"></td>
           <td><input type="text" name="AadharCardTd" value="${row[9]}">
           <span id="deleteIcon">
            <i class="fa-solid fa-trash-can"></i>
           </span>
           </td>
           <td class="hideData">
           <select name="Status">
           <option value="Present">${row[10]}</option>
           <option value="Absent">Absent</option>
           </select>
           </td>`;

            nominalRollTable.appendChild(createTableRow);

        }


    };

    if (nominalRollId.value !== "" && selectNominalCentreName.value !== "" && nominalRollTable.children.length !== 0) {

        sendNominalDataToOriginalDatabase();

    } else {

        const cnfrmMsg = confirm("Please First Add The Details Of The Sewadar's In The Nominal Roll.");

        if (cnfrmMsg === true || cnfrmMsg === false) {
            nominalForm.reset();
            loaderImg.style.display = "none";
        }


    };

};


// data send into original database
function sendNominalDataToOriginalDatabase() {

    fetch(nominalUrl, { method: 'POST', body: new FormData(nominalForm) })
        .then(res => {
            if (res.ok) {

                loaderImg.style.display = "none";
                localStorage.removeItem(idNumber);

                const dataSend = confirm("Your Data Has Been Submitted To The Database!");
                if (dataSend === true || dataSend === false) {
                    console.log("Your Data Has Been Submitted To The Database!");
                };


                nominalUpdateBtn.style.display = "none";
                nominalSubmitBtn.style.display = "block";

                // this code for delete all rows when create the nominal Roll and submit into database.
                let table = document.getElementById('nominalRollTable');
                if (table) {
                    while (table.rows.length > 0) {
                        table.deleteRow(0);
                        maleCount.innerHTML = "00";
                        femaleCount.innerHTML = "00";
                        totalCount.innerHTML = "00";
                    }
                }

                nominalForm.reset();

                nominalRollIdError.innerHTML = "";
                nominalCentreError.innerHTML = "";
                areaNameError.innerHTML = "";
                nominalNameError.innerHTML = "";
                driverNameError.innerHTML = "";
                vehicleNameError.innerHTML = "";
                vehicleNumberError.innerHTML = "";
                placeNameError.innerHTML = "";
                sewaDurationFromError.innerHTML = "";
                sewaDurationToError.innerHTML = "";
                departmentSewaError.innerHTML = "";

                if (nameOfJathedar.value.length == 0) {
                    automaticFillJathedarName.innerHTML = "";
                }

                if (jathedarSignDate.value.length == 0) {
                    jathedarSignDateError.innerHTML = "";
                }

                if (secretarySignName.value.length == 0) {
                    secretaryNameError.innerHTML = "";
                }

                if (secSignDate.value.length == 0) {
                    secSignDateError.innerHTML = "";
                }
            } else {
                throw new Error(`Server responded with ${res.status}`);
            }
        })
        .catch(error => {
            console.error('Error submitting data:', error.message);
        });

};




// Function to start the timer
function startTimer() {
    let count = 0;
    const timerInterval = setInterval(() => {
        inrTime.innerHTML = count;
        count++;
        if (count === 101) {
            clearInterval(timerInterval);

            setTimeout(() => {
                inrTime.innerHTML = "00";
                count = 0;
                loaderImg.style.display = "none";
            }, 500);

        }
    }, 25);
}

// this code for jatha details delete for always. ----------------------------
function handleDeleteClick(e) {

    loaderImg.style.display = "block";

    const card = e.target.closest('.card');
    const deleteIdNumber = card.id;

    localStorage.removeItem(deleteIdNumber);

    startTimer();
};




// page ko print karne ke liye ye function kam karega.
nominalCreateBtn.addEventListener("click", function (e) {
    e.preventDefault();

    window.print();

});


// ----------- Sangat And Sewadar information get from google sheet -------------

// Sangat/Sewadar name add to nominal roll

const sangatSewadarSearchCentreName = document.getElementById('sangatSewadarSearchCentreName');
const forSewaSangatSewadarSearchName = document.getElementById('forSewaSangatSewadarSearchName');
const forSewaSangatSewadarFath_Hus_Name = document.getElementById('forSewaSangatSewadarFath_Hus_Name');
const sangatSewadarSearchBtn = document.getElementById('sangatSewadarSearchBtn');
const badgeSewadarSearchBtn = document.getElementById('badgeSewadarSearchBtn');
const sangatSewadarSearchError = document.getElementById('sangat-sewadar-search-error');

const sewadarSangatNominalList = document.querySelector('.sewadarSangatNominalList');
const sangatSewadarSearchIcon = document.querySelector('.sangatSewadarSearchIcon');
const nominalSewadar = document.getElementById('nominalSewadar');

const tableIcon = document.getElementById('tableIcon');
const dataTableOfNominalSewadar = document.getElementById('dataTableOfNominalSewadar');
const nominalRollTableList = document.getElementById('nominalRollTableList');
const nominalRollTableOfBadgeSewadar = document.getElementById('nominalRollTableOfBadgeSewadar');
const nominalRollTableOfBadge = document.getElementById('nominalRollTableOfBadge');

const nominalWithBadgeNo = document.getElementById('nominalWithBadgeNo');
const nameChange = document.getElementById('nameChange');



// this function call for badge sewadar details get from  sewadar's database.
function clickForBadge() {
    badgeSewadarSearchBtn.addEventListener("click", function () {

        nominalSewadar.innerHTML = "";

        sangatSewadarSearchBtn.style.display = "none";
        badgeSewadarSearchBtn.style.display = "block";

        sewadarSangatNominalList.style.display = "none";
        badgeSewadarSearchBtn.style.display = 'none';
        sangatSewadarSearchIcon.style.display = 'block';
        sangatSewadarSearchError.style.display = "none";


        if (forSewaSangatSewadarSearchName.value.length == 0 && forSewaSangatSewadarFath_Hus_Name.value.length == 0 && sangatSewadarSearchCentreName.value == "SelectCentreName") {
            forSewaSangatSewadarSearchName.classList.add('nullError');
            forSewaSangatSewadarFath_Hus_Name.classList.add('nullError');
            sangatSewadarSearchCentreName.classList.add('nullError');

            badgeSewadarSearchBtn.style.display = 'block';
            sangatSewadarSearchIcon.style.display = 'none';
            sangatSewadarSearchError.style.display = "none";

        } else {

            forSewaSangatSewadarSearchName.classList.remove('nullError');
            forSewaSangatSewadarFath_Hus_Name.classList.remove('nullError');
            sangatSewadarSearchCentreName.classList.remove('nullError');
            sangatSewadarSearchError.style.display = "none";



            // this code for Sangat's database
            setTimeout(() => {

                const URL = "https://script.google.com/macros/s/AKfycbwn_SAX5zJjTFRFYguU7IE_lkn8TLDDkhhY6M3FeJ65Aut2k4Fh-QI-_32a18PIRk69yg/exec?page=all";
                fetch(URL)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {

                        let val1 = sangatSewadarSearchCentreName.value;
                        let val2 = forSewaSangatSewadarSearchName.value;
                        let val3 = forSewaSangatSewadarFath_Hus_Name.value;


                        data.content.filter(item => {

                            let condition1 = item.includes(val1);
                            let condition2 = item.includes(val2) && item.includes(val3);

                            if ((condition1) || (condition2)) {

                                forSewaSangatSewadarSearchName.classList.remove('nullError');
                                forSewaSangatSewadarFath_Hus_Name.classList.remove('nullError');
                                sangatSewadarSearchCentreName.classList.remove('nullError');

                                sangatSewadarSearchIcon.style.display = 'none';
                                badgeSewadarSearchBtn.style.display = 'block';
                                sewadarSangatNominalList.style.display = "block";
                                sangatSewadarSearchError.style.display = "none";


                                // datetime format ko date me convert karega or actual date print karega.
                                const jathaFromDate = item[5];
                                const jathaFrom = new Date(jathaFromDate);
                                jathaFrom.setDate(jathaFrom.getDate() + 1);
                                const dobDate = jathaFrom.toISOString().split('T')[0];

                                const dobAge = calculateDob(dobDate); // this function call for calculating age


                                const tableRow = document.createElement('tr');

                                tableRow.innerHTML =
                                    `<td>${item[0]}</td>
                                    <td></td>
                                    <td>${item[1]}</td>
                                    <td>${item[2]}</td>
                                    <td>${item[3]}</td>
                                    <td>${item[4]}</td>
                                    <td>${dobAge}</td>
                                    <td>${item[8]}</td>
                                    <td>${item[6]}</td>
                                    <td>${item[9]}</td>
                                    <td><span id="tableIcon">
                                    <i class="fa-solid fa-plus"></i>
                                    </span></td>`;

                                nominalSewadar.appendChild(tableRow);
                                removeDuplicateRowsFromTable();

                            } else {
                                sangatSewadarSearchIcon.style.display = 'none';
                                badgeSewadarSearchBtn.style.display = 'block';

                                setTimeout(() => {
                                    if (nominalSewadar.innerHTML !== "") {
                                        sangatSewadarSearchError.style.display = "none";
                                    } else {
                                        sangatSewadarSearchError.style.display = "block";
                                    };
                                }, 1500);

                            };


                        });

                    });

            }, 10);


            // this code for badgeSewadar's database
            setTimeout(() => {

                const sewadarURL = "https://script.google.com/macros/s/AKfycbwMW7czh3VLpSSk0vKU_iWhSf49pYKX7qJh6NF8QGPZdByFNYXz513EGxeHzYfcbgtN/exec?page=all";
                fetch(sewadarURL)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {

                        let val1 = sangatSewadarSearchCentreName.value;
                        let val2 = forSewaSangatSewadarSearchName.value;
                        let val3 = forSewaSangatSewadarFath_Hus_Name.value;


                        data.content.filter(item => {

                            let condition1 = item.includes(val1);
                            let condition2 = item.includes(val2) && item.includes(val3);

                            if ((condition1) || (condition2)) {

                                forSewaSangatSewadarSearchName.classList.remove('nullError');
                                forSewaSangatSewadarFath_Hus_Name.classList.remove('nullError');
                                sangatSewadarSearchCentreName.classList.remove('nullError');

                                sangatSewadarSearchIcon.style.display = 'none';
                                badgeSewadarSearchBtn.style.display = 'block';
                                sewadarSangatNominalList.style.display = "block";
                                sangatSewadarSearchError.style.display = "none";


                                if (item[1] !== "") {

                                    // datetime format ko date me convert karega or actual date print karega.
                                    const jathaFromDate = item[6];
                                    const jathaFrom = new Date(jathaFromDate);
                                    jathaFrom.setDate(jathaFrom.getDate() + 1);
                                    const dobDate = jathaFrom.toISOString().split('T')[0];

                                    const dobAge = calculateDob(dobDate); // this function call for calculate age


                                    const tableRow = document.createElement('tr');

                                    tableRow.innerHTML =
                                        `<td>${item[0]}</td>
                                       <td>${item[1]}</td>
                                       <td>${item[2]}</td>
                                       <td>${item[3]}</td>
                                       <td>${item[4]}</td>
                                       <td>${item[5]}</td>
                                       <td>${dobAge}</td>
                                       <td>${item[9]}</td>
                                       <td>${item[7]}</td>
                                       <td>${item[10]}</td>
                                       <td><span id="tableIcon">
                                       <i class="fa-solid fa-plus"></i>
                                       </span></td>`;

                                    nominalSewadar.appendChild(tableRow);
                                    removeDuplicateRowsFromTable();
                                }


                            } else {
                                sangatSewadarSearchIcon.style.display = 'none';
                                badgeSewadarSearchBtn.style.display = 'block';

                                setTimeout(() => {
                                    if (nominalSewadar.innerHTML !== "") {
                                        sangatSewadarSearchError.style.display = "none";
                                    } else {
                                        sangatSewadarSearchError.style.display = "block";
                                    };
                                }, 1500);

                            };

                        });
                    });

            }, 10);

        }
    });

};

// this function call for without badge sewadar details get from sangat and sewadar's database.
function clickForWithoutBadge() {
    sangatSewadarSearchBtn.addEventListener("click", function (evnt) {

        evnt.stopPropagation();

        nominalSewadar.innerHTML = "";

        sangatSewadarSearchBtn.style.display = "block";
        badgeSewadarSearchBtn.style.display = "none";

        sewadarSangatNominalList.style.display = "none";
        sangatSewadarSearchBtn.style.display = 'none';
        sangatSewadarSearchIcon.style.display = 'block';
        sangatSewadarSearchError.style.display = "none";


        if (forSewaSangatSewadarSearchName.value.length == 0 && forSewaSangatSewadarFath_Hus_Name.value.length == 0 && sangatSewadarSearchCentreName.value == "SelectCentreName") {
            forSewaSangatSewadarSearchName.classList.add('nullError');
            forSewaSangatSewadarFath_Hus_Name.classList.add('nullError');
            sangatSewadarSearchCentreName.classList.add('nullError');

            sangatSewadarSearchBtn.style.display = 'block';
            sangatSewadarSearchIcon.style.display = 'none';
            sangatSewadarSearchError.style.display = "none";

        } else {

            forSewaSangatSewadarSearchName.classList.remove('nullError');
            forSewaSangatSewadarFath_Hus_Name.classList.remove('nullError');
            sangatSewadarSearchCentreName.classList.remove('nullError');
            sangatSewadarSearchError.style.display = "none";
            nominalSewadar.innerHTML = "";

            // this code for Sangat's database
            setTimeout(() => {

                const URL = "https://script.google.com/macros/s/AKfycbwn_SAX5zJjTFRFYguU7IE_lkn8TLDDkhhY6M3FeJ65Aut2k4Fh-QI-_32a18PIRk69yg/exec?page=all";
                fetch(URL)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {

                        let val1 = sangatSewadarSearchCentreName.value;
                        let val2 = forSewaSangatSewadarSearchName.value;
                        let val3 = forSewaSangatSewadarFath_Hus_Name.value;


                        data.content.filter(item => {

                            if (val1 !== '') {
                                if (item.includes(val1)) {

                                    forSewaSangatSewadarSearchName.classList.remove('nullError');
                                    forSewaSangatSewadarFath_Hus_Name.classList.remove('nullError');
                                    sangatSewadarSearchCentreName.classList.remove('nullError');

                                    sangatSewadarSearchIcon.style.display = 'none';
                                    sangatSewadarSearchBtn.style.display = 'block';
                                    sewadarSangatNominalList.style.display = "block";
                                    sangatSewadarSearchError.style.display = "none";


                                    // datetime format ko date me convert karega or actual date print karega.
                                    const jathaFromDate = item[5];
                                    const jathaFrom = new Date(jathaFromDate);
                                    jathaFrom.setDate(jathaFrom.getDate() + 1);
                                    const dobDate = jathaFrom.toISOString().split('T')[0];

                                    const dobAge = calculateDob(dobDate); // this function call for calculating age


                                    const tableRow = document.createElement('tr');

                                    tableRow.innerHTML =
                                        `<td>${item[0]}</td>
                                    <td></td>
                                    <td>${item[1]}</td>
                                    <td>${item[2]}</td>
                                    <td>${item[3]}</td>
                                    <td>${item[4]}</td>
                                    <td>${dobAge}</td>
                                    <td>${item[8]}</td>
                                    <td>${item[6]}</td>
                                    <td>${item[9]}</td>
                                    <td><span id="tableIcon">
                                    <i class="fa-solid fa-plus"></i>
                                    </span></td>`;

                                    nominalSewadar.appendChild(tableRow);
                                    removeDuplicateRowsFromTable();

                                } else {
                                    sangatSewadarSearchIcon.style.display = 'none';
                                    sangatSewadarSearchBtn.style.display = 'block';

                                    setTimeout(() => {
                                        if (nominalSewadar.innerHTML !== "") {
                                            sangatSewadarSearchError.style.display = "none";
                                        } else {
                                            sangatSewadarSearchError.style.display = "block";
                                        };
                                    }, 1500);

                                };
                            };

                            if (val2 !== '' && val3 !== '') {
                                if (item.includes(val2) && item.includes(val3)) {

                                    forSewaSangatSewadarSearchName.classList.remove('nullError');
                                    forSewaSangatSewadarFath_Hus_Name.classList.remove('nullError');
                                    sangatSewadarSearchCentreName.classList.remove('nullError');

                                    sangatSewadarSearchIcon.style.display = 'none';
                                    sangatSewadarSearchBtn.style.display = 'block';
                                    sewadarSangatNominalList.style.display = "block";
                                    sangatSewadarSearchError.style.display = "none";

                                    // datetime format ko date me convert karega or actual date print karega.
                                    const jathaFromDate = item[5];
                                    const jathaFrom = new Date(jathaFromDate);
                                    jathaFrom.setDate(jathaFrom.getDate() + 1);
                                    const dobDate = jathaFrom.toISOString().split('T')[0];

                                    const dobAge = calculateDob(dobDate); // this function call for calculating age



                                    const tableRow = document.createElement('tr');

                                    tableRow.innerHTML =
                                        `<td>${item[0]}</td>
                                    <td></td>
                                    <td>${item[1]}</td>
                                    <td>${item[2]}</td>
                                    <td>${item[3]}</td>
                                    <td>${item[4]}</td>
                                    <td>${dobAge}</td>
                                    <td>${item[8]}</td>
                                    <td>${item[6]}</td>
                                    <td>${item[9]}</td>
                                    <td><span id="tableIcon">
                                    <i class="fa-solid fa-plus"></i>
                                    </span></td>`;

                                    nominalSewadar.appendChild(tableRow);
                                    removeDuplicateRowsFromTable();

                                } else {
                                    sangatSewadarSearchIcon.style.display = 'none';
                                    sangatSewadarSearchBtn.style.display = 'block';

                                    setTimeout(() => {
                                        if (nominalSewadar.innerHTML !== "") {
                                            sangatSewadarSearchError.style.display = "none";
                                        } else {
                                            sangatSewadarSearchError.style.display = "block";
                                        };
                                    }, 1500);

                                };
                            };

                        });

                    });

            }, 10);


            // this code for Sewadar's database
            setTimeout(() => {

                const URL = "https://script.google.com/macros/s/AKfycbwMW7czh3VLpSSk0vKU_iWhSf49pYKX7qJh6NF8QGPZdByFNYXz513EGxeHzYfcbgtN/exec?page=all";
                fetch(URL)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {

                        let val1 = sangatSewadarSearchCentreName.value;
                        let val2 = forSewaSangatSewadarSearchName.value;
                        let val3 = forSewaSangatSewadarFath_Hus_Name.value;


                        data.content.filter(item => {

                            if (val1 !== '') {
                                if (item.includes(val1)) {

                                    forSewaSangatSewadarSearchName.classList.remove('nullError');
                                    forSewaSangatSewadarFath_Hus_Name.classList.remove('nullError');
                                    sangatSewadarSearchCentreName.classList.remove('nullError');

                                    sangatSewadarSearchIcon.style.display = 'none';
                                    sangatSewadarSearchBtn.style.display = 'block';
                                    sewadarSangatNominalList.style.display = "block";
                                    sangatSewadarSearchError.style.display = "none";


                                    // datetime format ko date me convert karega or actual date print karega.
                                    const jathaFromDate = item[6];
                                    const jathaFrom = new Date(jathaFromDate);
                                    jathaFrom.setDate(jathaFrom.getDate() + 1);
                                    const dobDate = jathaFrom.toISOString().split('T')[0];

                                    const dobAge = calculateDob(dobDate); // this function call for calculating age

                                    const tableRow = document.createElement('tr');

                                    tableRow.innerHTML =
                                        `<td>${item[0]}</td>
                                    <td>${item[1]}</td>
                                    <td>${item[2]}</td>
                                    <td>${item[3]}</td>
                                    <td>${item[4]}</td>
                                    <td>${item[5]}</td>
                                    <td>${dobAge}</td>
                                    <td>${item[9]}</td>
                                    <td>${item[7]}</td>
                                    <td>${item[10]}</td>
                                    <td><span id="tableIcon">
                                    <i class="fa-solid fa-plus"></i>
                                    </span></td>`;

                                    nominalSewadar.appendChild(tableRow);
                                    removeDuplicateRowsFromTable();

                                } else {
                                    sangatSewadarSearchIcon.style.display = 'none';
                                    sangatSewadarSearchBtn.style.display = 'block';

                                    setTimeout(() => {
                                        if (nominalSewadar.innerHTML !== "") {
                                            sangatSewadarSearchError.style.display = "none";
                                        } else {
                                            sangatSewadarSearchError.style.display = "block";
                                        };
                                    }, 1500);

                                };
                            };

                            if (val2 !== '' && val3 !== '') {
                                if (item.includes(val2) && item.includes(val3)) {

                                    forSewaSangatSewadarSearchName.classList.remove('nullError');
                                    forSewaSangatSewadarFath_Hus_Name.classList.remove('nullError');
                                    sangatSewadarSearchCentreName.classList.remove('nullError');

                                    sangatSewadarSearchIcon.style.display = 'none';
                                    sangatSewadarSearchBtn.style.display = 'block';
                                    sewadarSangatNominalList.style.display = "block";
                                    sangatSewadarSearchError.style.display = "none";


                                    // datetime format ko date me convert karega or actual date print karega.
                                    const jathaFromDate = item[6];
                                    const jathaFrom = new Date(jathaFromDate);
                                    jathaFrom.setDate(jathaFrom.getDate() + 1);
                                    const dobDate = jathaFrom.toISOString().split('T')[0];

                                    const dobAge = calculateDob(dobDate); // this function call for calculating age

                                    const tableRow = document.createElement('tr');

                                    tableRow.innerHTML =
                                        `<td>${item[0]}</td>
                                    <td>${item[1]}</td>
                                    <td>${item[2]}</td>
                                    <td>${item[3]}</td>
                                    <td>${item[4]}</td>
                                    <td>${item[5]}</td>
                                    <td>${dobAge}</td>
                                    <td>${item[9]}</td>
                                    <td>${item[7]}</td>
                                    <td>${item[10]}</td>
                                    <td><span id="tableIcon">
                                    <i class="fa-solid fa-plus"></i>
                                    </span></td>`;

                                    nominalSewadar.appendChild(tableRow);
                                    removeDuplicateRowsFromTable();

                                } else {
                                    sangatSewadarSearchIcon.style.display = 'none';
                                    sangatSewadarSearchBtn.style.display = 'block';

                                    setTimeout(() => {
                                        if (nominalSewadar.innerHTML !== "") {
                                            sangatSewadarSearchError.style.display = "none";
                                        } else {
                                            sangatSewadarSearchError.style.display = "block";
                                        };
                                    }, 1500);

                                };
                            };

                        });
                    });

            }, 10);

        }
    });

};

// this function call for when user nominal roll details edit and user's details autofill into nominal roll table.
function clickForWithoutBadgeEdit() {
    sangatSewadarSearchBtn.addEventListener("click", function (evnt) {

        evnt.stopPropagation();

        nominalSewadar.innerHTML = "";

        sangatSewadarSearchBtn.style.display = "block";
        badgeSewadarSearchBtn.style.display = "none";

        sewadarSangatNominalList.style.display = "none";
        sangatSewadarSearchBtn.style.display = 'none';
        sangatSewadarSearchIcon.style.display = 'block';
        sangatSewadarSearchError.style.display = "none";


        if (forSewaSangatSewadarSearchName.value.length == 0 && forSewaSangatSewadarFath_Hus_Name.value.length == 0 && sangatSewadarSearchCentreName.value == "SelectCentreName") {
            forSewaSangatSewadarSearchName.classList.add('nullError');
            forSewaSangatSewadarFath_Hus_Name.classList.add('nullError');
            sangatSewadarSearchCentreName.classList.add('nullError');

            sangatSewadarSearchBtn.style.display = 'block';
            sangatSewadarSearchIcon.style.display = 'none';
            sangatSewadarSearchError.style.display = "none";

        } else {

            forSewaSangatSewadarSearchName.classList.remove('nullError');
            forSewaSangatSewadarFath_Hus_Name.classList.remove('nullError');
            sangatSewadarSearchCentreName.classList.remove('nullError');
            sangatSewadarSearchError.style.display = "none";
            nominalSewadar.innerHTML = "";

            // this code for Sangat's database
            setTimeout(() => {

                const URL = "https://script.google.com/macros/s/AKfycbwn_SAX5zJjTFRFYguU7IE_lkn8TLDDkhhY6M3FeJ65Aut2k4Fh-QI-_32a18PIRk69yg/exec?page=all";
                fetch(URL)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {

                        let val1 = sangatSewadarSearchCentreName.value;
                        let val2 = forSewaSangatSewadarSearchName.value;
                        let val3 = forSewaSangatSewadarFath_Hus_Name.value;


                        data.content.filter(item => {

                            if (val1 !== '' || val2 !== '' && val3 !== '') {
                                if (item.includes(val1) || item.includes(val2) && item.includes(val3)) {

                                    forSewaSangatSewadarSearchName.classList.remove('nullError');
                                    forSewaSangatSewadarFath_Hus_Name.classList.remove('nullError');
                                    sangatSewadarSearchCentreName.classList.remove('nullError');

                                    sangatSewadarSearchIcon.style.display = 'none';
                                    sangatSewadarSearchBtn.style.display = 'block';
                                    sewadarSangatNominalList.style.display = "block";
                                    sangatSewadarSearchError.style.display = "none";


                                    // datetime format ko date me convert karega or actual date print karega.
                                    const jathaFromDate = item[5];
                                    const jathaFrom = new Date(jathaFromDate);
                                    jathaFrom.setDate(jathaFrom.getDate() + 1);
                                    const dobDate = jathaFrom.toISOString().split('T')[0];

                                    const dobAge = calculateDob(dobDate); // this function call for calculating age


                                    const tableRow = document.createElement('tr');

                                    tableRow.innerHTML =
                                        `<td>${item[0]}</td>
                                    <td></td>
                                    <td>${item[1]}</td>
                                    <td>${item[2]}</td>
                                    <td>${item[3]}</td>
                                    <td>${item[4]}</td>
                                    <td>${dobAge}</td>
                                    <td>${item[8]}</td>
                                    <td>${item[6]}</td>
                                    <td>${item[9]}</td>
                                    <td><span id="tableIcon">
                                    <i class="fa-solid fa-plus"></i>
                                    </span></td>`;

                                    nominalSewadar.appendChild(tableRow);
                                    removeDuplicateRowsFromTable();

                                } else {
                                    sangatSewadarSearchIcon.style.display = 'none';
                                    sangatSewadarSearchBtn.style.display = 'block';

                                    setTimeout(() => {
                                        if (nominalSewadar.innerHTML !== "") {
                                            sangatSewadarSearchError.style.display = "none";
                                        } else {
                                            sangatSewadarSearchError.style.display = "block";
                                        };
                                    }, 1500);

                                };
                            };


                        });

                    });

            }, 10);


            // this code for Sewadar's database
            setTimeout(() => {

                const URL = "https://script.google.com/macros/s/AKfycbwMW7czh3VLpSSk0vKU_iWhSf49pYKX7qJh6NF8QGPZdByFNYXz513EGxeHzYfcbgtN/exec?page=all";
                fetch(URL)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {

                        let val1 = sangatSewadarSearchCentreName.value;
                        let val2 = forSewaSangatSewadarSearchName.value;
                        let val3 = forSewaSangatSewadarFath_Hus_Name.value;


                        data.content.filter(item => {

                            if (val1 !== '' || val2 !== '' && val3 !== '') {
                                if (item.includes(val1) || item.includes(val2) && item.includes(val3)) {

                                    forSewaSangatSewadarSearchName.classList.remove('nullError');
                                    forSewaSangatSewadarFath_Hus_Name.classList.remove('nullError');
                                    sangatSewadarSearchCentreName.classList.remove('nullError');

                                    sangatSewadarSearchIcon.style.display = 'none';
                                    sangatSewadarSearchBtn.style.display = 'block';
                                    sewadarSangatNominalList.style.display = "block";
                                    sangatSewadarSearchError.style.display = "none";


                                    // datetime format ko date me convert karega or actual date print karega.
                                    const jathaFromDate = item[6];
                                    const jathaFrom = new Date(jathaFromDate);
                                    jathaFrom.setDate(jathaFrom.getDate() + 1);
                                    const dobDate = jathaFrom.toISOString().split('T')[0];

                                    const dobAge = calculateDob(dobDate); // this function call for calculating age

                                    const tableRow = document.createElement('tr');

                                    tableRow.innerHTML =
                                        `<td>${item[0]}</td>
                                    <td>${item[1]}</td>
                                    <td>${item[2]}</td>
                                    <td>${item[3]}</td>
                                    <td>${item[4]}</td>
                                    <td>${item[5]}</td>
                                    <td>${dobAge}</td>
                                    <td>${item[9]}</td>
                                    <td>${item[7]}</td>
                                    <td>${item[10]}</td>
                                    <td><span id="tableIcon">
                                    <i class="fa-solid fa-plus"></i>
                                    </span></td>`;

                                    nominalSewadar.appendChild(tableRow);
                                    removeDuplicateRowsFromTable();

                                } else {
                                    sangatSewadarSearchIcon.style.display = 'none';
                                    sangatSewadarSearchBtn.style.display = 'block';

                                    setTimeout(() => {
                                        if (nominalSewadar.innerHTML !== "") {
                                            sangatSewadarSearchError.style.display = "none";
                                        } else {
                                            sangatSewadarSearchError.style.display = "block";
                                        };
                                    }, 1500);

                                };
                            };

                        });
                    });

            }, 10);


            // this codintion use for when nominal edit mode then other user's details add into nominal roll.
            if (nominalRollTableList.style.display === "block") {
                dataTableOfNominalSewadar.addEventListener('click', handleNominalSewadarClick);

            } else {
                dataTableOfNominalSewadar.addEventListener('click', handleNominalBadgeSewadarClick);

            }

        }
    });

};



// ------------- checkbox button code start for nominal roll --------------- //

// remove table row from nominal roll ----
nominalRollTableList.addEventListener("click", function (e) {

    if (e.target.tagName === "I") {

        const tableRow = e.target.closest('tr');

        let gender = [tableRow.cells[5]][0].firstChild.attributes[2].value;

        if (gender === 'Male') {
            tableRow.remove();
            maleCount.innerHTML = parseInt(maleCount.innerHTML) - 1;
            totalCount.innerHTML = parseInt(totalCount.innerHTML) - 1;
        } else if (gender === 'Female') {
            tableRow.remove();
            femaleCount.innerHTML = parseInt(femaleCount.innerHTML) - 1;
            totalCount.innerHTML = parseInt(totalCount.innerHTML) - 1;
        }

    }

});


// checkbox ko check or uncheck karne par kya code run hoga ---
nominalWithBadgeNo.addEventListener('change', function () {

    nominalSewadar.innerHTML = "";

    if (this.checked) {

        nameChange.innerHTML = "Without Badge Number Please Uncheck It";

        nominalRollTableList.style.display = "none";
        maleFemaleTotalOfSewa.style.display = "none";
        sewadarSangatNominalList.style.display = "none";
        maleFemaleTotalOfBadge.style.display = "block";
        nominalRollTableOfBadgeSewadar.style.display = "block";
        nominalSewadar.innerHTML = "";

        if (badgeSewadarSearchBtn.style.display = "block") {
            sangatSewadarSearchBtn.style.display = "none"
        } else if (sangatSewadarSearchBtn.style.display = "block") {
            badgeSewadarSearchBtn.style.display = "none"
        }

        removeAllRows(nominalRollTableOfBadge);

        clickForBadge();


        dataTableOfNominalSewadar.addEventListener('click', handleNominalBadgeSewadarClick);
    } else {

        removeAllRows(nominalRollTableOfBadge);
        nominalSewadar.innerHTML = "";
        resetBadgeCounts();

        sangatSewadarSearchBtn.style.display = "block";
        badgeSewadarSearchBtn.style.display = "none";

        dataTableOfNominalSewadar.removeEventListener('click', handleNominalBadgeSewadarClick);

    }

    if (!this.checked) {

        nameChange.innerHTML = "With Badge Number Please Check It";

        nominalRollTableList.style.display = "block";
        maleFemaleTotalOfSewa.style.display = "block";
        sangatSewadarSearchBtn.style.display = "block";
        sewadarSangatNominalList.style.display = "none";
        badgeSewadarSearchBtn.style.display = "none";
        maleFemaleTotalOfBadge.style.display = "none";
        nominalRollTableOfBadgeSewadar.style.display = "none";
        nominalSewadar.innerHTML = "";

        if (sangatSewadarSearchBtn.style.display = "block") {
            badgeSewadarSearchBtn.style.display = "none"
        } else if (badgeSewadarSearchBtn.style.display = "block") {
            sangatSewadarSearchBtn.style.display = "none"
        }

        removeAllRows(nominalRollTable);

        clickForWithoutBadge();

        dataTableOfNominalSewadar.addEventListener('click', handleNominalSewadarClick);
    } else {

        removeAllRows(nominalRollTable);
        resetWithoutBadgeCounts();
        nominalSewadar.innerHTML = "";

        sangatSewadarSearchBtn.style.display = "none";
        badgeSewadarSearchBtn.style.display = "block";

        dataTableOfNominalSewadar.removeEventListener('click', handleNominalSewadarClick);
    }
});


function handleNominalSewadarClick(e) {
    if (e.target.tagName === 'I') {

        const tableRow = e.target.closest('tr');


        let adrss = [tableRow][0].cells[7].innerHTML;
        let clrAdrss = adrss.replace(/\d+|(\([^)]*\))|-|\s+/g, '').replace(/\s+/g, '/ ');

        let contactNumber = [tableRow][0].cells[8].innerHTML;
        let formattedContactNumber = contactNumber.replace(/(\d{5})/g, '$1 ').trim();

        let adharCardNumber = [tableRow][0].cells[9].innerHTML;
        let adharNumber = adharCardNumber.replace(/(\d{4})/g, '$1 ').trim();

        let rowNumber = parseInt(nominalRollTable.rows.length) + 1;



        function updateCounts() {
            let gender = tableRow.cells[5].innerHTML.trim();

            if (gender === "Male") {
                maleCount.innerHTML = parseInt(maleCount.innerHTML) + 1;

            } else if (gender === "Female") {
                femaleCount.innerHTML = parseInt(femaleCount.innerHTML) + 1;
            }

            totalCount.innerHTML = parseInt(totalCount.innerHTML) + 1;

        };

        updateCounts(); // call function for male, female and total number update in nominal Roll


        const createTableRow = document.createElement('tr');

        createTableRow.innerHTML =
            `<td><input type="text" name="SrNoSewa" value="${rowNumber}"></td>
            <td class="hideData"><input type="text" name="BadgeOfSewadarTd" value="${tableRow.cells[1].innerHTML}"></td>
            <td class="hideData"><input type="text" name="DesignationTd" value="${tableRow.cells[2].innerHTML}"></td>
           <td><input type="text" name="NameOfSewadarTd" value="${[tableRow][0].cells[3].innerHTML}"></td>
           <td><input type="text" name="FHNameTd" value="${[tableRow][0].cells[4].innerHTML}"></td>
           <td><input type="text" name="GenderTd" value="${[tableRow][0].cells[5].innerHTML}"></td>
           <td><input type="text" name="AgeTd" value="${[tableRow][0].cells[6].innerHTML}"></td>
           <td><input type="text" name="AddressTd" value="${clrAdrss}"></td>
           <td><input type="text" name="MobileNoTd" value="${formattedContactNumber}"></td>
           <td><input type="text" name="AadharCardTd" value="${adharNumber}">
           <span id="deleteIcon">
           <i class="fa-solid fa-trash-can"></i>
           </span>
           </td>
           <td style="position: relative;" class="hideData">
           <select name="Status">
           <option value="Present">Present</option>
           <option value="Absent">Absent</option>
           </select>
           </td>`;

        nominalRollTable.appendChild(createTableRow);
    }
}


function resetWithoutBadgeCounts() {
    maleCount.innerHTML = "00";
    femaleCount.innerHTML = "00";
    totalCount.innerHTML = "00";
}

// remove table row from nominal roll 
nominalRollTableOfBadgeSewadar.addEventListener("click", function (e) {

    if (e.target.tagName === "I") {

        const tableRow = e.target.closest('tr');

        let gender = [tableRow.cells[5]][0].firstChild.attributes[2].value;

        if (gender === 'Male') {
            tableRow.remove();
            badgeMaleCount.innerHTML = parseInt(badgeMaleCount.innerHTML) - 1;
            badgeTotalCount.innerHTML = parseInt(badgeTotalCount.innerHTML) - 1;
        } else if (gender === 'Female') {
            tableRow.remove();
            badgeFemaleCount.innerHTML = parseInt(badgeFemaleCount.innerHTML) - 1;
            badgeTotalCount.innerHTML = parseInt(badgeTotalCount.innerHTML) - 1;
        }

    }

});


function handleNominalBadgeSewadarClick(e) {
    if (e.target.tagName === 'I') {
        const tableRow = e.target.closest('tr');

        // Your logic to extract row data
        let adrss = tableRow.cells[7].innerHTML;
        let clrAdrss = adrss.replace(/\d+|(\([^)]*\))|-|\s+/g, '').replace(/\s+/g, '/ ');

        let contactNumber = [tableRow][0].cells[8].innerHTML;
        let formattedContactNumber = contactNumber.replace(/(\d{5})/g, '$1 ').trim();

        let adharCardNumber = [tableRow][0].cells[9].innerHTML;
        let adharNumber = adharCardNumber.replace(/(\d{4})/g, '$1 ').trim();

        let rowNumber = parseInt(nominalRollTableOfBadge.rows.length) + 1;

        function updateCounts() {
            let gender = tableRow.cells[5].innerHTML.trim();
            if (gender === "Male") {
                badgeMaleCount.innerHTML = parseInt(badgeMaleCount.innerHTML) + 1;
            } else if (gender === "Female") {
                badgeFemaleCount.innerHTML = parseInt(badgeFemaleCount.innerHTML) + 1;
            }
            badgeTotalCount.innerHTML = parseInt(badgeTotalCount.innerHTML) + 1;
        }

        updateCounts(); // Call function for male, female, and total number update in nominal Roll


        const createTableRow = document.createElement('tr');
        createTableRow.innerHTML =
            `<td><input type="text" name="SrNoSewa" value="${rowNumber}"></td>
            <td><input type="text" name="BadgeOfSewadarTd" value="${tableRow.cells[1].innerHTML}"></td>
            <td class="hideData"><input type="text" name="DesignationTd" value="${tableRow.cells[2].innerHTML}"></td>
            <td><input type="text" name="NameOfSewadarTd" value="${tableRow.cells[3].innerHTML}"></td>
            <td><input type="text" name="FHNameTd" value="${tableRow.cells[4].innerHTML}"></td>
            <td><input type="text" name="GenderTd" value="${tableRow.cells[5].innerHTML}"></td>
            <td><input type="text" name="AgeTd" value="${tableRow.cells[6].innerHTML}"></td>
            <td><input type="text" name="AddressTd" value="${clrAdrss}"></td>
            <td class="hideData"><input type="text" name="MobileNoTd" value="${formattedContactNumber}"></td>
           <td class="hideData"><input type="text" name="AadharCardTd" value="${adharNumber}">
           <span id="deleteIconOfNominal">
                <i class="fa-solid fa-trash-can"></i>
            </span>
           </td>
            <td style="position: relative;" class="hideData">
           <select name="Status">
           <option value="Present">Present</option>
           <option value="Absent">Absent</option>
           </select>
           </td>`;

        nominalRollTableOfBadge.appendChild(createTableRow);

    }
}

function removeAllRows(table) {
    table.innerHTML = '';
    nominalSewadar.innerHTML = "";

}

function resetBadgeCounts() {
    badgeMaleCount.innerHTML = "00";
    badgeFemaleCount.innerHTML = "00";
    badgeTotalCount.innerHTML = "00";
}

function removeDuplicateRowsFromTable() {
    const tbodyId = 'nominalSewadar';
    const tbody = document.getElementById(tbodyId);

    if (!tbody) {
        console.error(`Table body with ID ${tbodyId} not found.`);
        return;
    }

    const rows = tbody.getElementsByTagName('tr');
    const seenRows = new Set();

    for (let i = rows.length - 1; i >= 0; i--) {
        const row = rows[i];
        const cells = row.getElementsByTagName('td');
        const rowData = Array.from(cells).map(cell => cell.textContent.trim());

        // Use JSON.stringify to compare entire row data
        const stringifiedRowData = JSON.stringify(rowData);

        if (seenRows.has(stringifiedRowData)) {
            // Remove duplicate row
            tbody.removeChild(row);
        } else {
            // Add current row data to the set
            seenRows.add(stringifiedRowData);
        }
    }
}

removeDuplicateRowsFromTable();

// ------------- checkbox button code end for nominal roll --------------- //


// date of birth ko calculate karke years me return karega.

function calculateDob(birthDate) {

    let dob = new Date(birthDate);

    let d1 = dob.getDate();
    let m1 = dob.getMonth() + 1;
    let y1 = dob.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    return (y3);

};

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
};





// Search Nominal Roll List For download nominal roll

const nominalid = document.getElementById('nominalid');
const searchNominalCentreName = document.getElementById('searchNominalCentreName');
const nominalFromDt = document.getElementById('nominalFromDt');
const nominalToDt = document.getElementById('nominalToDt');
const nominalRollIdSearchError = document.getElementById('nominalRollId-search-error');

const nominalRollList = document.querySelector('.nominalRollList');
const nominalRollListBody = document.getElementById('nominalRollListBody');

const nominalRollIdSearchBtn = document.getElementById('nominalRollIdSearchBtn');
const nominalRollIdSearchIcon = document.querySelector(".nominalRollIdSearchIcon");

// details get of nominal roll 
nominalRollIdSearchBtn.addEventListener("click", function () {

    nominalRollListBody.innerHTML = "";

    nominalRollList.style.display = 'none';
    nominalRollIdSearchBtn.style.display = 'none';
    nominalRollIdSearchIcon.style.display = 'block';
    nominalRollIdSearchError.style.display = "none";

    if (nominalid.value.length == 0 && searchNominalCentreName.value === "SelectCentreName" && nominalFromDt.value.length == 0 && nominalToDt.value.length == 0) {

        nominalid.classList.add('nullError');
        searchNominalCentreName.classList.add('nullError');
        nominalFromDt.classList.add('nullError');
        nominalToDt.classList.add('nullError');

        nominalRollIdSearchBtn.style.display = 'block';
        nominalRollIdSearchIcon.style.display = 'none';
        nominalRollIdSearchError.style.display = "none";


    } else {

        nominalid.classList.remove('nullError');
        searchNominalCentreName.classList.remove('nullError');
        nominalFromDt.classList.remove('nullError');
        nominalToDt.classList.remove('nullError');
        nominalRollIdSearchError.style.display = "none";



        setTimeout(() => {


            fetch(nominalUrl)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {


                    const nominalRollIdValue = nominalid.value;
                    const centreNameValue = searchNominalCentreName.value;
                    const nominalFromDtValue = nominalFromDt.value;
                    const nominalToDtValue = nominalToDt.value;


                    // Convert dates to timestamps
                    const fromDateTimestamp = new Date(nominalFromDtValue).getTime();
                    const toDateTimestamp = new Date(nominalToDtValue).getTime();


                    let bulkData = [];
                    let includeNextRows = false;

                    if (nominalRollIdValue !== "" && centreNameValue === "SelectCentreName" && nominalFromDtValue === "" && nominalToDtValue === "") {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(nominalRollIdValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {

                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);
                            }
                        };


                    } else if (nominalRollIdValue === "" && centreNameValue !== "SelectCentreName" && nominalFromDtValue === "" && nominalToDtValue === "") {

                        if (centreNameValue !== "ALL") {

                            for (let row of data) {

                                if (row.length >= 11 && row.length <= 14) {

                                    if (row.includes(centreNameValue)) {

                                        bulkData.push(row);
                                        includeNextRows = true;

                                    } else {

                                        includeNextRows = false;
                                    }

                                } else if (row.length === 25 && includeNextRows) {

                                    bulkData.push(row);
                                }
                            };

                        } else if (centreNameValue === "ALL") {

                            for (let row of data) {

                                if (row.length >= 11 && row.length <= 14) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else if (row.length === 25 && includeNextRows) {

                                    bulkData.push(row);
                                }
                            };
                        };

                    } else if (nominalRollIdValue === "" && centreNameValue === "SelectCentreName" && nominalFromDtValue !== "" && nominalToDtValue !== "") {

                        for (let row of data) {

                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {
                                bulkData.push(row);
                            }
                        };


                    } else if (nominalRollIdValue !== "" && centreNameValue !== "SelectCentreName" && nominalFromDtValue === "" && nominalToDtValue === "") {

                        if (nominalRollIdValue !== "" && centreNameValue !== "ALL" && nominalFromDtValue === "" && nominalToDtValue === "") {

                            for (let row of data) {

                                if (row.length >= 11 && row.length <= 14) {

                                    if (row.includes(nominalRollIdValue) && row.includes(centreNameValue)) {

                                        bulkData.push(row);
                                        includeNextRows = true;

                                    } else {

                                        includeNextRows = false;
                                    }

                                } else if (row.length === 25 && includeNextRows) {

                                    bulkData.push(row);
                                }
                            };

                        } else if (nominalRollIdValue !== "" && centreNameValue === "ALL" && nominalFromDtValue === "" && nominalToDtValue === "") {

                            for (let row of data) {

                                if (row.length >= 11 && row.length <= 14) {

                                    if (row.includes(nominalRollIdValue)) {

                                        bulkData.push(row);
                                        includeNextRows = true;

                                    } else {

                                        includeNextRows = false;
                                    }

                                } else if (row.length === 25 && includeNextRows) {

                                    bulkData.push(row);
                                }
                            };

                        }

                    } else if (nominalRollIdValue !== "" && centreNameValue === "SelectCentreName" && nominalFromDtValue !== "" && nominalToDtValue !== "") {

                        for (let row of data) {

                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if ((rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) && row.includes(nominalRollIdValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {
                                bulkData.push(row);
                            }
                        };


                    } else if (nominalRollIdValue === "" && centreNameValue !== "SelectCentreName" && nominalFromDtValue !== "" && nominalToDtValue !== "") {

                        if (nominalRollIdValue === "" && centreNameValue !== "ALL" && nominalFromDtValue !== "" && nominalToDtValue !== "") {

                            for (let row of data) {

                                const rowDateTimestamp = new Date(row[8]).getTime();

                                if (row.length >= 11 && row.length <= 14) {

                                    if ((rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) && row.includes(centreNameValue)) {

                                        bulkData.push(row);
                                        includeNextRows = true;

                                    } else {
                                        includeNextRows = false;
                                    }

                                } else if (row.length === 25 && includeNextRows) {
                                    bulkData.push(row);
                                }
                            };

                        } else if (nominalRollIdValue === "" && centreNameValue === "ALL" && nominalFromDtValue !== "" && nominalToDtValue !== "") {

                            for (let row of data) {

                                const rowDateTimestamp = new Date(row[8]).getTime();

                                if (row.length >= 11 && row.length <= 14) {

                                    if ((rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp)) {

                                        bulkData.push(row);
                                        includeNextRows = true;

                                    } else {
                                        includeNextRows = false;
                                    }

                                } else if (row.length === 25 && includeNextRows) {
                                    bulkData.push(row);
                                }
                            };

                        }

                    } else if (nominalRollIdValue !== "" && centreNameValue !== "SelectCentreName" && nominalFromDtValue !== "" && nominalToDtValue !== "") {

                        if (nominalRollIdValue !== "" && centreNameValue !== "ALL" && nominalFromDtValue !== "" && nominalToDtValue !== "") {

                            for (let row of data) {

                                const rowDateTimestamp = new Date(row[8]).getTime();

                                if (row.length >= 11 && row.length <= 14) {

                                    if ((rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) && row.includes(nominalRollIdValue) && row.includes(centreNameValue)) {

                                        bulkData.push(row);
                                        includeNextRows = true;

                                    } else {
                                        includeNextRows = false;
                                    }

                                } else if (row.length === 25 && includeNextRows) {
                                    bulkData.push(row);
                                }
                            };

                        } else if (nominalRollIdValue !== "" && centreNameValue === "ALL" && nominalFromDtValue !== "" && nominalToDtValue !== "") {

                            for (let row of data) {

                                const rowDateTimestamp = new Date(row[8]).getTime();

                                if (row.length >= 11 && row.length <= 14) {

                                    if ((rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) && row.includes(nominalRollIdValue)) {

                                        bulkData.push(row);
                                        includeNextRows = true;

                                    } else {
                                        includeNextRows = false;
                                    }

                                } else if (row.length === 25 && includeNextRows) {
                                    bulkData.push(row);
                                }
                            };

                        }

                    };






                    if (bulkData.length === 0) {
                         nominalRollIdSearchError.style.display = "block";
                    } else {

                        nominalRollDetailsPrintIntoTable(bulkData);


                    }

                });


        }, 10);

    }

});

// print nominal roll details in search box of nominal roll search section
function nominalRollDetailsPrintIntoTable(printData) {
    // Hide search error and icons
    nominalRollIdSearchError.style.display = "none";
    nominalRollIdSearchIcon.style.display = 'none';
    nominalRollIdSearchBtn.style.display = 'block';
    nominalRollList.style.display = 'block';


    nominalRollListBody.innerHTML = '';


    for (let row of printData) {

        if (row.length === 14) {

            const currentRow = document.createElement('tr');

            currentRow.innerHTML =
                `<td>${row[0]}</td>
                <td>${row[1]}</td>
                <td>${row[7]}</td>
                <td>${dateConvertYYMMDD(row[8])}</td>
                <td>${dateConvertYYMMDD(row[9])}</td>
                 <td>${formattedDaysBetweenDates(row[8], row[9])}</td>
                <td>${row[10]}</td>
                <td>${row[3]}</td>
                <td>
                    <span id="downloadIcon" title="Download PDF">
                        <i class="fa-solid fa-file-arrow-down"></i>
                    </span>
                </td>`;

            nominalRollListBody.appendChild(currentRow);
        }
    }



    

    // jab user nominalroll list table me download icon par click karega tab ye logic kam karega.
    nominalRollListBody.addEventListener("click", function (e) {

        if (e.target.tagName === "I") {

            const spanIcon = e.target.closest("span");
            const tableRow = e.target.closest("tr");

            const nominalDataObj = {

                "NominalRollId": tableRow.cells[0].innerText,
                "CentreName": tableRow.cells[1].innerText,
                "SewaPlace": tableRow.cells[2].innerText,
                "SewaFromDt": tableRow.cells[3].innerText,
                "SewaToDt": tableRow.cells[4].innerText,
                "DepartmentName": tableRow.cells[6].innerText,
                "JathedarName": tableRow.cells[7].innerText,
            };

            getNominalRollDetails(nominalDataObj, spanIcon);

        };
    });
};

// calculate fromDate to toDate sewa duration in days --------------
function daysBetweenDates(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInMilliseconds = endDate - startDate;
    const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsPerDay);
    return differenceInDays;
}

function formatNumber(num) {
    if (num < 10) {
        return "0" + num;
    }
    else {
        return num.toString();
    }
}

function formattedDaysBetweenDates(date1, date2) {
    const days = daysBetweenDates(date1, date2);
    return formatNumber(days);
}





// nominal roll details get karne ke bad filter kiya agar ye details match hoti hai tab downloadNominalRollInPDFFormat(printData) ye function call ho jaye.
function getNominalRollDetails(dataObje, spanIcon) {

    spanIcon.innerHTML = `<img width="25" src="loader1.gif">`;


    const rollId = dataObje.NominalRollId;
    const cntrName = dataObje.CentreName;
    const placeName = dataObje.SewaPlace;
    const fromDateSewa = dataObje.SewaFromDt;
    const toDateSewa = dataObje.SewaToDt;
    const departmentName = dataObje.DepartmentName;
    const JathedarName = dataObje.JathedarName;


    fetch(nominalUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            let bulkData = [];
            let includeNextRows = false;

            if (rollId !== "" && cntrName !== "" && placeName !== "" && fromDateSewa !== "" && toDateSewa !== "" && departmentName !== "" && JathedarName !== "") {

                for (let row of data) {

                    if (row.length >= 11 && row.length <= 14) {

                        if (row.includes(rollId) && row.includes(cntrName) && row.includes(placeName) && row.includes(fromDateSewa) && row.includes(toDateSewa) && row.includes(departmentName) && row.includes(JathedarName)) {

                            bulkData.push(row);
                            includeNextRows = true;

                        } else {

                            includeNextRows = false;
                        }

                    } else if (row.length === 25 && includeNextRows) {

                        bulkData.push(row);
                    }
                };


            };



            if (bulkData.length === 0) {
                nominalRollIdSearchError.style.display = "block";
            } else {

                downloadNominalRollInPDFFormat(bulkData, spanIcon);

            }

        });

};

// nominal roll details Convert into PDF Format
function downloadNominalRollInPDFFormat(printData, spanIcon) {

    spanIcon.innerHTML = `<i class="fa-solid fa-file-arrow-down"></i>`;


    if (printData.length === 0) {

        const dataNot = confirm("Network Response Problem");

        if (dataNot === true || dataNot === false) {
            console.log("Network Response Problem.")
        }

    } else {


        const cnfrmMsg = confirm("PDF Create For Badge Sewadar Press Ok Rather Than Press Cancel")

        let verify = false;

        if (cnfrmMsg === true) {

            nominalRollTableList.style.display = "none";
            nominalRollTableOfBadgeSewadar.style.display = "block";

            document.querySelector(".maleFemaleTotalOfSewa").style.display = "none";
            document.querySelector(".maleFemaleTotalOfBadge").style.display = "block";

            verify = true;
            editJathaDataInNominalRoll(printData, verify);

        } else {

            nominalRollTableList.style.display = "block";
            nominalRollTableOfBadgeSewadar.style.display = "none";

            document.querySelector(".maleFemaleTotalOfSewa").style.display = "block";
            document.querySelector(".maleFemaleTotalOfBadge").style.display = "none";

            verify = false;
            editJathaDataInNominalRoll(printData, verify);

        };


    };


    print();

    setTimeout(()=>{
        
  nominalForm.reset();
    
    const table = document.getElementById('nominalRollTable');
    
    if (table) {
        while (table.rows.length > 0) {
            table.deleteRow(0);
            maleCount.innerHTML = "00";
            femaleCount.innerHTML = "00";
            totalCount.innerHTML = "00";
        }
    };
    
    const table1 = document.getElementById('nominalRollTableOfBadge');
    
    if (table1) {
        while (table1.rows.length > 0) {
            table1.deleteRow(0);
            badgeMaleCount.innerHTML = "00";
            badgeFemaleCount.innerHTML = "00";
            badgeTotalCount.innerHTML = "00";
        }
    };
    
    if (nameOfJathedar.value.length == 0) {
        automaticFillJathedarName.innerHTML = "";
    }
    
    nominalUpdateBtn.style.display = "none";
    nominalSubmitBtn.style.display = "block";
    badgeNumberSelect.style.display = "block";

    },2000);
};





// Sangat/Sewadar who went to Jatha

const nominalSearchBtn = document.getElementById('nominalSearchBtn');
const fromDateSearch = document.getElementById('fromDateSearch');
const toDateSearch = document.getElementById('toDateSearch');
const departmentSearch = document.getElementById('departmentSearch');
const absentPresentBox = document.getElementById('absentPresentBox');
const searchNominalDesignation = document.getElementById('searchNominalDesignation');
const parentCentreSearch = document.getElementById('parentCentreSearch');
const nominalRollIdSearch = document.getElementById('nominalRollIdSearch');
const searchBadgeNumber = document.getElementById('searchBadgeNo');
const sangatSewadarSearchName = document.getElementById('sangatSewadarSearchName');
const sangatSewadarFath_Hus_Name = document.getElementById('sangatSewadarFath_Hus_Name');
const nominalResultBox = document.querySelector('.nominalResultBox');
const nominalSearchIcon = document.querySelector(".nominalSearchIcon");
const nominalSearchError = document.getElementById('nominal-search-error');
const nominalDataEditButton = document.getElementById('sangatEditBtn');



const dataTable = document.getElementById('dataTable');
const tableBody = document.getElementById('tableBody');
const dataTableOfNameAndFName = document.getElementById('dataTableOfNameAndFName');
const tableBodyOfNameAndFName = document.getElementById('tableBodyOfNameAndFName');

const statusFooter = document.getElementById('statusFooter');
const statusName = document.getElementById('statusName');
const statusFName = document.getElementById('statusFName');
const statusAbsent = document.getElementById('statusAbsent');
const statusPresent = document.getElementById('statusPresent');
const nominalExcelButton = document.getElementById('nominalExcelButton');



// this function for search fromDate to Todate, department and parentCentre name
function fromToDateDepartmentCentreName(item) {

    nominalSearchIcon.style.display = 'none';
    nominalSearchBtn.style.display = 'block';
    dataTable.style.display = "block";



    function createTable(data) {
        const table = document.getElementById('dataTable');
        const tableBody = document.getElementById('tableBody');

        for (const row of data) {
            if (row.length === 14) {

                // Create a new row for each 14-length row
                const tableRow = document.createElement('tr');

                const customRowData = customizeValuesForLength14(row);

                for (const cellValue of customRowData) {
                    const tableCell = document.createElement('td');
                    tableCell.textContent = cellValue;
                    tableRow.appendChild(tableCell);

                    if (typeof cellValue === 'string') {
                        tableCell.innerHTML = cellValue; // Render as HTML
                    } else {
                        tableCell.appendChild(cellValue); // Render as an HTML element
                    }
                }

                tableBody.appendChild(tableRow);

            } else if (row.length === 25) {

                // Find the starting index with non-empty value
                let startIndex = 0;
                while (startIndex < 25 && !row[startIndex].trim() && startIndex < 5) {
                    startIndex++;
                }

                // Add the remaining cells from the 25-length row (excluding empty cells)
                const tableRow = document.createElement('tr');
                for (let i = startIndex; i < row.length; i++) {
                    const cellValue = row[i].trim() || '';
                    const tableCell = document.createElement('td');
                    tableCell.textContent = cellValue;
                    tableRow.appendChild(tableCell);
                }

                tableBody.appendChild(tableRow);
            }
        }

        table.appendChild(tableBody);
    };


    function customizeValuesForLength14(row) {

        //  datetime format ko date me convert karega or actual date print karega.
        const jathaFromDate = row[8];
        const jathaFrom = new Date(jathaFromDate);
        const jathafrom = jathaFrom.toLocaleDateString('en-GB', jathaFrom)


        const jathaToDate = row[9];
        const jathaTo = new Date(jathaToDate);
        const fromto = jathaTo.toLocaleDateString('en-GB', jathaTo)

        const jathedarDateForJatha = row[11];
        const jathedarSignatureDate = new Date(jathedarDateForJatha);
        const jathedarDt = jathedarSignatureDate.toLocaleDateString('en-GB', jathedarSignatureDate)

        const secretaryDateForSign = row[13];
        const secretarySignForJatha = new Date(secretaryDateForSign);
        const secDt = secretarySignForJatha.toLocaleDateString('en-GB', secretarySignForJatha)

        const customizedRow = [
            row[0],
            row[2],
            row[1],
            row[7],
            row[10],
            jathafrom,
            fromto,
            jathedarDt,
            row[12],
            secDt,
        ];


        return customizedRow;

    };

    createTable(item);


    // table me absent ko red text or present ko green text kar dega.
    let absentCount = 0;
    let presentCount = 0;

    const cells = document.querySelectorAll('#tableBody td');

    cells.forEach(cell => {
        if (cell.textContent.trim() === "Absent") {
            cell.classList.add('red-text');
            absentCount++;

        } else if (cell.textContent.trim() === "Present") {
            cell.classList.add('green-text');
            presentCount++;

        }
    });


    // name, father name and badge number ki help se absent or present ko count karna.
    const nameValue = sangatSewadarSearchName.value;
    const fhNameValue = sangatSewadarFath_Hus_Name.value;
    const badgeNoValue = searchBadgeNumber.value;

    if ((nameValue !== '' && fhNameValue !== '' && badgeNoValue !== '') || (nameValue !== '' && fhNameValue !== '') || badgeNoValue !== '') {
        statusFooter.style.display = "block";

        const formattedAbsentCount = (absentCount < 10) ? "0" + absentCount : absentCount.toString();
        const formattedPresenttCount = (presentCount < 10) ? "0" + presentCount : presentCount.toString();

        const daysOfAb = (formattedAbsentCount === "1") ? absentCount + " Day" : " Days";
        const daysOfPre = (formattedPresenttCount === "1") ? presentCount + " Day" : " Days";


        statusName.innerHTML = nameValue;
        statusFName.innerHTML = fhNameValue;
        statusAbsent.innerHTML = formattedAbsentCount + daysOfAb + " / 03 Months";
        statusPresent.innerHTML = formattedPresenttCount + daysOfPre + " / 03 Months";

    }

};



// Nominal Roll details search
nominalSearchBtn.addEventListener("click", function () {

    tableBody.innerHTML = "";

    nominalResultBox.style.display = "none";
    statusFooter.style.display = "none";
    nominalSearchBtn.style.display = 'none';
    nominalSearchIcon.style.display = 'block';
    nominalSearchError.style.display = "none";
    dataTable.style.display = "none";

    if (fromDateSearch.value === '' && toDateSearch.value === '' && departmentSearch.value === 'SelectDepartmentName' && parentCentreSearch.value === 'SelectCentreName' && absentPresentBox.value === 'selectStatus' && searchNominalDesignation.value === 'SelectDesignation' && sangatSewadarSearchName.value === '' && sangatSewadarFath_Hus_Name.value === '' && searchBadgeNumber.value === '') {
        sangatSewadarSearchName.classList.add('nullError');
        sangatSewadarFath_Hus_Name.classList.add('nullError');
        parentCentreSearch.classList.add('nullError');
        fromDateSearch.classList.add('nullError');
        toDateSearch.classList.add('nullError');
        departmentSearch.classList.add('nullError');
        searchBadgeNumber.classList.add('nullError');
        absentPresentBox.classList.add('nullError');
        searchNominalDesignation.classList.add('nullError');

        nominalSearchBtn.style.display = 'block';
        nominalSearchIcon.style.display = 'none';
        nominalSearchError.style.display = "none";
        dataTable.style.display = "none";

    } else {

        sangatSewadarSearchName.classList.remove('nullError');
        sangatSewadarFath_Hus_Name.classList.remove('nullError');
        parentCentreSearch.classList.remove('nullError');
        fromDateSearch.classList.remove('nullError');
        toDateSearch.classList.remove('nullError');
        departmentSearch.classList.remove('nullError');
        searchBadgeNumber.classList.remove('nullError');
        absentPresentBox.classList.remove('nullError');
        searchNominalDesignation.classList.remove('nullError');

        nominalSearchError.style.display = "none";
        nominalResultBox.style.display = "none";


        setTimeout(() => {

            const searchBadgeNoValue = searchBadgeNumber.value;
            const searchNameValue = sangatSewadarSearchName.value;
            const fhSearchNameValue = sangatSewadarFath_Hus_Name.value;

            const fromDateValue = fromDateSearch.value;
            const toDateValue = toDateSearch.value;
            const departmentValue = departmentSearch.value;
            const parentCentreValue = parentCentreSearch.value;

            const absentPresentBoxValue = absentPresentBox.value;
            const searchNominalDesignationValue = searchNominalDesignation.value;


            const scriptUrl = 'https://script.google.com/macros/s/AKfycbz-qiQZkRbaeHlJ1gERoisJMyvxLPr-EI2DqFFZeGz1NsDCzniFAih7sdmWtGUHW_GOCw/exec';


            // Convert dates to timestamps
            const fromDateTimestamp = new Date(fromDateValue).getTime();
            const toDateTimestamp = new Date(toDateValue).getTime();


            // By Name: Name, Father Name
            const condition1 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '';

            // By Badge Number: Badge Number
            const condition2 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue !== '';

            // By Date Range: From Date, To Date
            const condition3 = fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Department: Department
            const condition4 = (fromDateValue === '' && toDateValue === '' && departmentValue !== 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition5 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Status: Status (Absent/Present)
            const condition6 = (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition7 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Designation: Designation
            const condition8 = (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition9 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Date Range and Name:  From Date, To Date, Name, Father Name
            const condition10 = fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '';

            // By Date Range and Badge Number:  From Date, To Date, Badge Number
            const condition11 = fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue !== '';

            // By Department and Designation: Department, Designation
            const condition12 = (fromDateValue === '' && toDateValue === '' && departmentValue !== 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition13 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition14 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition15 = fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Department and Status: Department, Status
            const condition16 = (fromDateValue === '' && toDateValue === '' && departmentValue !== 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition17 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition18 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition19 = fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Centre Name and Status: Centre Name, Status
            const condition20 = (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue !== 'SelectCentreName' && absentPresentBoxValue !== 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue !== 'ALL' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition21 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'ALL' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition22 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'ALL' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition23 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue !== 'ALL' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Name, Department, and Designation: Name, Father Name, Department, Designation
            const condition24 = (fromDateValue === '' && toDateValue === '' && departmentValue !== 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '') && (fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'ALL' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '');
            const condition25 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'ALL' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '';
            const condition26 = fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'ALL' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '';
            const condition27 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'ALL' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '';

            // By Name, Date Range, and Status: Name, Father Name, From Date, To Date, Status
            const condition28 = (fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '') && (fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '');
            const condition29 = fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '';

            // By Badge Number and Status: Badge Number, Status
            const condition30 = (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue !== '') && (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue !== '');
            const condition31 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue !== '';

            // By Date Range, Department, and Status: From Date, To Date, Department, Status
            const condition32 = (fromDateValue !== '' && toDateValue !== '' && departmentValue !== 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue !== '' && toDateValue !== '' && departmentValue !== 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition33 = fromDateValue !== '' && toDateValue !== '' && departmentValue === 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition34 = fromDateValue !== '' && toDateValue !== '' && departmentValue !== 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition35 = fromDateValue !== '' && toDateValue !== '' && departmentValue === 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Designation and Status: Designation, Status
            const condition36 = (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'selectStatus' && searchNominalDesignationValue !== 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue !== 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition37 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition38 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition39 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'All' && searchNominalDesignationValue !== 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Centre Name, Department, and Status: Centre Name, Department, Status
            const condition40 = (fromDateValue === '' && toDateValue === '' && departmentValue !== 'SelectDepartmentName' && parentCentreValue !== 'SelectCentreName' && absentPresentBoxValue !== 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue !== 'ALL' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition41 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue === 'ALL' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition42 = fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue === 'ALL' && absentPresentBoxValue == 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition43 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue !== 'ALL' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition44 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue === 'ALL' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition45 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue !== 'ALL' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition46 = fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue === 'ALL' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition47 = fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue !== 'ALL' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';
            const condition48 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue !== 'ALL' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Name, Badge Number, and Designation: Name, Father Name, Badge Number, Designation
            const condition49 = (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue !== '') && (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'ALL' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue !== '');
            const condition50 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'ALL' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue !== '';

            // By Name, Department, and Status: Name, Father Name, Department, Status
            const condition51 = (fromDateValue === '' && toDateValue === '' && departmentValue !== 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '') && (fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '');
            const condition52 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '';
            const condition53 = fromDateValue === '' && toDateValue === '' && departmentValue !== 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '';
            const condition54 = fromDateValue === '' && toDateValue === '' && departmentValue === 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '';

            // By Badge Number, Date Range, and Designation: Badge Number, From Date, To Date, Designation
            const condition55 = (fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue !== '') && (fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue !== '');
            const condition56 = fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue !== '';

            // By Name, Date Range, and Designation: Name, Father Name, From Date, To Date, Designation
            const condition57 = (fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'SelectDesignation' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '') && (fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'ALL' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '');
            const condition58 = fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'ALL' && searchNameValue !== '' && fhSearchNameValue !== '' && searchBadgeNoValue === '';

            // By Centre Name: Centre Name
            const condition59 = (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue !== 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue !== 'ALL' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition60 = fromDateValue === '' && toDateValue === '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'ALL' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Date Range, Department Name: fromDate, toDate, Department Name
            const condition61 = (fromDateValue !== '' && toDateValue !== '' && departmentValue !== 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue !== '' && toDateValue !== '' && departmentValue !== 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition62 = fromDateValue !== '' && toDateValue !== '' && departmentValue === 'ALL' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Date Range, Centre Name: fromDate, toDate, Centre Name
            const condition63 = (fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue !== 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue !== 'ALL' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition64 = fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'ALL' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Date Range, Status: fromDate, toDate, Status
            const condition65 = (fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'selectStatus' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue !== 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition66 = fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'All' && searchNominalDesignationValue === 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';

            // By Date Range, Designation: fromDate, toDate, Designation
            const condition67 = (fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'SelectDesignation' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '') && (fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue !== 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '');
            const condition68 = fromDateValue !== '' && toDateValue !== '' && departmentValue === 'SelectDepartmentName' && parentCentreValue === 'SelectCentreName' && absentPresentBoxValue === 'selectStatus' && searchNominalDesignationValue === 'ALL' && searchNameValue === '' && fhSearchNameValue === '' && searchBadgeNoValue === '';



            fetch(scriptUrl)
                .then(response => response.json())
                .then(data => {

                    let bulkData = [];
                    let includeNextRows = false;


                    if (condition1) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }


                    } else if (condition2) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchBadgeNoValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition3) {

                        for (let row of data) {

                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {
                                bulkData.push(row);
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition4) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {
                                if (row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition5) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition6) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition7) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition8) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(searchNominalDesignationValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition9) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition10) {

                        for (let row of data) {

                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition11) {

                        for (let row of data) {

                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(searchBadgeNoValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition12) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {
                                if (row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(searchNominalDesignationValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition13) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition14) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(searchNominalDesignationValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition15) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }
                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition16) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {
                                if (row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition17) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition18) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition19) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }
                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition20) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {
                                if (row.includes(parentCentreValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition21) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition22) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition23) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(parentCentreValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }
                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition24) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {
                                if (row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(searchNominalDesignationValue) && row.includes(searchNameValue) && row.includes(fhSearchNameValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition25) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition26) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition27) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(searchNominalDesignationValue) && row.includes(searchNameValue) && row.includes(fhSearchNameValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition28) {

                        for (let row of data) {

                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue) && row.includes(searchNameValue) && row.includes(fhSearchNameValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition29) {

                        for (let row of data) {

                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition30) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue) && row.includes(searchBadgeNoValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition31) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(searchBadgeNoValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition32) {

                        for (let row of data) {

                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if ((rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) && row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition33) {

                        for (let row of data) {

                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition34) {

                        for (let row of data) {

                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if ((rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) && row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition35) {

                        for (let row of data) {

                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if ((rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition36) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue) && row.includes(searchNominalDesignationValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition37) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition38) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition39) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(searchNominalDesignationValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition40) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(parentCentreValue) && row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition41) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition42) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition43) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(parentCentreValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition44) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition45) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(parentCentreValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition46) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition47) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(parentCentreValue) && row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition48) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(parentCentreValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition49) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue) && row.includes(searchBadgeNoValue) && row.includes(searchNominalDesignationValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }


                    } else if (condition50) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue) && row.includes(searchBadgeNoValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }


                    } else if (condition51) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {
                                if (row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue) && row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }


                    } else if (condition52) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }


                    } else if (condition53) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                if (row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }


                    } else if (condition54) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue) && row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }


                    } else if (condition55) {

                        for (let row of data) {
                            // Assuming the date is at index 0 of each row
                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchBadgeNoValue) && row.includes(searchNominalDesignationValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition56) {

                        for (let row of data) {
                            // Assuming the date is at index 0 of each row
                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchBadgeNoValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition57) {

                        for (let row of data) {
                            // Assuming the date is at index 0 of each row
                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue) && row.includes(searchNominalDesignationValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition58) {

                        for (let row of data) {
                            // Assuming the date is at index 0 of each row
                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchNameValue) && row.includes(fhSearchNameValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition59) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {
                                if (row.includes(parentCentreValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition60) {

                        for (let row of data) {

                            if (row.length >= 11 && row.length <= 14) {

                                bulkData.push(row);
                                includeNextRows = true;

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);

                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition61) {

                        for (let row of data) {
                            // Assuming the date is at index 0 of each row
                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if ((rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) && row.includes(departmentValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition62) {

                        for (let row of data) {
                            // Assuming the date is at index 0 of each row
                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition63) {

                        for (let row of data) {
                            // Assuming the date is at index 0 of each row
                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if ((rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) && row.includes(parentCentreValue)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition64) {

                        for (let row of data) {
                            // Assuming the date is at index 0 of each row
                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition65) {

                        for (let row of data) {
                            // Assuming the date is at index 0 of each row
                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if ((rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(absentPresentBoxValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition66) {

                        for (let row of data) {
                            // Assuming the date is at index 0 of each row
                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition67) {

                        for (let row of data) {
                            // Assuming the date is at index 0 of each row
                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if ((rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp)) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {
                                if (row.includes(searchNominalDesignationValue)) {

                                    bulkData.push(row);
                                }
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else if (condition68) {

                        for (let row of data) {
                            // Assuming the date is at index 0 of each row
                            const rowDateTimestamp = new Date(row[8]).getTime();

                            if (row.length >= 11 && row.length <= 14) {

                                if (rowDateTimestamp >= fromDateTimestamp && rowDateTimestamp <= toDateTimestamp) {

                                    bulkData.push(row);
                                    includeNextRows = true;

                                } else {
                                    includeNextRows = false;
                                }

                            } else if (row.length === 25 && includeNextRows) {

                                bulkData.push(row);
                            }
                        };

                        if (bulkData.length === 0) {
                            displaySearchError("Data Are Not Available In Our Database!");
                        } else {
                            removeRowsBelow14Length(bulkData);
                        }

                    } else {
                        displaySearchError("Please Provide The Right Criteria.");
                    }
                })
                .catch(error => console.error('Error:', error));



        }, 10);


    };


});

// remove karega uss row ko jiski length 14 hai or iske just niche bhi 14 length ki row hai.
function removeRowsBelow14Length(bulkData) {
    for (let i = bulkData.length - 1; i >= 0; i--) {
        let currentRow = bulkData[i];
        let nextRow = bulkData[i + 1];

        if (currentRow.length === 14 && (!nextRow || nextRow.length !== 25)) {
            bulkData.splice(i, 1); // Remove the current row
        }
    };

    displaySearchResults(bulkData);
};

// ye errors show karega condtions ke.
function displaySearchError(message) {
    nominalSearchError.style.display = "block";
    nominalSearchError.innerText = message;
    nominalResultBox.style.display = "none";
    nominalSearchBtn.style.display = 'block';
    nominalSearchIcon.style.display = 'none';
};

// ye result show karega conditions ke or usko dusre function me pass karega.
function displaySearchResults(data) {
    nominalSearchError.style.display = "none";
    nominalResultBox.style.display = "block";

    fromToDateDepartmentCentreName(data);

    downloadExcelFormat(data);
};


// Download Nominal Roll search data in excel format.
function downloadExcelFormat(bulkData) {
    // Create a new Excel Workbook
    const workbook = XLSX.utils.book_new();

    // Add headings
    const headings = ['NominalRollId', 'Centre Name', 'Area', 'Jathedar Name', 'Driver Name', 'Vehicle Type', 'Vehicle Number', 'Place of Sewa', 'From Date', 'To Date', 'Department', 'Jathedar Sign Date', 'Functionary Name', 'Functionary Sign Date', 'Sr. No.', 'Badge Number', 'Designation', 'Name', 'F/H Name', 'Gender', 'Age', 'Address', 'Mobile No.', 'AadharCard No.', 'Status']; // Add your headings here
    const dataWithHeadings = [headings, ...bulkData]; // Combine headings with bulk data

    // Add a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(dataWithHeadings);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "BulkData");

    // Convert the workbook to a binary string
    const excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

    // Convert the binary string to a Blob
    const blob = new Blob([s2ab(excelData)], { type: "application/octet-stream" });

    // Create a download link
    const url = window.URL.createObjectURL(blob);
    const buttonHtml = `<button type="download" title="Download In Excel Format" class="bulkDataExcel" onclick="excelDownload('${url}')">Download Excel</button>`;
    nominalExcelButton.innerHTML = buttonHtml;


    // Function to convert binary string to array buffer
    function s2ab(s) {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }

};

// Function to trigger Excel download
function excelDownload(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bulkData.xlsx';
    a.click();
}

// pending page's cards delete automatic after 3 days 
function deleteKeysAfter3Days() {

    const currentTime = Date.now();

    const threeDaysAgo = currentTime - (3 * 24 * 60 * 60 * 1000);

    const keys = Object.keys(localStorage);

    const dateKeys = keys.filter(key => /^\d+$/.test(key));

    dateKeys.forEach(key => {
        const keyTime = parseInt(key);

        if (cardBoxes.innerHTML !== "") {

            if (keyTime < threeDaysAgo) {
                localStorage.removeItem(key);
            }
        }
    });
}

setTimeout(deleteKeysAfter3Days, 3 * 24 * 60 * 60 * 1000);


// sewadar, initiation and sangat page ke liye bhi excel download button lgana hai.


const boxOne = document.getElementById("boxOne");
const boxTwo = document.getElementById("boxTwo");
const boxThree = document.getElementById("boxThree");
const boxFour = document.getElementById("boxFour");
const boxFive = document.getElementById("boxFive");
const boxSix = document.getElementById("boxSix");



const homeBtn = document.getElementById('homeBtn');
const initionBtn = document.getElementById('initionBtn');
const sangatBtn = document.getElementById('sangatBtn');
const nominalBtn = document.getElementById('nominalBtn');
const pendingBtn = document.getElementById('pendingBtn');
const notesForBoxOfSix = document.getElementById("notesForBoxOfSix");

homeBtn.addEventListener("click", function () {
    boxTwo.style.display = 'block';
    boxThree.style.display = 'none';
    boxFour.style.display = 'none';
    boxFive.style.display = 'none';
    boxSix.style.display = 'none';
    notesForBoxOfSix.style.display = "none";
});

initionBtn.addEventListener("click", function () {
    boxTwo.style.display = 'none';
    boxThree.style.display = 'block';
    boxFour.style.display = 'none';
    boxFive.style.display = 'none';
    boxSix.style.display = 'none';
    notesForBoxOfSix.style.display = "none";
});

sangatBtn.addEventListener("click", function () {
    boxTwo.style.display = 'none';
    boxThree.style.display = 'none';
    boxFour.style.display = 'block';
    boxFive.style.display = 'none';
    boxSix.style.display = 'none';
    notesForBoxOfSix.style.display = "none";
});

nominalBtn.addEventListener("click", function () {
    boxTwo.style.display = 'none';
    boxThree.style.display = 'none';
    boxFour.style.display = 'none';
    boxFive.style.display = 'block';
    boxSix.style.display = 'none';
    notesForBoxOfSix.style.display = "none";
});

pendingBtn.addEventListener("click", function () {
    boxTwo.style.display = 'none';
    boxThree.style.display = 'none';
    boxFour.style.display = 'none';
    boxFive.style.display = 'none';
    boxSix.style.display = 'block';
    notesForBoxOfSix.style.display = "block";
});




const loginUsr = document.getElementById('loginUsr');
const storedToken = localStorage.getItem('token');

const logOutBtn = document.getElementById('logOutBtn');

const [firstValue] = storedToken.split(',');

loginUsr.innerHTML = firstValue;


// Logout functionality
// function logout() {

logOutBtn.addEventListener("click", function () {
    window.history.replaceState(null, null, 'index.html');
    window.location.href = 'index.html';

    localStorage.removeItem('token');
});





