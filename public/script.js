
// Sidebar
const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        altern = body.querySelector(".altern"),
        modeSwitch = body.querySelector(".switch"),
        modeText = body.querySelector(".mode-text");

    // aleternar entre modo del sidebar
    altern.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    });

    // alternar entre modos de vista
    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        // alternar texto
        if (body.classList.contains("dark")) {
            modeText.innerText = "Light Mode"
        }else {
            modeText.innerText = "Dark Mode"
        }
    });

    