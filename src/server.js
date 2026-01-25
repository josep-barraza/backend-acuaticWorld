import app from './index.js';

console.log('🚀 server.js SÍ se está ejecutando');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
