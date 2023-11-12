window.onload = function () {
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;
    const spacebar = 32;

    window.onkeydown = function (key) {
        const elements = document.querySelectorAll("*");
        let isAnyOptionSelected = false;
        for (let element of elements) {
            if (element.classList.contains("option-selected")) {
                isAnyOptionSelected = true;
                break;
            }
        }
        // Category scrolling
        if (key.keyCode === up && !isAnyOptionSelected) {
            const categories = document.getElementsByClassName("category");
            let toSelect = false;
            let selected = false;
            for (let i = categories.length - 1; i >= 0; i--) {
                if (toSelect) {
                    categories[i].classList.add("selected");
                    selected = true;
                    break;
                }
                toSelect = categories[i].classList.contains("selected");
                if (toSelect) {
                    categories[i].classList.remove("selected");
                    const currentCatID = categories[i].id;
                    const previousOptions = document.querySelectorAll("#" + currentCatID + " > .sub-menu > button");
                    for (let option of previousOptions) {
                        option.classList.remove("option-selected");
                    }
                }
            }
            if (!selected) {
                categories[0].classList.add("selected");
            }
            const options = document.querySelectorAll(".selected > .sub-menu > button");
            options[0].classList.add("option-selected");
        };

        if (key.keyCode === down && !isAnyOptionSelected) {
            const categories = document.getElementsByClassName("category");
            let toSelect = false;
            let selected = false;
            for (let cat of categories) {
                if (toSelect) {
                    cat.classList.add("selected");
                    selected = true;
                    break;
                }
                toSelect = cat.classList.contains("selected");
                if (toSelect) {
                    cat.classList.remove("selected");
                    const currentCatID = cat.id;
                    const previousOptions = document.querySelectorAll("#" + currentCatID + " > .sub-menu > button");
                    for (let option of previousOptions) {
                        option.classList.remove("option-selected");
                    }
                }
            }
            if (!selected) {
                categories[categories.length - 1].classList.add("selected");
            }
            const options = document.querySelectorAll(".selected > .sub-menu > button");
            options[0].classList.add("option-selected");
        };

        // Option scrolling
        if (key.keyCode === right) {
            const options = document.querySelectorAll(".selected > .sub-menu > button");
            let toSelect = false;
            let selected = false;
            for (let option of options) {
                if (toSelect) {
                    option.classList.add("option-selected");
                    selected = true;
                    break;
                }
                toSelect = option.classList.contains("option-selected");
                if (toSelect) {
                    option.classList.remove("option-selected");
                }
            }
            if (!selected) {
                if (!toSelect) {
                    options[0].classList.add("option-selected");
                } else {
                    options[options.length - 1].classList.add("option-selected");
                }
            }
        }

        if (key.keyCode === left) {
            const options = document.querySelectorAll(".selected > .sub-menu > button");
            let toSelect = false;
            let selected = false;
            for (let i = options.length - 1; i >= 0; i--) {
                if (toSelect) {
                    options[i].classList.add("option-selected");
                    selected = true;
                    break;
                }
                toSelect = options[i].classList.contains("option-selected");
                if (toSelect) {
                    options[i].classList.remove("option-selected");
                }
            }
            if (!selected) {
                options[0].classList.remove("option-selected");
            }
        }

        // PLAY AUDIO OH YEAH
        if (key.keyCode === spacebar) {
            const optionSelected = document.querySelector(".option-selected");
            const selectedID = optionSelected.id;
            const filePath = "audio/" + selectedID + ".mp3";
            let audio = new Audio(filePath);
            audio.play();
        }


    };

}