const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'É preciso preencher o email 📧.'],
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Formato de email inválido 😢.'],
        unique: [true, 'Ué, esse email já está em uso 🤔.'],
        maxlength: [50, 'Email deve ter no máximo 50 digitos.']
    },
    password: {
        type: String,
        required: [true, 'Sem uma senha não vai dar não 🤔.']
    },
    displayName: {
        type: String,
        required: [true, 'Faltou o nome, camarada 😜.'],
        maxlength: [30, 'Mais que 30 digitos no nome quebra meu layout, poxa 😇.']
    },
    slug: {
        type: String,
        slug: "displayName",
        unique: true
    },
    description: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'author', 'user']
    },
    favorites: [{
        type : ObjectId,
        ref: 'Vaga'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('User', UserSchema)