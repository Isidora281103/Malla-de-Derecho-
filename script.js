const malla = {
  "1° Semestre": [
    { nombre: "Derecho Romano", creditos: 10 },
    { nombre: "Derecho Político", creditos: 10 },
    { nombre: "Teoría del Derecho", creditos: 10 },
    { nombre: "Historia del Derecho", creditos: 4 },
    { nombre: "Fundamentos Filosóficos", creditos: 4 },
    { nombre: "Técnicas para el manejo del estrés y la ansiedad frente a evaluaciones", creditos: 4 }
  ],
  "2° Semestre": [
    { nombre: "Derecho Económico I", creditos: 4 },
    { nombre: "Fundamentos Teológicos", creditos: 4 },
    { nombre: "Integración del Saber II", creditos: 4 }
  ],
  "3° Semestre": [
    { nombre: "Derecho Civil I", creditos: 5, prerreq: ["Derecho Romano", "Teoría del Derecho"] },
    { nombre: "Derecho Procesal I", creditos: 5 },
    { nombre: "Derecho Constitucional I", creditos: 4, prerreq: ["Derecho Político"] },
    { nombre: "Derecho Internacional Público I", creditos: 4, prerreq: ["Derecho Político"] },
    { nombre: "Derecho Económico II", creditos: 4, prerreq: ["Derecho Económico I"] },
    { nombre: "Derecho Canónico", creditos: 3, prerreq: ["Fundamentos Teológicos"] },
    { nombre: "Integración del Saber III", creditos: 4 }
  ],
  "4° Semestre": [
    { nombre: "Derecho Civil II", creditos: 5, prerreq: ["Derecho Civil I"] },
    { nombre: "Derecho Procesal II", creditos: 5, prerreq: ["Derecho Procesal I"] },
    { nombre: "Derecho Constitucional II", creditos: 4, prerreq: ["Derecho Constitucional I"] },
    { nombre: "Derecho Internacional Público II", creditos: 4, prerreq: ["Derecho Internacional Público I"] },
    { nombre: "Derecho Económico III", creditos: 4, prerreq: ["Derecho Económico II"] },
    { nombre: "Inglés I", creditos: 4 },
    { nombre: "Seminario Jurídico I", creditos: 4, prerreq: ["Derecho Civil I", "Derecho Procesal I"] }
  ],
  "5° Semestre": [
    { nombre: "Derecho Civil III", creditos: 5, prerreq: ["Derecho Civil II"] },
    { nombre: "Derecho Procesal III", creditos: 5, prerreq: ["Derecho Procesal II"] },
    { nombre: "Derecho Penal I", creditos: 4, prerreqCreditos: 54 },
    { nombre: "Derecho Comercial I", creditos: 4, prerreq: ["Derecho Civil II"] },
    { nombre: "Derecho del Trabajo I", creditos: 4, prerreq: ["Teoría del Derecho"] },
    { nombre: "Derecho Administrativo I", creditos: 4, prerreq: ["Derecho Constitucional I"] },
    { nombre: "Integración del Saber IV", creditos: 4 }
  ],
  "6° Semestre": [
    { nombre: "Derecho Civil IV", creditos: 5, prerreq: ["Derecho Civil III"] },
    { nombre: "Derecho Procesal IV", creditos: 5, prerreq: ["Derecho Procesal III"] },
    { nombre: "Derecho Penal II", creditos: 4, prerreq: ["Derecho Penal I"] },
    { nombre: "Derecho Comercial II", creditos: 4, prerreq: ["Derecho Comercial I"] },
    { nombre: "Derecho del Trabajo II", creditos: 4, prerreq: ["Derecho del Trabajo I"] },
    { nombre: "Derecho Administrativo II", creditos: 4, prerreq: ["Derecho Administrativo I"] },
    { nombre: "Seminario Jurídico II", creditos: 4, prerreq: ["Derecho Civil III", "Derecho Procesal III", "Seminario Jurídico I"] }
  ],
  "7° Semestre": [
    { nombre: "Derecho Civil V", creditos: 5, prerreq: ["Derecho Civil IV"] },
    { nombre: "Derecho Procesal V", creditos: 5, prerreq: ["Derecho Procesal IV"] },
    { nombre: "Derecho Penal III", creditos: 4, prerreq: ["Derecho Penal II"] },
    { nombre: "Derecho Comercial III", creditos: 4, prerreq: ["Derecho Comercial II"] },
    { nombre: "Seguridad Social", creditos: 3, prerreq: ["Derecho del Trabajo I"] },
    { nombre: "Derecho Tributario I", creditos: 4, prerreq: ["Derecho Económico III"] },
    { nombre: "Litigación", creditos: 3, prerreq: ["Derecho Procesal IV"] },
    { nombre: "Ética Profesional", creditos: 4, prerreqCreditos: 54 }
  ],
  "8° Semestre": [
    { nombre: "Derecho Civil VI", creditos: 5, prerreq: ["Derecho Civil V"] },
    { nombre: "Derecho Procesal VI", creditos: 5, prerreq: ["Derecho Procesal V"] },
    { nombre: "Derecho Penal IV", creditos: 4, prerreq: ["Derecho Penal III"] },
    { nombre: "Derecho Comercial IV", creditos: 4, prerreq: ["Derecho Comercial III"] },
    { nombre: "Derecho Tributario II", creditos: 4, prerreq: ["Derecho Tributario I"] },
    { nombre: "Seminario Jurídico III", creditos: 4, prerreq: ["Derecho Civil V", "Derecho Procesal V", "Seminario Jurídico II"] },
    { nombre: "Optativo de Profundización", creditos: 4, prerreqCreditos: 173 }
  ],
  "9° Semestre": [
    { nombre: "Derecho Civil VII", creditos: 5, prerreq: ["Derecho Civil VI"] },
    { nombre: "Derecho Procesal VII", creditos: 5, prerreq: ["Derecho Procesal VI"] },
    { nombre: "Anteproyecto de Investigación", creditos: 5, prerreqCreditos: 235 },
    { nombre: "Derecho Internacional Privado", creditos: 3, prerreq: ["Derecho Civil IV"] },
    { nombre: "Filosofía del Derecho", creditos: 3, prerreq: ["Fundamentos Filosóficos"] },
    { nombre: "Optativo de Profundización", creditos: 4, prerreqCreditos: 173 }
  ],
  "10° Semestre": [
    { nombre: "Derecho Civil VIII", creditos: 5, prerreq: ["Derecho Civil VII"] },
    { nombre: "Tesina", creditos: 8, prerreq: ["Anteproyecto de Investigación"] },
    { nombre: "Optativo de Profundización", creditos: 4, prerreqCreditos: 173 },
    { nombre: "Optativo de Profundización", creditos: 4, prerreqCreditos: 173 },
    { nombre: "Practica Profesional", creditos: 12, prerreq: ["Seminario Jurídico III"] }
  ]
};

