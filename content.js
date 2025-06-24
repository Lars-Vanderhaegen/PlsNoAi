searchbar = document.getElementsByName("q")[0];

function addAI() {
     var searchTerm = searchbar.value;
    if (!searchTerm.includes(" -ai") && (searchTerm.length > 0)) {
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm) + " -ai";
    }
};


searchbar.addEventListener("blur", addAI, true);