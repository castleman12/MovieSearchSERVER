const validateSession = require('../../../../javaScriptLibrary/05-Node-Server/server/middleware/validate-session');

const router = require('express').Router();
const Watchlist = require('../db').import('../models/watchlist');

router.use(require('../middleware/headers'))

router.post('/', (req, res)=> {
  const addMovie = {
    title: req.body.title,
    posterPath: req.body.posterPath,
    movieDBid: req.body.movieDBid,
    releaseDate: req.body.releaseDate,
    userId: req.user.id,
    watched: req.body.watched
  }
  Watchlist.create(addMovie)
    .then(movie => res.status(200).json(`${movie.title} has been added to your watchlist!`))
    .catch(err => res.status(500).json({ error: err}))
})

//** GET ENTRIES BY USERID **/
router.get("/user", validateSession, (req, res) => {
    Watchlist.findAll({
        where: { userId: req.user.id}
    })
    .then(movie => res.status(200).json(movie))
    .catch(err => res.status(500).json({ error: err }))
})


//** DELETE **/
router.delete("watchlist/delete/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id}};

    watchlist.destroy(query)
    .then(() => res.status(200).json({ message: "Movie removed!"}))
    .catch((err) => res.status(500).json({ error: err}))

})


module.exports = router;