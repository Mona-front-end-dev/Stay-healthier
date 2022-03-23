const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  experience: [
    {
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
          type: Boolean,
          default: false
      },
      description: {
          type: String
      }
    },
  ],
  social: {
    youtube: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    }
  },
  date: {
      type: Date,
      default:Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);


