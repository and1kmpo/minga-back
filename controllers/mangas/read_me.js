import Manga from '../../models/Manga.js';


export default async (req, res, next) => {
    

console.log('-------------------------------- ', req)

    try {
        let author = req.author._id;
        let all = await Manga.find({
          author_id: author,
        });

        if(all.length > 0) {
            return res.status(200).json({
                success: true,
                response: all,
                message: 'Mangas found successfully'
            })
        }else{
            return res.status(404).json({
                success: false,
                response: null,
                message: 'not found mangas'
            })
        }

    } catch (error) {
        next(error)
        console.log(error);
    }

}
