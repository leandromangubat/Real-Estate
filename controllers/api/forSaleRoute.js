const router = require('express').Router;
// const {} = require('../../models'); import for sale db in models
// const withAuth = require('../../utils/auth'); users can post/delete so long as they are logged in


router.get('/', async(req, res)=>{
    // find all for sale
    try{
        // const forSale = await ForSale.finall();
        res.json(forSale);
    } catch(err){
        // req,status(500).json({message:'server error'})
    }
});

router.get('/:id', async(req,res)=>{
    // find for sale posting by id
    try{
        // const forSale = await ForSale.findByPk(req.params.id);
        res.json(forSale);
    } catch(err){
        // req,status(500).json({message:'server error'})
    }
});

router.post('/',withAuth, async(req,res)=>{
    try{
        const newSaleListing = await ForSale.create({
            // insert model/db parameters that need to be created here
        });
        res.status(200).json(newSaleListing);
    } catch(err){
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async(req,res)=>{
    try{
        const saleListingData = await ForSale.destroy({
            // insert model/db parameters that need to be deleted here
        });
        if(!saleListingData){
            res.status(404).json({mesage: 'No listing with this id found'});
            return;
        }
        res.status(200).json(saleListingData);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;

