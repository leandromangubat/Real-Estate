const router = require('express').Router;
// const {} = require('../../models'); import for sale db in models
// const withAuth = require('../../utils/auth'); users can post/delete so long as they are logged in


router.get('/', async(req, res)=>{
    // find all for rent
    try{
        // const forRent = await ForRent.finall();
        res.json(forRent);
    } catch(err){
        // req,status(500).json({message:'server error'})
    }
});

router.get(':id', async(req,res)=>{
    // find for rent posting by id
    try{
        // const forRent = await ForRent.findByPk(req.params.id);
        res.json(forRent);
    } catch(err){
        // req,status(500).json({message:'server error'})
    }
});

router.post('/',withAuth, async(req,res)=>{
    try{
        const newRentListing = await ForRent.create({
            // insert model/db parameters that need to be created here
        });
        res.status(200).json(newRentListing);
    } catch(err){
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async(req,res)=>{
    try{
        const rentListingData = await ForRent.destroy({
            // insert model/db parameters that need to be deleted here
        });
        if(!rentListingData){
            res.status(404).json({mesage: 'No listing with this id found'});
            return;
        }
        res.status(200).json(rentListingData);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;