document.addEventListener('DOMContentLoaded', function() {
    
    // Toate datele stocate într-un singur obiect pentru o gestionare ușoară
    const blockchainData = {
        ferma: {
            title: '🏡 FERMA: Originea Grâului',
            points: [
                "<strong>Proveniența:</strong> Ferma 'AgroPrim Călărași', locație GPS: 44.20, 27.33",
                "<strong>Certificări:</strong> Certificat BIO RO-ECO-008",
                "<strong>Recoltare:</strong> Semănat la 15-10-2024, Recoltat la 05-07-2025",
                "<strong>Lot Producție:</strong> GR-CL-2025-A01 (identificator unic blockchain)",
                "<strong>Tratamente:</strong> Îngrășăminte organice, fără pesticide (validat prin semnătură digitală)",
                "<strong>Date Meteo (IoT):</strong> Temperatură medie 22°C, Umiditate sol 55%",
            ]
        },
        transport: {
            title: '🚛 TRANSPORT & LOGISTICĂ: Integritatea Lanțului',
            points: [
                "<strong>Companie Transport:</strong> 'LogiSpeed SRL' (certificată ISO 9001)",
                "<strong>Traseu GPS:</strong> Traseu securizat și tokenizat pe blockchain",
                "<strong>Senzori IoT:</strong> Temperatură constantă de 18°C, Umiditate 60%",
                "<strong>Timestamp Preluare:</strong> 05-07-2025 14:00 (semnătură digitală fermier)",
                "<strong>Timestamp Livrare:</strong> 05-07-2025 16:30 (semnătură digitală moară)",
                "<strong>Validare:</strong> Integritatea lotului confirmată la destinație.",
            ]
        },
        moara: {
            title: '🏭 MOARĂ / PROCESARE: Calitatea Făinii',
            points: [
                "<strong>Lot Grâu Procesat:</strong> GR-CL-2025-A01",
                "<strong>Data Măcinării:</strong> 06-07-2025",
                "<strong>Parametri Procesare:</strong> Făină tip 650, umiditate 14%",
                "<strong>Analize Laborator:</strong> Certificat de conformitate digital (fără micotoxine)",
                "<strong>Lot Făină Rezultat:</strong> FA-CL-2025-M01",
                "<strong>Standarde:</strong> Norme HACCP și ISO 22000 verificate și înregistrate.",
            ]
        },
        senzori: {
            title: '📡 SENZORII IoT: Monitorizare Automată',
            points: [
                "<strong>Tip Senzori:</strong> Temperatură, Umiditate, CO₂",
                "<strong>Citiri Automate:</strong> Datele sunt trimise la fiecare 5 minute în blockchain",
                "<strong>Timestamp-uri:</strong> Fiecare citire are un timestamp imuabil (nu poate fi modificat)",
                "<strong>Alerte Automate:</strong> Nicio alertă generată (parametrii s-au menținut în limitele sigure)",
                "<strong>Validare Date:</strong> Autenticitatea datelor este validată prin hash-uri criptografice.",
                "<strong>Scop:</strong> Asigură monitorizare continuă fără posibilitatea de manipulare umană.",
            ]
        },
        magazin: {
            title: '🏪 MAGAZIN: Produsul Final pe Raft',
            points: [
                "<strong>Lot Pâine:</strong> PN-CL-2025-F01 (legat de lotul de făină FA-CL-2025-M01)",
                "<strong>Data Coacerii:</strong> 07-07-2025",
                "<strong>Termen Valabilitate:</strong> 10-07-2025",
                "<strong>Certificare Proveniență:</strong> Disponibilă prin scanarea codului QR",
                "<strong>Traseu Complet:</strong> De la fermă la raft, vizibil pe interfața consumatorului",
                "<strong>Audit Calitate:</strong> Audit public înregistrat pe blockchain (review: 5/5 stele).",
            ]
        }
    };

    const displayContainer = document.getElementById('data-display');
    const buttons = document.querySelectorAll('.stage-button');

    // Verificare defensive pentru existența elementelor
    if (!displayContainer) {
        console.error('Element #data-display nu a fost găsit');
        return;
    }

    if (buttons.length === 0) {
        console.warn('Nu au fost găsite butoane cu clasa .stage-button');
        return; // Oprește execuția dacă nu există butoane
    }

    // Funcția care afișează datele
    function displayData(stage) {
        const data = blockchainData[stage];
        
        if (!data) {
            console.error(`Date nedefinite pentru etapa: ${stage}`);
            return;
        }
        
        // Add fade-out animation
        displayContainer.style.opacity = '0';
        displayContainer.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            let content = `<h2>${data.title}</h2>`;
            content += '<ul>';
            data.points.forEach(point => {
                content += `<li>${point}</li>`;
            });
            content += '</ul>';

            displayContainer.innerHTML = content;
            
            // Add fade-in animation
            setTimeout(() => {
                displayContainer.style.opacity = '1';
                displayContainer.style.transform = 'translateY(0)';
            }, 50);
        }, 200);
    }

    // Adaugă event listener pentru fiecare buton
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Elimină clasa 'active' de la toate butoanele
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Adaugă clasa 'active' butonului apăsat
            this.classList.add('active');
            
            // Afișează datele corespunzătoare
            const stageId = this.id;
            displayData(stageId);
        });
    });
});
