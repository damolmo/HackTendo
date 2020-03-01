function share() {
    var hidden = $("#social_btn").css("display") == "none";
    if (hidden) {
        $("#social_btn").slideDown(500).css("display", "inline-block");
        console.log("sucess");
    } else {
        $("#social_btn").slideUp(500);
    }
}
