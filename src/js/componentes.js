import "../css/componentes.css"
import webpackLogo from "../assets/img/webpack-logo.png";
/**
 * This function creates an h1 element with the given name and appends it to the document body.
 * @param {string} name - The name to be displayed in the h1 element.
 */
export const saludar = (name) => {
    const h1 = document.createElement("h1");
    h1.textContent = name;
    document.body.appendChild(h1);

    console.log(webpackLogo);
    const img = document.createElement("img");
    img.src = webpackLogo;
    document.body.append(img);

}
