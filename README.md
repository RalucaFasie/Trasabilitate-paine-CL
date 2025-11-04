# Trasabilitate-paine-CL

## Descriere
O aplicație web demonstrativă care ilustrează conceptul de trasabilitate alimentară utilizând tehnologia blockchain pentru pâine din județul Călărași. Aplicația permite urmărirea întregului lanț de aprovizionare, de la fermă la raft.

## Vizualizare Live
Site-ul este disponibil la: [https://ralucafasie.github.io/Trasabilitate-paine-CL/](https://ralucafasie.github.io/Trasabilitate-paine-CL/)

## Structura Proiectului
```
Trasabilitate-paine-CL/
├── index.html          # Pagina principală a aplicației
├── style.css           # Stiluri CSS pentru interfață
├── script.js           # Logica JavaScript pentru interacțiuni
├── README.md           # Documentația proiectului
├── LICENSE             # Licența proiectului
└── .github/
    └── workflows/
        └── jekyll-gh-pages.yml  # Workflow pentru deployment automat
```

## Rulare Locală

### Metoda 1: Cu Python (Recomandat)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Apoi accesați în browser: `http://localhost:8000`

### Metoda 2: Cu Node.js
```bash
# Instalați http-server global (doar prima dată)
npm install -g http-server

# Rulați serverul
http-server -p 8000
```
Apoi accesați în browser: `http://localhost:8000`

### Metoda 3: Cu Live Server (VS Code)
1. Instalați extensia "Live Server" în VS Code
2. Click dreapta pe `index.html`
3. Selectați "Open with Live Server"

## Deployment pe GitHub Pages

### Configurare Automată
Proiectul folosește GitHub Actions pentru deployment automat. La fiecare push pe branch-ul `main`, site-ul este automat actualizat pe GitHub Pages.

### Pași pentru Activare GitHub Pages
1. Mergeți la Settings → Pages în repository-ul GitHub
2. Sub "Build and deployment", selectați:
   - Source: **GitHub Actions**
3. Site-ul va fi disponibil la: `https://[username].github.io/Trasabilitate-paine-CL/`

### Deployment Manual
Dacă doriți să deploy-ați manual:
```bash
git add .
git commit -m "Update site"
git push origin main
```
GitHub Actions va procesa automat deployment-ul.

## Funcționalități
- **Interfață interactivă**: Butoane pentru fiecare etapă din lanțul de aprovizionare
- **Date blockchain simulate**: Informații detaliate pentru fiecare etapă (ferma, transport, moară, senzori IoT, magazin)
- **Design responsive**: Optimizat pentru desktop și mobile
- **Fără dependențe externe**: Funcționează cu HTML, CSS și JavaScript pur

## Tehnologii Utilizate
- HTML5
- CSS3 (cu variabile CSS)
- JavaScript vanilla (ES6+)
- GitHub Pages pentru hosting
- GitHub Actions pentru CI/CD

## Browser Support
Site-ul funcționează în toate browserele moderne:
- Chrome/Edge (versiuni recente)
- Firefox (versiuni recente)
- Safari (versiuni recente)

## Contribuții
Pentru a contribui la proiect:
1. Fork repository-ul
2. Creați o branch nouă (`git checkout -b feature/improvement`)
3. Commit-uiți schimbările (`git commit -m 'Add feature'`)
4. Push la branch (`git push origin feature/improvement`)
5. Deschideți un Pull Request

## Licență
Acest proiect este licențiat sub MIT License - vezi fișierul [LICENSE](LICENSE) pentru detalii.