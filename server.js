import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3900;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'dist')));

// Ruta comodín para servir index.html en rutas no reconocidas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', './dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
