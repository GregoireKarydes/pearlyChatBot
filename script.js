let messages = [];
let audio = new Audio('notif.mp3');

class Message {

    constructor(author, date, content) {
        this.author = author,
        this.date = date,
        this.content = content,
        this.id = messages.length+1,
        this.color = "",
        this.picture = "picture.png";
    }

    generateMessage() {

        if(this.author ==="Pearly") {
            this.picture = "pearly.jpg"
        }

        let myMsg = document.createElement("div");
        myMsg.className = "message";
        myMsg.innerHTML = `

        <p> ${this.content}
            </p>
            <img src="" alt="" id="imgPicture">

                <p id="date"> ${this.author} : ${this.date}</p>
                 <img src="${this.picture}" id="pearly">
        `
        document.querySelector('.container').append(myMsg);

        messages.push(this)

        if(this.author != "Pearly") {
            messages[messages.length-1].color = "fushia";
            myMsg.setAttribute("id", "colored")
        }

        if(messages.length>=1) {
            controleNbMsg()
            messages.splice(0,1)
        }
    }

}

const avoirLaDate = () => {

        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        if(m>9) return h+":"+m
        else return h+":0"+m
}

const controleNbMsg = () => {
        let container = document.querySelector('.container')
        container.removeChild(container.childNodes[0])
    }

// envoyer un new msg


let btn = document.getElementById('envoyer');
btn.addEventListener("click", () => {
    let zoneDeTxt = document.getElementById('sendIt');
    let monMessage = zoneDeTxt.value
    zoneDeTxt.value = "";


    new Message("You",avoirLaDate(), monMessage).generateMessage();
    setTimeout(pearlyReply, 800)
})

// init 
document.getElementById('date').innerHTML = "Pearly : " +avoirLaDate();

let firstMsg = new Message("Pearly",avoirLaDate(), "Salut je suis Pearly le chien ! Ici tu peux discuter avec moi haha ! Pose moi des questions Waouf Waouf");
messages.push(firstMsg);

// pearly BDD

const pearlyReply = () => {
    let question = (messages[messages.length-1].content);
    question = question.toUpperCase();
    question = question.toLowerCase();

    if (question.includes("hello") || question.includes("slt") || question.includes("hi") || question.includes("coucou") || question.includes("cc") || question.includes("bonjour") || question.includes("hey") || question.includes("salut") ) {
        new Message("Pearly",avoirLaDate(), "Salut toi :)").generateMessage();
        audio.play();
    }

    else if (question.includes("cv") || question.includes("cv?") || question.includes("ça va") || question.includes("sava") || question.includes("tu vas bien") || question.includes("tu vas") || question.includes("tu te sens comment") || question.includes("la forme") ) {
        new Message("Pearly",avoirLaDate(), "Je me sens super bien et toi ? Waouf").generateMessage();
        audio.play();
    }

    else if (question.includes("prénom") || question.includes("appelles") || question.includes("ton nom")) {
        new Message("Pearly",avoirLaDate(), "Je m'appelle Pearly le chien Waoooouf ").generateMessage();
        audio.play();
    }

    else if (question.includes("maman") || question.includes("maitre?") || question.includes("maître") || question.includes("maîtresse") || question.includes("amour") || question.includes("ma vie") || question.includes("parent") || question.includes("parents")) {
        new Message("Pearly",avoirLaDate(), "J'aime trop ma maman Stéphanie et mon papa Grégoire").generateMessage();
        audio.play();
    }

    else if (question.includes("prommener") || question.includes("sortir?") || question.includes("balader") || question.includes("courir") || question.includes("marcher") || question.includes("dehors") || question.includes("aimes") || question.includes("aime")) {
        new Message("Pearly",avoirLaDate(), "J'adore sortir dehors comme ça je cours partout").generateMessage();
        audio.play();
    }

    else if (question.includes("pref") || question.includes("prefere?") || question.includes("préfère") || question.includes("préfères") || question.includes("papa") || question.includes("greg") || question.includes("grégoire") || question.includes("famille")) {
        new Message("Pearly",avoirLaDate(), "La personne que j'aime le plus c'est mon papa haha").generateMessage();
        audio.play();
    }

    else if (question.includes("fais quoi") || question.includes("tu fais quoi?") || question.includes("tu t'ennuies") || question.includes("tu t'amuses") || question.includes("occupe") || question.includes("tu joues")) {
        new Message("Pearly",avoirLaDate(), "Je dors ou je joue en général mais j'adore les calins aussi").generateMessage();
        audio.play();
    }

    else if (question.includes("âge") || question.includes("naissance") || question.includes("née") || question.includes("anniversaire") || question.includes("birthday") || question.includes("happy")) {
        new Message("Pearly",avoirLaDate(), "J'ai fait 1 an le 20/07").generateMessage();
        audio.play();
    }

    else if (question.includes("sexe") || question.includes("sex") || question.includes("bébé") || question.includes("bb") || question.includes("enfants") || question.includes("mamy")) {
        new Message("Pearly",avoirLaDate(), "Moi ma maman m'interdit de faire des bébés je suis trop jeune !!").generateMessage();
        audio.play();
    }

    else if (question.includes("os") || question.includes("manger") || question.includes("viande") || question.includes("poulet") || question.includes("jambon") || question.includes("repas")) {
        new Message("Pearly",avoirLaDate(), "Je veux manger tout plein ! Miaaaam").generateMessage();
        audio.play();
    }

    else if (question.includes("calin") || question.includes("gâté") || question.includes("bisous") || question.includes("grattage") || question.includes("tendresse") || question.includes("bidou") || question.includes("gratte") || question.includes("papouille")|| question.includes("bisou")) {
        new Message("Pearly",avoirLaDate(), "J'adore que l'on me gratte le bidou").generateMessage();
        audio.play();
    }

    else if (question.includes("heureux") || question.includes("triste") || question.includes("heureuse") || question.includes("pleurer") || question.includes("vivre") || question.includes("bonheur")) {
        new Message("Pearly",avoirLaDate(), "Il faut être heureux dans la vie et si tu es triste tu peux me faire un groooos calins").generateMessage();
        audio.play();
    }

    else if (question.includes("belle") || question.includes("beauté") || question.includes("canon") || question.includes("bombe") || question.includes("ma vie") || question.includes("la meilleure")) {
        new Message("Pearly",avoirLaDate(), "La plus belle c'est ma maman").generateMessage();
        audio.play();
    }

    else {
        let num = Math.floor(Math.random()*5+1);
        console.log(num);

        switch (num) {
            case 1:
                new Message("Pearly",avoirLaDate(), "Coooool").generateMessage();
                 audio.play();
                break;
            case 2:
                new Message("Pearly",avoirLaDate(), "D'acc !").generateMessage();
                audio.play();
                break;

            case 3:
                new Message("Pearly",avoirLaDate(), "Je préfère rien dire").generateMessage();
                audio.play();
                break;

            case 4:
                new Message("Pearly",avoirLaDate(), "Haha on est d'accord").generateMessage();
                audio.play();
                break;
            case 5:
                new Message("Pearly",avoirLaDate(), "Tu es sûr de toi là ?").generateMessage();
                audio.play();
                break;

            case 6:
                new Message("Pearly",avoirLaDate(), "Moi je suis le plus beau de chieeen").generateMessage();
                audio.play();
                break;
                  
        }
    }
}



