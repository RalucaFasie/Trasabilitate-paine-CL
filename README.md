# Trasabilitate-paine-CL

Proiect static pentru trasabilitate paine - site publicat pe GitHub Pages la: https://ralucafasie.github.io/Trasabilitate-paine_CL

Instrucțiuni rulare locală:
1. Clonează repo: git clone https://github.com/RalucaFasie/Trasabilitate-paine-CL.git
2. Navighează în director: cd Trasabilitate-paine-CL
3. Rulează un server static (recomandat):
   - cu Node.js instalat: npx http-server . -p 8080
   - sau cu live-server: npx live-server
4. Accesează http://localhost:8080 în browser.

Instrucțiuni deploy pe GitHub Pages:
- Site-ul este publicat la branch-ul main (implicit) și folosește GitHub Pages. Asigură-te că fișierele statice (index.html, css/, js/, images/) sunt în rădăcina branch-ului main.
- Dacă folosești un subpath (ex: /Trasabilitate-paine_CL/), adaugă în <head> din index.html: <base href="/Trasabilitate-paine_CL/"> pentru a asigura încărcarea corectă a resurselor.

Ce am corectat în branch fix/pages-and-frontend:
- docs: update README cu instrucțiuni de rulare locală și deploy pe Pages.

Note:
- Nu am modificat fișierele frontend în acest commit. Următorul pas va fi inspectarea index.html și fișierelor CSS/JS și aplicarea corecțiilor pentru căi și erori JS; confirmă dacă vrei să continui automat sau preferi revizuire manuală înainte de schimbări majore.
