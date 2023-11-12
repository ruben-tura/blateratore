window.onload = function () {
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;

    window.onkeydown = function (key) {

        // Category scrolling
        if (key.keyCode === up) {
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
                categories[categories.length - 1].classList.add("selected");
            }
            const options = document.querySelectorAll(".selected > .sub-menu > button");
            options[0].classList.add("option-selected");
        };

        if (key.keyCode === down) {
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
                categories[0].classList.add("selected");
            }
            const options = document.querySelectorAll(".selected > .sub-menu > button");
            options[0].classList.add("option-selected");
        };


    };

}