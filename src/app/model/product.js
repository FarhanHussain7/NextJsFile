import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);