let creditos = 0;
let aprobados = new Set();

function renderMalla() {
  const contenedor = document.getElementById("contenedor-malla");
  for (const [semestre, ramos] of Object.entries(malla)) {
    const box = document.createElement("div");
    box.className = "semestre";
    box.innerHTML = `<h2>${semestre}</h2>`;
    ramos.forEach(r => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = r.nombre;
      div.dataset.nombre = r.nombre;
      div.dataset.creditos = r.creditos;
      if (r.prerreq) div.dataset.prerreq = r.prerreq.join(",");
      if (r.prerreqCreditos) div.dataset.prerreqCreditos = r.prerreqCreditos;

      const notasDiv = document.createElement("div");
      notasDiv.className = "notas";
      notasDiv.innerHTML = `
        <label>Notas (1.0 - 7.0) y %:</label><br>
        <input type="number" min="1" max="7" step="0.1" class="nota"> x 
        <input type="number" min="0" max="100" class="peso"> %<br>
        <input type="number" min="1" max="7" step="0.1" class="nota"> x 
        <input type="number" min="0" max="100" class="peso"> %<br>
        <input type="number" min="1" max="7" step="0.1" class="nota"> x 
        <input type="number" min="0" max="100" class="peso"> %<br>
        <button onclick="calcularPromedio(this)">Calcular promedio</button>
        <div class="promedio"></div>
      `;

      div.appendChild(notasDiv);
      div.onclick = () => toggleRamo(div, r.creditos);
      box.appendChild(div);
    });
    contenedor.appendChild(box);
  }
  actualizarBloqueos();
}

function toggleRamo(el, creditosRamo) {
  if (el.classList.contains("bloqueado")) return;

  const nombre = el.dataset.nombre;
  const notasDiv = el.querySelector(".notas");

  if (el.classList.contains("aprobado")) {
    el.classList.remove("aprobado");
    aprobados.delete(nombre);
    creditos -= creditosRamo;
    if (notasDiv) notasDiv.style.display = "none";
  } else {
    el.classList.add("aprobado");
    aprobados.add(nombre);
    creditos += creditosRamo;
    if (notasDiv) notasDiv.style.display = "block";
  }

  document.getElementById("creditos-aprobados").textContent = creditos;
  actualizarBloqueos();
}

function actualizarBloqueos() {
  document.querySelectorAll(".ramo").forEach(ramo => {
    const nombre = ramo.dataset.nombre;
    const prereq = ramo.dataset.prerreq?.split(",") || [];
    const cumplidos = prereq.every(p => aprobados.has(p));
    const reqCred = parseInt(ramo.dataset.prerreqCreditos || "0");
    const cumpleCred = creditos >= reqCred;

    if (cumplidos && cumpleCred) {
      ramo.classList.remove("bloqueado");
    } else if (!aprobados.has(nombre)) {
      ramo.classList.add("bloqueado");
      ramo.classList.remove("aprobado");
      ramo.querySelector(".notas").style.display = "none";
    }
  });
}

function calcularPromedio(btn) {
  const container = btn.parentElement;
  const notas = container.querySelectorAll(".nota");
  const pesos = container.querySelectorAll(".peso");
  let total = 0, suma = 0;

  for (let i = 0; i < notas.length; i++) {
    const n = parseFloat(notas[i].value);
    const p = parseFloat(pesos[i].value);
    if (!isNaN(n) && !isNaN(p)) {
      suma += n * (p / 100);
      total += p;
    }
  }

  const resultado = container.querySelector(".promedio");
  if (total === 100) {
    resultado.textContent = `Promedio final: ${suma.toFixed(2)}`;
  } else {
    resultado.textContent = "El % total debe ser 100%.";
  }
}

document.addEventListener("DOMContentLoaded", renderMalla);
