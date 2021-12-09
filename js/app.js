window.onload = () => {
    const tables = document.getElementsByTagName(`td`);
    for (const index of tables) {
        index.addEventListener(`click`, () => {
            for (const letter of tables) {
                if (index === letter) {
                    if (letter.classList.contains(`animate`)) {
                        letter.classList.add(`origin`);
                        letter.classList.remove(`animate`);
                    }
                    else {
                        letter.classList.remove(`origin`);
                        letter.classList.add(`animate`);
                    }
                } else if (letter.classList.contains(`animate`)) {
                    letter.classList.add(`origin`);
                    letter.classList.remove(`animate`);
                }
            }
        });
    }
};
