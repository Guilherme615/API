const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let users = [];
let todos = [];
let posts = [];
let comments = [];
let albums = [];
let photos = [];

// Middleware
app.use(bodyParser.json());

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo à API JSON Placeholder!');
});

// CRUD for Users
app.get('/users', (req, res) => res.json(users));
app.post('/users', (req, res) => {
    const user = { id: users.length + 1, ...req.body };
    users.push(user);
    res.status(201).json(user);
});
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return res.status(404).send('User not found');
    users[index] = { id, ...req.body };
    res.json(users[index]);
});
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.status(204).send();
});

// CRUD for ToDos
app.get('/todos', (req, res) => res.json(todos));
app.post('/todos', (req, res) => {
    const todo = { id: todos.length + 1, ...req.body };
    todos.push(todo);
    res.status(201).json(todo);
});
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) return res.status(404).send('ToDo not found');
    todos[index] = { id, ...req.body };
    res.json(todos[index]);
});
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).send();
});

// CRUD for Posts
app.get('/posts', (req, res) => res.json(posts));
app.post('/posts', (req, res) => {
    const post = { id: posts.length + 1, ...req.body };
    posts.push(post);
    res.status(201).json(post);
});
app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(post => post.id === id);
    if (index === -1) return res.status(404).send('Post not found');
    posts[index] = { id, ...req.body };
    res.json(posts[index]);
});
app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== id);
    res.status(204).send();
});

// CRUD for Comments
app.get('/comments', (req, res) => res.json(comments));
app.post('/comments', (req, res) => {
    const comment = { id: comments.length + 1, ...req.body };
    comments.push(comment);
    res.status(201).json(comment);
});
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = comments.findIndex(comment => comment.id === id);
    if (index === -1) return res.status(404).send('Comment not found');
    comments[index] = { id, ...req.body };
    res.json(comments[index]);
});
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    comments = comments.filter(comment => comment.id !== id);
    res.status(204).send();
});

// CRUD for Albums
app.get('/albums', (req, res) => res.json(albums));
app.post('/albums', (req, res) => {
    const album = { id: albums.length + 1, ...req.body };
    albums.push(album);
    res.status(201).json(album);
});
app.put('/albums/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = albums.findIndex(album => album.id === id);
    if (index === -1) return res.status(404).send('Album not found');
    albums[index] = { id, ...req.body };
    res.json(albums[index]);
});
app.delete('/albums/:id', (req, res) => {
    const id = parseInt(req.params.id);
    albums = albums.filter(album => album.id !== id);
    res.status(204).send();
});

// CRUD for Photos
app.get('/photos', (req, res) => res.json(photos));
app.post('/photos', (req, res) => {
    const photo = { id: photos.length + 1, ...req.body };
    photos.push(photo);
    res.status(201).json(photo);
});
app.put('/photos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = photos.findIndex(photo => photo.id === id);
    if (index === -1) return res.status(404).send('Photo not found');
    photos[index] = { id, ...req.body };
    res.json(photos[index]);
});
app.delete('/photos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    photos = photos.filter(photo => photo.id !== id);
    res.status(204).send();
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
