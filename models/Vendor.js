const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    vendorName: String,
    bankName: String,
    bankAccNo: String,
    address: String,
    address2: String,
    city: String,
    country: String,
    zipcode: String,
})

module.exports = mongoose.models.Vendor || mongoose.model('Vendor', vendorSchema)