import services from "../../../data/services";

export default function handler(req, res) {
    const { id } = req.query;
    const [service] = services.filter((filter) => filter.id === Number(id))
    if (!service) { 
        res.status(400).json({
            msg: "no se encontro este servicio"
           
        })
         return;
    }
    
    res.json(service);
}
