const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const DailyDataSechema = new mongoose.Schema({
  MS: {
    type: String,
    trim: true,
    required: true
  },
  HSD: {
    type: String,
    trim: true,
    required: true
  },
  MS_DIP: {
    type: String,
    trim: true,
    required: true
  },
  Volume_in_MS: {
    type: String,
    trim: true
  },
  ABS_Volume_in_MS: {
    type: String,
    trim: true
  },
  HSD_DIP1: {
    type: String,
    trim: true,
    required: true
  },
  HSD_DIP2: {
    type: String,
    trim: true,
    required: true
  },
  Volume_in_HSD_DIP1: {
    type: String,
    trim: true
  },
  Volume_in_HSD_DIP2: {
    type: String,
    trim: true
  },
  ABS_Volume_in_HSD_DIP1: {
    type: String,
    trim: true
  },
  ABS_Volume_in_HSD_DIP2: {
    type: String,
    trim: true
  },
  Closing_Reading_MS_Dispenser_1_Nozle_1: {
    type: String,
    trim: true,
  },
  Closing_Reading_MS_Dispenser_1_Nozle_2: {
    type: String,
    trim: true,
  },
  Testing_MS_Dispenser_1_Nozle_1: {
    type: String,
    trim: true,
  },
  Testing_MS_Dispenser_1_Nozle_2: {
    type: String,
    trim: true,
  },
  Closing_Reading_HSD_Dispenser_1_Nozle_1: {
    type: String,
    trim: true,
  },
  Closing_Reading_HSD_Dispenser_1_Nozle_2: {
    type: String,
    trim: true,
  },
  Closing_Reading_HSD_Dispenser_2_Nozle_1: {
    type: String,
    trim: true,
  },
  Closing_Reading_HSD_Dispenser_2_Nozle_2: {
    type: String,
    trim: true,
  },
  Closing_Reading_HSD_Dispenser_3_Nozle_1: {
    type: String,
    trim: true,
  },
  Closing_Reading_HSD_Dispenser_3_Nozle_2: {
    type: String,
    trim: true,
  },
  Testing_HSD_Dispenser_1_Nozle_1: {
    type: String,
    trim: true,
  },
  Testing_HSD_Dispenser_1_Nozle_2: {
    type: String,
    trim: true,
  },
  Testing_HSD_Dispenser_2_Nozle_1: {
    type: String,
    trim: true,
  },
  Testing_HSD_Dispenser_2_Nozle_2: {
    type: String,
    trim: true,
  },
  Testing_HSD_Dispenser_3_Nozle_1: {
    type: String,
    trim: true,
  },
  Testing_HSD_Dispenser_3_Nozle_2: {
    type: String,
    trim: true,
  },
  previous: {
    type: String
  },
  next: {
    type: String
  },
  date: {
    type: Date
  }
}, {
  timestamps: true
})
const dailyData = mongoose.model('DailyData', DailyDataSechema)

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is not valid');
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be positive');
      }
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
    validate(value) {
      if (value.includes('password')) {
        throw new Error('Please don\'t use password word in password');
      }
      if (value.length < 7) {
        throw new Error('Please use password of minimum 7 letters');
      }
    }
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }],
  avatar: {
    type: Buffer
  }
}, {
  timestamps: true
})

userSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()

  delete userObject.password
  delete userObject.tokens
  delete userObject.avatar

  return userObject
}

userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

userSchema.statics.findByCredential = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('Unable to login')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Unable to login ')
  }

  return user
}

// Hash the plaintext password before saving
userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

// Delete user task when user is removed
userSchema.pre('remove', async function (next) {
  const user = this
  //   await Task.deleteMany({owner: user._id})
  next()
})

const User = mongoose.model('User', userSchema);

module.exports = { dailyData, User }