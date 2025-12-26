const express = require('express');

require('dotenv').config({ path: '.env' });
const MEXICAN_PNM_URL = process.env.MEXICAN_PNM_URL;

const router = express.Router();

//
// Mexican PNM / for Mexican PNM Integration
//
router.get('/', async function(req, res){
    res.status(200)
    res.send(`Mexican PNM Webhook successfully running`)  
});

//
// POST / for Mexican PNM Integration
//
router.post('/', async function(req, res){
    try {
        if (req.query){
            const { DNIS } = req.query;
            if (DNIS) {
                console.log (`Receive NNP Request for DNIS ${DNIS}`);
                            
                //
                // Get the DNIS information from Mexican PNM
                //
                let number_information = await getNPPInformation(DNIS);
                console.log("number_information: " + number_information.class_of_service);
                
                //
                // Send the response (200 + JSON)
                //
                res.status(200).json(number_information);
                
            }
        
    
        } else {
            response = { message: 'Unauthorized request', status: 401 }
            console.log(response.message)

            res.status(response.status)
            res.json(response)
        }
    }
    catch (error) {
        console.error("Error processing request:", error);
        res.sendStatus(500).send("Internal Server Error");
    }
    
});

//
// Get Hubspots Contact Id by phone
//
async function getNPPInformation(phone){
    try{


    } catch (error) {
        console.error("Error fetching contact ID:", error);
        return null;
    }
}


module.exports = router;