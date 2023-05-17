import "dotenv/config.js";
import "../../config/database.js";
import Author from "../Author.js";

let authors = [
  {
    name: "alejandro",
    city: "buenos aires",
    country: "argentina",
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "6464401c3a85d54df0cc7b33",
  },
  {
    name: "lucas",
    last_name: "silva",
    city: "buenos aires",
    country: "argentina",
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "6464401c3a85d54df0cc7b34",
  },
  {
    name: "jose",
    last_name: "lopez",
    city: "villa carlos paz",
    country: "argentina",
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "6464401c3a85d54df0cc7b35",
  },
  {
    name: "eric",
    city: "resistencia",
    country: "argentina",
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "6464401c3a85d54df0cc7b36",
  },
  {
    name: "igna",
    last_name: "borraz",
    city: "rosario",
    country: "argentina",
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "6464401c3a85d54df0cc7b37",
  },
];

Author.insertMany(authors);
