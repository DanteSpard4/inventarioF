import app from "./app.js";

const main = () => {
    app.listen(app.get("port"));
    console.log(`Server on port in web ${app.get("port")}`);
}


main();