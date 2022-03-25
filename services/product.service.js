import productinfoRepository from "../repositories/productinfo.repository.js";

async function saveProductInfo(productInfo) {
    await productinfoRepository.createProductInfo(productInfo);
}

async function updateProductInfo(productInfo) {
    await productinfoRepository.updateProductInfo(productInfo)
}

async function getProductInfo(productId){
    let info = await productinfoRepository.getProductInfo(parseInt(productId));
    return info;
}

async function createReview(productId, review){
    await productinfoRepository.createReview(parseInt(productId), review)
}

async function deleteReview(productId, index){
    await productinfoRepository.deleteReview(parseInt(productId), index);
}

async function findAll(){
    return await productinfoRepository.findAll()
}

async function deleteProductInfo(productId){
    await productinfoRepository.deleteProductInfo(parseInt(productId))
}

export default {
    saveProductInfo,
    updateProductInfo,
    getProductInfo,
    createReview,
    deleteReview,
    findAll,
    deleteProductInfo
}