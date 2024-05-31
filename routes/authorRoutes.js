const express = require('express');

const {getPublicPlaylist,publicPlaylist,getPlaylist,createAuthor,createPlaylist,getAuthor,getallArticles,getArticlesbyID,getAuthorbyId,getAllAuthors,createArticles,getArticles,updateAuthor} = require('../controllers/authorController');
const auth = require('../middle/auth');
const authorRouter = express.Router();

authorRouter.get('/getPublicPlaylist',getPublicPlaylist);
authorRouter.post('/createPlaylist',auth,createPlaylist);
authorRouter.post('/publicPlaylist',auth,publicPlaylist);
authorRouter.get('/getPlaylist',auth,getPlaylist);
authorRouter.get('/', auth,getAuthor);
authorRouter.get('/getAuthorbyId/:id',getAuthorbyId);


authorRouter.get('/getArticlesbyID/:id',getArticlesbyID);
authorRouter.get('/getallArticles',getallArticles);
authorRouter.get('/getAllAuthors',getAllAuthors);
authorRouter.post('/create',auth,createAuthor);
authorRouter.post('/update',auth,updateAuthor);
authorRouter.post('/createArticles',auth,createArticles);
authorRouter.get('/articles',auth,getArticles);

module.exports = authorRouter