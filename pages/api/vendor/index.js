import dbConnect from '../../../utils/dbConnect'
import Vendor from '../../../models/Vendor'

dbConnect();

const vendorDb = async (req, res) => {
    const { method } = req

    switch (method) {
        case "GET":
            try {
                const vendors = await Vendor.find({}, { '_id': 0 });

                res.status(200).json({ success: true, data: vendors })
            } catch (err) {
                res.status(400).json({ success: false })
            }
            break;
        case "POST":
            try {
                const vendor = await Vendor.create(req.body);
                res.status(200).json({ success: true, data: vendor })
            } catch (err) {
                res.status(400).json({ success: false })

            }
            break;
        case "DELETE":
            try {
                await Vendor.find(req.body).remove().exec()
                res.status(200).json({ success: true })
            } catch (err) { }
            break;

        default:
            break;
    }
}

export default vendorDb
