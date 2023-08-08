import Manga from "../../models/Manga.js";

export default async (req, res, next) => {
  try {
    let author = req.author._id;
    console.log("AUTHOR DE MANGAS:", author);
    const mangasAuthor = await Manga.find({
      author_id: author,
    });

    if (mangasAuthor.length < 8 && mangasAuthor.length >= 4) {
      let all = await Manga.find({
        author_id: author,
      }).sort({ createdAt: 1, createdAt: -1 });
      
      return res.status(200).json({
        success: true,
        response: { all },
        message: "Mangas is Found! ",
      });
    } else if (mangasAuthor.length >= 8) {
      let news = await Manga.find({
        author_id: author,
      })
        .sort({ createdAt: -1 })
        .limit(4);

      let old = await Manga.find({
        author_id: author,
      })
        .sort({ createdAt: 1 })
        .limit(4);

      return res.status(200).json({
        success: true,
        response: { news, old },
        message: "Mangas is Found! ",
      });
    } else {
      let logo = "https://yt3.googleusercontent.com/ytc/AOPolaQ5xAlOPzQVq9HAsp9kRzX9ULX-xMuLsrogINNERw=s176-c-k-c0x00ffffff-no-rj"
      return res.status(200).json({
        success: true,
        response: { logo },
        message: "Mangas is Found! ",
      });
    }
  } catch (error) {
    next(error);
  }
};
