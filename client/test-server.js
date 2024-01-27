const express = require('express');
const app = express();
const port = 5010;

const cors = require('cors')
app.use(express.json());

app.use(cors());

app.post('/offers', (req, res) => {
    setTimeout(() => {
        console.log(req.body)
        const {width} = req.body
        const widthValue = parseInt(width)

        if (!isNaN(width)) {
            console.log(width);
            if (width < 100) {
                res.json([
                    { 
                        company: "DHL",
                        offer: "Small Size Offer A", 
                        details: "Offer A for items with width less than 100.",
                        price: 30 
                    },
                    { 
                        company: "DHL",
                        offer: "Small Size Offer B", 
                        details: "Offer B for items with width less than 100.",
                        price: 35 
                    },
                    { 
                        company: "DHL",
                        offer: "Small Size Offer C", 
                        details: "Offer C for items with width less than 100.",
                        price: 40 
                    }
                ]);
            } else {
                res.json([
                    { 
                        company: "DHL",
                        offer: "Standard Offer A", 
                        details: "Standard Offer A for items of any size.",
                        price: 80 
                    },
                    { 
                        company: "DHL",
                        offer: "Standard Offer B", 
                        details: "Standard Offer B for items of any size.",
                        price: 85 
                    }
                ]);
            }
        } else {
            res.status(400).json({ error: "Invalid width parameter" });
        }
    }, 2000);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

