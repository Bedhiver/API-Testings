var personModel = require('../models/personModel.js');

/**
 * personController.js
 *
 * @description :: Server-side logic for managing persons.
 */
module.exports = {

    /**
     * personController.list()
     */
    list: function (req, res) {
        personModel.find(function (err, persons) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting person.',
                    error: err
                });
            }
            return res.json(persons);
        });
    },

    /**
     * personController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        personModel.findOne({_id: id}, function (err, person) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting person.',
                    error: err
                });
            }
            if (!person) {
                return res.status(404).json({
                    message: 'No such person'
                });
            }
            return res.json(person);
        });
    },

    /**
     * personController.create()
     */
    create: function (req, res) {
        var person = new personModel({
			name : req.body.name,
			age : req.body.age

        });

        person.save(function (err, person) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating person',
                    error: err
                });
            }
            return res.status(201).json(person);
        });
    },

    /**
     * personController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        personModel.findOne({_id: id}, function (err, person) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting person',
                    error: err
                });
            }
            if (!person) {
                return res.status(404).json({
                    message: 'No such person'
                });
            }

            person.name = req.body.name ? req.body.name : person.name;
			person.age = req.body.age ? req.body.age : person.age;
			
            person.save(function (err, person) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating person.',
                        error: err
                    });
                }

                return res.json(person);
            });
        });
    },

    /**
     * personController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        personModel.findByIdAndRemove(id, function (err, person) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the person.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
