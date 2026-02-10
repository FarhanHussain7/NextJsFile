const { USER_NAME, PASSWORD } = process.env;
export const mongoURI = `mongodb+srv://${USER_NAME}:${PASSWORD}@productdb.wdijry3.mongodb.net/ProductDB?retryWrites=true&w=majority`;