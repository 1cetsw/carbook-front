//use global.config.HostApi
module.exports = global.config = {
    // HostApi: "https://carbook-api.up.railway.app",
    HostApi: "http://localhost:8080",
    // HostFront: "https://carbook-front-production.up.railway.app",
    HostFront: "http://localhost:3000",


    //COLORS
    //kolor tła pod głownym kontenerem tu zmienic jeszcze na ten sam w app.css <html>
    BackgroundColor: "#666666",
    //kolor <model><marka>
    TileFontColor: "#C20B0BFF",
    //kolor tła kafelka
    TileBackgroundColor: "rgba(255,255,255,0.62)",
    //kolor VIN
    DescriptionFontColor: "#000000",

    //kolor przycisku
    ButtonColor:"btn-warning",
    //NavBar tekst kolor
    NavBarTextColor:"rgb(215,195,15)",
    //kolor navbara
    NavBarBackgroundColor:"rgba(33,33,32,0.84)",
    // tło dla formularzy
    FormBackgroundColor:"rgba(57,58,57,0.48)",
    //kolor nagłowkow kart jak new order fix register itp
    FormTitleTextColor: "#C20B0BFF",
};