import { connect } from './mondo.db.js';
import ProductInfoSchema from '../schemas/productInfo.schema.js';

async function createProductInfo(productInfo) {
    try {
        const mongoose = await connect();
        const ProductInfo = mongoose.model('ProductInfo', ProductInfoSchema);
        productInfo = new ProductInfo(productInfo);
        await productInfo.save();
    }catch(err) {
        throw err;
    }
}

async function updateProductInfo(productInfo){
    try {
        const mongoose = await connect();
        const ProductInfo = mongoose.model('ProductInfo', ProductInfoSchema);
        await ProductInfo.findOneandUpdate({ productId: productInfo.productId }, productInfo)
    }catch(err) {
        throw err;
    }
}

async function getProductInfo(productId) {
    try {
        const mongoose = await connect();
        const ProductInfo = mongoose.model('ProductInfo', ProductInfoSchema);
        const query =  ProductInfo.findOne({ productId })
        await query.exec();
    } catch (err) {
        throw err;
    } 
}


async function createReview(productId, review){
    const client = getClient();
    try {
        await client.connect();
        let productInfo = await getProductInfo(productId);
        productInfo.reviews.push(review)
        await updateProductInfo(productInfo)
    } catch (err) {
        throw err;
    } 
}

async function deleteReview(productId, index){
    const client = getClient();
    try{
        await client.connect();
        let productInfo = await getProductInfo(productId);
        productInfo.reviews.splice(index,1)
        await updateProductInfo(productInfo)
    }catch(err){
        throw err;
    }
}

async function findAll(){
    try{
        const mongoose = await connect();
        const ProductInfo = mongoose.model('ProductInfo', ProductInfoSchema);
        await ProductInfo.find({});
    }catch(err){
        throw err
    }
}


async function deleteProductInfo(productId){
    const client = getClient();
    try{
        const mongoose = await connect();
        const ProductInfo = mongoose.model('ProductInfo', ProductInfoSchema);
        await ProductInfo.deleteOne({ productId })
    }catch(err){
        throw err
    }
}


export default { createProductInfo,updateProductInfo, getProductInfo, createReview, deleteReview, findAll, deleteProductInfo };