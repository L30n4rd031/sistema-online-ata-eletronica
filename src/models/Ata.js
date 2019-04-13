const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AtaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    require: true,
  },
  endTime: {
    type: String,
    require: true,
  },
  place: {
    type: String,
    required: true
  },
  participants: {
    type: Array,
    required: true
  },
  schedules: {
    type: Array,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    defaul: Date.now
  }

});

AtaSchema.plugin(mongoosePaginate);

mongoose.model('Ata', AtaSchema);
