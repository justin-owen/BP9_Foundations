const houseDatabase = require('./db.json')
let currentId = 4


module.exports = {
    getHouses:(req, res)=>{
        res.status(200).send(houseDatabase)
    },
    deleteHouse:(req, res)=>{
        const id = +req.params.id

        for (let i = 0; i < houseDatabase.length; i++) {
            if (houseDatabase[i].id === id) {
                houseDatabase.splice(i, 1)
                res.status(200).send(houseDatabase)
                return
            }
            res.status(400).send('house not found')
        }
    },
    createHouse:(req, res)=>{
        const {id, address, price, imageURL} = req.body

        houseDatabase.push({
            id: currentId,
            address: address,
            price: price,
            imageURL: imageURL
        })
        currentId++

        res.status(200).send(houseDatabase)
    },
    updateHouse:(req, res)=>{
        const id = +req.params.id
        const type = req.body.type
        console.log(id)
        console.log(type)
        let houseIndex;
        for (let i = 0; i < houseDatabase.length; i++) {
            if (houseDatabase[i].id === id) {
                houseIndex = i
            }
        }
         if (type === 'plus'){
            houseDatabase[houseIndex].price += 10000
            res.status(200).send(houseDatabase)
         }else if (type === 'minus'){
            houseDatabase[houseIndex].price -= 10000
            res.status(200).send(houseDatabase)
        }else{
            res.status(400).send('invalid type constraint')
        }
        
    }
}