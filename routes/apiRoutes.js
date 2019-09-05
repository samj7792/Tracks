const router = require("express").Router();
const Track = require("../models/track");

router.get("/api/track", (req, res) => {
  Track.find({})
    .then(tracks => res.json(tracks))
    .catch(e => res.status(404).json(e));
});

router.get("/api/track/:id", (req, res) => {
  const id = req.params.id;

  Track.findById(id)
    .then(track => res.json(track))
    .catch(e => res.status(404).json(e));
});

router.post("/api/track", (req, res) => {
  const trackData = req.body;

  Track.create(trackData)
    .then(result => res.json(result))
    .catch(e => {
      console.log(e);
      res.sendStatus(500);
    });
});

router.put("/api/track/:id", (req, res) => {
  const id = req.params.id;

  Track.findOneAndUpdate({ _id: id }, { $set: req.body })
    .then(tracks => res.json(tracks))
    .catch(e => res.status(404).json(err));
});

router.delete("/api/track/:id", (req, res) => {
  const id = req.params.id;

  Track.remove({ _id: id }).then(track =>
    res.json(track).catch(e => res.status(404).json(e))
  );
});

module.exports = router;
