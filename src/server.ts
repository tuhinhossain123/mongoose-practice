import app from './app';
import confing from './app/confing';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(confing.database_url as string);
    app.listen(confing.port, () => {
      console.log(`Example app listening on port ${confing.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
