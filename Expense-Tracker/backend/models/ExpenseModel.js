const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        mazLength: 20,
        trim: true
    },
    type: {
        type: String,
        default: 'income'
    },
    date: {
        type: Date,
        requiered: true,
        trim: true,
    },
    category: {
        type: String,
        requiered: true,
        trim: true,
    },
    description: {
        type: String,
        requiered: true,
        maxLength: 20,
        trim: true,
    },
}, {timestamps: true} );

module.exports = mongoose.model('Expense', ExpenseSchema);