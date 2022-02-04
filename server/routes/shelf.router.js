const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const query = `SELECT * FROM "item";`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.error('GET failed', err);
      res.sendStatus(500)
    })

});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  const query = `
  INSERT INTO "item" ( "description", "image_url")
  VALUES
 ( $1, $2);`;
  const queryParams = [
    req.body.description, req.body.image_url
  ];

  pool.query(query, queryParams)
  .then( result => {
    res.sendStatus(201);
  }).catch(err => {
    console.error(err);
    res.sendStatus(500);
  })

});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  const query = `
  DELETE from "item"
  WHERE "item"."id" = $1;`;
  
  const queryParams = [
    req.params.id
  ]
  pool.query(query, queryParams)
    .then( result => {
      res.sendStatus(201);
    }).catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
