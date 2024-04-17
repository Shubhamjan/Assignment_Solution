const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


app.use('/api/data', require('./routes/dataRoutes'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
