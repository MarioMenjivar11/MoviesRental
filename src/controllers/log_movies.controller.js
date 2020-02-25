import log_movies from '../models/log_movies';

export async function get_log_movies(req, res){
    const list_log_movies = await log_movies.findAll();
    try{
        res.json({
        data: list_log_movies
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });    
    } 
};

//Function to create a movie
export async function create_log_movie(req, res){
    try{
        const { title, rental_price, sale_price, id_movie } = req.body;
        let new_log_movie = await log_movies.create({
            title,
            rental_price,
            sale_price,
            id_movie
        },{
            fields: ['title', 'rental_price', 'sale_price', 'id_movie']
        });
        if (new_log_movie){
            return res.json({
                message: 'Log movie created successfully',
                data: new_log_movie
            });
        }
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
};

//Function to get a movie 
export async function get_one_log_movie(req, res){
    try{
        const { id } = req.params;
        const log_movie = await log_movies.findOne({
            where: {
                id
            }
        });
        res.json({
            data: log_movie
        });
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
};

//Function to delete movies
export async function delete_log_movie(req, res){
    try{
        const { id } = req.params;
        const delete_row_count = await log_movies.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Log Movie deleted successfully',
            count: delete_row_count
        });
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
};

//Function to update movies
export async function update_log_movies(req, res){
    const { id } = req.params;
    const { title, rental_price, sale_price, id_movie } = req.body;

    const list_log_movies = await log_movies.findAll({
        attributes: ['id','title','rental_price','sale_price','id_movie'],
        where:{
            id
        }
    });
    if (list_log_movies.length >0 ){
        list_log_movies.forEach(async log_movies => {
            await log_movies.update({
                id,
                title,
                rental_price,
                sale_price,
                id_movie
            });
        })
    }

    return res.json({
        message: 'Log Movie updated successfully',
        data: list_log_movies
    });
}