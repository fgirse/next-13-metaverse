import MongoClient from 'mongodb';

const uri = 'mongodb+srv://fgirse:Basel2022@cluster0.mongodb.net/test?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default client;
