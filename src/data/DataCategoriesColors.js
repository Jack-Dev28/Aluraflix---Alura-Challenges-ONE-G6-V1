// data/DataCategoriesColors.js
import { v4 as uuid } from "uuid"

const dataCategoriesColors = [
        {
        id: uuid(),
        titulo: "FRONT END",
        colorPrimario: "#6BD1FF",
        colorSecundario: "#E8F8FF"
        },
        {
        id: uuid(),
        titulo: "BACK END",
        colorPrimario: "#00C86F", /* Este  vale */
        colorSecundario: "#F0F8E2"
        },
        {
        id: uuid(),
        titulo: "INNOVACION Y GESTION",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFEEDF"
        },
        ];

export default dataCategoriesColors;
