import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {

  res.status(201).json({
    ok: true,
    msg: 'Todo bien'
  });

});

app.listen(port, () => {
  console.log(`Corriendo en el puerto: ${ port }`);
})