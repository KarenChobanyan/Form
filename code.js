"use strict"
const regions = [
    {
        id: 1,
        name: "Երևան"
    },
    {
        id: 2,
        name: "Շիրակ"
    },
    {
        id: 3,
        name: "Լոռի"
    },

    {
        id: 4,
        name: "Արագածոտն"
    },
    {
        id: 5,
        name: "Արարատ"
    },
    {
        id: 6,
        name: "Արմավիր"
    },
    {
        id: 7,
        name: "Գեղարքունիք"
    },
    {
        id: 8,
        name: "Կոտայք"
    },
    {
        id: 9,
        name: "Սյունիք"
    },
    {
        id: 10,
        name: "Տավուշ"
    },
    {
        id: 11,
        name: "Վայոց ձոր"
    },
];


let adminCenters = [
    {
        id: 1,
        units: [{ id: 130, name: "Կենտրոն" }, { id: 131, name: " Ավան" }, { id: 133, name: "Արաբկիր" }, { id: 134, name: "Դավթաշեն," }, { id: 135, name: "Էրեբունի" }, { id: 136, name: "Աջափնյակ" },
        { id: 137, name: "Մալաթիա-Սեբաստիա" }, { id: 138, name: " Նոր Նորք" }, { id: 139, name: "Նորք-Մարաշ" }, { id: 140, name: "Նուբարաշեն" }, { id: 141, name: "Շենգավիթ" }, { id: 142, name: "Քանաքեռ-Զեյթուն" }]
    },
    {
        id: 2,
        units: [{ id: 143, name: "Գյումրի" }, { id: 144, name: "Արթիկ" }, { id: 145, name: "Մարալիկ" }]
    },
    {
        id: 3,
        units: [{ id: 146, name: "Վանաձոր" }, { id: 147, name: "Ալավերդի" }, { id: 147, name: "Ստեփանավան" }, { id: 148, name: "Սպիտակ" }, { id: 149, name: "Տաշիր" }, { id: 150, name: "Ախթալա" },
        { id: 151, name: "Թումանյան" }, { id: 152, name: "Շամլուղ" }]
    },
    {
        id: 4,
        units: [{ id: 153, name: "Աշտարակ" }, { id: 154, name: "Թալին" }, { id: 155, name: "Ապարան" }]
    },
    {
        id: 5,
        units: [{ id: 156, name: "Արտաշատ" }, { id: 157, name: "Արարատ" }, { id: 158, name: "Մասիս" }, { id: 159, name: "Վեդի" }]
    },
    {
        id: 6,
        units: [{ id: 160, name: " Վաղարշապատ" }, { id: 161, name: "Արմավիր" }, { id: 161, name: "Մեծամոր" }]
    },
    {
        id: 7,
        units: [{ id: 162, name: "Գավառ" }, { id: 163, name: "Սևան" }, { id: 361, name: "Մարտունի" }, { id: 360, name: "Վարդենիս" }, { id: 359, name: "Ճամբարակ" }]
    },
    {
        id: 8,
        units: [{ id: 164, name: "Հրազդան" }, { id: 165, name: "Չարենցավան" }, { id: 166, name: "Նոր Հաճն" }, { id: 167, name: " Ծաղկաձոր" }]
    },
    {
        id: 9,
        units: [{ id: 168, name: "Կապան" }, { id: 169, name: "Գորիս" }, { id: 170, name: "Սիսիան" }, { id: 171, name: "Մեղրի" }, { id: 172, name: "Քաջարան" }, { id: 173, name: "Ագարակ" },
        { id: 174, name: "Դաստակերտ" }]
    },
    {
        id: 10,
        units: [{ id: 175, name: "Դիլիջան" }, { id: 176, name: "Իջևան" }, { id: 178, name: "Այրում" }, { id: 179, name: "Նոյեմբերյան" }, { id: 180, name: "Բերդ" }]
    },
    {
        id: 11,
        units: [{ id: 181, name: "Եղեգնաձոր" }, { id: 182, name: "Վայք" }, { id: 183, name: "Ջերմուկ" }]
    }
];

const selected = []
document.form.sureName.onblur = function(){
    if(this.value.length<=3){
        alert("Ազգանունը պետք պարունակի առնվազն 4 նիշ")
        this.value = " "
        return 1
    }
};

const selectRegion = document.form.elements.region
selectRegion.onchange = function () {
    selectCity.innerHTML = ""
    let region = regions.filter((el) => el.id == this.value)[0].name
    let checkedRegion = adminCenters.filter(el => el.id == this.value)[0]
    let unit = checkedRegion.units
    for (let i = 0; i < unit.length; i++) {
        let option = new Option(unit[i].name, unit[i].id)
        selectCity.add(option)
        // console.log(unit[i].name);
    }
}
for (let obj of regions) {
    let regionOption = new Option(obj.name, obj.id)
    selectRegion.add(regionOption)
};

