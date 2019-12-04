const Provider = require("../models/provider.model");

exports.providerById = (req, res, next, id) => {
    Provider.findById(id).exec((err, provider) => {
        if (err || !provider) {
            return res.status(400).json({
                error: "Provider not found"
            });
        }
        req.provider = provider;
        next();
    });
};
exports.read = (req, res) => {
    req.provider.photo = undefined;
    return res.json(req.provider);
};

exports.photo = (req, res, next) => {
    if (req.provider.photo.data) {
        res.set("Content-Type", req.provider.photo.contentType);
        return res.send(req.provider.photo.data);
    }
    next();
};