
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/serviceRoutes');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/healthcare_services', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));
  
app.use(cors());
app.use(bodyParser.json());

app.use('/api/services', serviceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});