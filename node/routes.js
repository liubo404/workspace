app.get('/users/register', userRoutes.showRegistrationForm);
app.port('/users/register', userRouters.createUser);

app.get('/users/login', userRoutes.showLoginForm);
app.post('/users/login', userRouters.createSession);