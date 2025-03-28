const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'api/view'));

app.use('/static', express.static(path.join(__dirname, 'api/view')));
 
app.use(express.json());

const viewRoutes = require(path.resolve(__dirname, 'api', 'routes', 'viewRoutes'));
const viewDashboard = require(path.resolve(__dirname, 'api', 'routes', 'viewDashboard'));
const appRoutes = require(path.resolve(__dirname, 'api', 'routes', 'appRoutes'));

app.use(viewRoutes); 
app.use(viewDashboard); 
app.use(appRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
