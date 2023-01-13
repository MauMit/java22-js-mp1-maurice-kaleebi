//Maurice Kaleebi - Mini project 1 - Javascript 2022

//skapar en array för mina rader och skapar varibel för färg och storlek
const rowList = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];

let rowColor = 120;
let rowSize = 13

//skapar en div och stylar den
const div = document.createElement('div');
document.body.append(div)

div.style.width = '69%';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.flexFlow = 'column';
div.style.marginLeft = 'auto';
div.style.marginRight = 'auto';


// skapar en loop som loopar samtliga rader och stylar den
for (let i = 0; i < rowList.length; i++) {
    const h1 = document.createElement('h1');
    div.append(h1);
    h1.innerText = `${rowList[i]}`;
    h1.style.textAlign = "center";
    h1.style.color = '#6e6ef7';
    h1.style.background = `hsl(${rowColor}, 90%, 85%)`;

    h1.style.fontSize = `${rowSize}px`;
    rowSize = rowSize + 10
    rowColor += 20;

}

//skapar en div container och stylar den
const divContainer = document.createElement('div');
document.body.append(divContainer);

divContainer.style.display = 'flex';
divContainer.style.justifyContent = 'center';
divContainer.style.gap = '10rem';
divContainer.style.marginTop = '3rem';
divContainer.style.marginLeft = 'auto';
divContainer.style.marginRight = 'auto';
divContainer.style.padding = '4rem';
divContainer.style.border = '2px solid black';
divContainer.style.width = '60%';


// skapar arrays
const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
const reverseList = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const lettersNumber = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];


// skapar en loop med 3 divar och stylar den
for (let i = 0; i < 3; i++) {
    const divList = document.createElement('div');
    divContainer.append(divList);
    divList.style.background = '#a8a8f0';
    divList.style.padding = '20px';
    divList.style.display = 'flex';
    divList.style.flexFlow = 'column';
    divList.style.width = '120px';


    // skapar en loop inuti en loop och skapar 10 p element varsin div
    for (let j = 0; j < 10; j++) {

        const numListP = document.createElement('p');
        const reverseListP = document.createElement('p');
        const lettersNumP = document.createElement('p');
        if (i == 0) {

            numListP.innerText = `${numberList[j]}`;
            numListP.style.background = 'black';
            numListP.style.color = 'white';
            numListP.style.textAlign = 'left';
            numListP.style.margin = '0';
            numListP.style.fontSize = '25px';
            divList.append(numListP);

            // gör så att varannan p får vit backgrund och svart text färg
            if (j % 2 == 1) {
                numListP.style.background = 'white';
                numListP.style.color = 'black';
            }

            // gör så att ett nummer får samma bakgrund som divlistan
            if (numberList[j] == 4) {
                numListP.style.background = 'transparent';

            }
        }

        if (i == 1) {

            reverseListP.innerText = `${reverseList[j]}`;
            reverseListP.style.background = 'white';
            reverseListP.style.color = 'black';
            reverseListP.style.textAlign = 'center';
            reverseListP.style.margin = '0';
            reverseListP.style.fontSize = '25px';
            divList.append(reverseListP);


            if (j % 2 == 1) {
                reverseListP.style.background = 'black';
                reverseListP.style.color = 'white';
            }

            if (reverseList[j] == 8) {
                reverseListP.style.background = 'transparent';

            }
        }

        if (i == 2) {
            lettersNumP.innerText = `${lettersNumber[j]}`;
            lettersNumP.style.background = 'black';
            lettersNumP.style.color = 'white';
            lettersNumP.style.textAlign = 'right';
            lettersNumP.style.margin = '0';
            lettersNumP.style.fontSize = '25px';
            divList.append(lettersNumP);
            if (j % 2 == 1) {
                lettersNumP.style.background = 'white';
                lettersNumP.style.color = 'black';
            }

            if (lettersNumber[j] == 'sex') {
                lettersNumP.style.background = 'transparent';

            }
        }

    }
}
