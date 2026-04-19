const axios = require('axios');

const BASE_URL = "http://localhost:5000";

// Get all books
async function getAllBooks() {
    const res = await axios.get(`${BASE_URL}/`);
    return res.data;
}

// Get book by ISBN
async function getBookByISBN(isbn) {
    const res = await axios.get(`${BASE_URL}/isbn/${isbn}`);
    return res.data;
}

// Get books by author
async function getBooksByAuthor(author) {
    const res = await axios.get(`${BASE_URL}/author/${author}`);
    return res.data;
}

// Get books by title
async function getBooksByTitle(title) {
    const res = await axios.get(`${BASE_URL}/title/${title}`);
    return res.data;
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};