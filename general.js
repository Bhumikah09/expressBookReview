const axios = require('axios');

const BASE_URL = "http://localhost:5000";

async function getAllBooks() {
    try {
        const res = await axios.get(`${BASE_URL}/`);
        return res.data;
    } catch (error) {
        return "Error fetching books";
    }
}

async function getBookByISBN(isbn) {
    try {
        const res = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        return res.data;
    } catch (error) {
        return "ISBN not found";
    }
}

async function getBooksByAuthor(author) {
    try {
        const res = await axios.get(`${BASE_URL}/author/${author}`);
        return res.data;
    } catch (error) {
        return "Author not found";
    }
}

async function getBooksByTitle(title) {
    try {
        const res = await axios.get(`${BASE_URL}/title/${title}`);
        return res.data;
    } catch (error) {
        return "Title not found";
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};