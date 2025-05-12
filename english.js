
// Perfil profesional en formato objeto
let devProfile = {
    fullName: "Carolina Scarface Betlienki",
    age: 28,
    profession: "Full Stack Developer",
    skills: ["JavaScript", "Node.js", "React", "MySQL"],
    isEmployed: true,
    contact: {
        email: "scarfcarob@gmail.com",
        location: "Apostoles, Misiones"
        }
};


// Función que genera una presentación en inglés (concatena los datos para generar un texto en ingles)
function introduceDev(profile) {
const employmentStatus = profile.isEmployed ? "I am currently employed." : "I am currently looking for new opportunities.";
    
    return `Hello! My name is ${profile.fullName}. I am a ${profile.profession}. I work with ${profile.skills.join(", ")}. I live in ${profile.contact.location}. I am ${profile.age} years old. ${employmentStatus} You can contact me at ${profile.contact.email}.`;
}


// Ejecución de prueba
console.log(introduceDev(devProfile));

