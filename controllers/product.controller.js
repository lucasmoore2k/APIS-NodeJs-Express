import productService from "../services/product.service.js";

async function createProductInfo(req,res,next) {
    try {
        let productInfo = req.body;
        if (!productInfo.productId){
            throw new Error("Product ID é obrigatorio!")
        }
        productInfo = await productService.saveProductInfo(productInfo);
        res.end();
    }catch(err) {
        next(err)
    }
}

async function updateProductInfo(req,res,next) {
    try {
        let productInfo = req.body;
        if (!productInfo.productId){
            throw new Error("Product ID é obrigatorio!")
        }
        productInfo = await productService.updateProductInfo(productInfo);
        res.end();
    }catch(err) {
        next(err)
    }
}

async function getProductInfo(req,res,next) {
    try{
        let productId = req.params.id;
        let productInfo = await productService.getProductInfo(productId)
        res.send(productInfo);
    }catch(err) {
        next(err)
    }
}

async function createReview(req,res,next){
    try{
        let params = req.body;
        await productService.createReview(params.productId,params.review)
        res.end();
    }catch(err) {
        next(err)
    }
}

async function deleteReview(req,res,next){
    try{
        let params = req.params;
        await productService.deleteReview(params.id,params.index)
        res.end();
    }catch(err) {
        next(err)
    }
}

async function findAll(req,res,next) {
    try {
        res.send(await productService.findAll())
    }catch(err){
        next(err)
    }
}

async function deleteProductInfo(req,res,next) {
    try{
        let productId = req.params.id;
        await productService.deleteProductInfo(productId)
        res.end()
    }catch(err){
        next(err)
    }
}

export default {
    createProductInfo,
    updateProductInfo,
    getProductInfo,
    createReview,
    deleteReview,
    findAll,
    deleteProductInfo
}