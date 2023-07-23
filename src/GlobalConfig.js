//use global.config.HostApi
module.exports = global.config = {
    // HostApi: "https://carbook-api.up.railway.app",
    HostApi: "http://localhost:8080",
    // HostFront: "https://carbook-front-production.up.railway.app",
    HostFront: "http://localhost:3000",


    //COLORS
    //kolor tła pod głownym kontenerem tu zmienic jeszcze na ten sam w app.css <html>
    BackgroundColor: "rgba(65,62,62,0.62)",
    //kolor <model><marka>
    TileFontColor: "#d7c30f",
    //kolor tła kafelka
    TileBackgroundColor: "rgba(58,56,56,0.58)",
    //kolor VIN
    DescriptionFontColor: "#e8e8e8",

    //kolor przycisku
    ButtonColorAccept:"btn btn-success",
    ButtonColorCancel:"btn btn-danger",
    ButtonColorDelete:"btn btn-danger",
    //kolor tekstu przycisku
    ButtonTextColor:"#000000",
    //NavBar tekst kolor
    NavBarTextColor:"rgb(215,195,15)",
    //kolor navbara
    NavBarBackgroundColor:"rgba(33,33,32,0.84)",
    // tło dla formularzy
    FormBackgroundColor:"rgba(57,58,57,0.48)",
    //kolor nagłowkow kart jak new order fix register itp
    FormTitleTextColor: "#c20b0b",
};