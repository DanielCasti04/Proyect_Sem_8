// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOyrP4SrRm4iYwP5tohhQz5aU5xLyZ-oU",
  authDomain: "proyecteventssem8.firebaseapp.com",
  projectId: "proyecteventssem8",
  storageBucket: "proyecteventssem8.firebasestorage.app",
  messagingSenderId: "172885191069",
  appId: "1:172885191069:web:fcee66a82570c4f2bca774",
  measurementId: "G-KSJEFJTTVJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
// Función para registrar datos en Firestore
async function registrarAsistente(nombre, correo, concierto) {
  try {
    const coleccion =
      concierto === "maluma" ? "maluma_registros" : "shakira_registros";
    await addDoc(collection(db, coleccion), {
      nombre: nombre,
      correo: correo,
      fecha: new Date().toISOString(),
    });
    alert(
      `¡Te has registrado al concierto de ${concierto.toUpperCase()} exitosamente!`
    );
  } catch (error) {
    console.error("Error al registrar:", error);
    alert("Hubo un problema. Intenta nuevamente.");
  }
}

// Eventos de clic
document.getElementById("btnMaluma").addEventListener("click", () => {
  const nombre = document.getElementById("nombreMal").value.trim();
  const correo = document.getElementById("emailMal").value.trim();

  if (nombre && correo) {
    registrarAsistente(nombre, correo, "maluma");
  } else {
    alert("Por favor completa todos los campos.");
  }
});

document.getElementById("btnShakira").addEventListener("click", () => {
  const nombre = document.getElementById("nombreSh").value.trim();
  const correo = document.getElementById("emailSh").value.trim();
  if (nombre && correo) {
    registrarAsistente(nombre, correo, "shakira");
  } else {
    alert("Por favor completa todos los campos.");
  }
});
