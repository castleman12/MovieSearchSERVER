const router = require('express').Router();
const Watchlist = require('../db').import('../models/watchlist');

router.use(require('../middleware/headers'))

router.post('/', (req, res)=> {
  const addMovie = {
    title: req.body.title,
    posterPath: req.body.posterPath,
    movieDBid: req.body.movieDBid,
    releaseDate: req.body.releaseDate,
    userId: req.body.userId,
    watched: req.body.watched
  }
  Watchlist.create(addMovie)
    .then(movie => res.status(200).json(`${movie.title} has been added to your watchlist!`))
    .catch(err => res.status(500).json({ error: err}))
})


module.exports = router;