const selectCity = document.form.elements.city
selectCity.onchange = function (e) {
    let id = selectRegion.value
    let cuurentRegion = adminCenters.filter((el) => el.id == id)[0]
    let unitName = cuurentRegion.units.filter((el) => el.id == this.value)[0].name
    // console.log(unitName);

};

let submit = document.form.buttonSubmit
submit.onclick = function (e) {
    e.preventDefault()
    renderNew()
    removeAll()

};






class Person {
    _name = null
    _region = null
    _city = null
    postIndex = null
    rightID = null

    set name(value) {
        let typedSureName = document.form.sureName.value
        this._name = value.upper() + " " + typedSureName.upper()

    }
    get name() {
        return this._name
    }

    set region(value) {
        this.rightID = value
        this._region = regions.filter((el) => el.id == value)[0].name
    }
    get region() {
        return this._region
    }

    set city(value) {
        let rightRegion = adminCenters.filter((el) => el.id == this.rightID)[0]
        this._city = rightRegion.units.filter((el) => el.id == value)[0].name
        this.postIndex = value
    }

    get city() {
        return this._city
    }
}


function addPerson() {
    let newPerson = new Person()
    newPerson.name = document.form.name.value
    newPerson.region = selectRegion.value
    newPerson.city = selectCity.value
    return newPerson
};

function renderNew() {
    let main = document.getElementsByClassName("main")[0]
    main.firstElementChild.style.display = "flex"
    let newPerson = addPerson()
    for (let i = 0; i < selected.length; i++) {
        if (selected[i].name == newPerson.name) {
            alert(newPerson.name + " անուն ազգանունով անձ արդեն կա գրանցված " + selected[i].region + " վարչական շրջանի " + selected[i].city + " համայնքում")
            return 1
        }
    }
    let nameSureName = newPerson.name.split(" ")
    if (nameSureName[0] == "" || nameSureName[1] == "") {
        alert("Անուն Ազգանուն դաշտերն անպայման պետք է լրացվեն")
        return 1
    }
    let newDiv = document.createElement("div")
    newDiv.classList.add("info")
    newDiv.style.display = "flex"
    newDiv.style.marginTop = "-40px"
    let num = main.getElementsByClassName("info").length
    let numDiv = document.createElement("div")
    numDiv.classList.add("num")
    numDiv.style.color = "rgb(63, 67, 73)"
    numDiv.innerText = num
    newDiv.append(numDiv)
    let nameDiv = document.createElement("div")
    nameDiv.classList.add("namePlace")
    nameDiv.style.color = "rgb(63, 67, 73)"
    nameDiv.innerText = newPerson.name
    newDiv.append(nameDiv)
    let regionDiv = document.createElement("div")
    regionDiv.classList.add("region")
    regionDiv.style.color = "rgb(63, 67, 73)"
    regionDiv.innerText = newPerson.region
    newDiv.append(regionDiv)
    let cityDiv = document.createElement("div")
    cityDiv.classList.add("unit")
    cityDiv.style.color = "rgb(63, 67, 73)"
    cityDiv.innerText = newPerson.city
    newDiv.append(cityDiv)
    let indexDiv = document.createElement("div")
    indexDiv.classList.add("postIndex")
    indexDiv.style.color = "rgb(63, 67, 73)"
    indexDiv.innerText = newPerson.postIndex
    newDiv.append(indexDiv)
    let remove = document.createElement("div")
    remove.classList.add("remove")
    remove.innerText = "X"
    remove.onclick = function () {
        this.parentNode.remove()
        let index = selected.indexOf(newPerson)
        selected.splice(index, 1)
        let elem = main.querySelectorAll(".info")
        elem = [...elem]
        for (let i = 1; i < elem.length; i++) {
            let number = elem[i].getElementsByClassName("num")[0]
            number.innerText = i
        }
        console.log(elem);
    }
    newDiv.append(remove)
    main.append(newDiv)
    selected.push(newPerson)

};

function removeAll() {
    document.form.sureName.value = ""
    document.form.name.value = ""
    selectRegion.value = "check"
    selectCity.value = ""
}


String.prototype.upper = function (){
    let arr = this.trim().split("")
    let newString = ""

    for(let i = 0;i<arr.length;i++){
        if(i==0){
            newString += arr[i].toUpperCase()
        }else{
            newString +=arr[i]
        }
    }
    return newString
}




















































