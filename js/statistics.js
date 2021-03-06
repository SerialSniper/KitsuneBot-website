function update() {
    $.getJSON("https://serialsniper-kitsunebot.herokuapp.com/", function(data) {
        $("#developer").text(data["developer"]);
        $("#version").text(data["version"]);
        $("#birthday").text(data["birthday"]);
        $("#servers").text(data["servers"]);

        let uptime = data["uptime"];
        let totalSeconds = (uptime / 1000);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let text;

        if(hours >= 1) {
            text = hours + "h " + minutes + "min";
        } else if(minutes >= 1) {
            text = minutes + "min";
        } else {
            text = seconds + "s";
        }

        $("#uptime").text(text);
    });

    setTimeout(update, 10000);
}

$(document).ready(function() {
    $.ajaxSetup({ cache: false });
    update();
});