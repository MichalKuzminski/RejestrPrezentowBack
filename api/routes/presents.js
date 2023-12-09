const express = require('express');

const router = express.Router();
const PresentsController = require('../controllers/presents');

router.get('/', PresentsController.presents_get_all);

router.post('/', PresentsController.presents_add_new);

router.get('/:id', PresentsController.present_get_by_id);

router.put('/:id', PresentsController.present_change);

router.delete('/:id', PresentsController.present_delete);

module.exports = router;
