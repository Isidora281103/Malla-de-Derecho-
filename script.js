body {
  background-color: #e5a3b0; /* Rosado oscuro */
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
}

h1 {
  margin-top: 20px;
  font-size: 2em;
}

.creditos-total {
  font-weight: bold;
  margin-bottom: 20px;
}

#contenedor-malla {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.semestre {
  background-color: #f9dce2; /* rosado pastel */
  border: 2px solid #d48ea1;
  padding: 10px;
  border-radius: 15px;
  width: 300px;
}

.semestre h2 {
  color: #611f3f;
  margin-top: 0;
}

.ramo {
  background-color: #f3aebb; /* rosado medio */
  padding: 10px;
  border: 1px solid #b35b7a;
  margin: 8px 0;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;
}

.ramo.aprobado {
  background-color: #caa3e8; /* morado pastel */
  text-decoration: line-through;
}

.ramo.bloqueado {
  background-color: #555;
  color: #ccc;
  cursor: not-allowed;
}

.notas {
  display: none;
  text-align: left;
  font-size: 0.9em;
  margin-top: 5px;
}

.notas input {
  width: 40px;
}

.promedio {
  font-weight: bold;
  margin-top: 5px;
}
