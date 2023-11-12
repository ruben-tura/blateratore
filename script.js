window.onload = function () {
    const up = 38;
    const down = 40;

    window.onkeydown = function (key) {
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
                }
            }
            if (!selected) {
                categories[categories.length - 1].classList.add("selected");
            }
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
                }
            }
            if (!selected) {
                categories[0].classList.add("selected");
            }
        };
    };

}